import { createContext } from 'react';
import { listIcons, SkillType } from '../data/data';

export const SkillsContext = createContext<SkillType[]>(listIcons);