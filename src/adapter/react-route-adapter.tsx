import {
    createBrowserRouter,
    RouterProvider as ReactRouterProvider,
    Outlet,
    NavLink,
    useNavigation,
    useNavigate,
    useParams,
    useLoaderData,
    useRouteError,
    redirect,
    useSearchParams,
    useMatches,
} from "react-router"

export const McRouterOutlet = Outlet
export const mcRouterUseSearchParams = useSearchParams
export const mcRouterUseMatches = useMatches
export const mcRouterUseParams = useParams
export const mcRouterUseNavigation = useNavigation
export const mcRouterUseNavigate = useNavigate


export function createMcReactRoute(routes: any, options?: any) {
    return createBrowserRouter(routes, options)
}

export function McRouterProvider({router}: { router: any }) {
    return <ReactRouterProvider router={router}/>
}