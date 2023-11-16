import {IconProps, IconWrap} from './IconWrap'

export const TgIcon = (allProps: IconProps) => {
    const {svgProps: props, ...restProps} = allProps

    return (
        <IconWrap
            icon={
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <path d="M18.9057 4.76449L16.3705 16.7208C16.1791 17.5644 15.6804 17.7745 14.9717 17.3772L11.1085 14.5305L9.24472 16.3235C9.0383 16.5299 8.86608 16.7022 8.46824 16.7022L8.74607 12.7681L15.9054 6.29885C16.2169 6.02162 15.8376 5.86741 15.4218 6.14524L6.57084 11.7186L2.76043 10.5257C1.93174 10.2671 1.91674 9.69701 2.93325 9.29917L17.837 3.55716C18.5271 3.29854 19.1308 3.71018 18.9057 4.76449Z"
                          fill="#1F1F20"/>
                </svg>
            }
            {...restProps}
        />
    )
}