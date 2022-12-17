import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "/Users/javayporter/javayscript-app-design-system/src/stories/stylesheets/button.css";

export const Button = ({ backgroundColor, label, buttonAction }) => {
  return (
    <button
      type="button"
      className="javayscript-button"
      style={backgroundColor && { backgroundColor }}
      onClick={buttonAction}
    >
      {label}
    </button>
  );
};

// const Button = styled.button`
//   display: inline-block;
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   display: block;
// `;

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

// render(
//   <div>
//     <Button>Normal Button</Button>
//     <Button as="a" href="#">
//       Link with Button styles
//     </Button>
//     <TomatoButton as="a" href="#">
//       Link with Tomato Button styles
//     </TomatoButton>
//   </div>
// );
