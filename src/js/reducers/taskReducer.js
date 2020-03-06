import {ADD_TASK,CONFIRM_TASK,DELETE_TASK} from '../constantes/action-types'

const initialState={
    items : [
        {
            title : 'First item',
            checked : false
          }
    ]
}

const taskReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case ADD_TASK : {
           return {
               ...state,
                items : [...state.items,{title : payload, checked : false}]
            }
        }
        case CONFIRM_TASK : {
            return {
                ...state,
                items : state.items.map((el,i)=>i===payload ?{...el,checked:!el.checked}:el)
            }
            
        }
        case DELETE_TASK : {
            return {
                ...state,
                items : state.items.filter((el,i)=>i!==payload)
            }
        }
        default : {
            return state
        }
    }

}

export default taskReducer;