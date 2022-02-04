import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs, 
  DiGit,
  DiPython,
  DiVisualstudio,
  DiFirebase,
  DiHtml5,
} from 'react-icons/di';
import {
  SiRedux,
  SiCplusplus,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiPython/>
      </li>
      <li className={s.techIcon}>
        <SiCplusplus />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiVisualstudio />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiFirebase />
      </li>
    </ul>
  );
};

export default TechSkills;
