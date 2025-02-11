import React from "react";
import { Header, NavBar } from "widgets";
import { AppRouter } from "./providers";

function App() {
  return (
    <div className={"flex flex-col items-center w-full h-full relative"}>
      <Header />

      <main className={"flex flex-grow w-full"}>
        <div className={"p-5 w-full h-full"}>
          <AppRouter />
        </div>
      </main>

      <NavBar />
    </div>
  );
}

export default App;
