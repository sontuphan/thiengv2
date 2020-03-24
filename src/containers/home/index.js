import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import Newsfeed from 'containers/newsfeed';
import Tool from 'containers/tool';
import Discover from 'containers/discover';
import themes from 'static/styles/themes';
import Swip from 'containers/swip';

class Home extends Component {

  render() {
    return <Row >
      <Col xs={24}>
        <Swip
          defaultIndex={0}
          gutter={[themes.globalHorizontalGutter, 0]}
        >
          <Col xs={22} md={14} xl={6} xxl={5}>
            <Tool />
          </Col>
          <Col xs={22} md={12} xl={9} xxl={9}>
            <Newsfeed />
          </Col>
          <Col xs={22} md={10} xl={7} xxl={6}>
            <Discover />
          </Col>
        </Swip>
      </Col>
    </Row>
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
