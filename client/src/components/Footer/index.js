import React from 'react';

const Footer = () => {
  const footDate = new Date;

  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">&copy; {footDate.getFullYear()} by ZichKoding</div>
    </footer>
  );
};

export default Footer;
