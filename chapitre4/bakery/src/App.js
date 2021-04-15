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
  selectAdd() {
    this.setState({ activeTab: 'Add' });
  }

  selectList() {
    this.setState({ activeTab: 'List' });
  }

  selectPay() {
    this.setState({ activeTab: 'Pay' });
  }

  viewFunction() {

    if (this.state.activeTab === "Add") {
      return (
        <Add />
      )

    } else if (this.state.activeTab === "List") {
      return (
        <List />
      )

    } else {
      return (
        <Pay />
      )
    }

  }



  render() {

    return (


      <div class="container-center">

        <div class="row">


          {/*  Add */}

          <Button isSelected={this.state.activeTab} onClick={this.selectAdd}>Add</Button>

          {/*  List */}

          <Button isSelected={this.state.activeTab} onClick={this.selectList} >List</Button>

          {/*  Pay */}

          <Button isSelected={this.state.activeTab} onClick={this.selectPay}>Pay</Button>

        </div>

      </div>
    );
  }
}


export default App;