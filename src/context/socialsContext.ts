import {createContext} from 'react';
import {socialsLinks, SocialType} from '../data/data';

export const SocialsContext = createContext<SocialType[]>(socialsLinks)