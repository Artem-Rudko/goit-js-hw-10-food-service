import menuData from './menu.json';
import menuItemsTmpl from './menu-cards.hbs';
import './styles.css';

const menuListEl = document.querySelector('.js-menu');
const menuMarkup = menuItemsTmpl(menuData); 

menuListEl.insertAdjacentHTML('afterbegin', menuMarkup);