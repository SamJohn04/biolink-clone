import { GitHub, Mail, LinkedIn, WhatsApp } from "@mui/icons-material";
import IconLink from "../../types/linksTemplate/IconLink";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export default function IconLinks({ iconLinks }: { iconLinks: IconLink[] }) {
    const icons: Record<string, OverridableComponent<SvgIconTypeMap<{}, "svg">>> = {
        GitHub,
        Mail,
        LinkedIn,
        WhatsApp
    }
    return (
        <div className="flex gap-4 justify-center pb-8">
            {iconLinks.map((link, index) => {
                const Icon = icons[link.iconName]
                return (<a key={index} href={link.link} target="_blank" rel="noreferrer" className="transition-all duration-200 hover:scale-[1.1] h-full w-auto"><Icon fontSize="large"/></a>)
            })}
        </div>
    )
}