import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Swip, { SwipChild } from 'containers/swip';
import { Row, Col } from 'antd';
import Explorer from 'containers/explorer';
import Newsfeed from 'containers/newsfeed';
import RightSider from 'containers/rightsider';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Typography'
    }
  }

  render() {
    return <Row justify="center">
      <Col xs={10} lg={8} xl={6}>
        asdasd
      </Col>
    </Row>
  }
}

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
