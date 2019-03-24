import React, { Component } from "react";

export default class Client extends Component {
  render() {
    const client = [
      {
        id: "1234543234321",
        name: "chndana",
        lastName: "suriyabandara",
        email: "lakshaputhi@sirasa.com",
        phone: "32123-12321"
      }
    ];
    if (client) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users" />
                Clients
              </h2>
            </div>
            <div className="col-md-6" />
          </div>
          <table className="table table-striped" />
        </div>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  }
}
