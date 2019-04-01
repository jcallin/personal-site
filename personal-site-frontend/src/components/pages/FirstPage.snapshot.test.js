import React from 'react'
import { shallow } from 'enzyme'
import FirstPage from './FirstPage'
describe('First page component', () => {
  it('should have a matching snapshot', () => {
    const wrapper = shallow(<FirstPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
