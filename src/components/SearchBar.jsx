import React from 'react'
import {
    Input,
    InputGroup,
    InputLeftElement,
  } from "@chakra-ui/react";
  import { SearchIcon } from "@chakra-ui/icons";

function SearchBar() {
  return (
    <InputGroup w="40%">
        <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
        </InputLeftElement>
        <Input placeholder='Search' />
    </InputGroup>
  )
}

export default SearchBar;