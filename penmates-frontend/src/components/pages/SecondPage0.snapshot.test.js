import React from 'react'
import { shallow } from 'enzyme'
import SecondPage from './SecondPage'
describe('SecondPage component', () => {
  it('should have a matching snapshot', () => {
    const wrapper = shallow(<SecondPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
