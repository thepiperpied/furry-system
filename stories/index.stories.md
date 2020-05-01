```js script
import { html } from '@open-wc/demoing-storybook';
import '../furry-system.js';

export default {
  title: 'FurrySystem',
  component: 'furry-system',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# FurrySystem

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add furry-system
```

```js
import 'furry-system/furry-system.js';
```

```js preview-story
export const Simple = () => html`
  <furry-system></furry-system>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <furry-system title="Hello World"></furry-system>
`;
```
