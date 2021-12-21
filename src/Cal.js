import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Subjectfun from './Subject';
import DisplayDate from './DisplayDate'
class Cal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      day:'',
      time:'',
      meets:[]
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDateChange=this.handleDateChange.bind(this);
    this.makeAppointment=this.makeAppointment.bind(this)
  }
  handleOnChange(event) {
    const sub = event.target.value;
    this.setState({subject:sub})
  }

  handleDateChange(event){
    const dateTime=new Date(event.target.value);
    const datadate=dateTime.getDate()
    const month=dateTime.getMonth()+1
    const year=dateTime.getFullYear()
    const curday=[datadate,month,year].join('-')
    const hour=dateTime.getHours()
    const min=dateTime.getMinutes()
    const curtime=[hour,min].join(':')
    this.setState((prevState)=>(
      {
        ...prevState,
        day:curday,
        time:curtime
      }
    ))
  }
  makeAppointment(){
    const tempobj={sub:this.state.subject,
      date:[this.state.day,this.state.time].join(' at ')}
      const meetarr=this.state.meets.concat(tempobj)
      let {meets}=this.state
      meets.push(tempobj)
      this.setState({meets:meets})
      //this.setState({subject:"",curtime:"",curday:""})
      console.log(this.state.meets)
  }
  render() {
    return (
      <div>
        <h2>Appointments</h2>
        <h2> Make a new Appointment</h2>
        <div id="list">
        <Subjectfun data={this.state} HandleOnChange={this.handleOnChange}  />
        <form>
          <input type="datetime-local" class="datepicker-input" onChange={this.handleDateChange}></input> </form>
        </div>
        <button onClick={this.makeAppointment}>Make Appointment</button>
        <div>
          {this.state.meets.map((meetings)=>
               
               <div>
                 <lable for="Subject">Agenda:{meetings.sub}</lable><br/>
                <lable for="date">Date and Time:{meetings.date}</lable> 
                <br/><br/><br/>
                </div>
             )
        }
          </div>



      </div>
    );
  }
}

export default Cal;
