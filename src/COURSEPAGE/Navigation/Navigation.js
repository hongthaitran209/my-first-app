import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import CoursesCollapse from './CoursesCollapse';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navigation">
      <Button color="primary" onClick={toggle} className="navigation-btn">Navigation</Button>
      <Collapse isOpen={isOpen} className="course-page-collapse">
        <Card>
          <CardBody>
            <Link to="/">Home</Link>
            <CoursesCollapse />
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Navigation;