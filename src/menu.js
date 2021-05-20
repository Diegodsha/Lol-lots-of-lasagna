import lasagna1 from './assets/spinach-lasagna.jpg';
import lasagna2 from './assets/Best-Ever-Vegetarian-Lasagna.jpg';
import lasagna3 from './assets/Classic-Meat-Lasagna-4.jpg';

function createMenuPage() {
  const body1 = document.querySelector('body');
  //change body background img
  body1.classList.remove('body1');
  body1.classList.remove('body3');
  body1.classList.add('body2');
  const content = document.getElementById('content');
  const pTag = document.createElement('p');
  const div = document.createElement('div');

  const menuBtn = document.querySelector('.menu');
  menuBtn.classList.add('select-tab');

  const mainDiv = document.createElement('main');
  mainDiv.classList.add('d-flex', 'flex-column', 'align-items-center');
  content.appendChild(mainDiv);

  //Page title
  const pageTitle = document.createElement('h1');
  pageTitle.textContent = 'Menu';
  pageTitle.classList.add('lobster', 'text-white', 'py-4', 'lol');
  mainDiv.appendChild(pageTitle);

  const sectionDiv = document.createElement('section');
  sectionDiv.setAttribute('id', 'home');
  mainDiv.appendChild(sectionDiv);

  //carousel
  const carousel = div.cloneNode(true);
  carousel.setAttribute('id', 'carouselExample');
  carousel.setAttribute('data-bs-ride', 'carousel');
  carousel.classList.add('carousel', 'slide');
  //   sectionDiv.appendChild(carousel);

  const carouselInner = div.cloneNode(true);
  carouselInner.classList.add('carousel-inner');
  carousel.appendChild(carouselInner);

  //item 1
  const carouselItemActive = div.cloneNode(true);
  carouselItemActive.classList.add('carousel-item', 'active');
  carouselInner.appendChild(carouselItemActive);

  const myIcon = new Image();
  myIcon.src = lasagna1;
  myIcon.alt = 'mmmm';
  myIcon.classList.add('d-block', 'w-100');
  carouselItemActive.appendChild(myIcon);

  //item 2
  const carouselItem2 = div.cloneNode(true);
  carouselItem2.classList.add('carousel-item');
  carouselInner.appendChild(carouselItem2);

  const myIcon2 = new Image();
  myIcon2.src = lasagna2;
  myIcon2.alt = 'mmmm2222';
  myIcon2.classList.add('d-block', 'w-100');
  carouselItem2.appendChild(myIcon2);

  //item 3
  const carouselItem3 = div.cloneNode(true);
  carouselItem3.classList.add('carousel-item');
  carouselInner.appendChild(carouselItem3);

  const myIcon3 = new Image();
  myIcon3.src = lasagna3;
  myIcon3.alt = 'mmmm333';
  myIcon3.classList.add('d-block', 'w-100');
  carouselItem3.appendChild(myIcon3);

  //Prev btn
  const prevBtn = document.createElement('button');
  prevBtn.classList.add('carousel-control-prev');
  prevBtn.type = 'button';
  prevBtn.setAttribute('data-bs-target', '#carouselExample');
  prevBtn.setAttribute('data-bs-slide', 'prev');

  const carSpanPrev = document.createElement('span');
  carSpanPrev.classList.add('carousel-control-prev-icon');
  carSpanPrev.setAttribute('aria-hidden', 'true');

  const spanVisPrev = document.createElement('span');
  spanVisPrev.classList.add('visually-hidden');
  spanVisPrev.textContent = 'Previous';
  carSpanPrev.appendChild(spanVisPrev);
  prevBtn.appendChild(carSpanPrev);

  //next btn
  const nextBtn = document.createElement('button');
  nextBtn.classList.add('carousel-control-next');
  nextBtn.type = 'button';
  nextBtn.setAttribute('data-bs-target', '#carouselExample');
  nextBtn.setAttribute('data-bs-slide', 'next');

  const carSpanNext = document.createElement('span');
  carSpanNext.classList.add('carousel-control-next-icon');
  carSpanNext.setAttribute('aria-hidden', 'true');

  const spanVisnext = document.createElement('span');
  spanVisnext.classList.add('visually-hidden');
  spanVisnext.textContent = 'nextious';
  carSpanNext.appendChild(spanVisnext);
  nextBtn.appendChild(carSpanNext);

  carousel.appendChild(prevBtn);
  carousel.appendChild(nextBtn);
  sectionDiv.appendChild(carousel);

  //menu intro
  const menuCont = div.cloneNode(true);
  menuCont.classList.add('home-cont', 'p-3', 'text-center', 'mt-5');
  sectionDiv.appendChild(menuCont);

  const pTagWelcome = pTag.cloneNode(true);
  pTagWelcome.textContent = `Cooked by our italian chef Alessandro Pastolini, these variety of
    dishes will give you a explosion of several and unique flavors in your mouth (be careful it could be adictive).`;
  menuCont.appendChild(pTagWelcome);

  //menu

  //appends footer
  const footer = document.querySelector('footer');
  content.appendChild(footer);
}

export { createMenuPage };
