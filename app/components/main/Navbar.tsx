import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Image from "next/image";

export default function Navbar() {
  const start = (
    <div className="">
      <Image
        src={"/icons/mobiz.svg"}
        width={100}
        height={30}
        alt="mobiz logo"
      ></Image>
    </div>
  );

  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      className: "font-medium border-b md:border-none",
    },
    {
      label: "About Us",
      icon: "pi pi-star",
      className: "font-medium border-b md:border-none",

      items: [
        {
          label: "About Us",
          icon: "pi pi-bolt",
          className: "font-normal border-b md:border-none",
        },
        {
          label: "Our Clientele",
          icon: "pi pi-bolt",
          className: "font-normal border-b md:border-none",
        },
        {
          label: "Why Choose Us?",
          icon: "pi pi-bolt",
          className: "font-normal border-b md:border-none",
        },
        {
          label: "Our Team",
          icon: "pi pi-bolt",
          className: "font-normal border-b md:border-none",
        },
        {
          label: "Maintanance and Support",
          icon: "pi pi-bolt",
          className: "font-normal ",
        },
      ],
    },
    {
      label: "Services",
      className: "font-medium border-b md:border-none",
      icon: "pi pi-search",
      items: [
        {
          label: "Custom Software Development",
          icon: "pi pi-bolt",
          className: "font-normal",
        },
        {
          label: "Mobile Application Development",
          icon: "pi pi-server",
          className: "font-normal",
        },
        {
          label: "Web Application Development",
          icon: "pi pi-pencil",
          className: "font-normal",
        },
        {
          label: "E-commerce Development",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "UI/UX Design",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "Bulk Voice SMS",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "Business Whatsapp",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "Chatbot",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "Bulk Email",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "Bulk SMS",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "Digital Marketing",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "SEO",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "Power BI",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "Content Writing",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "ERP Integration",
          icon: "pi pi-palette",
          className: "font-normal",
        },
        {
          label: "Tally Customization",
          icon: "pi pi-palette",
          className: "font-normal",
        },
      ],
    },

    {
      label: "Products",
      icon: "pi pi-envelope",
      className: "font-medium border-b md:border-none",
      items: [
        {
          label: "Android Based Order Tracing Solution",
          icon: "pi pi-bolt",
          className: "font-normal",
        },
        {
          label: "Android Based Van Sales Solution",
          icon: "pi pi-bolt",
          className: "font-normal",
        },
        {
          label: "Android Based Employee Tracking",
          icon: "pi pi-bolt",
          className: "font-normal",
        },
        {
          label: "Driking Water Distribution Solution (Android and IOS)",
          icon: "pi pi-bolt",
          className: "font-normal",
        },
        {
          label: "Android Based Stock Management",
          icon: "pi pi-bolt",
          className: "font-normal ",
        },
        {
          label: "Hotel Booking Solution",
          icon: "pi pi-bolt",
          className: "font-normal ",
        },
        {
          label: "Bakery Management Solution",
          icon: "pi pi-bolt",
          className: "font-normal ",
        },
        {
          label: "E Commerce",
          icon: "pi pi-bolt",
          className: "font-normal ",
        },
        {
          label:
            "Women Safety / SOS Solution connected with local Police Patrol Party",
          icon: "pi pi-bolt",
          className: "font-normal ",
        },
      ],
    },
    {
      label: "Our Team",
      icon: "pi pi-envelope",
      className: "font-medium border-b md:border-none",
    },
    {
      label: "Career",
      icon: "pi pi-envelope",
      className: "font-medium border-b md:border-none",
    },
    {
      id: "contactBtn",
      label: "Contact Us ",
      icon: "pi pi-envelope",
      className: "py-4 md:py-0",
    },
  ];

  return (
    <div className="fixed mx-auto w-full bg-white shadow-md">
      <Menubar
        id="menubarCustom"
        className="mx-auto flex max-w-screen-xl justify-between bg-transparent"
        model={items}
        start={start}
      />
    </div>
  );
}
