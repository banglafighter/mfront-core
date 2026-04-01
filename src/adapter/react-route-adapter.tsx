import {
    createBrowserRouter,
    RouterProvider as ReactRouterProvider,
    Outlet,
    NavLink,
    useNavigation,
    useParams,
    useLoaderData,
    useRouteError,
    redirect,
    useSearchParams, useMatches,
} from "react-router-dom"

export const MmRouterOutlet = Outlet