/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react';
import { Input, Column } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Search(props) {
  const [query, setQuery] = useState('');

  const handlekeyDown = (e) => {
    if (e.key === 'Enter') {
      props.searchNote(query);
    }
  }
  return (
    <Column.Group className="is-vcentered" breakpoint='mobile'>
      <Column size='9' offset={1}>
        <Input type="text"
          value={query}
          placeholder="Pesquisar Notas..."
          onKeyDown={handlekeyDown}
          onChange={(e) => setQuery(e.target.value)} />
      </Column>
      <Column mobile={2} size={1}>
        <a href="#" onClick={() => {
          props.fetchNotes();
          setQuery('');
        }}>
          <FontAwesomeIcon icon={faTimes}
            color='grey'
            className="is-pulled-left"
          />
        </a>
      </Column>
    </Column.Group>



  )

}
export default Search;