import styled from 'styled-components';
import {GoTop} from '../../../assets/icons/GoTop';
import {animateScroll as scroll} from 'react-scroll/modules';
import {useEffect, useState} from 'react';

export const GoTopBtn = () => {

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setIsShow(true) : setIsShow(false)
        })
    }, [])

    if (!isShow) {
        return null
    }

    return (
        <StyledGoTopBtn onClick={scroll.scrollToTop}>
            <GoTop/>
        </StyledGoTopBtn>
    );
};

const StyledGoTopBtn = styled.button`
  padding: 8px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: none;
  font: inherit;
  color: var(--go-btn-color);
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: var(--go-btn-color-hover);
  }

`