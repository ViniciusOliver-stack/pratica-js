import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;

  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;

  -webkit-font-smoothing: antialiased;

  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.WHITE};
}

:root{
  font-size: 62.5%;
}

body::-webkit-scrollbar {
  width: 6px;               /* width of the entire scrollbar */
}


body::-webkit-scrollbar-thumb {
  background-color: ${({theme}) => theme.COLORS.YELLOW};    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}

`
