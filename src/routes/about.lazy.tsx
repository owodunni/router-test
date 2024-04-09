import { createLazyFileRoute } from '@tanstack/react-router'

type ProductSearchSortOptions = 'newest' | 'oldest' | 'price';

type ProductSearch = {
  page: number
  filter: string
  sort: ProductSearchSortOptions
}

export const Route = createLazyFileRoute('/about')({
  component: About,
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    // validate and parse the search params into a typed state
    return {
      page: Number(search?.page ?? 1),
      filter: (search.filter as string) || '',
      sort: (search.sort as ProductSearchSortOptions) || 'newest',
    }
  },
})

function About() {
  const { page, filter, sort } = Route.useSearch()
  return <div className="p-2">windowSearch={window.location.search} page={page} filter={filter} sort={sort}</div>
}
