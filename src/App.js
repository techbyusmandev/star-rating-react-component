import "./styles.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stars color="gold" size="48px" numofstars={5} showRating={true} />
    </div>
  );
}

function Stars({ color, size, numofstars = 5, showRating = false }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  return (
    <>
      <div>
        {Array.from({ length: numofstars }, (_, i) => {
          return (
            <FaStar
              onClick={() => setRating(i + 1)}
              color={i < (tempRating || rating) ? color : "lightgray"}
              size={size}
              onMouseMove={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
            />
          );
        })}
      </div>
      <div>{(showRating && rating) || tempRating || ""}</div>
    </>
  );
}
