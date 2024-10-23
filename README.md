# Binance Cryptocurrency
This is a **React** application that displays live cryptocurrency candlestick charts using data from the **Binance API**. The application features real-time updates through WebSockets and allows users to select different cryptocurrencies and time intervals for the candlestick chart display.

## Features

- Real-time cryptocurrency candlestick data from Binance API via WebSocket.
- Dynamic selection of cryptocurrencies and time intervals.
- Interactive, customizable charts powered by **TradingView**.
- Local storage persistence for the last viewed coin and interval.
- Error boundary for catching and displaying errors in the UI.

## Tech Stack

- **React.js**: Frontend framework.
- **WebSocket**: For real-time data streaming from Binance.
- **Tailwind CSS**: For styling the UI.
- **TradingView Widget**: For rendering candlestick charts.
- **React Error Boundary**: For handling runtime errors gracefully.

## Installation Instructions

To set up the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
   https://github.com/Bhavesh1513/Fintarget-Binance-Cryptocurrency.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd Fintarget-Binance-Cryptocurrency
    ```

3. **Install dependencies**: Run the following command to install all the required packages:

    ```bash
    npm install
    ```

4. **Run the application**: Start the development server by running:

    ```bash
    npm start
    ```

    This will open the application in your browser at `http://localhost:3000`.

## Components Overview
**App.js**: The main component that controls the application's state (selected coin, interval) and manages the WebSocket connection.
**CoinSelector**: Dropdown component to select a cryptocurrency (e.g., ETHUSDT, BNBUSDT).
**IntervalSelector**: Dropdown component to select the time interval for the candlestick chart (e.g., 1m, 5m).
**TradingViewChart**: Displays the live candlestick chart using TradingView.
**useWebSocket Hook**: Custom React hook to handle WebSocket connections and updates.
**ErrorBoundary**: A component that wraps the app to catch and display any runtime errors.

## How It Works
- The app connects to Binance's WebSocket API to fetch real-time candlestick data for the selected cryptocurrency and interval.
- The candlestick data is saved to localStorage for offline use and restored on page reload.
- Users can select different coins and intervals from dropdowns.
- The TradingView widget renders the chart based on the selected coin and interval.
- LocalStorage Usage
- The app stores candlestick data for each selected coin and interval in localStorage.
- The last selected interval for each coin is also stored and restored on reload.
- Error Handling
- The app uses a custom ErrorBoundary to gracefully handle errors during rendering or WebSocket failures. When an error occurs, a message is    displayed, and users can reset the app.

## Project ScreenShot
![desktop](https://github.com/user-attachments/assets/29a656cb-6460-48d9-ac55-23fed9124279)
![mobile](https://github.com/user-attachments/assets/71973650-7d1e-4e43-bedc-929413f8e2ee)


