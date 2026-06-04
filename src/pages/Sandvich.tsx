import React from 'react'
import Prodact from '../components/Prodact'
import { sandvich } from '../config/data'

function Sandvich() {
  return (
    <div className="py-7 flex flex-col gap-10 md:grid md:grid-cols-2">
      {sandvich.map((item, index) => (
        <div key={index}>
          <Prodact item={item} />
        </div>
      ))}
    </div>
  )
}

export default Sandvich