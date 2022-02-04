import s from './ProjectCard.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectCard = ({ id, image, title, description ,link}) => {

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <a href={link} target="_blank">
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: '10rem' }}
            placeholderSrc={image.placeholderSrc}
          />
        </a>
        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
