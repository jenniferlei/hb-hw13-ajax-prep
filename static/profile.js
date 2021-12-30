function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    salary: document.querySelector('[name="salary"]').value,
    education: document.querySelector('[name="education"]').value,
    state: document.querySelector('#state-field').value,
    city: document.querySelector('[name="city"]').value,
    garden: document.querySelector('[name="garden"]').value,
    tv: document.querySelector('[name="tv"]').value,
  };

  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      document.querySelector('#profiles').insertAdjacentHTML('beforeend',
      `<li>${responseJson.fullname} is ${responseJson.age} and works as a ${responseJson.occupation}
      <br>They have a salary of ${responseJson.salary}, with an education level of ${responseJson.education}
      <br>They live in a(n) ${responseJson.city} part of ${responseJson.state}</li>`);
    });
  // make request to server to get the data
  // add the data the server returns to the document
  // (you can add it to the end of the div with ID "profiles")
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
