import Logo from "./Logo";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 light-border w-full border-b py-2 pl-8 pr-4 shadow-light-300 dark:shadow-none max-lg:pl-4">
      <div className="flex items-center gap-1">
        <div className="flex-center flex flex-row pt-2">
          <Logo />
          <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-lg:hidden max-sm:hidden">
            Gen<span className="text-primary-purple">Z_bager</span>
          </p>
        </div>
      </div>
      <Theme />
    </nav>
  );
};

export default Navbar;
