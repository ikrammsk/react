import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button'


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
    
    
    <div class="container-fluid">

      <div class="row">

        {/*  List */}

        <Button></Button>

        {/*  Add */}

        <Button></Button>


        {/*  Pay */}

        <Button></Button>
        
      </div>

    </div>
    );
  }
}


export default App;