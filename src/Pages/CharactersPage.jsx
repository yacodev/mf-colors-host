import React, { useRef, useEffect } from 'react';
import { Error } from '../Components/ErrorHandle';
import placeCards from 'cards/placeCards';

const CharactersPage = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    placeCards(cardsRef.current);
  }, []);

  return (
    <>
      <Error>
        <div ref={cardsRef} />
      </Error>
    </>
  );
};

export default CharactersPage;
