'use strict'

const NumericFactory = require( 'nof-number' )
const { Point } = require( './point' )

const Size = NumericFactory({
  name: 'Size',
  isInteger: true,
  properties: [ 'width', 'height' ],
  mixins: {
    points: size => {
      const points = []
      
      for( let y = 0; y < size.height; y++ ){
        for( let x = 0; x < size.width; x++ ){
          points.push( Point( x, y ) )
        }
      }
      
      return points        
    }
  }
})

const SizeF = NumericFactory({
  name: 'SizeF',
  properties: [ 'width', 'height' ]
})

module.exports = {
  Size,
  SizeF
}