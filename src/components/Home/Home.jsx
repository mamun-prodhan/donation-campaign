import { useEffect, useRef, useState } from "react";
import DonationDetailsCard from "../DonationCard/DonationDetailsCard";

const Home = () => {
  const [donationData, setDonationData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchData, setSearchData] = useState(""); // State for search query

  const handleSearch = () => {
    const searchedValue = searchData.toLowerCase();
    console.log(searchedValue);
    if (donationData) {
      const findData = donationData.filter(
        (data) => data.category.toLowerCase() === searchedValue
      );
      setDisplayData(findData);
      console.log(displayData);
    }
    setSearchData("");
  };

  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => {
        setDonationData(data);
        setDisplayData(data);
      });
  }, []);

  return (
    <div className="mt-16">
      <div className="pb-52">
        <h1 className="text-5xl font-bold text-center">
          I Grow By Helping People In Need
        </h1>
        <div className="text-center mt-10">
          <input
            className="w-96 p-4 border border-[#DEDEDE] focus:outline-none  rounded-l-lg "
            type="text"
            name="search"
            id=""
            placeholder="Search here...."
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-7 py-4 hover:bg-[#ff2b32] bg-[#FF444A] duration-300 rounded-r-lg border border-[#FF444A] font-semibold text-white"
          >
            Search
          </button>
        </div>
      </div>
      {displayData.length === 0 && (
        <h2 className="text-center font-bold text-4xl mb-44">No Data Found</h2>
      )}
      <div className="grid grid-cols-4 gap-6 mb-44">
        {displayData.map((donation, idx) => (
          <DonationDetailsCard
            key={idx}
            donation={donation}
          ></DonationDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
