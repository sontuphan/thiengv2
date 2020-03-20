import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Drawer, Typography, Row, Col } from 'antd';
import { loremIpsum } from "lorem-ipsum";
import { Swipeable } from 'react-swipeable';


const DEFAULT_HEIGHT = '90%';

class BottomDrawer extends Component {
  constructor() {
    super();

    this.state = {
      height: DEFAULT_HEIGHT
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible)
      if (this.props.visible)
        return this.setState({ height: DEFAULT_HEIGHT });
  }

  onSwiped = (data) => {
    console.log(data);
    if (data.velocity > 1) return this.props.onClose();
    if (data.absY > 400) return this.props.onClose();
    return this.setState({ height: DEFAULT_HEIGHT });
  }

  onSwiping = (data) => {
    let direction = data.deltaY > 0;
    let deltaY = Math.floor(data.absY);
    let height = `calc(${DEFAULT_HEIGHT} ${direction ? '+' : '-'} ${deltaY}px)`;
    this.setState({ height });
  }

  header = () => {
    return <Swipeable
      onSwiped={this.onSwiped}
      onSwiping={this.onSwiping}
      delta={5}
      style={{ margin: "-16px -24px", padding: "16px 24px" }}
    >
      <Row justify="center">
        <Col xs={4} md={2} xl={1}
          style={{ backgroundColor: "#000000a6", height: "4px", borderRadius: "2px" }}
        />
      </Row>
      <Row>
        <Col span={24}>
          <Typography.Text>Basic Drawer</Typography.Text>
        </Col>
      </Row>
    </Swipeable >
  }

  render() {
    return <Drawer
      title={this.header()}
      placement="bottom"
      visible={this.props.visible}
      onClose={this.props.onClose}
      closable={false}
      height={this.state.height}
    >
      <Typography.Paragraph>{loremIpsum({ count: 4, units: 'paragraph' })}</Typography.Paragraph>
      <Typography.Paragraph>{loremIpsum({ count: 4, units: 'paragraph' })}</Typography.Paragraph>
      <Typography.Paragraph>{loremIpsum({ count: 4, units: 'paragraph' })}</Typography.Paragraph>
      <Typography.Paragraph>{loremIpsum({ count: 4, units: 'paragraph' })}</Typography.Paragraph>
    </Drawer>
  }
}

BottomDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomDrawer));