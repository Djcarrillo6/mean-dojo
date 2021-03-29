const axios = require('axios');

const displayName = (user) => {
  const { data } = user;
  const { login } = data;
  console.log(login);
}

axios.get('https://api.github.com/users/Djcarrillo6')
.then( (response) => {
  displayName(response)
})
.catch((err) => {
  console.log(err.message);
})
//