import {Header} from './layout/header/Header';
import {Main} from './layout/sections/main/Main';
import {Skills} from './layout/sections/skills/Skills';
import {SkillsContext} from './context/skillsContext';
import {listIcons, projectsData, socialsLinks} from './data/data';
import {Projects} from './layout/sections/projects/Projects';
import {ProjectsContext} from './context/projectsContext';
import {Contact} from './layout/sections/contact/Contact';
import {Footer} from './layout/footer/Footer';
import {SocialsContext} from './context/socialsContext';
import {Particle} from './shared/ui/Particle/Particle';
import {GoTopBtn} from './shared/ui/GoTopBtn/GoTopBtn';
import {AppLoader} from './shared/ui/AppLoader/AppLoader';
import {usePageLoadedState} from './shared/lib/utils/usePageLoader/usePageLoader';


function App() {

    const [isLoaded] = usePageLoadedState()


    return (
        <ProjectsContext.Provider value={projectsData}>
            <SkillsContext.Provider value={listIcons}>
                <SocialsContext.Provider value={socialsLinks}>
                    <AppLoader isLoaded={isLoaded}>
                        <Particle/>
                        <Header/>
                        <Main/>
                        <Skills/>
                        <Projects/>
                        <Contact/>
                        <Footer/>
                        <GoTopBtn/>
                    </AppLoader>
                </SocialsContext.Provider>
            </SkillsContext.Provider>
        </ProjectsContext.Provider>
    );
}

export default App;

