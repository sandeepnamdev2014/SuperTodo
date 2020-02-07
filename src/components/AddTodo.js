
import React, { useState } from 'react';
import './AddTodo.css'

const Todo=({addTodo})=>{
    const [inputvalue,setInputValue]=useState('');
    const addTask = () => {
        addTodo(inputvalue)
        setInputValue('')
    }
    return(
        <div className="todo-add-container">
                    <input type="text" 
                    className="add-todo-input" 
                    placeholder="Add ToDo"  
                    value={inputvalue} 
                    onChange={e=>setInputValue(e.target.value)} /> 
                    <button className="add-todo-button" onClick={addTask}>Add</button>
                </div>
    )
}


export default Todo;



/*
class Todos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputvalue:''
        }
        this.handleinput=this.handleinput.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this)
    }
    handleinput(e){
        console.log('change');
        console.log(e.target.value);
        this.setState({
            inputvalue:e.target.value
        })

    }
    handleButtonClick(){
        let currentvalue=this.state.inputvalue;
        this.props.addTodo(currentvalue)
        this.setState({
            inputvalue:'',
        })
    }
    render(){
        const inputvalue=this.state.inputvalue;
        return(
            <div className="todo-add-container">
                    <input type="text" name="" id="" className="add-todo-input" placeholder="Add ToDo"  value={inputvalue} onChange={this.handleinput} /> 
                    <button className="add-todo-button" onClick={this.handleButtonClick}>Add</button>
                </div>
        )
    }
}


*/