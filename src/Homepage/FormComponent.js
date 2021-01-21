import React, { Component } from "react";
import PreviewComponent from "./PreviewComponent";
import medpiperlogo from "../assets/medpiperlogo.png";

export class FormComponent extends Component {
  render() {
    return (
      <div className="mx-5">
        <div>
          <nav class="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
            <a class="navbar-brand" href="#">
              <img src={medpiperlogo} alt="Logo" height="30px" width="125px" />
            </a>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row container-fluid px-5 mt-3 h-100">
          <div className="col-md-7 pt-3 border border-secondary border-top-0 border-left-0 border-bottom-0">
            <h5 className="pb-3">Resume Details</h5>
            <div class="accordion" id="accordionExample">
              <div class="card mb-2">
                <div class="card-header p-1" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed text-dark"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Basic Information
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <form action="/action_page.php">
                      <div class="row">
                        <div class="col">
                          <div>
                            <label>First Name</label>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="text"
                            name="firsName"
                          />
                        </div>
                        <div class="col">
                          <div>
                            <label>Middle Name</label>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="text"
                            name="middleName"
                          />
                        </div>
                        <div class="col">
                          <div>
                            <label>Last Name</label>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="text"
                            name="lastname"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div class="col-md-4 pt-2">
                          <div>
                            <label>Date of Birth</label>
                          </div>
                          <input
                            type="date"
                            class="form-control"
                            id="text"
                            name="date"
                          />
                        </div>
                        <div className="col pt-2">
                          <div>
                            <label>Gender</label>
                          </div>
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                          />
                          <label for="male" className="pl-1">
                            Male
                          </label>
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            className="ml-3"
                          />
                          <label for="female" className="pl-1">
                            Female
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="card mb-2">
                <div class="card-header p-1" id="collapseHospital">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed text-dark"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseHospital"
                      aria-expanded="false"
                      aria-controls="collapseHospital"
                    >
                      Hospital Experience
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseHospital"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">kkj</div>
                </div>
              </div>
                </div>
              </div>
              <div class="card mb-2">
                <div class="card-header p-1" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed text-dark"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Clinical
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">kkj</div>
                </div>
              </div>
              <div class="card mb-2">
                <div class="card-header p-1" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed text-dark"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Academics
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">hj</div>
                </div>
              </div>
              <div class="card mb-2">
                <div class="card-header p-1" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed text-dark"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Social
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">hj</div>
                </div>
              </div>
              <div class="card mb-2">
                <div class="card-header p-1" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link collapsed text-dark"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Confrences & Congress
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">hj</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <PreviewComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default FormComponent;
