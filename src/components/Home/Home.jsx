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
      <h2 className="text-5xl font-bold">This is HOme Component</h2>
      {donationData.map((donation, idx) => (
        <li key={idx}>{donation.title}</li>
      ))}
    </div>
  );
};

export default Home;
