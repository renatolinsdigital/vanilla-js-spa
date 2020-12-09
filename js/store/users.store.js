class UsersStore {
  _users = [];
  setUsers = (users) => {
    this._users = users;
  }
  getUsers = () => this._users;  
}

const usersStore = new UsersStore();
export default usersStore;