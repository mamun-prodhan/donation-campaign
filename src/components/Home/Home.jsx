import { list } from "postcss";
import { useEffect, useState } from "react";

const Home = () => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => setDonationData(data));
  }, []);
  return (
    <div>
      <div className="pt-36 pb-52">
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
      {/* {donationData.map((donation, idx) => (
        <li key={idx}>{donation.title}</li>
      ))} */}
    </div>
  );
};

export default Home;
