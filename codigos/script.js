// Efeito de  efeito digitando
document.addEventListener('DOMContentLoaded', () =>{
    new TypeIt(".animacao",{
        speed:200,
        loop:true
    }).type('Ampliamos', {DelayNode: 900})
    .delete(10)
    .type('Inovamos', {DelayNode: 900})
    .go()
})

// Mostrar/Ocultar detalhes do curso
function showContent(page) {
  const pages = ['inicio', 'basico', 'medio', 'pelno', 'secao-atual'];

  for (const p of pages) {
    const elements = document.getElementsByClassName(p);
    for (const element of elements) {
      if (element.classList.contains('secao-atual')) {
        element.classList.remove('secao-atual');
        element.style.display = 'none';
      }
    }
  }

  const selectedElements = document.getElementsByClassName(page);
  for (const element of selectedElements) {
    element.classList.add('secao-atual');
    element.style.display = 'block';
  }
}


