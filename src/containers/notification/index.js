import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import themes from 'static/styles/themes';
import { NotificationCard } from 'components/cards';
import moment from 'moment';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: [
        props.auth.avatar,
        'https://source.unsplash.com/random?portrait',
        'https://source.unsplash.com/random?portrait',
        'https://source.unsplash.com/random?portrait',
        'https://source.unsplash.com/random?portrait',
        'https://source.unsplash.com/random?portrait',
        'https://source.unsplash.com/random?portrait',
        'https://source.unsplash.com/random?portrait',
        'https://source.unsplash.com/random?portrait',
      ]
    }
  }

  render() {
    return <Row gutter={[0, themes.globalVerticalGutter / 2]}>
      {
        this.state.sources.map((src, index) => <Col key={index} span={24}>
          <NotificationCard
            type={["connect", "like", "comment", "other"][Math.floor(Math.random() * 4)]}
            src={src}
            content={`${this.props.auth.displayname} like your post.`}
            time={moment().fromNow()}
            notRead={index <= 2}
          />
        </Col>)
      }
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
)(Notification));
