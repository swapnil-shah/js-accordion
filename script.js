// Adding event listener on the document will help to add elements are added dynamically
document.addEventListener('click', e => {
  if (!e.target.matched(".expand-button")) return
  const card = e.target.closest(".card")
  const cardBody = card.querySelector(".card-body")
  cardBody.classList.toggle("show")
  e.target.innerText = e.target.innerText === "Expand" ? "Collapsed" : "Expand"
})