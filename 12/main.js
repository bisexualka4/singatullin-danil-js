const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const newUser = {};

function inputEmail() {
  rl.question('ваша почта: ', (email) => {
    const phoneRegex = /^(?:\+7|8)?[\s\-\.]?\(?\d{3}\)?[\s\-\.]?\d{3}[\s\-\.]?\d{2}[\s\-\.]?\d{2}$/;

    if (phoneRegex.test(email)) {
      newUser.email = email;
      inputEmail();
    } else {
      console.log('почта введена неверно, попробуйте ещё раз.');
      inputEmail(); 
    }
  });
}

function inputEmail() {
  rl.question('напишите вашу почту: ', (email) => {

     const EmailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z.]+\.[a-zA-Z]{2,6}$/;
   
    email = email.trim();
    if (EmailRegex.test(email)) {
      newUser.email = email;
      inputCity();
      } else {
      console.log('почта введена неверно, попробуйте ещё раз.');
      inputEmail();
    }
  });
}

function inputCity() {
  rl.question('напишите ваш город: ', (city) => {

    const cityRegex = /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё\s]{1,}$/;
    if (cityRegex.test(city)) {
      newUser.city = city;
      console.log('новый пользователь:');
      console.log(newUser);
      rl.close();
    } else {
      console.log('город введен неверно, попробуйте ещё раз.');
      inputCity();
    }
  });
}

inputEmail();