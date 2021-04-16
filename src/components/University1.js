import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Cambridge from './images/cambridge6.png';
import './University.css';

function Universty1() {
    return (
        <div className="margin">
        <Card>
  <Card.Header className="header"> Details about University of Cambridge</Card.Header>
  <Card.Body>
  <img src={Cambridge} alt="cambridge" className="picture"/>
  
    <Card.Title>History of college</Card.Title>
    <Card.Text>
    The University of Cambridge is a collegiate research university in Cambridge, 
    United Kingdom. Founded in 1209[9] and granted a royal charter by Henry III in 1231, 
    Cambridge is the second-oldest university in the English-speaking world and the world's fourth-oldest surviving 
    university, as well as one of the most prestigious academic institutions in the world.[10][11] 
    The university grew out of an association of scholars who left the University of Oxford after a dispute with 
    the townspeople.[12] The two English ancient universities share many common features and are jointly referred to as Oxbridge.
    </Card.Text>
    <Card.Title>Reputation and ranking</Card.Title>
    <Card.Text>In 2011, Times Higher Education (THE) recognised Cambridge as one of the world's "six super brands" on its World Reputation Rankings, along with Berkeley, Harvard, MIT, Oxford and Stanford.
    [156] As of September 2017, Cambridge is recognised by THE as the world's second best university.</Card.Text>
   
  </Card.Body>
  <Link to="/cambridgepictures">
  <Button variant="primary">more Images</Button>
 </Link>
</Card>

        </div>
    )
}

export default Universty1
