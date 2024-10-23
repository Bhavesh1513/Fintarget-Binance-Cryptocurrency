import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';

const TradingViewChart = ({ selectedCoin, selectedInterval }) => {
  return (
    <div className="w-full  x-w-full h-[400px] md:h-[500px] bg-gray-800 rounded-xl shadow-2xl overflow-hidden   hover:shadow-pink-500/50">
      <TradingViewWidget
        symbol={`BINANCE:${selectedCoin}`}
        interval={selectedInterval}
        theme="dark"
        autosize
      />
    </div>
  );
};

export default TradingViewChart;
