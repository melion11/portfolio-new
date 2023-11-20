import styled from 'styled-components';
import {FlexWrapper} from '../../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {Skill} from './skill/Skill';
import {useContext} from 'react';
import {SkillsContext} from '../../../context/skillsContext';
import {useTranslation} from 'react-i18next';
import {StyledSubTitle, StyledTitle} from '../../../shared/ui/Styled/StyledTitle/StyledTitle';


export const Skills = () => {

    const {t} = useTranslation()

    const skills = useContext(SkillsContext)

    const skillsElements = skills.map((el,i) => {
        return (
            <Skill key={i} icon={el.icon} title={el.title} color={el.color} size={'70px'}/>
        )
    })

    return (
        <SkillsSection>
            <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                <StyledTitle>{t('myTechStack')}</StyledTitle>
                <StyledSubTitle>{t('techWorking')}</StyledSubTitle>
                <SkillsList>
                    {skillsElements}
                </SkillsList>
            </FlexWrapper>
        </SkillsSection>
    );
};

const SkillsSection = styled.section`
  min-height: 100%;
  background-color: #8f3030;
`
const SkillsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`