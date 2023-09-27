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
    if (storedDonatedData.includes(intId)) {
      toast.error("Already donated");
      console.log(storedDonatedData);
    } else {
      setDonatedData(intId);
      const updatedData = getStoredDonatedData();
      setStoredDonatedData(updatedData);
      toast.success("Donated Successfully", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };
  return (
    <div className="mb-10 md:mb-16 lg:mb-32 px-4 md:px-10">
      <div className=" mb-6 md:mb-10 lg:mb-14 relative">
        <img className="w-full" src={picture} alt="" />
        <div className="absolute inset-x-0 bottom-0 bg-black opacity-40 h-[60px] md:h-[100px] lg:h-[130px]"></div>
        <button
          onClick={handleDonate}
          className="px-4 lg:px-6 py-2 lg:py-4 rounded-md absolute left-4 md:left-10 bottom-3 md:bottom-7 lg:bottom-8 text-sm md:text-xl font-semibold text-white"
          style={{ backgroundColor: text_color }}
        >
          Donate ${price}
        </button>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">
        {title}
      </h2>
      <p className="text-base">{description}</p>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
