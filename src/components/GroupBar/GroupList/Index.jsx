/*
 * Copyright (c) 2019.
 * Project: email-verifier-website.
 * Author: hirosume.
 */

import React, { useMemo } from 'react';
import './index.scss';
import { Divider } from 'antd';

function Group({ name, total }) {
  return (
    <div className="gin-group">
      <div className="name">{name}</div>
      <div className="total">{total}</div>
    </div>
  );
}

function GroupList(props) {
  const data = [{ name: 'hihi', total: 2 }, { name: 'haha', total: 6 }];
  const allTotal = useMemo(() => data.reduce((acc, current) => acc + current.total, 0), [data]);
  return (
    <div className="gin-group-list">
      {data.map(group => (
        <Group {...group} key={group.name}/>
      ))}
      <Divider/>
      <Group name="Tổng số" total={allTotal}/>
    </div>
  );
}

export default GroupList;
