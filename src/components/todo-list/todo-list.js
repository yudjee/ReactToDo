import React from 'react'

import TodoListItem from '../todo-list-item/todo-list-item.js'

const TodoList = (props) => {
			
	const elements = props.items.map((item) => {

		return (
			<li key={item.id} style={{listStyleType:'none'}}> 
				<TodoListItem 
					item={item} 
					onToggleDone={ () => props.onToggleDone(item.id)}
					onDeleteItem={ () => props.onDeleteItem(item.id)}
					onToggleImortant={ () => props.onToggleImortant(item.id)} />
			</li>
		)
	});

	return (
		<ul className="item-list">{ elements }</ul>
	)
}

export default TodoList