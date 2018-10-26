import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Navigator } from './navigator'
import { theme } from './theme'

global.XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest

export class Root extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Navigator />
            </ThemeProvider>
        )
    }
}
