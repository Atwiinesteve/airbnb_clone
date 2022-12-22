import React from 'react';

// importing styles.
import "../styles/Footer.css";

function Footer() {

  return (
    <div>
        <footer>
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
                    <span className='footer--globe--icon'>
                        <img width='18px' src='https://cdn-icons-png.flaticon.com/512/546/546310.png' alt='globe icon' />
                    </span>
                    <p>English (US)</p>
                </div>
                <div className='currency'>
                    <span className='footer--currency--icon'>
                        <img width='18px' src='https://cdn-icons-png.flaticon.com/512/991/991952.png' alt='globe icon' />
                    </span>
                    <p>USD</p>
                </div>
                <div className='support--and--resources'>
                    <p>Support & Resources</p>
                    <span className='footer--support--and--resources--icon'>
                        <img width='18px' src='https://cdn-icons-png.flaticon.com/512/130/130906.png' alt='globe icon' />
                    </span>
                </div>
            </div>
        </footer>
    </div>
  );

};

export default Footer;