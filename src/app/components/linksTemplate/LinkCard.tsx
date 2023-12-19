import UserLink from "../../types/linksTemplate/UserLink";

//bg-[#201e2c] text-white

export default function LinkCard({ link, title, imgSrc, focus } : UserLink) {
    return(
        <a href={link} target="_blank" rel="noreferrer" className={focus ? 'template-box-focused' : ''}>
            <div className='box-content grid place-items-center grid-cols-6 py-[0.1rem] px-4 rounded-md transition-all duration-200 hover:scale-[1.05] border-grey border-2 shadow-md hover:shadow-lg'>
                {imgSrc && <img src={imgSrc} alt={title} className="place-self-start self-center h-8"/>}
                <h4 className="col-span-4 col-start-2 my-[1.33em] font-bold">{title}</h4>
            </div>
        </a>
    )
}