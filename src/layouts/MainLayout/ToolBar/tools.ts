export interface ToolInterface {
    title: string;
    icon: string;
    isActive: boolean;
}

export const tools: ToolInterface[] = [
    {
        title: 'Roadmap',
        icon: 'roadmap.svg',
        isActive: false,
    },
    {
        title: 'Schedule',
        icon: 'schedule.svg',
        isActive: true,
    },
    {
        title: 'Tasks',
        icon: 'tasks.svg',
        isActive: false,
    },
    {
        title: 'Notes',
        icon: 'notes.svg',
        isActive: false,
    },
    {
        title: 'Files',
        icon: 'files.svg',
        isActive: false,
    },
]
