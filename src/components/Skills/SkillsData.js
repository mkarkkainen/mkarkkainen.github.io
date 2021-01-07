import {
    FaNode,
    FaReact,
    FaGitAlt,
    FaPython,
    FaNpm
  } from "react-icons/fa";

import { SiJavascript, SiFigma, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd  } from "react-icons/si";

export const devSkills = [
    {
        id: 1,
        name: "JavaScript",
        skill: <SiJavascript className="items" />,
    },
    {
        id: 2,
        name: "React",
        skill: <FaReact className="items" />,
    },
    {
        id: 3,
        name: "Node",
        skill: <FaNode className="items" />,
    },
    {
        id: 4,
        name: "Python",
        skill: <FaPython className="items" />,
    },
    {
        id: 5,
        name: "git",
        skill: <FaGitAlt className="items" />,
    },
    {
        id: 6,
        name: "npm",
        skill: <FaNpm className="items" />,
    },
]

export const designSkills = [
    {
        id: 1,
        name: "Figma",
        skill: <SiFigma />,
    },
    {
        id: 2,
        name: "Adobe XD",
        skill: <SiAdobexd />,
    },
    {
        id: 3,
        name: "Photoshop",
        skill: <SiAdobephotoshop />,
    },
    {
        id: 4,
        name: "Illustrator",
        skill: <SiAdobeillustrator />,
    },
]