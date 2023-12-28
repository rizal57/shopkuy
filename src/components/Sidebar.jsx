import Categories from "./Categories";
import Logo from "./Logo";
import Price from "./Price";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen sticky top-0 left-0">
      <div className="bg-white flex flex-col items-center h-full border border-right">
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
