interface Props {
    link_name: string,
    icon: any
}

const LeftLink = (props:Props) => {
    return(
        <div className="flex gap-4 hover:bg-gray-400 px-4 py-2 cursor-pointer hover:bg-opacity-40 rounded-3xl">
           {props.icon}

            
            <div className="text-white text-[20px] font-semibold">{props.link_name}</div>

        </div>
    )
}

export default LeftLink