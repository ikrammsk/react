import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Add from './components/Add'
import List from './components/List';
import Pay from './components/Pay'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: [],


    };
  }
  render() {
    return (
    
    
    <div class="container-center">

      <div class="row">


        {/*  Add */}

        <Button isSelected= {this.state.activeTab} onClick>Add</Button>

        {/*  List */}

        <Button isSelected = {this.state.activeTab} onClick >List</Button>

        {/*  Pay */}

        <Button isSelected = {this.state.activeTab} onClick>Pay</Button>
        
      </div>

    </div>
    );
  }
}


export default App;