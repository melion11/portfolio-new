import styled from 'styled-components';
import {FlexWrapper} from '../../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {StyledSubTitle, StyledTitle} from '../../../shared/ui/Styled/StyledTitle/StyledTitle';
import {useTranslation} from 'react-i18next';
import {useContext} from 'react';
import {ProjectsContext} from '../../../context/projectsContext';
import {Project} from './project/Project';

export const Projects = () => {
    const projects = useContext(ProjectsContext)
    const {t} = useTranslation()

    const projectsElements = projects.map((el, i) => {
        return (
            <Project key={i} title={el.title} demoUrl={el.demoUrl} description={el.description}
                     githubUrl={el.githubUrl} image={el.image} technologies={el.technologies}
            />
        )
    })

    return (
        <ProjectsSection>
            <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                <StyledTitle>{t('projects')}</StyledTitle>
                <StyledSubTitle>{t('things')}</StyledSubTitle>
                <FlexWrapper justify={'space-around'} wrap={'wrap'} gap={'20px'}>
                    {projectsElements}
                </FlexWrapper>
            </FlexWrapper>
        </ProjectsSection>
    );
};

const ProjectsSection = styled.section`
  min-height: 100vh;
  background-color: #ffc864;
`