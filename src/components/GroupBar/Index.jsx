/*
 * Copyright (c) 2019.
 * Project: email-verifier-website.
 * Author: hirosume.
 */

import React from 'react';
import './index.scss';
import GroupList from './GroupList/Index.jsx';
import GroupBarHeader from './GroupBarHeader/Index.jsx';

function GroupBar(props) {
  return (
    <div className="gin-group-bar">
      <GroupBarHeader/>
      <GroupList/>
    </div>
  );
}

export default GroupBar;
