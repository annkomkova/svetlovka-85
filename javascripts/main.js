const pages = [
  {
    title: '40-е',
    event: {
      text: 'В 1942 году в Колонном зале Дома Союзов состоялась московская премьера Седьмой («Ленинградской») симфонии Дмитрия Шостаковича, ставшая символом стойкости.',
      images: {
        image: ['images/40s/image-1.png', 'images/40s/image-2.png'],
        info: 'Источ. Заимствования: https://leningradstories.ru/blokada-art/simphoniya7 автор неизвестен'
      }
    },
    fact: 'В апреле 1941 года состоялось открытие «Городской юношеской библиотеки № 3» (будущей Центральной городской молодежной библиотеки им. М.А. Светлова). Новый формат работы — «громкие читки». Библиотекари читали вслух, проводили беседы о боевых эпизодах войны, рассказывали о новых книгах, читали главы из них.',
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
        image: ['images/40s/image-3.png'],
        info: 'Архив ГБУК г. Москвы «ЦГМБ им. М.А. Светлова», автор неизвестен.'
      },
      {
        image: ['images/40s/image-4.png'],
        info: 'Источ. Заимствования: https://mosday.ru/photos/?1_565 автор неизвестен'
      },
      {
        image: ['images/40s/image-5.png', 'images/40s/image-6.png'],
        info: 'Источ. Заимствования: https://kulturamgo.ru/press-tsentr/news/16686-17-iyunya-1903-goda-rodilsya-mikhail-svetlov-poet-uchastnik-grazhdanskoj-i-velikoj-otechestvennoj-vojny-2 автор неизвестен'
      }
    ]
  },
  {
    title: '50-е',
    event: {
      text: 'В 1957 году прошел VI Всемирный фестиваль молодежи и студентов. Светловка участвовала под лозунгом «За мир и дружбу между народами».',
      images: {
        image: [
          'images/50s/image-1.png',
          'images/50s/image-2.png',
          'images/50s/image-3.png',
          'images/50s/image-4.png',
          'images/50s/image-5.png'
        ],
        info: 'Архив ГБУК г. Москвы «ЦГМБ им. М.А. Светлова», автор неизвестен.'
      }
      // {
      //   image: ['images/50s/image-6.png'],
      //   info: 'Источ. заимствования: https://pastvu.com/p/618201 автор неизвестен'
      // }
    },
    fact: 'Светловка становится самой популярной библиотекой среди московской молодежи и одновременно методическим центром для юношеских библиотек по всему СССР.',
    books: {
      book1: {
        author: 'В. Лифшиц',
        name: '«Песенка о Москве»',
        cite: 'Если улицы Москвы вытянуть в одну, <br>То по ней пройдете вы через всю страну, <br>Если лестницы Москвы все сложить в одну, <br>То по ней взберетесь вы прямо на Луну. <br>Вот она какая  —  большая-пребольшая, <br>Приветлива со всеми, во всех сердцах жива, <br>Любимая, родная красавица Москва.'
      }
    },
    films: [
      {
        frame: 'images/50s/film-1.png',
        info: 'Кадр из к/ф «"Сто грамм" для храбрости» (1976), реж. Борис Бушмелёв, Анатолий Маркелов, Георгий (Егор) Щукин, киностудия «Мосфильм»'
      },
      {
        frame: 'images/50s/image-3.png',
        info: 'Кадр из к/ф «Железный занавес» (1995), реж. Савва Кулиш, киностудия «Роскомкино», Фонд Ролана Быкова'
      },
      {
        frame: 'images/50s/film-2.png',
        info: 'Кадры из к/ф «Летят журавли» (1957), реж. М.Калатозов, киностудия «Мосфильм»'
      },
      {
        frame: 'images/50s/film-3.png',
        info: 'Кадры из к/ф «Летят журавли» (1957), реж. М.Калатозов, киностудия «Мосфильм»'
      },
      {
        frame: 'images/50s/film-4.png',
        info: 'Кадр из к/ф «Карнавальная ночь» (1956), реж. Э.Рязанов, киностудия «Мосфильм»'
      },
      {
        frame: 'images/50s/film-5.png',
        info: 'Кадр из к/ф «Судьба человека фильм (1959), реж. С.Бондарчук, киностудия «Мосфильм»»'
      }
    ],
    images: [
      {
        image: ['images/50s/image-7.png'],
        info: 'Источ. заимстования: https://pastvu.com/p/961856 автор С. В. Кошелев'
      },
      {
        image: [
          'images/50s/image-10.png',
          'images/50s/image-11.png',
          'images/50s/image-12.png',
          'images/50s/image-13.png',
          'images/50s/image-14.png',
          'images/50s/image-15.png',
          'images/50s/image-16.png'
        ],
        info: 'Архив ГБУК г. Москвы «ЦГМБ им. М.А. Светлова», автор неизвестен.'
      },
      {
        image: ['images/50s/image-8.png'],
        info: 'Источ. заимстования: https://pastvu.com/p1252747  автор И. Акуленко'
      },
      {
        image: ['images/50s/image-9.png'],
        info: 'Источ. Заимстования: https://pastvu.com/p/1631649 автор Дмитрий Сорокин'
      }
    ]
  },
  {
    title: '60-е',
    event: {
      text: 'В 1969 году Сергей Бондарчук получил премию «Оскар» за фильм «Война и мир» в номинации «Лучший фильм на иностранном языке».',
      images: [
        {
          image: 'images/60s/event-1.png',
          info: 'Источ. Заимствования: https://www.kino-teatr.ru/kino/history/y1967/162/foto/239/ автор неизвестен'
        },
        {
          image: 'images/60s/event-2.png',
          info: 'Афиша к к/ф «Война и мир» (1967),  реж. С. Бондарчук, киностудия «Мосфильм»худ. неизвестен'
        }
      ]
    },
    fact: '5 октября 1965 года Постановлением Совета министров РСФСР «Городской юношеской библиотеке № 3» присвоили имя поэта Михаила Светлова.',
    books: {
      book1: {
        author: '',
        name: '',
        cite: ''
      }
    },
    films: [
      {
        frame: 'images/60s/film-3.png',
        info: 'Кадр из к/ф «Я шагаю по Москве» (1964), реж. Н. Михалков, киностудия «Мосфильм»'
      },
      {
        frame: 'images/60s/film-2.png',
        info: 'Кадр из к/ф «Война и мир» (1967), реж. С. Бондарчук, киностудия «Мосфильм»'
      },
      {
        frame: 'images/60s/film-1.png',
        info: 'Кадр из к/ф «Иваново детство» (1962), реж. А. Тарковский, киностудия «Мосфильм»'
      },
      {
        frame: 'images/60s/film-4.png',
        info: 'Кадр из к/ф «Надзор за безопасностью движения» (1955), реж. неизвестен, киностудия «Центрнаучфильм»'
      }
    ],
    images: [
      {
        image: 'images/60s/book-1.png',
        info: 'Переплёт второго издания повести «Страна багровых туч» (Детгиз, 1960). Рисунок на обложке И. Ильинского'
      },
      {
        image: 'images/60s/book-2.png',
        info: 'Переплёт первого издания повести «Один день Ивана Денисовича» (Советский писатель, 1963)'
      },
      { image: 'images/60s/book-3.png', info: 'Переплёт повести «Студенты»' },

      {
        image: 'images/60s/image2.png',
        info: 'Источ. Заимстования: https://pastvu.com/p/1933253 автор Сергей Александрович Антонов'
      },
      {
        image: 'images/60s/image1.png',
        info: 'Источ. Заимствования: https://www.net-film.ru/photo-176030/ автор Николай Рахманов'
      },
      {
        image: 'images/60s/image-3.png',
        info: 'Источ. Заимствования: https://pastvu.com/p/105871   автор В.В. Андреев'
      },
      {
        image: 'images/60s/image-4.png',
        info: 'Источ. Заимствования: журнал «Архитектура и строительство Москвы» (1957) Выпуск №6'
      }
    ]
  },
  {
    title: '70-е',
    event: {
      text: 'Александр Солженицын получил Нобелевскую премию по литературе 8 октября 1970 года «за нравственную силу, с которой он следовал непреложным традициям русской литературы».',
      images: {
        image: 'https://historyrussia.org/images/18022021_1.jpg',
        info: 'Источ. заимствования: https://historyrussia.org/sobytiya/slovo-pravdy-k-50-letiyu-prisuzhdeniya-nobelevskoj-premii-aleksandru-solzhenitsynu.html автор неизвестен'
      }
    },
    fact: 'В 1970-е годы Центральная городская молодежная библиотека имени М.А. Светлова стала ключевым профориентационным центром, активно участвовала в создании Университетов культуры и лекториев, проводила музыкальные вечера в Колонном зале Дома Союзов.',
    books: {
      book1: {
        author: 'В. Ерофеев',
        name: '«Москва — Петушки»',
        cite: 'Наше завтра светлее, чем наше вчера и наше сегодня. Но кто поручится, что наше послезавтра не будет хуже нашего позавчера?'
      }
    },
    films: [
      {
        frame: 'images/70s/image-5.png',
        info: 'Кадр из к/ф «Ирония судьбы или с легким паром» (1975), реж. Э.Рязанов, киностудия «Мосфильм»'
      },
      {
        frame: 'images/70s/image-6.png',
        info: 'Кадр из телефильма «Семнадцать мгновений весны» (1973), реж. Т.Лиознова, киностудия «Киностудия имени М. Горького»'
      },
      {
        frame: 'images/70s/image-7.png',
        info: 'Афиша к к/ф «Иван Васильевич меняет профессию» (1973), реж. Л.Гайдай, киностудия «Мосфильм», худож. А. Евсеев и П. Золотаревский'
      }
    ],
    images: [
      {
        image: 'images/70s/image-1.png',
        info: 'Источ. Заимстования: Журнал «Городское хозяйство Москвы» (1963) Выпуск №10'
      },
      {
        image: 'images/70s/image-2.png',
        info: 'Источ. Заимстования: https://pastvu.com/p/358230  автор неизвестен'
      },
      {
        image: 'images/70s/image-3.png',
        info: 'Источ. Заимстования: https://pastvu.com/p/263429  автор В.В. Андреев'
      },
      {
        image: 'images/70s/image-4.png',
        info: 'Источ. Заимстования: https://pastvu.com/p/1184734 автор Andrea Luppi, Otto Pohl'
      }
    ]
  },
  {
    title: '80-е',
    event: {
      text: 'В 1980 году в Москве прошли XXII Олимпийские игры — первые в истории, проведенные на территории Восточной Европы.',
      images: [
        {
          image: 'images/80s/image-3.png',
          info: 'Источ. Заимстования: https://lv.baltnews.com/authors/20200722/1024039843/Vokrug-Olimpiady-80-kipeli-politicheskie-strasti-vsesoyuznogo-urovnyV.html  автор Валерий Шустов'
        },
        {
          image: 'images/80s/image-4.png',
          info: 'Источ. Заимстования: https://amgabiblioteka.ru/?p=11468   автор неизвестен'
        }
      ]
    },
    fact: 'В 1981 году Светловка стала лауреатом премии Московского комсомола в области литературы и искусства.',
    books: {
      book1: {
        author: 'А. Рыбаков',
        name: '«Дети Арбата»',
        cite: 'Дети революции, они искренне считали, что отвлечение на личное — это предательство общественного.'
      },
      book2: {
        author: 'К. Булычев',
        name: '«Сто лет тому вперед»',
        cite: 'Человеку всегда хочется поделиться тайной. И чем тайна удивительнее и заветней, тем больше хочется…'
      }
    },
    films: [
      {
        frame: 'images/80s/image-1.png',
        info: 'Кадр из к/ф «Гонки по вертикали» (1982), реж. А. Муратов, «Киностудия имени Довженко», Творческое объединение «Луч»'
      },
      {
        frame: 'images/80s/image-5.png',
        info: 'Кадр из к/ф «Любовь и голуби» (1984), реж. В. Меньшов, киностудия «Мосфильм»'
      },
      {
        frame: 'images/80s/image-6.png',
        info: 'Кадр из к/ф «Покровские ворота» (1982), реж. М. Козаков, киностудия «Мосфильм»'
      }
    ],
    images: [
      {
        image: 'images/80s/image-2.png',
        info: 'Архив ГБУК г. Москвы «ЦГМБ им. М.А. Светлова», автор неизвестен.'
      }
    ]
  },
  {
    title: '90-е',
    event: {
      text: 'В 1993 году союзом театральных деятелей учреждена национальная театральная премия «Золотая Маска» как профессиональная награда за лучшие работы сезона.',
      images: {
        image: '',
        info: ''
      }
    },
    fact: 'В 1990-е Светловка переживала эпоху перемен вместе со всей страной. Из тихого убежища книг она постепенно превратилась в многофункциональный центр для молодежи. Эти изменения были бы немыслимы без появления в стенах библиотеки компьютерной техники и доступа в Интернет.',
    books: {
      book1: {
        author: 'В. Пелевин',
        name: '«Generation “П”»',
        cite: 'Мнения автора могут не совпадать с его точкой зрения.'
      },
      book2: {
        author: 'Л. Юзефович',
        name: '«Журавли и карлики»',
        cite: 'Люди больше похожи на свое время, чем на своих родителей.'
      }
    },
    films: [
      {
        frame: 'images/90s/film-1.png',
        info: 'Кадр из к/ф «Окно в Париж» (1993), реж. Ю.Мамин, кинокомпании: «Films du Bouloi» «Фонтан», «La Sept Cinema», «Троицкий мост»'
      },
      {
        frame: 'images/90s/film-2.png',
        info: 'Кадр из к/ф «Счастливые дни» (1991), реж. А. Балабанов, кинокомпания «Ленфильм»'
      },
      {
        frame: 'images/90s/film-3.png',
        info: 'Кадр из к/ф «Брат» (1997), реж. А. Балабанов, кинокомпания «СТВ»'
      },
      {
        frame: 'images/90s/film-4.png',
        info: 'Кадр из к/ф «Особенности национальной охоты» (1995), реж. А. Рогожкин, кинокомпания «Ленфильм»'
      },
      {
        frame: 'images/90s/film-5.png',
        info: 'Кадр из к/ф «Утомленные солнцем» (1994), реж. Н.Михалков, кинокомпании: «Студия ТРИТЭ», «Госкино России», «Русский клуб», «Camera One», «Canal+»'
      }
    ],
    images: [
      {
        image: [
          'images/90s/image-1.png',
          'images/90s/image-3.png',
          'images/90s/image-6.png',
          'images/90s/image-2.png',
          'images/90s/image-4.png'
        ],
        info: 'Архив ГБУК г. Москвы «ЦГМБ им. М.А. Светлова», автор неизвестен.'
      },
      {
        image: 'images/90s/image-5.png',
        info: 'Источ. Заимстования: https://pastvu.com/p/751119  автор А. Новиков'
      }
    ]
  },
  {
    title: '00-е',
    event: {
      text: 'В 2005 году в Москве проходит 1-ая биеналле современного искусства, где демонстрируется свыше 250 работ более 50 групп и отдельных художников.',
      images: {
        image: [
          'images/00s/event-1.png',
          'images/00s/event-2.png',
          'images/00s/event-3.png',
          'images/00s/event-4.png',
          'images/00s/event-5.png',
          'images/00s/event-6.png'
        ],
        info: 'Источ. Заимстования: http://www.artinfo.ru/ru/news/main/photo-moscow-biennale2005-2.htm  автор неизвестен'
      }
    },
    fact: 'Благодаря электронным каталогам библиотека перестала быть закрытой системой и смогла расширить свои возможности. К концу 2000-х у Светловки появился собственный сайт в Интернете.',
    books: {
      book1: {
        author: 'В. Маканин',
        name: '«Асан»',
        cite: 'Он умел скромничать. Как все люди с безграничным тщеславием.'
      },
      book2: {
        author: 'Т. Толстая',
        name: '«Кысь»',
        cite: 'Нет худшего врага, чем равнодушие! С молчаливого согласия равнодушных как раз и творятся все злодейства.'
      }
    },
    films: [
      {
        frame: 'images/00s/film1.png',
        info: 'Кадр из к/ф «Питер FM» (2006), реж. О. Бычков, кинокомпания «ПРОФИТ»'
      },
      {
        frame: 'images/00s/film2.png',
        info: 'Кадр из к/ф «Стиляги» (2008), реж. В. Тодоровский, киностудия «Беларусьфильм»'
      },
      {
        frame: 'images/00s/film3.png',
        info: 'Кадр из к/ф «Сестры» (2001), реж. С. Бодров-младший, кинокомпания «СТВ»'
      },
      {
        frame: 'images/00s/film4.png',
        info: 'Кадр из к/ф «Дневной дозор» (2005), реж. Т. Бекмамбетов, киностудии «Базелевс Продакшн» и «Таббак»'
      }
    ],
    images: [
      {
        image: 'images/00s/image-11.png',
        info: 'Источ. Заимстования: https://dkphoto.livejournal.com/125282.html   автор неизвестен'
      },
      {
        image: [
          'images/00s/image-1.png',
          'images/00s/image-2.png',
          'images/00s/image-3.png',
          'images/00s/image-4.png',
          'images/00s/image-9.png',
          'images/00s/image-10.png',
          'images/00s/image-5.png'
        ],
        info: 'Источ. Заимстования: https://rajon-pride.livejournal.com/139323.html автор неизвестен'
      },
      {
        image: [
          'images/00s/image-7.png',
          'images/00s/image-8.png',
          'images/00s/image-6.png'
        ],
        info: 'Источ. Заимстования: https://moscowchronology.ru/photo_2000s.html автор неизвестен'
      }
    ]
  },
  {
    title: '10-е',
    event: {
      text: 'В 2011 году открылась после масштабной реконструкции историческая сцена Большого театра. Театр вернулся в главное здание, где были восстановлены исторические интерьеры, улучшена акустика и расширено закулисное пространство. ',
      images: [
        {
          image: 'images/10s/image-2.png',
          info: 'Источ. Заимстования: https://drugoi.livejournal.com/3639615.html  автор РИА НОВОСТИ/Владимир Родионов'
        },
        {
          image: 'images/10s/image-1.png',
          info: 'Источ. Заимстования: https://ru.wikipedia.org/wiki/История_театра_в_России  автор неизвестен'
        }
      ]
    },
    fact: 'В 2019 году в Светловке состоялась первая фейл-конференция московских библиотек — нестандартный формат методического мероприятия, в рамках которого участники делятся неудачным опытом для профессионального роста.',
    books: {
      book1: {
        author: 'М. Степанова',
        name: '«Памяти памяти»',
        cite: 'Потребность в фиксации, стоящая за селфи (этим предельным воплощением веры в непостоянство), убеждена, что лицо сегодняшнего и завтрашнего дня бесконечно различны — и что развитие сводится к кинематографической дорожке, выложенной из тысяч моментальных отпечатков.'
      }
    },
    films: [
      {
        frame: 'images/10s/film-1.png',
        info: 'Кадр из к/ф «Дурак» (2014), реж. Ю. Быков, кинокомпания «ТПО „Рок“»'
      },
      {
        frame: 'images/10s/film-2.png',
        info: 'Кадр из к/ф «Дылда» (2019), реж. К. Балагов, кинокомпания «Нон-стоп продакшн» '
      }
    ],
    images: [
      {
        image: 'images/10s/image-7.png',
        info: 'Источ. Заимстования: https://mperspektiva.ru/topics/my-zdes-zhili-chem-zapomnitsya-moskva-desyatykh/  автор Сергей Киселев/АГН Москва '
      },
      {
        image: [
          'images/10s/image-4.png',
          'images/10s/image-8.png',
          'images/10s/image-3.png'
        ],
        info: 'Источ. Заимстования: https://gazetargub.ru/?p=4961 автор неизвестен'
      },
      {
        image: ['images/10s/image-5.png', 'images/10s/image-6.png'],
        info: 'Источ. Заимстования: https://mperspektiva.ru/topics/my-zdes-zhili-chem-zapomnitsya-moskva-desyatykh/  автор Андрей Никеричев/АГН Москв'
      }
    ]
  },
  {
    title: '20-е',
    event: {
      text: 'В 2023 году на ВДНХ открылась выставка-форум «Россия», объединившая экспозиции 89 регионов, федеральных ведомств и корпораций на площади 266 тысяч квадратных метров. За время работы событие посетили более 18,5 миллионов человек. В рамках форума состоялись сотни концертов, деловых мероприятий и фестивалей.',
      images: {
        image: 'images/20s/image-0.png',
        info: 'Источ. заимствования: https://ru.wikipedia.org/wiki/Россия_(выставка-форум) автор неизвестен'
      }
    },
    fact: 'Почти 10 лет Светловка является куратором и участником крупных московских проектов в сфере культуры, таких как «Красная площадь» и «Московская международная книжная ярмарка». А в 2025 году библиотека впервые провела свою программу на фестивале «Книга в городе» в рамках масштабного проекта «Лето в Москве» Департамента культуры г. Москвы.',
    books: {
      book1: {
        author: 'Н. Реньжина',
        name: '«Бабушка сказала сидеть тихо»',
        cite: 'Вот так живешь себе живешь, копишь-копишь, покупаешь-покупаешь, а потом всю свою жизнь в узелок в один собираешь.'
      },
      book2: {
        author: 'Э. Веркин',
        name: '«Сорока на виселице»,',
        cite: 'Задача литературы – запутать читателя, сообщить ему иллюзию причастности, обвести вокруг пальца. Для этого она и была придумана.'
      }
    },
    films: [
      {
        frame: 'images/20s/film-3.png',
        info: 'Кадр из к/ф «Разжимая кулаки» (2021), реж. К. Коваленко, кинокомпания «Нон-стоп продакшн»'
      },
      {
        frame: 'images/20s/film-1.png',
        info: 'Кадр из к/ф «Пророк. История Александра Пушкина» (2024), реж. Ф. Умаров, кинокомпания «Централ Партнершип»'
      },
      {
        frame: 'images/20s/film-2.png',
        info: 'Кадр из к/ф «Мастер и Маргарита» (2024), реж. М. Локшин, кинокомпания «Марс Медиа», «Амедиа Продакшн», «Профит»'
      }
    ],
    images: [
      {
        image: ['images/20s/image-4.png', 'images/20s/image-5.png'],
        info: 'Архив ГБУК г. Москвы «ЦГМБ им. М.А. Светлова», автор неизвестен.'
      },
      {
        image: [
          'images/20s/image-1.png',
          'images/20s/image-2.png',
          'images/20s/image-3.png'
        ],
        info: 'Источ. Заимстования: https://ges-2.org/about-house-of-culture  автор Глеб Леонов'
      }
    ]
  }
]

/* =============================================
     RESOLVE PAGE DATA
     Читает первые 2 символа из #hero-text-inner
     (например "40") и ищет совпадение по title в pages[].
     Если совпадение не найдено — берёт первый элемент.

     Как использовать на других страницах десятилетий:
     Просто измени содержимое #hero-text-inner в HTML:
       <span id="hero-text-inner">50<i>-е</i></span>
     — скрипт сам найдёт нужный объект данных.
     ============================================= */
function resolvePageData() {
  const heroEl = document.getElementById('hero-text-inner')
  if (!heroEl) return pages[0]

  // Берём только текстовые узлы (без дочерних тегов вроде <i>)
  // чтобы получить "40", "50", "60" и т.д.
  const rawText = Array.from(heroEl.childNodes)
    .filter((n) => n.nodeType === Node.TEXT_NODE)
    .map((n) => n.textContent.trim())
    .join('')

  // rawText = "40", ищем title, начинающийся с этих цифр
  const match = pages.find((p) => p.title.startsWith(rawText))
  return match || pages[0]
}

// DATA — единственная переменная, которую используют все рендеры.
// Менять её вручную не нужно: она разрешается автоматически из DOM.
const DATA = resolvePageData()

/* =============================================
     КОНФИГУРАЦИЯ ТАЙЛОВ
     Метки и позиции для каждого ключа данных
     ============================================= */
