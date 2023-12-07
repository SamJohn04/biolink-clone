import Avatar from "./Avatar";
import IconLink from "../../types/linksTemplate/IconLink";
import IconLinks from "./IconLinks";
import LinkCard from "./LinkCard";
import UserLink from "../../types/linksTemplate/UserLink";


export default function Template({avatarSrc, name, links, iconLinks}: {avatarSrc: string, name: string, links: UserLink[], iconLinks: IconLink[]}) {
    return (
        <div className="text-center flex flex-col items-stretch gap-4">
            <Avatar avatarSrc={avatarSrc} name={name}/>
            <h2 className="font-bold text-3xl">{name}</h2>
            <IconLinks iconLinks={iconLinks}/>
            {/* <IconLinks />
            <h3>Projects</h3>
            <LinkCard link = "https://pypi.org/project/terminal-styler/" title = "Terminal Styler" imgSrc="stylet.png"/>
            <LinkCard link = "https://github.com/SamJohn04/code-craft-sih" title = "Project Orbit" imgSrc="project-orbit.png"/>
            <h3>Contact Me</h3>
            <LinkCard link = "https://calendly.com/samuel-john-codes" title = "Let's talk!" imgSrc="talk.png"/> */}
            { links.map((link, index) => <LinkCard {...link} key={index}/>) }
        </div>
    );
}