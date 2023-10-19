import React, { useState, useEffect } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// This component is responsible for displaying the data in a graphical format
function OtherComp({ formData }) {
  const [ready, setReady] = useState(false);
  const [target, setTarget] = useState(0);
  const [data, setData] = useState([]);

  // This function is responsible for posting the data to the API and receiving the response
  const postData = async () => {
    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });
  
      if (response.ok) {
        const result = await response.json();
        setData(result.result, target)
  
      } else {
        console.error('API request failed:', response.statusText);
      }
    } catch (error) {
      console.error('API request error:', error);
    }
  };
  
  // This useEffect hook is responsible for checking if the formData is ready and then calling the postData function
  useEffect(() => {
    if (Array.isArray(formData) && formData[0]) {
      setReady(true);
      postData()
     
    } else {
      setReady(false)
      console.log("false")
    }
  }, []);

  // This is the return statement of the component
  return (
    <>
    {Array.isArray(formData) && formData[0] && data ? (
      <div className="rounded-lg bg-gray-100 ">
        <div className="rounded-lg bg-gray-100 ">
          <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
            <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">Summary</h3>
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          {data[0] ? (
            <>
              <ol className='p-2 gap-2'>
                <li className='p-2 gap-2'><strong> Target to become carbon neutral</strong>. The average person in the {formData[0].country} Consumes about {data[0].target} tons of C02 each year,
                </li>
                {data[0].passed ? (
                  <>
                    <li className='p-2 gap-2'><strong> Year to become carbon neutral</strong>.You will achieve  carbon neutral by {data[0].passed} with around {data[0].trees} trees planted</li>
                  </>
                ) : (<></>)}
                <li className='p-2 gap-2'><strong>Cost</strong>. Your total cost is {data[0].totalCost} and your total annual cost by the end of {formData[formData.length -1].date} is {data[0].totalInflationCost} </li>
              </ol>
            </>
          ) : (<></>)}
        </div> 
        <div style={{ width: '100%', height: '50vh' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="cumulativeOffset"
                stroke="#0088FE" // Blue color
                activeDot={{ r: 8 }} // Enlarge the dot on hover
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#FF7300" // Orange color
                activeDot={{ r: 8 }} // Enlarge the dot on hover
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-lg bg-gray-100 ">
          <div style={{ width: '100%', height: '50vh' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="#0088FE" // Blue color
                  activeDot={{ r: 8 }} // Enlarge the dot on hover
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    ) : ( 
      <div className="rounded-lg bg-gray-100 ">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">How does this tool work?</h3>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
        <p className="text-gray-500">Select your country on  the left and we'll calculate your cost in that location, then choose the amount of times you wish to buy ("add new") per months or years </p>
      </div> 
    ) }
    </>
  );
}

export default OtherComp;
