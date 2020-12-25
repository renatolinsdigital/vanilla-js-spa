import $ from '../libs/dollar.js';
import { showDetailsModal } from './modal.js';

const navBarBurguer = $('.navbar-burger');
const navBarMenu = $('.navbar-menu');
const aboutButton = $('.about-button');
const navBarStart = $('.navbar-start');

const attachAppHeaderHandlers = () => {
  navBarBurguer.addEventListener('click', () => {
    navBarBurguer.classList.toggle('is-active');
    navBarMenu.classList.toggle('is-active');
  });

  navBarStart.addEventListener('click', () => {
    navBarBurguer.classList.remove('is-active');
    navBarMenu.classList.remove('is-active');
  });

  aboutButton.addEventListener('click', (event) => {
    event.preventDefault();
    const mySelf = { name: 'Renato Lins', avatar_url: 'img/code_eater.png', location: 'São Paulo, Brazil' }
    showDetailsModal(mySelf);
  });
}

export default attachAppHeaderHandlers;