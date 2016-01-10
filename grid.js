'use strict'

const ObjectFactory = require( 'nof' )
const { Size } = require( './size' )
const { Point } = require( './point' )

const GridFactory = ObjectFactory({
  name: 'Grid',
  properties: [ 'size', 'data' ]
})
  
const Grid = gridSize => {
  const data = {}    
  const size = Size.from( gridSize )
  
  const grid = Object.assign(
    GridFactory( size, data ),
    {
      at: ( point, value ) => {
        const key = Point.from( point ).toString()
        
        if( value !== undefined ){
          data[ key ] = value
        }
        
        return data[ key ]
      }
    }
  )
  
  return grid
}

module.exports = Grid
