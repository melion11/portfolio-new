import styled from 'styled-components';
import {GitIcon} from '../../../../assets/icons/GitIcon';
import {LivePreviewIcon} from '../../../../assets/icons/LivePreviewIcon';
import {FlexWrapper} from '../../../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {Button, ThemeButton} from '../../../../shared/ui/Button/Button';
import {font} from '../../../../shared/lib/font/common';
import {theme} from '../../../../styles/theme';

type ProjectProps = {
    title: string
    demoUrl: string
    githubUrl: string
    image: string
    description: string
    technologies: string[]
}

export const Project = ({demoUrl, githubUrl, image, technologies, description, title}: ProjectProps) => {

    return (
        <StyledProject>

            <ImageWrapper>
                <ProjectImage src={image} alt={'project'}/>
                <StyledButton theme={ThemeButton.STYLED}>VIEW PROJECT</StyledButton>
            </ImageWrapper>

            <ProjectWrapper>
                <FlexWrapper direction={'column'}>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectDescription>
                        {description}
                    </ProjectDescription>
                    <ProjectTechnology>
                        <TechTitle>Tech stack: </TechTitle>
                        <TechDescriptions>{technologies.join(', ')}</TechDescriptions>
                    </ProjectTechnology>
                </FlexWrapper>
                <LinksWrapper>
                    <Link href={demoUrl} target={'_blank'}>
                        <LivePreviewIcon/>
                        <LinkTitle>Live preview</LinkTitle>
                    </Link>
                    <Link href={githubUrl} target={'_blank'}>
                        <GitIcon/>
                        <LinkTitle>View code</LinkTitle>
                    </Link>
                </LinksWrapper>
            </ProjectWrapper>
        </StyledProject>
    );
};


const StyledProject = styled.div`
  width: 300px;
  flex-grow: 1;
  border-radius: 20px;
  background: var(--bg-color-dark-light);
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
  
  @media ${theme.media.desktop} {
    max-width: 373px;
  }
  
`

const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    border-radius: 20px 20px 0 0;
    backdrop-filter: blur(2px);
    opacity: 0;
  }
  
  
  &:hover {
    &::before {
      opacity: 1;
    }

    ${StyledButton} {
      opacity: 1;
    }
  }
  
  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${StyledButton} {
      opacity: 1;
    }
  }
  
`


const ProjectImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  height: calc(100% - 260px);
`

const ProjectTitle = styled.h3`
  ${font({weight: 500, Fmin: 24, Fmax: 28})}
`
const ProjectDescription = styled.p`
  ${font({Fmin: 16, Fmax: 18})};
  text-align: justify;
  margin: 17px 0 20px;
`
const ProjectTechnology = styled.div`
  margin-bottom: 21px;
`

const TechTitle = styled.h4`
  ${font({Fmin: 14, Fmax: 16})};
  margin-bottom: 6px;
`

const TechDescriptions = styled.p`
  font-size: var(--font-size-s);
  text-align: justify;
`

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: #f4f2fa;
  
  &:hover {
    color: var(--color-accent-100);
  }
  
`

const LinkTitle = styled.span`
  color: #FFF;
  ${font({Fmin: 14, Fmax: 16})}

  &:hover {
    color: var(--color-accent-100);
  }
`
