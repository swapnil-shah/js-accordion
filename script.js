const buttons = Array.from(document.querySelectorAll('.expand-button'))
buttons.forEach(button => {
  console.log("~ buttons", buttons)
  button.addEventListener('click', () => {
    collapseAll(buttons)
    toggle(button)
  })
})

function collapseAll(buttons) {
  buttons.forEach(button => {
    button.parentNode.nextElementSibling.classList.remove('show')
    button.innerText = "Expand"
  })
}

function toggle(button) {
  const cardBody = button.parentNode.nextElementSibling;
  if (cardBody.classList.contains('show')) {
    cardBody.classList.remove('show');
    button.innerText = "Expand"
  }
  else {
    cardBody.classList.add('show')
    button.innerText = "Collapse"
  }
}