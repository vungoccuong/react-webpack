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
import SideBar from '../../components/Sidebar/Sidebar';

function Main() {
    return (
        <div className="gin-main-layout">
            <Nav />
            <div className="container">
                <SideBar />
                <Row>
                    <Col offset={1} span={23}>
                        <ServiceList />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Main;
