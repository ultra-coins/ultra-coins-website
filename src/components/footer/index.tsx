import { useEffect, useState } from 'react';
import './style.css';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer>
      <p className="credit">
        <a className="sawarabi-gothic-regular" href="https://yukiosada.work">
          © {year} Designed and Created by: Yuki Osada
        </a>
      </p>
    </footer>
  );
};

export default Footer;
