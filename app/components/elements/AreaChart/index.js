import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { JAPANESE_INDIGO, QUEEN_BLUE, PEWTER_BLUE } from 'constants/colors';

const data = [
      {year: '2016', numberOfStudents: 2},
      {year: '2017', numberOfStudents: 1},
      {year: '2018', numberOfStudents: 2},
];
class SimpleAreaChart extends React.Component {
	render () {
  	return (
      <ResponsiveContainer width="100%" height={300}>
      	<AreaChart data={data}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="year"/>
          <YAxis/>
          <Tooltip/>
          <Area
            type='monotone'
            dataKey='numberOfStudents'
            stroke={JAPANESE_INDIGO}
            fill={QUEEN_BLUE}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
};

export default SimpleAreaChart;
