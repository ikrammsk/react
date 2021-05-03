import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '../../public/images/item.png'


        };
    }
    render() {
        return (

            <div>
                <button className='button'
                style={{ image: `url(${this.state.image})` }}
                onClick={() => this.props.onClick(this.props.productName, this.props.price)}>
                </button>

            </div >
        )
    }
}

export default Card;