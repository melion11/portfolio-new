import {FaGithub, FaLinkedinIn, FaReact, FaTelegram} from 'react-icons/fa';
import {
    SiAntdesign,
    SiAxios,
    SiCssmodules,
    SiFigma,
    SiJest,
    SiMui,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiRedux,
    SiStyledcomponents,
    SiWebpack,
} from 'react-icons/si';
import {AiOutlineCloudServer} from 'react-icons/ai';
import {TbBrandHtml5, TbBrandRadixUi, TbBrandStorybook, TbBrandTypescript} from 'react-icons/tb';
import {DiCss3Full, DiJavascript1, DiSass} from 'react-icons/di';
import {BsGit} from 'react-icons/bs';
import {IconType} from 'react-icons';
import {GitIcon} from '../assets/icons/GitIcon';
import {LinkedIcon} from '../assets/icons/LinkedIcon';
import {TgIcon} from '../assets/icons/TgIcon';
import {ReactNode} from 'react';

export type SkillType = {
    title: string
    icon: IconType
    color: string
};

export type ProjectType = {
    title: string
    demoUrl: string
    githubUrl: string
    image: string
    description: string
    technologies: string[]
}

export type SocialType = {
    icon: IconType
    link: string
};

// export const socialsLinks: SocialType[] = [
//     {
//         icon: <GitIcon/>,
//         link: 'https://github.com/melion11'
//     },
//     {
//         icon: <LinkedIcon/>,
//         link: 'https://www.linkedin.com/in/ilya-grinyak'
//     },
//     {
//         icon: <TgIcon/>,
//         link: 'https://t.me/melion11'
//     }]

export const socialsLinks: SocialType[] = [
    {
        icon: FaGithub,
        link: 'https://github.com/melion11'
    },
    {
        icon: FaLinkedinIn,
        link: 'https://www.linkedin.com/in/ilya-grinyak'
    },
    {
        icon: FaTelegram ,
        link: 'https://t.me/melion11'
    }]


export const listIcons: SkillType[] = [
    {
        title: 'React',
        icon: FaReact,
        color: '#149eca',
    },
    {
        title: 'Redux Toolkit',
        icon: SiRedux,
        color: '#764abc',
    },
    {
        title: 'TypeScript',
        icon: TbBrandTypescript,
        color: '#3077c5',
    },
    {
        title: 'JavaScript',
        icon: DiJavascript1,
        color: '#ffcc33',
    },
    {
        title: 'HTML',
        icon: TbBrandHtml5,
        color: '#c63',
    },
    {
        title: 'CSS',
        icon: DiCss3Full,
        color: '#017dc8',
    },
    {
        title: 'SASS',
        icon: DiSass,
        color: '#cc6699',
    },
    {
        title: 'CSS Modules',
        icon: SiCssmodules,
        color: '#fff',
    },
    {
        title: 'Radix UI',
        icon: TbBrandRadixUi,
        color: '#FFF',
    },
    {
        title: 'Ant Design',
        icon: SiAntdesign,
        color: '#0170fe',
    },
    {
        title: 'Material UI',
        icon: SiMui,
        color: '#0081cb',
    },
    {
        title: 'Styled Components',
        icon: SiStyledcomponents,
        color: '#ffd35b',
    },
    {
        title: 'Storybook',
        icon: TbBrandStorybook,
        color: '#f1618c',
    },
    {
        title: 'React Router',
        icon: SiReactrouter,
        color: '#f44250',
    },
    {
        title: 'React Hook Form',
        icon: SiReacthookform,
        color: '#ec5990',
    },
    {
        title: 'React Query',
        icon: SiReactquery,
        color: '#ff4154',
    },
    // {
    //     title: 'Apollo',
    //     icon: SiApollographql,
    //     color: '#fff',
    // },
    // {
    //     title: 'Graph QL',
    //     icon: SiGraphql,
    //     color: '#fff',
    // },
    {
        title: 'Jest',
        icon: SiJest,
        color: '#c53d17',
    },
    {
        title: 'Axios',
        icon: SiAxios,
        color: '#5a29e4',
    },
    {
        title: 'REST API',
        icon: AiOutlineCloudServer,
        color: '#39a6dd',
    },
    {
        title: 'Git',
        icon: BsGit,
        color: '#f44c28',
    },
    {
        title: 'Webpack',
        icon: SiWebpack,
        color: '#1c78c1',
    },
    {
        title: 'Figma',
        icon: SiFigma,
        color: '#a259ff',
    },
];


export const projectsData: ProjectType[] = [
    {
        title: 'Flash cards',
        demoUrl: '',
        githubUrl: '',
        image: 'https://placehold.co/375x260',
        description: `
        It is interactive and customizable platform for learning through flashcards. 
        Users can easily create, organize, and study flashcards on various subjects, 
        enhancing their learning experience and knowledge retention.
        `,
        technologies: [
            'React', 'Redux Toolkit', 'RTK Query', 'TypeScript', 'CSS Modules',
            'Radix UI', 'React Router Dom 6', 'React Hook Form',
            'Storybook',  'REST API', 'react-toastify', 'zod', 'vite'
        ],
    },
    {
        title: 'Task Manager',
        demoUrl: '',
        githubUrl: '',
        image: 'https://placehold.co/375x260',
        description: `
        It is a list of tasks. You can combine tasks into groups, 
        delete/add new ones, as well as change their names. 
        There is a filter for sorting tasks by the degree of their completion.
        The project is in a development project.
        `,
        technologies: [
            'React', 'Redux Toolkit', 'TypeScript', 'Styled components',
            'Material UI', 'React Router Dom 6', 'React Hook Form',
            'Storybook', 'Jest', 'Axios', 'REST API',
        ],
    },
    {
        title: 'Social Network',
        demoUrl: '',
        githubUrl: '',
        image: 'https://placehold.co/375x260',
        description: `
        This website project is a possible representation of a social network like VKONTAKTE or Facebook. 
        `,
        technologies: [
            'React', 'Redux', 'Redux Thunk', 'TypeScript',
            'CSS modules', 'SCSS', 'React Router Dom 5', 'Redux Form', 'Reselect', 'Axios', 'REST API'
        ],
    },
    {
        title: 'Counter',
        demoUrl: '',
        githubUrl: '',
        image: 'https://placehold.co/375x260',
        description: `
        Counter is a test project which (to tell the truth) 
        doesn't have a lot of practical use. It allows to do some settings which influence 
        on the way how the counter works.
        `,
        technologies: [
            'React', 'Redux', 'Redux Thunk', 'TypeScript', 'CSS modules'
        ],
    },
    {
        title: 'React Pizza',
        demoUrl: '',
        githubUrl: '',
        image: 'https://placehold.co/375x260',
        description: `
        Counter is a test project which (to tell the truth) 
        doesn't have a lot of practical use. It allows to do some settings which influence 
        on the way how the counter works.
        `,
        technologies: [
            'React', 'Redux', 'Redux Thunk', 'TypeScript', 'CSS modules'
        ],
    },
    {
        title: 'Trainee Project',
        demoUrl: '',
        githubUrl: '',
        image: 'https://placehold.co/375x260',
        description: `
        Counter is a test project which (to tell the truth) 
        doesn't have a lot of practical use. It allows to do some settings which influence 
        on the way how the counter works.
        `,
        technologies: [
            'React', 'Redux', 'Redux Thunk', 'TypeScript', 'CSS modules'
        ],
    },
];