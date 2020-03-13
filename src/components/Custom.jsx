/*
 * Copyright (c) 2020.
 * Project: ui.
 * Author: hirosume.
 */
import React from 'react';
import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
`;
export const AlignItemCenter = styled(Flex)`
    align-items: center;
`;
export const FluidContainer = styled(Flex)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;
export const Circle = styled.div`
  border-radius: 50%;
`;
