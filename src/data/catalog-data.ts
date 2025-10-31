export interface CatalogItem {
  codigo: string;
  descricao: string;
  setor: 'TERCEIRIZAÇÃO' | 'INJEÇÃO' | 'MONTAGEM' | 'ESTAMPARIA' | 'USINAGEM' | 'ALMOXARIFADO';
}

export interface Product {
  produtoId: string;
  produtoDescricao: string;
  itens: CatalogItem[];
}

export const catalogData: Product[] = [
  // AMORTECEDORES
  {
    produtoId: '3357',
    produtoDescricao: 'AMORTECEDOR 27 VIRGEM VS.03 REV',
    itens: [
      { codigo: '3346', descricao: 'AMORTECEDOR 27 VIRGEM VS.03', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  {
    produtoId: '3358',
    produtoDescricao: 'AMORTECEDOR 28,5 AZUL VS.03 REV',
    itens: [
      { codigo: '3347', descricao: 'AMORTECEDOR 28,5 AZUL VS.03', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  {
    produtoId: '3359',
    produtoDescricao: 'AMORTECEDOR 30 VERDE VS.03 REV',
    itens: [
      { codigo: '3348', descricao: 'AMORTECEDOR 30 VERDE VS.03', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  {
    produtoId: '3360',
    produtoDescricao: 'AMORTECEDOR 32 AMARELO VS.03 REV',
    itens: [
      { codigo: '3349', descricao: 'AMORTECEDOR 32 AMARELO VS.03', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  {
    produtoId: '3361',
    produtoDescricao: 'AMORTECEDOR 33 VERMELHO VS.03 REV',
    itens: [
      { codigo: '3350', descricao: 'AMORTECEDOR 33 VERMELHO VS.03', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  {
    produtoId: '2130',
    produtoDescricao: 'AMORTECEDOR AZURE DIREITO PRETO MONTADO C/ SUPORTE REV',
    itens: [
      { codigo: '1958', descricao: 'AMORTECEDOR AZURE DIREITO PRETO MONTADO C/ SUPORTE', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  {
    produtoId: '2131',
    produtoDescricao: 'AMORTECEDOR AZURE ESQUERDO PRETO MONTADO C/ SUPORTE REV',
    itens: [
      { codigo: '1959', descricao: 'AMORTECEDOR AZURE ESQUERDO PRETO MONTADO C/ SUPORTE', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  {
    produtoId: '1581',
    produtoDescricao: 'AMORTECEDOR COMBAT CINZA REV',
    itens: [
      { codigo: '1685', descricao: 'AMORTECEDOR COMBAT CINZA', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  {
    produtoId: '1682',
    produtoDescricao: 'AMORTECEDOR COMBAT PRETO REV',
    itens: [
      { codigo: '1686', descricao: 'AMORTECEDOR COMBAT PRETO', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  
  // BATENTES
  {
    produtoId: '3182',
    produtoDescricao: 'BATENTE ANTI DESCARRILHAMENTO PRE MONTADO CINZA REV',
    itens: [
      { codigo: '3183', descricao: 'BATENTE ANTI DESCARRILHAMENTO PRE MONTADO CINZA', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  {
    produtoId: '3442',
    produtoDescricao: 'BATENTE ANTI DESCARRILHAMENTO PRE MONTADO PRETO REV',
    itens: [
      { codigo: '3443', descricao: 'BATENTE ANTI DESCARRILHAMENTO PRE MONTADO PRETO', setor: 'TERCEIRIZAÇÃO' },
    ],
  },
  {
    produtoId: '3197',
    produtoDescricao: 'BATENTE INFERIOR MOOVE UNIFICADA PRETO VER',
    itens: [
      { codigo: '3198', descricao: 'BATENTE INFERIOR MOOVE UNIFICADA PRETO', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '3276',
    produtoDescricao: 'BATENTE INFERIOR MOOVE UNIFICADA CINZA REV',
    itens: [
      { codigo: '3277', descricao: 'BATENTE INFERIOR MOOVE UNIFICADA CINZA', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '2700',
    produtoDescricao: 'BATENTE MONTADO V CONVEXO REV',
    itens: [
      { codigo: '2701', descricao: 'BATENTE MONTADO V CONVEXO', setor: 'MONTAGEM' },
    ],
  },
  
  // BUCHAS
  {
    produtoId: '2720',
    produtoDescricao: 'BUCHA 5/16 X 13MM REV',
    itens: [
      { codigo: '2721', descricao: 'BUCHA 5/16 X 13MM', setor: 'USINAGEM' },
    ],
  },
  
  // CAPAS
  {
    produtoId: '3190',
    produtoDescricao: 'CAPA RETA MOOVE PINTADO PRETO REV',
    itens: [
      { codigo: '3191', descricao: 'CAPA RETA MOOVE PINTADO PRETO', setor: 'INJEÇÃO' },
    ],
  },
  
  // CARROS
  {
    produtoId: '2687',
    produtoDescricao: 'CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 40KG REV',
    itens: [
      { codigo: '2688', descricao: 'CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 40KG', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3250',
    produtoDescricao: 'CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 40KG SUP. EMBUTIDO REV',
    itens: [
      { codigo: '3251', descricao: 'CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 40KG SUP. EMBUTIDO', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '2973',
    produtoDescricao: 'CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 80KG REV',
    itens: [
      { codigo: '2974', descricao: 'CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 80KG', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3178',
    produtoDescricao: 'CARRO MONTADO MOOVE PRETO REV',
    itens: [
      { codigo: '3179', descricao: 'CARRO MONTADO MOOVE PRETO', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1504',
    produtoDescricao: 'CARRO REBITADO JP700U REV',
    itens: [
      { codigo: '1503', descricao: 'CARRO REBITADO JP700U', setor: 'ESTAMPARIA' },
    ],
  },
  {
    produtoId: '2004',
    produtoDescricao: 'CARRO REBITADO JP700V M REV',
    itens: [
      { codigo: '2005', descricao: 'CARRO REBITADO JP700V M', setor: 'ESTAMPARIA' },
    ],
  },
  {
    produtoId: '1505',
    produtoDescricao: 'CARRO REBITADO JP700V REV',
    itens: [
      { codigo: '1507', descricao: 'CARRO REBITADO JP700V', setor: 'ESTAMPARIA' },
    ],
  },
  {
    produtoId: '3233',
    produtoDescricao: 'CARRO REBITADO JP700V SOFT 80KG REV',
    itens: [
      { codigo: '3234', descricao: 'CARRO REBITADO JP700V SOFT 80KG', setor: 'ESTAMPARIA' },
    ],
  },
  {
    produtoId: '2347',
    produtoDescricao: 'CARRO REBITADO JP700V/ JP740V SUPORTE EMBUTIDO REV',
    itens: [
      { codigo: '2348', descricao: 'CARRO REBITADO JP700V/ JP740V SUPORTE EMBUTIDO', setor: 'ESTAMPARIA' },
    ],
  },
  {
    produtoId: '2255',
    produtoDescricao: 'CARRO REBITADO JP735V REV',
    itens: [
      { codigo: '2256', descricao: 'CARRO REBITADO JP735V', setor: 'ESTAMPARIA' },
    ],
  },
  {
    produtoId: '3103',
    produtoDescricao: 'CARRO REBITADO JP740U REV',
    itens: [
      { codigo: '3104', descricao: 'CARRO REBITADO JP740U', setor: 'ESTAMPARIA' },
    ],
  },
  
  // CHAVES
  {
    produtoId: '1506',
    produtoDescricao: 'CHAVE DE BOCA 13MM REV',
    itens: [
      { codigo: '1508', descricao: 'CHAVE DE BOCA 13MM', setor: 'ALMOXARIFADO' },
    ],
  },
  {
    produtoId: '2351',
    produtoDescricao: 'CHAVE DE BOCA 6MM REV',
    itens: [
      { codigo: '2352', descricao: 'CHAVE DE BOCA 6MM', setor: 'ALMOXARIFADO' },
    ],
  },
  
  // CONJUNTOS ACESSORIO
  {
    produtoId: '2760',
    produtoDescricao: 'CONJUNTO ACESSORIO JP700 SOFT 40/ 80KG SUPORTE TOPO REV',
    itens: [
      { codigo: '2761', descricao: 'CONJUNTO ACESSORIO JP700 SOFT 40/ 80KG SUPORTE TOPO', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3100',
    produtoDescricao: 'CONJUNTO ACESSORIO JP700 SUPORTE EMBUTIDO REV',
    itens: [
      { codigo: '3101', descricao: 'CONJUNTO ACESSORIO JP700 SUPORTE EMBUTIDO', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3153',
    produtoDescricao: 'CONJUNTO ACESSORIO JP700 SUPORTE EMBUTIDO S/ GUIA REV',
    itens: [
      { codigo: '3154', descricao: 'CONJUNTO ACESSORIO JP700 SUPORTE EMBUTIDO S/ GUIA', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '2281',
    produtoDescricao: 'CONJUNTO ACESSORIO JP700 SUPORTE LATERAL REV',
    itens: [
      { codigo: '2282', descricao: 'CONJUNTO ACESSORIO JP700 SUPORTE LATERAL', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '2278',
    produtoDescricao: 'CONJUNTO ACESSORIO JP700 SUPORTE TOPO REV',
    itens: [
      { codigo: '2279', descricao: 'CONJUNTO ACESSORIO JP700 SUPORTE TOPO', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3401',
    produtoDescricao: 'CONJUNTO ACESSORIO JP700/ JP740 GUIA RASGO L REV',
    itens: [
      { codigo: '3402', descricao: 'CONJUNTO ACESSORIO JP700/ JP740 GUIA RASGO L', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '2354',
    produtoDescricao: 'CONJUNTO ACESSORIO JP700/ JP740 SUPORTE EMBUTIDO REV',
    itens: [
      { codigo: '2355', descricao: 'CONJUNTO ACESSORIO JP700/ JP740 SUPORTE EMBUTIDO', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3381',
    produtoDescricao: 'CONJUNTO ACESSORIO JP700/SOFT40 SUPORTE EMBUTIDO REV',
    itens: [
      { codigo: '3382', descricao: 'CONJUNTO ACESSORIO JP700/SOFT40 SUPORTE EMBUTIDO', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3130',
    produtoDescricao: 'CONJUNTO ACESSORIO JP740 SUPORTE EMBUTIDO GE REV',
    itens: [
      { codigo: '3131', descricao: 'CONJUNTO ACESSORIO JP740 SUPORTE EMBUTIDO GE', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3055',
    produtoDescricao: 'CONJUNTO ACESSORIO JP740 SUPORTE TOPO REV',
    itens: [
      { codigo: '3056', descricao: 'CONJUNTO ACESSORIO JP740 SUPORTE TOPO', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3439',
    produtoDescricao: 'CONJUNTO CARRO/CAPA MONTADO MOOVE PRETO REV',
    itens: [
      { codigo: '3440', descricao: 'CONJUNTO CARRO/CAPA MONTADO MOOVE PRETO', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '2756',
    produtoDescricao: 'CONJUNTO GUIA COM AMORTECIMENTO AFZU E MANUAL VS.02',
    itens: [
      { codigo: '2757', descricao: 'CONJUNTO GUIA COM AMORTECIMENTO AFZU E MANUAL', setor: 'MONTAGEM' },
    ],
  },
  
  // CORPOS
  {
    produtoId: '3217',
    produtoDescricao: 'CORPO AMORTECEDOR JP700 80KG AZUL REV',
    itens: [
      { codigo: '3218', descricao: 'CORPO AMORTECEDOR JP700 80KG AZUL', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '2190',
    produtoDescricao: 'CORPO ANTI REBOTE REV',
    itens: [
      { codigo: '2191', descricao: 'CORPO ANTI REBOTE', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '2436',
    produtoDescricao: 'CORPO GUIA COM AMORTECIMENTO AFZU DIREITO REV',
    itens: [
      { codigo: '2437', descricao: 'CORPO GUIA COM AMORTECIMENTO AFZU DIREITO', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '2240',
    produtoDescricao: 'CORPO GUIA COM AMORTECIMENTO AFZU ESQUERDO REV',
    itens: [
      { codigo: '2241', descricao: 'CORPO GUIA COM AMORTECIMENTO AFZU ESQUERDO', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '3259',
    produtoDescricao: 'CORPO GUIA COM AMORTECIMENTO JP700 SOFT 40KG AZUL REV',
    itens: [
      { codigo: '3260', descricao: 'CORPO GUIA COM AMORTECIMENTO JP700 SOFT 40KG AZUL', setor: 'INJEÇÃO' },
    ],
  },
  
  // FREIOS
  {
    produtoId: '1432',
    produtoDescricao: 'FREIO 01 CORTADO REV',
    itens: [
      { codigo: '1434', descricao: 'FREIO 01 CORTADO', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '1574',
    produtoDescricao: 'FREIO 01 REV',
    itens: [
      { codigo: '1575', descricao: 'FREIO 01', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '2093',
    produtoDescricao: 'FREIO 04 REV',
    itens: [
      { codigo: '2094', descricao: 'FREIO 04', setor: 'INJEÇÃO' },
    ],
  },
  
  // GABARITOS
  {
    produtoId: '1745',
    produtoDescricao: 'GABARITO PLASTICO TOPO COMBAT REV',
    itens: [
      { codigo: '1746', descricao: 'GABARITO PLASTICO TOPO COMBAT', setor: 'INJEÇÃO' },
    ],
  },
  
  // GUIAS
  {
    produtoId: '1433',
    produtoDescricao: 'GUIA BABY CLICK REV',
    itens: [
      { codigo: '1435', descricao: 'GUIA BABY CLICK', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '1708',
    produtoDescricao: 'GUIA MONTADA CLICK R1.26,8.11 REV',
    itens: [
      { codigo: '1709', descricao: 'GUIA MONTADA CLICK R1.26,8.11', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1495',
    produtoDescricao: 'GUIA MONTADA CLICK R1.26.11 REV',
    itens: [
      { codigo: '1497', descricao: 'GUIA MONTADA CLICK R1.26.11', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3226',
    produtoDescricao: 'GUIA MONTADA CLICK R1.26.14 VS.02 REV',
    itens: [
      { codigo: '3227', descricao: 'GUIA MONTADA CLICK R1.26.14 VS.02', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1929',
    produtoDescricao: 'GUIA MONTADA CLICK R1.32.11 REV',
    itens: [
      { codigo: '1930', descricao: 'GUIA MONTADA CLICK R1.32.11', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3225',
    produtoDescricao: 'GUIA MONTADA CLICK R1.32.14 VS.02 REV',
    itens: [
      { codigo: '3228', descricao: 'GUIA MONTADA CLICK R1.32.14 VS.02', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3413',
    produtoDescricao: 'GUIA MONTADA CLICK SOFT 1.26.11 VS.02 REV',
    itens: [
      { codigo: '3414', descricao: 'GUIA MONTADA CLICK SOFT 1.26.11 VS.02', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3415',
    produtoDescricao: 'GUIA MONTADA CLICK SOFT R1.30,5.11 VS.02 REV',
    itens: [
      { codigo: '3416', descricao: 'GUIA MONTADA CLICK SOFT R1.30,5.11 VS.02', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3410',
    produtoDescricao: 'GUIA MONTADA COM AMORTECIMENTO AFZU DIREITA VS.03 REV',
    itens: [
      { codigo: '3412', descricao: 'GUIA MONTADA COM AMORTECIMENTO AFZU DIREITA VS.03', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3411',
    produtoDescricao: 'GUIA MONTADA COM AMORTECIMENTO AFZU ESQUERDA VS.03 REV',
    itens: [
      { codigo: '3413', descricao: 'GUIA MONTADA COM AMORTECIMENTO AFZU ESQUERDA VS.03', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3407',
    produtoDescricao: 'GUIA MONTADA G AZURE VS.02 REV',
    itens: [
      { codigo: '3408', descricao: 'GUIA MONTADA G AZURE VS.02', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3355',
    produtoDescricao: 'GUIA MONTADA GFZ 27MM VIRGEM VS.03 REV',
    itens: [
      { codigo: '3357', descricao: 'GUIA MONTADA GFZ 27MM VIRGEM VS.03', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3352',
    produtoDescricao: 'GUIA MONTADA GFZ 28,5MM AZUL VS.03 REV',
    itens: [
      { codigo: '3358', descricao: 'GUIA MONTADA GFZ 28,5MM AZUL VS.03', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3353',
    produtoDescricao: 'GUIA MONTADA GFZ 30MM VERDE VS.03 REV',
    itens: [
      { codigo: '3359', descricao: 'GUIA MONTADA GFZ 30MM VERDE VS.03', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3354',
    produtoDescricao: 'GUIA MONTADA GFZ 32MM AMARELA VS.03 REV',
    itens: [
      { codigo: '3360', descricao: 'GUIA MONTADA GFZ 32MM AMARELA VS.03', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3356',
    produtoDescricao: 'GUIA MONTADA GFZ 33,5MM VERMELHA VS.03 REV',
    itens: [
      { codigo: '3361', descricao: 'GUIA MONTADA GFZ 33,5MM VERMELHA VS.03', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1441',
    produtoDescricao: 'GUIA MONTADA GMD05 COM CAPA 22X3X8MM CINZA REV',
    itens: [
      { codigo: '1447', descricao: 'GUIA MONTADA GMD05 COM CAPA 22X3X8MM CINZA', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1442',
    produtoDescricao: 'GUIA MONTADA GMD06 COM CAPA 22X3X8MM CINZA REV',
    itens: [
      { codigo: '1448', descricao: 'GUIA MONTADA GMD06 COM CAPA 22X3X8MM CINZA', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1443',
    produtoDescricao: 'GUIA MONTADA GMD07 COM CAPA 18X4X8MM CINZA REV',
    itens: [
      { codigo: '1449', descricao: 'GUIA MONTADA GMD07 COM CAPA 18X4X8MM CINZA', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '2523',
    produtoDescricao: 'GUIA MONTADA JM620 C/ CAPA 23X4X12MM CINZA REV',
    itens: [
      { codigo: '2524', descricao: 'GUIA MONTADA JM620 C/ CAPA 23X4X12MM CINZA', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1572',
    produtoDescricao: 'GUIA MONTADA JP25 22M REV',
    itens: [
      { codigo: '1573', descricao: 'GUIA MONTADA JP25 22M', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1650',
    produtoDescricao: 'GUIA MONTADA JP35 17,5M REV',
    itens: [
      { codigo: '1651', descricao: 'GUIA MONTADA JP35 17,5M', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1444',
    produtoDescricao: 'GUIA MONTADA JP55 REV',
    itens: [
      { codigo: '1450', descricao: 'GUIA MONTADA JP55', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1529',
    produtoDescricao: 'GUIA MONTADA MM COM CAPA 22X3X8MM CINZA REV',
    itens: [
      { codigo: '1530', descricao: 'GUIA MONTADA MM COM CAPA 22X3X8MM CINZA', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1481',
    produtoDescricao: 'GUIA MONTADA MMD COM CAPA 22X3X8MM CINZA REV',
    itens: [
      { codigo: '1482', descricao: 'GUIA MONTADA MMD COM CAPA 22X3X8MM CINZA', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '1491',
    produtoDescricao: 'GUIA MONTADA MOLA PLASTICA COM GATILHO 2,5MM REV',
    itens: [
      { codigo: '1492', descricao: 'GUIA MONTADA MOLA PLASTICA COM GATILHO 2,5MM', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3406',
    produtoDescricao: 'GUIA MONTADA P AZURE VS.02 REV',
    itens: [
      { codigo: '3409', descricao: 'GUIA MONTADA P AZURE VS.02', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3378',
    produtoDescricao: 'GUIA MONTADA RASGO L 24 MM PAREDE 10 MM REV',
    itens: [
      { codigo: '3379', descricao: 'GUIA MONTADA RASGO L 24 MM PAREDE 10 MM', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3473',
    produtoDescricao: 'GUIA MONTADA RASGO L 32 MM PAREDE 10 MM REV',
    itens: [
      { codigo: '3474', descricao: 'GUIA MONTADA RASGO L 32 MM PAREDE 10 MM', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '3362',
    produtoDescricao: 'GUIA MONTADA UNIVERSAL FOLGA ZERO VS.03 REV',
    itens: [
      { codigo: '3363', descricao: 'GUIA MONTADA UNIVERSAL FOLGA ZERO VS.03', setor: 'MONTAGEM' },
    ],
  },
  {
    produtoId: '2644',
    produtoDescricao: 'GUIA PLASTICA DE RASGO 10MM MONTADA REV',
    itens: [
      { codigo: '2645', descricao: 'GUIA PLASTICA DE RASGO 10MM MONTADA', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '1509',
    produtoDescricao: 'GUIA PLASTICA DE RASGO 6,3/ 9,3 REV',
    itens: [
      { codigo: '1510', descricao: 'GUIA PLASTICA DE RASGO 6,3/ 9,3', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '2572',
    produtoDescricao: 'GUIA PLASTICA EXTERNA REGULAVEL CINZA REV',
    itens: [
      { codigo: '2573', descricao: 'GUIA PLASTICA EXTERNA REGULAVEL CINZA', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '1445',
    produtoDescricao: 'GUIA PLASTICA GPE 01 REV',
    itens: [
      { codigo: '1451', descricao: 'GUIA PLASTICA GPE 01', setor: 'INJEÇÃO' },
    ],
  },
  {
    produtoId: '1496',
    produtoDescricao: 'GUIA PLASTICA JP102 NANO REV',
    itens: [
      { codigo: '1498', descricao: 'GUIA PLASTICA JP102 NANO', setor: 'INJEÇÃO' },
    ],
  },
  
  // LIMITADORES
  {
    produtoId: '1446',
    produtoDescricao: 'LIMITADOR BABY CLICK REV',
    itens: [
      { codigo: '1452', descricao: 'LIMITADOR BABY CLICK', setor: 'INJEÇÃO' },
    ],
  },
  
  // LINGUETAS
  {
    produtoId: '2189',
    produtoDescricao: 'LINGUETA ANTI REBOTE REV',
    itens: [
      { codigo: '2192', descricao: 'LINGUETA ANTI REBOTE', setor: 'INJEÇÃO' },
    ],
  },
];

export const setores = [
  'TERCEIRIZAÇÃO',
  'INJEÇÃO',
  'MONTAGEM',
  'ESTAMPARIA',
  'USINAGEM',
  'ALMOXARIFADO',
] as const;
