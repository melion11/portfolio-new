import { AnimatePresence, motion } from "framer-motion";
import {ReactNode} from 'react';
import styled from 'styled-components';

type AppLoaderPropsType = {
    children: ReactNode;
    isLoaded: boolean;
};

export const AppLoader = ({ children, isLoaded }: AppLoaderPropsType) => {
    return (
        <AnimatePresence mode={"wait"}>
            <motion.div key={"app"}>{children}</motion.div>
            {!isLoaded && (
                <Container
                    initial={{
                        opacity: 1,
                    }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.35 },
                    }}
                    exit={{
                        scale: 2,
                        opacity: 1,
                        transition: { duration: 0.5 },
                    }}
                    key={"app-loader"}
                >
                    <Loader></Loader>
                </Container>
            )}
        </AnimatePresence>
    );
};

const Container = styled(motion.div)`
  z-index: 1000000;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-color-dark);
`


const Loader = styled.span`
  position: relative;
  border: 24px solid;
  border-color: #fff transparent #fff transparent;
  animation: rotate 2s linear infinite;

  &::before,
  &::after {
    content: "";
    display: block;
    border: 24px solid transparent;
    border-left-color: #fff;
    position: absolute;
    left: -24px;
    top: -24px;
    animation: prix 1s infinite ease-in;
    transform-origin: 0 100%;
  }

  &:before {
    border-color: transparent #fff transparent transparent;
    transform-origin: 100% 0;
    animation-delay: 0.5s;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes prix {
    20%,
    80% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(-90deg);
    }
  }
`