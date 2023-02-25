import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm'
import Layout from '../components/Layout'

function updateTimes(state, action){
  if (action.type === 'initializeTimes') {
    console.log(action.payload);
    return action.payload;
  }else{
    let times =  window.fetchAPI(new Date(action.payload));
    console.log(times);
    return times;
  }
}

function Reservation() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [])
  const [state, setState] =  useState({date: "",resTime:"",guests:1,occasion:""});
  const navigate = useNavigate();

  function initializeTimes() {
      let date = new Date();
      let times =  window.fetchAPI(date);
      dispatch({ type: 'initializeTimes',payload:  times});
  }

  useEffect(() => {
    initializeTimes()
    return () => {};
  }, []);

  function submitForm(){
    let data = window.submitAPI(state);
    if(data) navigate("/booking-confirmation");
  }
  // useEffect(() => {
  //   fetch('',{
  //     method: 'POST',
  //     body: state
  //   }).then(response => response.json()).then(data => setState())
  //   return () => {};
  // });

  return (
    <Layout>
        <main className='container'>
            <BookingForm 
              availableTimes={availableTimes}
              data={state} 
              onValueChanged={(value)=>{setState(value);}} 
              onUpdateDate={(value)=>{dispatch({type: "updateDate",payload: value});setState({...state,date:value})}}
              onFormSubmit={submitForm}
            ></BookingForm>
        </main>
    </Layout>
  )
}

export {Reservation, updateTimes}