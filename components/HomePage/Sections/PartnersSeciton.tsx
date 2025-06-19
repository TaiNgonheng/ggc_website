import React from "react";
import Section from "../../Section";
import PartnersCard from "../PartnersCard";

const PartnersSeciton = () => {
  return (
    <Section title="Our Partners">
      <div className="flex flex-wrap items-center justify-center">
        <PartnersCard name="People" image="/assets/partners/partner.png" />
      </div>
    </Section>
  );
};

export default PartnersSeciton;
