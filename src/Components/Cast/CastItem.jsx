import PropTypes from "prop-types";

const CastItem = ({ img, name, role }) => {
  const path = "https://www.themoviedb.org/t/p/";
  const thmb = "w220_and_h330_face";
  const lrg = "w440_and_h660_face";
  const alt =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";
  return (
    <li className="Item">
      <img
        src={img ? path + thmb + img : alt}
        alt={name}
        srcSet={img ? `${path + thmb + img} 1x, ${path + lrg + img} 2x` : alt}
      />
      <h3>{name}</h3>
      <p>Character: {role}</p>
    </li>
  );
};

CastItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export { CastItem };
