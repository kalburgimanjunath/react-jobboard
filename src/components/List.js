import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Alert,
  CardHeader,
} from 'reactstrap';
export default function List({ title, items }) {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');
  const onEntered = () => setStatus('Opened');
  const onExiting = () => setStatus('Closing...');
  const onExited = () => setStatus('Closed');
  const toggle = () => setCollapse(!collapse);
  console.log(items);
  // const [listitems, setItems] = useState();
  // useEffect(() => {
  //   fetch('https://www.arbeitnow.com/api/job-board-api')
  //     .then((res) => res.json())
  //     .then((response) => {
  //       // console.log(response.data);
  //       setItems(response.data);
  //     });
  // });

  return (
    <div className="list">
      {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        {title}
      </Button> */}
      <h1>{title}</h1>

      {items &&
        items &&
        items.map((item) => {
          return (
            <>
              <div onClick={toggle}>{item.title}</div>
              <Collapse
                isOpen={collapse}
                onEntering={onEntering}
                onEntered={onEntered}
                onExiting={onExiting}
                onExited={onExited}
              >
                <Card>
                  <CardBody>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <a href={item.url}>Apply</a>
                  </CardBody>
                </Card>
              </Collapse>
            </>
          );
        })}
    </div>
  );
}
