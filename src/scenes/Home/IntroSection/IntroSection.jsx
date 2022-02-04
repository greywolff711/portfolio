import s from './IntroSection.module.scss';
import avatar from '../../../assets/Avatar-Intro.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Techskills from '../TechSkills/TechSkills'

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            <span className={s.highlight}> About Me 👨‍💻</span>{' '}
          </h1>

          <div className={s.description}>
            <p>
              I am a computer Science Under graduate from Vellore Institute of Technology.
            </p>

            <p>
              I like to work with 
                <b className={s.highlight}>
                  {' '}
                  React and have created multiple projects based on it.
                </b>
            </p>

            <p>
              In my free time I like to play valorant and badminton🏸.<br/>
              I also like to go on long walks in the night🌃.
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" height={400} src={avatar} />
        </Tilt>
      </div>
      <div className={s.skills}>
        <h1 className={s.highlight}>My Skills</h1>
        <Techskills/>
      </div>
      <div className={s.introSocial}>
        <h1>Wanna Meet? 🤙 </h1>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/greywolff711"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://github.com/greywolff711"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://github.com/greywolff711"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.introductionText}>
            <a
              href="https://github.com/greywolff711"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTelegramPlane />
            </a>
          </li>
        </ul>
      </div>
      <p
        style={{
          color: 'white',
          textAlign: 'center',
          marginTop: '2rem',
        }}
      >
        "There is nothing so useless as doing efficiently that which should not be done at all"
      </p>
    </section>
  );
};

export default IntroSection;
