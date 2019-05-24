import React from 'react'
import DonutChart from 'react-donut-chart'

class Chart extends React.Component {

	render(){
		return (
      <div id="chart">
      <DonutChart
        data={[{
          label: 'Clothing',
          value: 25,
        },
        {
          label: 'Furniture',
          value: 75,

        }]} />
        </div>
      )
	}
}



export default Chart
