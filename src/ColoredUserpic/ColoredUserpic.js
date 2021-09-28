import { useState } from 'react';

import './ColoresUserpic.css';

const ColoredUserpic = ({
  margin,
  backgroundColor,
  src,
  size,
  colors,
  hoverColors,
  colorWidth,
}) => {
  let [gradientColors, setGradientColors] = useState(colors);

  function handleHover() {
    setGradientColors(hoverColors);
  }

  function handleOut() {
    setGradientColors(colors);
  }

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleOut}
      className="main"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `linear-gradient(to right, ${gradientColors})`,
      }}>
      <img
        src={src}
        style={{
          padding: `${margin}px`,
          backgroundColor: backgroundColor,
          margin: `${colorWidth}px`,
        }}></img>
    </div>
  );
};

export default ColoredUserpic;
