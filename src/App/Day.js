import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = ({ day, list }) => {
	return (
		<div>
			<h3>{format(new Date(day), 'eeee, dd LLLL')}</h3>
			{
			console.log(list)
			}
			{list.map((item) => {
				return <div key={item?.dt}>{item?.dt_txt.split(" ")[1].slice(0, 5)} | <span>{Math.round(item?.main.temp)}°C</span> | <span>{item?.weather[0].description}</span></div>
			})}
		</div>
	)
}

Day.propTypes = {
	day: PropTypes.string,
	list: PropTypes.array,
}

export default Day
