import { useState } from "react";
import { BTC_RATE } from "../constants/theme";
import { usdToBtc, btcToUsd } from "./converter";

export function useBitcoinConverter() {
  const [usd, setUsd] = useState("1000");
  const [btc, setBtc] = useState(
    usdToBtc("1000", BTC_RATE)
  );

  const handleUsdChange = (value: string) => {
    setUsd(value);
    setBtc(usdToBtc(value, BTC_RATE));
  };

  const handleBtcChange = (value: string) => {
    setBtc(value);
    setUsd(btcToUsd(value, BTC_RATE));
  };

  return {
    usd,
    btc,
    handleUsdChange,
    handleBtcChange,
  };
}