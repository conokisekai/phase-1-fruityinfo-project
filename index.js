document.addEventListener('DOMContentLoaded', function () {
  // Get a reference to the <ul> element where you want to display the data
  const fruitList = document.getElementById('fruit-list');

  // Define the API URL
  const apiUrl =
    'https://cors-anywhere.herokuapp.com/https://fruityvice.com/api/fruit/all'; // Points to your json-server

  const fruitDetails = document.querySelector('.fruit-details');
  let data; // Define data in a broader scope

  // Function to display fruit details

  // Function to display full fruit details
  function displayFullFruitDetails(fruit) {
    // Create a details string containing all the information
    const details = `
        Genus: ${fruit.genus}<br>
        Name: ${fruit.name}<br>
        Family: ${fruit.family}<br>
        Order: ${fruit.order}<br>
        Nutritional Information:
        - Carbohydrates: ${fruit.nutritions.carbohydrates} g
        - Protein: ${fruit.nutritions.protein} g
        - Fat: ${fruit.nutritions.fat} g
        - Calories: ${fruit.nutritions.calories}
        - Sugar: ${fruit.nutritions.sugar} g
      `;
    fruitDetails.innerHTML = details;
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

  fetch(apiUrl)
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
});
