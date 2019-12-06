import React from 'react';
import api from '../../services/api';
import {Form} from 'react-bootstrap'
import './style.css';
export default class Chooseyear extends React.Component{
  render(){
    return(
     <div>
      <div className="Divinputyear">
        <p className="Textinputyear">Escolha o ano de ingresso:</p>
        <select className="Inputyear">
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option selected value="2018">2018</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
    )
    
  }
}