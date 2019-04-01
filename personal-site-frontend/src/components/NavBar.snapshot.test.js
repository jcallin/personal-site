import React from 'react'
import { shallow } from 'enzyme'
import NavBar from './NavBar'
describe('NavBar component', () => {
  it('should have a matching snapshot', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper).toMatchSnapshot()
  })
})
