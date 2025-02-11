import React, { useState } from "react";

export default function WorkoutBanner({ editFunc, runType }) {

  let bannerColor = {
    "Warm Up":"#fdba74",
    "Cool Down":"#bae6fd",
    "Rest":"#d9f99d",
    "Recover":"#e9d5ff",
    "Run":"#f87171"
  }

  



  
    return(
        <div className="banner flex gap-x-2.5 items-center justify-between  text-black rounded-t-lg shadow-md max-w-full"
        style={{backgroundColor: bannerColor[runType]}}
        >
        <button className="btn btn-primary bg-neutral-100 bottom-2 right-2 text-black text-xs px-1 py-2 max-h-full"  style={{backgroundColor: bannerColor[runType]}} >
          ::
        </button>
    
        <div class="banner flex items-start justify-between">
          <span className="text-s font-bold text-black text-left">
            <p class="items-start">{runType}</p>
          </span>
        </div>
        <div class="px-44"></div>
    
        <button
          className="btn btn-primary bottom-2 right-2 text-black py-0 px-1 text-xs hover:bg-blue-100"
          onClick={editFunc}
          style={{backgroundColor: bannerColor[runType]}}
        >
          Edit
        </button>
        <button className="btn btn-primary bottom-2 right-2 text-black py-0 px-1 text-xs bg-neutral-100 hover:bg-blue-100"  style={{backgroundColor: bannerColor[runType]}}>
          x
        </button>
      </div>
    );
}
