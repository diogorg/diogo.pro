import React from "react"
import { RiBriefcase2Line, RiCodeSSlashLine } from "react-icons/ri"
import { AiOutlineHome } from "react-icons/ai"
import { FiMessageCircle } from "react-icons/fi"
import { TiContacts } from "react-icons/ti"

const menu = [
  {
    name: "ABOUT",
    href: "#/about",
    icon: <AiOutlineHome />
  },
  {
    name: "RESUME",
    href: "#/resume",
    icon: <RiCodeSSlashLine />
  },
  {
    name: "WORKS",
    href: "#/works",
    icon: <RiBriefcase2Line />
  },
  {
    name: "BOARD",
    href: "#/board",
    icon: <FiMessageCircle />
  },
  {
    name: "CONTACT",
    href: "#/contact",
    icon: <TiContacts />
  },
];

export default menu
