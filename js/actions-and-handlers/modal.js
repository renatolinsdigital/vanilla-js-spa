import $ from '../libs/dollar.js';

const modal = $('.modal');
const modalCloseButton = $('.close-modal');
const modalCardTitle = $('.modal-card-title');
const userPhotoContainer = $('.user-photo-container');
const modalFooterDetails = $('.modal-footer-details');

const showDetailsModal = (userDetails) => {

  const { name, location: userLocation, avatar_url, followers: userFollowers } = userDetails;
  const location = userLocation || 'N/A';
  const followers = userFollowers || 'N/A';

  modal.classList.add('is-active');
  modalCardTitle.innerHTML = name;

  userPhotoContainer.innerHTML = `<img
    src="${avatar_url}"
    alt="Avatar of ${name}"
  />`;

  modalFooterDetails.innerHTML =
    `<span><strong>Followers: </strong></span><span>${followers}</span>
     <span><strong>Location: </strong></span > <span>${location}</span>`;
}

const closeDetailsModal = () => {
  modal.classList.remove('is-active');
}

modal.firstElementChild.addEventListener('click', closeDetailsModal);
modalCloseButton.addEventListener('click', closeDetailsModal);

export { showDetailsModal, closeDetailsModal };