"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

const links = [
  {
    name: "Home",
    isActive: false,
  },
  {
    name: "About Us",
    isActive: false,
    subLink: "About Us",
  },
  {
    name: "Services",
    isActive: false,
    subLink: "Custom Software Development",
  },
  {
    name: "Product",
    isActive: false,
    subLink: "Android Based Order System",
  },
  {
    name: "Our Team",
    isActive: false,
  },
  {
    name: "Career",
    isActive: false,
  },
];

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed top-0 w-full bg-white shadow-md">
      <div className="flex h-[7vh] items-center justify-between px-3">
        <div>
          <Image
            src={"icons/mobiz-logo.svg"}
            width={48}
            height={26}
            alt="mobiz logo"
          ></Image>
        </div>
        <div className="absolute right-0 z-20 mr-2">
          <Image
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden"
            src={"/icons/menu-icon.svg"}
            width={24}
            height={24}
            alt="menu icon"
          ></Image>
          <ul className="hidden space-y-2 px-3 py-1 md:flex md:space-x-5 md:space-y-0">
            {links.map((value, index) => (
              <li
                key={index}
                className="cursor-pointer select-none"
                onClick={() => setIsActive((value.isActive = !isActive))}
              >
                <div className="flex items-center justify-between">
                  <div>{value.name}</div>
                  {value.subLink && (
                    <div>
                      <Image
                        src={"/icons/down-arrow-black.svg"}
                        width={16}
                        height={16}
                        alt="down arrow"
                      ></Image>
                    </div>
                  )}
                </div>
                <div>
                  <ul className="absolute my-2 md:my-0 md:mt-4">
                    {value.subLink && value.isActive && (
                      <li
                        key={index}
                        className="mt-2 text-right text-gray-700 md:mt-0"
                      >
                        {value.subLink}
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? (
        <div className="h-[93vh] rounded-t-xl bg-gray-600 px-2 py-4 text-white md:hidden">
          <ul className="space-y-2 px-3 py-1 md:flex md:space-x-5 md:space-y-0">
            {isOpen &&
              links.map((value, index) => (
                <li
                  key={index}
                  className="cursor-pointer select-none"
                  onClick={() => setIsActive((value.isActive = !isActive))}
                >
                  <div className="flex items-center justify-between">
                    <div>{value.name}</div>
                    {value.subLink && (
                      <div>
                        <Image
                          src={"/icons/down-arrow.svg"}
                          width={16}
                          height={16}
                          alt="down arrow"
                        ></Image>
                      </div>
                    )}
                  </div>
                  <div>
                    {value.subLink && value.isActive && (
                      <ul className="my-2">
                        <li className="mt-2 text-right text-gray-300">
                          {value.subLink}
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default CustomNavbar;
