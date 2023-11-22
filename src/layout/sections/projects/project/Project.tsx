import styled from 'styled-components';
import {GitIcon} from '../../../../assets/icons/GitIcon';
import {LivePreviewIcon} from '../../../../assets/icons/LivePreviewIcon';
import {FlexWrapper} from '../../../../shared/ui/Styled/FlexWrapper/FlexWrapper';
import {Button, ThemeButton} from '../../../../shared/ui/Button/Button';

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
  max-width: 373px;
  width: 32%;
  border-radius: 20px;
  background: var(--bg-color-dark-light);
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
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
  
  &:hover {
    &::before {
      opacity: 1;
    }
    
    ${StyledButton} {
      opacity: 1;
    }
    
  }
  
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
  font-size: var(--font-size-ll);
  font-weight: var(--font-weight-medium);
  margin-bottom: 17px;
`
const ProjectDescription = styled.p`
  margin-bottom: 12px;
`
const ProjectTechnology = styled.div`
  margin-bottom: 21px;
`

const TechTitle = styled.h4`
  font-size: var(--font-size-ss);
  font-weight: var(--font-weight-regular);
`

const TechDescriptions = styled.p`
  font-size: var(--font-size-s);
`

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 3px;
`

const LinkTitle = styled.span`
  color: #FFF;
  font-size: var(--font-size-ss);
  font-weight: var(--font-weight-regular);
  
  &:hover {
    text-decoration-line: underline;
  }
`
