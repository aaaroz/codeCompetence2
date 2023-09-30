export default function Contact() {
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-8 contact ps-5 pt-5">
            <h1 className="ms-5">Contact Us</h1>
            <p className="ms-5 mt-5 fs-5 fw-regular lh-1">
              Need to get in touch with us? Either fill the form with your
              inquiry or find the department email you’d like to contact below.
            </p>
          </div>
          <div className="col-4">
            {/* form start */}
            <form action="#" className="needs-validation" noValidate="">
              <div className="row pt-5 mb-4">
                <div className="col">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message">What can we help you with?</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={4}
                  required
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-info px-4 text-white">
                Submit
              </button>
            </form>
            {/* end of form */}
          </div>
        </div>
      </div>
    </section>
  );
}
