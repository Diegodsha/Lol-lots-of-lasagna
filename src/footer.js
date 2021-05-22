const createFooter = () => {
  const footerDiv = document.createElement('footer');
  footerDiv.id = 'footer';
  footerDiv.classList.add('foot-cont', 'p-3', 'mt-4', 'row');

  const footerCol = document.createElement('div');
  footerCol.classList.add('col-12', 'd-flex', 'justify-content-center');
  footerDiv.appendChild(footerCol);

  const smallDiv = document.createElement('small');
  smallDiv.classList.add('text-white', 'align-items-center', 'd-flex');
  footerCol.appendChild(smallDiv);

  const span = document.createElement('span');
  span.textContent = 'Designed and developed by';
  smallDiv.appendChild(span);

  const anchorName = document.createElement('a');
  anchorName.classList.add('mx-1', 'text-white', 'text-decoration-underline');
  anchorName.setAttribute('href', 'https://github.com/Diegodsha');
  anchorName.textContent = 'Diego';
  span.appendChild(anchorName);

  return footerDiv;
};

export default createFooter;
