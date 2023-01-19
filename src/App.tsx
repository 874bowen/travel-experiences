import React from "react";
import Journal from "./components/Journal";
import Navbar from "./components/Navbar";
import { data } from "./data";

function App() {
   const journals = data.map((d) => {
      return(
         <Journal
            key={d.id}
            {...d} 
         />
      )
   })
   return(
      <div>
         <Navbar />
         <section className="journal">
            {journals}
         </section>
      </div>
   );
}

export default App;