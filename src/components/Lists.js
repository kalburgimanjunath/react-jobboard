import React, { useState, useEffect } from 'react';
import List from './List';
export default function Lists() {
  const lists = [
    'Naukri',
    'Monstor',
    'Timesjobs',
    'Timesjob',
    'Shine',
    'Linkedin',
  ];
  const [listitems, setItems] = useState();
  useEffect(() => {
    fetch('https://www.arbeitnow.com/api/job-board-api')
      .then((res) => res.json())
      .then((response) => {
        // console.log(response.data);
        setItems(response.data);
      });
  });
  return (
    <div className="lists">
      {lists &&
        lists.map((item, index) => {
          return <List key={item + index} title={item} items={listitems} />;
        })}
    </div>
  );
}
