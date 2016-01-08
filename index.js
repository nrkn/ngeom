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

const Size = NumericFactory({
  name: 'Size',
  isInteger: true,
  properties: [ 'width', 'height' ]
})

const SizeF = NumericFactory({
  name: 'SizeF',
  properties: [ 'width', 'height' ]
})

module.exports = {
  Point,
  PointF,
  Size,
  SizeF,
}
