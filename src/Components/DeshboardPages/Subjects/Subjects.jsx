import React, { useEffect, useState } from "react";

const Subjects = () => {
  //  this is load the his Subject list
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    fetch("mysubject.json")
      .then((res) => res.json())
      //   .then((data) => setSubjects(data));
      .then((data) => setSubjects(data));
  });

  //  this is load all the subjectsList
  const [allSubject, setAllSubjects] = useState([]);
  useEffect(() => {
    fetch("subjectsList.json")
      .then((res) => res.json())
      .then((data) => setAllSubjects(data));
  });

  const [visibleItems, setVisibleItems] = useState(6);

  const handleSeeMore = () => {
    setVisibleItems(allSubject.length);
  };

  const handelSeeLess = () => {
    setVisibleItems(6);
  };
  return (
    <div className="w-[75%] mx-auto ml-[20%]">
      <h1 className="text-title">Subject List </h1>
      <div className="grid grid-cols-4">
        {allSubject.slice(0, visibleItems).map((item) => (
          <p key={item._id}>{item.subject}</p>
        ))}
      </div>
      {visibleItems < allSubject.length ? (
        <button
          className="text-white bg-[#5B40FF] rounded-md pt-3 pb-3 pl-5 pr-5 font-medium"
          onClick={handleSeeMore}
        >
          See More
        </button>
      ) : (
        <button
          className="text-white bg-[#5B40FF] rounded-md pt-3 pb-3 pl-5 pr-5 font-medium"
          onClick={handelSeeLess}
        >
          Show Less
        </button>
      )}{" "}
      <p className="text-title">My Subject List</p>
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

export default Subjects;
