import React, { useState, useEffect } from 'react';
import CoinSelector from './components/CoinSelector';
import IntervalSelector from './components/IntervalSelector';
import TradingViewChart from './components/TradingViewChart';
import useWebSocket from './hooks/useWebSocket';
import CustomErrorBoundary from './components/ErrorBoundary'; 
import './App.css';

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState('ETHUSDT');
  const [selectedInterval, setSelectedInterval] = useState(1);
  const [candlestickData, setCandlestickData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(selectedCoin)) || {};
    const lastData = storedData[selectedInterval] || [];
    setCandlestickData(lastData);

    const lastInterval = localStorage.getItem(`${selectedCoin}_lastInterval`) || selectedInterval;
    setSelectedInterval(lastInterval);
  }, [selectedCoin]);

  useWebSocket(selectedCoin, selectedInterval, setCandlestickData);

  const handleCoinChange = (e) => {
    setSelectedCoin(e.target.value);
  };

  const handleIntervalChange = (e) => {
    const interval = e.target.value;
    setSelectedInterval(interval);
    localStorage.setItem(`${selectedCoin}_lastInterval`, interval);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-5">
      <h1 className="pb-2 text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse">
        Live Cryptocurrency Candlestick Chart
      </h1>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8 w-72">
        <CoinSelector selectedCoin={selectedCoin} onChange={handleCoinChange} />
        <IntervalSelector selectedInterval={selectedInterval} onChange={handleIntervalChange} />
      </div>

      <TradingViewChart selectedCoin={selectedCoin} selectedInterval={selectedInterval} />
    </div>
  );
};

const WrappedApp = () => (
  <CustomErrorBoundary>
    <App />
  </CustomErrorBoundary>
);

export default WrappedApp;
