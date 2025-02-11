import React, { useState } from "react";
import "./Card.css";
//import UnitForm from "./UnitForm";
import { formatTime } from "./TimeFormatter";
import WorkoutBanner from "./WorkoutBanner";

const Card = ({ initialData }) => {
  const [data, setData] = useState({
    Distance: "1.00 mi",
    EstTime: "9:00",
    Type: "Run",
  });
  const [isEditing, setIsEditing] = useState(false);

  const [unit, setUnit] = useState("distance");
  const [distance, setDistance] = useState("3.10");
  const [intensity, setIntensity] = useState("pace");
  const [time, setTime] = useState("");
  const [validTime, setValidTime] = useState(true);
  const [intensityMeasure, setIntensityMeasure] = useState("");
  const [runType, setRunType] = useState("Warm Up");
  const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
  
  const [timeObj, setTimeObj] = useState({
    hours: "00",
    minutes:"24",
    seconds:"30"
  })

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = () => {
    setData({
      Distance: "1.00 mi",
      EstTime: time,
      Type: runType,
    });

    setIsEditing(false);
  };

  const handleRunTypeChange = (event) => {
    setRunType(event.target.value);
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    setDistance("3.10"); // Clear values on unit change
    setTime("00:00:00");
  };

  const handleInputChange = (event) => {
    if (event.target.name === "distance") {
      setDistance(event.target.value);
    }
  };

  const handleTimeInput = (event) =>
  {
    console.log( event.target.value.length)
    if(timeRegex.test(event.target.value)){
      setValidTime(true);
      setTime(event.target.value)
      console.log("regex was verified")
    }
    else{
      setValidTime(false);
      setTime(event.target.value)
    }
  }

  const handleIntensityChange = (event) => {
    setIntensity(event.target.value);
    setIntensityMeasure("");
    console.log(event.target.value);
  };

  const handleIntensityMeasureChange = (event) => {
    if (intensity === "none") {
      setIntensityMeasure("");
    } else {
      setIntensityMeasure(event.target.value);
    }
    console.log(event.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <WorkoutBanner editFunc={handleEdit} runType={runType}/>
          <div class="grid gap-y-3 tracking-wide px-1 py-4 text-gray-700 text-xs font-bold bg-gray-200 rounded-b-lg">
            <div class="p-6">
              {" "}
              <UnitForm
                runType={runType}
                unit={unit}
                distance={distance}
                time={time}
                intensity={intensity}
                intensityMeasure={intensityMeasure}
                validTime={validTime}
                handleRunTypeChange={handleRunTypeChange}
                handleUnitChange={handleUnitChange}
                handleInputChange={handleInputChange}
                handleIntensityChange={handleIntensityChange}
                handleIntensityMeasureChange={handleIntensityMeasureChange}
                handleTimeInput={handleTimeInput}
              />
            </div>
            <div class="flex">
              {" "}
              <div class="px-56"></div> <div></div>
              <button onClick={handleChange}>Done</button>{" "}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div class="grid px-2">
            <WorkoutBanner editFunc={handleEdit} runType={runType} />
            <div class="flex gap-x-5 tracking-wide px-1 py-2 text-gray-700 text-xs font-bold bg-gray-200 rounded-b-lg">
              <div>
                <h2>Distance</h2>
                <h2>{data.Distance}</h2>
              </div>
              <div>
                <p>Est. Time</p>
                <p>{data.EstTime}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

function UnitForm({
  runType,
  unit,
  distance,
  time,
  intensity,
  intensityMeasure,
  handleRunTypeChange,
  handleUnitChange,
  handleInputChange,
  handleIntensityChange,
  handleIntensityMeasureChange,
  handleTimeInput,
  validTime
}) {
  return (
    <form>
      <div class="py-3">
        <label class="font-sans block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
          Type of Run
        </label>
        <select
          class="block appearance-none w-full bg-gray-100 text-xs font-bold border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="comp"
          value={runType}
          onChange={handleRunTypeChange}
        >
          <option value="Warm Up">Warm Up</option>
          <option value="Cool Down">Cool Down</option>
          <option value="Rest">Rest</option>
          <option value="Recover">Recover</option>
          <option value="Run">Run</option>
        </select>
      </div>
      <div class="py-3 block">
        <label class="font-sans block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
          Unit{" "}
        </label>
        <select
          class="appearance-none w-full bg-gray-100 text-xs font-bold border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={unit}
          onChange={handleUnitChange}
        >
          <option value="distance">Distance </option>
          <option value="time">Time</option>
        </select>

        {unit === "distance" && (
          <div class="py-3 text-left text-gray-700 text-xs font-bold mb-2 flex gap-x-2.5">
            <input
              class="font-bold  bg-gray-100 text-gray-700 text-xs text-right"
              placeholder="0.00"
              type="text"
              name="distance"
              value={distance}
              onChange={handleInputChange}
            />
            <label class="py-3">Unit</label>
            <select class="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-1 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="m"> m</option>
              <option value="mi">mi </option>
              <option value="km">km </option>
            </select>
          </div>
        )}
        {unit === "time" && (
          <div>
            <div class="py-3 text-left text-gray-700 text-xs font-bold mb-2 flex gap-x-2.5">
              <input
                class="font-bold  bg-gray-100 text-gray-700 text-xs text-center  mb-2  py-2 px-1"
                placeholder="hh:mm:ss"
                type="text"
                name="time"
                value={time}
                onChange={handleTimeInput}
                maxLength="8"
              />

              {validTime === false && (
                <div class="py-1 text-left text-gray-700 text-xs font-bold mb-2 flex px-4">
                  <h4>Please Enter a valid time hh:mm:ss</h4>
                  </div>
              )
              }
              {validTime === true && (
                <h4></h4>

              )}

            </div>
          </div>
        )}
      </div>

      <div class="py-3">
        <label class="font-sans block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
          Intensity{" "}
        </label>
        <select
          class="block appearance-none w-full bg-gray-100 text-xs font-bold border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          onChange={handleIntensityChange}
          value={intensity}
        >
          <option value="pace">Pace </option>
          <option value="vo2">VO2</option>
          <option value="none">None</option>
        </select>

        {intensity === "pace" && (
          <div className="py-3 text-left text-gray-700 text-xs font-bold mb-2 flex gap-x-2.5">
            <input
              class="input font-bold bg-gray-100 text-gray-700 text-xs text-right"
              placeholder="7:30"
              type="text"
              name="pace"
              value={intensityMeasure}
              onChange={handleIntensityMeasureChange}
            />

            <label class="py-3">Per</label>
            <select class="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-1 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="m"> m</option>
              <option value="mi">mi </option>
              <option value="km">km </option>
            </select>
          </div>
        )}

        {intensity === "vo2" && (
          <div className="py-3 text-left text-gray-700 text-xs font-bold mb-2 flex gap-x-2.5">
            <input
              class="input py-3 font-bold bg-gray-100 text-gray-700 text-xs text-right"
              placeholder=" mL/kg/min"
              type="text"
              name="vo2"
              value={intensityMeasure}
              onChange={handleIntensityMeasureChange}
            />
            
          </div>
        )}

        {intensity === "none" && <div></div>}
      </div>
    </form>
  );
}

export default Card;