const TILE_CONFIG = {
  event: { label: 'Событие', sub: 'история', num: '01' },
  fact: { label: 'Факт', sub: 'о светловке', num: '02' },
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

  // Обновляем заголовки — breadcrumb берёт десятилетие из DATA.title
  document.getElementById('breadcrumb-section').textContent = cfg.label
  document.getElementById('panel-title-el').textContent = cfg.label
  // Обновляем первую часть breadcrumb, если шаблон это поддерживает
  const bcPrefix = document.querySelector('#panel-breadcrumb')
  if (bcPrefix) bcPrefix.childNodes[0].textContent = `${DATA.title} / `

  // Скрываем герой-текст
  document.getElementById('hero-text').classList.add('panel-open')

  // Блокируем скролл body
  document.body.classList.add('no-scroll')

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

    document.body.classList.remove('no-scroll')
    // Возвращаем герой-текст
    document.getElementById('hero-text').classList.remove('panel-open')
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
      renderEvent(DATA.event, container)
      break
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

// function renderEvent(event, container) {
//   // Если event — строка (старый формат) — рендерим как текст
//   // if (typeof event === 'string') {
//   //   renderText(event, container)
//   //   return
//   // }

//   // Новый формат: { text, images }
//   renderText(event.text, container)

//   // Блок изображений (если есть)
//   const imgData = event.images
//   // if (!imgData) return

//   const rawImg = imgData.image
//   const srcs = Array.isArray(rawImg)
//     ? rawImg.filter((s) => s && s.trim())
//     : rawImg && rawImg.trim()
//       ? [rawImg]
//       : []

//   if (srcs.length === 0 && !imgData.info) return

//   const block = document.createElement('div')
//   block.className = 'event-images'

//   const label = document.createElement('div')
//   label.className = 'event-images-label'
//   label.textContent = 'Иллюстрации'
//   label.setAttribute('aria-hidden', 'true')
//   block.appendChild(label)

//   const row = document.createElement('div')
//   row.className = 'event-images-row'

//   if (srcs.length === 0) {
//     if (imgData.info) {
//       const cap = document.createElement('p')
//       cap.style.cssText =
//         'font-family:"Courier Prime",monospace;font-size:10px;color:var(--gray-light);letter-spacing:0.05em;'
//       cap.textContent = imgData.info
//       block.appendChild(cap)
//     }
//   } else {
//     srcs.forEach((src, ii) => {
//       const wrap = document.createElement('div')
//       wrap.className = 'event-img-wrap'
//       wrap.setAttribute('tabindex', '0')
//       wrap.setAttribute('role', 'button')
//       wrap.setAttribute('aria-label', `Открыть: ${imgData.info}`)

//       const img = document.createElement('img')
//       img.src = src
//       img.alt = imgData.info
//       img.onerror = function () {
//         this.style.display = 'none'
//         const ph = document.createElement('div')
//         ph.className = 'event-img-placeholder'
//         ph.innerHTML = `<span class="film-placeholder-icon">ФОТО ${ii + 1}</span>`
//         wrap.prepend(ph)
//       }

//       const cap = document.createElement('div')
//       cap.className = 'event-img-caption'
//       cap.textContent = imgData.info

//       wrap.appendChild(img)
//       wrap.appendChild(cap)

//       wrap.addEventListener('click', () => openLightbox(srcs, ii, imgData.info))
//       wrap.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//           e.preventDefault()
//           openLightbox(srcs, ii, imgData.info)
//         }
//       })

//       row.appendChild(wrap)
//     })

//     block.appendChild(row)
//   }

//   container.appendChild(block)

//   requestAnimationFrame(() => {
//     setTimeout(() => {
//       block.classList.add('revealed')
//       block.querySelectorAll('.event-img-wrap').forEach((w, i) => {
//         setTimeout(() => w.classList.add('revealed'), 100 + i * 120)
//       })
//     }, 600)
//   })
// }

function renderEvent(event, container) {
  if (typeof event === 'string') {
    renderText(event, container)
    return
  }

  renderText(event.text, container)

  const raw = event.images
  if (!raw) return

  const groups = normalizeEventImages(raw)
  if (!groups.length) return

  const block = document.createElement('div')
  block.className = 'event-images'

  const labelEl = document.createElement('div')
  labelEl.className = 'event-images-label'
  labelEl.textContent = 'Иллюстрации'
  labelEl.setAttribute('aria-hidden', 'true')
  block.appendChild(labelEl)

  const row = document.createElement('div')
  row.className = 'event-images-row'

  groups.forEach(({ srcs, info }) => {
    if (srcs.length === 0) {
      if (info) {
        const cap = document.createElement('p')
        cap.style.cssText =
          'font-family:"Courier Prime",monospace;font-size:10px;color:var(--gray-light);letter-spacing:0.05em;margin-top:8px;'
        cap.textContent = info
        block.appendChild(cap)
      }
      return
    }

    srcs.forEach((src, ii) => {
      const wrap = document.createElement('div')
      wrap.className = 'event-img-wrap'
      wrap.setAttribute('tabindex', '0')
      wrap.setAttribute('role', 'button')
      wrap.setAttribute('aria-label', `Открыть: ${info}`)

      const img = document.createElement('img')
      img.src = src
      img.alt = info
      img.onerror = function () {
        this.style.display = 'none'
        const ph = document.createElement('div')
        ph.className = 'event-img-placeholder'
        ph.innerHTML = `<span class="film-placeholder-icon">ФОТО ${ii + 1}</span>`
        wrap.prepend(ph)
      }

      const cap = document.createElement('div')
      cap.className = 'event-img-caption'
      cap.textContent = info

      wrap.appendChild(img)
      wrap.appendChild(cap)

      wrap.addEventListener('click', () => openLightbox(srcs, ii, info))
      wrap.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openLightbox(srcs, ii, info)
        }
      })

      row.appendChild(wrap)
    })
  })

  block.appendChild(row)
  container.appendChild(block)

  requestAnimationFrame(() => {
    setTimeout(() => {
      block.classList.add('revealed')
      block.querySelectorAll('.event-img-wrap').forEach((w, i) => {
        setTimeout(() => w.classList.add('revealed'), 100 + i * 120)
      })
    }, 600)
  })
}

/* Нормализует event.images в массив групп { srcs, info }
 *
 * Вход:  объект { image, info }  ИЛИ  массив [ { image, info }, … ]
 * image внутри каждого объекта может быть строкой, массивом или пустым.
 * Выход: [ { srcs: string[], info: string }, … ]
 */
function normalizeEventImages(raw) {
  const list = Array.isArray(raw) ? raw : [raw]

  return list
    .map((item) => {
      const ri = item.image
      const srcs = Array.isArray(ri)
        ? ri.filter((s) => s && s.trim())
        : ri && ri.trim()
          ? [ri]
          : []

      return { srcs, info: item.info || '' }
    })
    .filter(({ srcs, info }) => srcs.length > 0 || info)
}

function renderText(text, container) {
  const wrap = document.createElement('div')
  wrap.className = 'text-content'

  const deco = document.createElement('div')
  deco.className = 'text-decoration'
  deco.setAttribute('aria-hidden', 'true')
  deco.textContent = '«'
  wrap.appendChild(deco)

  const lineWrap = document.createElement('div')
  lineWrap.className = 'text-line'
  lineWrap.innerHTML = text
  wrap.appendChild(lineWrap)

  container.appendChild(wrap)
}

// function renderBooks(books, container) {
//   const grid = document.createElement('div')
//   grid.className = 'books-grid'

//   // Фильтруем пустые записи (у некоторых десятилетий книг нет)
//   const validBooks = Object.values(books).filter((b) => b.name && b.name.trim())

//   if (validBooks.length === 0) {
//     const empty = document.createElement('p')
//     empty.style.cssText =
//       'font-family:"Courier Prime",monospace;font-size:12px;color:var(--gray-light);letter-spacing:0.2em;'
//     empty.textContent = 'данные в разработке'
//     container.appendChild(empty)
//     return
//   }

//   validBooks.forEach((book) => {
//     const card = document.createElement('article')
//     card.className = 'book-card'
//     card.setAttribute('aria-label', `Книга: ${book.name} — ${book.author}`)

//     card.innerHTML = `
//         <div class="book-author">${book.author}</div>
//         <div class="book-name">${book.name}</div>
//         <div class="book-cite" aria-label="Цитата">${book.cite}</div>
//       `

//     grid.appendChild(card)
//   })

//   container.appendChild(grid)
// }
function renderBooks(books, container) {
  const validBooks = Object.values(books).filter((b) => b.name && b.name.trim())

  if (!validBooks.length) {
    const empty = document.createElement('p')
    empty.style.cssText =
      'font-family:"Courier Prime",monospace;font-size:12px;color:var(--gray-light);letter-spacing:0.2em;'
    empty.textContent = 'данные в разработке'
    container.appendChild(empty)
    return
  }

  const grid = document.createElement('div')
  grid.className = 'books-grid'

  validBooks.forEach((book) => {
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

function renderFilms(films, container) {
  const grid = document.createElement('div')
  grid.className = 'films-grid'

  films.forEach((film, i) => {
    const card = document.createElement('figure')
    card.className = 'film-card'
    card.setAttribute('tabindex', '0')
    card.setAttribute('role', 'img')
    card.setAttribute('aria-label', film.info)

    const textInfo = document.createElement('div')
    textInfo.className = 'intro-hint'
    textInfo.setAttribute('aria-hidden', 'true')
    textInfo.innerText = 'нажмите на кадр, чтобы узнать больше'

    if (film.frame && film.frame.trim()) {
      const imgEl = document.createElement('img')
      imgEl.src = film.frame
      imgEl.alt = film.info
      imgEl.className = 'film-img'
      imgEl.onerror = function () {
        this.style.display = 'none'
        const ph = document.createElement('div')
        ph.className = 'film-placeholder'
        ph.innerHTML = `<span class="film-placeholder-icon">КАДР ${String(i + 1).padStart(2, '0')}</span>`
        card.prepend(ph)
      }
      card.appendChild(imgEl)
    } else {
      const ph = document.createElement('div')
      ph.className = 'film-placeholder'
      ph.innerHTML = `<span class="film-placeholder-icon">КАДР ${String(i + 1).padStart(2, '0')}</span>`
      card.appendChild(ph)
    }

    const overlay = document.createElement('div')
    overlay.className = 'film-overlay'
    overlay.setAttribute('aria-hidden', 'true')
    const info = document.createElement('figcaption')
    info.className = 'film-info'
    info.textContent = film.info
    overlay.appendChild(info)

    card.appendChild(overlay)
    grid.appendChild(textInfo)
    grid.appendChild(card)
  })

  container.appendChild(grid)
}

function renderImages(images, container) {
  const grid = document.createElement('div')
  grid.className = 'images-flat-grid'

  images.forEach((group, gi) => {
    const rawImg = group.image
    const srcs = Array.isArray(rawImg)
      ? rawImg.filter((s) => s && s.trim())
      : rawImg && rawImg.trim()
        ? [rawImg]
        : []

    if (srcs.length === 0) {
      // Placeholder-карточка с подписью
      const item = makeGalleryPlaceholder(gi, group.info)
      grid.appendChild(item)
    } else {
      srcs.forEach((src, ii) => {
        const item = makeGalleryItem(src, srcs, ii, group.info)
        grid.appendChild(item)
      })
    }
  })

  container.appendChild(grid)
}

function makeGalleryItem(src, allSrcs, idx, caption) {
  const item = document.createElement('div')
  item.className = 'gallery-item'
  item.setAttribute('tabindex', '0')
  item.setAttribute('role', 'button')
  item.setAttribute('aria-label', `Открыть изображение: ${caption}`)

  const img = document.createElement('img')
  img.src = src
  img.alt = caption
  img.onerror = function () {
    this.style.display = 'none'
    const ph = document.createElement('div')
    ph.className = 'gallery-placeholder'
    ph.innerHTML = `<span class="film-placeholder-icon">ФОТО</span>`
    item.prepend(ph)
  }

  const overlay = document.createElement('div')
  overlay.className = 'gallery-item-overlay'
  overlay.setAttribute('aria-hidden', 'true')
  overlay.textContent = '↗'

  const cap = document.createElement('div')
  cap.className = 'gallery-item-caption'
  cap.textContent = caption

  item.appendChild(img)
  item.appendChild(overlay)
  item.appendChild(cap)

  item.addEventListener('click', () => openLightbox(allSrcs, idx, caption))
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openLightbox(allSrcs, idx, caption)
    }
  })

  return item
}

