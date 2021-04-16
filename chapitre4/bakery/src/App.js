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
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.addItem = this.addItem.bind(this)
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

  addItem(name, price) {

  }

  renderHead() {
    return (

      <div class="row justify-content-md-center">


        {/*  Add */}

        <button class="btn btn-outline-danger" isSelected={this.state.activeTab} onClick={this.selectAdd}>Add</button>

        {/*  List */}

        <button class="btn btn-danger" isSelected={this.state.activeTab} onClick={this.selectList}>List</button>

        {/*  Pay */}

        <button class="btn btn-outline-danger" isSelected={this.state.activeTab} onClick={this.selectPay}>Pay</button>

      </div>

    )
  }

  renderContent() {
    if (this.state.activeTab === 'Add') {
      return (

        <Add />

      );
    } else if (this.state.activeTab === 'List')
      return (

        <List />

      );

    else if (this.state.activeTab === 'Pay')
      return (

        <Pay />

      )
  }


  render() {

    return (

      <div class="container">
        <h1 class="row justify-content-md-center text-danger ">Bakery</h1>
        <div class="row justify-content-md-center alert alert-danger" role="alert">
          {/* <Button></Button>
          <Button></Button>
          <Button></Button> */}
          <div>
            {this.renderHead()}
            {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }
}


export default App;