import UserLink from "../../types/linksTemplate/UserLink";

export default function LinkCard({ link, title, imgSrc } : UserLink) {
    return(
        <a href={link} target="_blank" rel="noreferrer">
            <div className="box-content grid place-items-center grid-cols-6 bg-[#201e2c] text-white py-[0.1rem] px-4 rounded-md transition-all duration-200 hover:scale-[1.05]">
                {imgSrc && <img src={imgSrc} alt={title} className="place-self-start self-center h-8"/>}
                <h4 className="col-span-4 col-start-2 my-[1.33em] font-bold">{title}</h4>
            </div>
        </a>
    )
}