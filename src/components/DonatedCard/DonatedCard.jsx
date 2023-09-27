import { Link } from "react-router-dom";

const DonatedCard = ({ data }) => {
  const {
    id,
    donated_picture,
    title,
    category,
    price,
    card_bg,
    category_bg,
    text_color,
  } = data;
  return (
    <div
      className="flex items-center gap-6 rounded-lg"
      style={{ backgroundColor: card_bg }}
    >
      <div className="w-1/3">
        <img className="h-[200px]" src={donated_picture} alt="Movie" />
      </div>
      <div className="w-2/3 py-6">
        <span
          className="px-3 py-1 text-sm font-semibold rounded-md"
          style={{ color: text_color, backgroundColor: category_bg }}
        >
          {category}
        </span>
        <h2 className="text-2xl font-semibold my-2">{title}</h2>
        <p className="text-base font-semibold" style={{ color: text_color }}>
          ${price}
        </p>
        <Link to={`/details/${id},`}>
          <button
            className="mt-5 px-4 py-2 rounded-lg text-lg font-bold text-white "
            style={{ backgroundColor: text_color }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonatedCard;
