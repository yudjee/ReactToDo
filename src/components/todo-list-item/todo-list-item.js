import React from 'react'

import './todo-list-item.css';


const TodoListItem = (props) => {

	let classNames = 'todo-list-item';
	if (props.item.important) {
		classNames += ' important';
	}

	if (props.item.done) {
		classNames += ' done';
	}

	
	return (
		<div className={classNames}>
			<div>
				<button type="button" className="btn btn_accept" onClick={props.onToggleDone}>
					<i className="fa fa-check"></i>
				</button>
				<span style={{marginRight: 20 + 'px'}}> {props.item.title} </span>
			</div>

			<div>
				<button type="button" className="btn btn_important" onClick={props.onToggleImortant}>
					<i className="fa fa-exclamation"></i>
				</button>
				<button type="button" className="btn btn_delete" onClick={props.onDeleteItem}>
					<i className="fa fa-trash-o"></i>
				</button>
			</div>
		</div>
		)
}

export default TodoListItem