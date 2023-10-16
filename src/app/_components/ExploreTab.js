import React, { useState } from 'react';
import Tables from './Tables';
import { Button, Input } from '@nextui-org/react';
import moment from 'moment';
import OtherComp from "./data"
export default function ExploreTab({ characters, isDisplay }) {
  return (
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
  
    <div class="mb-10 md:mb-16">
    <h1 className="font-light  mb-4 text-center text-2xl text-gray-800 md:mb-6 lg:text-3xl">Carbon Offset Simulator tool</h1>
    

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>

    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-1/2    rounded">
      <Tables/>
      <div className="max-w-md mx-auto">
       
      
    </div>
      </div>
      <div className="w-full lg:w-1/2 bg-green-500  rounded">
<OtherComp/>
        {FormData.length> 0 ? <> </> :<><div class="rounded-lg bg-gray-100 p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does this tool work?</h3>

          <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>

        <p class="text-gray-500">Select your country on  the left and we'll calculate your cost in that location, then choose the amount of times you wish to buy ("add new") per months or years </p>
      </div> </>}
      
      </div>
    </div>

<div class="grid gap-4 grid-rows-2  ">

    <div class="grid gap-4  sm:grid-cols-2 md:grid-cols-4 md:gap-8">
     
      <div class="rounded-lg bg-gray-100 p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does the product work?</h3>

          <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>

        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>
      
      <div class="rounded-lg bg-gray-100 p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-semibold text-indigo-500 sm:text-lg md:text-xl">What are the features?</h3>

          <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>

        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>
     
    
     
    </div>
    <div class="grid gap-4 md:row-start-2 md:grid-cols-4 sm:grid-cols-2 md:gap-8">
     
      <div class="rounded-lg bg-gray-100 p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does the product work?</h3>

          <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>

        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>
      
      <div class="rounded-lg bg-gray-100 p-5">
        <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 class="font-semibold text-indigo-500 sm:text-lg md:text-xl">What are the features?</h3>

          <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>

        <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>
     
    
     
    </div>
    </div>
  </div>
  );
}
