import {FaGithub, FaLinkedinIn, FaReact, FaTelegram} from 'react-icons/fa';
import {
    SiAxios,
    SiCssmodules,
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
import socialNetwork from '../assets/images/social-network.png'
import counter from '../assets/images/counter.png'
import cards from '../assets/images/cards.png'
import reactPizza from '../assets/images/react-pizza.png'
import taskManager from '../assets/images/taskManager.png'


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
        icon: FaTelegram,
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
];





export const projectsData: ProjectType[] = [
    {
        title: 'Flash cards',
        demoUrl: 'https://team-cards-h4mu-p1r4xtpif-kuleshuladzislau.vercel.app/login',
        githubUrl: 'https://github.com/KuleshUladzislau/Review-cards',
        image: `${cards}`,
        description: `
        It is interactive and customizable platform for learning through flashcards. 
        Users can easily create, organize, and study flashcards on various subjects, 
        enhancing their learning experience and knowledge retention.
        `,
        technologies: [
            'React', 'Redux Toolkit', 'RTK Query', 'TypeScript', 'SCSS Modules',
            'Radix UI', 'React Router v6', 'React Hook Form',
            'Storybook', 'REST API', 'zod', 'vite'
        ],
    },
    {
        title: 'Task Manager',
        demoUrl: 'https://task-manager-7lyqtkus3-melion11.vercel.app/login',
        githubUrl: 'https://github.com/melion11/task-manager',
        image: `${taskManager}`,
        description: `
        It is a list of tasks. You can combine tasks into groups, 
        delete/add new ones, as well as change their names. 
        There is a filter for sorting tasks by the degree of their completion.
        The project is in a development project.
        `,
        technologies: [
            'React', 'Redux Toolkit Query', 'TypeScript', 'React Router v6', 'React Hook Form',
            'Storybook', 'REST API', 'Radix-UI', 'Framer Motion'
        ],
    },
    {
        title: 'Social Network',
        demoUrl: 'https://melion11.github.io/social-network-functional/',
        githubUrl: 'https://github.com/melion11/social-network-functional',
        image: `${socialNetwork}`,
        description: `
        This website project is a possible representation of a social network like VKONTAKTE or Facebook. 
        `,
        technologies: [
            'React', 'Redux Toolkit', 'TypeScript',
            'CSS modules', 'React Router v6', 'Formik', 'Axios', 'REST API'
        ],
    },
    {
        title: 'Counter',
        demoUrl: 'https://melion11.github.io/it-incubator_counter-with-redux/',
        githubUrl: 'https://github.com/melion11/it-incubator_counter-with-redux',
        image: `${counter}`,
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
        demoUrl: 'https://melion11.github.io/pizza-project/',
        githubUrl: 'https://github.com/melion11/pizza-project',
        image: `${reactPizza}`,
        description: `
        React Pizza is an online store where you can choose the pizzas you like and add them to your cart.
        `,
        technologies: [
            'React', 'TypeScript', 'Redux Toolkit', 'React Router v6',
            'Axios',
            'React Hooks',
            'Prettier',
            'CSS-Modules / SCSS',
            'React Content Loader',
            'React Pagination',
            'Lodash.Debounce'
        ],
    },
    {
        title: 'Trainee Project',
        demoUrl: '',
        githubUrl: 'https://github.com/melion11/trainee-proj-ulb',
        image: 'https://placehold.co/375x260',
        description: `
        
        `,
        technologies: [

        ],
    },
];