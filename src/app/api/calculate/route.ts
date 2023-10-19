import {  NextRequest, NextResponse } from 'next/server';

// Function to calculate sum
const calculateSum = (formData: any[]) => {
  

  // Iterate over each data in form data
  formData.forEach((data) => {
    // Parse the amount to integer
    const amount = parseInt(data.amount, 10);
    // Initialize total sum
    let totalSum = 0;
    
    // Calculate total sum
    for (let i = 0; i < amount; i++){
        totalSum += 120
    }
    // Assign total sum to data
    data.totalsum = totalSum;
  });
  
  // Iterate over each data in form data
  formData.forEach((data, index) => {
        
        // Use 'data' for your calculations
       
        // Initialize count
        let count = 0;
        // Calculate total inflation
        for (let j = index + 1; j < formData.length; j++) {
          count += 12;
        }
      
        // Assign total inflation to data
        data.totalInflation = count * data.amount;

        // You can also access the index of the current element
      });
  
  // Iterate over each data in form data
  formData.forEach((data, index) => {
        
        // Use 'data' for your calculations
       
        // Initialize count
        let count = 0;
        // Calculate total offset
        for (let j = index + 1; j < formData.length; j++) {
            if (count !== 28.5){
                // assuming it reaches its final offset limit at 6 years then it grows 4.75 per year so we keep adding it until its final weight
                count += 4.75;
            }
          
        }
      
        // Assign total offset to data
        data.totalOffset = count * data.amount;
    
        // You can also access the index of the current element
      });

  // Initialize total cost, total inflation cost and total CO2 offset
  let totalCost = 0
  let totalInflationCost = 0
  let totalCo2Offset = 0

  // Iterate over each data in form data
  formData.forEach((data, index) => {
    if (index > 0) {
      // Calculate cumulative offset
      data.cumulativeOffset = formData[index - 1].cumulativeOffset + data.totalOffset;
    } else {
      // Assign total offset to cumulative offset
      data.cumulativeOffset = data.totalOffset;
    }
  });

  // Iterate over each data in form data
  formData.forEach((data, index) => {
    if (index > 0) {
      // Calculate expense
      data.expense= formData[index - 1].expense + data.totalsum;
    } else {
      // Assign total sum to expense
      data.expense = data.totalsum;
    }
  });

  // Initialize the target variable
  let target = 0;

  // Switch case to handle different countries
  switch (formData[0].country) {
    case "United States":
      target = 15520;
      break;
    case "United Kingdom":
      target = 5550;
      break;
    case "Germany":
      target = 9440;
      break;
    case "South Africa":
      target = 6950;
      break;
    case "India":
      target = 1910;
      break;
    case "China":
      target = 7380;
      break;
    case "Singapore":
      target = 8560;
      break;
    case "Australia":
      target = 17100;
      break;
    default:
      // Handle other cases
      break;
  }
  
  // Initialize dated and trees
  let dated = 0
  let trees =0

  // Iterate over each data in form data
  for (const data of formData) {

    // Check if cumulative offset is greater than or equal to target
    if (data.cumulativeOffset >= target) {
      // Assign date to dated
      dated = data.date;
      
      // Exit the loop when the condition is met
      break; 
    }
    // Calculate trees
    trees+= parseInt(data.amount)
  }
  
  // Iterate over each item in form data
  formData.forEach((item) => {
  // Assign dated and trees to item
  item.passed = dated
  item.trees = trees
  })

  // Iterate over each data in form data
  formData.forEach((data) => {
        
    // Calculate total cost, total inflation cost and total CO2 offset
    totalCost += data.totalsum;
    totalInflationCost += data.totalInflation;
    totalCo2Offset += data.totalOffset;
  });

  // Iterate over each data in form data
  formData.forEach((data) => {
        
    // Assign total cost, target, total inflation cost and total CO2 offset to data
    data.totalCost = totalCost;
    data.target = target;
    data.totalInflationCost = totalInflationCost;
    data.totalCo2Offset = totalCo2Offset;
  });
  
// add for for every index after it , keep adding until it reaches final 25 and then stop

  // Return form data
  return formData;
}

// Function to handle POST request
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        // Parse the request body to JSON
        const body = await req.json(); 
        // Calculate sum
        const sum = calculateSum(body.formData);
        
        // Return the result
        return NextResponse.json({ result: sum });
      } catch (err) {
        // Log the error
        console.error(err);
        // Return error response
        return NextResponse.error();
      }

   
  }