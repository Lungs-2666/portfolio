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
                            <br /> <br />
                            etc.
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

                    <section className={styles.projects_page}>
                        <h2 className={styles.projects_heading}> Featured Projects: </h2>

                        <div className={styles.projects_cards}>
                            <ProjectCard 
                                cardWidth='58%'
                                cardImg='/noimage'
                                cardTitle='Echo Link'
                                cardDesc='Lorem ipsum dolor sit
                                amet consectetur adipisicing elit.
                                Molestiae, praesentium.'
                                cardLink='https://github.com/Lungs-2666/echo-link'
                                cardLinkLive='' //link from OnRender
                            />

                            <ProjectCard 
                                cardWidth='40%'
                                cardImg='/noimage'
                                cardTitle='Fit Day'
                                cardDesc='Lorem ipsum dolor sit
                                amet consectetur adipisicing elit.
                                Molestiae, praesentium.'
                                cardLink='https://github.com/Lungs-2666/fit_day'
                                cardLinkLive='' //link from GitHub pages
                            />

                            <ProjectCard 
                                cardWidth='48%'
                                cardImg='/noimage'
                                cardTitle='Career Navigator'
                                cardDesc='Lorem ipsum dolor sit
                                amet consectetur adipisicing elit.
                                Molestiae, praesentium.'
                                cardLink='https://github.com/Lungs-2666/fit_day'
                                cardLinkLive='' //link from Vercel or OnRender
                            />

                            <ProjectCard 
                                cardWidth='50%'
                                cardImg='/noimage'
                                cardTitle='Healing Recipes' 
                                cardDesc='Lorem ipsum dolor sit
                                amet consectetur adipisicing elit.
                                Molestiae, praesentium.'
                                cardLink='https://github.com/Lungs-2666/HealingRecipes_app'
                                cardLinkLive='' //link from "onrender.com"
                            />
                        </div>
                    </section>

                    <section className={styles.contacts_page}>
                        <h2 className={styles.contacts_heading}> Contacts: </h2>

                        <div className={styles.contacts_grp_1}>
                            <Link href="" className={styles.contacts_link}> telegram </Link>
                            <Link href="" className={styles.contacts_link}> whatsApp </Link>
                            <Link href="" className={styles.contacts_link}> timthedeveloper111@gmail.com </Link>
                        </div>

                        <div className={styles.contacts_grp_2}>
                            <Link href="" className={styles.contacts_link}> gitHub </Link>
                            <Link href="" className={styles.contacts_link}> linkedIn </Link>
                            <Link href="" className={styles.contacts_link}> blog </Link>
                        </div>


                        <div className={styles.maskedText_container}>
                            <MaskedText />
                        </div>
                    </section>
                </main>
            </div>
        );
    }
