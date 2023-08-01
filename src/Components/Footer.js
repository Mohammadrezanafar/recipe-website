import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Recipe Website. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
