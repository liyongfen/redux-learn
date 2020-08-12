import { CHANGE_INPUT, GET_LIST, GET_SAGA_LIST, ADD_ITEM, REMOVE_ITEM } from './actionTypes';
import axios from 'axios';


export const getSagaListAction = () => {
    return {
        type: GET_SAGA_LIST,
    }
}

export const getTodoList = ()=> {
    return (dispatch)=> {
        axios.get('https://easy-mock.com/mock/5f33c8c6a67fac708f9626df/todolist').then((res) => {
            const list = res.data.list;
            console.log(list);
            dispatch(getListAction(list))
        })
    }
}

export const getListAction = (value)=> {
    return {
        type: GET_LIST,
        value
    }
}

export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}

export const addItemAction = (value)=> {
    return {
        type: ADD_ITEM,
        value
    }
}

export const removeItemAction = (value) => {
    return {
        type: REMOVE_ITEM,
        value
    }
}