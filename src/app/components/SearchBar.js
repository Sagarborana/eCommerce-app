'use client'
import React, { useState } from 'react';
import './SearchBar.css';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query)
    setQuery('')
  };

  return (
    <form onSubmit={handleSearch} className="search-container">
      <TextField id="outlined-basic" style={{flex:"1"}} label="Search products" variant="outlined" />
      <Button variant="contained" className="search-button">Search</Button>
    </form>
  );
};

export default SearchBar;
