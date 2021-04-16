import React from "react";





class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            price: 1,


        };
    }



updateProductName(events){
    if (events.target.type === "text") {
        this.setState({
            productName: events.target.value
        })

    }
}

updatePrice(eventsP){
    if (eventsP.target.type === "range") {
        this.setState({
            price: eventsP.target.value
        })

    }
}


render() {
    return (

        <div>
            <div>Add</div>
            <input type="text" onChange={this.updateProductName}></input>
            <input type="range" onChange={this.updatePrice}></input>
        </div>


    )


};
}




export default Add;
