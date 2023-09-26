import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedData } from "../utility/localstorate";
import DonatedCard from "../DonatedCard/DonatedCard";
import { data } from "autoprefixer";

const Donation = () => {
  const [allDonatedData, setAllDonatedData] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  const [isClicked, setIsClicked] = useState(false);
  const allData = useLoaderData();

  const handleClick = () => {
    setDataLength(allDonatedData.length);
    setIsClicked(true);
  };

  useEffect(() => {
    const donatedDataIds = getStoredDonatedData();
    if (allData.length > 0) {
      const donatedData = [];
      for (const id of donatedDataIds) {
        const filteredData = allData.find((data) => data.id === id);
        if (filteredData) {
          donatedData.push(filteredData);
        }
      }
      setAllDonatedData(donatedData);
    }
  }, []);

  return (
    <div className="mb-32">
      <h2>Donated Data : {allDonatedData.length}</h2>
      <div className="grid grid-cols-2 gap-5 mb-10">
        {allDonatedData.slice(0, dataLength).map((data) => (
          <DonatedCard key={data.id} data={data}></DonatedCard>
        ))}
      </div>
      <button
        onClick={handleClick}
        className={`btn btn-primary mx-auto ${
          allDonatedData.length > 4 && isClicked === false ? "block" : "hidden"
        }`}
      >
        Show All
      </button>
    </div>
  );
};

export default Donation;
