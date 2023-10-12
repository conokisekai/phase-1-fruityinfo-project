# Fruityinfo Web App

## Application Name: Fruityinfo

## Author

Conrad Kambi
https://github.com/conokisekai

## Basic Story

FruityInfo is an interactive Single Page Application that provides a delightful exploration of the world of fruits. Users can effortlessly access a vast database of fruits and their detailed information. Whether you are curious about the nutritional values of your favorite fruit or want to discover exotic fruits from around the globe, FruityInfo has you covered.

  

With FruityInfo, users can easily scroll through any fruit by name and receive comprehensive details, including nutritional content, origin, and interesting facts. Additionally, users can express their preferences by clicking a "like" button next to each fruit, which dynamically changes the color of the liked fruit, making the experience engaging and visually appealing.

  

But that's not all! FruityInfo empowers users to actively contribute to its database. Have a unique fruit to share? Users can directly add new fruits to the database, ensuring that FruityInfo's collection is ever-expanding and up-to-date. Say goodbye to limited information and hello to a vibrant world of fruits, all at your fingertips.

  

Explore, learn, and interact with fruits like never before – FruityInfo is your passport to the fruity universe!

  
## Project Setup

Follow these steps to set up the project:

1.  **Create a new project folder:** Create a new folder for your project on your local machine.
    
2.  **Create a new GitHub repository:** Create a GitHub repository for your project.
    
3.  **Clone the repository:** Clone the repository to your local machine using the following command:
    
    `git clone <repository_url>` 
    
4.  **Install dependencies:** No additional dependencies are required for this project.

## Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository:**
    
    `git clone <repository_url>` 
    
2.  **Navigate to the project folder:**
    
    `cd fruityinfo` 
    
3.  **Open the `index.html` file in your browser to view the application.**

  

## Core Features of MVP

  
1 . Display Fruit Information:

Display information about the fruit, such as nutritional values, origin, and interesting facts.

  

2 .List All Fruits:

Users can view a list of all available fruits.

Clicking on a fruit in the list displays detailed information about that fruit.

  

3 . Contribute New Fruits:

Users can add new fruits directly to the database.

Submitted fruits are added to the database without requiring admin approval.

  

4 . Interact with Fruits:

Users can click a "like" button next to each fruit to express their liking for the fruit.

Clicking the "like" button changes the color of the liked fruit, indicating user preference.

  
  
  

## API Data Usage

  
        
-   Endpoint for All Fruits:
    
    `GET /api/fruit/all`
    
-   Retrieve a list of all fruits available in the API:
Since the response comes with all details of a fruit, i did not need to access the API endpoint of a specific fruit. This is to minimize memory consumption in the client's browser.
    
-   Endpoint for Adding Fruits:
    

  

     `PUT /api/fruit/`
    
-   Submit new fruit data in JSON format for approval.
    

  
  



## Challenges Expected

-   ### Handling API Calls:
    

Handling requests to the Fruityvice API and updating the UI with the received data.

-   ### Data Validation:
    

Validating user-submitted data before sending it to the API to ensure accuracy and completeness.

-   ### User Feedback:
    

Providing feedback to users about the status of their submitted fruit data (Valid/ Invalid fruit details).

  
  

## Meeting Project Requirements

  

1.  HTML/CSS/JS :
    

  

-   Use HTML, CSS, and JavaScript to create the frontend interface.
    
-   Bootstrap can be used for responsive design and styling components.
    

2.  Handling API Calls:
    

  

-   Utilize JavaScript's fetch API to make synchronous calls to Fruityvice endpoints.
    
-   Handle responses for synchronous code.
    

3.  Event Listeners:
    

  

-   Implement event listeners such as DOMContentLoaded for initial data loading, and click for handling user interactions such as liking fruits, and submit for handling form submissions.
    

4.  Interactivity:
    
-   Provide interactivity by allowing users to scroll through list of fruits and view detailed information.
    
-   User-submitted data interaction can be implemented using form submissions.
    

5.  Good Coding Practices:
      

-   Keep the code DRY by abstracting repetitive tasks into functions.
    
-   Use modular programming techniques for better organization and readability.
    

  

## Stretch Goals

-   ### Using reverse proxy to access CORS enabled servers.
- Made use of [cors-anywhere.herokuapp.com](https://github.com/Rob--W/cors-anywhere) in order to have access to an API that is CORS enabled.
    

## Disclaimer!

Due to CORS policy from the api provider I was using, and the json-server was not serving as an adequate reverse proxy, I decided to use [cors-anywhere.herokuapp.com](https://github.com/Rob--W/cors-anywhere) in order to bypass the restriction I was facing and make adeqaute calls to the api.


# LICENCE
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>