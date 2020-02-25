import React, { useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

import { connect } from "react-redux";

import * as Types from '../../Constants';

const CoursesCollapse = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const { courseCate, coursesByCate } = props;

  const onScroll = () => window.scroll({
    top: 310,
    behavior: "smooth"
  })

  const elm = courseCate.map((course, index) => {
    return (
      <Button onClick={() => onScroll()} className="course-cate-btn">
        <Link index={index}
        onClick={ () => coursesByCate(course.maDanhMuc)}>
          {course.tenDanhMuc}
          </Link>
      </Button>
    )
  })

  return (
    <div>
      <Button onClick={toggle} className="courses-collapse-btn">
        <NavLink activeClassName="nav-active" to="/course">Courses</NavLink>
      </Button>
      <Collapse isOpen={isOpen} className="courses-collapse">
        <Card>
          <CardBody>
            {elm}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    courseCate: state.courseCate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    coursesByCate: (courseCate) => {
      dispatch({
        type: Types.GET_COURSES_BY_CATE,
        payload: courseCate,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesCollapse);