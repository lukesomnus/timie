
import React from 'react';
import createFragment from 'react-addons-create-fragment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { RaisedButton, TextField, DatePicker, TimePicker } from 'material-ui';
import s from './TimeRecorder.css';
import { getToday, getHM, timeInterval } from '../../core/commonUtils';
import SingleRecorder from './SingleRecorder';

const tasks = [];
class TimeRecorder extends React.Component {

    state = {
        taskText: '',
        startTime: null,
        endTime: null,
        startTimePickerDisabled: true,
        endTimePickerDisabled: true,
        confirmBtnDisabled: true,
        tasks: []
    }

    addTask = () => {
        if (!this.state.taskText) return;
        const newTask = {
            taskText: this.state.taskText,
            startTime: getHM(this.state.startTime),
            endTime: getHM(this.state.endTime),
            interval: timeInterval(this.state.startTime, this.state.endTime)
        }
        const newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks,
            taskText: '',
            startTime: null,
            endTime: null,
            startTimePickerDisabled: true,
            endTimePickerDisabled: true,
            confirmBtnDisabled: true,
        })
    }
    taskInputChange = (event, newVal) => {

        if (!newVal.trim()) return;
        this.setState({
            taskText: newVal,
            startTimePickerDisabled: false
        })
    }

    handleChangeStartTime = (event, date) => {
        if (!date) return;
        this.setState({
            startTime: date,
            endTimePickerDisabled: false,
        });
    };

    handleChangeEndTime = (event, date) => {
        if (date < this.state.startTime) return;
        this.setState({
            endTime: date,
            confirmBtnDisabled: false
        });
    };

    render() {
        const styles = {
            confirmBtn: {
                marginLeft: '10px',
            },
            startTimePicker: {
                width: '80px',
            },
            timePicker: {
                display: 'inline-block',
                marginLeft: '10px',
            },
        };
        const today = getToday();
        return (
            <div className={s.root}>
                <div className={s.timeArea}>
                    <p>记录日期：{today}</p>
                    {/*<DatePicker hintText="选择日期" />*/}
                </div>
                {this.state.tasks.length > 0 ? (
                    <div className={s.taskListContainer}>
                        <div className={s.taskListHeader}>
                            <div className={s.taskListItem}> 任务名</div>
                            <div className={s.taskListItem}>时间</div>
                            <div className={s.taskListItem}>用时</div>
                        </div>
                        {this.state.tasks.map(item => <SingleRecorder {...item} />)}
                    </div>
                ) : null}

                <div className={s.inputArea}>
                    <TextField hintText="工作内容" value={this.state.taskText} onChange={this.taskInputChange} />
                    <TimePicker
                        format="ampm"
                        hintText="开始时间"
                        style={styles.timePicker}
                        textFieldStyle={styles.startTimePicker}
                        value={this.state.startTime}
                        onChange={this.handleChangeStartTime}
                        disabled={this.state.startTimePickerDisabled}
                    />
                    <span> -- </span>
                    <TimePicker
                        format="ampm"
                        hintText="结束时间"
                        style={styles.timePicker}
                        textFieldStyle={styles.startTimePicker}
                        value={this.state.endTime}
                        onChange={this.handleChangeEndTime}
                        disabled={this.state.endTimePickerDisabled}
                    />
                    <RaisedButton label="确定" style={styles.confirmBtn} onClick={this.addTask} disabled={this.state.confirmBtnDisabled} />
                </div>

            </div>
        );
    }
}


export default withStyles(s)(TimeRecorder);