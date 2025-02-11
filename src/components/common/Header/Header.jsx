import clsx from "clsx";
import { Heading, Text } from "..";
import classes from "./Header.module.css";

const Header = ({ heading, info, center, className, br, title, xl3, xl4 }) => {
  return (
    <div
      className={clsx(
        classes.header,
        center && classes.center,

        className
      )}
    >
      {title && (
        <Text lg textCenter={center} primitiveDefault className={classes.title}>
          {title}
        </Text>
      )}
      <Heading
        xl5={!xl3 && !xl4}
        xl4={xl4}
        xl3={xl3}
        textCenter={center}
        className="heading"
      >
        {heading}
      </Heading>
      <Text lg textCenter={center} opacity50>
        {info}
      </Text>
    </div>
  );
};
export default Header;
