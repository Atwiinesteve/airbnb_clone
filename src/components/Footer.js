import React from 'react';

// importing styles.
import "../styles/Footer.css";

function Footer() {

  return (
    <div className='footer--area'>
        <div className='info'>
            <div className='copyright'>
                <p>&copy; 2022 AirBnB, Inc </p>
            </div>
            <div className='footer--links'>
                <ul>
                    <li>
                        <a href="/terms">terms</a>
                    </li>
                    <li>
                        <a href="/sitemap">sitemap</a>
                    </li>
                    <li>
                        <a href="/privacy">privacy</a>
                    </li>
                    <li>
                        <a href="/your-privacy-choices">your privacy choices</a>
                    </li>
                    <li>
                        <a href="/destinations">destinations</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='support'>
            <div className='language'>
                <span className='footer--globe--icon'></span>
                <p>English (US)</p>
            </div>
            <div className='currency'>
                <span className='footer--currency--icon'></span>
                <p>USD</p>
            </div>
            <div className='support--and--resources'>
                <p>Support & Resources</p>
                <span className='footer--support--and--resources--icon'></span>
            </div>
        </div>
    </div>
  );

};

export default Footer;