import React from 'react';

function OtherComp({ formData }) {
  if (!Array.isArray(formData)) {
    return null; // or some other fallback content
  }
console.log(formData)
  return (
    <div>
      <p>Accessing formData in OtherComponent:</p>
      {formData.map((data) => (
        <div >
          {/* Render data from formData */}
          <p>ID: {data.id}</p>
          <p>ID: {data.date}</p>
          <p>ID: {data.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default OtherComp;
