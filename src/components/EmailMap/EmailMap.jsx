/*
 * Copyright (c) 2020.
 * Project: ui.
 * Author: hirosume.
 */

import React from 'react';
import { ServiceBody, ServiceContainer, ServiceHeader, ServiceTitle } from '../ServiceList/Sketch';
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'PSID',
        dataIndex: 'psid',
        key: 'psid',
    },
    {
        title: 'FullName',
        dataIndex: 'full_name',
        key: 'full_name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Page/OA',
        dataIndex: 'page',
        key: 'page',
    },
    {
        title: 'Source',
        dataIndex: 'source',
        key: 'source',
    },
    {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <span>
                <a style={{ marginRight: 6 }}>Pause/Resume</a>
                <a>Delete</a>
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        full_name: 'Cường Vũ',
        psid: 32,
        page: 'New York No. 1 Lake Park',
        source: 'facebook',
        active: 'true',
    },
];

function EmailMap() {
    return (
        <ServiceContainer>
            <ServiceHeader>
                <ServiceTitle as="h4">Email Mapping</ServiceTitle>
                <ServiceBody>
                    <Table columns={columns} dataSource={data} />
                </ServiceBody>
            </ServiceHeader>
        </ServiceContainer>
    );
}

export default EmailMap;
