import { useState } from "react";
import "./App.css";
import Tank from "./components/Tank";

function App() {
  const [totalWater, setTotalWater] = useState(0);

  const updateTotalWater = (qtyWaterAdded) => {
    setTotalWater((prevTotal) => prevTotal + qtyWaterAdded);
  };

  return (
    <div className="main">
      {[1, 2, 3, 4].map((id) => {
        return (
          <Tank
            key={id}
            id={id}
            totalWater={totalWater}
            onWaterAdded={updateTotalWater}
          />
        );
      })}
   
    </div>
  );
}

export default App;
