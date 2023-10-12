# FruityInfo Web App

## Application Name: FruityInfo

### Author

Conrad Kambi  
[GitHub Profile](https://github.com/conokisekai)

## Introduction

FruityInfo is an interactive Single Page Application designed to explore the fascinating world of fruits. Users can effortlessly access an extensive database of fruits, including detailed nutritional information, origin, and interesting facts. Whether you're curious about the calorie content of your favorite fruit or want to discover exotic fruits from around the world, FruityInfo provides an engaging and visually appealing experience.

## Features

- **Display Fruit Information:** Detailed nutritional values, origin, and fun facts.
- **List All Fruits:** Browse a comprehensive list of available fruits.
- **Contribute New Fruits:** Users can directly add new fruits to the database.
- **Interactive Preferences:** Users can express their liking for a fruit, dynamically changing its appearance.

## Project Setup

### Prerequisites

- Create a new project folder on your local machine.
- Create a new GitHub repository for your project.
- Clone the repository to your local machine: `git clone <repository_url>`

### Local Development

1. **Navigate to the project folder:** `cd fruityinfo`
2. **Open `index.html` in your browser to view the application.**

## Core Features

1. **Display Fruit Information:** Provides detailed nutritional values, origin, and fun facts.
2. **List All Fruits:** Users can browse an extensive list of available fruits and click to view details.
3. **Contribute New Fruits:** Users can submit new fruits, pending admin approval for database inclusion.
4. **Interactive Preferences:** Users can click a "like" button, dynamically changing the appearance of the liked fruit.

## API Data Usage

- **Endpoint for All Fruits:** `GET /api/fruit/all`
  - Retrieve a list of all fruits available in the API.
  - Minimize memory consumption by retrieving all details in one request.

- **Endpoint for Adding Fruits:** `PUT /api/fruit/`
  - Submit new fruit data in JSON format for approval.

## Challenges & Solutions

- **Handling API Calls:** Managed requests to Fruityvice API and updated UI with received data.
- **Handling Asynchronous API Calls:** Utilized fetch API with promises and Async/Await for form submissions.
- **Data Validation:** Validated user-submitted data for accuracy and completeness.
- **User Feedback:** Provided feedback to users about the status of their submitted fruit data.

## Coding Practices

- **HTML/CSS/JS:** Utilized HTML, CSS, and JavaScript for the frontend.
- **Modular Programming:** Implemented modular functions for better organization and readability.

## Stretch Goals

- **Reverse Proxy:** Utilized [cors-anywhere.herokuapp.com](https://cors-anywhere.herokuapp.com/corsdemo) to bypass CORS restrictions and access API.

## Disclaimer

Due to CORS policy limitations, [cors-anywhere.herokuapp.com](https://cors-anywhere.herokuapp.com/corsdemo) was used as a reverse proxy to overcome API access restrictions.


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