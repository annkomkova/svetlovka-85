const DATA = {
  title: '40-е',
  event:
    'В 1942 году в Колонном зале Дома Союзов состоялась московская премьера Седьмой («Ленинградской») симфонии Дмитрия Шостаковича, ставшая символом стойкости.',
  fact: 'В апреле 1941 года состоялось открытие «Городской юношеской библиотеки № 3» (будущей Центральной городской молодежной библиотеки им. М.А. Светлова). Новый формат работы — «громкие читки». Библиотекари читали вслух, проводили беседы о боевых эпизодах войны, рассказывали о новых книгах, читали главы из них.',
  books: {
    book1: {
      author: 'А. Твардовский,',
      name: '«Василий Теркин»',
      cite: 'Переправа, переправа!<br>Берег левый, берег правый,<br>Снег шершавый, кромка льда…<br>Кому память, кому слава,<br>Кому темная вода, —<br>Ни приметы, ни следа.'
    },
    book2: {
      author: 'М. Светлов,',
      name: '«Гренада»',
      cite: 'Мы ехали шагом, Мы мчались в боях<br> И «Яблочко»-песню<br> Держали в зубах.<br> Ах, песенку эту<br> Доныне хранит<br> Трава молодая —<br> Степной малахит.'
    }
  },
  films: [
    {
      frame: 'images/40s/film-1.png',
      info: 'Афиша к к/ф «Два бойца» (1943), реж. Л. Луков, кинокомпания «Ташкентская киностудия», худ. А., Н. Клементьевы'
    },
    {
      frame: 'images/40s/film-2.png',
      info: 'Афиша к к/ф «Свинарка и пастух» (1941), реж. И. Пырьев, киностудия «Мосфильм», худ. Б. Зеленский'
    }
  ],
  images: [
    {
      image: ['images/40s/image-1.png', 'images/40s/image-2.png'],
      info: 'Источ. Заимствования: https://leningradstories.ru/blokada-art/simphoniya7 автор неизвестен'
    },
    {
      image: ['images/40s/image-3.png'],
      info: 'Архив ГБУК г. Москвы «ЦГМБ им. М.А. Светлова», автор неизвестен.'
    },
    {
      image: ['images/40s/image-4.png'],
      info: 'Источ. Заимствования: https://mosday.ru/photos/?1_565 автор неизвестен'
    },
    {
      image: ['images/40s/image-5.png', 'images/40s/image-6.png'],
      info: 'Источ. Заимствования: https://kulturamgo.ru/press-tsentr/news/16686 автор неизвестен'
    }
  ]
}

/* =============================================
     КОНФИГУРАЦИЯ ТАЙЛОВ
     Метки и позиции для каждого ключа данных
     ============================================= */
const TILE_CONFIG = {
  event: { label: 'Событие', sub: 'событие', num: '01' },
  fact: { label: 'Факт', sub: 'история', num: '02' },
  books: { label: 'Книги', sub: 'литература', num: '03' },
  films: { label: 'Фильмы', sub: 'кинематограф', num: '04' },
  images: { label: 'Образы', sub: 'фотография', num: '05' }
}

/* =============================================
     ПОЗИЦИОНИРОВАНИЕ ТАЙЛОВ
     Процентные позиции (адаптируются к экрану)
     ============================================= */
const TILE_POSITIONS = [
  { left: '8%', top: '12%' },
  { left: '58%', top: '8%' },
  { left: '28%', top: '42%' },
  { left: '6%', top: '58%' },
  { left: '62%', top: '52%' }
]

/* =============================================
     СОСТОЯНИЕ ПРИЛОЖЕНИЯ
     ============================================= */
const state = {
  currentSection: null,
  lightboxImages: [],
  lightboxIdx: 0,
  isTransitioning: false
}

/* =============================================
     ИНИЦИАЛИЗАЦИЯ ТАЙЛОВ
     ============================================= */
function initTiles() {
  const container = document.getElementById('tiles-container')
  const keys = Object.keys(TILE_CONFIG)

  keys.forEach((key, i) => {
    const cfg = TILE_CONFIG[key]
    const pos = TILE_POSITIONS[i]

    const tile = document.createElement('div')
    tile.className = 'tile'
    tile.setAttribute('data-key', key)
    tile.setAttribute('role', 'listitem')
    tile.setAttribute('tabindex', '0')
    tile.setAttribute('aria-label', `Раздел: ${cfg.label}`)
    tile.style.left = pos.left
    tile.style.top = pos.top

    tile.innerHTML = `
        <span class="tile-number" aria-hidden="true">${cfg.num}</span>
        <div class="tile-label">${cfg.label}</div>
        <div class="tile-sub" aria-hidden="true">${cfg.sub}</div>
      `

    tile.addEventListener('click', () => onTileClick(key, tile))
    tile.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onTileClick(key, tile)
      }
    })

    container.appendChild(tile)
  })
}

/* =============================================
     ОБРАБОТЧИК КЛИКА НА ТАЙЛ
     ============================================= */
function onTileClick(key, clickedTile) {
  if (state.isTransitioning) return
  state.isTransitioning = true

  const allTiles = document.querySelectorAll('.tile')

  // Скрываем остальные тайлы с задержкой stagger
  allTiles.forEach((tile, i) => {
    if (tile !== clickedTile) {
      setTimeout(() => tile.classList.add('fade-out'), i * 60)
    }
  })

  // Выделяем выбранный тайл
  clickedTile.classList.add('selected')
  clickedTile.style.transform = 'translateX(-20px) scale(0.92)'
  clickedTile.style.opacity = '0.6'

  // Открываем панель через небольшую паузу
  setTimeout(() => {
    openPanel(key)
    // Полностью скрываем выбранный тайл
    setTimeout(() => {
      clickedTile.style.opacity = '0'
    }, 100)
  }, 380)
}

/* =============================================
     ОТКРЫТИЕ ПАНЕЛИ КОНТЕНТА
     ============================================= */
function openPanel(key) {
  state.currentSection = key
  const cfg = TILE_CONFIG[key]

  // Обновляем заголовки
  document.getElementById('breadcrumb-section').textContent = cfg.label
  document.getElementById('panel-title-el').textContent = cfg.label

  // Блокируем скролл body
  document.body.style.overflow = 'hidden'

  // Рендерим контент
  const body = document.getElementById('panel-body')
  body.innerHTML = ''
  renderContent(key, body)

  // Показываем панель
  const panel = document.getElementById('content-panel')
  panel.classList.add('visible')

  // Запускаем анимации контента
  requestAnimationFrame(() => {
    setTimeout(() => animateContent(key), 100)
    state.isTransitioning = false
  })
}

/* =============================================
     ЗАКРЫТИЕ ПАНЕЛИ / ВОЗВРАТ
     ============================================= */
function closePanel() {
  if (state.isTransitioning) return
  state.isTransitioning = true

  const panel = document.getElementById('content-panel')
  panel.classList.remove('visible')

  const allTiles = document.querySelectorAll('.tile')

  setTimeout(() => {
    // Восстанавливаем все тайлы
    allTiles.forEach((tile, i) => {
      setTimeout(() => {
        tile.classList.remove('fade-out', 'selected', 'hidden')
        tile.style.transform = ''
        tile.style.opacity = ''
      }, i * 60)
    })

    document.body.style.overflow = ''
    state.currentSection = null

    setTimeout(() => {
      state.isTransitioning = false
    }, 400)
  }, 300)
}

/* =============================================
     РЕНДЕР КОНТЕНТА ПО ТИПУ
     ============================================= */
function renderContent(key, container) {
  switch (key) {
    case 'event':
    case 'fact':
      renderText(DATA[key], container)
      break
    case 'books':
      renderBooks(DATA.books, container)
      break
    case 'films':
      renderFilms(DATA.films, container)
      break
    case 'images':
      renderImages(DATA.images, container)
      break
  }
}

function renderText(text, container) {
  const wrap = document.createElement('div')
  wrap.className = 'text-content'

  // Декоративная кавычка
  const deco = document.createElement('div')
  deco.className = 'text-decoration'
  deco.setAttribute('aria-hidden', 'true')
  deco.textContent = '«'
  wrap.appendChild(deco)

  // ЕДИНЫЙ абзац (без разбивки)
  const paragraph = document.createElement('p')
  paragraph.className = 'text-line-inner'
  paragraph.innerHTML = text // оставляем <br>, если есть
  wrap.appendChild(paragraph)

  container.appendChild(wrap)

  // Запускаем анимацию появления
  requestAnimationFrame(() => {
    paragraph.classList.add('is-visible')
  })
}

/* ===== РЕНДЕР: BOOKS ===== */
function renderBooks(books, container) {
  const grid = document.createElement('div')
  grid.className = 'books-grid'

  Object.values(books).forEach((book) => {
    const card = document.createElement('article')
    card.className = 'book-card'
    card.setAttribute('aria-label', `Книга: ${book.name} — ${book.author}`)

    card.innerHTML = `
        <div class="book-author">${book.author}</div>
        <div class="book-name">${book.name}</div>
        <div class="book-cite" aria-label="Цитата">${book.cite}</div>
      `

    grid.appendChild(card)
  })

  container.appendChild(grid)
}

