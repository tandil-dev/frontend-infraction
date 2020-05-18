import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import DateFnsUtils from '@date-io/date-fns';
import ReactPlayer from 'react-player';

import {
  Button, TextField, Grid, NativeSelect, Typography, InputLabel, FormControl,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker,
} from '@material-ui/pickers';

import useStyles from './styles';

function Form({ onSubmit, currentReport }) {
  const { register, errors, handleSubmit } = useForm({ defaultValues: currentReport });
  // eslint-disable-next-line no-console
  console.log('errors', errors);
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justify="center" alignItems="center" className={classes.grid} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            Datos de la infracción
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="age-native-helper">Tipo de infracción</InputLabel>
            <NativeSelect
              id="InfractionType"
              name="InfractionType"
              fullWidth
              ref={register({ required: true })}
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
          <TextField
            name="infractionVideo"
            id="infractionVideo"
            label="Url del video donde se ve la infracción"
            helperText={errors.infractionVideo && 'No se reconoce el video.'}
            variant="outlined"
            type="url"
            error={!!errors.infractionVideo}
            fullWidth
            multiline
            inputRef={register({
              required: true,
              validate: (url) => ReactPlayer.canPlay(url),
            })}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="imagenDominio"
            id="imagenDominio"
            label="Url de la imágen donde se ve el dominio"
            helperText={errors.imagenDominio && 'Ingrese url de imagen de dominio'}
            variant="outlined"
            type="url"
            fullWidth
            multiline
            error={!!errors.imagenDominio}
            inputRef={register({ required: true })}
          />
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
        {/* Imagen mapa */}
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
          <FormControl fullWidth>
            <InputLabel htmlFor="age-native-helper">Tipo de vehículo</InputLabel>
            <NativeSelect
              name="vehicleType"
              id="vehicleType"
              fullWidth
              ref={register({ required: true })}
            >
              <option value={0}>Auto</option>
              <option value={1}>Camion</option>
              <option value={2}>Camioneta</option>
              <option value={3}>Colectivo</option>
              <option value={4}>Moto</option>
              <option value={5}>Especies</option>
              <option value={6}>Otros</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="dominio"
            id="dominio"
            label="Ingrese dominio del vehículo (Opcional)"
            variant="outlined"
            helperText={errors.dominio && 'Ingrese una patente válida'}
            fullWidth
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
