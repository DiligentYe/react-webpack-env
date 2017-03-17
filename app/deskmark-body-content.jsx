import React, {Component, PropTypes} from 'react';
import ShowLayer from './deskmark-content-show';
import EditLayer from './deskmark-content-edit';

const propTypes = {
	data: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

class DeskmarkBodyContent extends Component {
	constructor(props){
		super(props);
	}

	render() {
		let {data, onSave, onCancel, onEdit, onDelete} = this.props;
		// console.log(data);
		if(data.editing){
			return (
				<EditLayer 
					onSave={onSave}
					onCancel={onCancel}
					data={data}
				/>
			);
		} else {
			return (
				<ShowLayer 
					data={data}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			);
		}
		
	}
};

DeskmarkBodyContent.propTypes = propTypes;

export default DeskmarkBodyContent;