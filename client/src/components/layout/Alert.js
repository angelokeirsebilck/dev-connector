import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  let alertDiv = '';
  if (alerts != null && alerts.length > 0) {
    alertDiv = alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ));
  }

  return alertDiv;
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
  isAthenticated: state.auth.isAthenticated,
});

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Alert);
