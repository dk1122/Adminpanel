import { useState } from "react";
import "./Togglebutton.css";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div className={`toggle-button ${isToggled ? "active" : ""}`} onClick={handleToggle}>
      <div className="toggle-circle"></div>
    </div>
  );
};

export default ToggleButton;