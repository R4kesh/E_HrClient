import React, { useState } from 'react';
import CompOne from './CompOne';
import CompTwo from './CompTwo';
import CompThree from './CompThree';

const components = [
  { id: 1, Component: CompOne },
  { id: 2, Component: CompTwo },
  { id: 3, Component: CompThree }
];

const Main = () => {
  const [sortedComponents, setSortedComponents] = useState(components);
  const [ascending, setAscending] = useState(true);

  const sortComponents = () => {
    const sorted = [...sortedComponents].sort((a, b) => ascending ? a.id - b.id : b.id - a.id);
    setSortedComponents(sorted);
    setAscending(!ascending);
  };

  return (
    <div>
      <h1>main</h1>
      <button onClick={sortComponents} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4">
        Sort {ascending ? 'Descending' : 'Ascending'}
      </button>
      <div className='grid grid-cols-3 gap-4'>
        {sortedComponents.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </div>
    </div>
  );
};

export default Main;