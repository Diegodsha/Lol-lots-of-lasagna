import 'bootstrap';
import './style.scss';
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

// Removes selected tab color and cleans main content
const clean = () => {
  const navlinks = document.getElementsByClassName('nav-link');

  for (let i = 0; i < navlinks.length; i += 1) {
    if (navlinks[i].classList.contains('select-tab')) {
      navlinks[i].classList.remove('select-tab');
    }
  }

  const contentDiv = document.getElementById('content');
  const mainDiv = document.querySelector('main');
  contentDiv.removeChild(mainDiv);
};

// Loads inital home content
createHomePage();

// Loads home content
const homeTab = document.querySelector('.home');
homeTab.onclick = () => {
  clean();
  createHomePage();
};

// Loads menu content
const menuTab = document.querySelector('.menu');
menuTab.onclick = () => {
  clean();
  createMenuPage();
};

// Loads contact content
const contactTab = document.querySelector('.contact');
contactTab.onclick = () => {
  clean();
  createContactPage();
};
