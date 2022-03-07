import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';

export const SidebarData = [
    {
        name: 'Analytics',
        path: '/analytics',
        cName: "nav-item",
        icon: <IoIcons.IoAnalytics />
    },
    {
        name: 'Entities',
        path: '/entities',
        cName: "nav-item",
        icon: <IoIcons.IoPrismOutline />

    },
    {
        name: 'Applicatons',
        path: '/applications',
        cName: "nav-item",
        icon: <IoIcons.IoApps />

    },
    {
        name: "Cases",
        path: "/cases",
        cName: "nav-item",
        icon: <IoIcons.IoBriefcaseSharp />
        
    },
    {
        name: "Workflows",
        path: "/workflows",
        cName: "nav-item",
        icon: <IoIcons.IoTrailSignSharp />
    },
    {
        name: "Settings",
        path: "/settings",
        cName: "nav-item",
        icon: <IoIcons.IoOptionsSharp />,
        iconOpened: <IoIcons.IoCaretUp />,
        iconClosed: <IoIcons.IoCaretDown />,
        subNav: [
            {
                title: 'Account',
                path: '/settings/account',
                class: 'sub-item',
                icon: <IoIcons.IoPersonCircle />
            },
            {
                title: 'Workflow',
                path: '/settings/workflow',
                class: 'sub-item',
                icon: <IoIcons.IoLayersSharp />
            },
            {
                title: 'Tools',
                path: '/settings/tools',
                class: 'sub-item',
                icon: <IoIcons.IoBuild />
            },
            {
                title: 'Testing',
                path: '/settings/testing',
                class: 'sub-item',
                icon: <IoIcons.IoFlask />
            },
            {
                title: 'Webhooks',
                path: '/settings/webhooks',
                class: 'sub-item',
                icon: <IoIcons.IoReceiptSharp />
            },
            {
                title: 'Intergrations',
                path: '/settings/integrations',
                class: 'sub-item',
                icon: <IoIcons.IoToggleSharp />
            },
            {
                title: 'Lists',
                path: '/settings/lists',
                class: 'sub-item',
                icon: <IoIcons.IoListOutline />
            }
        ]
    },
    {   
        name: "Support",
        path: "/support",
        cName: "nav-item",
        icon: <IoIcons.IoHelpBuoySharp />
    }
];