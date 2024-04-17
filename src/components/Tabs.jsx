import React from 'react';
import { Tabs } from 'antd';
import Form_Data from './Form_Data';
import JobCard from './JobCard ';
import './JobCard.css'
import { useEffect } from 'react';
import FetchJobs from './FetchJobs';

const onChange = (key) => {
  console.log(key);
};



const items = [
  {
    key: '1',
    label: 'Job Post',
    children:<FetchJobs/>
  },

  // {
  //   key: '2',
  //   label: 'Tab 2',
  //   children: <Form_Data/>,
  // },

  {
    key: '2',
    label: 'Info',
    children: <>
      <h1>What you found here ?</h1>
      <p>Here you found daily updates on jobs </p>
      <button>
        <a href="https://www.linkedin.com/in/shailendra-sonar-3b39b3214/" target='_blank'>My LinkedIn</a>
      </button>
      </>,
  },
];

const TabsAnt = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default TabsAnt;