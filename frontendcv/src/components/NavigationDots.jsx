import React from "react";

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "project", "skills", "contact"].map((item, index) => (
        // eslint-disable-next-line
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#630000" } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
