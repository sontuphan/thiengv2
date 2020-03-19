import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import Newsfeed from 'containers/newsfeed';
import Tool from 'containers/tool';
import News from 'containers/news';
import themes from 'static/styles/themes';

class Home extends Component {

  render() {
    return <Row gutter={themes.globalHorizontalGutter} justify="center">
      <Col xs={22} md={10} xl={8} xxl={6}>
        <Row gutter={[0, 64]}>
          <Col span={24}>
            <Tool />
          </Col>
          <Col span={24}>
            <News />
          </Col>
        </Row>
      </Col>
      <Col xs={22} md={12} xl={10} xxl={8}>
        <Newsfeed />
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
