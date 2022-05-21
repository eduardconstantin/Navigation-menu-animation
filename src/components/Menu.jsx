import React, {useState} from 'react'
import style from '../style/menu.module.css'
import { motion, useTransform, useMotionValue } from "framer-motion"



const menuContentSVG = {
  open: { 
    color: "#157C95",
    fill: "#157C95",
    y: 0,
    filter: "drop-shadow(0px 2px 10px rgba(117, 212, 232,1))",
    transition: {
      type: "spring", stiffness: 150
    }
  },
  closed: { 
    color: "#5D606F",
    fill: "#5D606F",
    y: 8,
    filter: "drop-shadow(0px 0px 0px rgba(117, 212, 232,0))",
    transition: {
      type: "spring", stiffness: 130
    }
  }
}

const menuContentP = {
  open: { 
    color: "#157C95",
    fill: "#157C95",
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", stiffness: 150
    }
  },
  closed: { 
    color: "#5D606F",
    fill: "#5D606F",
    opacity: 0,
    y: -8,
    transition: {
      y:{delay: 0.1},
      type: "spring", stiffness: 130
    }
  }
}

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState([true, false, false, false]);

  const x = useMotionValue(0);
  const rotateY = useTransform(x, [0, 500], [-5, 5]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
  }

  const variants = {
    open: { 
      opacity: 1,
      rotateX: 0,
      translateZ: 0,
      transition: { 
        rotateX: { delay: 0.15, type: "spring", stiffness: 150, mass: 1 },
        duration: 0.4
      }
    },
    closed: { 
      opacity: 0,
      rotateX: -40,
      translateZ: -300,
      transition: { 
        rotateX: { delay: 0.2, type: "spring", stiffness: 130 },
        duration: 0.5
      }
    }
  }

  return (
    <motion.div className={style.menuContainer} >
        <motion.button type='button' className={style.menuButton} onClick={() => setIsOpen(isOpen => !isOpen)} initial={{ translateZ: 0, rotateZ: 45 }} whileTap={{ translateZ: -60 }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-list" viewBox="0 0 16 17">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </motion.button>
        <motion.div className={style.menuWrapper} animate={isOpen ? "open" : "closed"} variants={variants} onMouseMove={handleMouse} style={{rotateY: rotateY}}>
          <ul className={style.menuList}>
            <li>
              <motion.button type='button' className={style.listButton} onClick={() => setIsActive([true, false, false, false])}>
                <motion.svg animate={isActive[0] ? "open" : "closed"} variants={menuContentSVG} xmlns="http://www.w3.org/2000/svg" fill="#5D606F" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </motion.svg>
                <motion.p initial="initial" animate={isActive[0] ? "open" : "closed"} variants={menuContentP}>HOME</motion.p>
              </motion.button>
            </li>
            <li>
              <motion.button type='button' className={style.listButton} onClick={() => setIsActive([false, true, false, false])}>  
                <motion.svg animate={isActive[1] ? "open" : "closed"} variants={menuContentSVG} xmlns="http://www.w3.org/2000/svg" fill="#5D606F" viewBox="0 0 16 16">
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                </motion.svg>
                <motion.p initial="initial" animate={isActive[1] ? "open" : "closed"} variants={menuContentP}>NEWS</motion.p>
              </motion.button>
            </li>
            <li></li>
            <li>
              <motion.button type='button' className={style.listButton} onClick={() => setIsActive([false, false, true, false])}>
                <motion.svg animate={isActive[2] ? "open" : "closed"} variants={menuContentSVG} xmlns="http://www.w3.org/2000/svg" fill="#5D606F" viewBox="0 0 16 16">
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                </motion.svg>
                <motion.p initial="initial" animate={isActive[2] ? "open" : "closed"} variants={menuContentP}>STORE</motion.p>
              </motion.button>
            </li>
            <li>
              <motion.button type='button' className={style.listButton} onClick={() => setIsActive([false, false, false, true])}>
                <motion.svg animate={isActive[3] ? "open" : "closed"} variants={menuContentSVG} xmlns="http://www.w3.org/2000/svg" fill="#5D606F" viewBox="0 0 16 16">
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </motion.svg>
                <motion.p initial="initial" animate={isActive[3] ? "open" : "closed"} variants={menuContentP}>SETTINGS</motion.p>
              </motion.button>
            </li>
          </ul>
        </motion.div>
    </motion.div>
  )
}
