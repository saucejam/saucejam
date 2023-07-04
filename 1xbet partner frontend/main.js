function greeting() {
    var username = document.querySelector('.username').value;
    let errorMessage = document.querySelector('.error-username');

    if (username != "") {

        document.querySelector('.hi').innerHTML = `Welcome, ${username}`;

        document.querySelector('.form').style.display = 'none';
    }

    else {
        errorMessage.innerHTML = 'Please enter your username.';
    }
    
}