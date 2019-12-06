import React from 'react';
import api from '../../services/api';
import { Table, Navbar, Container } from 'react-bootstrap';


export default class Listrank extends React.Component{
  state ={
    ranks: []
  }
  componentDidMount(){
    api.get('cfo/listRank')
    .then(res => {
      const ranks = res.data;
      this.setState({ranks})
    })
  }

  render(){
    console.log(this.state.ranks) 
    return(
<div>
<Navbar expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand href="#">Classificação CFO-Bombeiro</Navbar.Brand>
  </Container>
</Navbar>


<Table striped bordered hover>
  <thead>
    <tr>
      <th>Matrícula</th>
      <th>Nome</th>
      <th>Disciplina</th>
      <th>Nota</th>
    </tr>
  </thead>
  
  <tbody>
      {this.state.ranks.map(rank =>    
      <tr>
        <td>{rank.aluno.id}</td>   
        <td>{rank.aluno.nome}</td>
        <td>{rank.disciplina.nome}</td>
        <td>{rank.nota} </td>   
       </tr>)}
  </tbody>
</Table>
</div>
    );
  }
}