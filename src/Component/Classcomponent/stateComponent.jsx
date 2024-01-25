import React from "react";
import "../../CSS/propsComponent.css"
class StateComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "KEC",
            course: "MERN"
        }
    }
    changeState = () => {
        console.log("Kongu engineering College") //use state should be used when we come
    }
    render() {                         
        return (
            <div>
                <h1>This is state Component</h1>
                <h2>Hello,{this.state.name}<br></br>This is{this.state.course}class</h2>
                <h3>I am changing the state of the {this.state.name} to {this.changeState()}</h3>
                <button onMouseOver={this.changeState}>Click me to change the state</button>
            </div>
        )
    }
}
export default StateComponent;                          