import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, IconButton, TextField } from 'material-ui';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteSvg from 'material-ui/svg-icons/action/delete';
import s from './ToDoList.css';


class ToDoItem extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        labelStyleLine: PropTypes.any,
        isCompleted: PropTypes.bool.isRequired,
        todoCheck: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
        changeTodo: PropTypes.func.isRequired,
    }

    render() {
        let { id, text, isCompleted, labelStyleLine, todoCheck, editTodo, isEdit, changeTodo, deleteTodo } = this.props;
        const styles = {
            editBtn: {
                position: 'absolute',
                top: '10px',
                padding: 0,
                margin: 0,
                right: '50px',
                width: '16px',
                height: '16px',
                zIndex: 1000
            },
            editIcon: {
                width: '16px',
                height: '16px',
                color: 'blue',
            },
             deleteBtn: {
                position: 'absolute',
                top: '10px',
                padding: 0,
                margin: 0,
                top: '10px',
                right: '15px',
                height: '16px',
                zIndex: 1000
            },
            deleteIcon: {
                width: '16px',
                height: '16px',
                color: 'red',
            },
            checkboxStyle: {
                height: '20px'
            },
            inputStyle: {

            },
            hintStyle: {
                bottom: 0
            },
            inputStyle: {
                height: '20px',
                lineHeight: '20px',
                marginLeft: '14px'
            },
            underlineStyle: {
                bottom: 0
            }
        }

        return (
            <div className={s.todoItem}>
                {isEdit ? <TextField onKeyDown={(e) => { if (e.keyCode === 13) changeTodo(id, text) }} onBlur={() => changeTodo(id, text)} onChange={(e, newVal) => { text = newVal }} hintText={text} style={styles.inputStyle} hintStyle={styles.hintStyle} inputStyle={styles.inputStyle} underlineStyle={styles.underlineStyle} /> : <Checkbox style={styles.checkboxStyle} label={text} labelStyle={isCompleted ? labelStyleLine : null} onCheck={todoCheck}/>}


                <IconButton onClick={editTodo} style={styles.editBtn} iconStyle={styles.editIcon}>
                    <ModeEdit />
                </IconButton>
                <IconButton onClick={deleteTodo} style={styles.deleteBtn} iconStyle={styles.deleteIcon}>
                    <DeleteSvg/>
                </IconButton>
            </div>
        );
    }
}

export default ToDoItem;
