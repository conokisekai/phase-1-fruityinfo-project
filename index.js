document.addEventListener('DOMContentLoaded', function () {
  // Get a reference to the <ul> element where you want to display the data
  const fruitList = document.getElementById('fruit-list');

  // Define the API URL
  const fruitDetails = document.querySelector('.fruit-details');
  let data; // Define data in a broader scope

  // Function to display full fruit details
  function displayFullFruitDetails(fruit) {
    fruitDetails.innerHTML = `
        <h2>${fruit.name}</h2>
        <p>Genus: ${fruit.genus}</p>
        <p>Name: ${fruit.name}</p>
        <p>Family: ${fruit.family}</p>
        <p>Order: ${fruit.order}</p>
        <ul>
          <li>Carbohydrates: ${fruit.nutritions.carbohydrates} g</li>
          <li>Protein: ${fruit.nutritions.protein} g</li>
          <li>Fat: ${fruit.nutritions.fat} g</li>
          <li>Calories: ${fruit.nutritions.calories}</li>
          <li>Sugar: ${fruit.nutritions.sugar} g</li>
        </ul>
      `;
  }

  // Function to handle the click event on list items
  function handleItemClick(event) {
    const listItem = event.target;
    const index = Array.from(fruitList.children).indexOf(listItem);

    if (index !== -1 && data) {
      const selectedFruit = data[index];
      displayFullFruitDetails(selectedFruit);
    }
  }

  fetch(
    'https://cors-anywhere.herokuapp.com/https://fruityvice.com/api/fruit/all'
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((jsonData) => {
      data = jsonData;
      if (Array.isArray(data) && data.length > 0) {
        data.forEach((entry) => {
          const { name } = entry;
          const listItem = document.createElement('li');
          listItem.textContent = name;
          listItem.addEventListener('click', handleItemClick);
          fruitList.appendChild(listItem);
        });
      } else {
        console.error('No data found in the response.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  // Function to handle form submission
  document
    .getElementById('fruit-info')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(event.target);

      // Convert the form data to a plain object
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      console.log(formObject);
      // Perform a PUT request to update the fruit information
      fetch(
        'https://cors-anywhere.herokuapp.com/https://fruityvice.com/api/fruit',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formObject),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          alert('Form submission was successful. Response was OK.');
        })
        .catch((error) => {
          alert(
            'There was a problem with the input fields or the fruit already exists.'
          );
          console.error('Error:', error);
        });
    });
});
