import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { getStoredDonatedData, setDonatedData } from "../utility/localstorate";

const DonationDetails = () => {
  const [storedDonatedData, setStoredDonatedData] = useState([]);
  const { id } = useParams();
  const intId = parseInt(id);
  const donationData = useLoaderData();
  const donationDetailsData = donationData.find((data) => intId === data.id);
  const {
    picture,
    title,
    price,
    category,
    card_bg,
    category_bg,
    text_color,
    description,
  } = donationDetailsData;

  useEffect(() => {
    setStoredDonatedData(getStoredDonatedData());
  }, []);

  const handleDonate = () => {
    // setDonatedData(intId);
    // toast.success("Donated Successfully");
    if (storedDonatedData.includes(intId)) {
      toast.error("Already donated");
      console.log(storedDonatedData);
    } else {
      setDonatedData(intId);
      const updatedData = getStoredDonatedData();
      setStoredDonatedData(updatedData);
      toast.success("Donated Successfully");
      console.log(storedDonatedData);
    }
  };
  return (
    <div className="mb-32 ">
      <div className="mb-14 relative">
        <img className="w-[1320px]" src={picture} alt="" />
        <div className="absolute inset-x-0 bottom-0 bg-black opacity-40 h-[130px]"></div>
        <button
          onClick={handleDonate}
          className="px-6 py-4 rounded-md absolute left-8 bottom-8 text-xl font-semibold text-white"
          style={{ backgroundColor: text_color }}
        >
          Donate ${price}
        </button>
      </div>
      <h2 className="text-5xl font-bold mb-6">{title}</h2>
      <p className="text-base">{description}</p>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
