
import {A_GROUP,A_SHOP_MAP,A_SPORT_MAP,A_CALENDAR_H,SECTION_BRAIN,GROUPS,SHOP_MAP,SPORT_MAP,HEALTH_CALENDAR} from "./utils/consts";

//портал
import HealthCalendar from './pages/HealthCalendar'
import Sport_map from './pages/Maps/SportMap';
import Shop_map from './pages/Maps/ShopMap'
import Home from './pages/Home'
import Groups from './pages/Groups';
import SectionBrain from './pages/SectionBrain'

//страницы админки
import ACalendarH from './pages/Admin/ACalendarH'
import ASportMap from './pages/Admin/ASportMap'
import AShopMap from './pages/Admin/AShopMap'
import AGroup from './pages/Admin/AGroup';
import AMain from './pages/Admin/AMain';

export const publicRoutes = [
    {
        path: SECTION_BRAIN,
        Component: SectionBrain
    },
    {
        path: GROUPS,
        Component: Groups
    },
    {
        path: "*",
        Component: Home
    },
    {
        path: SHOP_MAP,
        Component: Shop_map
    },
    {
        path: SPORT_MAP,
        Component: Sport_map
    },
    {
        path: HEALTH_CALENDAR,
        Component: HealthCalendar
    },
   
   
]
export const authRoutes = [
    {
        path: A_GROUP,
        Component: AGroup
    },
    {
        path: A_SHOP_MAP,
        Component: AShopMap
    },
    {
        path: A_CALENDAR_H,
        Component: ACalendarH
    },
    {
        path: A_SPORT_MAP,
        Component: ASportMap
    },
    {
        path: "*",
        component: AMain
    },

    
]
