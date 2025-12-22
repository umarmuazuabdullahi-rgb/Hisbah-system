async function createReport(formData) {
  const res = await fetch(`${API_BASE_URL}/reports`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    body: formData
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message);

  alert("Rahoto ya tafi lafiya");
}