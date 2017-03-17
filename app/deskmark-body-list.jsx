import React, {Component, PropTypes} from 'react';
import ListGroupList from './list-group-item';

const propTypes = {
	notes: PropTypes.array.isRequired,
	onCreate: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
};

class DeskmarkBodyList extends Component{
	constructor(...args){
		super(...args);
	}

	render() {
			return (
				<div className="col-xs-3 deskmark-list ">
	                    <div className="list-group list-sidebar">
	                    	<ListGroupList 
	                    		title="＋新建文档" 
	                    		isCreate="true" 
	                    		onCreate={this.props.onCreate}
	                    		onShow={this.props.onShow}
								onSelect={this.props.onSelect}
	                    	/>
	                    	{
								this.props.notes.map((note) => {
									return (
										<ListGroupList 
											title={note.title}
											id={note.id}
											key={note.id}
											onCreate={this.props.onCreate}
											onSelect={this.props.onSelect}
										/>
									);
								})                   		
	                    	}
	                    </div>
	            </div>
			);
	}
};

DeskmarkBodyList.propTypes = propTypes;

export default DeskmarkBodyList;