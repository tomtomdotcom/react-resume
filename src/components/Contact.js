import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const Contact = props => {
  const { email, website } = props.info;
  const layout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  return (
    <div className="contact__container" style={{ display: "flex" }}>
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
              📧: {email}
            </a>
          </h3>

          <h3>
            <a
              href="https://www.linkedin.com/in/thomas-ward-b1863024/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              🖥: {website}
            </a>
          </h3>
        </CSSTransitionGroup>
      </div>
    </div>
  );
};

export default Contact;
