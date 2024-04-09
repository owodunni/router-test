# React router hash route search issues

There is a discrepency between window.location.search and the search params used
by the router when using hash routes.

To see it in action start the project `pnpm run dev` and go to the following routes:

* [About with react router search params](http://localhost:5173/#/about?page=1)
* [About with window.location.search params](http://localhost:5173/?some=search#/about)
* [About with both params](http://localhost:5173/?some=search#/about?page=1filter=hello)

According to the specification the query must come before the fragment:

https://www.rfc-editor.org/rfc/rfc3986#section-3

URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
