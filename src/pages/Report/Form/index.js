import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import DateFnsUtils from '@date-io/date-fns';
// import ReactPlayer from 'react-player';
import Image from 'material-ui-image';

import {
  Button, TextField, Grid, NativeSelect, Typography, InputLabel, FormControl,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker,
} from '@material-ui/pickers';

import useStyles from './styles';
import { MAP } from '../consts';

function Form({ onSubmit, currentReport }) {
  const { register, errors, handleSubmit } = useForm({ defaultValues: currentReport });
  // eslint-disable-next-line no-console
  console.log('errors', errors);
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justify="center" alignItems="stretch" className={classes.grid} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            Datos de la infracción
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
              <option value={0}>Alta velocidad</option>
              <option value={1}>Estaciona en cordón amarillo</option>
              <option value={2}>Estaciona obstruyendo ochava</option>
              <option value={3}>Estaciona obstruyendo senda aeróbica</option>
              <option value={4}>Estaciona obstruyendo senda peatonal</option>
              {/* Completar restantes */}
              <option value={4}>Otros</option>
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Prueba fotografica</Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth ref={register({ required: true })}>
            <Typography>Situación</Typography>
            <input
              type="file"
              id="situationFiles"
              name="situationFiles"
              multiple
              // accept="image/png, image/jpeg"
              ref={register({ required: true })}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth ref={register({ required: true })}>
            {/* <InputLabel htmlFor="domain">Dominio</InputLabel> */}
            <Typography>Domino</Typography>
            <input
              type="file"
              id="domainFile"
              name="domainFile"
              accept="image/png, image/jpeg"
              ref={register({ required: true })}
            />
          </FormControl>
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

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={12}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date"
              name="date"
              label="¿Cuándo fué la infrcción?"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              inputRef={register({ required: true })}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={12}>
            <KeyboardTimePicker
              fullWidth
              disableToolbar
              variant="inline"
              id="time"
              name="time"
              label="¿A qué hora fué?"
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
              inputRef={register({ required: true })}
            />
          </Grid>
        </MuiPickersUtilsProvider>
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
          <Typography variant="h6">
            Datos del vehículo
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth ref={register({ required: true })}>
            <InputLabel htmlFor="age-native-helper">Tipo de vehículo</InputLabel>
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
          <Button component={Link} to="/" variant="contained">
            Atrás
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            Reportar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

const mapStateToProps = (state) => ({
  currentReport: state.currentReport.data,
});

export default connect(mapStateToProps)(withRouter(Form));
