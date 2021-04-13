import React from "react";


class Box extends React.Component {


    render() {

        if (this.props.unit === 'step') {
            return (<input type="range" min={this.props.stepMin} max={this.props.stepMax} value={this.props.steps} onInput={this.props.onStepChange}></input>
            
            );

        } else if (this.props.unit === 'bmp') {
            return (<input type="range" min={this.props.heartMin} max={this.props.heartMax} value={this.props.heart} onInput={this.props.onHeartChange}></input>
            );

        } else if (this.props.unit === '°C') {
            return (<input type="range" min={this.props.tempMin} max={this.props.tempMax} value={this.props.temp} onInput={this.props.onTempChange}></input>
        );
        }

        return (

            <div class="box col-sm-3 col-6">
                <span class="material-icons" style={{ fontSize: 100, color: this.props.color }}>{this.props.icon}</span>
                <p>{this.props.value} {this.props.unit}</p>



            </div>
        )
    };
}

export default Box;