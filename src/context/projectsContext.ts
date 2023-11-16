import { createContext } from 'react';
import {projectsData, ProjectType} from '../data/data';

export const ProjectsContext = createContext<ProjectType[]>(projectsData)