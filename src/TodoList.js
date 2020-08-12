import React from 'react';
import store from './store/index-saga';
//import store from './store/index-thunk';
import * as action from  './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = store.getState();
    }
    componentDidMount(){
        store.subscribe(this.handleChange);
        //store.dispatch(action.getTodoList()); //thunk
        store.dispatch(action.getSagaListAction()) //sage
    }
    handleChange = () => {
        this.setState(store.getState());
    }
    handleChangeValue = (e)=> {
        store.dispatch(action.changeInputAction(e.target.value));
    }
    handleAddItem = ()=> {
        store.dispatch(action.addItemAction(this.state.inputValue));
    }
    handleRemoveItem = (index)=> {
        store.dispatch(action.removeItemAction(index));
    }
    render(){
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list} 
                onChangeValue={this.handleChangeValue}
                onAddItem={this.handleAddItem} 
                onRemoveItem={this.handleRemoveItem}
            />
        );
    }
}

export default TodoList;
