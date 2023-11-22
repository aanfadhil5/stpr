import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="md:flex justify-between w-full px-64 hidden">
      <p>© STPR. All right reserved.</p>
      <p>Privacy policy | Terms & Condition</p>
      <p>Website by STPR</p>
    </div>
  );
};

export default Footer;
