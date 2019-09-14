import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const Contact = props => {
  const { email, website, twitter, instagram } = props.info;
  const layout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  return (
    <div
      className="contact__container"
      style={{ display: "flex", background: "#e53935" }}
    >
      <div className="contact__modal">
        <CSSTransitionGroup
          style={layout}
          component="div"
          transitionName="slide"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}
        >
          <h1 className="contact__header">Contact</h1>

          <h3>
            <a
              href="mailto:me@thomasward.net?subject=Resume%20Inquiry"
              style={{ textDecoration: "none" }}
            >
              <span role="img" aria-label="email emoji">
                📧
              </span>
              : {email}
            </a>
          </h3>

          <h3>
            <a
              href="https://www.thomasward.net"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="computer emoji">
                🖥
              </span>
              : {website}
            </a>
          </h3>
          <br></br>
          <h1 className="contact__header">Socials</h1>
          <h3>
            Instagram:
            <a
              href="https://www.instagram.com/thomasward1212"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {instagram}
            </a>
          </h3>
          <h3>
            Twitter:
            <a
              href="https://www.twitter.com/thomasward1212"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {twitter}
            </a>
          </h3>
        </CSSTransitionGroup>
      </div>
    </div>
  );
};

export default Contact;
