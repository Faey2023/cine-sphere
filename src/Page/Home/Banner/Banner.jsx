import "./banner.css";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        {/* <div className="max-w-md"> */}
        <h1 className="text-xl md:text-7xl text-center font-bold">
        Explore the Magic of Cinema with Cine Sphere
        </h1>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Banner;
