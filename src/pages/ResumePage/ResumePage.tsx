// import { Button, Input, Textarea, Typography } from '@/shared';
// import styles from './ResumePage.module.css';
// import { Tag } from './components';
// import { useEffect } from 'react';
// import { useUser } from '../AuthPages/store/store';
// import { useForm } from 'react-hook-form';
// import { useResume } from '@/store/resume';

// export const ResumePage = () => {
//   const user = useUser((state) => state.user);
//   const fetchResume = useResume((state) => state.fetchResume);
//   const { name, skills, specialization, technologies, workExperience, changeTechnologies, changeSkills } =
//     useResume((state) => state);

//   useEffect(() => {
//     fetchResume(user?.id);
//   }, [user]);

//   const { register } = useForm({
//     mode: 'onBlur',
//     values: {
//       name: name,
//       specialization: specialization
//     }
//   });

//   return (
//     <div className='container'>
//       <div className={styles.inner}>
//         <Typography className={styles.title} variant='title24_bold' tag='h2'>
//           Ваше резюме
//         </Typography>
//         <div>
//           <form className={styles.form}>
//             <div className={styles.block}>
//               <Typography className={styles.block_title} variant='title20_medium' tag='h3'>
//                 Персональные данные
//               </Typography>
//               <Input
//                 variant='primary'
//                 component='input'
//                 label='ФИО'
//                 placeholder='Иван...'
//                 {...register('name')}
//               />
//               <Input
//                 variant='primary'
//                 component='input'
//                 label='Специализация'
//                 placeholder='Backend developer...'
//                 {...register('specialization')}
//               />
//             </div>
//             <div className={styles.block}>
//               <Typography className={styles.block_title} variant='title20_medium' tag='h3'>
//                 Опыт работы
//               </Typography>
//               <Input
//                 variant='primary'
//                 component='input'
//                 label='Название компании'
//                 placeholder='MilkyWay...'
//               />
//               <div className={styles.row}>
//                 <Input
//                   type='number'
//                   variant='primary'
//                   component='input'
//                   label='количество лет'
//                   placeholder='2 года...'
//                 />
//                 <Input
//                   type='number'
//                   variant='primary'
//                   component='input'
//                   label='количество месяцев'
//                   placeholder='3 месяца...'
//                 />
//               </div>
//               <Textarea
//                 variant='primary'
//                 component='textarea'
//                 placeholder='описание деятельности...'
//               />
//               <ul className={styles.work_experience}>
//                 {workExperience.map((item) => (
//                   <li key={item.id}>
//                     <Tag>{item.company_name}</Tag>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className={styles.block}>
//               <Typography className={styles.block_title} variant='title20_medium' tag='h3'>
//                 Список технологий
//               </Typography>
//               <div className={styles.row}>
//                 <Input
//                   className={styles.input}
//                   variant='primary'
//                   component='input'
//                   placeholder='Html...'
//                 />
//                 <Button className={styles.btn} variant='primary'>
//                   Добавить
//                 </Button>
//               </div>
//               <div className={styles.technologies}>
//                 {technologies.map((technology) => (
//                   <Tag onClick={() => changeTechnologies(technology)} key={technology}>
//                     {technology}
//                   </Tag>
//                 ))}
//               </div>
//             </div>
//             <div className={styles.block}>
//               <Typography className={styles.block_title} variant='title20_medium' tag='h3'>
//                 Дополнительные навыки
//               </Typography>
//               <div className={styles.row}>
//                 <Input
//                   className={styles.input}
//                   variant='primary'
//                   component='input'
//                   placeholder='Английский язык - ...'
//                 />
//                 <Button className={styles.btn} variant='primary'>
//                   Добавить
//                 </Button>
//               </div>
//               <ul className={styles.skills_list}>
//                 {skills.map((skill) => (
//                   <li key={skill} onClick={() => changeSkills(skill)}>
//                     <Tag>{skill}</Tag>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             {/* <div className={styles.block}>
//               <Typography className={styles.block_title} variant='title20_medium' tag='h3'>
//                 Портфолио
//               </Typography>
//               <Input
//                 variant='primary'
//                 component='input'
//                 label='Название ссылки'
//                 placeholder='My website...'
//               />
//               <Input
//                 variant='primary'
//                 component='input'
//                 label='Ссылка'
//                 placeholder='https://MyWebsite.com'
//               />
//             </div> */}
//             <Button variant='primary'>Сохранить</Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

import { AsideMenu } from '@/components';
import styles from './ResumePage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { GeneralSection, SkillsSection, WorkExperienceSection } from './components';
import { getGeneralResume } from '@/api/requests/resume/general';
import { useGeneralResume } from './store/general';

export const ResumePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { setData } = useGeneralResume((state) => state);

  useEffect(() => {
    console.log('s');
    if (!params.id) {
      navigate('/resume/general');
    }
  }, [params]);

  // const sections = [
  //   { path: 'general', component: <GeneralSection /> },
  //   { path: 'work-experience', component: <WorkExperienceSection /> }
  // ];

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    getGeneralResume({ config: { headers: { Authorization: token } } }).then((res) =>
      setData(res.data)
    );
  }, []);

  return (
    <div className='container'>
      <div className={styles.inner}>
        <AsideMenu />
        {/* <div className={styles.section}>{params.id === sections?.path && sections?.component}</div> */}
        {params.id === 'general' && (
          <div className={styles.section}>
            <GeneralSection />
          </div>
        )}
        {params.id === 'work-experience' && (
          <div className={styles.section}>
            <WorkExperienceSection />
          </div>
        )}
        {params.id === 'skills' && (
          <div className={styles.section}>
            <SkillsSection />
          </div>
        )}
      </div>
    </div>
  );
};
