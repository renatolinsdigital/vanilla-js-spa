
import $ from '../libs/dollar.js';
import fetchUsers from '../services/users.service.js';
import usersStore from '../store/users.store.js';
import attachCardsContainerHandlers from './cards-container.js';

const progressBar = $('.progress');

const getInitialUsers = async () => {
  progressBar.classList.add('is-active');
  try {
    const allUsers = await fetchUsers();
    usersStore.setUsers(allUsers);
    attachCardsContainerHandlers(allUsers);
  } catch (e) {
    console.error(e);
    return;
  } finally {
    progressBar.classList.remove('is-active');
  }
}

export default getInitialUsers;