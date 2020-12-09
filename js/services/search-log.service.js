
const saveToSearchLog = (term) => {
  if (!term) return;
  const newSearchEntry = JSON.stringify({ term, timeStamp: new Date() });
  const searchEntries = JSON.parse(localStorage.getItem('searchEntries')) || [];
  const searchEntriesUpdated = JSON.stringify([...searchEntries, newSearchEntry]);
  localStorage.setItem('searchEntries', searchEntriesUpdated);
}

const fetchSearchEntries = () => {
  const entries = JSON.parse(localStorage.getItem('searchEntries')) || [];
  return entries.map(entry => JSON.parse(entry));
}

export { saveToSearchLog, fetchSearchEntries }; 