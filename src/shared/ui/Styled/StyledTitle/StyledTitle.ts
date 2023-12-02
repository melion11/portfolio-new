import styled from 'styled-components';
import {font} from '../../../lib/font/common';
import {theme} from '../../../../styles/theme';

export const StyledTitle = styled.h2`
  ${font({color: theme.colors.secondary, Fmin: 28, Fmax: 48})}
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-m);
  font-style: normal;
  text-align: center;
  margin-bottom: 25px;
`

export const StyledSubTitle = styled.h3`
  ${font({color: theme.colors.subFont, Fmin: 20, Fmax: 32})}
  text-align: center;
  font-style: normal;
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-m);
  margin-bottom: 45px;
`