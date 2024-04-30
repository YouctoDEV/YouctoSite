fetch("/site.json").then(reponse => reponse.json()).then(reponse => {
  reponse.cartes.forEach(carte => {
    const card = document.createElement("a");
    card.href = carte.url;
    card.style.background = carte.back;
    document.body.appendChild(card)
  });
})