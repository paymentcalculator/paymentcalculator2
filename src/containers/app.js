import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Calculator from './calculator/calculator'

import {
  createCallout
} from '../actions'

import '../styles/index.css'
import '../styles/foundation.scss'

// load jquery and foundation in the window scope
import 'script!jquery'
import 'script!what-input'
import 'script!foundation-sites'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // children are components which are defined in the routes as children of App
    const { children } = this.props;
    return (
      <div>
        <Calculator className="calculator" />
      </div>
    )
  }

  componentDidMount() {
    $(document).foundation()
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {
  createCallout
})(App)
