import { useState } from "react";
import ImagePopup from "./ImagePopup";

function ImageCard({ image }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img src={image.urls.small} alt={image.alt_description} />

      {show && <ImagePopup image={image} />}
    </div>
  );
}

export default ImageCard;
