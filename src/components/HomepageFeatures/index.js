import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Crochet tutorials & patterns',
    Svg: require('@site/static/img/flowers.svg').default,
    description: (
      <>
        Clear, beginner-friendly crochet tutorials and patterns to help you create beautiful handmade items, one stitch at a time
      </>
    ),
  },
  {
    title: 'Stories behind the yarn',
    Svg: require('@site/static/img/yarn.svg').default,
    description: (
      <>
        Every project has a story. I share heartfelt moments, gift-giving experiences, and the joy of crafting for loved ones
      </>
    ),
  },
  {
    title: 'Creative inspiration',
    Svg: require('@site/static/img/heart.svg').default,
    description: (
      <>
        Whether you're new or experienced, find ideas and motivation to spark your next crochet adventure and make something meaningful
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
