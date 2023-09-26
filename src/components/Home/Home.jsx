import { useEffect, useState } from "react";
import DonationDetailsCard from "../DonationCard/DonationDetailsCard";

const Home = () => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => setDonationData(data));
  }, []);
  return (
    <div className="pt-36 ">
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
          />
          <button className="px-7 py-4 hover:bg-[#ff2b32] bg-[#FF444A] duration-300 rounded-r-lg border border-[#FF444A] font-semibold text-white">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {donationData.map((donation, idx) => (
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
