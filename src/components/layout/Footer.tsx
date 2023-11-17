import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex justify-between w-full px-96">
      <p>© STPR. All right reserved.</p>
      <p>Privacy policy | Terms & Condition</p>
      <p>Website by STPR</p>
    </div>
  );
};

export default Footer;
