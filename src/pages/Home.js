import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Home = () => {
  const params = useParams()

  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </Fragment>
  )
}
