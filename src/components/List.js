import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Alert,
  CardHeader,
  CardTitle,
  CardImg,
  CardText,
  ListGroup,
  ListGroupItem,
  CardSubtitle,
} from 'reactstrap';
export default function List({ title, urls, onChangeOption, category, name }) {
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
        // console.log(response.data);
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
        <div className="newsgroup">
          {name == 'News' ? (
            <>
              {listitems.map((item, index) => {
                return (
                  <div key={item.title + index}>
                    {/* <div onClick={toggle}>{item.title}</div> */}

                    <Card>
                      <CardBody>
                        <CardTitle tag="h5">{item.title}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Author:{item.author} posted on:{item.date}:{item.time}
                        </CardSubtitle>
                        <CardImg
                          top
                          width="100%"
                          src={item.imageUrl ? item.imageUrl : ''}
                          alt={item.title}
                        />

                        <CardText>{item.content}</CardText>
                        <Button
                          target="_new"
                          href={item.readMoreUrl}
                          title="Readmore"
                        >
                          Readmore
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </>
          ) : (
            <div>
              {listitems.map((item) => {
                return (
                  <div key={item.company_name} className="listgroup-item">
                    <Card>
                      <CardBody>
                        <CardBody>
                          <CardTitle tag="h5"> {item.title}</CardTitle>
                          <CardSubtitle>
                            {item.company_name} posted on {item.created_at}
                          </CardSubtitle>
                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {item.job_types &&
                              item.job_types.map((itemjobs) => {
                                return <span>{itemjobs}</span>;
                              })}
                          </CardSubtitle>
                          <CardSubtitle>{item.location}</CardSubtitle>
                          {/* <div
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            /> */}

                          <CardSubtitle>
                            {item.tags &&
                              item.tags.map((subitem) => {
                                return <span>{subitem}</span>;
                              })}
                          </CardSubtitle>
                          <Button type="button" title="Add to Apply">
                            Add to Apply
                          </Button>
                        </CardBody>
                      </CardBody>
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
                         
                        </CardBody>
                      </Card>
                    </Collapse> */}
                    </Card>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="newsgroup">
          <div>Loading</div>
        </div>
      )}
    </div>
  );
}
