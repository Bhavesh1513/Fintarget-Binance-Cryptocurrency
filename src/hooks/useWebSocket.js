import { useEffect, useRef } from 'react';

const useWebSocket = (selectedCoin, selectedInterval, setCandlestickData) => {
  const ws = useRef(null);

  useEffect(() => {
    const symbol = selectedCoin.toLowerCase();
    const interval = selectedInterval;
    const wsUrl = `wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`;
    ws.current = new WebSocket(wsUrl);
     console.log(ws)
    ws.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.current.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        const { k: candle } = message;

        if (!candle) {
          throw new Error("Invalid candle data received");
        }

        const newCandle = {
          time: candle.t,
          open: candle.o,
          high: candle.h,
          low: candle.l,
          close: candle.c,
          volume: candle.v,
        };

        setCandlestickData((prevData) => {
          const updatedData = [...(prevData || []), newCandle];
          localStorage.setItem(selectedCoin, JSON.stringify(updatedData));
          return updatedData;
        });
      } catch (error) {
        console.error("Error processing WebSocket message:", error);
        throw error; 
      }
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
      throw new Error("WebSocket connection error");
    };

    ws.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [selectedCoin, selectedInterval, setCandlestickData]);
};

export default useWebSocket;
