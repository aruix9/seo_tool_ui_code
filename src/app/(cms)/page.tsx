'use client'

import { useState } from "react";

export default function Home() {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  if (shouldThrowError) {
    // Simulate an error
    throw new Error('This is a simulated error on the homepage.');
  }
  return (
    <div className="self-center">
      <h1 className="text-3xl mt-16">Butterswipe Tool - Home page</h1>
      <button onClick={() => setShouldThrowError(true)}>
        Trigger Error
      </button>
    </div>
  );
}
