import React, { Component } from 'react';

import './item-add-form.css'

export default class ItemAddForm extends Component {

  state = {
    title: ''
  };

  onTitleChange = (e) => {
  	this.setState({
  		title: e.target.value
  	})
  };

  onSubmit = (e) => {
  	e.preventDefault();
    const {title} = this.state;
    const add = this.props.onItemAdded
    add(title)
    this.setState({title: ''})
  };

  render() {
  	return (
  		<div className="container">
      <div className="container__item">
      <form className="form" onSubmit={this.onSubmit}>
      <input type="text" className="form__field" 
      placeholder="add new todo" 
      value={this.state.title}
      onChange={this.onTitleChange} />
      <button type="submit" className="submit btn--primary btn--inside uppercase">Add</button>
      </form>
      </div>
      </div>
  	)
  }
}



  

