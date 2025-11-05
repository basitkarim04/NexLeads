import React from "react";
import Button1 from "../../../assets/Images/Button1.png";
import Button2 from "../../../assets/Images/Button2.png";
import Button3 from "../../../assets/Images/Button3.png";
import PencilSvg from "../../SvgComponent/PencilSvg";

const data = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: "Daniel Foster",
  email: "daniel.foster@gs.ampemail.com",
  packageType: "Basic",
  frequencyType: "Monthly",
}));

const Dashboard2 = () => {
  return (
    <>
      <section className="dashboard-container">
        {/* TOP BUTTONS */}
        <div className="top-buttons">
          <div className="btn-box box">
            <img src={Button1} alt="btn1" />
            <div className="btn-content">
              <h3>Subscribed Packages</h3>
              <p>View Report</p>
            </div>
            <h2>186</h2>
          </div>
          <div className="btn-box">
            <img src={Button2} alt="btn2" />
            <div className="btn-content">
              <h3>Unsubscribed Packages</h3>
              <p>View Report</p>
            </div>
            <h2>186</h2>
          </div>
          <div className="btn-box">
            <img src={Button3} alt="btn3" />
            <div className="btn-content">
              <h3>Pending Schedules</h3>
              <p>View Report</p>
            </div>
            <h2>186</h2>
          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="table-container">
          <h2 className="table-heading">Schedule Date</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Package Type</th>
                <th>Frequency Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.packageType}</td>
                  <td>{row.frequencyType}</td>
                  <td>
                    <button className="edit-btn">
                      Edit <span className="edit-icon"> <PencilSvg/></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard2;
