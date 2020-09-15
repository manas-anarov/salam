import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'
import AddCount from './AddCount'

// const Page = (state) => {
//   console.log(state)
//   return <div>This is test</div>
// }


const Page = ({ title, linkTo, tick, authenticate}) => (
  <div>
    <h1>{title}</h1>
    <h1>{authenticate.token}</h1>
    <h1>{tick.lastUpdate}</h1>
    <Clock lastUpdate={tick.lastUpdate} light={tick.light} token= {tick.token} />
    <AddCount />
    <nav>
      <Link href={linkTo}>
        <a>Navigate</a>
      </Link>
    </nav>
  </div>
)

export default connect((state) => state)(Page)
