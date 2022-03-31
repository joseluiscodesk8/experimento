import Link from "next/link";
import Image from "next/Image";
import { useState, useEffect } from "react";
import { Fa500Px, FaAccessibleIcon } from "react-icons/fa";
import styled from "styled-components";


const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 50px;
background: #1416;
cursor: pointer;
transition: 2s;

`;

const Menu =styled.ul`
display: flex;
width: 50vw;
height: 50vh;
justify-content: space-between;
position: relative;
opacity: ${({ open}) => (open ? "1" : "0")};
left:  ${({ open}) => ( open ? "0" : "-100%")};
transform: translate(0, 199px);
background: ${({ open }) => (open ? "#1416" : "#aa12fc")};
transition: 2s;
`;


 const Navbar = () => {

    const [show, setShow] = useState(false);

    useEffect(() => setShow('true'), [])

  return (
    <Nav>
        <figure>
            <Image src="/vercel.svg"  width={50} height={50} alt=""/>
        </figure>
        <Menu open={show} >
        <li>
                <Link href="#">
                <a>skate</a>
                </Link>
            </li>
            <li>
                <Link href="#">
                <a>skate</a>
                </Link>
            </li>
        </Menu>
        <figures onClick={() => setShow(!show)} >
            <Fa500Px />
        </figures>
    </Nav>
  )
}
 export default Navbar;