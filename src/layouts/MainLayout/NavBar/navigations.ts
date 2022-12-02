export interface NavigationInterface {
    header: string;
    items: string[];
}

export const navigations: NavigationInterface[] = [
    {
        header: 'Favorites',
        items: [
            'Marketing',
            'Mobile App',
        ]
    },
    {
        header: 'My Projects',
        items: [
            'Marketing',
            'Landing Pages',
            'Wedding',
            'Mobile App',
            'House Construction',
        ]
    },
]
