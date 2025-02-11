import HeroSection from "components/Home/HeroSection/HeroSection";
import classes from "./Home.module.css";
import TrustedPartners from "components/Home/TrustedPartners/TrustedPartners";
import PowerfulAutomation from "components/Home/PowerfulAutomation/PowerfulAutomation";
import BuilttoSimplify from "components/Home/BuilttoSimplify/BuilttoSimplify";
import ScalableSolution from "components/Home/ScalableSolution/ScalableSolution";
import Testimonials from "components/Home/Testimonials/Testimonials";
import HowItWorks from "components/Home/HowItWorks/HowItWorks";
import Team from "components/Home/Team/Team";
import ReadyToStart from "components/Home/ReadyToStart/ReadyToStart";
import Faq from "components/Home/Faq/Faq";
import ContactSales from "components/Home/ContactSales/ContactSales";
import GetStarted from "components/Home/GetStarted/GetStarted";
import Pricing from "components/Home/Pricing/Pricing";
import Chart from "components/Dashboard/Devices/Chart/Chart";

const Home = () => {
  return (
    <main className={classes.wrapper}>
      <HeroSection />
      <TrustedPartners />
      <PowerfulAutomation />
      <BuilttoSimplify />
      <ScalableSolution />
      <Testimonials />
      <HowItWorks />
      <ReadyToStart />
      <Team />
      <Pricing />
      {/* <Chart /> */}
      <ContactSales />
      <Faq />
      <GetStarted />
    </main>
  );
};
export default Home;
