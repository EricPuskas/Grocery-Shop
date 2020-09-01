/**
 * Handles getting the accounts
 */
const getAccounts = () => {
  const accounts = JSON.parse(localStorage.getItem("account"));
  return accounts ? accounts : [];
};

/**
 * Handles printing the accounts
 */
const printAccounts = () => {
  const accounts = getAccounts();
  if (Array.isArray(accounts)) {
    accounts.forEach((account) => {
      console.log(account.email);
      console.log(account.password);
    });
  }
};

/**
 * Handles verifying the login
 */
const verifyLogin = () => {
  const email = document.getElementById("get-email").value;
  const password = document.getElementById("get-password").value;
  const accounts = getAccounts();

  if (Array.isArray(accounts)) {
    accounts.forEach((account) => {
      if (account.email === email && account.password === password) {
        alert("Login successful");
        window.location.href = "../grocery-shop-review/views/main.html";
        return;
      }
    });
  } else {
    return alert("Failed to login");
  }
};

/**
 * Handles registering a new user
 */
const register = () => {
  const email = document.getElementById("email-register").value;
  const password = document.getElementById("pass-register").value;
  const accounts = getAccounts();

  console.log("email:", email);
  console.log("password:", password);

  accounts.push({ email, password });
  localStorage.setItem("account", JSON.stringify(accounts));
  alert("Account created");
};
