import FormContact from "./form.contact";

export default function Contact() {
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-7 contact ps-5 pt-5">
            <h1 className="ms-5">Contact Us</h1>
            <p className="ms-5 mt-5 fs-5 fw-regular lh-1">
              Need to get in touch with us? Either fill the form with your
              inquiry or find the department email you’d like to contact below.
            </p>
          </div>
          <div className="col-4 ms-5">
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
}
