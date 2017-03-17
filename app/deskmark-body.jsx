import React, {PropTypes} from 'react';
import DeskmarkBodyList from './deskmark-body-list';
import DeskmarkBodyContent from './deskmark-body-content';

const propTypes = {
	data: PropTypes.object.isRequired,
	onCreate: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
}

function DeskmarkBody(items) {
	let {data, onCreate, onSelect, onSave, 
		onCancel, onEdit, onDelete} = items;
	return (
		<div className="deskmark-body container">
            <div className="row">
				<DeskmarkBodyList 
					notes={data.notes} 
					onCreate={onCreate}
					onSelect={onSelect}
					
				/>
				<DeskmarkBodyContent
					data={data}
					onSave={onSave}
					onCancel={onCancel}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			</div>
		</div>
	);
}

DeskmarkBody.propTypes = propTypes; 

export default DeskmarkBody;
