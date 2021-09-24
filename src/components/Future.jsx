import futurecar from "../assets/future-car.webp";

export const Future = () => {
  return (
    <section className="grid grid-cols-1 gap-5 px-5 mt-20 mb-10 xl:px-40 lg:grid-cols-2">
      <div className="">
        <img src={futurecar} alt="#FutureIsAnAttitude" />
      </div>
      <div className="">
        <h3 className="mb-3 text-2xl font-light">#FutureIsAnAttitude</h3>
        <p className="mt-8 font-light text-gray-400">
          Seeing the world with different eyes is what drives us. And so we
          dedicate every waking moment to shaping the future. Each day, we bring
          the world another little step forward – with our ideas, our passion,
          and our visions for the future of mobility.
        </p>
        <button className="w-full btn">Read more</button>
      </div>
    </section>
  );
};
