'use strict'

const assert = require( 'assert' )
const { Size } = require( '../size' )
const Grid = require( '../grid' )

describe( 'Grid', () => {
  it( 'at', done => {
    const grid = Grid( Size( 3, 4 ) )
    
    const points = grid.size.points()
    
    points.forEach( grid.at )
    
    points.forEach( ( point, i ) => {
      const at = grid.at( point )
      
      assert.equal( at, i )
    })
    
    done()
  })
})