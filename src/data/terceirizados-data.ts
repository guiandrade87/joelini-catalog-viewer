export interface TerceirizadoItem {
  codigo: string;
  descricao: string;
  quantidade: number;
}

export interface TerceirizadoProduct {
  produtoId: string;
  produtoDescricao: string;
  itens: TerceirizadoItem[];
}

export const terceirizadosData: TerceirizadoProduct[] = [
  {
    produtoId: '3346',
    produtoDescricao: 'AMORTECEDOR 27 VIRGEM VS.03',
    itens: [
      { codigo: '1842', descricao: 'AMORTECEDOR PRE MONTADO VS.02', quantidade: 1 },
      { codigo: '1539', descricao: 'BASE GFZ 27MM VIRGEM VS.02', quantidade: 2 },
      { codigo: '3337', descricao: 'RODA 18 X 4 M VS.02', quantidade: 2 },
      { codigo: '3128', descricao: 'GRAXA BRANCA LUBGREASE ASP ED 36', quantidade: 0.02 },
    ],
  },
  {
    produtoId: '3349',
    produtoDescricao: 'AMORTECEDOR 32 AMARELO VS.03',
    itens: [
      { codigo: '1842', descricao: 'AMORTECEDOR PRE MONTADO VS.02', quantidade: 1 },
      { codigo: '1547', descricao: 'BASE GFZ 32MM AMARELA VS.02', quantidade: 2 },
      { codigo: '3337', descricao: 'RODA 18 X 4 M VS.02', quantidade: 2 },
      { codigo: '3128', descricao: 'GRAXA BRANCA LUBGREASE ASP ED 36', quantidade: 0.02 },
    ],
  },
  {
    produtoId: '3347',
    produtoDescricao: 'AMORTECEDOR 28,5 AZUL VS.03',
    itens: [
      { codigo: '1842', descricao: 'AMORTECEDOR PRE MONTADO VS.02', quantidade: 1 },
      { codigo: '1541', descricao: 'BASE GFZ 28,5MM AZUL VS.0', quantidade: 2 },
      { codigo: '3337', descricao: 'RODA 18 X 4 M VS.02', quantidade: 2 },
      { codigo: '3128', descricao: 'GRAXA BRANCA LUBGREASE ASP ED 36', quantidade: 0.02 },
    ],
  },
  {
    produtoId: '1958',
    produtoDescricao: 'AMORTECEDOR AZURE DIREITO PRETO MONTADO C/ SUPORTE',
    itens: [
      { codigo: '906', descricao: 'PARAFUSO MAQUINA PANELA Ø4X20MM ZB (CAB. 6MM - PH2)', quantidade: 2 },
      { codigo: '907', descricao: 'PORCA SEXTAVADA M4 ZB', quantidade: 2 },
      { codigo: '1951', descricao: 'SUPORTE P/ AMORTECEDOR ROSQUEADO ZINCO METALICO', quantidade: 2 },
      { codigo: '1588', descricao: 'CORPO AMORTECEDOR PLASTICO COMBAT', quantidade: 1 },
      { codigo: '1585', descricao: 'GANCHO PLASTICO PRETO COMBAT', quantidade: 1 },
      { codigo: '1377', descricao: 'MOLA TRACAO MISTA 85 OL PT', quantidade: 1 },
      { codigo: '1418', descricao: 'PISTAO 10 X 97MM 6N', quantidade: 1 },
      { codigo: '3128', descricao: 'GRAXA BRANCA LUBGREASE ASP ED 36', quantidade: 0.02 },
    ],
  },
  {
    produtoId: '1959',
    produtoDescricao: 'AMORTECEDOR AZURE ESQUERDO PRETO MONTADO C/ SUPORTE',
    itens: [
      { codigo: '906', descricao: 'PARAFUSO MAQUINA PANELA Ø4X20MM ZB (CAB. 6MM - PH2)', quantidade: 2 },
      { codigo: '907', descricao: 'PORCA SEXTAVADA M4 ZB', quantidade: 2 },
      { codigo: '1951', descricao: 'SUPORTE P/ AMORTECEDOR ROSQUEADO ZINCO METALICO', quantidade: 2 },
      { codigo: '1588', descricao: 'CORPO AMORTECEDOR PLASTICO COMBAT', quantidade: 1 },
      { codigo: '1585', descricao: 'GANCHO PLASTICO PRETO COMBAT', quantidade: 1 },
      { codigo: '1377', descricao: 'MOLA TRACAO MISTA 85 OL PT', quantidade: 1 },
      { codigo: '1418', descricao: 'PISTAO 10 X 97MM 6N', quantidade: 1 },
      { codigo: '3128', descricao: 'GRAXA BRANCA LUBGREASE ASP ED 36', quantidade: 0.02 },
    ],
  },
  {
    produtoId: '3348',
    produtoDescricao: 'AMORTECEDOR 30 VERDE VS.03',
    itens: [
      { codigo: '1842', descricao: 'AMORTECEDOR PRE MONTADO VS.02', quantidade: 1 },
      { codigo: '1549', descricao: 'BASE GFZ 30MM VERDE VS.02', quantidade: 2 },
      { codigo: '3337', descricao: 'RODA 18 X 4 M VS.02', quantidade: 2 },
      { codigo: '3128', descricao: 'GRAXA BRANCA LUBGREASE ASP ED 36', quantidade: 0.02 },
    ],
  },
  {
    produtoId: '1842',
    produtoDescricao: 'AMORTECEDOR PRE MONTADO VS.02',
    itens: [
      { codigo: '1097', descricao: 'GANCHO PLASTICO AL', quantidade: 1 },
      { codigo: '1841', descricao: 'CORPO AMORTECEDOR PLASTICO 52 VS.02', quantidade: 1 },
      { codigo: '1105', descricao: 'PISTAO 10 X 82MM 10N', quantidade: 1 },
      { codigo: '1648', descricao: 'MOLA HELICOIDAL DE TRACAO C57 D5,2 D.G2,6 P0,7', quantidade: 1 },
      { codigo: '3128', descricao: 'GRAXA BRANCA LUBGREASE ASP ED 36', quantidade: 0.07 },
    ],
  },
  {
    produtoId: '3350',
    produtoDescricao: 'AMORTECEDOR 33 VERMELHO VS.03',
    itens: [
      { codigo: '1842', descricao: 'AMORTECEDOR PRE MONTADO VS.02', quantidade: 1 },
      { codigo: '1548', descricao: 'BASE GFZ 33,5MM VERMELHA VS.02', quantidade: 2 },
      { codigo: '3337', descricao: 'RODA 18 X 4 M VS.02', quantidade: 2 },
      { codigo: '3128', descricao: 'GRAXA BRANCA LUBGREASE ASP ED 36', quantidade: 0.02 },
    ],
  },
  {
    produtoId: '1685',
    produtoDescricao: 'AMORTECEDOR COMBAT CINZA',
    itens: [
      { codigo: '1588', descricao: 'CORPO AMORTECEDOR PLASTICO COMBAT', quantidade: 1 },
      { codigo: '1583', descricao: 'GANCHO PLASTICO CINZA COMBAT', quantidade: 1 },
      { codigo: '1537', descricao: 'MOLA TRACAO MISTA ZB 88MM', quantidade: 1 },
      { codigo: '1418', descricao: 'PISTAO 10 X 97MM 6N', quantidade: 1 },
      { codigo: '3128', descricao: 'GRAXA BRANCA LUBGREASE ASP ED 36', quantidade: 0.02 },
    ],
  },
  {
    produtoId: '2699',
    produtoDescricao: 'BATENTE MONTADO V CONVEXO',
    itens: [
      { codigo: '2172', descricao: 'FIXACAO METALICA U/V ZINCADA CONCAVA/CONVEXA', quantidade: 1 },
      { codigo: '111', descricao: 'PORCA SEXTAVADA M6 ZB', quantidade: 1 },
      { codigo: '1347', descricao: 'PARAFUSO MAQUINA CHATA Ø6X25MM ZB', quantidade: 1 },
      { codigo: '2698', descricao: 'BATENTE V CONVEXO', quantidade: 1 },
    ],
  },
];
