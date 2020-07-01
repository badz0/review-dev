// GET ivan.com/users?limit=10&sort=last-name
// GET ivan.com/users/{id}
// path variable - :id {id}
// POST ivan.com/users - create user
// PUT ivan.com/users/{id} - update user
// DELETE ivan.com/users/{id} - delete user


// localStorage.setItem('user', JSON.stringify({name: 'ivan'}));
// sessionStorage.setItem('user', 'ivan');

// console.log(JSON.parse(localStorage.getItem('user')));
async function a() {
  try {
    let res = await axios('https://jsonplaceholder.typicode.com/user');
    console.log('resa: ', res.data);
  } catch(err) {
    console.log('erra: ', err);
  }
}

async function f() {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/user');
    console.log('res: ', res);
    if (!res.ok) {
      throw 'request failed ' + res.status;
    }
    let data = await res.json();
    console.log('resf: ', data);
  } catch(err) {
    console.log('errf: ', err);
  }
}




const KEY = 'XHk1e8xUVoVSk1NXVDUnmJvkCrXbpSxLWmwW'
const BASE = 'https://gorest.co.in/public-api'


async function getUsers(nameFilter) {
  try {
    const config = {
      headers: {'Authorization': 'Bearer ' + KEY},
      params: {first_name: nameFilter}
    };

    const res = await axios.get(BASE + '/users', config);

    return res.data.result;
  } catch (err) {
    console.log('something bad happened');
    return [];
  }
}

function renderUsers(users) {
  const container = document.querySelector('.users');
  container.innerHTML = '';

  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    {/* <img class="user__img" src="${user._links.avatar.href}"> */}
    userDiv.innerHTML = `
      <h4>${user.first_name} ${user.last_name}</h4>
      <h5>${user.email}</h5>
    `;
    container.append(userDiv);
  })
}

function createUser(fname, lname, email) {
  const config = {
    method: 'POST',
    headers: {'Authorization': 'Bearer ' + KEY},
    data: {
      first_name: fname,
      last_name: lname,
      email,
      gender: 'male'
    }
  };

  return axios(BASE + '/users', config).catch((err) => {
    console.log('errr', err);
  })
}

function filterInit() {
  document.filterForm.elements.filterApply.addEventListener('click', async function(event) {
    const val = document.filterForm.elements.filterInput.value;
    if (!val) return;
    
    const users = await getUsers(val);
    document.filterForm.elements.filterInput.value = '';
    renderUsers(users);
  });
}


function createInit() {
  const fnameEl = document.querySelector('#fname');
  const lnameEl = document.querySelector('#lname');
  const emailEl = document.querySelector('#email');
  const btnCreate = document.querySelector('#create');
  
  btnCreate.addEventListener('click', () => {
    if (fnameEl.value && lnameEl.value && emailEl.value) {
      createUser(fnameEl.value, lnameEl.value, emailEl.value)
        .then(() => {
          fnameEl.value = '';
          lnameEl.value = '';
          emailEl.value = '';
        });
    }
  });
}


filterInit();
createInit();
getUsers().then((users) => {
  renderUsers(users);
});
// getUsers().then(renderUsers)




