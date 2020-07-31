export const DOMINIO = {
  WIDTH: '224',
  HEIGHT: '147',
  URL: '/dominio.png',
};
export const SITUACION = {
  WIDTH: '800',
  HEIGHT: '600',
  URL: '/situacion.jpg',
};
export const MAP = {
  WIDTH: '1508',
  HEIGHT: '707',
  URL: '/map.png',
};

export const headers = {
  address: 'Dirección',
  description: 'Descripción',
  dominio: 'Dominio',
  color: 'Color',
  marca: 'Marca',
  modelo: 'Modelo',
  date: 'Fecha',
  time: 'Horario',
  vehicleType: 'Típo de vehículo',
};
export const vehicleType = ['Auto', 'Camión', 'Camioneta', 'Colectivo', 'Moto', 'Otros'];

export const stages = [
  'Revisión comunitaria',
  'Revisión en departamento',
  'Revisión en juzgado',
  'Aprobada por juzgado',
  'Periodo de pago',
  'Pagada',
  'Reclamada',
  'Rechazada por la comunidad',
  'Rechazada por departamento',
  'Rechazada por juzgado',
  'Rechazo total',
];

export const mockedInfraction = {
  address: 'España 101, Tandil, Buenos Aires, Argentina',
  date: '2020-06-18',
  time: '13:00',
  description: 'El auto se encuentra estacionado en la vereda',
  color: 'Marrón claro',
  marca: '',
  modelo: '',
  situationHash: 'QmWcMgnLzYrtCCJoAjE7evsqDfmA7PGjxxf2D83H7ocGyW',
  infractionType: 'Circula de noche sin luces',
  vehicleType: 'Auto',
};

export const mockedDomainInfrationHash = 'QmNgzKpJdfMxqjkTKZmmNf3Ho2A6DTaRnkZcEYSYE41Cp4';

export const ignoreKeys = [
  'imagenDominio', 'infractionVideo', 'domainFile', 'situationFile', 'pruebas', 'situationHash',
  'situationFiles', 'InfractionType', 'infractionType',
];

export const dateAndTimeKeys = ['date', 'time', 'address'];
export const descriptionKeys = ['description', 'color', 'marca', 'modelo', 'vehicleType'];
