import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Harvard from './images/hardvard.png';
import './University.css';

function Universty1() {
    return (
        <div className="margin">
        <Card>
  <Card.Header className="header"> Details about Harvard university</Card.Header>
  <Card.Body>
  <img src={Harvard} alt="cambridge" className="picture"/>
  
    <Card.Title>History of college</Card.Title>
    <Card.Text>
    Harvard University is a private Ivy League research university in Cambridge, Massachusetts. 
    Established in 1636 and named for its first benefactor, clergyman John Harvard, Harvard is the 
    oldest institution of higher learning in the United States[6] and among the most prestigious in the world.
   </Card.Text>
    <Card.Title>Reputation and ranking</Card.Title>
    <Card.Text>
    Among overall rankings, the Academic Ranking of World Universities (ARWU) has ranked Harvard as 
    the world's top university every year since it was released.[96] When QS and Times Higher Education 
    collaborated to publish the Times Higher Education–QS World University Rankings from 2004 to 2009, 
    Harvard held the top spot every year and continued to hold first place on THE World Reputation Rankings 
    ever since it was released in 2011.[97] In 2019,
     it was ranked first worldwide by SCImago Institutions Rankings
    </Card.Text>
   
  </Card.Body>
  <Link to="/harvardpictures">
  <Button variant="primary">more Images</Button>
 </Link>
</Card>

        </div>
    )
}

export default Universty1
