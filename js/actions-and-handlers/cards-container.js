import userCardView from '../views/user-card.js';
import fetchUsers from '../services/users.service.js';
import { showDetailsModal } from './modal.js';
import $ from '../libs/dollar.js';

const progressBar = $('.progress');
const pageDescription = $('.page-description');

const getCardId = (eventTarget) => {
  if (eventTarget.parentNode.className === 'cards-container') {
    return eventTarget.id;
  } else {
    if (eventTarget.className === 'cards-container') return null;
    return getCardId(eventTarget.parentNode);
  }
}

const attachCardsContainerHandlers = (users) => {
  pageDescription.innerHTML = 'Users list';

  const cardsContainer = $('.cards-container');
  if (!cardsContainer) return;
 
  if (users.length === 0) {
    cardsContainer.innerHTML = `<p class="no-users">No users found</p>`;
  } else {
    const cardsListView = users.map((user) => userCardView(user)).join('');
    cardsContainer.innerHTML = cardsListView;
  }

  const usersLogins = users.map(user => user.login);

  cardsContainer.addEventListener('click', async (event) => {
    const userIdInCard = getCardId(event.target);
    if (usersLogins.includes(userIdInCard)) {
      progressBar.classList.remove('is-hidden');
      const userDetails = await fetchUsers(userIdInCard);
      progressBar.classList.add('is-hidden');
      showDetailsModal(userDetails);
    }
  });

}

export default attachCardsContainerHandlers;