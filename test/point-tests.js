const assert = require( 'assert' )
const point = require( '../point' )

const { Point, PointF } = point

describe( 'Point', () => {
  it( 'point factory', done => {
    const p = Point( 3, 4 )
    
    assert.equal( p.x, 3 )
    assert.equal( p.y, 4 )
    
    done()
  })

  it( 'truncates', done => {
    const p = Point( 3.1, 4.9 )
    
    assert.equal( p.x, 3 )
    assert.equal( p.y, 4 )
    
    done()
  })
  
  it( 'empty point', done => {
    const p = Point()
    
    assert.equal( p.x, 0 )
    assert.equal( p.y, 0 )
    
    done()
  })
})


describe( 'PointF', () => {
  it( 'pointF factory', done => {
    const p = PointF( 3.1, 4.1 )
    
    assert.equal( p.x, 3.1 )
    assert.equal( p.y, 4.1 )
    
    done()
  })
})