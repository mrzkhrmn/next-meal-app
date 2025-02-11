"use client";
import React from "react";

export default function GoBackButton() {
  const handleClick = () => {
    window.history.back();
  };
  return <button onClick={handleClick}>Geri Dön</button>;
}
