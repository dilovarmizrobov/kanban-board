import { v4 as uuidv4 } from 'uuid';
import {BoardTypeEnum} from "../../utils/enums";

export interface BoardInterface {
    type: BoardTypeEnum;
    title: string;
    cards: BoardCardInterface[];
}

export interface BoardCardInterface {
    id: string;
    title: string;
    time: string;
    color: string;
}

export interface BoardCardDragInterface {
    id: string;
    boardType: BoardTypeEnum;
}

export const boards: BoardInterface[] = [
    {
        type: BoardTypeEnum.NEW_TASK,
        title: 'New task',
        cards: [
            {
                id: uuidv4(),
                title: 'Check email',
                time: '0:20h',
                color: '#ABE9CE',
            },
            {
                id: uuidv4(),
                title: 'Compare PPC agencies and make a report for Steven',
                time: '3:00h',
                color: '#D8DCFF',
            },
            {
                id: uuidv4(),
                title: 'Meeting with Amanda (PR department)',
                time: '0:30h',
                color: '#ABE9CE',
            },
            {
                id: uuidv4(),
                title: 'Get Patrick\'s approval for homepage new design',
                time: '0:20h',
                color: '#D8DCFF',
            },
        ],
    },
    {
        type: BoardTypeEnum.SCHEDULED,
        title: 'Scheduled',
        cards: [
            {
                id: uuidv4(),
                title: 'Check email',
                time: '0:20h',
                color: '#FFDFBA',
            },
            {
                id: uuidv4(),
                title: 'Write a blogpost "7 best strategies for SEO in 2020"',
                time: '5:00h',
                color: '#FEC6B7',
            },
            {
                id: uuidv4(),
                title: 'New Ad copies for Manamaja',
                time: '2:00h',
                color: '#D9E6A2',
            },
        ],
    },
    {
        type: BoardTypeEnum.IN_PROGRESS,
        title: 'In progress',
        cards: [
            {
                id: uuidv4(),
                title: 'Check email',
                time: '0:20h',
                color: '#FFDFBA',
            },
            {
                id: uuidv4(),
                title: 'Record a video comment about last week\'s analytics report',
                time: '0:20h',
                color: '#F2BAE1',
            },
            {
                id: uuidv4(),
                title: 'Process all resumes for Content Marketer position',
                time: '1:00h',
                color: '#FFDFBA',
            },
        ],
    },
    {
        type: BoardTypeEnum.COMPLETED,
        title: 'Completed',
        cards: [
            {
                id: uuidv4(),
                title: 'Check email',
                time: '0:20h',
                color: '#FFDFBA',
            },
            {
                id: uuidv4(),
                title: 'Weekly planning session',
                time: '0:45h',
                color: '#FEC6B7',
            },
            {
                id: uuidv4(),
                title: 'Create 5+ target audiences in Facebook for Samsung ...',
                time: '2:30h',
                color: '#ABE9CE',
            },
            {
                id: uuidv4(),
                title: 'Check FB Banner Design and give feedback',
                time: '0:20h',
                color: '#F2BAE1',
            },
            {
                id: uuidv4(),
                title: 'Check email',
                time: '0:20h',
                color: '#ABE9CE',
            },
        ],
    },
];
