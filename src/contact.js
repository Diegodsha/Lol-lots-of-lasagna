'use strict';

function createContactPage() {
  const body1 = document.querySelector('body');
  //change body background img
  body1.classList.remove('body1');
  body1.classList.remove('body2');
  body1.classList.add('body3');
  const content = document.getElementById('content');
  const pTag = document.createElement('p');
  const div = document.createElement('div');

  const contactBtn = document.querySelector('.contact');
  contactBtn.classList.add('select-tab');

  const mainDiv = document.createElement('main');
  mainDiv.classList.add('d-flex', 'flex-column', 'align-items-center');
  content.appendChild(mainDiv);

  //Page title
  const pageTitle = document.createElement('h1');
  pageTitle.textContent = 'Contact';
  pageTitle.classList.add('lobster', 'text-white', 'py-4', 'lol');
  mainDiv.appendChild(pageTitle);

  const sectionDiv = document.createElement('section');
  sectionDiv.setAttribute('id', 'home');
  mainDiv.appendChild(sectionDiv);

  //contact container
  const contactCont = div.cloneNode(true);
  contactCont.classList.add('home-cont', 'p-3', 'text-center', 'mt-5');
  sectionDiv.appendChild(contactCont);
  mainDiv.appendChild(contactCont);

  const pTagGetInTouch = pTag.cloneNode(true);
  pTagGetInTouch.textContent = `Get in touch with us or book a reservation to save your place`;
  contactCont.appendChild(pTagGetInTouch);

  //contact info

  const contactInfo = div.cloneNode(true);
  contactInfo.classList.add('hours', 'p-3', 'align-self-center', 'flex-column');
  contactCont.appendChild(contactInfo);

  const contactPhone = pTag.cloneNode(true);
  contactPhone.textContent = 'Phone number : 477 286-95-47';
  contactInfo.appendChild(contactPhone);

  const contactMail = pTag.cloneNode(true);
  contactMail.textContent = 'E-mail: lol@gmail.com';
  ('Phone number : 477 286-95-47');
  contactInfo.appendChild(contactMail);
  //form

  //appends footer
  const footer = document.querySelector('footer');
  footer.classList.add('fixed-bottom');
  content.appendChild(footer);
}

export { createContactPage };
