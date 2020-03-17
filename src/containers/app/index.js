import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import 'static/styles/index.css'
import { Drain } from 'components/drains';
import Header from 'containers/header';
import Home from 'containers/home';
import Experimental from 'containers/experimental';

import { setScreen } from 'modules/ui.reducer';

class App extends Component {
  constructor(props) {
    super(props);

    props.setScreen(window.innerWidth);
  }


  componentDidMount() {
    window.onresize = () => {
      this.props.setScreen(window.innerWidth);
    }
  }

  render() {
    return <Row justify="center" style={{ overflowX: "hidden" }}>
      <Col xs={24}>
        <Drain height={50} />
      </Col>
      <Col xs={24}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/experimental" component={Experimental} />
        </Switch>
      </Col>
      <Col xs={24} >
        <Header />
      </Col>
    </Row>
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setScreen,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