/* ===== РЕНДЕР: FILMS ===== */
function renderFilms(films, container) {
  const grid = document.createElement('div')
  grid.className = 'films-grid'

  films.forEach((film, i) => {
    const card = document.createElement('figure')
    card.className = 'film-card'
    card.setAttribute('tabindex', '0')
    card.setAttribute('role', 'img')
    card.setAttribute('aria-label', film.info)

    // Изображение или заглушка
    const imgEl = document.createElement('img')
    imgEl.src = film.frame
    imgEl.alt = film.info
    imgEl.className = 'film-img'
    imgEl.onerror = function () {
      // Показываем заглушку при ошибке загрузки
      this.style.display = 'none'
      const ph = document.createElement('div')
      ph.className = 'film-placeholder'
      ph.innerHTML = `<span class="film-placeholder-icon">АФИША ${String(i + 1).padStart(2, '0')}</span>`
      card.prepend(ph)
    }

    const overlay = document.createElement('div')
    overlay.className = 'film-overlay'
    overlay.setAttribute('aria-hidden', 'true')

    const info = document.createElement('figcaption')
    info.className = 'film-info'
    info.textContent = film.info
    overlay.appendChild(info)

    card.appendChild(imgEl)
    card.appendChild(overlay)
    grid.appendChild(card)
  })

  container.appendChild(grid)
}

/* ===== РЕНДЕР: IMAGES ===== */
function renderImages(images, container) {
  const grid = document.createElement('div')
  grid.className = 'images-grid'

  images.forEach((group, gi) => {
    const groupEl = document.createElement('div')
    groupEl.className = 'image-group'

    const inner = document.createElement('div')
    inner.className = 'image-group-inner'

    group.image.forEach((src, ii) => {
      const wrap = document.createElement('div')
      wrap.className = 'gallery-img-wrap'
      wrap.setAttribute('tabindex', '0')
      wrap.setAttribute('role', 'button')
      wrap.setAttribute('aria-label', `Открыть изображение: ${group.info}`)

      const img = document.createElement('img')
      img.src = src
      img.alt = group.info
      img.className = 'gallery-img'
      img.onerror = function () {
        this.style.display = 'none'
        const ph = document.createElement('div')
        ph.className = 'gallery-img-placeholder'
        ph.innerHTML = `<span class="film-placeholder-icon">ФОТО ${gi + 1}.${ii + 1}</span>`
        wrap.prepend(ph)
      }

      const hoverIcon = document.createElement('div')
      hoverIcon.className = 'gallery-hover-icon'
      hoverIcon.setAttribute('aria-hidden', 'true')
      hoverIcon.textContent = '↗ ОТКРЫТЬ'

      wrap.appendChild(img)
      wrap.appendChild(hoverIcon)

      // Lightbox: все изображения группы
      wrap.addEventListener('click', () =>
        openLightbox(group.image, ii, group.info)
      )
      wrap.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openLightbox(group.image, ii, group.info)
        }
      })

      inner.appendChild(wrap)
    })

    // Подпись к группе
    const caption = document.createElement('p')
    caption.className = 'image-caption'
    caption.textContent = group.info

    groupEl.appendChild(inner)
    groupEl.appendChild(caption)
    grid.appendChild(groupEl)
  })

  container.appendChild(grid)
}

/* =============================================
     АНИМАЦИИ КОНТЕНТА (после рендера)
     ============================================= */
function animateContent(key) {
  switch (key) {
    case 'event':
    case 'fact':
      animateTextLines()
      break
    case 'books':
      animateBooks()
      break
    case 'films':
      animateFilms()
      break
    case 'images':
      animateImages()
      break
  }
}

/* Stagger-анимация строк текста */
function animateTextLines() {
  const lines = document.querySelectorAll('.text-line-inner')
  lines.forEach((line, i) => {
    setTimeout(() => line.classList.add('revealed'), 120 + i * 130)
  })
}

/* Книги появляются с задержкой + эффект печатной машинки для цитат */
function animateBooks() {
  const cards = document.querySelectorAll('.book-card')
  cards.forEach((card, i) => {
    setTimeout(
      () => {
        card.classList.add('revealed')
        // Запускаем typewriter для цитаты через паузу
        setTimeout(() => {
          const cite = card.querySelector('.book-cite')
          if (cite) typewriterEffect(cite)
        }, 400)
      },
      200 + i * 250
    )
  })
}

