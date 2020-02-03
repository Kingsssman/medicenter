import React from 'react'

export const Header = () => {
  return (
    <div className="header-top-container">
      <div className="header-top clearfix">
        <div className="textwidget">
          <div style={{padding: '17px'}} className="clearfix">
            <ul className="thin-list">
              <li>
                <span className="header-icon template-location">2702 Memory Lane, Chicago, IL 60605</span>
              </li>
              <li>
                <a href="tel:5102105225" className="header-icon template-phone">(510) 210-5225</a>
              </li>
              <li>
                <a href="mailto:contact@medicenter.com" className="header-icon template-mail">contact@medicenter.com</a>
              </li>
            </ul>

            <div className="icons-list">
              <a href="https://twitter.com/QuanticaLabs" target="_blank"
                 className="icon-single mc-icon social-twitter"></a>
              <a href="https://www.facebook.com/QuanticaLabs/" target="_blank"
                 className="icon-single mc-icon social-facebook"></a>
              <a href="https://www.pinterest.com/quanticalabs/" target="_blank"
                 className="icon-single mc-icon social-pinterest"></a>
              <a href="http://quanticalabs.com/wp_themes/medicenter/cart/" className="template-cart mc-icon">&nbsp;<span
                className="cart-items-number cart-empty">0</span></a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
};