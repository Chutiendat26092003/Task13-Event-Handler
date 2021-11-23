function checkUsername(){
    var elMsg = document.getElementById('feedback'); // gọi đến id="feedback"
    var elUsername = document.getElementById('username');
    if (elUsername.valueOf.length < 5){ // nếu nhỏ hơn 5 giá trị
        elMsg.textContent = 'Username must be 5 characters or more';
    }else {
        elMsg.textContent = '';
    }
}