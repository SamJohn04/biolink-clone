import IconLink from "../types/linksTemplate/IconLink";
import Template from "../components/linksTemplate/Template";
import UserLink from "../types/linksTemplate/UserLink";

export default function LinkPage({ params }: {params: {username: string}}) {
    const getUserDetails = (username: string) => {
        // !!TODO!!
        const userDetails: {
            avatarSrc: string,
            name: string,
            links: UserLink[],
            iconLinks: IconLink[]
        } = {
            avatarSrc: 'https://samuel-john-bio.vercel.app/avatar.jpg',
            name: 'Samuel John',
            links: [{
                link: "https://pypi.org/project/terminal-styler/",
                title: "Terminal Styler",
                imgSrc: 'https://samuel-john-bio.vercel.app/stylet.png'
            }, {
                link: "https://github.com/SamJohn04/code-craft-sih",
                title: "Project Orbit",
                imgSrc: 'https://samuel-john-bio.vercel.app/project-orbit.png',
                focus: true
            }],
            iconLinks: [{
                    iconName: 'GitHub',
                    link: "https://github.com/SamJohn04"
                }, {
                    iconName: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/samuel-john-329b08246/'
                }]
        }
        return userDetails
    }
    
    const userDetails = getUserDetails(params.username);
    return (
        <div className="h-screen w-[95vw] max-w-[1000px] m-auto pt-4">
            <Template {...userDetails}/>
        </div>
    )
}