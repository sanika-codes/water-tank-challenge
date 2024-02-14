import React, { useRef, useState, useEffect } from "react";
import "./Tank.css";

function Tank(props) {
  const [waterLevel, setWaterLevel] = useState(0);
  let timer = useRef(null);
  let prevLevel = useRef(0);
  let distributeTimer = useRef(null);

  useEffect(() => {
    let averageWater = props.totalWater / 4;
    console.log(averageWater);
    if (props.totalWater === 0) return;
      distributeTimer.current = setInterval(() => {
      setWaterLevel((waterLevel) => {
        if (waterLevel === averageWater) {
          clearInterval(distributeTimer.current);
          return waterLevel;
        }
        if (waterLevel > averageWater) {
          //("decrease water");
          return waterLevel - 25;
        }
        //("increase water");
        return (
          waterLevel +
          (waterLevel + 25 / 3 > averageWater
            ? averageWater - waterLevel
            : 25 / 3)
        ); // dividing for 3 to maintain speed.
      });
    }, 1000);

    return () => {
      clearInterval(distributeTimer.current);
    };
  }, [props.totalWater]);

  const addWater = () => {
    prevLevel.current = waterLevel;

    setWaterLevel((prevLevel) => {
      if (prevLevel >= 1000) return 1000;

      return prevLevel + 200 > 1000 ? 1000 : prevLevel + 200;
    });
  };

  const emptyWater = () => {
    prevLevel.current = waterLevel;
    setWaterLevel(0);
    props.onWaterAdded(-prevLevel.current);
  };

  const startTimer = () => {
    console.log("down" + Date.now());

    timer.current = setInterval(addWater, 1000);
  };

  const endTimer = () => {
    clearInterval(timer.current);
    if (waterLevel > 0) props.onWaterAdded(waterLevel - prevLevel.current);
  };

  return (
    <div className="tank-wrapper">
      <button
        className="add"
        onMouseDownCapture={startTimer}
        onMouseUp={endTimer}
      >
        Add
      </button>
      <button className="empty" onClick={emptyWater}>
        Empty
      </button>
      <div className="tank">
        <div
          className="water-level"
          style={{ height: `${(waterLevel / 1000) * 100}%` }}
        ></div>
      </div>
    
    </div>
  );
}

export default Tank;
