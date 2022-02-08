import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    render() {
        const {onIncrement, onDecrement, onDelete, onReset, onAdd, habits} = this.props;

        return (
            <div className='habits'>
                <HabitAddForm 
                    onAdd={onAdd}
                />
                <ul>
                    {habits.map(habit => 
                        <Habit 
                            key={habit.id}
                            habit={habit}
                            onIncrement={onIncrement} 
                            onDecrement={onDecrement} 
                            onDelete={onDelete}
                        />
                    )}
                </ul>
                <button className='habits-reset' onClick={onReset}>
                    리셋
                </button>
            </div>
        );
    }
}

export default Habits;