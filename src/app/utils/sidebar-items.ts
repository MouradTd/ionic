

const ProfMenu = [
    {
        id: 1,
        name: 'Dashboard',
        route: '/DashboardProf',
        icon: 'home-outline',
        path: 'DashboardProf'
    },
    {
        id: 2,
        name: 'Classes',
        route: '/Prof/Classes',
        icon: 'pie-chart-outline',
        path: 'Classes'
    },
    {
        id: 3,
        name: 'Welcome Prof',
        route: '/welcome',
        icon: 'pie-chart-outline',
        path: 'Welcome'
    },
]
const EtudMenu = [
    {
        id: 1,
        name: 'Dashboard',
        route: '/DashboardProf',
        icon: 'home-outline',
        path: 'DashboardProf'
    },
    {
        id: 2,
        name: 'Classes',
        route: '/classes',
        icon: 'pie-chart-outline',
        path: 'Classes'
    },
    {
        id: 3,
        name: 'Welcome Student',
        route: '/welcome',
        icon: 'pie-chart-outline',
        path: 'Welcome'
    },
]
const AdminMenu = [
    {
        id: 1,
        name: 'Dashboard',
        route: '/DashboardProf',
        icon: 'home-outline',
        path: 'DashboardProf'
    },
    {
        id: 2,
        name: 'Classes',
        route: '/classes',
        icon: 'pie-chart-outline',
        path: 'Classes'
    },
    {
        id: 3,
        name: 'Welcome Admin',
        route: '/welcome',
        icon: 'pie-chart-outline',
        path: 'Welcome'
    },
]

export const sideBar = {
    
ProfMenu,
EtudMenu,
AdminMenu
};