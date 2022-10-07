import React, { Component } from "react";
import { connect } from "react-redux";
import { createCourse } from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
  }
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({
      course,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(createCourse(this.state.course));
    alert(this.state.course.title);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Courses</h1>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />

        {this.props.courses.map((course) => {
          return (
            <div key={course.title}>
              <p>course.title</p>
            </div>
          );
        })}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    course: state.course,
  };
};

export default connect(mapStateToProps)(CoursesPage);
