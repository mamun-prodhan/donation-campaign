import { Link } from "react-router-dom";

const DonationDetailsCard = ({ donation }) => {
  const { id, picture, title, category, card_bg, category_bg, text_color } =
    donation;
  return (
    <Link to={`/details/${id}`}>
      <div
        className="mx-auto w-[312px] lg:w-full"
        style={{ backgroundColor: card_bg }}
      >
        <div>
          <img src={picture} alt="image" />
        </div>
        <div
          className="p-4 bg-[#0052FF26] rounded-b-lg"
          style={{ color: text_color }}
        >
          <span
            className="px-3 py-1 text-sm font-semibold rounded-md"
            style={{ backgroundColor: category_bg }}
          >
            {category}
          </span>
          <h2 className="text-xl font-semibold mt-2">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default DonationDetailsCard;
