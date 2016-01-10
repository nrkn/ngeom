'use strict'

const NumericFactory = require( 'nof-number' )

const Point = NumericFactory({
  name: 'Point',
  isInteger: true,
  properties: [ 'x', 'y' ]
})

const PointF = NumericFactory({
  name: 'PointF',
  properties: [ 'x', 'y' ]
})

module.exports = {
  Point,
  PointF
}
