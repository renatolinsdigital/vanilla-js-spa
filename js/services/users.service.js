const USERS_API = 'https://api.github.com/users';

const fetchUsers = (userLogin) => new Promise(async (resolve, reject) => {
  try {
    const parsedLogin = userLogin ? `/${userLogin}` : '';
    const usersFromApi = await fetch(`${USERS_API}${parsedLogin}`);
    const users = await usersFromApi.json();
    resolve(users);
  }
  catch (e) {
    console.error(e);
    reject('Data couldn´t be fetched');
  }
});

export default fetchUsers;