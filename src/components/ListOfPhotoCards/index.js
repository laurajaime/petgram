import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from "@apollo/client";
import { withPhotos } from '../../hoc/withPhotos';

export const ListOfPhotoCards = ({categoryId}) => {
  const { loading, error, data } = useQuery(withPhotos, {variables: { categoryId: categoryId } });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
