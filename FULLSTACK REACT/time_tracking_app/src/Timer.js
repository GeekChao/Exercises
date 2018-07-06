import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component{
    id = 0;
    isDelBtnClicked = false;
    state = {
        time: '0:0:0',
        isTimerTicked: false,
        lastTime: '0:0:0'
    };

    componentDidMount(){
        this.setState({
            time: this.props.timer.time,
            lastTime: this.props.timer.time
        });
    }

    clearTimeInterval(){
        if(this.id) {
            clearInterval(this.id);
            this.id = 0;
        }
    }

    componentWillUnmount(){
        if(!this.isDelBtnClicked) this.handleUpdateTime();
        this.clearTimeInterval();
    }

    handleUpdateTime() {
        this.props.handleUpdateTF({...this.props.timer, time: this.state.time});
    }

    handleDeleteBtnClick = (id) => {
        this.props.handleDeleteTF(id);
        this.isDelBtnClicked = true;
    }

    calculateTimeDiff(startTime){
        let curTime = Date.now(), diff = curTime - startTime;
        let secs = Math.floor(diff / 1000) % 60;
        let mins = Math.floor(diff / 1000 / 60) % 60;
        let hours = Math.floor(diff / 1000 / 60 / 60) % 60;

        let oldTime = this.state.lastTime.split(':').reverse();
        let newTime = [secs, mins, hours];
        let time = [], carry = 0;
        for(let i = 0; i < oldTime.length; i++){
            let sum = Number(oldTime[i]) + Number(newTime[i]) + carry;
            time.push(sum % 60);
            carry = Math.floor(sum / 60);
        }
        let [h, m, s] = time.reverse();

        return `${h}:${m}:${s}`;
    }

    handleTimerTick = () => {
        if(!this.state.isTimerTicked){
           let startTime = Date.now();
           this.id = setInterval(() => {
                this.setState({
                    time: this.calculateTimeDiff(startTime),
                });
            }, 1000);
            this.setState({isTimerTicked: true});
        }else{
            this.clearTimeInterval();
            this.setState((preState) => ({
                isTimerTicked: false,
                lastTime: preState.time
            }));
        }
    }

    render() {
        let {id, title, project} = this.props.timer;
        return (
            <div className='timer'>
                <section>
                    <h5>{title}</h5>
                    <p className='timer_project'>{project}</p>
                    <p className='timer_time'>{this.state.time}</p>
                </section>
                <div className='timer_action'>
                    <button className='timer_action_del' onClick={() => this.handleDeleteBtnClick(id)}></button>
                    <button className='timer_action_edit' onClick={this.props.handleEditClick}></button>
                </div>
                <div>
                    <button className='timer_action_toggle' onClick={this.handleTimerTick}>{this.state.isTimerTicked ? 'stop' : 'start'}</button>
                </div>
            </div>
        );
    }
}

export default Timer;