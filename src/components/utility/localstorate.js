const getStoredDonatedData = () => {
  const storedDonatedData = localStorage.getItem("donated-data");
  if (storedDonatedData) {
    return JSON.parse(storedDonatedData);
  }
  return [];
};

const setDonatedData = (id) => {
  const storedDonatedData = getStoredDonatedData();
  const exists = storedDonatedData.find((donatedId) => donatedId === id);
  if (!exists) {
    storedDonatedData.push(id);
    localStorage.setItem("donated-data", JSON.stringify(storedDonatedData));
  }
};

export { getStoredDonatedData, setDonatedData };
