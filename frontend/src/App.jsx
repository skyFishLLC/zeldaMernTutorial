import React, { useEffect } from "react";
import AOS from "aos";
import Index from "./routes";

function App() {

    useEffect(() =>{
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    });

  return (
    <>
      <Index />
    </>
  );
}

export default App;
