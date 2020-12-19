import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    // 멤버변수를 정의한 후에 원하는 해당하는 대상에 연결하면 된다.
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (event) => {
        // 브라우저의 기본 기능을 취소
        event.preventDefault();
        // console.log(this.inputRef.current.value)
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // this.inputRef.current.value = '';
        this.formRef.current.reset();
    }
    render() {
        
        return (
            <form ref={this.formRef} className={"add-form"} onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type={"text"} className={"add-input"} placeholder={"Habit"} />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;