import React, {Component} from 'react';

class Habit extends Component {
    state={
        count:0,
    }

    handleIncrement = () => {
        // state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트 해야 함.
        // this.state.count += 1; : 감지하지 못함
        // this.setState({ count: this.state.count + 1});
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        // const count = this.state.count -1;
        // this.setState({ count: count < 0 ? 0 : count});
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        // console.log(this.props);
        // const habitName = this.props.habit.name;
        const { name, count } = this.props.habit;

        return (
        <li className={"habit"}>
            <span className={"habit-name"}>{name}</span>
            <span className={"habit-count"}>{count}</span>
            <button className={"habit-button habit-increase"} onClick={this.handleIncrement}>
                <i className={"fas fa-plus-square"}></i>
            </button>
            <button className={"habit-button habit-decrease"} onClick={this.handleDecrement}>
                <i className={"fas fa-minus-square"}></i>
            </button>
            <button className={"habit-button"} onClick={this.handleDelete}>
                <i className={"fas fa-trash"}></i>
            </button>
        </li>
        );
    };
}

export default Habit;