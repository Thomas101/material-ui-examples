import ReactDOM from 'react-dom'
import React from 'react'
import { Tooltip } from '@material-ui/core'

class Test extends React.Component {
	render () {
		return (
			<Tooltip title="title">
				<span>Some content</span>
			</Tooltip>
		)
	}
}

ReactDOM.render(<Test />, document.getElementById('render'))