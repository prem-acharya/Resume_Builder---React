import React, { useState } from "react";
import styles from "./ColorPicker.module.css";

const ColorPicker = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setInputValue(newColor);
    onChange(newColor);
  };

  const handleInputChange = (e) => {
    const newColor = e.target.value;
    setInputValue(newColor);
    onChange(newColor);
  };

  return (
    <div className={styles.colorPickerContainer}>
      <input
        type="color"
        value={inputValue}
        onChange={handleColorChange}
        className={styles.colorPickerInput}
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={styles.colorPickerValue}
      />
    </div>
  );
};

export default ColorPicker;
