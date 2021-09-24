import React, { useState } from "react";
import data from "../data/discover";

export const Discover = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);

  return (
    <>
      <h3 className="pt-10 mb-3 text-4xl font-bold text-center lg:text-6xl">
        Discover the world of Audi
      </h3>
      <section className="grid grid-cols-1 gap-2 px-5 pb-10 sm:grid-cols-2 lg:px-40 discover">
        {items.map((item) => (
          <div className="relative" key={item.id}>
            <img className="" src={item.image} alt={item.title} />
            <h4 className="absolute z-20 text-2xl font-bold text-white">
              {item.title}
            </h4>
          </div>
        ))}
      </section>
    </>
  );
};
