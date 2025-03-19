import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <ul className="social-links z-10">
      <li>
        <a href="https://github.com/thulitha0109" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/thulitha_thennakon/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/thulitha-thennakon-646a82176/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </li>
    </ul>
  );
}

export default SocialLinks;
