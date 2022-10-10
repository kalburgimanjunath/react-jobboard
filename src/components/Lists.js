import React, { useState, useEffect, Suspense } from 'react';
const List = React.lazy(() => import('./List'));
export default function Lists() {
  // const lists = [
  //   'Naukri',
  //   'Monstor',
  //   'Timesjobs',
  //   'Timesjob',
  //   'Shine',
  //   'Linkedin',
  // ];
  const [changeOption, setChangeOption] = useState();
  const lists1 = [
    {
      name: 'Naukri',
      urls: 'https://www.arbeitnow.com/api/job-board-api',
      category: [
        'all',
        'frontend', //Indian News only
        'backend',
        'fullstack',
        'database',
      ],
    },
    {
      name: 'News',
      urls: `https://inshorts.deta.dev/news?category=national`,
      category: [
        'all',
        'national', //Indian News only
        'business',
        'sports',
        'world',
        'politics',
        'technology',
        'startup',
        'entertainment',
        'miscellaneous',
        'hatke',
        'science',
        'automobile',
      ],
    },
  ];

  const onChangeOption = (e) => {
    setChangeOption(e.target.value);
  };
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
    <div className="lists">
      {lists1.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {lists1 &&
            lists1.map((item, index) => {
              return (
                <List
                  key={item.name}
                  name={item.name}
                  title={item.name}
                  urls={item.urls}
                  onChangeOption={onChangeOption}
                  category={item.category}
                />
              );
            })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
