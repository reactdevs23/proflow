import clsx from "clsx";
import classes from "./Team.module.css";
import Header from "components/common/Header/Header";
import { RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";
import { MdChevronRight } from "react-icons/md";
import { allisonLubin, jakobCulhane, markDonin, paitynSeptimus } from "images";
import React, { useState } from "react";
import { Button, Heading, Text } from "components/common";

const Team = () => {
  const teams = [
    {
      img: markDonin,
      name: "Mark Donin",
      position: "CEO",
      socialMedia: [
        { icon: <RiTwitterXLine />, link: "https://x.com/home" },
        {
          icon: <RiLinkedinLine />,

          link: "https://www.linkedin.com/",
        },
      ],
    },
    {
      img: paitynSeptimus,
      name: "Paityn Septimus",
      position: "Design",
      socialMedia: [
        { icon: <RiTwitterXLine />, link: "https://x.com/home" },
        {
          icon: <RiLinkedinLine />,

          link: "https://www.linkedin.com/",
        },
      ],
    },
    {
      img: jakobCulhane,
      name: "Jakob Culhane",
      position: "Design",
      socialMedia: [
        { icon: <RiTwitterXLine />, link: "https://x.com/home" },
        {
          icon: <RiLinkedinLine />,

          link: "https://www.linkedin.com/",
        },
      ],
    },
    {
      img: allisonLubin,
      name: "Allison Lubin",
      position: "Engineering",
      socialMedia: [
        { icon: <RiTwitterXLine />, link: "https://x.com/home" },
        {
          icon: <RiLinkedinLine />,

          link: "https://www.linkedin.com/",
        },
      ],
    },
    {
      img: allisonLubin,
      name: "Hanna Calzoni",
      position: "Product",
      socialMedia: [
        { icon: <RiTwitterXLine />, link: "https://x.com/home" },
        {
          icon: <RiLinkedinLine />,

          link: "https://www.linkedin.com/",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={clsx(
        classes.container,

        "container",
        "sectionPadding"
      )}
    >
      <Header
        center
        className={classes.header}
        title="Our Team"
        heading="Always Here To Assist You"
        info="Our team is always here to assist you, ensuring you get the most out of our platform"
      />
      <div className={classes.teamMembers}>
        {teams?.map((team, i) => (
          <div
            className={clsx(classes.team, activeIndex === i && classes.active)}
            key={i}
            onMouseEnter={() => setActiveIndex(i)}
          >
            <div className={classes.imgContainer}>
              <img src={team.img} alt="#" className={classes.img} />
            </div>
            <div className={classes.detailsContainer}>
              <div className={classes.nameAndPositon}>
                <Heading regular xl2 primitive0 className={classes.name}>
                  {team.name}
                </Heading>
                <Text lg opacity50 className={classes.position}>
                  {team.position}
                </Text>
              </div>
              <div className={classes.socialMediaContainer}>
                {team?.socialMedia?.map((socialMedia, id) => (
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
          </div>
        ))}
      </div>
      <div className={clsx(classes.sellAllContainer)}>
        <div className={classes.teamMemberImages}>
          {teams?.slice(0, 5).map((team, i) => (
            <div
              key={i}
              className={classes.teamMemberImgContainer}
              style={{ marginLeft: i === 0 ? "0px" : `${-10}px` }}
            >
              <img
                src={team.img}
                alt={team.name}
                className={classes.teamMemberImg}
              />
            </div>
          ))}
        </div>
        <Button transparent lg className={classes.seeAllButton}>
          All Team <MdChevronRight className={classes.arrow} />
        </Button>
      </div>
    </section>
  );
};

export default Team;
