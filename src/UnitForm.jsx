import React, { useState } from "react";

const UnitForm = () => {
  const [unit, setUnit] = useState("distance");
  const [distance, setDistance] = useState("");
  const [intensity, setIntesity] = useState("pace");
  const [time, setTime] = useState("");
  const [intensityMeasure, setIntensityMeasure] = useState("");

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    setDistance("10"); // Clear values on unit change
    setTime("");
  };

  const handleInputChange = (event) => {
    if (event.target.name === "distance") {
      setDistance(event.target.value);
    } else if (event.target.name === "time") {
      setTime(event.target.value);
    }
  };
  const handleIntensityChange = (event) => {
    setIntesity(event.target.value);
    console.log(event.target.value);
  };

  const handleIntensityMeasureChange = (event) => {
    setIntensityMeasure(event.target.value);
    console.log(event.target.value);
  };

  // const runFormInput = function(run, runUnit, measure, intensity, intensityMeasure){
  //   const run = run;
  //   const runUnit = runUnit;
  //   const measure=measure;
  //   const instensity=intensity;
  //   const intensityMeasure=intensityMeasure;
  // }

  return (
    <form>
      <div class="py-3">
        <label class="font-sans block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
          Type of Run
        </label>
        <select
          class="block appearance-none w-full bg-gray-100 text-xs font-bold border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="comp"
        >
          <option value="Warm Up">Warm Up</option>
          <option value="Cool Down">Cool Down</option>
          <option value="Rest">Rest</option>
          <option value="Recovery">Recover</option>
          <option value="Run">Run</option>
        </select>
      </div>
      <div class="py-3">
        <label class="font-sans block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left">
          Unit{" "}
        </label>
        <select
          class="block appearance-none w-full bg-gray-100 text-xs font-bold border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={unit}
          onChange={handleUnitChange}
        >
          <option value="distance">Distance </option>
          <option value="time">Time</option>
        </select>

        {unit === "distance" && (
          <div class="py-3 text-left text-gray-700 text-xs font-bold mb-2 flex gap-x-2.5">
            <input
              class="input font-bold  bg-gray-100 text-gray-700 text-xs text-right"
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
          <div class="py-3 text-left text-gray-700 text-xs font-bold mb-2 flex gap-x-2.5">
            <input
              class="input py-3 font-bold bg-gray-100 text-gray-700 text-xs text-right"
              placeholder="hh:mm:ss"
              type="text"
              name="time"
              value={time}
              onChange={handleInputChange}
            />
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
              onChange={handleIntensityMeasureChange}
            />

            <label class="py-3">Unit</label>
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
              name="pace"
              onChange={handleIntensityMeasureChange}
            />
          </div>
        )}

        {intensity === "none"&&(
          <div></div>
        )}

      </div>
    </form>
  );
};

export default UnitForm;
