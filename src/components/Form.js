import React, { Component } from 'react';
import { Modal } from 'reactstrap';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.formRef = React.createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.hasError) {
      return {
        modalOpen: false,
      };
    }
    return null;
  }

  onSubmit = (event) => {
    if(this.formRef.current.checkValidity()) {
      console.log('Form was submitted');
      this.props.dispatch({ type: 'HAS_ERROR', payload: false });
      this.setState({ modalOpen: true });
    } else {
      console.log('Form was not submitted');
      this.props.dispatch({ type: 'HAS_ERROR', payload: true });
    }

    event.preventDefault();
  }

  onChangeName = (event) => {
    this.props.dispatch({
      type: 'SET_EMAIL',
      payload: event.target.value,
    });
  }

  onChangeCompany = (event) => {
    this.props.dispatch({
      type: 'SET_COMPANY',
      payload: event.target.value,
    });
  }

  render() {
    const { email, company, hasError } = this.props;

    let formClassNames = 'row';
    if (hasError) {
      formClassNames += ' was-validated';
    }

    return (
      <form ref={this.formRef} className={formClassNames} onSubmit={this.onSubmit} noValidate>
        <div className="row">
          <div className="col">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={this.onChangeName} required />
            <div className="valid-feedback">
              Looks good!
            </div>
            <div className="invalid-feedback">
              Looks bad!
            </div>
          </div>
          <div className="col">
            <label htmlFor="company" className="form-label">Company</label>
            <input type="text" className="form-control" id="company" value={company} onChange={this.onChangeCompany} required />
            <div className="valid-feedback">
              Looks good!
            </div>
            <div className="invalid-feedback">
              Looks bad!
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col my-8">
            <button type="submit" className="btn btn-block btn-primary">Submit</button>
          </div>
        </div>
        <Modal isOpen={this.state.modalOpen} toggle={() => this.setState({ modalOpen: !this.state.modalOpen })}>
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="close" onClick={() => this.setState({ modalOpen: !this.state.modalOpen })}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => this.setState({ modalOpen: !this.state.modalOpen })}>Close</button>
          </div>
        </Modal>
      </form>
    )
  }
}

export default Form;
