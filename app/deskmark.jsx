import React, { Component } from 'react';
import uuid from 'uuid';
import DeskmarkHeader from './deskmark-header.jsx';
import DeskmarkBody from './deskmark-body';
import DeskmarkFooter from './deskmark-footer';

// to

class Deskmark extends Component {
	constructor(...args){
		super(...args);
		this.state = {
			notes: [],
			selectId: null,
			editing: false,
			currentNote: null
		}
		this.onCreate = this.onCreate.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onSave = this.onSave.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	/**
	 * 组件加载完成后，读取本地中的notes数据
	 */
	// componentDidMount(){
	// 	let notes = localStorage.getItem('notes');
	// 	if(!!notes){
	// 		this.setState({
	// 			notes: localStorage.getItem('notes').split('')
	// 		});
	// 	}
	// }

	

	/**
	 * 将notes数据存放到本地
	 */
	// componentDidUpdate(){
	// 	localStorage.setItem('notes', this.state.notes);
	// }

	/**
	 * 新建日记
	 */
	onCreate(){
		this.setState({
			selectId: null,
			editing: true,
			currentNote: null
		})
	}

	/**
	 * 显示日记
	 * @param  {[string]} id [note唯一标识]
	 */
	onSelect(id){
		// console.log(id);
		let notes = this.state.notes;
		notes.forEach(note => {
			if(note.id == id){
				this.setState({
					selectId: id,
					editing: false,
					currentNote: note,
				});
			}
		})
	}

	/**
	 * 编辑页面发布日记
	 * @param  {object} note 存放一个日记对象
	 */
	onSave(note){
		// 新建／修改
		var isCreate = true;

		let notes = this.state.notes;
		if(!note.id){
			note.id = uuid.v4();
		} 
		note.time = new Date().getTime();
		notes.forEach((item, index) => {
			if(item.id == note.id){
				notes[index] = note;
				isCreate = false;
			}
		});
		if(isCreate){
			notes = [...notes, note];
		}
		this.setState({
			notes: notes,
			editing: false,
			currentNote: note,
			selectId: note.id
		});
	}

	/**
	 * 编辑页面取消发布
	 */
	onCancel(){
		this.setState({
			editing: false
		});
	}

	onEdit(note){
		this.setState({
			editing: true
		});
	}

	onDelete(id){
		let notes = this.state.notes;
		notes.forEach((note, index) => {
			if(note.id == id){
				notes.splice(index, 1);
				console.log('ok');
				this.setState({
					notes: notes,
					selectId: null,
					// editing: false,
					currentNote: null,
				});
			}
		})
	}

	render(){
		// console.log(this.state);
		return (
			<div className="deskmark-note">
				<DeskmarkHeader head="Deskmark" subhead="Record Your Life" />
				<DeskmarkBody
					data={this.state}
					onCreate={this.onCreate}
					onSelect={this.onSelect}
					onSave={this.onSave}
					onCancel={this.onCancel}
					onEdit={this.onEdit}
					onDelete={this.onDelete}
					/>
				<DeskmarkFooter />
			</div>
		);
	}
	
};

export default Deskmark;