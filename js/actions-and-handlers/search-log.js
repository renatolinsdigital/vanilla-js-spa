import $ from '../libs/dollar.js';
import renderSearchEntryView from '../views/search-entry.js';

const getTerm = (eventTarget) => {
  if (eventTarget.className === 'card') {
    return eventTarget.getElementsByClassName('term')[0].innerText;    
  } else {
    return getTerm(eventTarget.parentNode);
  }
}

const attachSearchEntriesHandlers = (searchEntries) => {
  const pageDescription = $('.page-description');
  pageDescription.innerHTML = 'Last searched terms';
  
  const searchLogContainer = $('.search-log-container');
  if (!searchLogContainer) return;

  if (searchEntries.length === 0) {
    searchLogContainer.innerHTML = `<p class="no-entries">No search entries found</p>`;
  } else {
    const searchEntriesOrdered = searchEntries
      .sort((entry1, entry2) => new Date(entry2.timeStamp) - new Date(entry1.timeStamp));
    const entriesListView = searchEntriesOrdered.map((entry) => renderSearchEntryView(entry)).join('');
    searchLogContainer.innerHTML = entriesListView;
  }

  searchLogContainer.addEventListener('click', (event) => {
    const searchTerm = getTerm(event.target);
    parent.location.hash = `#users/${searchTerm}`;
  });

}

export default attachSearchEntriesHandlers;