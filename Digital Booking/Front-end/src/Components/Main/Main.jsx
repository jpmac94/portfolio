import React from 'react'
import List from '../Main/Card/List'
import ListRecomendation from '../Main/CardRecomendation/ListRecomendation'
import BlockSearch from '../Main/BlockSearch/BlockSearch'

export default function Main() {
  return (
    <main>
      <BlockSearch/>
      <List/>
      <ListRecomendation/>
    </main>
  )
}
