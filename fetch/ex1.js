const urlForm = 'https://api.github.com/users/';

let fetchUserInfo = async(user) => {
    let url = urlForm + user
    let res = await fetch(url);
    let data = await res.json();
    
    let div = document.querySelector('.item');
    div.innerHTML = `
        <img src = ${data.avatar_url} alt="">
        <h2>${data.login}</h2>`;
};
document.querySelector(".search-button").addEventListener('click',() => {
    fetchUserInfo(document.querySelector(".search").value);
});
