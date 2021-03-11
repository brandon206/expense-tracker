const routes = [
    {
        path: '/',
        component: () => import ('../Pages/Overview.vue'),
        name: 'overview',
    },
    // {
    //     path: '/ledger',
    //     component: () => import ('../Pages/Ledger.vue'),
    //     name: 'ledger',
    // },
    {
        path: '/ledger/:id',
        component: () => import ('../Pages/Ledger.vue'),
        name: 'ledger',
    },
    {
        path: '/calendar',
        component: () => import ('../Pages/Calendar.vue'),
        name: 'calendar',
    },
    {
        path: '/about',
        component: () => import ('../Pages/About.vue'),
        name: 'about',
    },
];

export default routes;