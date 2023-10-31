"use client";
import React, { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
export default function Home() {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <div className="text-white">
      <Header />
    </div>
  );
}
