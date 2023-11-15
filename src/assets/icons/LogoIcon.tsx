import {IconProps, IconWrap} from './IconWrap'

export const LogoIcon = (allProps: IconProps) => {
    const {svgProps: props, ...restProps} = allProps

    return (
        <IconWrap
            icon={
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <circle id="Ellipse 1" cx="20" cy="20" r="20" fill="url(#paint0_linear_13_3051)"/>
                    <defs>
                        <linearGradient id="paint0_linear_13_3051" x1="34" y1="-1.84178e-06" x2="7" y2="40"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#B75CFF"/>
                            <stop offset="1" stopColor="#671AE4"/>
                        </linearGradient>
                    </defs>
                </svg>
            }
            {...restProps}
        />
    )
}