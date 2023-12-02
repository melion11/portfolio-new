import styled from 'styled-components';
import {Icon} from '../../../../shared/ui/Icon/Icon';
import {IconType} from 'react-icons';
import {font} from '../../../../shared/lib/font/common';
import {theme} from '../../../../styles/theme';

type SkillProps = {
    title: string
    icon: IconType;
    size: string;
    color: string
}

export const Skill = ({icon, title, size, color}:SkillProps) => {
    return (
        <SkillItem>
            <Icon icon={icon} size={size} color={color}/>
            <SkillTitle>{title}</SkillTitle>
        </SkillItem>
    );
};

const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 90px;
  flex-grow: 1;
`

const SkillTitle = styled.h3`
  ${font({color: theme.colors.font, Fmin: 10, Fmax: 12, weight: 700})}
  letter-spacing: 1px;
  text-transform: uppercase;

  @media ${theme.media.tablet} {
    font-weight: var(--font-weight-lite);
  }
  
`
