import clsx from "clsx";
import classes from "./ContactSales.module.css";
import { beginLogo, denoLogo, elementLogo, fissionLogo, scaler } from "images";
import AutoSlider from "components/common/AutoSlider/AutoSlider";
import { Text } from "components/common";
import { Link } from "react-router-dom";

const ContactSales = () => {
  const partners = [
    { name: "Begin", logo: beginLogo, link: "#" },
    { name: "DENO", logo: denoLogo, link: "#" },
    { name: "fission", logo: fissionLogo, link: "#" },
    { name: "element", logo: elementLogo, link: "#" },
    { name: "SCALER", logo: scaler, link: "#" },
  ];
  return (
    <section
      className={clsx(classes.container, "container")}
      data-aos="fade-up"
    >
      <Text lg className={classes.heading} textCenter>
        Need an enterprise solution?{" "}
        <Link to="/contact-sales" className={classes.contactSalesButton}>
          Contact Sales
        </Link>
      </Text>
      <AutoSlider items={partners} />
    </section>
  );
};
export default ContactSales;
