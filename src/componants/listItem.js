import React from 'react'
import './Item.css'
import { connect } from 'react-redux';
import {completeTask,deleteTask} from '../js/actions'

 function ListItem(props) {
    return (
                <div className="tasks-container container">
                    <h3 className="task-title text-secondary text-center">Let's get some work done</h3>
                    <hr className="w-50"/>
                    <div className="row">
                    <ul>
                        {props.items && props.items.map((el,i)=>(
                            <li className="task-item d-flex" key={i}>
                                <button className="btn btn-outline-secondary complete-btn" onClick={()=>props.completeTask(i)}>{el.checked ? "Undo" : "Complete"}</button>
                                <button className="btn btn-outline-secondary delete-btn" onClick={()=>props.deleteTask(i)}>Delete</button>
                                <span className="font-weight-bold text-secondary item-title" style={el.checked ? {textDecoration:'line-through'}: null}>{el.title}</span>
                            </li>
                        ))}
                    </ul>
                    </div>
                </div>
        
    )
}
const mapStateToProps = state => ({
    items: state.taskReducer.items
  });
export default connect(mapStateToProps,{completeTask,deleteTask})(ListItem)