import React, { Component } from 'react';
import { Circle, Group, Pack, Svg } from 'number-picture';
import { Svg as RNSvg } from 'expo';

import COLORS from '../colors';

export default class PackChart extends Component {

  constructor() {
    super();
    this.displayName = 'PackChart';
    this.state = {};
  }

  render() {
    const { nodes, width, height } = this.props;
    const radius = (Math.min(width, height) / 2);

    return (
      <Svg height={height} width={width} component={RNSvg}>
        <Pack
          data={{
            children: nodes,
          }}
          sum={datum => datum.value}
          size={[width, height]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
          component={RNSvg.G}
        >{nodes => nodes.map(({ x, y, r, key }) => (
          <Circle
            key={key}
            cx={x}
            cy={y}
            r={r}
            fill="black"
            component={RNSvg.Circle}
          />
        ))}</Pack>
      </Svg>
    );
  }
}