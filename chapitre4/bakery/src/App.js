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

  renderHead() {
    return (

        <div>


          {/*  Add */}

          <Button isSelected={this.state.activeTab} onClick={this.selectAdd}>Add</Button>

          {/*  List */}

          <Button isSelected={this.state.activeTab} onClick={this.selectList} >List</Button>

          {/*  Pay */}

          <Button isSelected={this.state.activeTab} onClick={this.selectPay}>Pay</Button>

        </div>
      
    )
  }

  renderContent() {
    if (this.state.activeTab === 'Add') {
      return (

        <h2><Add /></h2>

      );
    } else if (this.state.activeTab === 'List')
      return (

        <h2><List /></h2>

      );

    else if (this.state.activeTab === 'Pay')
      return (

        <h2><Pay /></h2>

      )
  }


  render() {

    return (

      <div>
        <Button />
        <Button />
        <Button />
        {this.renderHead()}
        {this.renderContent()}
      </div>


    )
  }
}


export default App;