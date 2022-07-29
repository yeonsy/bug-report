import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ComboBox, Radio } from '@trussworks/react-uswds'

import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'

const arrayToOptions = arr => arr.map(x => ({ label: x, value: x }))
const fruitOptions = arrayToOptions(['strawberry', 'bananna', 'orange', 'apple'])
const veggieOptions = arrayToOptions(['spinich', 'carrot', 'kale'])

const FoodPicker = () => {
	const [comboBoxOptions, setComboBoxOptions] = useState(fruitOptions)

	const onFruitClick = () => {
		setComboBoxOptions(fruitOptions)
	}

	const onVeggieClick = () => {
		setComboBoxOptions(veggieOptions)
	}

	return (
		<div className="margin-2">
			<Radio name="food" id="fruit" label="Fruits" onClick={onFruitClick} defaultChecked></Radio>
			<Radio name="food" id="veggie" label="Vegetables" onClick={onVeggieClick}></Radio>
			<ComboBox options={comboBoxOptions} />
		</div>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<FoodPicker />
	</React.StrictMode>,
	document.getElementById('react-root')
)

