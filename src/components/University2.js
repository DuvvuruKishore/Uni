import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Cambridge from './images/oxford2.png';
import './University.css';

function Universty1() {
    return (
        <div className="margin">
        <Card>
  <Card.Header className="header"> Details about oxford university</Card.Header>
  <Card.Body>
  <img src={Cambridge} alt="cambridge" className="picture"/>
  
    <Card.Title>History of college</Card.Title>
    <Card.Text>
    As the oldest university in the English-speaking world, Oxford is a unique and historic institution.
     There is no clear date of foundation, but teaching existed at Oxford in some form in 
     1096 and developed rapidly from 1167, when Henry II banned English students from attending 
     the University of Paris.
   </Card.Text>
    <Card.Title>Reputation and ranking</Card.Title>
    <Card.Text>
    Oxford is regularly ranked within the top 5 universities in the world and is currently ranked first in the
     world in the Times Higher Education World University Rankings,[154][155] as well as the Forbes's
      World University Rankings.[156] It held the number one position in the Times Good University Guide for
       eleven consecutive years,[157] and the medical school has also maintained first place in the "Clinical, 
       Pre-Clinical & Health"  table of the Times Higher Education (THE) World University Rankings for the past seven consecutive years.
    </Card.Text>
   
  </Card.Body>
  <Link to="/oxfordpictures">
  <Button variant="primary">more Images</Button>
 </Link>
</Card>

        </div>
    )
}

export default Universty1
