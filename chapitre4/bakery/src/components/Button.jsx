import React from "react";





class Button extends React.Component {


    render() {
        return (
            <div>

                < button isSelected={this.props.isSelected}
                    onClick={this.props.onClick}
                    children={this.props.children}
                ></button>


            </div>
        )



    };
}




export default Button;

