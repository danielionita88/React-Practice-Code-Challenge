import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((sushi,index)=><Sushi key={index} eaten={props.eaten} sushi={sushi} handleEaten={props.handleEaten}/>)}
        <MoreButton handleMoreBtn={props.handleMoreBtn}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer