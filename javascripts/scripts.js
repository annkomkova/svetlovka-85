moveInfoItems()
setInterval(() => {
  moveInfoItems()
}, 5000)

function moveInfoItems() {
  const items = document.querySelectorAll('.move')
  const section = document.querySelector('.all')

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const { width, height } = item.getBoundingClientRect()

    const sectionWidth = section.getBoundingClientRect().width
    const sectionHeight = section.getBoundingClientRect().height

    item.style.top = `${getRandomArbitrary(0, sectionHeight - height)}px`

    item.style.left = `${getRandomArbitrary(0, sectionWidth - width)}px`
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}
hover()
function hover() {
  const items = document.querySelectorAll('.item')
  const all = document.querySelector('.all')
  const section1 = document.querySelector('.section1')

  all.querySelector('.move1 div').addEventListener('click', () => {
    all.style.display = 'none'
    section1.style.display = 'block'
  })
}
