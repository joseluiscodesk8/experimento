import Link from "next/link";
import Image from "next/Image";
import { useState } from "react";
import { FaCog, FaCogs, FaHammer, FaHighlighter, FaGithub, FaLaravel } from "react-icons/fa";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";


const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 50px;
background: rgba(5, 43, 41);
cursor: pointer;
transition: 2s;

color {
    color: white;
}

picture {
    display: none;
}

@media screen and (max-width: 414px) {
    padding: 0;
    justify-content: space-between;

    picture {
        display: flex;
        color: white;
        transform: translate(-35px);
    }
}

`;

const Menu =styled.ul`
display: flex;
width: 20vw;
height: 100%;
padding: 0;
list-style: none;
align-items: center;
justify-content: center;
transition: 2s;

li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-weight: 500;
}

a {
    color: white;
    &:hover {
        color: grey;
    }
}

@media screen and (max-width: 414px) {
    width: 100vw;
    height: 150px;
    flex-direction: column;
    position: absolute;
    left: ${({ open }) => (open ? "-100%" : "0%")};
    z-index: 1000;
    transform: translate(0, 100px);
    background: rgba(5, 43, 41);

}

`;

const Navbar = () => {

    const [show, setShow] = useState(false);

  return (
    <Nav 
    >
    <motion.figure
    animate={{ rotate: [0 ,65, 0, 65, 0] }}
    transition={{ duration:  5  }}
    style={{ color: "white" }}
    whileHover={{  scale: 1.5 }}
    >
        <FaHammer />
    </motion.figure>
         <Menu 
         open={show}
         as={motion.ul}
         >
          <li>
                  <Link href="#">
                    <a>
                      <FaLaravel/>
                      curriculum
                    </a>
                  </Link>
              </li>
              <li>
                  <Link href="#">
                  <a>
                  <FaGithub />
                   GitHub
                  </a>
                  </Link>
              </li>
          </Menu>
    <picture onClick={() => setShow(!show)}>
        {show ? <FaCog/> : <FaCogs />}
    </picture>
</Nav>
  )
}

export default Navbar;