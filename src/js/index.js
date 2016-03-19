import React from 'react'
import { render } from 'react-dom'
import App from '../components/App.jsx'
require('../css/default.scss')

const app = document.getElementById('app')
render(<App />, app)
