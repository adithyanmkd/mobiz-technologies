import React from "react";
import Link from "next/link";
import Image from "next/image";

const socialMedia = [
  {
    href: "https://www.facebook.com/Mobiztechnologies",
    src: "/icons/facebook-icon.svg",
    image: {
      width: 11,
      height: 19,
      alt: "facebook logo",
    },
  },
  {
    href: "https://api.whatsapp.com/message/AZNMC25EX2R5H1?autoload=1&app_absent=0",
    src: "/icons/whatsapp-icon.svg",
    image: {
      width: 19,
      height: 19,
      alt: "whatsapp logo",
    },
  },
  {
    href: "https://x.com/Mobiztech",
    src: "/icons/twitter.svg",
    image: {
      width: 19,
      height: 19,
      alt: "twitter logo",
    },
  },
  {
    href: "https://www.youtube.com/@mobiztechnologies",
    src: "/icons/youtube-icon.svg",
    image: {
      width: 19,
      height: 19,
      alt: "youtube logo",
    },
  },
  {
    href: "https://www.instagram.com/mobiztechnologies/",
    src: "/icons/instagram-icon.svg",
    image: {
      width: 19,
      height: 19,
      alt: "instagram logo",
    },
  },
];

const FooterHeader = () => {
  return (
    <div className="mx-auto max-w-[324px]">
      <h2 className="text-xl font-bold text-white">Mobiz Technologies</h2>
      <p className="mt-4 leading-[160%] text-[#D2D2D2]">
        Empower your business with our comprehensive IT Solutions
      </p>
      <div className="mt-[14px] flex space-x-4">
        {socialMedia.map((value, index) => (
          <Link key={index} href={value.href}>
            <Image
              src={value.src}
              width={value.image.width}
              height={value.image.height}
              alt={value.image.alt}
            ></Image>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterHeader;
