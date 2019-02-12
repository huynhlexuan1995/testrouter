import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons'

class Cube extends React.Component{
	render(){
		return(
			<div id="main">
				<div id="logo">
					<h2>Huynh Pro</h2>
					<h4><i className="fas fa-code"></i>torvald pro</h4>
				</div>
				<div id="rectangle">
					<div className="face color-1">
					</div>
					<div className="back color-1">
					</div>
					<div className="top color-2">
					</div>
					<div className="floor color-2">
					</div>
					<div className="left side color-3">
					</div>
					<div className="right side color-3">
					</div>
					<div id="surprise">
						<i><FontAwesomeIcon icon={Icon.faHeartbeat}/></i>
					</div>
				</div>
			</div>
		);
	}
}
export default Cube;