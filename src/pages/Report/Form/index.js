import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Image from 'material-ui-image';
import {
  Button, TextField, Grid, NativeSelect, Typography, InputLabel, FormControl,
} from '@material-ui/core';

import MetamaskGateway from '../../../components/MetamaskGateway';

import useStyles from './styles';
import {
  MAP, infractionTypes, motoTypes, otherTypes,
} from '../consts';

function Form({ onSubmit, currentReport, onBack }) {
  const {
    register, errors, handleSubmit,
  } = useForm({ defaultValues: currentReport });
  // eslint-disable-next-line no-console
  console.log('errors', errors);
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justify="center" alignItems="stretch" className={classes.grid} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Pruebas fotograficas</Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth ref={register({ required: true })}>
            <Typography>Domino</Typography>

            <Button
              variant="contained"
              component="label"
              color="secondary"
            >
              Cargar imagen del dominio
              <input
                type="file"
                id="domainFile"
                name="domainFile"
                accept="image/png, image/jpeg"
                ref={register({ required: true })}
                style={{ display: 'none' }}
              />
            </Button>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth ref={register({ required: true })}>
            <Typography>Situación</Typography>
            <Button
              variant="contained"
              component="label"
              color="secondary"
            >
              Cargar archivos de la situación
              <input
                type="file"
                id="situationFiles"
                name="situationFiles"
                multiple
                style={{ display: 'none' }}
                ref={register({ required: true })}
              />
            </Button>

          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Pruebas de tiempo y lugar</Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="address"
            id="address"
            label="¿Cuál es la dirección de la infracción?"
            variant="outlined"
            fullWidth
            multiline
            inputRef={register({ required: true })}
          />
        </Grid>

        <Grid item xs={12}>
          <Image
            src={MAP.URL}
            aspectRatio={(MAP.WIDTH / MAP.HEIGHT)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="date"
            name="date"
            type="date"
            fullWidth
            label="¿Cuándo fué la infrcción?"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={register({ required: true })}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="time"
            name="time"
            type="time"
            label="¿A qué hora fué?"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            inputRef={register({ required: true })}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Detalles
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth ref={register({ required: true })}>
            <InputLabel htmlFor="InfractionType">Tipo de infracción</InputLabel>
            <NativeSelect
              id="InfractionType"
              name="InfractionType"
              fullWidth
            >
              <optgroup label="Vehículos">
                {infractionTypes.map((label) => (
                  <option value={label} key={label}>{label}</option>
                ))}
              </optgroup>
              <optgroup label="Motocicletas">
                {motoTypes.map((label) => (
                  <option value={label} key={label}>{label}</option>
                ))}
              </optgroup>
              <optgroup label="Generales">
                {otherTypes.map((label) => (
                  <option value={label} key={label}>{label}</option>
                ))}
              </optgroup>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth ref={register({ required: true })}>
            <InputLabel htmlFor="vehicleType">Tipo de vehículo</InputLabel>
            <NativeSelect
              name="vehicleType"
              id="vehicleType"
              fullWidth
            >
              <option value={0}>Auto</option>
              <option value={1}>Camion</option>
              <option value={2}>Camioneta</option>
              <option value={3}>Colectivo</option>
              <option value={4}>Moto</option>
              <option value={5}>Otros</option>
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="description"
            id="description"
            label="Ingrese una descripción (Opcional)"
            variant="outlined"
            fullWidth
            multiline
            inputRef={register()}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="color"
            id="color"
            label="Ingrese color del vehículo (Opcional)"
            variant="outlined"
            fullWidth
            inputRef={register()}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="marca"
            id="marca"
            label="Ingrese marca del vehículo (Opcional)"
            variant="outlined"
            fullWidth
            multiline
            inputRef={register()}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="modelo"
            id="modelo"
            label="Ingrese modelo del vehículo (Opcional)"
            variant="outlined"
            fullWidth
            multiline
            inputRef={register()}
          />
        </Grid>
        <Grid item xs={4}>
          <Button component={Link} to="/" variant="contained" onClick={onBack}>
            Atrás
          </Button>
        </Grid>
        <Grid item xs={8}>
          <MetamaskGateway>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
            >
              Reportar
            </Button>
          </MetamaskGateway>
        </Grid>
      </Grid>
    </form>
  );
}

const mapStateToProps = (state) => ({
  currentReport: state.currentReport.data,
});

export default connect(mapStateToProps)(withRouter(Form));
