async function login(email, password) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  // redirect by role
  if (data.user.role === "admin") location.href = "admin/dashboard.html";
  else if (data.user.role === "officer") location.href = "officer/dashboard.html";
  else location.href = "citizen/dashboard.html";
}

function logout() {
  localStorage.clear();
  location.href = "../index.html";
}