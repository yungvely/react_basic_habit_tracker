import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount() {
        // 화면에 보일때 && 로딩될때
        console.log(`habit: ${this.props.habit.name} mounted`);
    }
    componentWillUnmount() {
        // ui에서 삭제될때
        console.log(`habit: ${this.props.habit.name} will unmount`);

    }
    render() {
        const {onIncrement, onDecrement, onDelete, habit} = this.props;
        const {name, count} = habit;

        return <li className="habit">
            <span className='habit-name'>{name}</span>
            <span className='habit-count'>{count}</span>
            <button className='habit-button habit-increase' onClick={()=>onIncrement(habit)}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className='habit-button habit-decrease' onClick={()=>onDecrement(habit)}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className='habit-button habit-delete' onClick={()=>onDelete(habit)}>
                <i className="fas fa-trash"></i>
            </button>
        </li>;
    }
}

export default Habit;