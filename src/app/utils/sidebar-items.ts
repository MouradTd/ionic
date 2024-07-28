

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
        name: 'Classes cette journé',
        route: '/Prof/Classes',
        icon: 'pie-chart-outline',
        path: 'Classes'
    },
    {
        id: 2,
        name: 'Toute les Classes',
        route: '/all/classes',
        icon: 'pie-chart-outline',
        path: 'Classes'
    },
    // {
    //     id: 2,
    //     name: 'Seances cette journé',
    //     route: '/seance',
    //     icon: 'pie-chart-outline',
    //     path: 'Classes'
    // },
    {
        id: 3,
        name: 'Ajouter Lecons',
        route: '/welcome',
        icon: 'pie-chart-outline',
        path: 'Welcome'
    },
    
]
const EtudMenu = [
    
    {
        id: 2,
        name: 'Seances cette journé',
        route: '/seance',
        icon: 'pie-chart-outline',
        path: 'Classes'
    },
    {
        id: 2,
        name: 'Toute les Seances',
        route: '/all/seance',
        icon: 'pie-chart-outline',
        path: 'Classes'
    },
    {
        id: 2,
        name: 'Lecon',
        route: '/all/seance',
        icon: 'pie-chart-outline',
        path: 'Classes'
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
        name: 'Classes cette journé',
        route: '/classes',
        icon: 'pie-chart-outline',
        path: 'Classes'
    },
    {
        id: 2,
        name: 'Toute les Classes',
        route: '/all/classes',
        icon: 'pie-chart-outline',
        path: 'Classes'
    },
    {
        id: 3,
        name: 'Etudiants',
        route: '/student',
        icon: 'pie-chart-outline',
        path: 'Student'
    },
    {
        id: 3,
        name: 'Sceances',
        route: '/sceance',
        icon: 'pie-chart-outline',
        path: 'Sceances'
    },
]

export const sideBar = {
    
ProfMenu,
EtudMenu,
AdminMenu
};