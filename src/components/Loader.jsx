import LoaderImg from "../assets/loader.svg";

const Loader = () => {
  return (
    <div className="w-full h-[calc(100vh-60px)] flex items-center justify-center">
      <div className="w-24 h-24">
        <img src={LoaderImg} alt="loader" className="w-full h-full" />
      </div>
    </div>
  );
};
export default Loader;
