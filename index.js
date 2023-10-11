document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the <ul> element where you want to display the data
    const fruitList = document.getElementById("fruit-list");
  
    // Define the API URL
    const apiUrl =
      "https://cors-anywhere.herokuapp.com/https://fruityvice.com/api/fruit/all"; // Points to your json-server
  
    // Perform a GET fetch request to the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          data.forEach((entry) => {
            const { name, nutritions } = entry;
            if (nutritions) {
              const { calories } = nutritions;
              const listItem = document.createElement("li");
              listItem.textContent = `Name: ${name}, Calories: ${calories}`;
              fruitList.appendChild(listItem);
            } else {
              console.error("Nutritional information is missing in an entry.");
            }
          });
        } else {
          console.error("No data found in the response.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });