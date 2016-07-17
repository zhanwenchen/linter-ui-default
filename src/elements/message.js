/* @flow */
/** @jsx React.h */

import { Component } from 'preact'
import type { Message } from '../types'

export default class MessageElement extends Component {
  props: {
    message: Message,
    showProviderName: boolean,
  };

  openLink: (() => void) = () => {
    atom.applicationDelegate.openExternal(
      this.props.message.reference || `https://www.google.com/search?q=${encodeURIComponent(`${this.props.message.linterName} ${this.props.message.excerpt}`)}`
    )
  };

  render() {
    const { message, showProviderName } = this.props

    return (<linter-message className={message.severity}>
      <linter-excerpt>
        { showProviderName ? `${message.linterName}: ` : '' }
        { message.excerpt }
      </linter-excerpt>{' '}
      <a href="#" onClick={this.openLink}>
        <span className="icon icon-search linter-icon"></span>
      </a>
    </linter-message>)
  }
}
