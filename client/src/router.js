import { ADMIN_ROUTE, LOGIN_ROUTE, PUBLIC_ROUTE, EVENT_ROUTE, NEWSLETTER_ROUTE, PARTNERS_ROUTE, PHOTO_ROUTE, RESERVATION_ROUTE, REVIEWS_ROUTE, SHIFT_ROUTE, SHIFTS_ROUTE, SOCIAL_ROUTE, STATISTICS_ROUTE, TEACHERS_ROUTE, TYPE_ROUTE} from "./utils/const"
import Admin from "./pagesAdmin/Admin"
import Authorization from "./pagesAdmin/Authorization"
import Event from "./pagesAdmin/Event"
import Newsletter from "./pagesAdmin/Newsletter"
import Partners from "./pagesAdmin/Partners"
import Photo from './pagesAdmin/Photo'
import Home from './pagesUser/Home'
import Reservation from "./pagesAdmin/Reservation"
import Reviews from './pagesAdmin/Reviews'
import Shift from "./pagesAdmin/Shift"
import Shifts from "./pagesAdmin/Shifts"
import Social from "./pagesAdmin/Social"
import Statistics from "./pagesAdmin/Statistics"
import Teachers from "./pagesAdmin/Teachers"
import Type from "./pagesAdmin/Type"



export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: EVENT_ROUTE,
        Component: Event
    },
    {
        path: NEWSLETTER_ROUTE,
        Component: Newsletter
    },
    {
        path: PARTNERS_ROUTE,
        Component: Partners
    },
    {
        path: PHOTO_ROUTE,
        Component: Photo
    },
    {
        path: RESERVATION_ROUTE,
        Component: Reservation
    },
    {
        path: REVIEWS_ROUTE,
        Component: Reviews
    },
    {
        path: SHIFT_ROUTE,
        Component: Shift
    },
    {
        path: SHIFTS_ROUTE,
        Component: Shifts
    },
    {
        path: SOCIAL_ROUTE,
        Component: Social
    },
    {
        path: STATISTICS_ROUTE,
        Component: Statistics
    },
    {
        path: TEACHERS_ROUTE,
        Component: Teachers
    },
    {
        path: TYPE_ROUTE,
        Component: Type
    },
]
export const publicRoutes = [
    {
        path: PUBLIC_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Authorization
    }
]