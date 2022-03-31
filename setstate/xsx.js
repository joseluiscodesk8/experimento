import styled from "styled-components"
import { useState, useRef } from "react"
import { framer, motion } from "framer-motion"
import { Fa500Px, FaAccessibleIcon } from "react-icons/fa"
 
const Div = styled.div`
display: flex;
position: relative;
left: ${({ open }) => (open ? "0" : "50%")};
width: ${({ open }) => (open ? "50px" : "100px")};
height: 50px;
background: ${({ open }) => (open ? "#1416" : "#aa12fc")};
cursor: pointer;
transition: 2s;2

`;

const Skate = styled.div`
display: flex;
position: relative;
left: 0;
width: 50px;
height: 50px;
background: #202321;
cursor: pointer;
transition: 5s;

`;

const Icon = styled.img`
width: 50px;
height: 50px;
`;


export default function Home() {

  const [show, setShow] = useState(false);
  console.log(show);


  return (
   <div>
      <Div open={show}
      >
      hola
    </Div>
    <Skate
    onClick={() => setShow(!show)}
    >
      skate
    </Skate>
    <Icon src="/favicon.ico" onClick={() => setShow(!show)} >
    </Icon>
    <div onClick={() => setShow(!show)} >
    <Fa500Px/>
    </div>

   </div>
  )
}
