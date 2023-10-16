import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='mt-5'>

        <h4 className='text-center mt-5'>Mobile Number:+91 70910-43605</h4>
        <h4 className='text-center mt-1'>Email ID: sahay.mtech2013@gmail.com</h4>

      </div>
      <div className='text-center'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.557302511679!2d85.1642444!3d25.586391199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed589c492ac29f%3A0xf086c550b666a0d9!2sManas%20Mandir%20Rd%2C%20Kankarbagh%2C%20Hanuman%20Nagar%2C%20Patna%2C%20Bihar%20800026!5e0!3m2!1sen!2sin!4v1686596799250!5m2!1sen!2sin"
          width={600}
          height={250}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          
        />

      </div>
      <h3 className='text-center'>Send your message:</h3>
      <div className="container" style={{ width: 400 }}>
        <form action="https://formspree.io/f/mnqyeqzd" method="POST">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your message:
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              required=""
              defaultValue={""}
            />
          </div>
          {/* Add your other form fields here */}
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>


    </>
  )
}

export default Contact