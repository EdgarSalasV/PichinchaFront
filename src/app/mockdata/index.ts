import { iProduct } from 'src/app/interfaces/Product';

const mockProductList: iProduct[] = [
  {
    id: 'trj-bbo',
    name: 'bbo com',
    description: 'Tarjeta de credito con monto superior a 23 millones',
    logo: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-credit-card-icon-png-image_3700426.jpg',
    date_release: '2025-08-10T00:00:00.000+00:00',
    date_revision: '2024-08-08T00:00:00.000+00:00',
  },
  {
    id: 'trj-cre1',
    name: 'TarjetaVA1',
    description: 'Tarjeta de credito con monto superior a 10 millones',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/512px-BBVA_2019.svg.png',
    date_release: '2023-08-09T00:00:00.000+00:00',
    date_revision: '2024-08-09T00:00:00.000+00:00',
  },
  {
    id: '234',
    name: 'amex card m',
    description: 'Lorem ipsum amex',
    logo: 'https://cdn.icon-icons.com/icons2/2389/PNG/512/american_express_logo_icon_145503.png',
    date_release: '2023-08-17T00:00:00.000+00:00',
    date_revision: '2024-08-16T00:00:00.000+00:00',
  },
  {
    id: '2345',
    name: 'Tarjetas de Credito 1',
    description: 'Tarjeta de consume bajo la modalidad de credito',
    logo: 'https://www.visa.rom.rr/dam/VCOM/regional/lar/SPA/brfault/P IgyflNjainaliarjetas/visa-signature-400x225.jpg',
    date_release: '2023-02-01T00:00:00.000+00:00',
    date_revision: '2024-02-01T00:00:00.000+00:00',
  },
];

export { mockProductList };
