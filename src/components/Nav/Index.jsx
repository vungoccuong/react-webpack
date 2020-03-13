/*
 * Copyright (c) 2019.
 * Project: email-verifier-website.
 * Author: hirosume.
 */

import React from 'react';
import './index.scss';
import { FluidContainer } from '../Custom';
import Branch from './Branch';
import { AntDesignOutlined } from '@ant-design/icons';
import UserAvatar from './UserAvatar';

function Nav() {
    return (
        <div className="gin-nav">
            <FluidContainer>
                <Branch as="a" href="#">
                    <AntDesignOutlined />
                    iNET Monitor Dashboard
                </Branch>
                <UserAvatar />
            </FluidContainer>
        </div>
    );
}

export default Nav;
