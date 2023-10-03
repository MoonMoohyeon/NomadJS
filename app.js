// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const loginButton = document.querySelector("#login-form button");

// const link = document.querySelector("#a");

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello " + username;
    paintGreetings(username);
    // if(username === "") {
    //     alert("Please write your name.");
    // } else if(username.length > 15) {
    //     alert("Your name is too long.");
    // }
    // console.dir(loginInput.value);
}

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.log(event);
//     console.dir(event);
//     alert("click!!!");
// }

// link.addEventListener("click", handleLinkClick);

loginForm.addEventListener("submit", onLoginSubmit);
// onLoginSubmit() // 즉시 실행
// 이벤트리스너의 첫번째 인자는 벌어진 이벤트의 정보를 담고 있음

// loginButton.addEventListener("click", onLoginBtnClick);