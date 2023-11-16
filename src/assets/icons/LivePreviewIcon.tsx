import {IconProps, IconWrap} from './IconWrap'

export const LivePreviewIcon = (allProps: IconProps) => {
    const {svgProps: props, ...restProps} = allProps

    return (
        <IconWrap
            icon={
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <g id="akar-icons:link-chain">
                        <g id="Group">
                            <path id="Vector" d="M11.2867 8.71333C10.6041 8.03103 9.67846 7.64774 8.71334 7.64774C7.74821 7.64774 6.82259 8.03103 6.14 8.71333L3.56584 11.2867C2.88324 11.9693 2.49976 12.8951 2.49976 13.8604C2.49976 14.8258 2.88324 15.7516 3.56584 16.4342C4.24844 17.1168 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1168 8.71334 16.4342L10 15.1475" stroke="#FCFCFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path id="Vector_2" d="M8.71338 11.2867C9.39597 11.969 10.3216 12.3523 11.2867 12.3523C12.2518 12.3523 13.1775 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5003 7.10493 17.5003 6.13959C17.5003 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8258 2.49976 13.8605 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L10 4.8525" stroke="#FCFCFC" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </g>
                </svg>
            }
            {...restProps}
        />
    )
}