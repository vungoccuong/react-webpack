/*
 * Copyright (c) 2019.
 * Project: email-verifier-website.
 * Author: hirosume.
 */

import React from 'react';
import Nav from '../../components/Nav/Index.jsx';
import { Col, Row } from 'antd';
import './index.scss';

function Main() {
    return (
        <div className="gin-main-layout">
            <Nav />
            <div className="container">
                <Row>
                    <Col span={6}></Col>
                    <Col span={18}></Col>
                </Row>
            </div>
        </div>
    );
}

export default Main;
