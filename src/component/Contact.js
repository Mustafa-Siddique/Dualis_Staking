import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AiFillCheckCircle, AiFillAlert } from 'react-icons/ai'

export default function Contact() {

  const [handleSuccess, setHandleSuccess] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lj3uaq7', 'template_sd934db', e.target, 'RCYuCsC8aUhCtdHVr')
      .then((result) => {
        setHandleSuccess("success")
        e.target.reset()
      }, (error) => {
        setHandleSuccess("err")
        console.log(error.text);
      });
  };

  return (
    <div id="contact-cont" className="position-relative">
      <h2>
        Get <span>in touch</span>
      </h2>
      <p>Do you have any question or proposal for us?</p>
      <p>
        Use this form to contact us and someone will be in touch with you soon!
      </p>
      <div className="contactForm">
        {/* SUCCESS ALERT */}
        <div
          className={handleSuccess == "success" ? "alert alert-success d-flex align-items-center my-2" : "alert alert-success d-none align-items-center my-2" }
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2 "
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
          >
            <AiFillCheckCircle fontSize={25} />
          </svg>
          <div>Your response has been submitted successfully!</div>
        </div>
        {/* FAILED ALERT */}
        <div className={handleSuccess == "err" ? "alert alert-danger d-flex align-items-center my-2" : "alert alert-danger d-none align-items-center my-2" } role="alert">
          <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><AiFillAlert fontSize={25}/></svg>
          <div>
            Response submission failed!
          </div>
        </div>
        {/* CONTACT FORM */}
        <form
          name="contact-form"
          method="post"
          onSubmit={sendEmail}
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div id="formName">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              id=""
              required
            />
          </div>
          <div id="formMail">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              id=""
            />
          </div>
          <div id="formMsg">
            <textarea
              name="message"
              id=""
              placeholder="Your Message Here!"
              required
              rows="10"
            ></textarea>
          </div>
          <div className="g-recaptcha my-2" data-sitekey="6LcuW-EeAAAAAHW8mngeysgFrOFILIRPW659xk6n"></div>
          <input
            id="formSubmit"
            className="btnYellow btn"
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
}
