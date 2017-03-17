import React, {PropTypes, Component} from 'react';

const propTypes = {
	data: PropTypes.object.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
};

class ShowLayer extends Component {
	constructor(...args){
		super(...args);
	}

	render(){
		let {data, onEdit, onDelete} = this.props;

		if(data.selectId){
			// console.log(onDelete);
			return (
				<div className="col-xs-9 deskmark-content">
		                <div className="clearfix top">
		                    <h3 className="deskmark-content-title pull-left">{data.currentNote.title}</h3>
		                    <div className="btn-group pull-right" role="group" aria-label="...">
		                        <button type="button" className="btn btn-default"
		                        	onClick={onEdit}>编辑</button>
		                        <button type="button" className="btn btn-default" 
		                        	onClick={()=>onDelete(data.selectId)}>删除</button>
		                    </div>
		                </div>
		             	<div className="detail" dangerouslySetInnerHTML={{__html: data.currentNote.content}} />
		        </div>
			);			
		} else {
			return (
				<div className="col-xs-9 deskmark-content">
					<h3>点击添加或查看日记</h3>
				</div>
			);
		}
		
	}
	
}

ShowLayer.propTypes = propTypes;

export default ShowLayer;
