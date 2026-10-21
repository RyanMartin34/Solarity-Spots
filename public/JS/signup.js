const form = document.querySelector(".signup-form");

form.addEventListener("submit", addUserFrontEnd);

async function addUserFrontEnd(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;

  try {
    const response = await fetch("/api/auth/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    form.reset();
    console.log("Frontend: User Credentials Sent");
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
}
