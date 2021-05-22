import lasagna1 from './assets/spinach-lasagna.jpg';
import lasagna2 from './assets/Best-Ever-Vegetarian-Lasagna.jpg';
import lasagna3 from './assets/Classic-Meat-Lasagna-4.jpg';
import pomodoro from './assets/Pomodoro-pasta.jpg';
import puttanesca from './assets/spaghetti-puttanesca.jpg';

const createMenuPage = () => {
  const body1 = document.querySelector('body');
  // change body background img
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

  // Page title
  const pageTitle = document.createElement('h1');
  pageTitle.textContent = 'Menu';
  pageTitle.classList.add('lobster', 'text-white', 'py-4', 'lol');
  mainDiv.appendChild(pageTitle);

  const sectionDiv = document.createElement('section');
  sectionDiv.setAttribute('id', 'home');
  mainDiv.appendChild(sectionDiv);

  // carousel
  const carousel = div.cloneNode(true);
  carousel.setAttribute('id', 'carouselExample');
  carousel.setAttribute('data-bs-ride', 'carousel');
  carousel.classList.add('carousel', 'slide', 'carousel-dark');
  //   sectionDiv.appendChild(carousel);

  const carouselInner = div.cloneNode(true);
  carouselInner.classList.add('carousel-inner');
  carousel.appendChild(carouselInner);

  // item 1
  const carouselItemActive = div.cloneNode(true);
  carouselItemActive.classList.add('carousel-item', 'active');
  carouselInner.appendChild(carouselItemActive);

  const myIcon = new Image();
  myIcon.src = pomodoro;
  myIcon.alt = 'lasagna4';
  myIcon.classList.add('d-block', 'w-100');
  carouselItemActive.appendChild(myIcon);

  // item 2
  const carouselItem2 = div.cloneNode(true);
  carouselItem2.classList.add('carousel-item');
  carouselInner.appendChild(carouselItem2);

  const myIcon2 = new Image();
  myIcon2.src = lasagna2;
  myIcon2.alt = 'lasagna2';
  myIcon2.classList.add('d-block', 'w-100');
  carouselItem2.appendChild(myIcon2);

  // item 3
  const carouselItem3 = div.cloneNode(true);
  carouselItem3.classList.add('carousel-item');
  carouselInner.appendChild(carouselItem3);

  const myIcon3 = new Image();
  myIcon3.src = lasagna3;
  myIcon3.alt = 'lasagna3';
  myIcon3.classList.add('d-block', 'w-100');
  carouselItem3.appendChild(myIcon3);

  // Prev btn
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

  // next btn
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

  // menu intro
  const menuCont = div.cloneNode(true);
  menuCont.classList.add('home-cont', 'p-3', 'text-center', 'mt-5');
  sectionDiv.appendChild(menuCont);

  const pTagWelcome = pTag.cloneNode(true);
  pTagWelcome.textContent = 'Cooked by our Italian chef Alessandro Pastolini, this variety of dishes will give you an explosion of several and unique flavors in your mouth (be careful it could be addictive).';
  menuCont.appendChild(pTagWelcome);

  // menu container
  const menuCardsCont = div.cloneNode(true);
  menuCardsCont.classList.add(
    'home-cont',
    'p-3',
    'text-center',
    'mt-5',
    'row',
    'justify-content-center',
  );
  sectionDiv.appendChild(menuCardsCont);

  // menu cards
  const card1Col = div.cloneNode(true);
  card1Col.classList.add('col-12', 'col-lg-5', 'mt-4');

  // card1
  const card1 = div.cloneNode(true);
  card1.classList.add('card');
  card1Col.appendChild(card1);

  const card1IMg = new Image();
  card1IMg.src = pomodoro;
  card1IMg.classList.add('card-img-top');
  card1.appendChild(card1IMg);

  const card1Body = div.cloneNode(true);
  card1Body.classList.add('card-body');
  card1.appendChild(card1Body);

  const card1Text = pTag.cloneNode(true);
  card1Text.classList.add('card-text');
  card1Text.textContent = 'Exquisite pomodoro pasta with olive oil, fresh tomatoes and basil.';
  card1Body.appendChild(card1Text);
  menuCardsCont.appendChild(card1Col);

  // card2
  const card2Col = div.cloneNode(true);
  card2Col.classList.add('col-12', 'col-lg-5', 'mt-5', 'mt-lg-4');

  const card2 = div.cloneNode(true);
  card2.classList.add('card');
  card2Col.appendChild(card2);

  const card2IMg = new Image();
  card2IMg.src = puttanesca;
  card2IMg.classList.add('card-img-top');
  card2.appendChild(card2IMg);

  const card2Body = div.cloneNode(true);
  card2Body.classList.add('card-body');
  card2.appendChild(card2Body);

  const card2Text = pTag.cloneNode(true);
  card2Text.classList.add('card-text');
  card2Text.textContent = 'Great puttanesca pasta with olive oil, olives, capers, and garlic.';
  card2Body.appendChild(card2Text);
  menuCardsCont.appendChild(card2Col);

  // card3
  const card3Col = div.cloneNode(true);
  card3Col.classList.add('col-12', 'col-lg-5', 'mt-5', 'mb-0', 'mb-lg-4');

  const card3 = div.cloneNode(true);
  card3.classList.add('card');
  card3Col.appendChild(card3);

  const card3IMg = new Image();
  card3IMg.src = lasagna1;
  card3IMg.classList.add('card-img-top');
  card3.appendChild(card3IMg);

  const card3Body = div.cloneNode(true);
  card3Body.classList.add('card-body');
  card3.appendChild(card3Body);

  const card3Text = pTag.cloneNode(true);
  card3Text.classList.add('card-text');
  card3Text.textContent = 'Unique spinach lasagna with lots of spinach.';
  card3Body.appendChild(card3Text);
  menuCardsCont.appendChild(card3Col);
  // card4
  const card4Col = div.cloneNode(true);
  card4Col.classList.add('col-12', 'col-lg-5', 'mt-5', 'mb-4');

  const card4 = div.cloneNode(true);
  card4.classList.add('card');
  card4Col.appendChild(card4);

  const card4IMg = new Image();
  card4IMg.src = lasagna2;
  card4IMg.classList.add('card-img-top');
  card4.appendChild(card4IMg);

  const card4Body = div.cloneNode(true);
  card4Body.classList.add('card-body');
  card4.appendChild(card4Body);

  const card4Text = pTag.cloneNode(true);
  card4Text.classList.add('card-text');
  card4Text.textContent = 'Delicious vegetarian lasagna with organic pasta.';
  card4Body.appendChild(card4Text);
  menuCardsCont.appendChild(card4Col);

  // appends footer
  const footer = document.querySelector('footer');
  footer.classList.remove('fixed-bottom');
  content.appendChild(footer);
};

export default createMenuPage;
