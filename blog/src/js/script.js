// Selecione todos os elementos com o id "icon"
const icons = document.querySelectorAll('#icon');

// Adicione um evento de clique a cada elemento
icons.forEach((icon) => {
  icon.onclick = (event) => {
    // Use event.currentTarget para se referir ao elemento clicado
    event.currentTarget.classList.toggle('filled');
  };
});
