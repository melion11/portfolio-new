import styled from 'styled-components';
import {Icon} from '../../../../shared/ui/Icon/Icon';
import {IconType} from 'react-icons';

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
  width: 16%;
`

const SkillTitle = styled.h3`
  color: var(--secondary-color);
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 1px;
  text-transform: uppercase;
`