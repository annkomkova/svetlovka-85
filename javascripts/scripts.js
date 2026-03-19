showGridOnHoverDot()

function showGridOnHoverDot() {
  const grid = document.querySelector('.setka')
  const article = document.querySelector('article')
  const dots = document.querySelectorAll('.dots')

  dots.forEach((dot) => {
    dot.addEventListener('mouseover', () => {
      grid.style.opacity = '1'
      dots.forEach((i) => {
        i.style.opacity = '0'
      })
      dot.style.opacity = '1'
    })

    dot.addEventListener('mouseout', () => {
      grid.style.opacity = '0'
      dots.forEach((i) => {
        i.style.opacity = '1'
      })
    })
  })
}
