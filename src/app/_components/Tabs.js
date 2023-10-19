'use client'
import ExploreTab from './ExploreTab';

import { useAuthContext } from '../../context/AuthContext';
import { useState } from 'react';

export default function Tabs({ defaultCharacters }) {
  const { user } = useAuthContext();
  const [ tabNow, setTabNow ] = useState('explore');
  
  let exploreTabDisplay = true;
  let myTabDisplay = false;

  if (user == null || tabNow === 'explore') {
    exploreTabDisplay = true;
    myTabDisplay = false;
  } else {
    exploreTabDisplay = false;
    myTabDisplay = true;
  }

  return (
    <>
     
      {myTabDisplay? <> </>: <> <ExploreTab
        characters={defaultCharacters}
        isDisplay={exploreTabDisplay}/>
      {user != null && (
        <> </>
       // if i get time ill try and get back to this and finish 
      )} </>}
     
    </>
  );
}
