import { Text } from "components/common";
import classes from "./CopyRightContainer.module.css";
import { RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";

const CopyRightContainer = () => {
  const socialItems = [
    {
      icon: <RiLinkedinLine />,
      to: "https://www.linkedin.com/",
    },
    {
      icon: <RiTwitterXLine />,
      to: "https://x.com/hom",
    },

    {
      icon: <RiGithubLine />,
      to: "https://github.com/",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.copyRightAndPrivacy}>
        <Text lg className={classes.copyRight}>
          Proflow © 2025
        </Text>{" "}
        <Text lg opacity50>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.privacyPolicy}
          >
            Privacy Policy
          </a>
        </Text>{" "}
        <Text lg opacity50>
          404
        </Text>
      </div>
      <div className={classes.socialContainer}>
        {socialItems?.map((socialMedia, id) => (
          <a
            href={socialMedia.link}
            target="_blank"
            rel="noreferrer"
            key={id}
            className={classes.icon}
          >
            {socialMedia.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
export default CopyRightContainer;
