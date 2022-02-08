import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';



class App extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ]
    }

    handleIncrement = (habit) => {
        //state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야함.
        const habits = this.state.habits.map(item => {
            if(item.id === habit.id) {
                return {...habit, count: habit.count + 1};
            }
            return item
        })
    
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // habits[index].count++
        this.setState({ habits })
    }
    handleDecrement = (habit) => {
        const habits = this.state.habits.map(item => {
            if(item.id === habit.id) {
                const count = habit.count -1
                return {...habit, count: count < 0 ? 0 : count};
            }
            return item
        })
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // const count = habits[index].count -1;
        //     habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits })
    }
    handelDelete = (habit) => {
        const habits = this.state.habits.filter( item => {
            if(item.id !== habit.id){
                return item;
            }
        });
        console.log(`handelDelete, ${habits}`);
        this.setState({ habits })
    }
    handelReset = () => {
        const habits = this.state.habits.map(habit => {
            if(habit.count !== 0) {
                return {...habit, count: 0}
            }
            return habit;
        })
        // const habits = this.state.habits.map(habit => {
        //     habit.count = 0;
        //     return habit;
        // });
        this.setState({ habits })
    }
    handelAddHabit = (name) => {
        const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
        // habits.push({id: this.state.habits.length+1, name: name, count: 0})

        this.setState({ habits })
    }

    render() {
        return (<>
                <Navbar 
                    totalCount={this.state.habits.filter(item => item.count>0).length}
                />
                <Habits 
                    habits={this.state.habits} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement} 
                    onDelete={this.handelDelete}
                    onReset={this.handelReset}
                    onAdd={this.handelAddHabit}
                />
            </>);
    }
}

export default App;


