import React, { useState } from "react";

const ContactUs = () => {

  const [data, setData] = useState(
    {
      fullName: " ",
      phone: " ",
      email: " ",
      msg: " "
    }
  );

  const inputEvent = (event) => {
    const {name, value} = event.target;

    setData ((preVal) =>{
      return{
        ...preVal,
        [name] : value,
      }
    })
  }
  const formSubmit = (e) =>{
    e.preventDefault();
    alert(
      `My name is ${data.fullName}. My Contact number is ${data.phone}. My Email Id is ${data.email}. Here is want I what to say ${data.msg}`
    );

  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto  ">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1"
                  className="form-label"
                > Full Name
                </label>
                <input type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1"
                  className="form-label"
                > Contact Number
                </label>
                <input type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder=" Enter your mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1"
                  className="form-label"
                > Email address
                </label>
                <input type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label">
                  Message
                </label>
                <textarea className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  rows="3">
                </textarea>
                <div class="col-12">
                <br/>
                  <button className="btn btn-outline-primary" 
                    type="submit">
                    Submit form
                  </button>
              </div>
          </div>
        </form>
      </div>
    </div>
      </div >
    </>
  );
}

export default ContactUs;