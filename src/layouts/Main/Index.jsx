/*
 * Copyright (c) 2019.
 * Project: email-verifier-website.
 * Author: hirosume.
 */

import React from 'react';
import Nav from '../../components/Nav/Index.jsx';
import { Col, Row } from 'antd';
import './index.scss';
import ServiceList from '../../components/ServiceList/ServiceList';

function Main() {
    return (
        <div className="gin-main-layout">
            <Nav />
            <div className="container">
                <Row>
                    <Col span={6}>hihi</Col>
                    <Col span={18}>
                        <ServiceList />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Main;
