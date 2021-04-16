import React from "react";





class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            price: 1,


        };
        this.updateProductName = this.updateProductName.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
    }



    updateProductName(events) {
        this.setState({
            productName: events.target.value
        })
    }

    updatePrice(eventsP) {
        this.setState({
            price: eventsP.target.value
        })

    }


    render() {
        return (

            <div>

                <input type="text" onChange={this.updateProductName}></input>
                <input type="range" min= {1} max= {10} onChange={this.updatePrice}></input>
                <button type='Add' class="btn btn-outline-danger"
                    onClick={() => this.addItem(this.state.productName, this.state.price)}>Add</button>

            </div>


        )


    };
}




export default Add;
