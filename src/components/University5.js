import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import California from './images/california.png';
import './University.css';

function Universty1() {
    return (
        <div className="margin">
        <Card>
  <Card.Header className="header"> Details about California university</Card.Header>
  <Card.Body>
  <img src={California} alt="cambridge" className="picture"/>
  
    <Card.Title>History of college</Card.Title>
    <Card.Text>
    The University of California (UC) is a public land-grant research university system in the U.S. state of California. The system is composed of the campuses at Berkeley, Davis, Irvine, Los Angeles, Merced, Riverside, San Diego, San Francisco, Santa Barbara, and Santa Cruz, along with numerous research centers and academic abroad centers.[5] The system is the state's land-grant university.[6]
    </Card.Text>
    <Card.Title>Reputation and ranking</Card.Title>
    <Card.Text>
    Eligibility in the Local Context, commonly referred to as ELC, is met by applicants ranked in the top 9% of their high school class in terms of performance on an 11-unit pattern of UC-approved high school courses. Beginning with fall 2007 applicants, ELC also requires a UC-calculated GPA of at least 3.0. Fully eligible ELC students are guaranteed a spot at one of UC's undergraduate campuses, though not necessarily at their first-choice campus or even to a campus to which they applied.[115]
    </Card.Text>
   
  </Card.Body>
  <Link to="/californiapictures">
  <Button variant="primary">more Images</Button>
 </Link>
</Card>

        </div>
    )
}

export default Universty1;
