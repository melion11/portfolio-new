import { IconProps, IconWrap } from './IconWrap'

export const LogoIcon = (allProps: IconProps) => {
    const { svgProps: props, ...restProps } = allProps

    return (
        <IconWrap
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    version="1.1"
                    {...props}
                >
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(90)">
                            <stop offset="-2.06%" stopColor="#42b2e8" />
                            <stop offset="100%" stopColor="#5dde65" />
                        </linearGradient>
                    </defs>
                    <g id="surface1">
                        <path
                            style={{ stroke: 'none', fillRule: 'nonzero', fill: 'url(#gradient)', fillOpacity: 1 }}
                            d="M 26.070312 30.59375 L 23.714844 28.238281 L 31.976562 20 L 23.796875 11.84375 L 26.15625 9.488281 L 36.667969 20 Z M 13.929688 30.59375 L 16.285156 28.238281 L 8.023438 20 L 16.203125 11.84375 L 13.84375 9.488281 L 3.332031 20 Z M 13.929688 30.59375 "
                        />
                    </g>
                </svg>
            }
            {...restProps}
        />
    )
}
