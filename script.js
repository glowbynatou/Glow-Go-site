document.getElementById('formulaireCommande').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('messageCommande').textContent = 'Commande envoyée avec succès ! Merci 💖';
  this.reset();
});
