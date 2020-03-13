/*
 * Copyright (c) 2020.
 * Project: ui.
 * Author: hirosume.
 */

import React from 'react';
import styled from 'styled-components';
import EmailMap from '../EmailMap/EmailMap';

function ServiceList(props) {
    return (
        <div className={props.className}>
            <EmailMap />
        </div>
    );
}

export default styled(ServiceList)``;
