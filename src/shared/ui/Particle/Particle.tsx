import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
    }, []);

    const configs = {
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 1,
                },
            },
        },
        particles: {
            move: {
                enable: true,
                speed: {min: 1, max: 2}
            },
            color: {
                value: "#fff"
            },
            number: {
                density: {
                    enable: true,
                    area: 8000
                },
                limit: 0,
                value: 100
            },
            opacity: {
                animation: {
                    enable: true,
                    minimumValue: 0.05,
                    speed: 0.25,
                    sync: false
                },
                random: {
                    enable: true,
                    minimumValue: 0.05
                },
                value: 1
            },
            shape: {
                // type: "star"
                type: "image",
                image: {
                    src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
                }
            },
            size: {
                random: {
                    enable: true,
                    minimumValue: 10
                },
                value: 15
            }
        }
    }


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={configs}
        />
    );
};


