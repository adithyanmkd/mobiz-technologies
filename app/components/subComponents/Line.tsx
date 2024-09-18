import React from "react";

interface lineType {
  customStyles: string;
}

const Line = ({ customStyles }: lineType) => {
  return <div className={`${customStyles} h-px w-full`}></div>;
};

export default Line;
