import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "../ui/HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { HiMenu, HiX } from "react-icons/hi";
import "../../styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a, .mobile-menu a, .desktop-nav a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        setIsMenuOpen(false);
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about", text: "ABOUT" },
    { href: "#what-i-do", text: "WHAT I DO" },
    { href: "#education", text: "EDUCATION" },
    { href: "#career", text: "EXPERIENCE" },
    { href: "#work", text: "WORK" },
    { href: "#techstack", text: "TECH STACK" },
    { href: "#contact", text: "CONTACT" },
  ];

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SKG
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </div>
        <ul className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a data-href={link.href} href={link.href}>
                <HoverLinks text={link.text} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  data-href={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;

