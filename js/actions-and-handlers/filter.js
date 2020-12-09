import $ from '../libs/dollar.js';
import usersStore from '../store/users.store.js';
import attachCardsContainerHandlers from './cards-container.js';
import { saveToSearchLog } from '../services/search-log.service.js';

const applyFilters = (users, searchTern) => {
  saveToSearchLog(searchTern);
  const filteredUsers = users.filter(
    user => user.login.toLowerCase()
      .includes(searchTern));

  attachCardsContainerHandlers(filteredUsers);
}

const attachFilterHandlers = (searchTerm) => {
  const searchInput = $('.search-input');
  const searchButton = $('.search-button');

  if (!searchInput || !searchButton) return;

  if (searchTerm) {
    applyFilters(usersStore.getUsers(), searchTerm);
  }

  searchInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      const searchTermInLowerCase = e.target.value.toLowerCase();
      applyFilters(usersStore.getUsers(), searchTermInLowerCase);
    }
  });

  searchButton.addEventListener('click', () => {
    const searchTermInLowerCase = searchInput.value.toLowerCase();
    applyFilters(usersStore.getUsers(), searchTermInLowerCase);
  });

}

export default attachFilterHandlers;