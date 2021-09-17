import "../index.css";

export const Hero = () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-center px-24 text-center text-white hero h-96">
        <h1 className="text-5xl font-thin">That time my Audi parked itself</h1>
      </div>
      <div className="flex flex-col items-center px-32 py-10">
        <p className="pb-4 text-xl font-light text-center">
          Automated valet parking is a fully automated service that both parks
          and retrieves vehicles in specially equipped parking garages, all
          controlled by a smartphone app. Blogger Sandra Gessner from Audi
          tested this driverless parking system at the IAA in Munich.
        </p>
        <button className="py-4 font-light bg-white border border-black hover:border-gray-700 hover:text-gray-700 px-14">
          Read more
        </button>
      </div>
    </section>
  );
};
