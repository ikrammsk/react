import React from "react";




class Box extends React.Component {
    render() {
        return (
            <div>
                <h2> {this.state.count} </h2>
                <button className='moins' onClick={this.decrement}>-</button>
                <button className='plus' onClick={this.increment}>+</button>
            </div>

        )
    };


}

export default Box;