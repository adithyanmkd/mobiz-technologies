import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Us",
    url: "/",
  },
  {
    name: "Services",
    url: "/",
  },
  {
    name: "Products",
    url: "/",
  },
  {
    name: "Our Team",
    url: "/",
  },
  {
    name: "Career",
    url: "/",
  },
];

export function NavbarCom() {
  return (
    <div className="px-3">
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="/">
          <Image
            src={"/icons/mobiz-logo.svg"}
            width={70}
            height={19}
            alt={"mobiz-logo"}
          ></Image>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          {navLinks.map((link, index) => (
            <NavbarLink key={index} as={Link} href={link.url}>
              {link.name}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
