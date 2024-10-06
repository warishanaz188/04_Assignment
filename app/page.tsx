

import React from "react";
import StudentCard from "./components/StudentCard";

interface Student {
  name: string;
  rollNumber: string;
  age: string;
}

const studentData: Student[] = [
  { name: "Warisha Naz", rollNumber: "340561", age: "18" },
  { name: "Alisha", rollNumber: "340687", age: "24" },
  { name: "Zainab", rollNumber: "340665", age: "43" },
];

const Page = () => {
  return (
    <div>
      {studentData.map((itm: Student, index: number) => (
        <div key={index} style={{ marginTop: 5, marginLeft: 20 }}>
          <StudentCard {...itm} />
        </div>
      ))}
    </div>
  );
};

export default Page;

