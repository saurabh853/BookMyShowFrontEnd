# BookMyShowFrontEnd

## Project Overview

The frontend server (client) is responsible for presenting the user with the website's interface and facilitating interactions. It communicates with the backend server for booking and retrieving booking details.

### Setup and Running

1. Make sure you have Node.js and npm installed.

2. Clone this repository and navigate to the frontend directory:
   ```bash
   git clone https://github.com/saurabh853/BookMyShowFrontEnd.git
   cd BookMyShowFrontEnd
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the frontend server:
   ```bash
   npm start
   ```

5. The frontend server will be running on port 3000 by default. Open your web browser and navigate to `http://localhost:3000` to access the website.

### Features

- Display a list of movie names, time slots, and different seat types.
- Select movies and time slots by clicking on respective divs.
- Specify the number of seats for each seat type.
- Submit a booking with selected options.
- Display last booking details.
- User selections persist across page reloads using `localStorage`.

### Project Structure

- `src/`: Contains the source code for the frontend application.
- `public/`: Static assets and HTML template.