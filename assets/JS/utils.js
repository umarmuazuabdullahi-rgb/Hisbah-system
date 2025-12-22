function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function requireAuth() {
  if (!localStorage.getItem("token")) {
    location.href = "../index.html";
  }
}