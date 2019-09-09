import React, { Component } from 'react'
import LanguageService from '../../services/lanugages-service';
import LanguagesService from '../../services/lanugages-service';
import {Link} from 'react-router-dom';
import Button from '../.././components/Button/Button';
import DashboardWord from '../../components/DashboardWord/DashboardWord';
class DashboardRoute extends Component {

  state={
    language:{},
  }
  
  componentDidMount(){
    LanguagesService.getLanguage()
    .then(res=>this.setState({language:res}));

  }
  
  render() {
   if(this.state.language.language&&this.state.language.words){
    console.log(this.state.language)
    return (
      <section className='dashboard-container'>
        <div className='dashboard-upper'>
        <h2>{this.state.language.language.name}</h2>
        <p>Total correct answers: {this.state.language.language.total_score}</p>
        <p><Link to='/learn'><Button className='practice-button'>Start practicing</Button></Link></p>
        <h3>Words to practice</h3>
        </div>

        <DashboardWord words={this.state.language.words}/>
      </section>
    );
   }
   else{
     return(
      <section>
      <h2></h2>
    </section>

     )
   }
  }
}

export default DashboardRoute
