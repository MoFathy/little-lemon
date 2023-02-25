import React from 'react'
import Button from './button'

function BookingForm(props) {
  console.log(props);

  return (
    <>
    <h1>Book Now</h1>
    <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={props.data?.date} onChange={(e)=> {props.onUpdateDate(e.target.value)}}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " value={props.data?.resTime} onChange={(e)=> {props.onValueChanged({resTime: e.target.value,...props.data});}}>
            {props.availableTimes?.map((time) =><option key={time} value={time}>{time}</option>)}
        </select>
        <label htmlFor="guests" >Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e)=> {props.onValueChanged({guests: e.target.value,...props.data})}}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={props.data?.occasion} onChange={(e)=> {props.onValueChanged({occasion: e.target.value,...props.data})}}>
            <option value={"birthday"}>Birthday</option>
            <option value={"anniversary"}>Anniversary</option>
        </select>
       <Button onClick={props.onFormSubmit}>Make Your reservation</Button>
    </form>
    </>
  )
}

export default BookingForm