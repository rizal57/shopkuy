import Categories from "./Categories";
import Logo from "./Logo";
import Price from "./Price";

const Sidebar = () => {
  return (
    <aside className="w-[300px] h-screen sticky top-0 left-0 hidden md:block">
      <div className="bg-white flex flex-col items-center h-full border border-right px-2">
        <div className="h-[60px] flex items-center mb-4">
          <Logo />
        </div>

        <Categories />
        <Price />
      </div>
    </aside>
  );
};
export default Sidebar;
