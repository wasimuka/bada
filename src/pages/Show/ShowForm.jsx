import React, { Component } from 'react';
import axios from "axios";
import './ShowForm.css';
import { Image } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

const badastartup = require('../../assets/images/badastartup.png');
const inq_form = require('../../assets/images/inq_form.png');
const submit_btn_1 = require('../../assets/images/submit_btn_1.png');
const form_bg = require('../../assets/images/form_bg.jpg');
const thanks_tick = require('../../assets/images/thanks_tick.png');

class SubmitForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      firstname: '',
      lastname: '',
      companyname: '',
      oraganization: '',
      category: '',
      year_of_company: '',
      company_turnover: '',
      company_purpose: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      email: '',
      website: '',
      firstnameError: '',
      lastnameError: '',
      companynameError: '',
      oraganizationError: '',
      categoryError: '',
      year_of_companyError: '',
      company_turnoverError: '',
      company_purposeError: '',
      cityError: '',
      stateError: '',
      zipcodeError: '',
      phoneError: '',
      emailError: '',
      websiteError: ''
    }
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  emailValidation(){
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!this.state.email || regex.test(this.state.email) === false){
        this.setState({
            error: "Email is not valid"
        });
        return false;
    }
    return true;
}

  valid(){
    if (this.state.firstname === '' || (!this.state.firstname)) {
      this.setState({firstnameError : 'Please enter first name.'})
    } else if (this.state.lastname === '' || (!this.state.lastname)) {
      this.setState({lastnameError : 'Please enter last name.'})
    } else if (this.state.companyname === '' || (!this.state.companyname)) {
      this.setState({companynameError : 'Please enter company  name.'})
    } else if (this.state.oraganization === '' || (!this.state.oraganization)) {
      this.setState({oraganizationError : 'Please enter oraganization name.'})
    } else if (this.state.category === '' || (!this.state.category)) {
      this.setState({categoryError : 'Please choose category.'})
    } else if (this.state.year_of_company === '' || (!this.state.year_of_company)) {
      this.setState({year_of_companyError : 'Please choose year of company.'})
    } else if (this.state.company_turnover === '' || (!this.state.company_turnover)) {
      this.setState({company_turnoverError : 'Please enter company turnover.'})
    } else if (this.state.company_purpose === '' || (!this.state.company_purpose)) {
      this.setState({company_purposeError : 'Please enter company purpose.'})
    } else if (this.state.city === '' || (!this.state.city)) {
      this.setState({cityError : 'Please enter city name.'})
    } else if (this.state.state === '' || (!this.state.state)) {
      this.setState({stateError : 'Please choose state name.'})
    } else if (this.state.zipcode === '' || (!this.state.zipcode)) {
      this.setState({zipcodeError : 'Please enter zipcode.'})
    } else if (this.state.phone === '' || (!this.state.phone)) {
      this.setState({phoneError : 'Please enter phone.'})
    } else if (this.state.email === '' || (!this.state.email)) {
      this.setState({emailError : 'Please enter email.'})
    } else if (this.state.website === '' || (!this.state.website)) {
      this.setState({websiteError : 'Please enter website.'})
    }else{
      if(!this.emailValidation()){
        this.setState({emailError : 'Enter Correct email.'})
      }else{
        return true;
      }
    }
  }

  handleClick = event => {

    this.setState({firstnameError:'',lastnameError:'',companynameError:'',oraganizationError:'',categoryError:'',year_of_companyError:'',company_turnoverError:'',company_purposeError:'',cityError:'',stateError:'',zipcodeError:'',phoneError:'',emailError:'',websiteError:''});
    
    if (!this.valid()) {
      return false;
    }

    event.preventDefault();
    axios.post(`${process.env.REACT_APP_CONSUMER_URL}/api/v1/startupshow/`, {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      companyname: this.state.companyname,
      oraganization: this.state.oraganization,
      category: this.state.category,
      year_of_company: this.state.year_of_company,
      company_turnover: this.state.company_turnover,
      company_purpose: this.state.company_purpose,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      phone: this.state.phone,
      email: this.state.email,
      website: this.state.website
    })
      .then(res => {
        console.log(res.data);
        if (res.data.success && (res.data.success === true)) {
          this.setState({
            show: true
          })
          setTimeout(function () {
            window.location.replace('/');
          }, 2000);
        }
      })
  }


  render() {
    return (
      <>
        <Modal show={this.state.show ? true : false} onHide={this.handleClose}>
          <ModalHeader closeButton >
            <ModalTitle>BadaBusiness Show</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="thankscont">
              <Image src={thanks_tick} className="img-fluid" />
              <h3>Thank You For the Registration!</h3>
            </div>
          </ModalBody>
        </Modal>

        <form method="POST">
          <div className="form_bg" style={{ backgroundImage: `url(${form_bg})` }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-12 text-center">
                  <Image src={badastartup} className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="container mt-4 border_w">
              <section>
                <div className="row bg_black pt-4 pb-2">
                  <div className="col-sm-12 col-12 text-center">
                    <Image src={inq_form} className="img-fluid" />
                    <h3 style={{ color: '#fff' }}>Fill All Form Field To Go To Next Step</h3>
                  </div>
                </div>
                <div className="row bg_form">
                  <div className="col-sm-12 col-12">
                    <h3><b>Introduction</b></h3>
                    <div className="form-group">
                      <label htmlFor="firstnameInput">First Name</label>
                      <input type="text" className="form-control" name="firstname" onChange={(e) => { this.setState({ firstname: e.target.value }) }} id="firstnameInput" placeholder="First Name" autoFocus="ON" />
                      <span className="error firstnameError">{this.state.firstnameError}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastnameInput">Last Name</label>
                      <input type="text" className="form-control" name="lastname" onChange={(e) => { this.setState({ lastname: e.target.value }) }} id="lastnameInput" placeholder="Last Name" />
                      <span className="error lastnameError"> {this.state.lastnameError}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="companynameInput">Your Company Name</label>
                      <input type="text" className="form-control" onChange={(e) => { this.setState({ companyname: e.target.value }) }} id="companynameInput" name="companyname" placeholder="Your Company Name" />
                      <span className="error companynameError"> {this.state.companynameError}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="organizationInput">Name of Organization</label>
                      <select className="form-control form-control" name="organization" id="organizationInput" onChange={(e) => { this.setState({ oraganization: e.target.value }) }}>
                        <option value="">Select Oraganization</option>
                        <option value="Private Limited Company">Private Limited Company</option>
                        <option value="Public Limited Company">Public Limited Company</option>
                        <option value="Joint-Venture Company">Joint-Venture Company</option>
                      </select>
                      <span className="error organizationError">{this.state.oraganizationError}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlFile1">Category of Company </label>
                      <select className="form-control form-control" name="category" onChange={(e) => { this.setState({ category: e.target.value }) }}>
                        <option value="">Select Category</option>
                        <option value="Companies Limited by Shares">Companies Limited by Shares</option>
                        <option value="Unlimited Companies">Unlimited Companies</option>
                        <option value="One Person Companies">One Person Companies</option>
                      </select>
                      <span className="error categoryError"> {this.state.categoryError}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput">How Many years of your Company</label>
                      <div className="row" onChange={(e) => { this.setState({ year_of_company: e.target.value }) }}>
                        <div className="col-md-2 col-sm-4 col-4">
                          <div className="form-check">
                            <label className="form-check-label" htmlFor="zero_to_five">
                              <input className="form-check-input" type="radio" name="year_of_company" id="zero_to_five" value="0-5 Yrs" />
                              0-5 Yrs
                            </label>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="year_of_company" id="five_to_fifteen" value="6-15 Yrs" />
                            <label className="form-check-label" htmlFor="five_to_fifteen">
                              6-15 Yrs
                            </label>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="year_of_company" id="sixteen_to_thirty" value="16-30 Yrs" />
                            <label className="form-check-label" htmlFor="sixteen_to_thirty">
                              16-30 Yrs
                            </label>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-4">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="year_of_company" id="thirtyone_to_fifty" value="31-50 Yrs" />
                            <label className="form-check-label" htmlFor="thirtyone_to_fifty">
                              31-50 Yrs
                            </label>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="year_of_company" id="fifty_plus" value="50+ Yrs" />
                            <label className="form-check-label" htmlFor="fifty_plus">
                              50+ Yrs
                            </label>
                          </div>
                        </div>
                      </div>
                      <span className="error year_of_companyError"> {this.state.year_of_companyError}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="company_turnoverInput">What is Your Company Turnover? *</label>
                      <input type="text" className="form-control" name="company_turnover" onChange={(e) => { this.setState({ company_turnover: e.target.value }) }} id="company_turnoverInput" placeholder="Company turnover" />
                      <span className="error company_turnoverError"> {this.state.company_turnoverError}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="company_purpose">What Does Your Company Do?*</label>
                      <textarea className="form-control" name="company_purpose" onChange={(e) => { this.setState({ company_purpose: e.target.value }) }} id="company_purpose" rows={3} />
                      <span className="error company_purposeError"> {this.state.company_purposeError}</span>
                    </div>
                    <div className="form_border p-5 mt-5">
                      <h3 className="bg_head">Please Provide Your Contact Information</h3>
                      <div className="row">
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="cityInput">City</label>
                            <input type="text" className="form-control" name="city" onChange={(e) => { this.setState({ city: e.target.value }) }} id="cityInput" placeholder="City" />
                            <span className="error cityError"> {this.state.cityError}</span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="formGroupExampleInput">State</label>
                            <select className="form-control form-control" name="state" onChange={(e) => { this.setState({ state: e.target.value }) }}>
                              <option value="">Select State</option>
                              <option value="Andhra Pradesh">Andhra Pradesh</option>
                              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chandigarh">Chandigarh</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                              <option value="Daman and Diu">Daman and Diu</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Lakshadweep">Lakshadweep</option>
                              <option value="Puducherry">Puducherry</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">Himachal Pradesh</option>
                              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Madhya Pradesh">Madhya Pradesh</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Odisha">Odisha</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Uttar Pradesh">Uttar Pradesh</option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="West Bengal">West Bengal</option>
                            </select>
                            <span className="error stateError"> {this.state.stateError}</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="zipcodeInput">Zip Code</label>
                            <input type="text" className="form-control" name="zipcode" onChange={(e) => { this.setState({ zipcode: e.target.value }) }} id="zipcodeInput" placeholder="Zip Code" />
                            <span className="error zipcodeError"> {this.state.zipcodeError}</span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="phoneInput">Phone</label>
                            <input type="text" className="form-control" name="phone" onChange={(e) => { this.setState({ phone: e.target.value }) }} id="phoneInput" placeholder="+91(india)" />
                            <span className="error phoneError"> {this.state.phoneError}</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="emailInput">Email</label>
                            <input type="email" className="form-control" name="email" onChange={(e) => { this.setState({ email: e.target.value }) }} id="emailInput" placeholder="Email Id" />
                            <span className="error emailError"> {this.state.emailError}</span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="websiteInput">Website</label>
                            <input type="URL" className="form-control" name="website" onChange={(e) => { this.setState({ website: e.target.value }) }} id="websiteInput" placeholder="https://" />
                            <span className="error websiteError"> {this.state.websiteError}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="row mt-3">
              <div className="col-sm-12 col-12 text-center">
                {/* <button type="submit"> Add </button> */}
                {/* <input type="submit" name="submit" value="submit" style={{ backgroundImage: `url(${submit_btn_1})` }} /> */}
                <p onClick={this.handleClick} style={{cursor:'pointer'}}>
                  <Image src={submit_btn_1} className="img-fluid" />
                </p>

              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default SubmitForm;