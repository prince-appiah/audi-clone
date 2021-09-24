import React, { useState } from "react";
import data from "../data/grid2";

export const Assessment = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);

  return (
    <section className="grid grid-cols-1 gap-10 px-5 py-6 xl:px-40 sm:grid-cols-3 sm:gap-5 ">
      {items.map((item) => (
        <div className={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="pt-2 ">
            <h3 className="my-2 text-xl font-bold">{item.title}</h3>
            <p className="font-light text-gray-400">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
