import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterHeader = () => {
  return (
    <div className="max-w-[324px] mx-auto">
      <h2 className="font-bold text-xl text-white">Mobiz Technologies</h2>
      <p className="mt-4 leading-[160%] text-[#D2D2D2]">
        Empower your business with our comprehensive IT Solutions
      </p>
      <div className="flex mt-[14px] space-x-4 ">
        <Link href={"/"}>
          <Image
            src={"/icons/facebook-icon.svg"}
            width={11}
            height={19}
            alt="facebook"
          ></Image>
        </Link>
        <Link href={"/"}>
          <Image
            src={"/icons/instagram-icon.svg"}
            width={19}
            height={19}
            alt="instagram icon"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default FooterHeader;
