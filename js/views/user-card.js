
const renderCardView = (user) => {
  const { login, avatar_url, type } = user;

  return `<div class="card" id="${login}">
            <div class="card-column">
              <img
                src="${avatar_url}"
                alt="Avatar of ${login}"
              />
            </div>
            <div class="card-column">
              <div class="card-entries-container">
                <div class="card-entry">
                  <span>Login:</span>
                  <span>${login}</span>
                </div>
                <div class="card-entry">
                  <span>Type:</span>
                  <span>${type}</span>
                </div>
              </div>
            </div>
          </div>`
};

export default renderCardView;
