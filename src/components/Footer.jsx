import React, { useState } from "react";
import data from "../data/footer";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(data);
  const socialIcons = [
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
  ];
  return (
    <div className="text-white bg-black">
      {/* social icons */}
      <ul className="flex justify-end px-10 py-10">
        {socialIcons.map((Icon) => (
          <li className="pr-10">{<Icon size="40" />}</li>
        ))}
      </ul>
      {/* links */}
      <div className="">
        {links.map((item) => (
          <div className="" key={item.id}>
            <h4 className="">{item.title}</h4>
            <ul className="">
              {item.links.map((link) => (
                <li className="" key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* divider and copyright */}
      {/* some long paragraph */}
    </div>
  );
};
