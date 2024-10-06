import React from "react";
const StudentCard = ({ name, rollNumber, age }) => {
  return (
    /*<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-pink- p-9">
      <div class="font-bold text-xl mb-2 text-grey-500">Name: {name}</div>
      <p class="font-bold text-xl mb-2 text-grey-500 mb-2">Age: {age}</p>
      <p class="font-bold text-xl mb-2 text-grey-500">Roll Number: {rollNumber}</p>
    </div>*/

    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-pink-200 p-6 border border-gray-300">
  <div className="text-center mb-4">
    <h1 className="text-2xl font-bold text-gray-900">Student ID Card</h1>
  </div>
  <div className="mb-2">
    <span className="font-semibold text-gray-700">Name:</span>
    <span className="text-gray-900">{name}</span>
  </div>
  <div className="mb-2">
    <span className="font-semibold text-gray-700">RollNumber:</span>
    <span className="text-gray-900">{rollNumber}</span>
  </div>
  <div className="mb-2">
    <span className="font-semibold text-gray-700">Age :</span>
    <span className="text-gray-900">{age}</span>
  </div>
</div>

  );
};

export default StudentCard;
