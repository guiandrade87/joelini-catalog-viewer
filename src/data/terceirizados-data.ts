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
    produtoId: "3346",
    produtoDescricao: "AMORTECEDOR 27 VIRGEM VS.03",
    itens: [
      {
        codigo: "1842",
        descricao: "AMORTECEDOR PRE MONTADO VS.02",
        quantidade: 1,
      },
      {
        codigo: "1539",
        descricao: "BASE GFZ 27MM VIRGEM VS.02",
        quantidade: 2,
      },
      { codigo: "3337", descricao: "RODA 18 X 4 M VS.02", quantidade: 2 },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3349",
    produtoDescricao: "AMORTECEDOR 32 AMARELO VS.03",
    itens: [
      {
        codigo: "1842",
        descricao: "AMORTECEDOR PRE MONTADO VS.02",
        quantidade: 1,
      },
      {
        codigo: "1547",
        descricao: "BASE GFZ 32MM AMARELA VS.02",
        quantidade: 2,
      },
      { codigo: "3337", descricao: "RODA 18 X 4 M VS.02", quantidade: 2 },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3347",
    produtoDescricao: "AMORTECEDOR 28,5 AZUL VS.03",
    itens: [
      {
        codigo: "1842",
        descricao: "AMORTECEDOR PRE MONTADO VS.02",
        quantidade: 1,
      },
      { codigo: "1541", descricao: "BASE GFZ 28,5MM AZUL VS.0", quantidade: 2 },
      { codigo: "3337", descricao: "RODA 18 X 4 M VS.02", quantidade: 2 },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "1958",
    produtoDescricao: "AMORTECEDOR AZURE DIREITO PRETO MONTADO C/ SUPORTE",
    itens: [
      {
        codigo: "906",
        descricao: "PARAFUSO MAQUINA PANELA Ø4X20MM ZB (CAB. 6MM - PH2)",
        quantidade: 2,
      },
      { codigo: "907", descricao: "PORCA SEXTAVADA M4 ZB", quantidade: 2 },
      {
        codigo: "1951",
        descricao: "SUPORTE P/ AMORTECEDOR ROSQUEADO ZINCO METALICO",
        quantidade: 2,
      },
      {
        codigo: "1588",
        descricao: "CORPO AMORTECEDOR PLASTICO COMBAT",
        quantidade: 1,
      },
      {
        codigo: "1585",
        descricao: "GANCHO PLASTICO PRETO COMBAT",
        quantidade: 1,
      },
      {
        codigo: "1377",
        descricao: "MOLA TRACAO MISTA 85 OL PT",
        quantidade: 1,
      },
      { codigo: "1418", descricao: "PISTAO 10 X 97MM 6N", quantidade: 1 },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "1959",
    produtoDescricao: "AMORTECEDOR AZURE ESQUERDO PRETO MONTADO C/ SUPORTE",
    itens: [
      {
        codigo: "906",
        descricao: "PARAFUSO MAQUINA PANELA Ø4X20MM ZB (CAB. 6MM - PH2)",
        quantidade: 2,
      },
      { codigo: "907", descricao: "PORCA SEXTAVADA M4 ZB", quantidade: 2 },
      {
        codigo: "1951",
        descricao: "SUPORTE P/ AMORTECEDOR ROSQUEADO ZINCO METALICO",
        quantidade: 2,
      },
      {
        codigo: "1588",
        descricao: "CORPO AMORTECEDOR PLASTICO COMBAT",
        quantidade: 1,
      },
      {
        codigo: "1585",
        descricao: "GANCHO PLASTICO PRETO COMBAT",
        quantidade: 1,
      },
      {
        codigo: "1377",
        descricao: "MOLA TRACAO MISTA 85 OL PT",
        quantidade: 1,
      },
      { codigo: "1418", descricao: "PISTAO 10 X 97MM 6N", quantidade: 1 },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3348",
    produtoDescricao: "AMORTECEDOR 30 VERDE VS.03",
    itens: [
      {
        codigo: "1842",
        descricao: "AMORTECEDOR PRE MONTADO VS.02",
        quantidade: 1,
      },
      { codigo: "1549", descricao: "BASE GFZ 30MM VERDE VS.02", quantidade: 2 },
      { codigo: "3337", descricao: "RODA 18 X 4 M VS.02", quantidade: 2 },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "1842",
    produtoDescricao: "AMORTECEDOR PRE MONTADO VS.02",
    itens: [
      { codigo: "1097", descricao: "GANCHO PLASTICO AL", quantidade: 1 },
      {
        codigo: "1841",
        descricao: "CORPO AMORTECEDOR PLASTICO 52 VS.02",
        quantidade: 1,
      },
      { codigo: "1105", descricao: "PISTAO 10 X 82MM 10N", quantidade: 1 },
      {
        codigo: "1648",
        descricao: "MOLA HELICOIDAL DE TRACAO C57 D5,2 D.G2,6 P0,7",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.07,
      },
    ],
  },
  {
    produtoId: "3350",
    produtoDescricao: "AMORTECEDOR 33 VERMELHO VS.03",
    itens: [
      {
        codigo: "1842",
        descricao: "AMORTECEDOR PRE MONTADO VS.02",
        quantidade: 1,
      },
      {
        codigo: "1548",
        descricao: "BASE GFZ 33,5MM VERMELHA VS.02",
        quantidade: 2,
      },
      { codigo: "3337", descricao: "RODA 18 X 4 M VS.02", quantidade: 2 },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "1685",
    produtoDescricao: "AMORTECEDOR COMBAT CINZA",
    itens: [
      {
        codigo: "1588",
        descricao: "CORPO AMORTECEDOR PLASTICO COMBAT",
        quantidade: 1,
      },
      {
        codigo: "1583",
        descricao: "GANCHO PLASTICO CINZA COMBAT",
        quantidade: 1,
      },
      { codigo: "1537", descricao: "MOLA TRACAO MISTA ZB 88MM", quantidade: 1 },
      { codigo: "1418", descricao: "PISTAO 10 X 97MM 6N", quantidade: 1 },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "2699",
    produtoDescricao: "BATENTE MONTADO V CONVEXO",
    itens: [
      {
        codigo: "2172",
        descricao: "FIXACAO METALICA U/V ZINCADA CONCAVA/CONVEXA",
        quantidade: 1,
      },
      { codigo: "111", descricao: "PORCA SEXTAVADA M6 ZB", quantidade: 1 },
      {
        codigo: "1347",
        descricao: "PARAFUSO MAQUINA CHATA Ø6X25MM ZB",
        quantidade: 1,
      },
      { codigo: "2698", descricao: "BATENTE V CONVEXO", quantidade: 1 },
    ],
  },
  {
    produtoId: "1686",
    produtoDescricao: "AMORTECEDOR COMBAT PRETO",
    itens: [
      {
        codigo: "1588",
        descricao: "CORPO AMORTECEDOR PLASTICO COMBAT",
        quantidade: 1,
      },
      {
        codigo: "1585",
        descricao: "GANCHO PLASTICO PRETO COMBAT",
        quantidade: 1,
      },
      {
        codigo: "1377",
        descricao: "MOLA TRACAO MISTA 85 OL PT",
        quantidade: 1,
      },
      { codigo: "1418", descricao: "PISTAO 10 X 97MM 6N", quantidade: 1 },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "2972",
    produtoDescricao: "CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 80KG",
    itens: [
      {
        codigo: "2974",
        descricao: "CARRO REBITADO COM AMORTECIMENTO JP700V SOFT 80KG",
        quantidade: 1,
      },
      {
        codigo: "2685",
        descricao: "TAMPA PLASTICA GANCHO CINZA",
        quantidade: 1,
      },
      {
        codigo: "2962",
        descricao: "PISTAO 10 X 97MM 15N PONTEIRA CINZA",
        quantidade: 1,
      },
      { codigo: "2963", descricao: "MOLA TRACAO MISTA 83 ZA", quantidade: 1 },
      {
        codigo: "2683",
        descricao: "GANCHO PLASTICO JP700 SOFT CINZA",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRNACA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "2684",
    produtoDescricao: "CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 40KG",
    itens: [
      {
        codigo: "2686",
        descricao: "CARRO REBITADO COM AMORTECIMENTO JP700V SOFT 40KG",
        quantidade: 1,
      },
      {
        codigo: "3435",
        descricao: "GANCHO PLASTICO JP700V SOFT CINZA VS. 02",
        quantidade: 1,
      },
      {
        codigo: "1377",
        descricao: "MOLA TRACAO MISTA 85 OL PT",
        quantidade: 1,
      },
      { codigo: "1418", descricao: "PISTAO 10 X 97MM 6N", quantidade: 1 },
      {
        codigo: "2685",
        descricao: "TAMPA PLASTICA GANCHO CINZ",
        quantidade: 1,
      },
      { codigo: "1345", descricao: "PORCA SEXTAVADA M8 ZB", quantidade: 2 },
      {
        codigo: "1346",
        descricao: "PARAFUSO MAQUINA SEXTAVADO Ø8X35MM ZB",
        quantidade: 1,
      },
      {
        codigo: "1384",
        descricao: "ARRUELA DENTADA EXTERNA M8 ZB",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "1341",
    produtoDescricao: " CARRO PRE MONTADO JP700 AZUL",
    itens: [
      {
        codigo: "1336",
        descricao: "CORPO JP700 AZUL",
        quantidade: 1,
      },
      {
        codigo: "1345",
        descricao: "PORCA SEXTAVADA M8 ZB",
        quantidade: 2,
      },
      {
        codigo: "1346",
        descricao: "PARAFUSO MAQUINA SEXTAVADO Ø8X35MM ZB",
        quantidade: 1,
      },
      {
        codigo: "1384",
        descricao: "ARRUELA DENTADA EXTERNA M8 ZB",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2336",
    produtoDescricao: "CARRO PRE MONTADO JP700 CINZA",
    itens: [
      {
        codigo: "2335",
        descricao: "CORPO JP700 CINZA",
        quantidade: 1,
      },
      {
        codigo: "1345",
        descricao: "PORCA SEXTAVADA M8 ZB",
        quantidade: 2,
      },
      {
        codigo: "1346",
        descricao: "PARAFUSO MAQUINA SEXTAVADO Ø8X35MM ZB",
        quantidade: 1,
      },
      {
        codigo: "1384",
        descricao: "ARRUELA DENTADA EXTERNA M8 ZB",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3232",
    produtoDescricao: "CARRO PRE MONTADO JP700V SOFT 80KG",
    itens: [
      {
        codigo: "2957",
        descricao: "CORPO JP700 80KG AZUL",
        quantidade: 1,
      },
      {
        codigo: "1345",
        descricao: "PORCA SEXTAVADA M8 ZB",
        quantidade: 2,
      },
      {
        codigo: "1346",
        descricao: "PARAFUSO MAQUINA SEXTAVADO Ø8X35MM ZB",
        quantidade: 1,
      },
      {
        codigo: "1384",
        descricao: "ARRUELA DENTADA EXTERNA M8 ZB",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2254",
    produtoDescricao: "CARRO PRE MONTADO JP735",
    itens: [
      {
        codigo: "2252",
        descricao: "CORPO JP735 ZINCADO",
        quantidade: 1,
      },
      {
        codigo: "2251",
        descricao: "CAPINHA 57,5MMX22,9MMX14,5MM CINZA DISTANCIADORA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2353",
    produtoDescricao: "CONJUNTO ACESSORIO JP700/ JP740 SUPORTE EMBUTIDO",
    itens: [
      {
        codigo: "3295",
        descricao: "SUPORTE EMBUTIDO 30 ZINCADO ROSQUEADO REV V2",
        quantidade: 2,
      },
      {
        codigo: "2351",
        descricao: "CHAVE DE BOCA 6MM REV",
        quantidade: 1,
      },
      {
        codigo: "2644",
        descricao: "GUIA PLASTICA DE RASGO 10MM MONTADA REV",
        quantidade: 1,
      },
      {
        codigo: "3032",
        descricao: "ELASTICO LATEX Nº8",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2759",
    produtoDescricao: "CONJUNTO ACESSORIO JP700 SOFT 40/ 80KG SUPORTE TOPO",
    itens: [
      {
        codigo: "1515",
        descricao: "SUPORTE TOPO 10 ZINCADO REV",
        quantidade: 2,
      },
      {
        codigo: "1506",
        descricao: "CHAVE DE BOCA 13MM REV",
        quantidade: 1,
      },
      {
        codigo: "2695",
        descricao: "CHAVE ALLEN HEXAGONAL 2,5MM OX",
        quantidade: 1,
      },
      {
        codigo: "3032",
        descricao: "ELASTICO LATEX Nº8",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3101",
    produtoDescricao: "CONJUNTO ACESSORIO JP700 SUPORTE EMBUTIDO",
    itens: [
      {
        codigo: "3295",
        descricao: "SUPORTE EMBUTIDO 30 ZINCADO ROSQUEADO REV V2",
        quantidade: 0,
      },
      {
        codigo: "2351",
        descricao: "CHAVE DE BOCA 6MM REV",
        quantidade: 0,
      },
      {
        codigo: "2644",
        descricao: "GUIA PLASTICA DE RASGO 10MM MONTADA REV",
        quantidade: 0,
      },
      {
        codigo: "3097",
        descricao: "MANUAL JP700 SUPORTE EMBUTIDO",
        quantidade: 0,
      },
      {
        codigo: "3032",
        descricao: "ELASTICO LATEX Nº8",
        quantidade: 0,
      },
    ],
  },
  {
    produtoId: "3152",
    produtoDescricao: "CONJUNTO ACESSORIO JP700 SUPORTE EMBUTIDO S/ GUIA",
    itens: [
      {
        codigo: "3295",
        descricao: "SUPORTE EMBUTIDO 30 ZINCADO ROSQUEADO REV V2",
        quantidade: 2,
      },
      {
        codigo: "2351",
        descricao: "CHAVE DE BOCA 6MM REV",
        quantidade: 1,
      },
      {
        codigo: "3156",
        descricao: "MANUAL JP700 SUPORTE EMBUTIDO S/ GUIA",
        quantidade: 1,
      },
      {
        codigo: "3032",
        descricao: "ELASTICO LATEX Nº8",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2280",
    produtoDescricao: "CONJUNTO ACESSORIO JP700 SUPORTE LATERAL",
    itens: [
      {
        codigo: "1514",
        descricao: "SUPORTE LATERAL 20 ZINCADO REV",
        quantidade: 2,
      },
      {
        codigo: "1509",
        descricao: "GUIA PLASTICA DE RASGO 6,3/ 9,3 REV",
        quantidade: 1,
      },
      {
        codigo: "1506",
        descricao: "CHAVE DE BOCA 13MM REV",
        quantidade: 1,
      },
      {
        codigo: "1351",
        descricao: "MANUAL JP700 75G",
        quantidade: 1,
      },
      {
        codigo: "3032",
        descricao: "ELASTICO LATEX Nº8",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2279",
    produtoDescricao: "CONJUNTO ACESSORIO JP700 SUPORTE TOPO",
    itens: [
      {
        codigo: "1515",
        descricao: "SUPORTE TOPO 10 ZINCADO REV",
        quantidade: 2,
      },
      {
        codigo: "1509",
        descricao: "GUIA PLASTICA DE RASGO 6,3/ 9,3 REV",
        quantidade: 1,
      },
      {
        codigo: "1506",
        descricao: "CHAVE DE BOCA 13MM REV",
        quantidade: 1,
      },
      {
        codigo: "1351",
        descricao: "MANUAL JP700 75G",
        quantidade: 1,
      },
      {
        codigo: "3032",
        descricao: "ELASTICO LATEX Nº8",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3054",
    produtoDescricao: "CONJUNTO ACESSORIO JP740 SUPORTE TOPO",
    itens: [
      {
        codigo: "1515",
        descricao: "SUPORTE TOPO 10 ZINCADO REV",
        quantidade: 2,
      },
      {
        codigo: "2644",
        descricao: "GUIA PLASTICA DE RASGO 10MM MONTADA REV",
        quantidade: 1,
      },
      {
        codigo: "1506",
        descricao: "CHAVE DE BOCA 13MM REV",
        quantidade: 1,
      },
      {
        codigo: "1351",
        descricao: "MANUAL JP700 75G",
        quantidade: 1,
      },
      {
        codigo: "3032",
        descricao: "ELASTICO LATEX Nº8",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "7004-44882",
    produtoDescricao:
      "ENCARTE E GABARITO (TERC.) | ENCARTE ESPANHOL SUP TV VS.02",
    itens: [
      {
        codigo: "217",
        descricao: "GABARITO SUPORTE DE TV",
        quantidade: 1,
      },
      {
        codigo: "591",
        descricao:
          "EMBALAGEM SACO PLASTICO 15CM X 20CM 0,16MIC PE CRISTAL INCOLOR",
        quantidade: 1,
      },
      {
        codigo: "2722",
        descricao: "ENCARTE ESPANHOL SUPORTE TV 75GR VS.02",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "12003-21861",
    produtoDescricao:
      "ENCARTE E GABARITO (TERC.) VER | ENCARTE SUP DE TV MP30196",
    itens: [
      {
        codigo: "217",
        descricao: "GABARITO SUPORTE DE TV",
        quantidade: 1,
      },
      {
        codigo: "213",
        descricao: "ENCARTE SUPORTE DE TV MP30196 75GR",
        quantidade: 1,
      },
      {
        codigo: "1858",
        descricao:
          "EMBALAGEM SACO PLASTICO 18CM X 28CM 0,16MIC PE CRISTAL INCOLOR COM IMP",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "550",
    produtoDescricao: "FREIO 01 CORTADO",
    itens: [
      {
        codigo: "553",
        descricao: "FREIO 01",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3343",
    produtoDescricao: "GUIA MONTADA GFZ 32MM AMARELA VS.03",
    itens: [
      {
        codigo: "1547",
        descricao: "BASE GFZ 32MM AMARELA VS.02",
        quantidade: 2,
      },
      {
        codigo: "3337",
        descricao: "RODA 18 X 4 M VS.02",
        quantidade: 2,
      },
      {
        codigo: "1550",
        descricao: "CORPO GUIA FOLGA ZERO VS.02",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3341",
    produtoDescricao: "GUIA MONTADA GFZ 28,5MM AZUL VS.03",
    itens: [
      {
        codigo: "1541",
        descricao: "BASE GFZ 28,5MM AZUL VS.",
        quantidade: 2,
      },
      {
        codigo: "3337",
        descricao: "RODA 18 X 4 M VS.02",
        quantidade: 2,
      },
      {
        codigo: "1550",
        descricao: "CORPO GUIA FOLGA ZERO VS.02",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3351",
    produtoDescricao: "GUIA MONTADE UNIVERSAL FOLGA ZERO VS.03",
    itens: [
      {
        codigo: "3337",
        descricao: "RODA 18 X 4 M VS.02",
        quantidade: 2,
      },
      {
        codigo: "1175",
        descricao: "CORPO GUIA UNIVERSAL GFZ",
        quantidade: 1,
      },
      {
        codigo: "1177",
        descricao: "CAIXA PLASTICA UNIVERSAL GFZ",
        quantidade: 2,
      },
      {
        codigo: "2238",
        descricao: "BASE GUIA COM AMORTECIMENTO AFZU CINZA",
        quantidade: 2,
      },
      {
        codigo: "1419",
        descricao: "ELASTICO LATEX Nº3/8 - PESADO",
        quantidade: 1,
      },
      {
        codigo: "1580",
        descricao: "MANUAL GUIA UNIVERSAL FOLGA ZERO 70G VS.02",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3342",
    produtoDescricao: "GUIA MONTADA GFZ 30MM VERDE VS.03",
    itens: [
      {
        codigo: "1549",
        descricao: "BASER GFZ 30MM VERDE VS.02",
        quantidade: 2,
      },
      {
        codigo: "3337",
        descricao: "RODA 18 X 4 M VS.02",
        quantidade: 2,
      },
      {
        codigo: "1550",
        descricao: "CORPO GUIA FOLGA ZERO VS.02",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3345",
    produtoDescricao: "GUIA MONTADA GFZ 33,5MM VERMELHA VS.03",
    itens: [
      {
        codigo: "1548",
        descricao: "BASER GFZ 33,5MM VERMELHA VS.02",
        quantidade: 2,
      },
      {
        codigo: "3337",
        descricao: "RODA 18 X 4 M VS.02",
        quantidade: 2,
      },
      {
        codigo: "1550",
        descricao: "CORPO GUIA FOLGA ZERO VS.02",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3344",
    produtoDescricao: "GUIA MONTADA GFZ 27MM VIRGEM VS.03",
    itens: [
      {
        codigo: "1539",
        descricao: "BASE GFZ 27MM VIRGEM VS.02",
        quantidade: 2,
      },
      {
        codigo: "3337",
        descricao: "RODA 18 X 4 M VS.02",
        quantidade: 2,
      },
      {
        codigo: "1550",
        descricao: "CORPO GUIA FOLGA ZERO VS.02",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "PARAFUSO MADEIRA SOBERBA PANELA Ø4,0X25MM BC",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "448",
    produtoDescricao: "GUIA MONTADA GMD05 COM CAPA 22X3X8MM CINZA",
    itens: [
      {
        codigo: "164",
        descricao: "GUIA ZINCADA GMD05",
        quantidade: 1,
      },
      {
        codigo: "526",
        descricao: "CAPINHA 22MMX3MMX8MM CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "846",
    produtoDescricao: "GUIA MONTADA GMD06 COM CAPA 22X4X8MM BRANCA",
    itens: [
      {
        codigo: "165",
        descricao: "GUIA ZINCADA GMD06",
        quantidade: 1,
      },
      {
        codigo: "527",
        descricao: "CAPINHA 22MMX4MMX8MM BRANCA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "445",
    produtoDescricao: "GUIA MONTADA GMD06 COM CAPA 22X3X8MM CINZ",
    itens: [
      {
        codigo: "165",
        descricao: "GUIA ZINCADA GMD06",
        quantidade: 1,
      },
      {
        codigo: "526",
        descricao: "CAPINHA 22MMX3MMX8MM CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "446",
    produtoDescricao: "GUIA MONTADA GMD07 COM CAPA 18X4X8MM CINZA",
    itens: [
      {
        codigo: "166",
        descricao: "GUIA MONTADA GMD07",
        quantidade: 1,
      },
      {
        codigo: "530",
        descricao: "CAPINHA 18MMX4MMX8MM CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "463",
    produtoDescricao: "GUIA MONTADA GMD09 COM CAPA 22X3X5MM CINZA",
    itens: [
      {
        codigo: "168",
        descricao: "GUIA ZINCADA GMD09",
        quantidade: 1,
      },
      {
        codigo: "531",
        descricao: "CAPINHA 22MMX3MMX5MM CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "464",
    produtoDescricao: "GUIA MONTADA GMD14 COM CAPA 22X3X8MM CINZA",
    itens: [
      {
        codigo: "177",
        descricao: "GUIA ZINCADA GMD14",
        quantidade: 1,
      },
      {
        codigo: "526",
        descricao: "CAPINHA 22MMX3MMX8MM CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "524",
    produtoDescricao: "GUIA MONTADA G JM910R COM CAPA 23X4X12MM CINZA",
    itens: [
      {
        codigo: "178",
        descricao: "GUIA ZINCADA G",
        quantidade: 1,
      },
      {
        codigo: "532",
        descricao: "CAPINHA 23MMX4MMX12MM CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3408",
    produtoDescricao: "GUIA MONTADA COM AMORTECIMENTO AFZU DIREITA VS.03",
    itens: [
      {
        codigo: "2436",
        descricao: "CORPO GUIA COM AMORTECIMENTO AFZU DIREITO REV",
        quantidade: 1,
      },
      {
        codigo: "2238",
        descricao: "BASE GUIA COM AMORTECIMENTO AFZU CINZA",
        quantidade: 2,
      },
      {
        codigo: "3399",
        descricao: "RODA 15,5 M VS.03",
        quantidade: 2,
      },
      {
        codigo: "1177",
        descricao: "CAIXA PLASTICA UNIVERSAL GFZ",
        quantidade: 2,
      },
      {
        codigo: "2234",
        descricao: "GANCHO PLASTICO CINZA AFZU",
        quantidade: 1,
      },
      {
        codigo: "1377",
        descricao: "MOLA TRACAO MISTA 85 OL PT",
        quantidade: 1,
      },
      {
        codigo: "1418",
        descricao: "PISTAO 10 X 97MM 6N",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3409",
    produtoDescricao: "GUIA MONTADA COM AMORTECIMENTO AFZU ESQUERDA VS.03",
    itens: [
      {
        codigo: "2234",
        descricao: "GANCHO PLASTICO CINZA AFZU",
        quantidade: 1,
      },
      {
        codigo: "2238",
        descricao: "BASE GUIA COM AMORTECIMENTO AFZU CINZA",
        quantidade: 2,
      },
      {
        codigo: "3399",
        descricao: "RODA 15,5 M VS.03",
        quantidade: 2,
      },
      {
        codigo: "1177",
        descricao: "CAIXA PLASTICA UNIVERSAL GF",
        quantidade: 2,
      },
      {
        codigo: "2234",
        descricao: "GANCHO PLASTICO CINZA AFZU",
        quantidade: 1,
      },
      {
        codigo: "1377",
        descricao: "MOLA TRACAO MISTA 85 OL PT",
        quantidade: 1,
      },
      {
        codigo: "1418",
        descricao: "PISTAO 10 X 97MM 6N",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "1707",
    produtoDescricao: "GUIA MONTADA CLICK R1.26,8.11",
    itens: [
      {
        codigo: "1312",
        descricao: "CORPO GUIA CLICK R1.11",
        quantidade: 1,
      },
      {
        codigo: "1315",
        descricao: "PINO GUIA CLICK",
        quantidade: 1,
      },
      {
        codigo: "1706",
        descricao: "RODA 26,8M CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1318",
    produtoDescricao: "GUIA MONTADA CLICK R1.26.11",
    itens: [
      {
        codigo: "1312",
        descricao: "CORPO GUIA CLICK R1.11",
        quantidade: 1,
      },
      {
        codigo: "1315",
        descricao: "PINO GUIA CLICK",
        quantidade: 1,
      },
      {
        codigo: "1314",
        descricao: "RODA 26 CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2692",
    produtoDescricao: "GUIA MONTADA CLICK R1.26.14 VS.02",
    itens: [
      {
        codigo: "2691",
        descricao: "CORPO GUIA CLICK R1.14 VS.02",
        quantidade: 1,
      },
      {
        codigo: "1315",
        descricao: "PINO GUIA CLICK",
        quantidade: 1,
      },
      {
        codigo: "1314",
        descricao: "RODA 26 M CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2690",
    produtoDescricao: "GUIA MONTADA CLICK R1.27,6.14 VS.02",
    itens: [
      {
        codigo: "2691",
        descricao: "CORPO GUIA CLICK R1.14 VS.02",
        quantidade: 1,
      },
      {
        codigo: "1315",
        descricao: "PINO GUIA CLICK",
        quantidade: 1,
      },
      {
        codigo: "1897",
        descricao: "RODA 27,6 M",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1320",
    produtoDescricao: "GUIA MONTADA CLICK R1.32.11",
    itens: [
      {
        codigo: "1312",
        descricao: "CORPO GUIA CLICK R1.11",
        quantidade: 1,
      },
      {
        codigo: "1315",
        descricao: "PINO GUIA CLICK",
        quantidade: 1,
      },
      {
        codigo: "1313",
        descricao: "RODA 32 M CINZ",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3412",
    produtoDescricao: "GUIA MONTADA CLICK SOFT R1.26.11 VS.02",
    itens: [
      {
        codigo: "1312",
        descricao: "CORPO GUIA CLICK R1.11",
        quantidade: 1,
      },
      {
        codigo: "1315",
        descricao: "PINO GUIA CLICK",
        quantidade: 1,
      },
      {
        codigo: "3398",
        descricao: "RODA 26 M VS.02",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3414",
    produtoDescricao: "GUIA MONTADA CLICK SOFT R1.30,5.11 VS.02",
    itens: [
      {
        codigo: "1312",
        descricao: "CORPO GUIA CLICK R1.11",
        quantidade: 1,
      },
      {
        codigo: "1315",
        descricao: "PINO GUIA CLICK",
        quantidade: 1,
      },
      {
        codigo: "3397",
        descricao: "RODA 30,5 M VS.02",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2693",
    produtoDescricao: "GUIA MONTADA CLICK R1.32.14 VS.02",
    itens: [
      {
        codigo: "2691",
        descricao: "CORPO GUIA CLICK R1.14 VS.02",
        quantidade: 1,
      },
      {
        codigo: "1313",
        descricao: "RODA 32 M CINZA",
        quantidade: 1,
      },
      {
        codigo: "1315",
        descricao: "PINO GUIA CLICK",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3405",
    produtoDescricao: "GUIA MONTADA G AZURE VS.02",
    itens: [
      {
        codigo: "1365",
        descricao: "BASE AZURE",
        quantidade: 1,
      },
      {
        codigo: "1368",
        descricao: "CORPO GUIA G ZINCADA AZURE",
        quantidade: 1,
      },
      {
        codigo: "3403",
        descricao: "RODA 14 M VS 02",
        quantidade: 2,
      },
      {
        codigo: "1366",
        descricao: "TAMPA PLASTICA AZURE",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "443",
    produtoDescricao: "GUIA MONTADA MOLA PLASTICA COM GATILHO 2,5MM",
    itens: [
      {
        codigo: "295",
        descricao: "CORPO GUIA MOLA GATILHO",
        quantidade: 1,
      },
      {
        codigo: "502",
        descricao: "LINGUETA 2,5MM GUIA MOLA GATILHO",
        quantidade: 1,
      },
      {
        codigo: "183",
        descricao: "MOLA HELICOIDAL C24 D4 P2 AMARELA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "452",
    produtoDescricao: "GUIA MONTADA MOLA PLASTICA COM GATILHO 4,5MM",
    itens: [
      {
        codigo: "183",
        descricao: "MOLA HELICOIDAL C24 D4 P2 AMARELA",
        quantidade: 1,
      },
      {
        codigo: "503",
        descricao: "LINGUETA 4,5MM GUIA MOLA GATILHO",
        quantidade: 1,
      },
      {
        codigo: "295",
        descricao: "CORPO GUIA MOLA GATILHO",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "187",
    produtoDescricao: "GUIA MONTADA MOLA PLASTICA COM GATILHO DESLOCADO 2,5MM",
    itens: [
      {
        codigo: "295",
        descricao: "CORPO GUIA MOLA GATILHO",
        quantidade: 1,
      },
      {
        codigo: "505",
        descricao: "LINGUETA 2,5MM GUIA MOLA GATILHO DESLOCADA",
        quantidade: 1,
      },
      {
        codigo: "183",
        descricao: "MOLA HELICOIDAL C24 D4 P2 AMARELA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1562",
    produtoDescricao: "GUIA MONTADA JP25 22M",
    itens: [
      {
        codigo: "183",
        descricao: "MOLA HELICOIDAL C24 D4 P2 AMARELA",
        quantidade: 2,
      },
      {
        codigo: "1560",
        descricao: "CORPO GUIA JP25",
        quantidade: 1,
      },
      {
        codigo: "1558",
        descricao: "MIOLO PLASTICO GUIA JP25",
        quantidade: 1,
      },
      {
        codigo: "1559",
        descricao: "RODA 22 M X 5,8",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "451",
    produtoDescricao: "GUIA MONTADA",
    itens: [
      {
        codigo: "183",
        descricao: "MOLA HELICOIDAL C24 D4 P2 AMARELA",
        quantidade: 1,
      },
      {
        codigo: "628",
        descricao: "LINGUETA 2,04MM JP55",
        quantidade: 1,
      },
      {
        codigo: "627",
        descricao: "CORPO GUIA JP55*",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1741",
    produtoDescricao: "GUIA MONTADA MM CINZA COM CAPA 22X4X8MM BRANCA",
    itens: [
      {
        codigo: "527",
        descricao: "CAPINHA 22MMX4MMX8MM BRANCA",
        quantidade: 1,
      },
      {
        codigo: "506",
        descricao: "LIGNUETA 1,5MM M ZINCADA",
        quantidade: 1,
      },
      {
        codigo: "1740",
        descricao: "CORPO GUIA GMM CINZA",
        quantidade: 1,
      },
      {
        codigo: "183",
        descricao: "MOLA HELICOIDAL C24 D4 P2 AMARELA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "515",
    produtoDescricao: "GUIA MONTADA MM COM CAPA 22X4X8MM BRANCA",
    itens: [
      {
        codigo: "527",
        descricao: "CAPINHA 22MMX4MMX8MM BRANCA",
        quantidade: 1,
      },
      {
        codigo: "506",
        descricao: "LIGNUETA 1,5MM M ZINCADA",
        quantidade: 1,
      },
      {
        codigo: "296",
        descricao: "CORPO GUIA GMM VIRGEM",
        quantidade: 1,
      },
      {
        codigo: "183",
        descricao: "MOLA HELICOIDAL C24 D4 P2 AMARELA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "514",
    produtoDescricao: "GUIA MONTADA MM COM CAPA 22X3X8MM CINZA",
    itens: [
      {
        codigo: "526",
        descricao: "CAPINHA 22MX3MMX8MM CINZA",
        quantidade: 1,
      },
      {
        codigo: "506",
        descricao: "LIGNUETA 1,5MM M ZINCADA",
        quantidade: 1,
      },
      {
        codigo: "296",
        descricao: "CORPO GUIA GMM VIRGEM",
        quantidade: 1,
      },
      {
        codigo: "183",
        descricao: "MOLA HELICOIDAL C24 D4 P2 AMARELA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "519",
    produtoDescricao: "GUIA MONTADA MMD COM CAPA 22X3X8MM CINZ",
    itens: [
      {
        codigo: "526",
        descricao: "CAPINHA 22MX3MMX8MM CINZA",
        quantidade: 1,
      },
      {
        codigo: "158",
        descricao: "LINGUETA 1,5MM MD ZINCADA",
        quantidade: 1,
      },
      {
        codigo: "296",
        descricao: "CORPO GUIA GMM VIRGEM",
        quantidade: 1,
      },
      {
        codigo: "183",
        descricao: "MOLA HELICOIDAL C24 D4 P2 AMARELA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2091",
    produtoDescricao: "GUIA MONTADA JM620 C/ CAPA 23X4X12MM CINZA",
    itens: [
      {
        codigo: "2090",
        descricao: "GUIA ZINCADA JM620",
        quantidade: 1,
      },
      {
        codigo: "532",
        descricao: "CAPINHA 23MMX4MMX12MM CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1631",
    produtoDescricao: "GUIA MONTADA JP35 17,5M",
    itens: [
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 1,
      },
      {
        codigo: "1628",
        descricao: "CORPO GUIA JP35",
        quantidade: 1,
      },
      {
        codigo: "1625",
        descricao: "MIOLO PLASTICO GUIA JP35",
        quantidade: 1,
      },
      {
        codigo: "1623",
        descricao: "RODA 17,5 M X 6,0",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3404",
    produtoDescricao: "GUIA MONTADA P AZURE VS.02",
    itens: [
      {
        codigo: "1365",
        descricao: "BASE AZURE",
        quantidade: 1,
      },
      {
        codigo: "1367",
        descricao: "CORPO GUIA P ZINCADA AZURE",
        quantidade: 1,
      },
      {
        codigo: "3403",
        descricao: "RODA 14 M VS 02",
        quantidade: 2,
      },
      {
        codigo: "1366",
        descricao: "TAMPA PLASTICA AZURE",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "523",
    produtoDescricao: "GUIA MONTADA P JM910R COM CAPA 23X4X12MM CINZA",
    itens: [
      {
        codigo: "532",
        descricao: "CAPINHA 23MMX4MMX12MM CINZA",
        quantidade: 1,
      },
      {
        codigo: "179",
        descricao: "GUIA ZINCADA P",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2643",
    produtoDescricao: "GUIA PLASTICA DE RASGO 10MM MONTADA",
    itens: [
      {
        codigo: "2641",
        descricao: "CORPO GUIA RASGO 10MM",
        quantidade: 1,
      },
      {
        codigo: "2642",
        descricao: "RODA 9,3 M",
        quantidade: 2,
      },
    ],
  },
  {
    produtoId: "3218",
    produtoDescricao: "MANUAL AMORTECEDOR FZ DOBRADO C/ EMBALAGEM",
    itens: [
      {
        codigo: "1122",
        descricao: "MANUAL KT AMORTECEDOR FOLGA ZERO 56GR",
        quantidade: 1,
      },
      {
        codigo: "1858",
        descricao:
          "EMBALAGEM SACO PLASTICO 18CM X 28CM 0,16MIC PE CRISTAL INCOLOR COM IMP",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3219",
    produtoDescricao: "MANUAL AMORTECEDOR FZ DOBRADO C/ EMBALAGEM (ESPANHOL)",
    itens: [
      {
        codigo: "1167",
        descricao: "MANUAL AMORTECEDOR FOLGA ZERO 70GR (ESPANHOL)",
        quantidade: 1,
      },
      {
        codigo: "1858",
        descricao:
          "EMBALAGEM SACO PLASTICO 18CM X 28CM 0,16MIC PE CRISTAL INCOLOR COM IMP",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2361",
    produtoDescricao: "MANUAL GUIA COM AMORTECIMENTO AFZU DOBRADO",
    itens: [
      {
        codigo: "2357",
        descricao: "MANUAL GUIA COM AMORTECIMENTO AFZU 75G",
        quantidade: 50,
      },
      {
        codigo: "1419",
        descricao: "ELASTICO LATEX Nº3/8 - PESADO",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2437",
    produtoDescricao: "RODA 25,5 M C CONVEXA COM GRAXA",
    itens: [
      {
        codigo: "1968",
        descricao: "RODA 25,5 M C CONVEXA",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "1028",
    produtoDescricao: "ROLDANA MONTADA JM581 40R E - 12MM",
    itens: [
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB. 6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      { codigo: "1029", descricao: "MIOLO JM581 /JM841 40R E", quantidade: 1 },
      {
        codigo: "1032",
        descricao: "CORPO ROLDANA JM581 ZINCADA - 12MM",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1039",
    produtoDescricao: "ROLDANA MONTADA JM581 40R E - 15MM",
    itens: [
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB. 6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      { codigo: "1029", descricao: "MIOLO JM581 /JM841 40R E", quantidade: 1 },
      {
        codigo: "1038",
        descricao: "CORPO ROLDANA JM581 ZINCADA - 15MM",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "348",
    produtoDescricao: "ROLDANA MONTADA JM600 29R COM CAPA 18MMX4MMX8MM CINZA",
    itens: [
      { codigo: "338", descricao: "ROLDANA SIMPLES JM600 29R", quantidade: 1 },
      { codigo: "530", descricao: "CAPINHA 18MMX4MMX8MM CINZA", quantidade: 1 },
    ],
  },
  {
    produtoId: "2088",
    produtoDescricao:
      "ROLDANA MONTADA JM620 EMBUTIDA 35R C/ CAPA 23X4X12MM CINZA",
    itens: [
      {
        codigo: "2087",
        descricao: "ROLDANA SIMPLES JM620 EMBUTIDA 35R",
        quantidade: 1,
      },
      {
        codigo: "532",
        descricao: "CAPINHA 23MMX4MMX12MM CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2525",
    produtoDescricao:
      "ROLDANA MONTADA JM621 SOBREPOSTA 35R C/ CAPA 23X4X12MM CZ",
    itens: [
      {
        codigo: "2526",
        descricao: "ROLDANA SIMPLES JM621 SOBREPOSTA 35R",
        quantidade: 1,
      },
      {
        codigo: "532",
        descricao: "CAPINHA 23MMX4MMX12MM CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1100",
    produtoDescricao: "ROLDANA MONTADA JM841 40R E TOR",
    itens: [
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB. 6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      {
        codigo: "1086",
        descricao: "CORPO ROLDANA JM841 ZINCADO",
        quantidade: 1,
      },
      {
        codigo: "1101",
        descricao: "MIOLO JM581 /JM841 40R E TORN",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1085",
    produtoDescricao: "ROLDANA MONTADA JM841 40R E",
    itens: [
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB. 6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      {
        codigo: "1086",
        descricao: "CORPO ROLDANA JM841 ZINCADO",
        quantidade: 1,
      },
      { codigo: "1029", descricao: "MIOLO JM581 /JM841 40R E", quantidade: 1 },
    ],
  },
  {
    produtoId: "545",
    produtoDescricao: "ROLDANA MONTADA JP100 20M",
    itens: [
      { codigo: "118", descricao: "REBITE ALUMINIO S/T 4-6", quantidade: 1 },
      { codigo: "575", descricao: "RODA 20 M JP", quantidade: 1 },
      { codigo: "292", descricao: "CORPO GUIA JP-100*", quantidade: 1 },
    ],
  },
  {
    produtoId: "905",
    produtoDescricao: "ROLDANA MONTADA JP102 NANO 26M",
    itens: [
      { codigo: "903", descricao: "RODA 26 M AMARELA", quantidade: 1 },
      {
        codigo: "904",
        descricao: "CORPO ROLDANA JP102 NANO PLASTICO*",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1620",
    produtoDescricao: "ROLDANA MONTADA JP240 40R CONCAVA TRAVA VERMELHA",
    itens: [
      {
        codigo: "1597",
        descricao: "TRAVA PLASTICA 04 VERMELHA",
        quantidade: 1,
      },
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB. 6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      {
        codigo: "1594",
        descricao: "CORPO ROLDANA JP240 PLASTICO CINZA",
        quantidade: 1,
      },
      { codigo: "1622", descricao: "MIOLO JP240 40R CONCAVA", quantidade: 1 },
      { codigo: "109", descricao: "PORCA SEXTAVADA M5 ZB", quantidade: 1 },
    ],
  },
  {
    produtoId: "1598",
    produtoDescricao: "ROLDANA MONTADA JP240 40R E TRAVA VERMELHA",
    itens: [
      {
        codigo: "1594",
        descricao: "CORPO ROLDANA JP240 PLASTICO CINZA",
        quantidade: 1,
      },
      { codigo: "1592", descricao: "MIOLO JP240 40R E", quantidade: 1 },
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB. 6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "1597",
        descricao: "TRAVA PLASTICA 04 VERMELHA",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      { codigo: "109", descricao: "PORCA SEXTAVADA M5 ZB", quantidade: 1 },
    ],
  },
  {
    produtoId: "1600",
    produtoDescricao: "ROLDANA MONTADA JP240 40R E TORN TRAVA AZUL",
    itens: [
      {
        codigo: "1594",
        descricao: "CORPO ROLDANA JP240 PLASTICO CINZA",
        quantidade: 1,
      },
      { codigo: "1599", descricao: "MIOLO JP240 40R E TORN", quantidade: 1 },
      { codigo: "1596", descricao: "TRAVA PLASTICA 04 AZUL", quantidade: 1 },
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB. 6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      { codigo: "109", descricao: "PORCA SEXTAVADA M5 ZB", quantidade: 1 },
    ],
  },
  {
    produtoId: "1697",
    produtoDescricao: "ROLDANA MONTADA JP240 38,5R CONCAVA TRAVA VERMELHA",
    itens: [
      {
        codigo: "1597",
        descricao: "TRAVA PLASTICA 04 VERMELHA",
        quantidade: 1,
      },
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB. 6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      {
        codigo: "1594",
        descricao: "CORPO ROLDANA JP240 PLASTICO CINZA",
        quantidade: 1,
      },
      { codigo: "1691", descricao: "MIOLO JP240 38,5R CONCAVA", quantidade: 1 },
      { codigo: "109", descricao: "PORCA SEXTAVADA M5 ZB", quantidade: 1 },
    ],
  },
  {
    produtoId: "1630",
    produtoDescricao: "ROLDANA MONTADA JP35R 22",
    itens: [
      {
        codigo: "1627",
        descricao: "CORPO ROLDANA JP35 PLASTICO",
        quantidade: 1,
      },
      {
        codigo: "1629",
        descricao: "MIOLO JP35R ZAMAK REBITADO",
        quantidade: 1,
      },
      { codigo: "1624", descricao: "TRAVA PLASTICA 05 AMARELO", quantidade: 1 },
      {
        codigo: "906",
        descricao: "PARAFUSO MAQUINA PANELA Ø4X20MM ZB (CAB. 6MM - PH2)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 1,
      },
      { codigo: "907", descricao: "PORCA SEXTAVADA M4 ZB", quantidade: 1 },
    ],
  },
  {
    produtoId: "1193",
    produtoDescricao: "ROLDANA MONTADA JP360 40R CONCAVA AZUL",
    itens: [
      {
        codigo: "1128",
        descricao: "PARAFUSO PARA PLASTICO CHATA Ø3,0X8MM ZB (CAB.6,2MM - PH2)",
        quantidade: 2,
      },
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB.6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      {
        codigo: "1150",
        descricao: "BOTAO PLASTICO JP360 AMARELO",
        quantidade: 1,
      },
      {
        codigo: "1149",
        descricao: "CORPO ROLDANA JP360 PLASTICO AZUL",
        quantidade: 1,
      },
      { codigo: "1181", descricao: "MIOLO JP360 40R CONCAVA", quantidade: 1 },
      {
        codigo: "1132",
        descricao: "CORPO ROLDANA JP360 ZINCADO",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1148",
    produtoDescricao: "ROLDANA MONTADA JP360 40R E AZUL",
    itens: [
      {
        codigo: "1128",
        descricao: "PARAFUSO PARA PLASTICO CHATA Ø3,0X8MM ZB (CAB.6,2MM - PH2)",
        quantidade: 2,
      },
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB.6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      {
        codigo: "1150",
        descricao: "BOTAO PLASTICO JP360 AMARELO",
        quantidade: 1,
      },
      {
        codigo: "1149",
        descricao: "CORPO ROLDANA JP360 PLASTICO AZUL",
        quantidade: 1,
      },
      { codigo: "1133", descricao: "MIOLO JP360 40R E", quantidade: 1 },
      {
        codigo: "1132",
        descricao: "CORPO ROLDANA JP360 ZINCADO",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1201",
    produtoDescricao: "ROLDANA MONTADA JP360 40R E TORN AZUL",
    itens: [
      {
        codigo: "1149",
        descricao: "CORPO ROLDANA JP360 PLASTICO AZUL",
        quantidade: 1,
      },
      { codigo: "1202", descricao: "MIOLO JP360 40R E TORN", quantidade: 1 },
      {
        codigo: "1132",
        descricao: "CORPO ROLDANA JP360 ZINCADO",
        quantidade: 1,
      },
      {
        codigo: "1128",
        descricao: "PARAFUSO PARA PLASTICO CHATA Ø3,0X8MM ZB (CAB.6,2MM - PH2)",
        quantidade: 2,
      },
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB.6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      {
        codigo: "1150",
        descricao: "BOTAO PLASTICO JP360 AMARELO",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1131",
    produtoDescricao: "ROLDANA MONTADA JP360 40R E CINZA",
    itens: [
      {
        codigo: "1135",
        descricao: "CORPO ROLDANA JP360 PLASTICO CINZA",
        quantidade: 1,
      },
      {
        codigo: "1133",
        descricao: "MIOLO JP360 40R E",
        quantidade: 1,
      },
      {
        codigo: "1132",
        descricao: "CORPO ROLDANA JP360 ZINCADO",
        quantidade: 1,
      },
      {
        codigo: "1128",
        descricao: "PARAFUSO PARA PLASTICO CHATA Ø3,0X8MM ZB (CAB.6,2MM - PH2)",
        quantidade: 2,
      },
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB. 6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      {
        codigo: "1136",
        descricao: "BOTAO PLASTICO JP360 VERMELHO",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1187",
    produtoDescricao: "ROLDANA MONTADA JP360 40R CONCAVA CINZA",
    itens: [
      {
        codigo: "1128",
        descricao: "PARAFUSO PARA PLASTICO CHATA Ø3,0X8MM ZB (CAB.6,2MM - PH2)",
        quantidade: 2,
      },
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB.6MM - PH3)",
        quantidade: 1,
      },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      {
        codigo: "1136",
        descricao: "BOTAO PLASTICO JP360 VERMELHO",
        quantidade: 1,
      },
      {
        codigo: "1135",
        descricao: "CORPO ROLDANA JP360 PLASTICO CINZA",
        quantidade: 1,
      },
      { codigo: "1181", descricao: "MIOLO JP360 40R CONCAVA", quantidade: 1 },
      {
        codigo: "1132",
        descricao: "CORPO ROLDANA JP360 ZINCADO",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "566",
    produtoDescricao: "ROLDANA MONTADA JP55 20M",
    itens: [
      { codigo: "118", descricao: "REBITE ALUMINIO S/T 4-6", quantidade: 1 },
      { codigo: "575", descricao: "RODA 20 M JP", quantidade: 1 },
      {
        codigo: "391",
        descricao: "CORPO ROLDANA JP55 PLASTICO*",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "1363",
    produtoDescricao: "ROLDANA MONTADA JP85 40R E TORN VS.02",
    itens: [
      {
        codigo: "1361",
        descricao: "MIOLO JP85 40R E TORN VS.02",
        quantidade: 1,
      },
      {
        codigo: "1362",
        descricao: "CORPO ROLDANA JP85 PLASTICO VS.02",
        quantidade: 1,
      },
      {
        codigo: "862",
        descricao: "TRAVA PLASTICA REDONDA AMARELA",
        quantidade: 1,
      },
      { codigo: "109", descricao: "PORCA SEXTAVADA M5 ZB", quantidade: 1 },
      {
        codigo: "18",
        descricao: "MOLA HELICOIDAL C18 D5,4 P2,5 BRANCO",
        quantidade: 2,
      },
      {
        codigo: "930",
        descricao: "PARAFUSO MAQUINA PANELA Ø5X20MM ZB (CAB.6MM - PH3)",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2176",
    produtoDescricao:
      "SUPORTE ESPACADOR DE TV 30MM PLASTICO* C/ FITA DUPLA FACE",
    itens: [
      {
        codigo: "856",
        descricao: "SUPORTE ESPACADOR DE TV 30MM PLASTICO*",
        quantidade: 1,
      },
      {
        codigo: "2171",
        descricao: "FITA DUPLA FACE 20 X 0,00MM ADEVISO ACRILICO MODIFICADO",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2221",
    produtoDescricao: "TOPE MONTADO U CONCAVO VS.02",
    itens: [
      {
        codigo: "2172",
        descricao: "FIXACAO METALICA U/V ZINCADA CONCAVA/CONVEXA",
        quantidade: 1,
      },
      {
        codigo: "111",
        descricao: "PORCA SEXTAVADA M6 ZB",
        quantidade: 1,
      },
      {
        codigo: "1347",
        descricao: "PARAFUSO MAQUINA CHATA Ø6X25MM ZB",
        quantidade: 1,
      },
      {
        codigo: "1327",
        descricao: "BASE U CONCAVA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "2201",
    produtoDescricao: "TOPE MONTADO V CONVEXO VS.02",
    itens: [
      {
        codigo: "2172",
        descricao: "FIXACAO METALICA U/V ZINCADA CONCAVA/CONVEXA",
        quantidade: 1,
      },
      {
        codigo: "111",
        descricao: "PORCA SEXTAVADA M6 ZB",
        quantidade: 1,
      },
      {
        codigo: "1347",
        descricao: "PARAFUSO MAQUINA CHATA Ø6X25MM ZB",
        quantidade: 1,
      },
      {
        codigo: "1326",
        descricao: "BASE V CONVEXA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3380",
    produtoDescricao: "CONJUNTO ACESSORIO JP700/SOFT40 SUPORTE EMBUTIDO",
    itens: [
      {
        codigo: "2719",
        descricao: "SUPORTE EMBUTIDO 30 ZINCADO ROSQUEADO REV",
        quantidade: 2,
      },
      {
        codigo: "2351",
        descricao: "CHAVE DE BOCA 6MM REV",
        quantidade: 1,
      },
      {
        codigo: "3032",
        descricao: "ELASTICO LATEX Nº8",
        quantidade: 1,
      },
      {
        codigo: "3378",
        descricao: "GUIA MONTADA RASGO L PAREDE 10 MM REV",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3377",
    produtoDescricao: "GUIA MONTADA RASGO L PAREDE 10 MM",
    itens: [
      {
        codigo: "3375",
        descricao: "CHAPA GUIA RASGO L PAREDE",
        quantidade: 1,
      },
      {
        codigo: "3376",
        descricao: "CAPINHA 19,5X9,3X12 CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3249",
    produtoDescricao:
      "CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 40KG SUPORTE EMBUTIDO",
    itens: [
      {
        codigo: "3458",
        descricao: "CARRO REBITADO COM AMORTECIMENTO JP700V SOFT 40KG VS.02",
        quantidade: 1,
      },
      {
        codigo: "3435",
        descricao: "GANCHO PLASTICO JP700 SOFT CINZA V.02",
        quantidade: 1,
      },
      {
        codigo: "1377",
        descricao: "MOLA TRACAO MISTA 85 OL PT",
        quantidade: 1,
      },
      {
        codigo: "1418",
        descricao: "PISTAO 10 X 97MM 6N",
        quantidade: 1,
      },
      {
        codigo: "2685",
        descricao: "TAMPA PLASTICA GANCHO CINZA",
        quantidade: 1,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.02,
      },
    ],
  },
  {
    produtoId: "3131",
    produtoDescricao: "CONJUNTO ACESSORIO JP740 SUPORTE EMBUTIDO GE",
    itens: [
      {
        codigo: "2719",
        descricao: "SUPORTE EMBUTIDO 30 ZINCADO ROSQUEADO REV",
        quantidade: 2,
      },
      {
        codigo: "2351",
        descricao: "CHAVE DE BOCA 6MM REV",
        quantidade: 1,
      },
      {
        codigo: "3032",
        descricao: "ELASTICO LATEX Nº8",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "7004-39342",
    produtoDescricao:
      "ENCARTE E GABARITO (TERC.) | ENCARTE SUP TV NOTAVEL VS.02",
    itens: [
      {
        codigo: "217",
        descricao: "GABARITO SUPORTE DE TV",
        quantidade: 1,
      },
      {
        codigo: "591",
        descricao:
          "EMBALAGEM SACO PLASTICO 15CM X 20CM 0,16MIC PE CRISTAL INCOLOR",
        quantidade: 1,
      },
      {
        codigo: "2175",
        descricao: "ENCARTE SUPORTE DE TV NOTAVEL 75G VS.02",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "7004-49375",
    produtoDescricao:
      "ENCARTE E GABARITO (TERC.) | ENCARTE SUP DE TV HB MOVEIS",
    itens: [
      {
        codigo: "217",
        descricao: "GABARITO SUPORTE DE TV",
        quantidade: 1,
      },
      {
        codigo: "591",
        descricao:
          "EMBALAGEM SACO PLASTICO 15CM X 20CM 0,16MIC PE CRISTAL INCOLOR",
        quantidade: 1,
      },
      {
        codigo: "3258",
        descricao: "ENCARTE SUPORTE DE TV HB MOVEIS 75G",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3273",
    produtoDescricao: "CORDAO SINTETICO 6,0 X 23,0 MM CORTADO",
    itens: [
      {
        codigo: "3184",
        descricao: "CORDAO SINTETICO LAPRENE TPE 6,0MM PRETO",
        quantidade: 0.023,
      },
    ],
  },
  {
    produtoId: "3183",
    produtoDescricao: "BATENTE ANTI DESCARRILHAMENTO PRE MONTADO CINZA",
    itens: [
      {
        codigo: "3181",
        descricao: "BATENTE ANTI DESCARRILHAMENTO CINZA",
        quantidade: 1,
      },
      {
        codigo: "3273",
        descricao: "CORDAO SINTETICO 6,0 X 23,0 MM CORTADO",
        quantidade: 2,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.0001,
      },
    ],
  },
  {
    produtoId: "3441",
    produtoDescricao: "BATENTE ANTI DESCARRILHAMENTO PRE MONTADO PRETO",
    itens: [
      {
        codigo: "3440",
        descricao: "BATENTE ANTI DESCARRILHAMENTO PRETO",
        quantidade: 1,
      },
      {
        codigo: "3273",
        descricao: "CORDAO SINTETICO 6,0 X 23,0 MM CORTADO",
        quantidade: 2,
      },
      {
        codigo: "3128",
        descricao: "GRAXA BRANCA LUBGREASE ASP ED 36",
        quantidade: 0.0001,
      },
    ],
  },
  {
    produtoId: "3267",
    produtoDescricao: "RODA MONTADA 74 R MOOVE",
    itens: [
      {
        codigo: "3166",
        descricao: "ROLAMENTO ESF BLIND 6201 ZZ S/ CANALETAS",
        quantidade: 1,
      },
      {
        codigo: "3171",
        descricao: "RODA 74 M C CONCAVA LADO A PLASTICO",
        quantidade: 1,
      },
      {
        codigo: "3172",
        descricao: "RODA 74 M C CONCAVA LADO B PLASTICO",
        quantidade: 1,
      },
      {
        codigo: "881",
        descricao: "PARAFUSO MADEIRA SOBERBA CHATA Ø3,5X14MM ZB",
        quantidade: 3,
      },
      {
        codigo: "3468",
        descricao: "MOAGEM POM PRETO",
        quantidade: -2.18,
      },
    ],
  },
  {
    produtoId: "3474",
    produtoDescricao: "GUIA MONTADA RASGO L 32 MM PAREDE 10 MM",
    itens: [
      {
        codigo: "3475",
        descricao: "CHAPA GUIA RASGO L 32 MM PAREDE",
        quantidade: 1,
      },
      {
        codigo: "3376",
        descricao: "CAPINHA 19,5X9,3X12 CINZA",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3176",
    produtoDescricao: "CARRO MONTADO MOOVE PRETO",
    itens: [
      {
        codigo: "3266",
        descricao: "RODA MONTADA 74 R MOOVE PRETO REV",
        quantidade: 1,
      },
      {
        codigo: "3168",
        descricao: "CORPO MOOVE ESTAMPADO ZINCO METALICO",
        quantidade: 1,
      },
      {
        codigo: "1346",
        descricao: "PARAFUSO MAQUINA SEXTAVADO Ø8X35MM ZB",
        quantidade: 1,
      },
      {
        codigo: "3167",
        descricao: "PORCA SEXTAVADA M8 B FLAGEADA TRAVANTE",
        quantidade: 1,
      },
      {
        codigo: "3447",
        descricao: "EIXO 8 X 18,5 X 25,4 ZINCO METALICO",
        quantidade: 1,
      },
      {
        codigo: "3442",
        descricao: "BATENTE ANTI DESCARRILHAMENTO PRE MONTADO PRETO REV",
        quantidade: 1,
      },
      {
        codigo: "3186",
        descricao: "PARAFUSO MAQUINA CILINDRICA Ø6X20MM OX (ALLEN)",
        quantidade: 1,
      },
      {
        codigo: "111",
        descricao: "PORCA SEXTAVADA M6 ZB",
        quantidade: 1,
      },
      {
        codigo: "3444",
        descricao: "ARRUELA LISA 2 X 8,2 X 25,4 ZB",
        quantidade: 1,
      },
    ],
  },
];
