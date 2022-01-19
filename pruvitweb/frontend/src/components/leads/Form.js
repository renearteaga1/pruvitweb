import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

function Form(props) {
  const [lead, setLead] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addLead(lead);
    setLead({
      name: "",
      email: "",
      message: "",
    });
    // console.log(lead);
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h1>Add Lead Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange}
            value={lead.name}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={handleChange}
            value={lead.email}
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <input
            className="form-control"
            type="text"
            name="message"
            onChange={handleChange}
            value={lead.message}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  addLead: PropTypes.func.isRequired,
};

export default connect(null, { addLead })(Form);
