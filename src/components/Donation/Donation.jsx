import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedData } from "../utility/localstorate";
import DonatedCard from "../DonatedCard/DonatedCard";

const Donation = () => {
  const [allData, setAllData] = useState([]);
  const [allDonatedData, setAllDonatedData] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setDataLength(allDonatedData.length);
    setIsClicked(true);
  };

  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => setAllData(data));
  }, []);

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
  }, [allData]);

  return (
    <div className="mb-10 md:mb-16 lg:mb-32 mt-4 md:mt-6 lg:mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10 px-4 md:px-10">
        {allDonatedData?.slice(0, dataLength).map((data) => (
          <DonatedCard key={data.id} data={data}></DonatedCard>
        ))}
      </div>
      <button
        onClick={handleClick}
        className={`px-4 md:px-7 py-2 md:py-4  mx-auto text-white font-semibold rounded-lg bg-[#009444] hover:bg-[#18b561] duration-300 ${
          allDonatedData.length > 4 && isClicked === false ? "block" : "hidden"
        }`}
      >
        See All
      </button>
    </div>
  );
};

export default Donation;
