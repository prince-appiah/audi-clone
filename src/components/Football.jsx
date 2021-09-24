import football from "../assets/home-of-football.webp";

export const Football = () => {
  return (
    <section className="mb-40 showcase">
      <div className="px-5 py-10 lg:items-center lg:px-40 lg:grid lg:grid-cols-2 lg:gap-5 lg:text-white">
        <div className="">
          <img src={football} alt="Home of Football" />
        </div>
        <div className="">
          <h6 className="pt-2 ">Home of Football</h6>
          <h3 className="text-xl font-light lg:text-2xl">Home of Football</h3>
          <p className="mb-5">
            Audi and football: an electrifying partnership. How Audi provides
            fresh impetus and open up new horizons as a close partner and
            sponsor of regional, national and international sport for decades.
          </p>
          <button className="px-4 py-2 text-white transition-colors bg-black border lg:bg-white lg:text-black lg:hover:bg-black lg:hover:text-white hover:bg-white hover:text-black">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};
