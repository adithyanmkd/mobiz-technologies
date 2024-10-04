import React from "react";

const GoogleMap = ({ link }: any) => {
  return (
    <div>
      <iframe
        className="h-[300px] w-[300px] md:h-[500px] md:w-[500px]"
        src={link}
        width="600"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
