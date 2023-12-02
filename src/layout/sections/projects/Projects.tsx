import styled from 'styled-components';
import {FlexWrapper} from '../../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {StyledSubTitle, StyledTitle} from '../../../shared/ui/Styled/StyledTitle/StyledTitle';
import {useTranslation} from 'react-i18next';
import {useContext} from 'react';
import {ProjectsContext} from '../../../context/projectsContext';
import {Project} from './project/Project';
import {Container} from '../../../shared/ui/Styled/Container/Container';

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
        <ProjectsSection id={'projects'}>
            <Container>
                    <StyledTitle>{t('projects')}</StyledTitle>
                    <StyledSubTitle>{t('things')}</StyledSubTitle>
                    <FlexWrapper justify={'space-between'} wrap={'wrap'} gap={'20px'}>
                        {projectsElements}
                    </FlexWrapper>
            </Container>
        </ProjectsSection>
    );
};

const ProjectsSection = styled.section`
  background-color: var(--bg-color-dark);
  position: relative;
`