/* Эффект печатной машинки */
function typewriterEffect(el) {
  const html = el.innerHTML
  // Сохраняем теги br
  const parts = html.split(/(<br\s*\/?>)/gi)
  el.innerHTML = ''

  let delay = 0
  parts.forEach((part) => {
    if (/^<br/i.test(part)) {
      // Вставляем br с задержкой
      setTimeout(() => {
        const br = document.createElement('br')
        el.appendChild(br)
      }, delay)
      delay += 40
    } else {
      // Посимвольная вставка
      ;[...part].forEach((char) => {
        setTimeout(() => {
          const span = document.createElement('span')
          span.className = 'typewriter-char'
          span.textContent = char
          span.style.animationDelay = '0ms'
          el.appendChild(span)
          requestAnimationFrame(() => (span.style.opacity = '1'))
        }, delay)
        // Переменная скорость: медленнее на знаках препинания
        delay += /[.,!?—]/.test(char) ? 60 : /\s/.test(char) ? 20 : 28
      })
    }
  })
}

/* Фильмы появляются с задержкой */
function animateFilms() {
  const cards = document.querySelectorAll('.film-card')
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('revealed'), 150 + i * 200)
  })
}

/* Группы изображений появляются */
function animateImages() {
  const groups = document.querySelectorAll('.image-group')
  groups.forEach((g, i) => {
    setTimeout(() => g.classList.add('revealed'), 100 + i * 150)
  })
}

/* =============================================
     LIGHTBOX
     ============================================= */
function openLightbox(images, startIdx, caption) {
  state.lightboxImages = images
  state.lightboxIdx = startIdx

  document.body.style.overflow = 'hidden'
  updateLightboxImage()

  document.getElementById('lightbox-caption').textContent = caption
  document.getElementById('lightbox').classList.add('open')
  document.getElementById('lightbox-close').focus()
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open')
  document.body.style.overflow = 'hidden' // панель всё ещё открыта
}

function updateLightboxImage() {
  const img = document.getElementById('lightbox-img')
  const images = state.lightboxImages
  const idx = state.lightboxIdx

  img.src = images[idx]
  img.alt = `Изображение ${idx + 1} из ${images.length}`

  document.getElementById('lb-prev').disabled = idx === 0
  document.getElementById('lb-next').disabled = idx === images.length - 1
}

document
  .getElementById('lightbox-close')
  .addEventListener('click', closeLightbox)

document.getElementById('lb-prev').addEventListener('click', () => {
  if (state.lightboxIdx > 0) {
    state.lightboxIdx--
    updateLightboxImage()
  }
})

document.getElementById('lb-next').addEventListener('click', () => {
  if (state.lightboxIdx < state.lightboxImages.length - 1) {
    state.lightboxIdx++
    updateLightboxImage()
  }
})

// Закрытие по клику на фон
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox')) closeLightbox()
})

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (document.getElementById('lightbox').classList.contains('open')) {
      closeLightbox()
    } else if (state.currentSection) {
      closePanel()
    }
  }
  // Навигация в lightbox стрелками
  if (document.getElementById('lightbox').classList.contains('open')) {
    if (e.key === 'ArrowLeft') document.getElementById('lb-prev').click()
    if (e.key === 'ArrowRight') document.getElementById('lb-next').click()
  }
})

/* Кнопка "назад" */
document.getElementById('back-btn').addEventListener('click', closePanel)

/* =============================================
     ПАРАЛЛАКС — лёгкое смещение тайлов при движении мыши/тача
     ============================================= */
let mouseX = 0,
  mouseY = 0
let rafId = null

function applyParallax() {
  const tiles = document.querySelectorAll('.tile:not(.fade-out):not(.selected)')
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const dx = (mouseX - centerX) / centerX
  const dy = (mouseY - centerY) / centerY

  tiles.forEach((tile, i) => {
    const depth = 0.4 + (i % 3) * 0.2 // разная глубина параллакса
    // Параллакс добавляется поверх floating-анимации через CSS var
    tile.style.setProperty('--px', `${dx * depth * 12}px`)
    tile.style.setProperty('--py', `${dy * depth * 10}px`)
    // Вместо изменения transform (которая перебивает анимацию)
    // используем margin как прокси
    tile.style.marginLeft = `calc(${dx * depth * 8}px)`
    tile.style.marginTop = `calc(${dy * depth * 6}px)`
  })

  rafId = null
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  if (!rafId && !state.currentSection) {
    rafId = requestAnimationFrame(applyParallax)
  }
})

// Touch-параллакс
document.addEventListener(
  'touchmove',
  (e) => {
    if (e.touches.length > 0) {
      mouseX = e.touches[0].clientX
      mouseY = e.touches[0].clientY
      if (!rafId && !state.currentSection) {
        rafId = requestAnimationFrame(applyParallax)
      }
    }
  },
  { passive: true }
)

/* =============================================
     ЗАПУСК
     ============================================= */
initTiles()
function initPage() {
  let title = document.querySelector('#intro-title').slice(0, 2)
}
initPage()
