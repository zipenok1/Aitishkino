import { LOGIN_ROUTE, ADMIN_ROUTE, PUBLIC_ROUTE, EVENT_ROUTE, PROGRAM_ROUTE, NEWS_ROUTE, PARTNERS_ROUTE, PHOTO_ROUTE, RESERVATION_ROUTE, REVIEWS_ROUTE, SHIFTS_ROUTE, TEACHERS_ROUTE, TYPE_ROUTE, NEWSLETTER_ROUTE,INFORMATION_ROUTE, SHIFTSPAGE_ROUTE, NEWSPAGE_ROUTE, SAMPLE_ROUTE } from "./utils/const"
import Admin from "./pageAdmin/Home"
import Authorization from "./pageAdmin/Authorization"
import Home from './pageUser/Home'
import Event from "./pageAdmin/Event"
import Program from "./pageAdmin/Program"
import News from "./pageAdmin/News"
import Partners from "./pageAdmin/Partners"
import Photo from "./pageAdmin/Photo"
import Reservation from "./pageAdmin/Reservation"
import Reviews from "./pageAdmin/Reviews"
import Shifts from "./pageAdmin/Shifts"
import Teachers from "./pageAdmin/Teachers"
import Type from "./pageAdmin/Type"
import Newsletter from "./pageAdmin/Newsletter"
import InformationPage from "./pageUser/InformationPage"
import ShiftsPage from "./pageUser/ShiftsPage"
import NewsPage from "./pageUser/NewsPage"
import SampleNews from "./pageUser/SampleNews"
 

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
        path: PROGRAM_ROUTE,
        Component: Program
    },
    {
        path: NEWS_ROUTE,
        Component: News
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
        path: SHIFTS_ROUTE,
        Component: Shifts
    },
    {
        path: TEACHERS_ROUTE,
        Component: Teachers
    },
    {
        path: TYPE_ROUTE,
        Component: Type
    },
    {
        path: NEWSLETTER_ROUTE,
        Component: Newsletter
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
    },
    {
        path: INFORMATION_ROUTE,
        Component: InformationPage 
    },
    {
        path: SHIFTSPAGE_ROUTE,
        Component:  ShiftsPage
    },
    {
        path: NEWSPAGE_ROUTE,
        Component: NewsPage
    }, 
    {
        path: SAMPLE_ROUTE,
        Component: SampleNews
    }
]