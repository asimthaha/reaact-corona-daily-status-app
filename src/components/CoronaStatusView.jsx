import React, { useEffect, useState } from "react";
import axios from "axios";
import CoronaStatusNavbar from "./CoronaStatusNavabr";

const CoronaStatusView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://api.covidtracking.com/v1/us/daily.json")
      .then((response) => {
        changeData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CoronaStatusNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">States</th>
                      <th scope="col">Positive</th>
                      <th scope="col">Negative</th>
                      <th scope="col">Pending</th>
                      <th scope="col">Hozpitalized Currently</th>
                      <th scope="col">Hozpitalized Cumulative</th>
                      <th scope="col">In ICU Currently</th>
                      <th scope="col">In ICU Cumulative</th>
                      <th scope="col">On Ventilator Currently</th>
                      <th scope="col">On Ventilator Cumulative</th>
                      <th scope="col">Date Checked</th>
                      <th scope="col">Death</th>
                      <th scope="col">Hozpitalized</th>
                      <th scope="col">Total Test Result</th>
                      <th scope="col">Last Modified</th>
                      <th scope="col">Recovered</th>
                      <th scope="col">Total</th>
                      <th scope="col">PosNeg</th>
                      <th scope="col">Death Increase</th>
                      <th scope="col">Hozpitalized Increase</th>
                      <th scope="col">Negative Increase</th>
                      <th scope="col">Positive Increase</th>
                      <th scope="col">Total Test Result Increase</th>
                      <th scope="col">Hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{value.date}</th>
                          <td>{value.states}</td>
                          <td>{value.positive}</td>
                          <td>{value.negative}</td>
                          <td>{value.pending}</td>
                          <td>{value.hospitalizedCurrently}</td>
                          <td>{value.hospitalizedCumulative}</td>
                          <td>{value.inIcuCurrently}</td>
                          <td>{value.inIcuCumulative}</td>
                          <td>{value.onVentilatorCurrently}</td>
                          <td>{value.onVentilatorCumulative}</td>
                          <td>{value.dateChecked}</td>
                          <td>{value.death}</td>
                          <td>{value.hospitalized}</td>
                          <td>{value.totalTestResults}</td>
                          <td>{value.lastModified}</td>
                          <td>{value.recovered}</td>
                          <td>{value.total}</td>
                          <td>{value.posNeg}</td>
                          <td>{value.deathIncrease}</td>
                          <td>{value.hospitalizedIncrease}</td>
                          <td>{value.negativeIncrease}</td>
                          <td>{value.positiveIncrease}</td>
                          <td>{value.totalTestResultsIncrease}</td>
                          <td>{value.hash}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoronaStatusView;
