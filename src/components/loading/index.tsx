import { useEffect, useState } from 'react';
import './style.css';

const Footer = () => {
  useEffect(() => {
    window.addEventListener('load', () => {
      window.document.getElementById('loading')?.classList.add('loaded');
    });
  }, []);
  return (
    <div id={'loading'}>
      <p className={'loading-text krona-one-regular'}>Loading...</p>
    </div>
  );
};

export default Footer;
