import React from 'react';
import Tables from './Tables';
import { Button, Input } from '@nextui-org/react';
import moment from 'moment';
import OtherComp from "./data"

// Main component for the Explore Tab
export default function ExploreTab({ characters, isDisplay }) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
  
    <div className="mb-10 md:mb-16">
      <h1 className="font-light  mb-4 text-center text-2xl text-gray-800 md:mb-6 lg:text-3xl">Carbon Offset Simulator tool</h1>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Experience the Future of Sustainable Living – Try Out This Carbon Offset Simulator Tool</p>
    </div>
    
      <div className="w-full  rounded">
        <Tables/>
      </div> 
    <div id="rightfield" className="w-full p-5 mt-5  bg-black rounded">
    </div>
     

  </div>
  );
}
