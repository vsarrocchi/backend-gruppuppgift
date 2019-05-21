
const views = {
  login: ['#loginFormTemplate', '#registerFormTemplate'],
  loginFail: ['#loginFailTemplate', '#loginFormTemplate', '#registerFormTemplate'],
  registerSuccess: ['#registerSuccessTemplate', '#loginFormTemplate', '#registerFormTemplate'],
  loggedIn: ['#createEntryFormTemplate'],
  entrySuccess: ['#createEntrySuccessTemplate', '#createEntryFormTemplate'],
  entryFail: ['#createEntryFailTemplate', '#createEntryFormTemplate']

}

const createEntryFormTemplate = document.getElementById('createEntryFormTemplate');


function renderView(view) {
  // Definiera ett target
  const target = document.querySelector('main');

  // Loopa igenom våran "view"
  view.forEach(template => {

    // Hämta innehållet i template
    const templateMarkup = document.querySelector(template).innerHTML;
    // console.log(templateMarkup);

    // skapa en div
    const div = document.createElement('div');

    // Fill den diven i target (main-element)
    div.innerHTML = templateMarkup;

    // Lägg in den diven i
    target.append(div);
  })

  // Skriva ut innehållet i target

  // console.log(view);
}
renderView(views.login);

const hideLogin = document.querySelector('#hideLoginForm');
const hideRegister = document.querySelector('#hideRegisterForm');

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Hej');

  const formData = new FormData(loginForm);
  fetch('/api/login', {
    method: 'POST',
    body: formData
  }).then(response => {
    if (!response.ok) {
      return Error(response.statusText);
    } else {
      renderView(views.loggedIn);
      hideLogin.classList.add('hidden');
      hideRegister.classList.add('hidden');
      return response.json();
    }
  })
    .catch(error => {
      console.error(error);
    })
})

const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Hej');

  const formData = new FormData(registerForm);
  fetch('/api/register', {
    method: 'POST',
    body: formData
  }).then(response => {
    if (!response.ok) {
      return Error(response.statusText);
    } else {
      return response.json();
    }
  })
    .catch(error => {
      console.error(error);
    })
})

// const entriesForm = document.querySelector('#entriesForm');
// entriesForm.addEventListener('submit', event => {
//   event.preventDefault();
//   console.log('Hej');

//   const formData = new FormData(entriesForm);
//   fetch('/api/newentry/user', {
//     method: 'POST',
//     body: formData
//   }).then(response => {
//     if (!response.ok) {
//       return Error(response.statusText);
//     } else {
//       return response.json();
//     }
//   })
//     .catch(error => {
//       console.error(error);
//     })
// })





