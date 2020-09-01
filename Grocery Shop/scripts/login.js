accounts = JSON.parse(localStorage.getItem("account"));
function printAccounts()
{
    for(i=0;i<accounts.length;i++)
    {
        console.log(accounts[i].email);
        console.log(accounts[i].password);
    }
}

function verifyLogin()
{
    let verifyEmail = document.getElementById("get-email").value;
    let verifyPassword = document.getElementById("get-password").value;
    
    for(i=0;i<accounts.length;i++)
    {
        if(verifyEmail == accounts[i].email && verifyPassword == accounts[i].password)
            {
                alert("Login successful");
                window.location.href = "main.html";
                return;
            }
    }
    return alert("Failed to login");
}