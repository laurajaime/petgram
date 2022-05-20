import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { Query } from '@apollo/client/react/components';
import { gql } from "@apollo/client";

export const query = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        const { photo } = data || { photo: {} };

        return <PhotoCard {...photo} />
      }
    }
    
  </Query>
)
