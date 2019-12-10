import React from 'react';
import { connect } from 'react-redux';
import { getSchedule } from '../../actions';
import './schedule.scss';

class Schedule extends React.Component {
    componentDidMount() {
        this.props.getSchedule();
    }

    render() {
        const { schedule } = this.props.schedule;
        if (schedule) {
            const scheduleRow = schedule.map(v => {
                return (
                    <div className="scheduleRow" key={v.pid}>
                        <div className="day">{v.day}</div>
                        <div className="time">{v.open} - {v.close}</div>
                    </div>
                )
            })
            return (
                <div className="scheduleTable">{scheduleRow}</div>
            )
        }

        return (<div>loading...</div>)
    }
}

function mapStateToProps(state) {
    return {
        schedule: state.schedule.schedule
    }
}

export default connect(mapStateToProps, {
    getSchedule: getSchedule
})(Schedule)