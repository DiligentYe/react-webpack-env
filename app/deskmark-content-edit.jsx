import React, {PropTypes, Component} from 'react';
import marked from 'marked';

const propTypes = {
	onSave: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired
};

class EditLayer extends Component {
	constructor(...args){
		super(...args);
	}

	render(){
		let {onSave, onCancel, data} = this.props;
		// console.log(data);

		const item = data.currentNote || {
			title: '',
			content: ''
		};
		console.log(item);

		let save = () => {
			// console.log(marked(this.refs.content.value));
			onSave({
				time: item.time,
				id: item.id,
				title: this.refs.title.value,
				originContent: this.refs.content.value,
				content: marked(this.refs.content.value)
			});
		}
		return (
			<div className="col-xs-9 deskmark-content">
                    <div className="clearfix top">
                        <div className="form-group form-inline pull-left">
                            <label for="title" >标题：</label>
                            <input type="text" ref="title" className="form-control" id="title" defaultValue={item.title} />
                        </div>
                        <div className="btn-group pull-right" role="group" aria-label="...">
                            <button type="button" className="btn btn-default" onClick={save}>发布</button>
                            <button type="button" className="btn btn-default" onClick={onCancel}>取消</button>
                        </div>
                    </div>
                    <div className="form-group inputarea">
                      	<textarea name="markdown" id="md" ref="content" defaultValue={item.originContent}></textarea>
                    </div>
            </div>
		);
	}
}

EditLayer.propTypes = propTypes;

export default EditLayer;
