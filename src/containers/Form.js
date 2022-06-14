import { connect } from "react-redux";

import Form from '../components/Form';

const mapStateToProps = state => {
  return {
    email: state.form.email,
    company: state.form.company,
    hasError: state.form.hasError,
  };
}

export default connect(mapStateToProps)(Form);
