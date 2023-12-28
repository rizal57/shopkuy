const Footer = () => {
  return (
    <footer className="w-full bg-teal-500 absolute bottom-0 left-0 z-50">
      <div className="p-4">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()} Copyright:Joule | make with
          <span className="ml-2 text-rose-500 text-xl">♥</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
