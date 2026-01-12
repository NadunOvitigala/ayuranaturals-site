const API_URL = "https://API_ID.execute-api.ap-south-1.amazonaws.com/prod";

export const sendContact = (data) =>
  fetch(`${API_URL}/contact`, {
    method: "POST",
    body: JSON.stringify(data),
  });

export const sendAppointment = (data) =>
  fetch(`${API_URL}/appointment`, {
    method: "POST",
    body: JSON.stringify(data),
  });
