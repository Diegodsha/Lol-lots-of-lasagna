'use strict';

import { createFooter } from './footer';

function createHomePage() {
  const body1 = document.querySelector('body');
  //change body background img
  body1.classList.remove('body3');
  body1.classList.remove('body2');
  body1.classList.add('body1');

  const content = document.getElementById('content');
  const pTag = document.createElement('p');
  const div = document.createElement('div');
  const ul = document.createElement('ul');

  const openHours = [
    'Sunday: 8am - 8pm',
    'Monday: 6am - 6pm',
    'Tuesday: Closed',
    'Wednesday: 6am - 6pm',
    'Thursday: 6am - 10pm',
    'Friday: 6am - 10pm',
    'Saturday: 8am - 10pm',
  ];

  const createList = (values, ulcont, parent) => {
    values.forEach((val) => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${val}`));
      li.classList.add('mt-3');
      ulcont.appendChild(li);
      parent.appendChild(ul);
    });
  };

  const homeBtn = document.querySelector('.home');
  homeBtn.classList.add('select-tab');

  const mainDiv = document.createElement('main');
  mainDiv.classList.add('d-flex', 'flex-column', 'align-items-center');
  content.appendChild(mainDiv);
  //restaurant name
  const restName = document.createElement('h1');
  restName.textContent = 'Lots of Lasagna';
  restName.classList.add('lobster', 'text-white', 'py-4', 'lol');
  mainDiv.appendChild(restName);

  //welcome section
  const sectionDiv = document.createElement('section');
  sectionDiv.setAttribute('id', 'home');
  mainDiv.appendChild(sectionDiv);

  const homeCont = div.cloneNode(true);
  homeCont.classList.add('home-cont', 'p-3', 'text-center');
  sectionDiv.appendChild(homeCont);

  const pTagWelcome = pTag.cloneNode(true);
  pTagWelcome.classList.add('h2');
  pTagWelcome.textContent = 'Welcome to the house of lasagna';
  homeCont.appendChild(pTagWelcome);

  //welcome text
  const welcomeText = pTag.cloneNode(true);
  welcomeText.textContent = `Here you'll find an incredible variety of lasagnas and pastas to
taste (Yes, we know the name is Lots of Lasagna but we couldn't
resist to cook other types of delicious pasta ok?) we're sure that
you're going to love them all and that you'll never find a better
place to eat lasagna and pasta.`;
  homeCont.appendChild(welcomeText);

  //Schedule section
  const schedule = div.cloneNode(true);
  schedule.classList.add(
    'home-cont',
    'p-3',
    'text-center',
    'mt-4',
    'd-flex',
    'flex-column'
  );
  sectionDiv.appendChild(schedule);

  const scheduleTitle = pTag.cloneNode(true);
  scheduleTitle.textContent = 'Hungry?';
  scheduleTitle.classList.add('h2');
  schedule.appendChild(scheduleTitle);
  schedule.appendChild(document.createElement('hr'));

  const scheduleText = pTag.cloneNode(true);
  scheduleText.textContent = `Check our schedule so you don't miss the oportunity of tasting the
best lasagna (and pasta of course) in the world.`;
  schedule.appendChild(scheduleText);

  const hours = div.cloneNode(true);
  hours.classList.add('hours', 'p-3', 'align-self-center');
  schedule.appendChild(hours);

  // creates list for opening hours
  createList(openHours, ul, hours);

  //Location
  const locationDiv = div.cloneNode(true);
  locationDiv.classList.add('home-cont', 'p-3', 'text-center', 'mt-4');
  sectionDiv.appendChild(locationDiv);

  const locationTitle = pTag.cloneNode('true');
  locationTitle.classList.add('h2');
  locationTitle.textContent = 'Location';
  locationDiv.appendChild(locationTitle);

  const locationText = pTag.cloneNode(true);
  locationText.textContent = '742 Evergreen Terrace, Springfield';
  locationDiv.appendChild(locationText);

  if (!document.querySelector('footer')) {
    content.appendChild(createFooter());
  } else {
    const footerDiv = document.querySelector('footer');
    content.appendChild(footerDiv);
  }
}

export { createHomePage };
