import React, { useState } from "react";
import CoronaStatusNavbar from "./CoronaStatusNavabr";

const CoronaStatusAdd = () => {
  const [inputField, changeInputField] = useState({
    date: "",
    states: "",
    positive: "",
    negative: "",
    pending: "",
    hospitalizedCurrently: "",
    hospitalizedCumulative: "",
    inIcuCurrently: "",
    inIcuCumulative: "",
    onVentilatorCurrently: "",
    onVentilatorCumulative: "",
    death: "",
    hospitalized: "",
    totalTestResults: "",
    deathIncrease: "",
    hospitalizedIncrease: "",
    negativeIncrease: "",
    positiveIncrease: "",
    totalTestResultsIncrease: "",
  });

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    console.log(inputField);
  };

  return (
    <div>
      <CoronaStatusNavbar />
      <div class="container">
        <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Date:
                </label>
                <input
                  type="date"
                  class="form-control"
                  name="date"
                  value={inputField.date}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  States:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="states"
                  value={inputField.states}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Positive:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="positive"
                  value={inputField.positive}
                  onChange={inputHandler}
                />
              </div>

              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Negative:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="negative"
                  value={inputField.negative}
                  onChange={inputHandler}
                />
              </div>

              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Pending:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="pending"
                  value={inputField.pending}
                  onChange={inputHandler}
                />
              </div>

              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Hozpitalized Currently:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="hospitalizedCurrently"
                  value={inputField.hospitalizedCurrently}
                  onChange={inputHandler}
                />
              </div>

              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Hozpitalized Cumulative:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="hospitalizedCumulative"
                  value={inputField.hospitalizedCumulative}
                  onChange={inputHandler}
                />
              </div>

              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  In ICU Currently:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="inIcuCurrently"
                  value={inputField.inIcuCurrently}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  In ICU Cumulative:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="inIcuCumulative"
                  value={inputField.inIcuCumulative}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  On Ventilator Currently:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="onVentilatorCurrently"
                  value={inputField.onVentilatorCurrently}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  On Ventilator Cumulative:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="onVentilatorCumulative"
                  value={inputField.onVentilatorCumulative}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Deaths:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="death"
                  value={inputField.death}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Hozpitalized:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="hospitalized"
                  value={inputField.hospitalized}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Total Test Result:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="totalTestResults"
                  value={inputField.totalTestResults}
                  onChange={inputHandler}
                />
              </div>

              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Death Increases:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="deathIncrease"
                  value={inputField.deathIncrease}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Hozpitalized Increase:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="hospitalizedIncrease"
                  value={inputField.hospitalizedIncrease}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Negative Increase:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="negativeIncrease"
                  value={inputField.negativeIncrease}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Positive Increases:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="positiveIncrease"
                  value={inputField.positiveIncrease}
                  onChange={inputHandler}
                />
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">
                  Total Test Result Increases:
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="totalTestResultsIncrease"
                  value={inputField.totalTestResults}
                  onChange={inputHandler}
                />
              </div>

              <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-success">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoronaStatusAdd;
