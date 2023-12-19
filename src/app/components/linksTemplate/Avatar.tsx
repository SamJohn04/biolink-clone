export default function Avatar({avatarSrc, name} : {avatarSrc: string, name: string}) {
    return (
        <img src={avatarSrc} alt={name} className="self-center h-[7.5rem] w-[7.5rem] object-cover rounded-full"/>
    )
}