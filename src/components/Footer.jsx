import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright Joshua Masigan {year}</p>
    </footer>
  );
};

export default Footer;
