# Checkbox List Component

A simple and customizable React component that displays a list of checkboxes with a clean, modern UI. The component features custom styled checkboxes with visually appealing active states.

## Features

- Custom-designed checkbox UI with blue active state
- "Select All" functionality with the "All pages" option
- Automatic syncing of "All pages" checkbox state based on individual selections
- Mobile-friendly design
- Customizable styling
- Clean visual separation with border lines

## Screenshot

![image](https://github.com/user-attachments/assets/89e94543-ca3d-436e-9670-29be9abe1613)


## Installation

1. Clone this repository or copy the component files into your React project:
   - `CheckboxList.js`
   - `CheckboxList.css`

2. Import and use the component in your React application.

## Usage

```jsx
import React from 'react';
import CheckboxList from './path/to/CheckboxList';

function App() {
  return (
    <div className="App">
      <CheckboxList />
    </div>
  );
}

export default App;
```

## Component Structure

The component consists of:

- A main container with a list of checkbox items
- Each checkbox item contains a label and a custom-styled checkbox
- A "Done" button to submit or process selections

## Customization

### Styling

You can customize the appearance by modifying the `CheckboxList.css` file:

- Change the color scheme by updating the checkbox active color (`#4285f4`)
- Modify button color (`#ffd500`)
- Adjust border styles, spacing, or font sizes

### Component Props

You can extend the component to accept props such as:

```jsx
<CheckboxList 
  items={['Page 1', 'Page 2', 'Page 3']} 
  onSelectionChange={(selections) => console.log(selections)}
  onDone={(selections) => processSelections(selections)}
/>
```

## How It Works

The component uses React's `useState` and `useEffect` hooks to manage state:

- Checkbox state is tracked in a state object
- When "All pages" is selected/deselected, all checkboxes update accordingly
- When all individual checkboxes are selected, "All pages" automatically checks
- Click handlers ensure the checkbox state toggles correctly when clicking anywhere on the row



## Contributing

Feel free to submit issues or enhancement requests!
