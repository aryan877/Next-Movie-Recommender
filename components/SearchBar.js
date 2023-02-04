import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setSelectedMovie, setCurrentPage } from '../store/movieSlice';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Autocomplete } from '@mantine/core';
import { Search, X } from 'tabler-icons-react';

export default function SearchBar() {
  const router = useRouter();
  const [searchData, setSearchData] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const inputRef = useRef(null);

  const { data, loading, error } = useQuery(
    ['search', searchData],
    async (_, searchData) => {
      const res = await axios.get(`${process.env.apiHost}/search/?name=${_.queryKey[1]}`);
      if (res.status === 200) {
        setSearchResults(res.data.reduce((sr, { title, tmdbId }) => {
          sr[title] = tmdbId
          return sr
        }, {}));
      } else {
        throw new Error(res.statusText);
      }
    },
    {
      enabled: searchData.length > 0,
      refetchOnWindowFocus: false,
    }
  );

  const submitHandler = async ({ searchData }) => {
    const selectedValue = searchData.value
    if (inputRef.current) inputRef.current.blur()
    router.push(`/recommendations/?id=${searchResults[selectedValue]}`);
  };

  const handleClick = () => {
    setSearchData('')
  }

  return (
    <Autocomplete
      placeholder="Search"
      style={{ width: "40%" }}
      required
      limit='10'
      icon={<Search />}
      value={searchData}
      rightSection={searchData.length > 0 ? <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <X style={{ cursor: 'pointer' }} />
      </div> : null}
      rightSectionProps={{ onClick: handleClick }}
      onChange={setSearchData}
      onItemSubmit={(searchData) => submitHandler({ searchData })}
      ref={inputRef}
      data={
        Object.keys(searchResults || {})
      }
    />
  );
}
