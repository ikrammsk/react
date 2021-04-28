import React from "react";


class Box extends React.Component {

    Slider(){ 
        if (this.props.unit !== 'L')
        return(
        <input type="range" min={this.props.min} max={this.props.max}
        value={this.props.value} onInput={this.props.onChange}></input>)
    }

    render() {
        return(
            <div class="box col-sm-3 col-6">
            <span class="material-icons" style={{ fontSize: 100, color: this.props.color }}>{this.props.icon}</span>
            <p>{this.props.value} {this.props.unit}</p>
            {this.Slider()}
            </div>
            )
    };
}


export default Box;








// if (this.props.unit !== "L") {
//     return (
//         <div class="box col-sm-3 col-6">
//             <span class="material-icons" style={{ fontSize: 100, color: this.props.color }}>{this.props.icon}</span>
//             <p>{this.props.value} {this.props.unit}</p>
//             <input type="range" min={this.props.min} max={this.props.max}
//             value={this.props.value} onInput={this.props.onChange}></input>

//         </div>
//     )
// }else{

//     return (

// <div class="box col-sm-3 col-6">
//     <span class="material-icons" style={{ fontSize: 100, color: this.props.color }}>{this.props.icon}</span>
//     <p>{this.props.value} {this.props.unit}</p>



// </div>
//     )
// }