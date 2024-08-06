import Home from './Home'
import About from './About'
import createRouter from '../core/heropy'

export default createRouter([
    {path : '#/', component:Home},
    {path : '#/about', component:About},
])