function authHeader() {
  return {
    Authorization: "Bearer " + localStorage.getItem("token")
  };
}

async function loadStats(role) {
  let url = role === "citizen"
    ? "/reports/mine"
    : "/reports";

  const res = await fetch(API_BASE_URL + url, {
    headers: authHeader()
  });

  const data = await res.json();
  console.log("Reports:", data);
}