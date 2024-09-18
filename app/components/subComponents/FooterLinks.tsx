import React from "react";
import Link from "next/link";

const footerLinks = [
  {
    id: 1,
    linkHading: "Pages",
    links: [
      {
        linkName: "Home",
        url: "/",
      },
      {
        linkName: "Services",
        url: "/",
      },
      {
        linkName: "About Us",
        url: "/",
      },
      {
        linkName: "Contact Us",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    linkHading: "Company",
    links: [
      {
        linkName: "About Us",
        url: "/",
      },
      {
        linkName: "Contact Us",
        url: "/",
      },
      {
        linkName: "Career",
        url: "/",
      },
      {
        linkName: "Blog",
        url: "/",
      },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="max-w-[324px] pb-6 flex justify-between mx-auto text-[#D2D2D2]">
      {footerLinks.map((data) => (
        <ul key={data.id} className="space-y-1.5">
          <h4 className="font-medium text-white pb-[16px]">
            {data.linkHading}
          </h4>
          {data.links.map((link, index) => (
            <li key={index}>
              <Link href={link.url} className="text-[#D2D2D2] text-xs">
                {link.linkName}
              </Link>
            </li>
          ))}
        </ul>
      ))}
      <div></div>
    </div>
  );
};

export default FooterLinks;
