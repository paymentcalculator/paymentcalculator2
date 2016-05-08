import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/lib/text-field';

export default class Input extends Component {
    render() {
        return (
            <TextField {...this.props} floatingLabelText="Loan Amount"/>
        )
    }
}

