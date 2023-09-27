import { useEffect, useState } from "react";
import DonationDetailsCard from "../DonationCard/DonationDetailsCard";
import bgimg from "../../assets/bgimg.png";

const Home = () => {
  const [donationData, setDonationData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchData, setSearchData] = useState("");

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
    <div className="pt-6 md:pt-10 lg:pt-16 relative bg-[#FFF] bg-opacity-90 px-4 md:px-10">
      <img
        src={bgimg}
        alt=""
        className="absolute -top-10 md:-top-32 lg:-top-44 left-0 z-[-10]"
      />
      <div className="pb-10 md:pb-20 lg:pb-52">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center">
          I Grow By Helping People In Need
        </h1>
        <div className="text-center mt-4 md:mt-6 lg:mt-10">
          <input
            className="w-48 md:w-72 lg:w-96 p-2 lg:p-4 border border-[#DEDEDE] focus:outline-none  rounded-l-lg "
            type="text"
            name="search"
            id=""
            placeholder="Search here...."
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="px-4 lg:px-7 py-2 lg:py-4 hover:bg-[#ff2b32] bg-[#FF444A] duration-300 rounded-r-lg border border-[#FF444A] font-semibold text-white"
          >
            Search
          </button>
        </div>
      </div>
      {displayData.length === 0 && (
        <h2 className="text-center font-bold text-xl md:text-2xl lg:text-4xl mb-16 md:mb-24 lg:mb-44">
          No Data Found
        </h2>
      )}
      <div className="grid content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-20 lg:mb-44">
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
