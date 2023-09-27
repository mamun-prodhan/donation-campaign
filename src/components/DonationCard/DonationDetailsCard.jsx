import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DonationDetailsCard = ({ donation }) => {
  const { id, picture, title, category, card_bg, category_bg, text_color } =
    donation;
  return (
    <Link to={`/details/${id}`}>
      <div className="" style={{ backgroundColor: card_bg }}>
        <div>
          <img className="w-full" src={picture} alt="image" />
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
DonationDetailsCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationDetailsCard;
