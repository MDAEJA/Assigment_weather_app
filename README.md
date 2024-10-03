# Weather App

This is a simple **Weather Application** built using **React** that allows users to search for weather information for different cities. The app fetches weather data such as temperature, pressure, and data age from an external weather API and displays it in a user-friendly interface. The app is responsive and optimized for different screen sizes, including mobile devices.

## Features

- **City Selection:** Predefined list of cities for quick weather lookup.
- **Search Functionality:** Users can search for any city by typing its name.
- **Weather Details:** Displays weather description, temperature (°C), pressure (hPa), and data age (hours).
- **Delete City:** Allows users to delete a city from the displayed list.
- **Responsive Design:** Optimized for different screen sizes (including mobile devices with 320px and 375px widths).

## Demo

![Weather App Screenshot](./weatherApp.png)

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **CSS**: Styling for layout and responsiveness.
- **Weather API**: Used to fetch real-time weather data.

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MDAEJA/Assigment_weather_app.git
   
2. **Navigate to the project directory**:
   ```bash
   cd weather-app
   
3. **Install dependencies:**:
    ```bash
   npm install

4. **Start the development server**:
     ```bash
      npm start

  The app will be running at http://localhost:3000.

Usage
Get Weather: Click on any city in the sidebar or search for a city using the search bar.
Delete City: Click the 'Delete' link in the city row to remove it from the displayed list.
Responsive Design
The app adjusts its layout for screen widths of 1024px, 768px, 375px, and 320px.
On smaller screens, the layout adapts with smaller font sizes, button sizes, and a vertically stacked search section for better usability on mobile devices.
Customization
To add more predefined cities, update the cities array in the src/components/CityList.js file.

js
Copy code
const cities = ["London", "New York", "Los Angeles", "Las Vegas"];
You can also integrate additional weather data by modifying the API request in the src/api/weatherApi.js file.

Credits
Weather API: OpenWeatherMap or your chosen weather API.
React: React Documentation
License
This project is licensed under the MIT License. See the LICENSE file for details.

typescript
Copy code

You can save this content as `README.md` in your project folder, and make any changes as per you


