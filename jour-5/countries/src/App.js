import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/Button'
import Card from './components/Card'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            name: "",
            capital: "",
            flag: "",
            population: "",
            region: ""
        }

        this.getCountry = this.getCountry.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    getCountry(country) {
        // console.log("https://restcountries.eu/rest/v2/name/"+ country)
        fetch("https://restcountries.eu/rest/v2/name/" + country)
            .then(res => res.json())
            .then(result => {
                console.log(result)

                this.setState({
                    name: result[0].name,
                    capital: result[0].capital,
                    flag: result[0].flag,
                    population: result[0].population,
                    region: result[0].region
                })
            })
            .catch(error => console.error(error));
    }


    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/name/france")

            .then(res => res.json())
            .then(result => {
                console.log(result)

                this.setState({

                    name: result[0].name,
                    capital: result[0].capital,
                    flag: result[0].flag,
                    population: result[0].population,
                    region: result[0].region
                })
            })
            .catch(error => console.error(error));
    }


    render() {

        return (

            <div class="list">

                <Button onClick={this.getCountry}>France</Button>
                <Button onClick={this.getCountry}>Brazil</Button>
                <Button onClick={this.getCountry}>Croatia</Button>


                <Card name={this.state.name} 
                capital={this.state.capital} 
                flag={this.state.flag} 
                population={this.state.population} 
                region={this.state.region} />
            </div>



        )
    }
}


export default App;
