import Link from "next/link";
import Image from "next/Image";
import { useState } from "react";
import { Fa500Px, FaAccessibleIcon, FaHammer, FaHighlighter, FaGithub, FaLaravel } from "react-icons/fa";
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

`;

const Menu =styled.ul`
display: flex;
width: 50vw;
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

`;

const Navbar = () => {

    const [show, setShow] = useState(false);

  return (
    <Nav
    >
    <motion.figure style={{ color: "white" }}
    whileHover={{  scale: 1.5 }}
    >
        <FaHammer />
    </motion.figure>
         <Menu as={motion.ul}
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
    <picture onClick={() => setShow(!show)} >
        { show ? <Fa500Px /> : <FaAccessibleIcon />}
    </picture>
</Nav>
  )
}

export default Navbar;