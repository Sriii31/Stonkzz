import PropTypes from 'prop-types';
import React from "react";
class Greeting extends React.Component {
  render() {
    return (
        <div>
      <h1>Property value = {this.props.num}</h1>
      
      </div>
    );
  }
}

Greeting.propTypes = {
  num: PropTypes.number.isRequired
};
Greeting.defaultProps = {
    num:10
}
export default Greeting;

