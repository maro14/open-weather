import React from 'react';
import { TbBrandGithub, TbBrandFiverr } from 'react-icons/tb';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Open Weather. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub />
                    </a>
                    <a href="https://fiverr.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <TbBrandFiverr />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;