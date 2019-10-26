/*
 * Copyright (c) 2019.
 * Project: email-verifier-website.
 * Author: hirosume.
 */

import React from 'react';
import Nav from '../../components/Nav/Index.jsx';
import { Col, Row } from 'antd';
import './index.scss';
import GroupBar from '../../components/GroupBar/Index.jsx';
import EmailList from '../../components/EmailList/Index.jsx';

function Main() {
  return (
    <div className="gin-main-layout">
      <Nav/>
      <div className="container">
        <Row>
          <Col span={6}>
            <GroupBar/>
          </Col>
          <Col span={18}>
            <EmailList/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Main;
