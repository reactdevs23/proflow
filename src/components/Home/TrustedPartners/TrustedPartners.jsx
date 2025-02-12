import clsx from "clsx";
import classes from "./TrustedPartners.module.css";
import { beginLogo, denoLogo, elementLogo, fissionLogo, scaler } from "images";
import { Text } from "components/common";
import { useState, useEffect } from "react";

const TrustedPartners = () => {
  const partners = [
    { name: "Begin", logo: beginLogo, link: "#" },
    { name: "DENO", logo: denoLogo, link: "#" },
    { name: "fission", logo: fissionLogo, link: "#" },
    { name: "element", logo: elementLogo, link: "#" },
    { name: "SCALER", logo: scaler, link: "#" },
    { name: "fission", logo: fissionLogo, link: "#" },
    { name: "element", logo: elementLogo, link: "#" },
    { name: "SCALER", logo: scaler, link: "#" },
    { name: "Begin", logo: beginLogo, link: "#" },
    { name: "DENO", logo: denoLogo, link: "#" },
    { name: "fission", logo: fissionLogo, link: "#" },
    { name: "element", logo: elementLogo, link: "#" },
    { name: "SCALER", logo: scaler, link: "#" },
    { name: "Begin", logo: beginLogo, link: "#" },
    { name: "DENO", logo: denoLogo, link: "#" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex + itemsPerPage >= partners.length
          ? 0
          : prevIndex + itemsPerPage
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <div className={clsx(classes.container, "container", "sectionPadding")}>
      <Text lg opacity50 textCenter data-aos="fade-up">
        Trusted by companies worldwide
      </Text>
      <div className={classes.partners} data-aos="fade-up" data-aos-delay="300">
        {partners
          .slice(startIndex, startIndex + itemsPerPage)
          .map((partner, i) => (
            <a href={partner.link} key={i}>
              <img
                src={partner.logo}
                alt={partner.name}
                className={classes.logo}
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default TrustedPartners;
