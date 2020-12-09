import $ from '../libs/dollar.js';
import Router from '../vendor-libs/thecreazy-router.js';
import usersPage from '../page-views/users.page.js';
import attachCardsContainerHandlers from '../actions-and-handlers/cards-container.js';
import attachFilterHandlers from '../actions-and-handlers/filter.js'
import usersStore from '../store/users.store.js';
import { fetchSearchEntries } from '../services/search-log.service.js';
import attachSearchEntriesHandlers from '../actions-and-handlers/search-log.js';
import searchLogPage from '../page-views/search-log.page.js';

const appRoot = $('#app-root');

const renderUsersPage = (searchTerm) => {
  appRoot.innerHTML = usersPage;
  attachCardsContainerHandlers(usersStore.getUsers());
  attachFilterHandlers(searchTerm);
}

const renderSearchLogPage = () => {
  appRoot.innerHTML = searchLogPage;
  attachSearchEntriesHandlers(fetchSearchEntries());
}

const router = new Router({
  mode: 'hash',
  root: '/'
});

router
  .add(/search-log/, () => {
    renderSearchLogPage();
  })
  .add(/users\/(.*)/, (searchTerm) => {
    renderUsersPage(searchTerm);
  })
  .add('', () => {
    renderUsersPage();
  });