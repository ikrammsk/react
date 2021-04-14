import React from "react";





class Button extends React.Component {


    render() { 
        return(
            <div>

                < button onClick = {this.props.onClick}></button>


            </div>
        )

    

    };
}




export default Button;


// {this.props.isSelected}

// {this.props.children}