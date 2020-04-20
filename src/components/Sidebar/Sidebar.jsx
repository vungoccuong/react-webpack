/*
 * Copyright (c) 2020.
 * Project: gateway.
 * Author: vucuong.
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
// import { callIsAdmin } from '../../api/user';
// import { message } from 'antd';

const NavItem = styled.li`
    width: 100%;
`;
const NavLink = styled.a`
    display: flex;
    align-items: center;
    height: 3rem;
    text-decoration: none;
    filter: grayscale(100%) opacity(0.5);
    transition: 500ms;
    color: #fff;
    &:hover {
        filter: grayscale(0%) opacity(1);
        color: #fff;
    }
    & svg {
        width: 2rem;
        min-width: 2rem;
        margin: 0 0.5rem;
    }

    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
`;
const LinkText = styled.span`
    display: none;
    margin-left: 0.2rem;
    &:hover {
        font-size: 1.1em;
    }
`;

const Nav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    @media only screen and (max-width: 600px) {
        flex-direction: row;
    }

    @media only screen and (min-width: 600px) {
        li {
            margin: 15px 0;
        }
    }
`;

const SideBar = styled(function (props) {
    // const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        // callIsAdmin()
        //     .then((resp) => {
        //         setIsAdmin(resp.data);
        //     })
        //     .catch((err) => {
        //         message.error(err.toString());
        //     });
    }, []);
    return (
        <nav className={props.className}>
            <Nav>
                <NavItem>
                    <NavLink href="/">
                        <Icon text="Cài đặt" />
                    </NavLink>
                </NavItem>
                {/*{isAdmin && (*/}
                <NavItem>
                    <NavLink href="/admin">
                        <Icon el={TeamOutlined} text="Admin" />
                    </NavLink>
                </NavItem>
                {/*)}*/}
            </Nav>
        </nav>
    );
})`
    position: fixed;
    transition: width 500ms ease;
    background-color: #9a9a9a;
    z-index: 100;

    /* Small screens */
    @media only screen and (max-width: 600px) {
        & {
            bottom: 0;
            width: 100vw;
            height: 3rem;
        }

        ${NavLink} {
            justify-content: center;
        }
    }

    /* Large screens */
    @media only screen and (min-width: 600px) {
        & {
            top: 53px;
            width: 3rem;
            height: calc(100vh - 53px);
        }

        &:hover {
            width: 15rem;
        }

        &:hover ${LinkText} {
            display: inline;
        }
        &:hover ${NavLink} {
            padding-left: 1rem;
        }
    }
`;

const Icon = function ({ el, text }) {
    let El;
    if (!el) {
        El = UserOutlined;
    } else {
        El = el;
    }
    return (
        <>
            <El style={{ fontSize: 20 }} />
            <LinkText>{text}</LinkText>
        </>
    );
};
export default SideBar;
