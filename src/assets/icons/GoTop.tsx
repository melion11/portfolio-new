import {IconProps} from './IconWrap'

export const GoTop = (allProps: IconProps) => {
    const {svgProps: props} = allProps

    return (
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <g fill="currentColor">
                        <path d="M30 20 L16 8 2 20" />
                    </g>
                </svg>
    )
}