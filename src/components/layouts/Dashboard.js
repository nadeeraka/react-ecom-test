import React from "react";
import Sidebar from "./Sidebar";
import Client from "../client/Client";

const Dashboard = () => (
  <div>
    <div className="row">
      <div className="col-md-10">
        <Client />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  </div>
);

export default Dashboard;
