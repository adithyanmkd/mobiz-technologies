import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between px-[24px] py-[10px] bg-white shadow-md ">
      <div>
        <Image
          src={"icons/mobiz-logo.svg"}
          width={48}
          height={26}
          alt="mobiz logo"
        ></Image>
      </div>
      <div>
        <Image
          src={"icons/menu-icon.svg"}
          width={24}
          height={24}
          alt="menu icon"
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
