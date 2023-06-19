
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.ts'



//import { name, ega, isValid } from './bases/01-types.ts' // exportar la variable o datos
//import { bulbasaur, pokemons } from './bases/02-types.ts'
//import { charmander } from './bases/03-class'
//import { charmander } from './bases/04-inyection'
// import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators2'




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    
    <h1>${charmander.name} ${charmander.id}</h1>
    <h2></h2>
    <p class="read-the-docs">
      Click!!!! on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
