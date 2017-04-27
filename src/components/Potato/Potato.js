
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { RaisedButton, TextField, DatePicker, TimePicker } from 'material-ui';
import s from './Potato.css';

function toMinuts(totalSeconds) {
    var minutes = Math.floor(totalSeconds / 60) + ''
    var seconds = totalSeconds % 60 + '';
    minutes = minutes.length === 1 ? '0' + minutes : minutes;
    seconds = seconds.length === 1 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
}
class Potato extends React.Component {

    state = {
        time: '25:00',
        pototaTime: 1500,
    }


    componentDidMount() {

        var canvas = document.getElementById('tutorial');
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        var x = 100;               // x 坐标值
        var y = 100;               // y 坐标值
        var radius = 40;                    // 圆弧半径
        var startAngle = -Math.PI / 2;                     // 开始点
        var endAngle = -Math.PI / 2; // 结束点
        var anticlockwise = false; // 顺时针或逆时针

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        ctx.stroke();

        setInterval(() => {
            // var pototaTime = this.state.pototaTime;
            // endAngle = -Math.PI / 2 + (2 * Math.PI * ((1500-pototaTime) /1500 ))
            // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
            // ctx.stroke();
            this.setState({
                pototaTime: --this.state.pototaTime
            })
        }, 1000)
    }
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
        return (
            <div className={s.root}>
                <div className={s.timeText}>{toMinuts(this.state.pototaTime)}</div>
                <canvas id="tutorial" width="150" height="150"></canvas>
            </div>

        );
    }
}


export default withStyles(s)(Potato);