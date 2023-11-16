import styled from 'styled-components';
import {Icon} from '../../../../shared/ui/Icon/Icon';
import {GitIcon} from '../../../../assets/icons/GitIcon';
import {LivePreviewIcon} from '../../../../assets/icons/LivePreviewIcon';
import {FlexWrapper} from '../../../../shared/ui/FlexWrapper/FlexWrapper';

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
            <FlexWrapper direction={'column'}>
                <ProjectImage src={image} alt={'project'}/>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>
                    {description}
                </ProjectDescription>
                <ProjectTechnology>
                    {technologies}
                </ProjectTechnology>
            </FlexWrapper>

            <FlexWrapper align={'center'} gap={'10px'}>
                <FlexWrapper align={'center'}>
                    <LinkIcon><LivePreviewIcon/></LinkIcon>
                    <Link href={demoUrl}>Live preview</Link>
                </FlexWrapper>
                <FlexWrapper align={'center'}>
                    <LinkIcon><GitIcon/></LinkIcon>
                    <Link href={githubUrl}>View code</Link>
                </FlexWrapper>
            </FlexWrapper>
        </StyledProject>
    );
};


const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 373px;
  width: 100%;
  background-color: #397df6;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const ProjectTitle = styled.div`

`
const ProjectDescription = styled.div`

`
const ProjectTechnology = styled.div`

`

const Link = styled.a`
  text-decoration: none;
`

const LinkIcon = styled.div`

`