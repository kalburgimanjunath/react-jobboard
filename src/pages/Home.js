import React from 'react';
import Lists from '../components/Lists';
export default function Home() {
  return (
    <div>
      <div className="header">
        <div>Logo</div>
        <div>Job Lists</div>
        <div>Menu</div>
      </div>
      <Lists />
    </div>
  );
}
