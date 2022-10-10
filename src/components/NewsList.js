import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Alert,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
export default function NewsList({
  title,
  urls,
  onChangeOption,
  category,
  name,
}) {
  console.log(category);
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');
  const onEntered = () => setStatus('Opened');
  const onExiting = () => setStatus('Closing...');
  const onExited = () => setStatus('Closed');
  const toggle = () => setCollapse(!collapse);

  const [listitems, setItems] = useState();
  const newURL = urls;
  useEffect(() => {
    fetch(urls)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      });
  });

  const [selOptionValue, setOptionValue] = useState();
  return (
    <div className="list">
      {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        {title}
      </Button> */}
      <h1>{title}</h1>
      <div className="selectbox">
        <select name="category" onChange={onChangeOption}>
          {category &&
            category.map((cat, index) => {
              return (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              );
            })}
        </select>
      </div>

      {listitems && listitems.length > 0 ? (
        <div className="listgroup">
          <ListGroup>
            {listitems.map((item) => {
              return (
                <>
                  <ListGroupItem>
                    {/* <div onClick={toggle}>{item.title}</div> */}
                    <div>
                      <a href={item.url} className="primary" target="_new">
                        {item.title}
                      </a>
                      <div>
                        <div>
                          {item.company_name} posted on {item.created_at}
                        </div>
                        <div>
                          {item.job_types &&
                            item.job_types.map((itemjobs) => {
                              return <span>{itemjobs}</span>;
                            })}
                        </div>
                        <div>{item.location}</div>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />

                        <div>
                          {item.tags &&
                            item.tags.map((subitem) => {
                              return <span>{subitem}</span>;
                            })}
                        </div>
                        <button type="button">Apply</button>
                      </div>
                    </div>
                    {/* <a href={item.url} className="primary" target="_new">
                      Apply
                    </a> */}
                    {/* <Collapse
                      isOpen={collapse}
                      onEntering={onEntering}
                      onEntered={onEntered}
                      onExiting={onExiting}
                      onExited={onExited}
                    >
                      <Card>
                        <CardBody>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                          <a href={item.url} className="primary" target="_new">
                            Apply
                          </a>
                        </CardBody>
                      </Card>
                    </Collapse> */}
                  </ListGroupItem>
                </>
              );
            })}
          </ListGroup>
        </div>
      ) : (
        <div className="listgroup">
          <div>Loading</div>
        </div>
      )}
    </div>
  );
}
