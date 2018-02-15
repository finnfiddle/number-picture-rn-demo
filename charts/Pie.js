import React, { Component } from 'react';
import { Arc, Group, Pie, Svg } from 'number-picture';
import { Svg as RNSvg } from 'expo';

import COLORS from '../colors';

export default class PieChart extends Component {

  constructor() {
    super();
    this.displayName = 'PieChart';
    this.state = {};
  }

  render() {
    const { nodes, width, height } = this.props;
    const radius = (Math.min(width, height) / 2);

    return (
      <Svg height={height} width={width} component={RNSvg}>
        <Group x={width / 2} y={height / 2} component={RNSvg.G}>
          <Pie
            data={nodes}
            value={datum => datum.value}
            id={datum => datum.id}
            sort={(a, b) => a.index - b.index}
            nodeEnter={d => ({ ...d, endAngle: d.startAngle })}
            animate
            component={RNSvg.G}
          >{
            nodes => (
              <RNSvg.G>
              {nodes.map(({ startAngle, endAngle, data: { key } }) => (
                <Group
                  key={key}
                  onPress={() => {
                    this.setState({ activeNode: this.state.activeNode === key ? null : key });
                  }}
                  component={RNSvg.G}
                >
                  <Arc
                    innerRadius={0}
                    outerRadius={radius - 60}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={this.state.activeNode === key ? COLORS.GREEN : COLORS.DARK_GREY}
                    stroke="white"
                    strokeWidth={1}
                    component={RNSvg.Path}
                  />
                </Group>
              ))}
              </RNSvg.G>
            )
          }
          </Pie>
        </Group>
      </Svg>
    );
  }
}