import React, { Component } from "react";

const cardStyle = {
  width: "300px"
};

const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

class AddNewSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_uuid: localStorage.getItem("activeUserUUID"),
      source_name: "",
      type: ""
    };
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.source_name === "" || this.state.type === "") {
      alert("New sources require a name and a type.");
    } else {
      let root = "https://central-api-node-2-6wevi67jwa-uc.a.run.app";
      let url;
      if (this.state.type === "Liquid Asset") {
        url = root + "/NetworthyMax/api/liquidassets";
      } else if (this.state.type === "Frozen Asset") {
        url = root + "/NetworthyMax/api/frozenassets";
      } else if (this.state.type === "Liability") {
        url = root + "/NetworthyMax/api/liabilities";
      }
      console.log(url);
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source_name: this.state.source_name,
          type: this.state.type,
          user_uuid: this.state.user_uuid
        })
      }).then(response => {
        console.log(response);
        window.history.back();
      });
    }
  };

  render() {
    return (
      <div className="full-height animated flipInY" style={flexCenter}>
        <div className="card rounded shadow p-4" style={cardStyle}>
          <h3>Add a Source</h3>
          <hr></hr>
          <form>
            <div class="form-group">
              <label>Source Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Source name"
                name="source_name"
                onChange={this.handleInputChange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Source Type</label>
              <select
                onChange={this.handleInputChange}
                name="type"
                class="form-control"
              >
                <option selected disabled>
                  Select a source type
                </option>
                <option value="Liquid Asset">Liquid Asset</option>
                <option value="Frozen Asset">Frozen Asset</option>
                <option value="Liability">Liability</option>
              </select>
            </div>
            <button
              onClick={this.handleFormSubmit}
              type="submit"
              class="btn btn-primary mr-2"
            >
              Create
            </button>
            <a href="javascript:history.back()" className="btn btn-secondary">
              Go Back
            </a>
          </form>
        </div>
      </div>
    );
  }
}
export default AddNewSource;
