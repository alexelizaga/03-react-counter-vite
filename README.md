
# CounterApp

## Commits

33. Vite structure
34. Hello world in react
35. Our first component
36. Task: Create a new component
37. Fragment
38. Printing variables in html
39. Set css styles
40. Props
43. Task: CounterApp component
44. Click event (general events)
45. useState - Hook
46. handleSubstract y handleReset
52. Test configuration and my first test
53. Jest - Expect - toBe
54. Test file 02-template-string.ts
55. toEqual
56. Test file 07-deses-arr.ts
57. Test file 08-imp-exp.ts
58. Test async tasks
59. Test async-await
61. Test React Components
62. Test FirstApp - React Components
63. Test FirstApp
64. getByTestId and other props
65. Screen - Testing Library
66. Basic CounterApp Tests
67. Simulate events - Click

## Tests

- template string
- functions
- object
- array
- expect()
- promises
- toMatchSnapshot()
- getByText()
- getByRole()
- getById()
- toBe()
- toContain()
- fireEvent()

## Good practices

### Folders
- Space in name separate by '-', product-list

### TSX VS TS
- TSX when the component export JSX
- TS when the component doesn't export JSX

### Imports
- React first
- External imports alfabetic order ( shift + command/control + p)

- Internal imports alfabetic order ( shift + command/control + p)

- Css / ... imports alfabetic order ( shift + command/control + p)

### Props
- Separate properties and methods

### Interfaces
- First letter of the name of the interface is capital
- No index.ts for interfaces
- use https://quicktype.io to generate response interfaces
- Separate properties and methods
- NameResponse: is the name of the interface for api responses

### Css
- Atributes in alfabetic order ( shift + command/control + p)
- [styled component in line css](https://styled-components.com/docs/api#css)
- Nesting only pseudo elements and pseudo classes
- Create styled components for 3 or more atributes
- Use Global styles variables
- BEM Metodology
    .ObjetoPrincipal
    .ObjetoPrincipal_objetoInterno
    .ObjetoPrincipal_objetoInterno--excepcion

### Components
- Component starts with capital letter
- Try allways to do functions outside functional components

### Any use is forbidden


### single quote vs doble quote
- "" Just for html

### Semi-Colon
- Convention to include semi-colon at the end of the lines

### useEffect
- Can't be async
- Just do one thing by useEffect

### Unit test
- Unit test coverage should be at least 80%
- One Describe per test file

### Strings
- Always compare strings whith toLowerCase
- Use defines.ts / enums.ts / ... for plane text
- Template strings instead of concatenation

### Other
- Constants in capital letters


## VSCode Plugins
- Auto Close Tag
- CodeMetrics
- CSS Module
- ES7+ React/Redux/React-Native snippets
- ESLint
- Git Commits
- GitLens
- Jest
- Jest Runner
- Jest Snippets
- Lorem ipsum
- Material Icon Theme
- Paste JSON as Code
- Prettier
- TypeScript Importer
