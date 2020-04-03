import React, { Component } from 'react';
import Logo from '../images/logo-2.png';
import { db } from '../firebase';
import { Link } from "react-router-dom";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: [],
      symptom: '',
      historial: '',
      medicals: '',
      date: ''

    };
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  handleSubmit = e => {
    e.preventDefault();
    const params = {
      symptom: this.inputSymptom.value,
      historial: this.inputHistorial.value,
      medicals: this.inputMedicals.value,
      date: this.inputDate.value

    };


    db.collection("form").doc("user").set({
      symptom: this.state.symptom,
      historial: this.state.historial,
      medicals: this.state.medicals,
      date: this.state.date
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { addressText } = this.state.address
  //   const finalAddress = { ...this.state.address }
  //   console.log(this.state.address)
  //   console.log(this.state.coordinates)
  // Saving address on Firebase

  // componentDidMount() {
  //   let formRef = db.database().ref('form').orderByKey();
  //   formRef.on('child_added', snapshot => {
  //     const { symptom } = snapshot.val();
  //     const data = { symptom };
  //     this.setState({ form: [data].concat(this.state.form) });
  //   })
  // }


  componentDidMount() {
    db.collection("form")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ form: data });
      });
  }

  render() {
    return (
      <div className="row section container">
        <div className="row card-panel light-green lighten-5">
        <img className="imgLogo" alt="Logo" src={Logo} />
        <h3>Ingresa tus síntomas</h3>
        <form className="col s12" onSubmit={this.handleSubmit.bind(this)} ref='contactForm' ></form>
        <div className='row input-field form-group col s12'>
          <label for='symptom'>Síntomas:</label>
          <textarea className='form-control materialize-textarea validate'required id='symptom' ref={symptom => this.inputSymptom = symptom}></textarea>
        </div>
        <div className='row input-field form-group col s12'>
          <label for='historial'>Antecedentes:</label>
          <textarea className='form-control materialize-textarea validate'required id='historial'  ref={historial => this.inputHistorial = historial}></textarea>
        </div>
        <div className='row input-field form-group col s12'>
          <label for='medicals'>Medicamentos que Consume:</label>
          <textarea className='form-control materialize-textarea validate'required id='medicals'  ref={medicals => this.inputMedicals = medicals}></textarea>
        </div>
        <div className='row input-field form-group col s12'>
          <label for='medicals'>Inicio de Síntomas:</label>
          <textarea className='form-control materialize-textarea validate'required id='date'  ref={date => this.inputDate = date}></textarea>
        </div>

        <Link to="/MapPatient">
          <button className="btn-large  black-text light-green lighten-3 waves-effect waves-light s12 m6 l6">Continuar</button>
        </Link>

        </div>
        





        <div className='row'>
          {this.state.form.map(form =>
            <div className='col-sm-6' key={form.symptom}>

            </div>)}

        </div>

      </div>
    );
  }
}


export default Home;