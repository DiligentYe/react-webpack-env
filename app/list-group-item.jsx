import React, {Component, PropTypes} from 'react';

const propTypes = {
	

};

class ListGroupList extends Component {
	constructor(...args){
		super(...args);
	}

	render(){
		if(this.props.isCreate){
			return (
				<a href="#" className="list-group-item list-group-item-title" 
					onClick={this.props.onCreate}>{this.props.title}</a>
			);
		} else {
			return (
			 	<a href="#" className="list-group-item" onClick={()=>this.props.onSelect(this.props.id)} >{this.props.title}</a>
			);
		}
		
	}
}

ListGroupList.propTypes = propTypes;

export default ListGroupList;