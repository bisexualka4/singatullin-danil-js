async function createUser(userData) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    console.log('пользователь создан');
    console.log(data);
    return data;
  } catch (e) {
    console.log("ошибка при создании пользователя: " + e);
  }
}

createUser({
  name: 'кто-то такой-то',
    email: 'idk@example.com',
    phone: '+79996668877'
});


async function createPost(userData) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    console.log('пользователь создан');
    console.log(data);
    
    return data;
  } catch (e) {
    console.log("ошибка при создании пользователя: " + e);
  }
}

createPost({
  title: "новый пользователь - дворф дворфов ",
  body: "пользователь зарегестрирован с почтой - dwarf@example.com",
  userId: "ID002"
});