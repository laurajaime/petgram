import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export const Detail = () => {
  const params = useParams()

  return (
    <Fragment>
      <PhotoCardWithQuery id={params.detailId} />
    </Fragment>
  )
}
