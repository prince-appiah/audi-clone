import React, { useState } from "react";
import data, { longTexts } from "../data/footer";
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
  const [paragraphs, setParagraphs] = useState(longTexts);
  const socialIcons = [
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
  ];
  return (
    <div className="px-4 text-white bg-black">
      {/* social icons */}
      <ul className="flex justify-end py-8">
        {socialIcons.map((Icon) => (
          <li className="pr-6">{<Icon size="28" />}</li>
        ))}
      </ul>
      {/* links */}
      <div className="md:flex md:justify-between">
        {links.map((item) => (
          <div className="py-4" key={item.id}>
            <h4 className="font-sans font-medium">{item.title}</h4>
            <ul className="font-thin">
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
      <div className="flex flex-col mt-8 font-light">
        <h4> &copy; AUDI AG. All rights reserved</h4>
        <ul className="flex flex-wrap-reverse justify-between font-thin sm:flex-none sm:justify-between">
          <div className="pt-4">
            <li>Legal notice</li>
            <li>Cookie Policy</li>
          </div>
          <div className="pt-4">
            <li>Legal</li>
            <li>Cookie Consent Optins</li>
          </div>
        </ul>
      </div>
      {/* some long paragraph */}
      <div className="py-14">
        {longTexts.map((item) => (
          <p key={item.id} className="py-4 font-thin text-justify">
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};
