import React from "react";





class Pay extends React.Component {
    constructor() {
        super()

        this.state = {
            basket: [],

            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }
    }
    handleSelect(name, price) {

        console.log(name);
        console.log(price);
    }

    render() {
        return (

            <div>
                <p>{this.state.total}
                    {this.props.items.map((elem => {
                        return <Card itemName={elem.name}
                            price={elem.price}
                            onClick={this.handleSelect} />
                    }))}
                </p>
            </div>

        )

    };
}




export default Pay;
