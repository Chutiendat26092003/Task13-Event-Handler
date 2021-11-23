function checkUsername(){
    var username = el.value;
    if(username.length < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet ...';
    } else {
        elMsg.textContent = '';
    }
}

function tipUsername(){
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username nust be at least 5 characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus',tipUsername, false);
// khi tương tác đến thì sự kiện sẽ xuất hiện
el.addEventListener('blur', checkUsername, false);
// tương tác qua thì sự kiện sẽ xuất hiện
