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
            <h3>{title}</h3>
        </SkillItem>
    );
};

const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`