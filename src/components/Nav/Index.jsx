/*
 * Copyright (c) 2019.
 * Project: email-verifier-website.
 * Author: hirosume.
 */

import React from 'react';
import './index.scss';
import { Button, Col, Row } from 'antd';

function Nav(props) {
  return (
      <div className="gin-nav">
          <Row>
              <Col span={5}>
                  <Button type="dashed">Email verifier</Button>
              </Col>
              <Col span={19}></Col>
          </Row>
      </div>
  );
}

export default Nav;
