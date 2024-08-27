import { useEffect, useState } from "react";

const Deshboard = () => {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    fetch("mysubject.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  });

  return (
    <div className="w-[75%] mx-auto ml-[20%]">
      <h1 className="text-title"> Dashboard Info</h1>
      <div>
        <img src="" alt="" />
        <p className="text-title">Dr.Suman Ahmed</p>
      </div>
      <div className="flex justify-between">
        <div className="bg-slate-500 w-[30%] p-4">
          <img src="" alt="" />
          <p>total Assessment </p>
        </div>
        <div className="bg-slate-500 w-[30%] ">
          <img src="" alt="" />
          <p>total Assessment </p>
        </div>
        <div className="bg-slate-500 w-[30%] ">
          <img src="" alt="" />
          <p>total Assessment </p>
        </div>
      </div>
      <p className="text-title">my subject List</p>
      <div className="grid grid-cols-4">
        {subjects.map((subject) => (
          <div key={subject._id}>
            <div>
              <p>{subject.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deshboard;
