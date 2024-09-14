import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

    return (
        <tr className={css(isHeader ? styles.headerRow : styles.defaultRow)}>
            {isHeader ? (
                !textSecondCell ? (
                    <th colSpan="2" className={(css(styles.headerColspan))}>{textFirstCell}</th>
                ) : (
                    <>
                        <th className={css(styles.headerCell)}>{textFirstCell}</th>
                        <th className={css(styles.headerCell)}>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td className={css(styles.defaultCell)}>{textFirstCell}</td>
                    <td className={css(styles.defaultCell)}>{textSecondCell}</td>
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
    ])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null 
}

// Define Aphrodite styles
const styles = StyleSheet.create({
    headerRow: {
        backgroundColor: '#deb5b545', 
    },
    defaultRow: {
        backgroundColor: '#f5f5f5ab',
    },
    defaultCell: {
        border: '1px solid #ddd',
        padding: '8px',
    },

    headerCell: {
        fontWeight: 'bold',
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
    },

    headerColspan: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})