function makeGalleryPlaceholder(idx, caption) {
  const item = document.createElement('div')
  item.className = 'gallery-item'

  const ph = document.createElement('div')
  ph.className = 'gallery-placeholder'
  ph.innerHTML = `<span class="film-placeholder-icon">ФОТО ${idx + 1}</span>`

  const cap = document.createElement('div')
  cap.className = 'gallery-item-caption'
  cap.textContent = caption

  item.appendChild(ph)
  item.appendChild(cap)
  return item
}

/* ============================================================
     АНИМАЦИИ КОНТЕНТА
     ============================================================ */
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

function animateTextLines() {
  document.querySelectorAll('.text-line-inner').forEach((line, i) => {
    setTimeout(() => line.classList.add('revealed'), 120 + i * 130)
  })
}

function animateBooks() {
  document.querySelectorAll('.book-card').forEach((card, i) => {
    setTimeout(
      () => {
        card.classList.add('revealed')
        setTimeout(() => {
          const cite = card.querySelector('.book-cite')
          if (cite) typewriterEffect(cite)
        }, 400)
      },
      200 + i * 250
    )
  })
}

function typewriterEffect(el) {
  const parts = el.innerHTML.split(/(<br\s*\/?>)/gi)
  el.innerHTML = ''
  let delay = 0
  parts.forEach((part) => {
    if (/^<br/i.test(part)) {
      setTimeout(() => el.appendChild(document.createElement('br')), delay)
      delay += 40
    } else {
      ;[...part].forEach((char) => {
        setTimeout(() => {
          const span = document.createElement('span')
          span.className = 'typewriter-char'
          span.textContent = char
          el.appendChild(span)
          requestAnimationFrame(() => (span.style.opacity = '1'))
        }, delay)
        delay += /[.,!?—]/.test(char) ? 60 : /\s/.test(char) ? 20 : 28
      })
    }
  })
}

function animateFilms() {
  document.querySelectorAll('.film-card').forEach((card, i) => {
    setTimeout(() => card.classList.add('revealed'), 150 + i * 200)
  })
}

function animateImages() {
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    setTimeout(() => item.classList.add('revealed'), 80 + i * 70)
  })
}

/* =============================================
     LIGHTBOX
     ============================================= */
function openLightbox(images, startIdx, caption) {
  state.lightboxImages = images
  state.lightboxIdx = startIdx

  document.body.classList.add('no-scroll')
  updateLightboxImage()

  document.getElementById('lightbox-caption').textContent = caption
  document.getElementById('lightbox').classList.add('open')
  document.getElementById('lightbox-close').focus()
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open')
  // панель контента всё ещё открыта, скролл остаётся заблокированным
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
     ПАРАЛЛАКС ГЕРОЙ-ТЕКСТА
     Медленнее и в противофазе к тайлам
     ============================================= */
function applyHeroParallax(dx, dy) {
  if (state.currentSection) return
  const hero = document.getElementById('hero-text')
  // Лёгкое смещение в обратную сторону — эффект глубины
  hero.style.transform = `translate(calc(-50% + ${dx * -18}px), calc(-50% + ${dy * -10}px))`
}

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
    const depth = 0.4 + (i % 3) * 0.2
    tile.style.marginLeft = `calc(${dx * depth * 8}px)`
    tile.style.marginTop = `calc(${dy * depth * 6}px)`
  })

  applyHeroParallax(dx, dy)
  rafId = null
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  if (!rafId && !state.currentSection) {
    rafId = requestAnimationFrame(applyParallax)
  }
})

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
     ФУТЕР — появление при скролле (Intersection Observer)
     ============================================= */
function initFooterObserver() {
  const footer = document.getElementById('site-footer')
  if (!footer) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add('visible')
          observer.unobserve(footer) // срабатывает один раз
        }
      })
    },
    { threshold: 0.1 }
  )

  observer.observe(footer)
}

/* =============================================
     ЗАПУСК
     ============================================= */
initTiles()
initFooterObserver()
