import { createLazyFileRoute, redirect } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: () => <div>Hello asd/!</div>,
  beforeLoad: () => {
    throw redirect({ to: "/about", search: {page:1}, replace: true });
  },
})
