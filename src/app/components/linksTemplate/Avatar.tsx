export default function Avatar({avatarSrc, name} : {avatarSrc: string, name: string}) {
    return (
        <img src={avatarSrc} alt={name} className="self-center h-[10rem] w-[10rem] object-cover rounded-full"/>
    )
}