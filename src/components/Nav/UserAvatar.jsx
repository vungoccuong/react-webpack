/*
 * Copyright (c) 2020.
 * Project: ui.
 * Author: hirosume.
 */

import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Circle } from '../Custom';
import { Dropdown, Menu } from 'antd';

function UserAvatar(props) {
    const menu = useMemo(function() {
        return (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://inet.vn">
                        Vu Ngoc Cuong
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        Đăng xuất
                    </a>
                </Menu.Item>
            </Menu>
        );
    }, []);
    return (
        <div className={props.className}>
            <Dropdown overlay={menu} placement="bottomLeft">
                <Circle className="avatar" />
            </Dropdown>
        </div>
    );
}

export default styled(UserAvatar)`
    > .avatar {
        width: 32px;
        height: 32px;
        background-image: url('https://sso.inet.vn/public/img/avatar/default.jpeg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border: 1px solid #ddd;
    }
`;
