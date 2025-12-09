import { appleLogo } from "../utils/index.js";
import { navItems } from "../constrant/index.js";
import { bagImage } from "../utils/index.js";
import { searchImage } from "../utils/index.js";
const Navbar = () => {
  return (
    <header className="relative z-10 w-full pb-5 pt-[13px] sm:px-10 flex justify-center items-center">
      <nav className="flex items-center gap-[36px]">
        <div className="flex items-center">
          <img src={appleLogo} alt="" width={12} height={14} />
        </div>
        <div className="flex items-center gap-[36px]">
          {navItems.map((i) => (
            <a
              className="text-custom-white text-[12px] font-sf-pro font-light"
              key={i.name}
              href={i.path}
            >
              {i.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-[36px]">
          <img src={searchImage} alt="" width={14} height={14} />
          <img src={bagImage} alt="" className="" width={13} height={15} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
