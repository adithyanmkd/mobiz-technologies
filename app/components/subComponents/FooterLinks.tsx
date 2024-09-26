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
        linkName: "About Us",
        url: "/",
      },
      {
        linkName: "Services",
        url: "/",
      },
      {
        linkName: "Products",
        url: "/",
      },
      {
        linkName: "Our Team",
        url: "/",
      },
      {
        linkName: "Career",
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
    <div className="mx-auto mt-8 flex w-full max-w-[324px] justify-between text-[#D2D2D2] md:max-w-[380px]">
      {footerLinks.map((data) => (
        <ul key={data.id} className="space-y-1.5">
          <h4 className="pb-2 font-medium text-white">{data.linkHading}</h4>
          {data.links.map((link, index) => (
            <li key={index}>
              <Link href={link.url} className="text-xs text-[#D2D2D2]">
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
