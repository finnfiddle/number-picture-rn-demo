import React, { Component } from 'react';
import { Collection, Group, Rect, Svg } from 'number-picture'
import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { Svg as RNSvg } from 'expo';

import COLORS from '../colors';

export default class Bar extends Component {

  static displayName = 'Bar';
  state = {};

  render() {
    const { nodes, width, height } = this.props;
    const HEIGHT = height;
    const WIDTH = width;
    const COLUMN_WIDTH = WIDTH / nodes.length;

    const scale = scaleLinear()
      .domain([0, max(nodes, node => node.value)])
      .range([0, HEIGHT]);

    return (
      <Svg height={height} width={width} component={RNSvg}>
        <Collection
          data={nodes}
          nodeEnter={d => ({ ...d, value: 0 })}
          animate
          component={RNSvg.G}
        >{nodes => nodes.sort(d => d.key).map(({ value, key }, i) => (
          <Group
            key={key}
            component={RNSvg.G}
            onPress={() => {
              this.setState({ activeNode: this.state.activeNode === key ? null : key });
            }}
          >
            <Rect
              x={COLUMN_WIDTH * (i + 0.1)}
              y={HEIGHT - scale(value)}
              height={scale(value)}
              width={COLUMN_WIDTH * 0.8}
              fill={this.state.activeNode === key ? COLORS.GREEN : COLORS.DARK_GREY}
              component={RNSvg.Rect}
            />
          </Group>
        ))
        }</Collection>
      </Svg>
    );
  }
}