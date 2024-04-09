import { Link, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: () => {

    return (<>
      <div>Hello /!</div>
      <ul>
      <li><Link to="/about" search={{ page: '1' }}>About with router search</Link></li>
      <li><a href={'/?some=search#/about'}>About with 'normal' search</a></li>
      </ul>
    </>)
  }
})
