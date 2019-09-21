import React from 'react';
import { Input } from './styles';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_SEARCH_VALUE = gql`
  {
    searchValue @client
  }
`;

const Search = () => {
  const client = useApolloClient();

  const { data } = useQuery(GET_SEARCH_VALUE);
  const { searchValue } = data;

  const handleChange = e => {
    const { value } = e.target;
    client.writeData({ data: { searchValue: value } });
  };

  return (
    <Input
      placeholder="Search Products"
      value={searchValue}
      onChange={handleChange}
    />
  );
};

export default Search;
