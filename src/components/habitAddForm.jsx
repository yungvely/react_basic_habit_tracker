import React, { PureComponent, memo } from 'react';

// class HabitAddForm extends PureComponent {
//     formRef = React.createRef();
//     inputRef = React.createRef();

//     onSubmit = (e) => {
//         e.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         // this.inputRef.current.value = '';
//         this.formRef.current.reset();
//     };
//     render() {
//         return (
//             <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
//                 <input ref={this.inputRef} className='add-input' placeholder='Habit' type="text" />
//                 <button className="add-button">Add</button>
//             </form>
//         );
//     }
// }

// export default HabitAddForm;




const HabitAddForm = memo(props => { // THIS 선언을 안해서 더 깔끔해짐
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        // inputRef.current.value = '';
        formRef.current.reset();
    };
    return (
        <form ref={formRef} className='add-form' onSubmit={onSubmit}>
            <input ref={inputRef} className='add-input' placeholder='Habit' type="text" />
            <button className="add-button">Add</button>
        </form>
    );
})

export default HabitAddForm;