import React from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stanford from './images/standford.png';
import './University.css';

function Universty1() {
    return (
        <div className="margin">
        <Card>
  <Card.Header className="header"> Details about Stanford university</Card.Header>
  <Card.Body>
  <img src={Stanford} alt="cambridge" className="picture"/>
  
    <Card.Title>History of college</Card.Title>
    <Card.Text>
    Stanford University, officially Leland Stanford Junior University,[12][13] is a private research university in Stanford, California. Stanford was founded in 1885 by Leland and Jane Stanford in memory of their only child, Leland Stanford Jr., who had died of typhoid fever at age 15 the previous year.[2] Stanford is generally ranked among the best universities in the world by academic publications.[14][15][16][17][18] It is also one of the top fundraising institutions in the country
    , becoming the first school to raise more than a billion dollars in a year
    </Card.Text>
    <Card.Title>Reputation and ranking</Card.Title>
    <Card.Text>
    Stanford ranks high and often first in many domestic college ranking measures, leading Slate to dub Stanford in 2014 as "the Harvard of the 21st century,"[139] and The New York Times in the same year to conclude "Stanford University has become America's 'it' school, by measures that Harvard once dominated."[140] From polls done by The Princeton Review in 2013, 2014, 2015, 2016, 2017, 2018 and 2019, the most commonly named "dream college" for students was Stanford; separately, parents, too, most frequently named Stanford their "dream college.
    </Card.Text>
   
  </Card.Body>
  <Link to="/stanfordpictures">
  <Button variant="primary">more Images</Button>
 </Link>
</Card>

        </div>
    )
}

export default Universty1
