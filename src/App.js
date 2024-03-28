import { useState } from "react";
import "./App.css";
import Tank from "./components/Tank";

function App() {
  const [totalWater, setTotalWater] = useState(0);

  const updateTotalWater = (qtyWaterAdded) => {
    setTotalWater((prevTotal) => prevTotal + qtyWaterAdded);
  };

  return (
    <>
      <div id="intro">
        <h1>Problem Statement</h1>
        <p>
          <ul>
            <li>
              We have a magical system of connected water tanks. Each tank can
              hold 1000L of water.{" "}
            </li>
            <li>
              Every tank has an "Add water" button, if the button is pressed
              down continuously, then every 1s, it adds 200L of water in the
              tank, if the tank is not already full.{" "}
            </li>
            <li>
              The water levels in each tank will eventually settle to the same
              height.{" "}
            </li>
            <li>
              The water moves in or out of any tank at the rate of 25L/second.{" "}
            </li>
            <li>
              Every tank also has a "Empty tank" button. When clicked, it will
              remove all the water from the tank in an instant.
            </li>
          </ul>
        </p>
      </div>
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
    </>
  );
}

export default App;
