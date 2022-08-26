const profilesTel = document.querySelectorAll('.profile__tel');

profilesTel.forEach(profileTel => {
    let text = '';
    const tel = profileTel.getAttribute('href').slice(4) || ' номер не известен';
    // to format "+375 29 234 65 85"
    profileTel.textContent = 
    `тел: ${tel.slice(0, 4)} ${tel.slice(4,6)} ${tel.slice(6, 9)} ${tel.slice(9,11)} ${tel.slice(11)}`
})