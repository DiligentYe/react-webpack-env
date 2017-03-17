/**
 * 
 */
import React, {PropTypes} from 'react';

const propTypes = {
	head: PropTypes.string.isRequired,
	subhead: PropTypes.string.isRequired
	
}

const DeskmarkHeader = ({head, subhead}) => {
	return (
		<div className="deskmark-header page-header">
            <div className="container">
                <h1>{head} <small>{subhead}</small></h1>
            </div>
        </div>
    );
}

DeskmarkHeader.propTypes = propTypes;

export default DeskmarkHeader;