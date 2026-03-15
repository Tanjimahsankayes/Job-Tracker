// delete item

function deleteCard(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.remove();
  }
}