
const renderSearchEntryView = (entry) => {
  const { term, timeStamp } = entry;
  const timeStampAsDate = new Date(timeStamp);
  return `<div class="card">
            <span><strong>Term:</strong></span>
            <span class="term">${term}</span>
            <span class="time">${timeStampAsDate.toLocaleString("en-US")}</span>
          </div>`;
};

export default renderSearchEntryView;
