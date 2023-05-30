import React from 'react';

const Items = ({ items }) => {
  const [displayCount, setDisplayCount] = React.useState(8);

  const loadMoreItems = () => {
    setDisplayCount(displayCount + 8);
  };

  return (
    <div>
      {items.slice(0, displayCount).map((item, index) => (
        <div key={index}>{item.id}</div>
      ))}
      <button onClick={loadMoreItems}>Load More</button>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const items = await response.json();

  return {
    props: {
      items,
    },
  };
}

export default Items;
