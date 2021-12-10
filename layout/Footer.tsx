import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/Doges-Of-War-104417835421870/?ref=pages_you_manage",
  },
  {
    name: "Discord",
    url: "#",
  },
  {
    name: "Twitter",
    url: "#",
  },
  {
    name: "Reddit",
    url: "#",
  },
];

const Footer = (): React.ReactElement => {
  return (
    <div className="footer">
      <div className="footer-links-container">
        {socialLinks.map((link) => {
          return (
            <a href={link.url} target="_blank" className="footer-link">
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
