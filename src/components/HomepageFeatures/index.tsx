import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Utiliser les bons outils',
    imgSrc: require('@site/static/imgs/icons8-tools-100.png').default,
    description: (
      <>
        Avec les bons outils tu vas pouvoir aborder la programmation plus facilement.
      </>
    ),
  },
  {
    title: 'Renforcer ses connaissances',
    imgSrc: require('@site/static/imgs/icons8-messaging-100.png').default,
    description: (
      <>
      Quel que soit ton niveau, tu seras toujours le.a bienvenu.e pour poser des questions.
      </>
    ),
  },
  {
    title: 'Apprendre en pratiquant',
    imgSrc: require('@site/static/imgs/icons8-learning-100.png').default,
    description: (
      <>
        Pratiquer est la clé pour s'améliorer et en apprendre plus.
        Je serai là pour t'accompagner au cours de l'année.
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={imgSrc} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
