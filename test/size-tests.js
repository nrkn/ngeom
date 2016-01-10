'use strict'

const assert = require( 'assert' )
const size = require( '../size' )

const { Size, SizeF } = size

describe( 'Size', () => {
  it( 'size factory', done => {
    const s = Size( 3, 4 )
    
    assert.equal( s.width, 3 )
    assert.equal( s.height, 4 )
    
    done()
  })

  it( 'truncates', done => {
    const s = Size( 3.1, 4.9 )
    
    assert.equal( s.width, 3 )
    assert.equal( s.height, 4 )
    
    done()
  })
  
  it( 'empty size', done => {
    const s = Size()
    
    assert.equal( s.width, 0 )
    assert.equal( s.height, 0 )
    
    done()
  })
  
  it( 'points', done => {
    const s = Size( 3, 4 )
    
    const points = s.points()
    
    assert.equal( points.length, s.width * s.height )
    
    for( let y = 0; y < s.height; y++ ){
      for( let x = 0; x < s.width; x++ ){
        const i = y * s.width + x
        
        assert.equal( points[ i ].x, x )
        assert.equal( points[ i ].y, y )
      }
    }
    
    done()
  })
})


describe( 'SizeF', () => {
  it( 'sizeF factory', done => {
    const s = SizeF( 3.1, 4.1 )
    
    assert.equal( s.width, 3.1 )
    assert.equal( s.height, 4.1 )
    
    done()
  })
})