import {theme} from '../../../styles/theme';

type SizeProps = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmax?: number
    Fmin?: number
}


export const font = ({lineHeight, color, family, weight, Fmin, Fmax}: SizeProps) => `
    font-family: ${family || '"Poppins", sans-serif'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`



// type SizeProps = {
//     family?: string
//     weight?: number
//     color?: string
//     lineHeight?: number
//     PxMax: number
//     PxMin: number
//     Vmax: number
//     Vmin: number
// }

// export const changeSize = ({PxMin, PxMax, Vmax = 1440, Vmin = 360}: SizeProps) => {
//     const variablePart = (PxMax - PxMin) / (Vmax - Vmin);
//     const rem = parseFloat(((PxMax - Vmax * variablePart) / 16).toFixed(3))
//     const  vw = parseFloat((100 * variablePart).toFixed(2))
//
//     return `clamp(${PxMin}px, ${rem}rem + ${vw}vw, ${PxMax}px`
// }
//
// export const font = ({lineHeight, color, family, weight, PxMin, PxMax, Vmax, Vmin}: SizeProps) => `
//     font-family: ${family || '"Poppins", sans-serif'};
//     font-weight: ${weight || 400};
//     color: ${color || theme.colors.font};
//     line-height: ${lineHeight || 1.2};
//
//     font-size: ${changeSize({PxMax, PxMin, Vmax, Vmin})};
// `