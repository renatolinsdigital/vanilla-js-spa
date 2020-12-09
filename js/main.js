import getInitialUsers from './actions-and-handlers/get-initial-users.js';
import attachFilterHandlers from './actions-and-handlers/filter.js';
import attachAppHeaderHandlers from './actions-and-handlers/app-header.js';

const App = () => {
  getInitialUsers();
  attachAppHeaderHandlers();
  attachFilterHandlers();
};

App();