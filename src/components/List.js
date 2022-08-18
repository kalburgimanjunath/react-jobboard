import React, { useEffect, useState } from 'react';
export default function List({ title, items }) {
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
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {items &&
          items.map((item) => {
            return <div>{item.title}</div>;
          })}
      </div>
    </div>
  );
}
