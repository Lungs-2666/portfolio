    import styles from "./page.module.css";
    import NavBar from "@/components/NavBar/NavBar";
    import { ArrowDownToLine } from "lucide-react";
    import OrbitImagesUsage from "@/components/OrbitImages/OrbitImagesUsage";
    import RotatingTextComponent from "@/components/RotatingText/rotatingTextComponent";
    import ProjectCard from "@/components/ProjectCard/ProjectCard";
    import Link from "next/link";
    import MaskedText from "@/components/MaskedText/MaskedTextUsage";

    export default function Home() {
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <section className={styles.hero_page}>
                        <div className={styles.hero_top}></div>

                        <div className={styles.hero_heading}>
                            <h1>Stolyarov Timophey</h1>
                        </div>

                        <p className={styles.hero_about}>
                            Hi there!   <br />
                            I am a <RotatingTextComponent/> <br />
                            from Pyatigorsk, Russia.
                            Passionate about creating web- & fullstack-applications.
                        </p>

                        <NavBar />

                        <div className={styles.hero_btns}>
                            <a 
                                href="https://github.com/Lungs-2666"
                                className={styles.hero_link}
                            > 
                                <img src="/icons/icons-github.png" alt="github_icon" /> 
                            </a>

                            <button className={styles.hero_btn_resume}> 
                                Resume
                                <ArrowDownToLine 
                                    size={24}
                                    strokeWidth={1.3}
                                />
                            </button>
                        </div>
                    </section>

                    <section className={styles.skills_page}>
                        <h2 className={styles.skills_heading}> My Skills: </h2>

                        <OrbitImagesUsage />
                    </section>

                    <section id="featured_projects" className={styles.projects_page}>
                        <h2 className={styles.projects_heading}> Featured Projects: </h2>

                        <div className={styles.projects_cards}>
                            <ProjectCard 
                                cardWidth='60%'
                                cardImg='/screenshots/echo-link.png'
                                cardTitle='Echo Link'
                                cardDesc='Lorem ipsum dolor sit
                                amet consectetur adipisicing elit.
                                Molestiae, praesentium.'
                                cardLink='https://github.com/Lungs-2666/echo-link'
                                cardLinkLive='https://echo-link-c8to.onrender.com'
                                isLive={true}
                            />

                            <ProjectCard 
                                cardWidth='60%'
                                cardImg='/screenshots/navigator.png'
                                cardTitle='Career Navigator'
                                cardDesc='Lorem ipsum dolor sit
                                amet consectetur adipisicing elit.
                                Molestiae, praesentium.'
                                cardLink='https://github.com/Lungs-2666/Career-Navigator'
                                cardLinkLive='' //link from Vercel or Render
                                isLive={false}
                            />

                            <ProjectCard 
                                cardWidth='60%'
                                cardImg='/screenshots/fit-day.png'
                                cardTitle='Fit Day'
                                cardDesc='Lorem ipsum dolor sit
                                amet consectetur adipisicing elit.
                                Molestiae, praesentium.'
                                cardLink='https://github.com/Lungs-2666/fit_day'
                                cardLinkLive='https://fit-fycki7w32-focuusmes-projects.vercel.app/'
                                isLive={true}
                            />

                            {/* <ProjectCard 
                                cardWidth='50%'
                                cardImg='/noimage'
                                cardTitle='Healing Recipes' 
                                cardDesc='Lorem ipsum dolor sit
                                amet consectetur adipisicing elit.
                                Molestiae, praesentium.'
                                cardLink='https://github.com/Lungs-2666/HealingRecipes_app'
                                cardLinkLive='' //link from "onrender.com"
                            /> */}
                        </div>
                    </section>

                    <section id="contacts" className={styles.contacts_page}>
                        <h2 className={styles.contacts_heading}> Contacts: </h2>

                        <div className={styles.contacts_main_grp}>
                            <div className={styles.contacts_grp_1}>
                                <Link href="" className={styles.contacts_link}> telegram </Link>
                                <Link href="" className={styles.contacts_link}> timthedeveloper111@gmail.com </Link>
                            </div>

                            <div className={styles.contacts_grp_2}>
                                <Link href="https://github.com/Lungs-2666" className={styles.contacts_link}> gitHub </Link>
                                <Link href="" className={styles.contacts_link}> linkedIn </Link>
                                <Link href="" className={styles.contacts_link}> blog </Link>
                            </div>
                        </div>


                        <div className={styles.maskedText_container}>
                            <MaskedText />
                        </div>
                    </section>
                </main>
            </div>
        );
    }
