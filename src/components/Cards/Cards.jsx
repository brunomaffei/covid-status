import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Cards/Cards';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Carregando...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infectado}
          cardTitle="Infectados"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Numero de casos do COVID-19."
        />
        <CardComponent
          className={styles.recuperado}
          cardTitle="Recuperados"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Numero de Recuperados COVID-19."
        />
        <CardComponent
          className={styles.mortes}
          cardTitle="Mortes"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Numeros de mortes pelo COVID-19."
        />
      </Grid>
    </div>
  );
};
export default Info;