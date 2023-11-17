import React from "react";
import CardHero from "./CardHero";

type Props = {};

const LayoutCard = (props: Props) => {
  return (
    <div className="flex gap-4">
      <CardHero
        title="Website Development"
        description="Creating user-centric websites with mobile first design is our specialty. Take your business online with a premium website, designed for optimal functionality on all devices."
        variant="secondary"
      />
      <CardHero
        title="SEO / Google Ads"
        description="Stay ahead of the competition and dominate the search engine results with our comprehensive SEO and Google Ads services."
        variant="primary"
      />
      <CardHero
        title="Socials"
        description="Unlock the full potential of your brand's reach with our tailored social media strategies designed to maximise visibility & drive traffic"
        variant="tertiary"
      />
      {/* <CardHero
        title="Branding"
        description="Create a distinctive brand identity that resonates with your target audience & elevate your business with compelling brand strategies and visuals."
        variant="quaternary"
      /> */}
    </div>
  );
};

export default LayoutCard;
