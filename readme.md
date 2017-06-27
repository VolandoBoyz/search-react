#Search-react

> 🔎 search react component with a cancel button and a nice animation

#Steps to use it

1.Install the component
  `yarn add search-react` 
2.Use it component
  ```javascript

  import Search from 'search-react' 

  <Search getTerm={term => console.log(term)}>
  ```
  the only prop required is `getTerm`: a function that returns the search term and then you can do whatever you want with it
