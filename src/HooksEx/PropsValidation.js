import React from 'react';
import PropTypes from 'prop-types';
class PropsValidation extends React.Component {
render() {
	return (
	<div>
		
		<h2>Props validation </h2>
		<table>
		<tr>
			<th>Type</th>
			<th>Value</th>
			<th>Valid</th>
		</tr>
		<tr>
			<td>Array</td>
			<td>{this.props.propArray}</td>
			<td>{this.props.propArray ? "true" : "False"}</td>
		</tr>
		<tr>
			<td>Boolean</td>
			<td>{this.props.propBool ? "true" : "False"}</td>
			<td>{this.props.propBool ? "true" : "False"}</td><td>{this.props.propBool ? "true" : "False"}</td>
            </tr>
            <tr>
                <td>Function</td>
                <td>{this.props.propFunc(5)}</td>
                <td>{this.props.propFunc(5) ? "true" : "False"}</td>
            </tr>
            <tr>
                <td>String</td>
                <td>{this.props.propString}</td>
                <td>{this.props.propString ? "true" : "False"}</td>
            </tr>
            <tr>
                <td>Number</td>
                <td>{this.props.propNumber}</td>
                <td>{this.props.propNumber ? "true" : "False"}</td>
            </tr>
            </table>
        </div>
        );
    }
    }
    
    // Prop types for our Comp
  
    // Prop types for our Component
    PropsValidation.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number.isRequired,
    propString: PropTypes.string,
    }
    
    // Default Props for our Component
    PropsValidation.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (x) { return x * 10 },
    propNumber: 1,
    propString: "Hello",
    }
    
    export default PropsValidation;

    