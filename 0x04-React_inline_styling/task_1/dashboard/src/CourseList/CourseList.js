import React from "react";
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import { StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    courseList: {
        width: '80%',
        borderCollapse: 'collapse',
        margin: '20px auto',
        fontSize: '1rem',
        textAlign: 'left',
    },

    cell: {
        border: '1px solid #ddd',
        padding: '8px',
    },

    header: {
        fontWeight: 'bold',
    },

    centerText: {
        textAlign: 'center',
    }
})

const CourseList = ({ listCourses }) => {
    return (
        <table className={css(styles.courseList)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} 
                    headerStyle={css(styles.cell, styles.header, styles.centerText)}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}
                    headerStyle={css(styles.cell, styles.header)} />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow textFirstCell="No course available yet" isHeader={false}
                        cellStyle={css(styles.cell)} />
                ) : (
                    listCourses.map(course => (
                        <CourseListRow
                            key={course.id}
                            textFirstCell={course.name}
                            textSecondCell={course.credit}
                            isHeader={false}

                            cellStyle={css(styles.cell)}
                        />
                    ))
                )}
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
};

export default CourseList;