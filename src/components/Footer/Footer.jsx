import React from "react";
import styles from "./footer.module.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className={`container ${styles.header}`}>
          <div className={styles.logo}>
            <a href="https://www.vrbo.com/">
              <img
                src="https://csvcus.homeaway.com/rsrcs/cdn-logos/4.7.0/sitename/vrbo/web/logo.svg"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="firstboxfooter">
            <div className="om1">
           <h3>Explore Vrbo</h3>
           <a>List your property</a>
           <br />
           <a>Book with Confidence</a>
           <br />
           <a>Trust & Safety</a>
           <br />
           <a>Partner resources</a>
            <br></br>
           <a>Vacation rental guides</a>
           </div>
           <div className="om2">
           <h3>Explore Vrbo</h3>
           <a>List your property</a>
           <br />
           <a>Book with Confidence</a>
           <br />
           <a>Trust & Safety</a>
           <br />
           <a>Partner resources</a>
            <br></br>
           <a>Vacation rental guides</a>
           </div>
        </div>
      </div>
    );
  }
}
export default Footer;
