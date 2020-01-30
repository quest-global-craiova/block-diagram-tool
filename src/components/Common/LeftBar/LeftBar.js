import React from 'react';
import classes from './LeftBar.module.css';

import { Collapse } from 'antd';

const { Panel } = Collapse;
const text = `
  some text
`;

const leftBar = (props) => (
    <div className={classes.leftBar} id="leftMenu">
      <Collapse defaultActiveKey="1">
        <Panel forceRender header="This is panel header 1" key="1">
          <ul className="sidebar">
            <li
              className="task"
              data-title="Kafka->HDFS"
              data-value="Channel task"
            >
              rectangle
            </li>
            <li
              className="task"
              data-title="A/B test task"
              data-value="A/B test task"
            >
              A/Btest task
            </li>
          </ul>  
        </Panel>
        <Panel forceRender header="This is panel header 2" key="2">
          <ul className="sidebar">
            <li className="title" data-title="Task node" data-value="Task node">
              Task node
            </li>
            <li
              className="task"
              data-title="Kafka->HDFS"
              data-value="Channel task"
            >
              rectangle
            </li>
            <li
              className="task"
              data-title="A/B test task"
              data-value="A/B test task"
            >
              A/Btest task
            </li>
          </ul>   
        </Panel>
        <Panel forceRender header="This is panel header 3" key="3">
          <ul className="sidebar">
            <li
              className="task"
              data-title="Hive->Email"
              data-value="Report task"
            >
              Report task
            </li>
            <li className="task" data-title="Hive->Hive" data-value="HSQL task">
              HSQL task
            </li>
            <li className="task" data-title="Shell task" data-value="Shell task">
              Shell task
            </li>
          </ul>   
        </Panel>
      </Collapse>       
      
      
    </div>
)

function callback(key) {
  console.log(key);
}
export default leftBar;