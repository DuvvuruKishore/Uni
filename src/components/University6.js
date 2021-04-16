import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import London from './images/london.png';
import './University.css';

function Universty1() {
    return (
        <div className="margin">
        <Card>
  <Card.Header className="header"> Details about London university</Card.Header>
  <Card.Body>
  <img src={London} alt="cambridge" className="picture"/>
  
    <Card.Title>History of college</Card.Title>
    <Card.Text>
    University College London, which operates as UCL is a public research university located in London, United Kingdom, and a member institution of the federal University of London. UCL is the second-largest university in the United Kingdom by total enrolment, after only the Open University,[5] and is the largest by postgraduate enrolment.
   </Card.Text>
    <Card.Title>Reputation and ranking</Card.Title>
    <Card.Text>
    In the 2021 QS World University Rankings, UCL is ranked 10th in the world, 2nd in London, 4th in the United Kingdom and 5th in Europe.[258] In the 2019/20 Rankings by Subject, UCL has 38 subjects in the world top 100. It is ranked in the world top 10 for nine subjects: anthropology (10th), archaeology (3rd), architecture (1st), anatomy and physiology (5th), education and training (1st), geography (7th), medicine (9th), pharmacy and pharmacology (7th), and psychology (10th). In broad subject areas, it is ranked 10th for life sciences and medicine,
    </Card.Text>
   
  </Card.Body>
  <Link to="/londonpictures">
  <Button variant="primary">more Images</Button>
 </Link>
</Card>

        </div>
    )
}

export default Universty1
