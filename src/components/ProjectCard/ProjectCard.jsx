    import './ProjectCard.css';
    import Link from 'next/link';

    const ProjectCard = ({ cardWidth, cardImg, cardTitle, cardDesc, cardLink, cardLinkLive})  => {
        return (
            <div className='project_card' style={{width: cardWidth}}>
                <img src={cardImg} alt="projectImage" className='card_img' />

                <div className='card_group'>
                    <h3 className='card_title'> {cardTitle} </h3>
                    <p className='card_desc'>   {cardDesc}  </p>
                </div>

                <div className='card_btns_group'>
                    <Link className='card_btn' href={cardLink}> Check on GitHub </Link>
                    <Link className='card_btn_live' href={cardLinkLive}> Check live  </Link>
                </div>
            </div>
        );
    }

    export default ProjectCard;
