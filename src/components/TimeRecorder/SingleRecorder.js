import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Checkbox, IconButton, TextField } from 'material-ui';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import DeleteSvg from 'material-ui/svg-icons/action/delete';
import s from './TimeRecorder.css';


class SingleRecorder extends React.Component {
    static propTypes = {
        task: PropTypes.object.isRequired,
    }

    render() {
        let {  taskText, startTime, endTime, interval } = this.props;
        const styles = {

        }

        return (
            <div className={s.taskListHeader}>
                <div className={s.taskListItem}> {taskText}</div>
                <div className={s.taskListItem}>{startTime}-{endTime}</div>
                <div className={s.taskListItem}>{interval}h</div>
            </div>
        )
    }
}

export default withStyles(s)(SingleRecorder);
