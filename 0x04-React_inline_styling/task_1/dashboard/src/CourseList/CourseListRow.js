import React from "react";
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell, headerStyle, cellStyle }) {
    const styles = {
        backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    }
    return (
        <tr style={styles}>
            {isHeader ? (
                !textSecondCell ? (
                    <th colSpan="2" className={headerStyle}>{textFirstCell}</th>
                ) : (
                    <>
                        <th className={headerStyle}>{textFirstCell}</th>
                        <th className={headerStyle}>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td className={cellStyle}>{textFirstCell}</td>
                    <td className={cellStyle}>{textSecondCell}</td>
                </>
            )}
        </tr>
    )
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    headerStyle: PropTypes.string,   // Accepting Aphrodite styles
    cellStyle: PropTypes.string,     // Accepting Aphrodite styles
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null 
}