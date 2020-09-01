function Account(email, password)
{
    this.email = email;
    this.password = password;

    printInformation = function()
    {
        console.log("Email: " + this.email + " Password: " + this.password);
    }

    this.getEmail = function()
    {
        return this.email;
    }

    this.getPassword = function()
    {
        return this.password;
    }
}

// Register and add account to list
accounts = [];
function register()
{
    var emailRegister = document.getElementById("email-register").value;
    var passwordRegister = document.getElementById("pass-register").value;

    console.log(emailRegister);
    console.log(passwordRegister);

    accoumt = new Account(emailRegister, passwordRegister);

    accounts.push(accoumt);
    localStorage.setItem("account", JSON.stringify(accounts));

    alert("Account created");
}

function printAccounts()
{
    for(i=0;i<accounts.length;i++)
    {
        console.log(accounts[i].printInformation());
    }
}
