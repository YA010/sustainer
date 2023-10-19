import {  NextRequest, NextResponse } from 'next/server';

const calculateSum = (formData: any[]) => {
  
  console.log(formData)
  formData.forEach((data) => {
    const amount = parseInt(data.amount, 10);
    let totalSum = 0;
    

    for (let i = 0; i < amount; i++){
        totalSum += 120
    }
    data.totalsum = totalSum;
  });
  
    
    
    formData.forEach((data, index) => {
        
        // Use 'data' for your calculations
       
        let count = 0;
        for (let j = index + 1; j < formData.length; j++) {
          count += 12;
        }
      
        data.totalInflation = count * data.amount;

        // You can also access the index of the current element
      });
  
      console.log(formData)
      formData.forEach((data, index) => {
        
        // Use 'data' for your calculations
       
        let count = 0;
        for (let j = index + 1; j < formData.length; j++) {
            if (count !== 28.5){
                // assuming it reaches its final offset limit at 6 years then it grows 4.75 per year so we keep adding it until its final weight
                count += 4.75;
            }
          
        }
      
        data.totalOffset = count * data.amount;
    
        // You can also access the index of the current element
      });

  let totalCost = 0
  let totalInflationCost = 0
  let totalCo2Offset = 0

  
  formData.forEach((data, index) => {
    if (index > 0) {
      data.cumulativeOffset = formData[index - 1].cumulativeOffset + data.totalOffset;
    } else {
      data.cumulativeOffset = data.totalOffset;
    }
  });

  formData.forEach((data, index) => {
    if (index > 0) {
      data.expense= formData[index - 1].expense + data.totalsum;
    } else {
      data.expense = data.totalsum;
    }
  });

  let target = 0; // Initialize the target variable


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
  
  let dated = 0
  let trees =0
  for (const data of formData) {

    if (data.cumulativeOffset >= target) {
      dated = data.date;
      
      break; // Exit the loop when the condition is met
    }
    trees+= parseInt(data.amount)
  }
  
formData.forEach((item) => {
  item.passed = dated
  item.trees = trees
})
  formData.forEach((data) => {
        
    totalCost += data.totalsum;
    totalInflationCost += data.totalInflation;
    totalCo2Offset += data.totalOffset;
  });
  formData.forEach((data) => {
        
    data.totalCost = totalCost;
    data.target = target;
    data.totalInflationCost = totalInflationCost;
    data.totalCo2Offset = totalCo2Offset;
  });
  
// add for for every index after it , keep adding until it reaches final 25 and then stop

  return formData;
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json(); 
        const sum = calculateSum(body.formData);
        
        return NextResponse.json({ result: sum });
      } catch (err) {
        console.error(err);
        return NextResponse.error();
      }

   
  }