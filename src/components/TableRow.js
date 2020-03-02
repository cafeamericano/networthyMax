import React, { Component } from "react";

var rowStyle = {
  fontFamily: "Roboto"
};

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserEntries: []
    };
  }

  handleDelete = id => {
    console.log("attempting to delete");
    let root = process.env.NODE_ENV === 'development' ? "http://localhost:9483" : "https://mfarmer5102-grandcentralapi.herokuapp.com";
    let url = root + `/NetworthyMax/api/entries/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      console.log(response);
    });
  };

  render() {
    return (
      <tr style={rowStyle}>
        <td>{this.props.data.entry_date}</td>
        <td>${this.props.data.amount.toFixed(2)}</td>
        <td>{this.props.data.comments}</td>
        <td className="text-right">
          <div
            className="btn btn-outline-danger"
            onClick={() => this.handleDelete(this.props.data.id)}
          >
            Delete
          </div>
        </td>
      </tr>
    );
  }
}

export default TableRow;
