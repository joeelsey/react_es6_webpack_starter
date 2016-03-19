import React from 'react'
import App from '../../src/components/App'
import { renderShallow } from '../helpers/react-test-helper'
import { expect } from 'chai'

describe('The top-level App component', () => {
  let subject

  beforeEach(() => {
    subject = renderShallow(<App />)
  })

  describe('should render', () => {
    it('a simple message', () => {
      expect(subject.props.children).to.eql('Ready')
    })
  })
})
