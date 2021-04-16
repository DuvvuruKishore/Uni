import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './style.css';

function Uni() {
    return (
        <div className="sidereducer">
        <Card>
        <Card.Header className="header">TOP UNIVERSITIES</Card.Header>
        <Card.Body className="side">
          <Card.Title>1) University Of Cambridge</Card.Title>
          <Link to="/university">
        <Button variant="dark">More Details</Button>
    </Link>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Body  className="side">
        <Card.Title>2) University of Oxford</Card.Title>
        <Link to="/university2">
        <Button variant="dark">More Details</Button>
    </Link>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Body  className="side">
        <Card.Title>3) Harvard University</Card.Title>
        <Link to="/university3">
        <Button variant="dark">More Details</Button>
    </Link>
        </Card.Body>
        
      </Card>

      <Card>
        <Card.Body  className="side">
        <Card.Title>4) Stanford University</Card.Title>
        <Link to="/university4">
        <Button variant="dark">More Details</Button>
    </Link>
        </Card.Body>
        
      </Card>

      <Card>
        <Card.Body  className="side">
        <Card.Title>5) University of California</Card.Title>
        <Link to="/university5">
        <Button variant="dark">More Details</Button>
    </Link>
        </Card.Body>
        
      </Card>

      <Card>
        <Card.Body  className="side">
        <Card.Title>6)University College London</Card.Title>
        <Link to="/university6">
        <Button variant="dark">More Details</Button>
    </Link>
        </Card.Body>
        
      </Card>

        </div>
    )
}

export default Uni;
