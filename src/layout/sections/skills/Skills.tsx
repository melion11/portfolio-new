import styled from 'styled-components';
import {FlexWrapper} from '../../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {Skill} from './skill/Skill';
import {useContext} from 'react';
import {SkillsContext} from '../../../context/skillsContext';
import {useTranslation} from 'react-i18next';
import {StyledSubTitle, StyledTitle} from '../../../shared/ui/Styled/StyledTitle/StyledTitle';
import {Container} from '../../../shared/ui/Styled/Container/Container';


export const Skills = () => {

    const {t} = useTranslation()

    const skills = useContext(SkillsContext)

    const skillsElements = skills.map((el, i) => {
        return (
            <Skill key={i} icon={el.icon} title={el.title} color={el.color} size={'70px'}/>
        )
    })

    return (
        <SkillsSection>
            <Container>
                <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                    <StyledTitle>{t('myTechStack')}</StyledTitle>
                    <StyledSubTitle>{t('techWorking')}</StyledSubTitle>
                    <SkillsList>
                        {skillsElements}
                    </SkillsList>
                </FlexWrapper>
            </Container>
        </SkillsSection>
    );
};

const SkillsSection = styled.section`
  background-color: var(--bg-color-dark);
  position: relative;
`
const SkillsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`