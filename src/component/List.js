import React, { Component } from "react";
import ListDetails from "./ListDetails";

const EmployeeData = [
  { name: "Rahil", location: "Mumbai", salary: 25000 },
  { name: "Rahul", location: "Nasik", salary: 30000 },
  { name: "Arshad", location: "Indore", salary: 25000 },
  { name: "Samir", location: "Dhulia", salary: 27000 },
  { name: "Wasim", location: "Pune", salary: 24000 },
  { name: "Rahim", location: "Nasik", salary: 30000 },
  { name: "Gautam", location: "Puna", salary: 25000 },
  { name: "Sahil", location: "Mumbai", salary: 25000 },
  { name: "Raj", location: "Dhulia", salary: 30000 },
  { name: "Taufik", location: "Jalgaon", salary: 25000 },
  { name: "Daniya", location: "Dhulia", salary: 20000 },
  { name: "Taifoor", location: "Amalner", salary: 25000 },
  { name: "Azim", location: "Shahada", salary: 28000 },
  { name: "Sejan", location: "Surat", salary: 35000 },
  { name: "Sifa", location: "Mumabi", salary: 40000 },
  { name: "Sobiya", location: "Nasik", salary: 45000 },
  { name: "Umair", location: "Banglore", salary: 70000 },
  { name: "Inshal", location: "Surat", salary: 80000 },
  { name: "Altamash", location: "Mumbai", salary: 90000 },
  { name: "Konain", location: "Dhulia", salary: 250000 },
];

export default class List extends Component {
  render() {
    return(
        <div>
            <ListDetails empDatails={EmployeeData}/>
        </div>
        
    );
  }
}
