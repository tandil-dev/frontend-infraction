type DataType = {
  href: string,
  title: string,
  text: string,
  linkText: string,
  shortText: string,
  buttonLabel: string,
  imgWidth: number
};

const cardsInfo: DataType[] = [
  {
    title: 'Usuario',
    text: 'Reportar una infracción',
    href: '/usuario',
    shortText: 'Reportar una infracción',
    buttonLabel: 'Ingresar',
  },
  {
    title: 'Juez',
    text: 'Aceptar o rechazar infracciones pendientes',
    href: '/juez',
    shortText: 'Acceder a las infracciones pendientes',
    buttonLabel: 'Ingresar',
  },
  {
    title: 'Oficial de transito',
    text: 'Build your projects on a set of open-source protocols and APIs. Be a part of the ecosystem!',
    linkText: 'Learn More',
    href: '/oficial',
    shortText: 'Acceder al panel de administración',
    buttonLabel: 'Ingresar',
  },
];

export default cardsInfo;