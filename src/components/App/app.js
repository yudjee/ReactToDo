import React, { Component } from 'react';

import TodoList from '../todo-list/todo-list'
import AddFrom from '../item-add-form/item-add-form'



const AppHeader = () => {
	const classNames = 'title';
	return <h1 className={classNames}>My Todo List</h1>;
};


export default class App extends Component {
	startId = 100;

	createItem(title) {
		return {
			id: this.startId++,
			title,
			important: false,
			done: false
		}
	};

	state = {
		items: [
			this.createItem('Накормить кошку'),
			this.createItem('Придумать подарок на свадьбу'),
			this.createItem('Купить продукты'),
		]
	};

	onDeleteItem = (id) => {
		this.setState( ({ items }) => {
			const index = items.findIndex((el) => el.id === id)

			const before = items.slice(0, index)
			const after = items.slice(index + 1)
			const newArray = [...before, ...after]
			return {items: newArray}
		})
	};

	onItemAdded = (title) => {
		if(title !== '') {
			this.setState((state) => {
				const newItem = this.createItem(title);
				return {items: [...state.items, newItem]}
			})
		}
	};

	onToggleDone = (id) => {
		this.setState( ({items})=> {
			const index = items.findIndex((el) => el.id === id)

			const oldItem = items[index]
			const newItem = { ...oldItem, done: !oldItem.done}

			const before = items.slice(0, index)
			const after = items.slice(index + 1)
			const newArray = [...before, newItem, ...after]
			return {items: newArray}
		})
	};

	onToggleImortant = (id) => {
		this.setState( ({items})=> {
			const index = items.findIndex((el) => el.id === id)

			const oldItem = items[index]
			const newItem = { ...oldItem, important: !oldItem.important}

			const before = items.slice(0, index)
			const after = items.slice(index + 1)
			const newArray = [...before, newItem, ...after]
			return {items: newArray}
		})
	};


	render() {

	  return (
	    <div>
	      <AppHeader />
	      <TodoList 
	      	items={this.state.items} 
	      	onDeleteItem={this.onDeleteItem}
	      	onToggleDone={this.onToggleDone}
	      	onToggleImortant={this.onToggleImortant} />
	      <AddFrom onItemAdded={this.onItemAdded} />
	    </div>
	  );
	};
};
