const content = document.getElementById('content');

function createMenuPage() {
  const menuBtn = document.querySelector('.menu');
  menuBtn.classList.add('select-tab');

  const mainDiv = document.createElement('main');
  mainDiv.classList.add('d-flex', 'flex-column', 'align-items-center');
  content.appendChild(mainDiv);
  //restaurant name
  const restName = document.createElement('h1');
  restName.textContent = 'Menu';
  restName.classList.add('lobster', 'text-white', 'py-4', 'lol');
  mainDiv.appendChild(restName);

  const footer = document.querySelector('footer');
  content.appendChild(footer);
}

export { createMenuPage };
