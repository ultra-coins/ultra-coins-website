import { useEffect, useState } from 'react';
import './style.css';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer>
      <div className="credit">
        {/* PC */}
        <a className="pc-credit sawarabi-gothic-regular" href="https://yukiosada.work">
          © {year} Designed and Created by: Yuki Osada
        </a>
        {/* mobile */}
        <a className="mobile-credit sawarabi-gothic-regular" href="https://yukiosada.work">
          <p>© {year} Designed and Created by:</p>
          <p>Yuki Osada</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
