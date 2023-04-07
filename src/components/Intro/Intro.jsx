import React, { useContext } from "react";
import "./Intro.css";
import ui from "../../img/ui.png";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi, I am</span>
          <span>Byiringiro Christian</span>
          <span>
          A passionate full stack web developer and a freelance software engineer from Rwanda. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://instagram.com/b_chrixtian?igshid=YmMyMTA2M2Y="><img src={Instagram} alt="" /></a>
        <a href="https://www.linkedin.com/in/byiringiro-christian-7711a7251"><img src={LinkedIn} alt="" /></a>
        <a href="https://github.com/Bchrstian"><img src={Github} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src={ui} style={{maxWidth:'100%'}} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
