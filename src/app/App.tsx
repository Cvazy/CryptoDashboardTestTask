import React from "react";
import { Header, NavBar } from "widgets";
import { AppRouter } from "./providers";

function App() {
  return (
    <div
      className={
        "flex flex-col items-center bg-[#d3d3d369] w-full h-full relative"
      }
    >
      <Header />

      <main className={"flex flex-grow w-full"}>
        <AppRouter />
      </main>

      <NavBar />
    </div>
  );
}

export default App;
