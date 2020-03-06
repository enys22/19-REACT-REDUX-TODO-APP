import {ADD_TASK,CONFIRM_TASK,DELETE_TASK} from '../constantes/action-types'

export const addTask = payload =>({
    type : ADD_TASK,
    payload
})
export const completeTask = payload =>({
    type : CONFIRM_TASK,
    payload
})
export const deleteTask = payload =>({
    type : DELETE_TASK,
    payload
})