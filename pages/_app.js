import React from "react";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
