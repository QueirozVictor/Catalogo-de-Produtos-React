import laptop from '../assets/images/laptop/laptop-1.webp';
import laptop2 from '../assets/images/laptop/laptop2.webp';
import laptop3 from '../assets/images/laptop/laptop3.webp';
import mouse1 from '../assets/images/mouse/mouse-1.webp';
import mouse3 from '../assets/images/mouse/mouse-3.webp';
import keyboard1 from '../assets/images/keyboard/keyboard1.webp';
import keyboard3 from '../assets/images/keyboard/keyboard3.webp';
import monitor1 from '../assets/images/PC/monitor1.webp';
import monitor2 from '../assets/images/PC/monitor2.webp';
import Captura from '../assets/images/attachments/captureCard.webp';
import HDMI from '../assets/images/attachments/hdmi.webp';
import NetCable from '../assets/images/attachments/netCable.webp';
import RAM from '../assets/images/attachments/RAM.webp';
import StreamDesk from '../assets/images/attachments/streamDesk.webp';
import Fone from '../assets/images/attachments/fone001.webp';
import Fone02 from '../assets/images/attachments/fone002.webp';
import Fone03 from '../assets/images/attachments/fone003.webp';

export const Laptops = [
  {
    id: 'notebook-001',
    nome: 'Notebook Asus',
    preco: 2500,
    descricao: 'Notebook de Alta Performance',
    imagem: laptop
  },
  {
    id: 'notebook-002',
    nome: 'Notebook Dell',
    preco: 1500, descricao: 'Ótimo para estudos!',
    imagem: laptop2 },

  {
    id: 'notebook-003',
    nome: 'Notebook Office',
    preco: 2000,
    descricao: 'Ótimo para trabalhos intensos!',
    imagem: laptop3 },
];

export const Mouse = [
  {
    id: 'mouse-01',
    nome: 'Mouse',
    preco: 80,
    descricao: 'Mouse Ergonômico',
    imagem: mouse1
  },

  {
    id: 'mouse-03',
    nome: 'Mouse Apple',
    preco: 180,
    descricao: 'Mouse Apple Original',
    imagem: mouse3
  },
];

export const Pc = [
  {
    id: 'PC-01',
    nome: 'Monitor Office',
    preco: 200,
    descricao: 'Monitor 144hz',
    imagem: monitor1
  },

  {
    id: 'PC-02',
    nome: 'iMac Apple',
    preco: 5000,
    descricao: 'iMac completo 2026',
    imagem: monitor2
  },
];

export const Teclados = [
  {
    id: 'teclado-001',
    nome: 'Teclado Gamer',
    preco: 150,
    descricao: 'Teclado responsivo de alta performance',
    imagem: keyboard1
  },

  {
    id: 'teclado-003',
    nome: 'Teclado RGB',
    preco: 200,
    descricao: 'Teclado gamer com RGB',
    imagem: keyboard3
  },
];

export const Attachments = [
  {
    id: 'attachments-01',
    nome: 'Placa de Captura',
    preco: 400,
    descricao: 'Placa de Captura Elgato',
    imagem: Captura
  },

  {
    id: 'attachments-02',
    nome: 'HeadSet Profissional',
    preco: 200,
    descricao: 'HeadSet Logitech',
    imagem: Fone
  },

  {
    id: 'attachments-03',
    nome: 'Fone de ouvido',
    preco: 100,
    descricao: 'Fone de estúdio para edição musical',
    imagem: Fone02
  },

  {
    id: 'attachments-04',
    nome: 'HeadSet 7.1',
    preco: 300,
    descricao: 'HeadSet focado para jogos de tiro',
    imagem: Fone03
  },

  {
    id: 'attachments-05',
    nome: 'Cabo HDMI',
    preco: 50,
    descricao: 'Cabo HDMI tipo A',
    imagem: HDMI
  },

  {
    id: 'attachments-06',
    nome: 'Cabo de rede',
    preco: 80,
    descricao: 'Cabo de rede 6m',
    imagem: NetCable
  },

  {
    id: 'attachments-07',
    nome: 'Kit Memoria Ram',
    preco: 2200,
    descricao: 'Kit Memoria Ram > 3x16GB',
    imagem: RAM
  },

  {
    id: 'attachments-08',
    nome: 'StreamDesk',
    preco: 400,
    descricao: 'Ideal para configurar suas lives com alta performance e ajustes personalizados',
    imagem: StreamDesk
  },

];

export const CATEGORIAS = [
  { id: 'laptops',
    titulo: 'Notebooks',
    produtos: Laptops,
    destaque: true },

  {
    id: 'mouse',
    titulo: 'Mouses',
    produtos: Mouse, destaque: true
  },

  {
    id: 'pc',
    titulo: 'Computadores e monitores',
    produtos: Pc, destaque: true
  },

  {
    id: 'teclados',
    titulo: 'Teclados',
    produtos: Teclados,
    destaque: true
  },

  {
    id: 'attachments',
    titulo: 'Acessórios',
    produtos: Attachments,
    destaque: false
  },
];
