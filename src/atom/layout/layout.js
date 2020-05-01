import { html, css, LitElement } from 'lit-element';

class Layout extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.counter = 4;
  }

  render() {
    return html`
    <slot name="b"></slot>  
    <p>${this.title} jhkjh ${this.counter}</p>
      <slot name="a"></slot>
    `;
  }
}

window.customElements.define('fs-layout', Layout);
