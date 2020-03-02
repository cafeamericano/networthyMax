import React, { Component } from "react";
import { Link } from "react-router-dom";
import GraphCard from "./GraphCard";

class Liabilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserEntries: []
    };
  }

  // componentDidUpdate() {
  //   this.grabAllUserEntries();
  // }

  // componentWillMount() {
  //   this.grabAllUserEntries();
  // }

  componentDidMount() {
    this.grabAllUserEntries();
  }


  grabAllUserEntries() {
    let loggedInUser = localStorage.getItem("activeUserUUID");
    let root = process.env.NODE_ENV === 'development' ? "http://localhost:9483" : "https://mfarmer5102-grandcentralapi.herokuapp.com";
    let url = root + `/NetworthyMax/api/liabilities/${loggedInUser}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          allUserEntries: response
        });
      });
  }

  render() {
    // Prep
    var allItems = this.state.allUserEntries;
    var cards = allItems.map((item, index) => (
      <GraphCard key={index} data={item} />
    ));

    var result;
    if (allItems.length === 0) {
      result = <div className="container">No sources found.</div>;
    } else {
      result = cards;
    }

    //Render
    return (
      <div className="animated fadeInUpBig">
        <div className="container">
          <div className="row">
            <div className="col-6 text-left">
              <h3>Liabilities</h3>
            </div>
            <div className="col-6 text-right">
              <Link to="/addnewsource">
                <button className="btn">
                  <i class="fas fa-plus-circle fa-2x text-primary"></i>
                </button>
              </Link>
            </div>
          </div>
          <hr></hr>
          <div className="row">{result}</div>
        </div>
      </div>
    );
  }
}

export default Liabilities;
