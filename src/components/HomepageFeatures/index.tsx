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
        Avec les bons outils tu vas pouvoir aborder la programmation plus aisement.
      </>
    ),
  },
  {
    title: 'Rnforcer ses connaissances',
    imgSrc: require('@site/static/imgs/icons8-messaging-100.png').default,
    description: (
      <>
      Quel que soit son niveau, tu seras toujours le bienvenue ici pour poser des questions.
      L'important, c'est de s'améliorer.
      </>
    ),
  },
  {
    title: 'Apprendre en pratiquant',
    imgSrc: require('@site/static/imgs/icons8-learning-100.png').default,
    description: (
      <>
        Pratiquer est la clé pour s'ameliorer et en apprendre plus.
        Je serez là pour t'accompagner si necessaire.
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
