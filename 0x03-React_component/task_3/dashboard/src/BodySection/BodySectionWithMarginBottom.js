import React, { Component } from "react";
import BodySection from "./BodySection";
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends Component {
    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...this.props}/>
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    Children: PropTypes.node
};

export default BodySectionWithMarginBottom;