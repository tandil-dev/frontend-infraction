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
    title: 'Suppliers',
    text: 'Suppliers can distribute inventory directly to points of sale, skipping costly intermediaries and bottlenecks to data.',
    linkText: 'Learn More',
    href: '/suppliers',
    shortText: 'New profitable distribution channel',
    buttonLabel: 'Learn More',
  },
  {
    title: 'Sellers & Agents',
    text: 'Access inventory from all suppliers from a single platform with no markup fees and no barriers to entry.',
    linkText: 'Learn More',
    href: '/sellers',
    shortText: 'No fees and bureaucracy to sell inventory',
    buttonLabel: 'Learn More',
  },
  {
    title: 'Software Vendors',
    text: 'Build your projects on a set of open-source protocols and APIs. Be a part of the ecosystem!',
    linkText: 'Learn More',
    href: '/software-vendors',
    shortText: 'Deliver more value to your customers',
    buttonLabel: 'Learn More',
  },
];

export default cardsInfo;