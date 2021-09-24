import { useState } from "react";
import gallery from "../data/grid1";

export const AudiGallery = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(gallery);

  return (
    <section className="grid grid-cols-1 gap-10 px-5 py-6 xl:px-40 sm:grid-cols-2 sm:gap-5 ">
      {cards.map((item) => (
        <div className="" key={item.id}>
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
