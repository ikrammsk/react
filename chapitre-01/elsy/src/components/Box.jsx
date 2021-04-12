import React from "react";


class Box extends React.Component {


    render() {

        function Slider(){
        
            if(this.props.unit === 'L'){
                return <input type="range" min={this.props.min} max={this.props.max} value = {this.props.value} oninput={this.props.oniput}></input>
            }
        }

        Slider()

        return (
        
            <div class="box col-sm-3 col-6">
                <span class="material-icons" style={{ fontSize: 100, color: this.props.color }}>{this.props.icon}</span>
                <p>{this.props.value} {this.props.unit}</p>
                


            </div>
        )
    };
}

export default Box;