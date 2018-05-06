//Adapter qui permer de lier la version 16 de react et enzyme
import Adapter from 'enzyme-adapter-react-16'
//Libraire qui permet de tester un composant sans forcément le render de ses enfants
import { configure as configureEnzyme } from 'enzyme'
import createChaiEnzyme from 'chai-enzyme'
import createChaiJestDiff from 'chai-jest-diff'
//librairie avec le même nom de fonction d'entrée que jest, expect, qui offre une syntaxe différente
import chai from 'chai'
//permet de soulever des erreurs lors des fautes de frappe d'un accesseur lors d'une assertion
import dirtyChai from 'dirty-chai'
// import createChaiJestDiff from 'chai-jest-diff'


//LIEN DOC: http://airbnb.io/enzyme/docs/api/

chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(createChaiEnzyme())

configureEnzyme({ adapter: new Adapter() })