import Template from "../components/linksTemplate/Template";
import IconLink from "../types/linksTemplate/IconLink";
import UserLink from "../types/linksTemplate/UserLink";

export default function Dashboard() {
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

    const userDetails = getUserDetails('TODO This User')
    return (
        <div className="grid md:grid-cols-5 min-h-screen w-screen">
            <div className="col-span-2 h-full flex justify-center items-center">
                <div className="flex p-8 border-black border-8 rounded-[2.5rem] w-[22.5rem] h-[47.5rem]">
                    <Template {...userDetails}/>
                </div>
            </div>
            <div className="col-span-3"></div>
        </div>
    )
}