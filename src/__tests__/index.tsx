import { render } from '@testing-library/react'
import Home from 'pages'

describe('<Home/>', () => {
	it('renders properly', () => {
		const { getByText } = render(<Home />)
		expect(getByText(/convo/i)).toBeInTheDocument()
	})
})
