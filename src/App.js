import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList'
import Button from './components/UI/Button'

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [isSorted, setIsSorted] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const sortListToDesc = () => {
    listItems.sort((a,b) => b-a);
    setIsSorted(false);
  }

  const sortListToAsec = () => {
    setIsSorted(true);
  }

  let content = `Change to Descending Order`;

  if(!isSorted) content = `Change to Ascending Order`;

  return (
    <div className="app">
      <DemoList isSorted={isSorted} title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={isSorted ? sortListToDesc : sortListToAsec}>{content}</Button>
    </div>
  );
}

export default App;