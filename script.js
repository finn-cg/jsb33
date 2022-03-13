const accounts = [{ 
    username: 'abc',
    password: '123'
},
{
    username: 'cuong',
    password: '456'
},
{
    username: 'nva',
    password: '789'
}]

document.getElementById('sign-in').addEventListener('click', () => {
    const acc = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // if (acc != username || pass != password) {
    //     document.querySelector('.alert').innerText = '* Account is incorrect!';
    // } else {
    //     location.href = 'https://www.facebook.com/finn.nhatcuong/';
    // }

    for (account of accounts) {
        if (account.username == acc && account.password == pass) {
            location.href = 'https://www.facebook.com/finn.nhatcuong/';
            return;
        }
    }

    document.querySelector('.alert').innerText = '* Account is incorrect!';
})

function plus10(a) {
    return a + 10;
}

const plus10_2 = a => a + 10;