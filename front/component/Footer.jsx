import './Footer.css'
import SocialMediaIcons from './SocialMediaIcons';
const Footer = () => {
  return (
      <footer className="footer">
          <div><p>&copy; 2024 Router DOM tutorial. All rights reserved.</p></div>
          <div>
            <SocialMediaIcons/>
          </div>
      
    </footer>
  );
};

export default Footer;
