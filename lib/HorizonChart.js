"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Array = require("d3-array");

var _HorizonRow = _interopRequireWildcard(require("./HorizonRow"));

require("./HorizonChart.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable react/jsx-sort-default-props, react/sort-prop-types */
const propTypes = {
  className: _propTypes.default.string,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  seriesHeight: _propTypes.default.number,
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.arrayOf(_propTypes.default.string),
    values: _propTypes.default.arrayOf(_propTypes.default.shape({
      y: _propTypes.default.number
    }))
  })).isRequired,
  // number of bands in each direction (positive / negative)
  bands: _propTypes.default.number,
  colors: _propTypes.default.arrayOf(_propTypes.default.string),
  colorScale: _propTypes.default.string,
  mode: _propTypes.default.string,
  offsetX: _propTypes.default.number
};
const defaultProps = {
  className: '',
  width: 800,
  height: 600,
  seriesHeight: 20,
  bands: Math.floor(_HorizonRow.DEFAULT_COLORS.length / 2),
  colors: _HorizonRow.DEFAULT_COLORS,
  colorScale: 'series',
  mode: 'offset',
  offsetX: 0
};

class HorizonChart extends _react.default.PureComponent {
  render() {
    const {
      className,
      width,
      height,
      data,
      seriesHeight,
      bands,
      colors,
      colorScale,
      mode,
      offsetX
    } = this.props;
    let yDomain;

    if (colorScale === 'overall') {
      const allValues = data.reduce((acc, current) => acc.concat(current.values), []);
      yDomain = (0, _d3Array.extent)(allValues, d => d.y);
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: `superset-legacy-chart-horizon ${className}`,
      style: {
        height
      }
    }, data.map(row => /*#__PURE__*/_react.default.createElement(_HorizonRow.default, {
      key: row.key,
      width: width,
      height: seriesHeight,
      title: row.key.join(', '),
      data: row.values,
      bands: bands,
      colors: colors,
      colorScale: colorScale,
      mode: mode,
      offsetX: offsetX,
      yDomain: yDomain
    })));
  }

}

HorizonChart.propTypes = propTypes;
HorizonChart.defaultProps = defaultProps;
var _default = HorizonChart;
exports.default = _default;