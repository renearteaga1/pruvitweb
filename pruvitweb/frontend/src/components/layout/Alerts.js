import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Alerts(props) {
  React.useEffect(() => {
    if (props.error.status) {
      //   props.alert.error("Error");
      if (props.error.msg.name)
        props.alert.error(`Name: ${props.error.msg.name.join()}`);
      if (props.error.msg.email)
        props.alert.error(`Email: ${props.error.msg.email.join()}`);
      if (props.error.msg.message)
        props.alert.error(`Message: ${props.error.msg.message.join()}`);
    }
  }, [props.error.msg]);

  React.useEffect(() => {
    if (props.message) {
      if (props.message.deleteLead)
        props.alert.success(props.message.deleteLead);
      if (props.message.addLead) props.alert.success(props.message.addLead);
    }
  }, [props.message]);

  console.log(props.error);
  return <Fragment />;
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withAlert()(Alerts));
