export interface CatalogItemBase {
  codigo: string;
  descricao: string;
}

export interface CatalogItemComSetor extends CatalogItemBase {
  setor:
    | "TERCEIRIZAÇÃO"
    | "INJEÇÃO"
    | "MONTAGEM"
    | "ESTAMPARIA"
    | "REBITAGEM"
    | "ALMOXARIFADO CENTRAL 1"
    | "INSPEÇÃO";
}

export interface CatalogItemComQuantidade extends CatalogItemBase {
  quantidade: number;
}

export type CatalogItem = CatalogItemComSetor | CatalogItemComQuantidade;

export interface Product {
  produtoId: string;
  produtoDescricao: string;
  itens: CatalogItem[];
}

export const catalogData: Product[] = [
  // AMORTECEDORES
  {
    produtoId: "3357",
    produtoDescricao: "AMORTECEDOR 27 VIRGEM VS.03 REV",
    itens: [
      {
        codigo: "3346",
        descricao: "AMORTECEDOR 27 VIRGEM VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3358",
    produtoDescricao: "AMORTECEDOR 28,5 AZUL VS.03 REV",
    itens: [
      {
        codigo: "3347",
        descricao: "AMORTECEDOR 28,5 AZUL VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3359",
    produtoDescricao: "AMORTECEDOR 30 VERDE VS.03 REV",
    itens: [
      {
        codigo: "3348",
        descricao: "AMORTECEDOR 30 VERDE VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3360",
    produtoDescricao: "AMORTECEDOR 32 AMARELO VS.03 REV",
    itens: [
      {
        codigo: "3349",
        descricao: "AMORTECEDOR 32 AMARELO VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3361",
    produtoDescricao: "AMORTECEDOR 33 VERMELHO VS.03 REV",
    itens: [
      {
        codigo: "3350",
        descricao: "AMORTECEDOR 33 VERMELHO VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2130",
    produtoDescricao: "AMORTECEDOR AZURE DIREITO PRETO MONTADO C/ SUPORTE REV",
    itens: [
      {
        codigo: "1958",
        descricao: "AMORTECEDOR AZURE DIREITO PRETO MONTADO C/ SUPORTE",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2131",
    produtoDescricao: "AMORTECEDOR AZURE ESQUERDO PRETO MONTADO C/ SUPORTE REV",
    itens: [
      {
        codigo: "1959",
        descricao: "AMORTECEDOR AZURE ESQUERDO PRETO MONTADO C/ SUPORTE",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1581",
    produtoDescricao: "AMORTECEDOR COMBAT CINZA REV",
    itens: [
      {
        codigo: "1685",
        descricao: "AMORTECEDOR COMBAT CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1682",
    produtoDescricao: "AMORTECEDOR COMBAT PRETO REV",
    itens: [
      {
        codigo: "1686",
        descricao: "AMORTECEDOR COMBAT PRETO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },

  // BATENTES
  {
    produtoId: "3182",
    produtoDescricao: "BATENTE ANTI DESCARRILHAMENTO PRE MONTADO CINZA REV",
    itens: [
      {
        codigo: "3183",
        descricao: "BATENTE ANTI DESCARRILHAMENTO PRE MONTADO CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3442",
    produtoDescricao: "BATENTE ANTI DESCARRILHAMENTO PRE MONTADO PRETO REV",
    itens: [
      {
        codigo: "3441",
        descricao: "BATENTE ANTI DESCARRILHAMENTO PRE MONTADO PRETO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3197",
    produtoDescricao: "BATENTE INFERIOR MOOVE UNIFICADA PRETO VER",
    itens: [
      {
        codigo: "3192",
        descricao: "BATENTE INFERIOR MOOVE UNIFICADA PRETO",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "2700",
    produtoDescricao: "BATENTE MONTADO V CONVEXO REV",
    itens: [
      {
        codigo: "2699",
        descricao: "BATENTE MONTADO V CONVEXO",
        setor: "MONTAGEM",
      },
    ],
  },
  {
    produtoId: "3276",
    produtoDescricao: "BATENTE INFERIOR MOOVE UNIFICADA CINZA REV",
    itens: [
      {
        codigo: "3193",
        descricao: "BATENTE INFERIOR MOOVE UNIFICADA CINZA",
        setor: "INJEÇÃO",
      },
    ],
  },

  // BUCHAS
  {
    produtoId: "2720",
    produtoDescricao: "BUCHA 5/16 X 13MM REV",
    itens: [
      { codigo: "2713", descricao: "BUCHA 5/16 X 13MM", setor: "INJEÇÃO" },
    ],
  },

  // CAPAS
  {
    produtoId: "3190",
    produtoDescricao: "CAPA RETA MOOVE PINTADO PRETO REV",
    itens: [
      {
        codigo: "3187",
        descricao: "CAPA RETA MOOVE PINTADO PRETO",
        setor: "INJEÇÃO",
      },
    ],
  },

  // CARROS
  {
    produtoId: "2687",
    produtoDescricao: "CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 40KG REV",
    itens: [
      {
        codigo: "2684",
        descricao: "CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 40KG",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3250",
    produtoDescricao:
      "CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 40KG SUPORTE EMBUTIDO REV",
    itens: [
      {
        codigo: "3249",
        descricao:
          "CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 40KG SUP. EMBUTIDO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2973",
    produtoDescricao: "CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 80KG REV",
    itens: [
      {
        codigo: "2974",
        descricao: "CARRO MONTADO COM AMORTECIMENTO JP700V SOFT 80KG",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3178",
    produtoDescricao: "CARRO MONTADO MOOVE PRETO REV",
    itens: [
      {
        codigo: "3176",
        descricao: "CARRO MONTADO MOOVE PRETO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1504",
    produtoDescricao: "CARRO REBITADO JP700U REV",
    itens: [
      {
        codigo: "1353",
        descricao: "CARRO REBITADO JP700U",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "2004",
    produtoDescricao: "CARRO REBITADO JP700V M REV",
    itens: [
      {
        codigo: "1967",
        descricao: "CARRO REBITADO JP700V M",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1505",
    produtoDescricao: "CARRO REBITADO JP700V REV",
    itens: [
      {
        codigo: "1352",
        descricao: "CARRO REBITADO JP700V",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "3233",
    produtoDescricao: "CARRO REBITADO JP700V SOFT 80KG REV",
    itens: [
      {
        codigo: "2965",
        descricao: "CARRO REBITADO JP700V SOFT 80KG",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "2347",
    produtoDescricao: "CARRO REBITADO JP700V/ JP740V SUPORTE EMBUTIDO REV",
    itens: [
      {
        codigo: "2349",
        descricao: "CARRO REBITADO JP700V/ JP740V SUPORTE EMBUTIDO",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "2255",
    produtoDescricao: "CARRO REBITADO JP735V REV",
    itens: [
      {
        codigo: "2253",
        descricao: "CARRO REBITADO JP735V",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "3103",
    produtoDescricao: "CARRO REBITADO JP740U REV",
    itens: [
      {
        codigo: "3102",
        descricao: "CARRO REBITADO JP740U",
        setor: "REBITAGEM",
      },
    ],
  },

  // CHAVES
  {
    produtoId: "1506",
    produtoDescricao: "CHAVE DE BOCA 13MM REV",
    itens: [
      {
        codigo: "1388",
        descricao: "CHAVE DE BOCA 13MM",
        setor: "ESTAMPARIA",
      },
    ],
  },
  {
    produtoId: "2351",
    produtoDescricao: "CHAVE DE BOCA 6MM REV",
    itens: [
      { codigo: "2352", descricao: "CHAVE DE BOCA 6MM", setor: "ESTAMPARIA" },
    ],
  },

  // CONJUNTOS ACESSORIO
  {
    produtoId: "2760",
    produtoDescricao: "CONJUNTO ACESSORIO JP700 SOFT 40/ 80KG SUPORTE TOPO REV",
    itens: [
      {
        codigo: "2759",
        descricao: "CONJUNTO ACESSORIO JP700 SOFT 40/ 80KG SUPORTE TOPO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3100",
    produtoDescricao: "CONJUNTO ACESSORIO JP700 SUPORTE EMBUTIDO REV",
    itens: [
      {
        codigo: "3101",
        descricao: "CONJUNTO ACESSORIO JP700 SUPORTE EMBUTIDO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3153",
    produtoDescricao: "CONJUNTO ACESSORIO JP700 SUPORTE EMBUTIDO S/ GUIA REV",
    itens: [
      {
        codigo: "3152",
        descricao: "CONJUNTO ACESSORIO JP700 SUPORTE EMBUTIDO S/ GUIA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2281",
    produtoDescricao: "CONJUNTO ACESSORIO JP700 SUPORTE LATERAL REV",
    itens: [
      {
        codigo: "2280",
        descricao: "CONJUNTO ACESSORIO JP700 SUPORTE LATERAL",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2278",
    produtoDescricao: "CONJUNTO ACESSORIO JP700 SUPORTE TOPO REV",
    itens: [
      {
        codigo: "2279",
        descricao: "CONJUNTO ACESSORIO JP700 SUPORTE TOPO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3401",
    produtoDescricao: "CONJUNTO ACESSORIO JP700/ JP740 GUIA RASGO L REV",
    itens: [
      {
        codigo: "3400",
        descricao: "CONJUNTO ACESSORIO JP700/ JP740 GUIA RASGO L",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2354",
    produtoDescricao: "CONJUNTO ACESSORIO JP700/ JP740 SUPORTE EMBUTIDO REV",
    itens: [
      {
        codigo: "2353",
        descricao: "CONJUNTO ACESSORIO JP700/ JP740 SUPORTE EMBUTIDO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3381",
    produtoDescricao: "CONJUNTO ACESSORIO JP700/SOFT40 SUPORTE EMBUTIDO REV",
    itens: [
      {
        codigo: "3380",
        descricao: "CONJUNTO ACESSORIO JP700/SOFT40 SUPORTE EMBUTIDO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3130",
    produtoDescricao: "CONJUNTO ACESSORIO JP740 SUPORTE EMBUTIDO GE REV",
    itens: [
      {
        codigo: "3131",
        descricao: "CONJUNTO ACESSORIO JP740 SUPORTE EMBUTIDO GE",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3055",
    produtoDescricao: "CONJUNTO ACESSORIO JP740 SUPORTE TOPO REV",
    itens: [
      {
        codigo: "3054",
        descricao: "CONJUNTO ACESSORIO JP740 SUPORTE TOPO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3439",
    produtoDescricao: "CONJUNTO CARRO/CAPA MONTADO MOOVE PRETO REV",
    itens: [
      {
        codigo: "3178",
        descricao: "CARRO MONTADO MOOVE PRETO REV",
        setor: "INSPEÇÃO",
      },
      {
        codigo: "3190",
        descricao: "CAPA RETA MOOVE PINTADO PRETO REV",
        setor: "INSPEÇÃO",
      },
      {
        codigo: "3032",
        descricao: "ELASTICO LATEX Nº8",
        setor: "ALMOXARIFADO CENTRAL 1",
      },
    ],
  },
  {
    produtoId: "2756",
    produtoDescricao: "CONJUNTO GUIA COM AMORTECIMENTO AFZU E MANUAL VS.02",
    itens: [
      {
        codigo: "2754",
        descricao: "GUIA MONTADA COM AMORTECIMENTO AFZU DIREITA VS.02 REV",
        setor: "INSPEÇÃO",
      },
      {
        codigo: "3411",
        descricao: "GUIA MONTADA COM AMORTECIMENTO AFZU ESQUERDA VS.03 REV",
        setor: "INSPEÇÃO",
      },
      {
        codigo: "2361",
        descricao: "MANUAL GUIA COM AMORTECIMENTO AFZU DOBRADO",
        setor: "TERCEIRIZAÇÃO",
      },
      {
        codigo: "1419",
        descricao: "ELASTICO LATEX Nº3/8 - PESADO",
        setor: "ALMOXARIFADO CENTRAL 1",
      },
    ],
  },

  // CORPOS
  {
    produtoId: "3217",
    produtoDescricao: "CORPO AMORTECEDOR JP700 80KG AZUL REV",
    itens: [
      {
        codigo: "2958",
        descricao: "CORPO AMORTECEDOR JP700 80KG AZUL",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "2190",
    produtoDescricao: "CORPO ANTI REBOTE REV",
    itens: [
      { codigo: "2187", descricao: "CORPO ANTI REBOTE", setor: "INJEÇÃO" },
    ],
  },
  {
    produtoId: "2436",
    produtoDescricao: "CORPO GUIA COM AMORTECIMENTO AFZU DIREITO REV",
    itens: [
      {
        codigo: "2239",
        descricao: "CORPO GUIA COM AMORTECIMENTO AFZU DIR/ ESQ AFZU",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "2240",
    produtoDescricao: "CORPO GUIA COM AMORTECIMENTO AFZU ESQUERDO REV",
    itens: [
      {
        codigo: "2241",
        descricao: "CORPO GUIA COM AMORTECIMENTO DIR/ ESQ AFZU",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "3259",
    produtoDescricao: "CORPO GUIA COM AMORTECIMENTO JP700 SOFT 40KG AZUL REV",
    itens: [
      {
        codigo: "2682",
        descricao: "CORPO GUIA COM AMORTECIMENTO JP700 SOFT 40KG AZUL",
        setor: "INJEÇÃO",
      },
    ],
  },

  // FREIOS
  {
    produtoId: "1432",
    produtoDescricao: "FREIO 01 CORTADO REV",
    itens: [
      { codigo: "550", descricao: "FREIO 01 CORTADO", setor: "TERCEIRIZAÇÃO" },
    ],
  },
  {
    produtoId: "1574",
    produtoDescricao: "FREIO 01 REV",
    itens: [{ codigo: "553", descricao: "FREIO 01", setor: "INJEÇÃO" }],
  },
  {
    produtoId: "2093",
    produtoDescricao: "FREIO 04 REV",
    itens: [{ codigo: "2092", descricao: "FREIO 04", setor: "INJEÇÃO" }],
  },

  // GABARITOS
  {
    produtoId: "1745",
    produtoDescricao: "GABARITO PLASTICO TOPO COMBAT REV",
    itens: [
      {
        codigo: "1589",
        descricao: "GABARITO PLASTICO TOPO COMBAT",
        setor: "INJEÇÃO",
      },
    ],
  },

  // GUIAS
  {
    produtoId: "1433",
    produtoDescricao: "GUIA BABY CLICK REV",
    itens: [{ codigo: "434", descricao: "GUIA BABY CLICK*", setor: "INJEÇÃO" }],
  },
  {
    produtoId: "1708",
    produtoDescricao: "GUIA MONTADA CLICK R1.26,8.11 REV",
    itens: [
      {
        codigo: "1707",
        descricao: "GUIA MONTADA CLICK R1.26,8.11",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1495",
    produtoDescricao: "GUIA MONTADA CLICK R1.26.11 REV",
    itens: [
      {
        codigo: "1318",
        descricao: "GUIA MONTADA CLICK R1.26.11",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3226",
    produtoDescricao: "GUIA MONTADA CLICK R1.26.14 VS.02 REV",
    itens: [
      {
        codigo: "2692",
        descricao: "GUIA MONTADA CLICK R1.26.14 VS.02",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1929",
    produtoDescricao: "GUIA MONTADA CLICK R1.32.11 REV",
    itens: [
      {
        codigo: "1320",
        descricao: "GUIA MONTADA CLICK R1.32.11",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3225",
    produtoDescricao: "GUIA MONTADA CLICK R1.32.14 VS.02 REV",
    itens: [
      {
        codigo: "2693",
        descricao: "GUIA MONTADA CLICK R1.32.14 VS.02",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3413",
    produtoDescricao: "GUIA MONTADA CLICK SOFT 1.26.11 VS.02 REV",
    itens: [
      {
        codigo: "3412",
        descricao: "GUIA MONTADA CLICK SOFT 1.26.11 VS.02",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3415",
    produtoDescricao: "GUIA MONTADA CLICK SOFT R1.30,5.11 VS.02 REV",
    itens: [
      {
        codigo: "3414",
        descricao: "GUIA MONTADA CLICK SOFT R1.30,5.11 VS.02",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3410",
    produtoDescricao: "GUIA MONTADA COM AMORTECIMENTO AFZU DIREITA VS.03 REV",
    itens: [
      {
        codigo: "3408",
        descricao: "GUIA MONTADA COM AMORTECIMENTO AFZU DIREITA VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3411",
    produtoDescricao: "GUIA MONTADA COM AMORTECIMENTO AFZU ESQUERDA VS.03 REV",
    itens: [
      {
        codigo: "3409",
        descricao: "GUIA MONTADA COM AMORTECIMENTO AFZU ESQUERDA VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3407",
    produtoDescricao: "GUIA MONTADA G AZURE VS.02 REV",
    itens: [
      {
        codigo: "3405",
        descricao: "GUIA MONTADA G AZURE VS.02",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3355",
    produtoDescricao: "GUIA MONTADA GFZ 27MM VIRGEM VS.03 REV",
    itens: [
      {
        codigo: "3344",
        descricao: "GUIA MONTADA GFZ 27MM VIRGEM VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3352",
    produtoDescricao: "GUIA MONTADA GFZ 28,5MM AZUL VS.03 REV",
    itens: [
      {
        codigo: "3341",
        descricao: "GUIA MONTADA GFZ 28,5MM AZUL VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3353",
    produtoDescricao: "GUIA MONTADA GFZ 30MM VERDE VS.03 REV",
    itens: [
      {
        codigo: "3342",
        descricao: "GUIA MONTADA GFZ 30MM VERDE VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3354",
    produtoDescricao: "GUIA MONTADA GFZ 32MM AMARELA VS.03 REV",
    itens: [
      {
        codigo: "3343",
        descricao: "GUIA MONTADA GFZ 32MM AMARELA VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3356",
    produtoDescricao: "GUIA MONTADA GFZ 33,5MM VERMELHA VS.03 REV",
    itens: [
      {
        codigo: "3345",
        descricao: "GUIA MONTADA GFZ 33,5MM VERMELHA VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1441",
    produtoDescricao: "GUIA MONTADA GMD05 COM CAPA 22X3X8MM CINZA REV",
    itens: [
      {
        codigo: "448",
        descricao: "GUIA MONTADA GMD05 COM CAPA 22X3X8MM CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1442",
    produtoDescricao: "GUIA MONTADA GMD06 COM CAPA 22X3X8MM CINZA REV",
    itens: [
      {
        codigo: "445",
        descricao: "GUIA MONTADA GMD06 COM CAPA 22X3X8MM CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1443",
    produtoDescricao: "GUIA MONTADA GMD07 COM CAPA 18X4X8MM CINZA REV",
    itens: [
      {
        codigo: "446",
        descricao: "GUIA MONTADA GMD07 COM CAPA 18X4X8MM CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2523",
    produtoDescricao: "GUIA MONTADA JM620 C/ CAPA 23X4X12MM CINZA REV",
    itens: [
      {
        codigo: "2091",
        descricao: "GUIA MONTADA JM620 C/ CAPA 23X4X12MM CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1572",
    produtoDescricao: "GUIA MONTADA JP25 22M REV",
    itens: [
      {
        codigo: "1562",
        descricao: "GUIA MONTADA JP25 22M",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1650",
    produtoDescricao: "GUIA MONTADA JP35 17,5M REV",
    itens: [
      {
        codigo: "1631",
        descricao: "GUIA MONTADA JP35 17,5M",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1444",
    produtoDescricao: "GUIA MONTADA JP55 REV",
    itens: [
      { codigo: "451", descricao: "GUIA MONTADA JP55", setor: "TERCEIRIZAÇÃO" },
    ],
  },
  {
    produtoId: "1529",
    produtoDescricao: "GUIA MONTADA MM COM CAPA 22X3X8MM CINZA REV",
    itens: [
      {
        codigo: "514",
        descricao: "GUIA MONTADA MM COM CAPA 22X3X8MM CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1481",
    produtoDescricao: "GUIA MONTADA MMD COM CAPA 22X3X8MM CINZA REV",
    itens: [
      {
        codigo: "519",
        descricao: "GUIA MONTADA MMD COM CAPA 22X3X8MM CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1491",
    produtoDescricao: "GUIA MONTADA MOLA PLASTICA COM GATILHO 2,5MM REV",
    itens: [
      {
        codigo: "443",
        descricao: "GUIA MONTADA MOLA PLASTICA COM GATILHO 2,5MM",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3406",
    produtoDescricao: "GUIA MONTADA P AZURE VS.02 REV",
    itens: [
      {
        codigo: "3404",
        descricao: "GUIA MONTADA P AZURE VS.02",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3378",
    produtoDescricao: "GUIA MONTADA RASGO L PAREDE 10 MM REV",
    itens: [
      {
        codigo: "3377",
        descricao: "GUIA MONTADA RASGO L PAREDE 10 MM",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3473",
    produtoDescricao: "GUIA MONTADA RASGO L 32 MM PAREDE 10 MM REV",
    itens: [
      {
        codigo: "3474",
        descricao: "GUIA MONTADA RASGO L 32 MM PAREDE 10 MM",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3362",
    produtoDescricao: "GUIA MONTADA UNIVERSAL FOLGA ZERO VS.03 REV",
    itens: [
      {
        codigo: "3351",
        descricao: "GUIA MONTADA UNIVERSAL FOLGA ZERO VS.03",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2644",
    produtoDescricao: "GUIA PLASTICA DE RASGO 10MM MONTADA REV",
    itens: [
      {
        codigo: "2643",
        descricao: "GUIA PLASTICA DE RASGO 10MM MONTADA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1509",
    produtoDescricao: "GUIA PLASTICA DE RASGO 6,3/ 9,3 REV",
    itens: [
      {
        codigo: "1387",
        descricao: "GUIA PLASTICA DE RASGO 6,3/ 9,3",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "2572",
    produtoDescricao: "GUIA PLASTICA EXTERNA REGULAVEL CINZA REV",
    itens: [
      {
        codigo: "2568",
        descricao: "GUIA PLASTICA EXTERNA REGULAVEL CINZA",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1445",
    produtoDescricao: "GUIA PLASTICA GPE 01 REV",
    itens: [
      { codigo: "422", descricao: "GUIA PLASTICA GPE 01", setor: "INJEÇÃO" },
    ],
  },
  {
    produtoId: "1496",
    produtoDescricao: "GUIA PLASTICA JP102 NANO REV",
    itens: [
      {
        codigo: "902",
        descricao: "GUIA PLASTICA JP102 NANO*",
        setor: "INJEÇÃO",
      },
    ],
  },

  // LIMITADORES
  {
    produtoId: "1446",
    produtoDescricao: "LIMITADOR BABY CLICK REV",
    itens: [
      { codigo: "437", descricao: "LIMITADOR BABY CLICK", setor: "INJEÇÃO" },
    ],
  },

  // LINGUETAS
  {
    produtoId: "2189",
    produtoDescricao: "LINGUETA ANTI REBOTE REV",
    itens: [
      { codigo: "2186", descricao: "LINGUETA ANTI REBOTE", setor: "INJEÇÃO" },
    ],
  },

  //PESCADOR
  {
    produtoId: "2132",
    produtoDescricao: "PESCADOR G AZURE ZINCO METALICO REV",
    itens: [
      {
        codigo: "1955",
        descricao: "PESCADOR G AZURE ZINCO METALICO",
        setor: "ALMOXARIFADO CENTRAL 1",
      },
    ],
  },
  {
    produtoId: "2133",
    produtoDescricao: "PESCADOR P AZURE CINCO METALICO REV",
    itens: [
      {
        codigo: "1953",
        descricao: "PESCADOR P AZURE ZINCO METALICO",
        setor: "ALMOXARIFADO CENTRAL 1",
      },
    ],
  },
  {
    produtoId: "1743",
    produtoDescricao: "PESCADOR PLASTICO 27MM CINZA COMBAT REV",
    itens: [
      {
        codigo: "1586",
        descricao: "PESCADOR PLASTICO 27MM CINZA COMBAT",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "2247",
    produtoDescricao: "PESCADOR PLASTICO 27MM CINZA AFZU REV",
    itens: [
      {
        codigo: "2235",
        descricao: "PESCADOR PLASTICO 27MM CINZA AFZU",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1510",
    produtoDescricao: "PESCADOR PLASTICO 27MM REV",
    itens: [
      {
        codigo: "1103",
        descricao: "PESCADOR PLASTICO 27MM",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1511",
    produtoDescricao: "PESCADOR PLASTICO 28,5MM REV",
    itens: [
      {
        codigo: "1110",
        descricao: "PESCADOR PLASTICO 28,5MM",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1744",
    produtoDescricao: "PESCADOR PLASTICO 32MM CINZA COMBAT REV",
    itens: [
      {
        codigo: "1587",
        descricao: "PESCADOR PLASTICO 32MM CINZA COMBAT",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "2248",
    produtoDescricao: "PESCADOR PLASTICO 32MM CINZA AFZU REV",
    itens: [
      {
        codigo: "2236",
        descricao: "PESCADOR PLASTICO 32MM CINZA AFZU",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1512",
    produtoDescricao: "PESCADOR PLASTICO 32MM",
    itens: [
      {
        codigo: "1102",
        descricao: "PESCADOR PLASTICO 32MM",
        setor: "INJEÇÃO",
      },
    ],
  },

  //PONTEIRAS
  {
    produtoId: "1447",
    produtoDescricao: "PONTEIRA BABY CLICK 25MM X50MM 1F REV",
    itens: [
      {
        codigo: "458",
        descricao: "PONTEIRA BABY CLICK 25MM X50MM 1F",
        setor: "INJEÇÃO",
      },
    ],
  },

  //RODAS
  {
    produtoId: "3268",
    produtoDescricao: "RODA MONTADA 74 R MOOVE METALIZADO REV",
    itens: [
      {
        codigo: "3267",
        descricao: "RODA MONTADA 74 R MOOVE METALIZADO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3266",
    produtoDescricao: "RODA MONTADA 74 R MOOVE PRETO REV",
    itens: [
      {
        codigo: "3265",
        descricao: "RODA MONTADA 74 R MOOVE PRETO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },

  //ROLDANAS
  {
    produtoId: "1448",
    produtoDescricao:
      "ROLDANA MONTADA JM600 29R COM CAPA 18MMX4MMX8MM CINZA REV",
    itens: [
      {
        codigo: "348",
        descricao: "ROLDANA MONTADA JM600 29R COM CAPA 18MMX4MMX8MM CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2089",
    produtoDescricao:
      "ROLDANA MONTADA JM620 EMBUTIDA 35R C/ CAPA 23X4X12MM CZ REV",
    itens: [
      {
        codigo: "2088",
        descricao: "ROLDANA MONTADA JM620 EMBUTIDA 35R C/ CAPA 23X4X12MM CZ",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2524",
    produtoDescricao:
      "ROLDANA MONTADA JM621 SOBREPOSTA 35R C/ CAPA 23X4X12MM CZ REV",
    itens: [
      {
        codigo: "2525",
        descricao: "ROLDANA MONTADA JM621 SOBREPOSTA 35R C/ CAPA 23X4X12MM CZ",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1530",
    produtoDescricao: "ROLDANA MONTADA JM841 40R E REV",
    itens: [
      {
        codigo: "1085",
        descricao: "ROLDANA MONTADA JM 841 40 R E",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1497",
    produtoDescricao: "ROLDANA MONTADA JP102 NANO 26M REV",
    itens: [
      {
        codigo: "905",
        descricao: "ROLDANA MONTADA JP102 NANO 26M",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1698",
    produtoDescricao: "ROLDANA MONTADA JP240 38,5R CONCAVA TRAVA VERMELHA REV",
    itens: [
      {
        codigo: "1697",
        descricao: "ROLDANA MONTADA JP240 38,5R CONCAVA TRAVA VERMELHA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1617",
    produtoDescricao: "ROLDANA MONTADA JP240 40R E TORN TRAVA AZUL REV",
    itens: [
      {
        codigo: "1600",
        descricao: "ROLDANA MONTADA JP240 40R E TORN TRAVA AZUL",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1616",
    produtoDescricao: "ROLDANA MONTADA JP240 40R E TRAVA VERMELHA REV",
    itens: [
      {
        codigo: "1598",
        descricao: "ROLDANA MONTADA JP240 40R E TRAVA VERMELHA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1651",
    produtoDescricao: "ROLDANA MONTADA JP35R 22R REV",
    itens: [
      {
        codigo: "1630",
        descricao: "ROLDANA MONTADA JP35R 22R",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2284",
    produtoDescricao: "ROLDANA MONTADA JP360 40R CONCAVA AZUL REV",
    itens: [
      {
        codigo: "1193",
        descricao: "ROLDANA MONTADA JP360 40R CONCAVA AZUL",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1757",
    produtoDescricao: "ROLDANA MONTADA JP360 40R CONCAVA CINZA REV",
    itens: [
      {
        codigo: "1187",
        descricao: "ROLDANA MONTADA JP360 40R CONCAVA CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1492",
    produtoDescricao: "ROLDANA MONTADA JP360 40R E CINZA REV",
    itens: [
      {
        codigo: "1492",
        descricao: "ROLDANA MONTADA JP360 40R E CINZA",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1513",
    produtoDescricao: "ROLDANA MONTADA JP360 40R E TORN AZUL REV",
    itens: [
      {
        codigo: "1201",
        descricao: "ROLDANA MONTADA JP360 40R E TORN AZUL",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1449",
    produtoDescricao: "ROLDANA MONTADA JP55 20M REV",
    itens: [
      {
        codigo: "566",
        descricao: "ROLDANA MONTADA JP55 20M",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1450",
    produtoDescricao: "ROLDANA MONTADA JP85 40R E TORN VS.02 REV",
    itens: [
      {
        codigo: "1363",
        descricao: "ROLDANA MONTADA JP85 40R E TORN VS.02",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1518",
    produtoDescricao: "ROLDANA SIMPLES G 30R TORNEADO REV",
    itens: [
      {
        codigo: "1382",
        descricao: "ROLDANA SIMPLES G 30R TORNEADO",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "1452",
    produtoDescricao: "ROLDANA SIMPLES JM135 33M REV",
    itens: [
      {
        codigo: "299",
        descricao: "ROLDANA SIMPLES JM135 33M",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1493",
    produtoDescricao: "ROLDANA SIMPLES JM135 33R REV",
    itens: [
      {
        codigo: "300",
        descricao: "ROLDANA SIMPLES JM135 33R",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "2470",
    produtoDescricao: "ROLDANA SIMPLES JM200 30R REV",
    itens: [
      {
        codigo: "302",
        descricao: "ROLDANA SIMPLES JM200 30R",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1453",
    produtoDescricao: "ROLDANA SIMPLES JM300 30M REV",
    itens: [
      {
        codigo: "173",
        descricao: "ROLDANA SIMPLES JM300 30M",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1535",
    produtoDescricao: "ROLDANA SIMPLES JM300 30R REV",
    itens: [
      {
        codigo: "304",
        descricao: "ROLDANA SIMPLES JM300 30R",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1474",
    produtoDescricao: "ROLDANA SIMPLES JM410 33R REV",
    itens: [
      {
        codigo: "355",
        descricao: "ROLDANA SIMPLES JM410 REV",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1646",
    produtoDescricao: "ROLDANA SIMPLES JM435 33M VS.02 REV",
    itens: [
      {
        codigo: "1639",
        descricao: "ROLDANA SIMPLES JM435 33M VS.02",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1645",
    produtoDescricao: "ROLDANA SIMPLES JM435 33R VS.02 REV",
    itens: [
      {
        codigo: "1641",
        descricao: "ROLDANA SIMPLES JM435 33R VS.02",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1656",
    produtoDescricao: "ROLDANA SIMPLES JM435 38M VS.02 REV",
    itens: [
      {
        codigo: "1642",
        descricao: "ROLDANA SIMPLES JM435 38M VS.02",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1644",
    produtoDescricao: "ROLDANA SIMPLES JM435 38R VS.02 REV",
    itens: [
      {
        codigo: "1643",
        descricao: "ROLDANA SIMPLES JM435 38R VS.02",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1655",
    produtoDescricao: "ROLDANA SIMPLES JM435 40R VS.02 REV",
    itens: [
      {
        codigo: "1647",
        descricao: "ROLDANA SIMPLES JM435 40 R VS.02",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1658",
    produtoDescricao: "ROLDANA SIMPLES JM443 40M VS.02 REV",
    itens: [
      {
        codigo: "1635",
        descricao: "ROLDANA SIMPLES JM443 40M VS.02",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "3370",
    produtoDescricao: "ROLDANA SIMPLES JM443 40R E CONCAVA REV",
    itens: [
      {
        codigo: "3369",
        descricao: "ROLDANA SIMPLES JM445 40R E CONCAVA",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1659",
    produtoDescricao: "ROLDANA SIMPLES JM443 40R VS.02 REV",
    itens: [
      {
        codigo: "1636",
        descricao: "ROLDANA SIMPLES JM443 40R VS.02",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1456",
    produtoDescricao: "ROLDANA SIMPLES JM535 33R REV",
    itens: [
      {
        codigo: "349",
        descricao: "ROLDANA SIMPLES JM535 33R",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1458",
    produtoDescricao: "ROLDANA SIMPLES JM600 29R REV",
    itens: [
      {
        codigo: "338",
        descricao: "ROLDANA SIMPLES JM600 29R",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1571",
    produtoDescricao: "ROLDANA SIMPLES JP25 22R REV",
    itens: [
      {
        codigo: "1556",
        descricao: "ROLDANA SIMPLES JP25 22R",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "1519",
    produtoDescricao: "ROLDANA SIMPLES P 30R TORNEADA REV",
    itens: [
      {
        codigo: "1381",
        descricao: "ROLDANA SIMPLES P 30R TORNEADA",
        setor: "REBITAGEM",
      },
    ],
  },
  {
    produtoId: "2719",
    produtoDescricao:
      "SUPORTE EMBUTIDO 30 ZINCADO ROSQUEADO REV E 3295 - SUPORTE EMBUTIDO 30 ZINCADO ROSQUEADO REV V2",
    itens: [
      {
        codigo: "2792",
        descricao: "SUPORTE EMBUTIDO 30 ZINCADO ROSQUEADO",
        setor: "REBITAGEM",
      },
      {
        codigo: "3294",
        descricao: "SUPORTE EMBUTIDO 30 ZINCADO ROSQUEADO V2",
        setor: "ESTAMPARIA",
      },
    ],
  },
  {
    produtoId: "1564",
    produtoDescricao: "SUPORTE GUIA AZUL REV",
    itens: [
      {
        codigo: "1563",
        descricao: "SUPORTE GUIA AZURE AZUL",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1460",
    produtoDescricao: "SUPORTE GUIA JM910R REV CINZ",
    itens: [
      {
        codigo: "582",
        descricao: "SUPORTE GUIA JM910R CINZA",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1514",
    produtoDescricao: "SUPORTE LATERAL 20 ZINCADO REV",
    itens: [
      {
        codigo: "1337",
        descricao: "SUPORTE LATERAL 20 ZINCADO",
        setor: "ESTAMPARIA",
      },
    ],
  },
  {
    produtoId: "2910",
    produtoDescricao: "SUPORTE OBLONGO METAL ZINCADO BRANCO REV",
    itens: [
      {
        codigo: "1705",
        descricao: "SUPORTE OBLONGO METAL ZINCADO BRANCO",
        setor: "ALMOXARIFADO CENTRAL 1",
      },
    ],
  },
  {
    produtoId: "1515",
    produtoDescricao: "SUPORTE TOPO 10 ZINCADO REV",
    itens: [
      {
        codigo: "1338",
        descricao: "SUPORTE TOPO 10 ZINCADO",
        setor: "ESTAMPARIA",
      },
    ],
  },
  {
    produtoId: "1461",
    produtoDescricao: "SUPORTE DE PAREDE 30MM ZINCADA REV",
    itens: [
      {
        codigo: "858",
        descricao: "SUPORTE DE PAREDE 30MM ZINCADA BRANCA",
        setor: "ESTAMPARIA",
      },
    ],
  },
  {
    produtoId: "1652",
    produtoDescricao: "SUPORTE DE PAREDE 35MM ZINCADA BRANCA REV",
    itens: [
      {
        codigo: "536",
        descricao: "SUPORTE DE PAREDE 35MM ZINCADA BRANCA",
        setor: "ESTAMPARIA",
      },
    ],
  },
  {
    produtoId: "1462",
    produtoDescricao: "SUPORTE DE TV PLASTICO REV",
    itens: [
      {
        codigo: "537",
        descricao: "SUPORTE DE TV PLASTICO*",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "2182",
    produtoDescricao: "SUPORTE EM L ZINCO METALICO 42X30MM REV",
    itens: [
      {
        codigo: "2181",
        descricao: "SUPORTE EM L ZINCO METALICO 42X30MM",
        setor: "ESTAMPARIA",
      },
    ],
  },
  {
    produtoId: "1463",
    produtoDescricao: "SUPORTE ESPACADOR DE TV 30MM PLASTICO REV",
    itens: [
      {
        codigo: "856",
        descricao: "SUPORTE ESPACADOR DE TV 30MM PLASTICO*",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "2718",
    produtoDescricao: "SUPORTE ESPACADOR DE TV 35 MM PLASTICO* REV",
    itens: [
      {
        codigo: "442",
        descricao: "SUPORTE ESPACADOR DE TV 35 MM PLASTICO*",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "3144",
    produtoDescricao: "SUPORTE ESTRADO DE BERCO EM L REV",
    itens: [
      {
        codigo: "944",
        descricao: "SUPORTE ESTRADO DE BERCO EM L",
        setor: "ESTAMPARIA",
      },
    ],
  },
  {
    produtoId: "2885",
    produtoDescricao:
      "SUPORTE SUPERIOR ALTO 44,1 TAMBOREADO POLIDO - 50MM PFM-632 REV",
    itens: [
      {
        codigo: "2868",
        descricao:
          "SUPORTE SUPERIOR ALTO 44,1 TAMBOREADO POLIDO - 50MM PFM-632",
        setor: "ALMOXARIFADO CENTRAL 1",
      },
    ],
  },
  {
    produtoId: "2889",
    produtoDescricao:
      "SUPORTE SUPERIOR BAIX 33,6 TAMBOREADO POLIDO - 50MM PFM-629 REV",
    itens: [
      {
        codigo: "2873",
        descricao:
          "SUPORTE SUPERIOR BAIXO 33,6 TAMBOERADO POLIDO - 50MM PFM-629",
        setor: "ALMOXARIFADO CENTRAL 1",
      },
    ],
  },
  {
    produtoId: "2899",
    produtoDescricao: "SUPORTE SUPERIOR H 40X56 BRANCO - 30MM PFM-620 RE",
    itens: [
      {
        codigo: "2897",
        descricao: "SUPORTE SUPERIOR H 40X56 BRANCO - 30MM PFM-620",
        setor: "ALMOXARIFADO CENTRAL 1",
      },
    ],
  },
  {
    produtoId: "2890",
    produtoDescricao:
      "SUPORTE SUPERIOR H 40X56 TAMBOREADO POLIDO - 30MM PFM-620 REV",
    itens: [
      {
        codigo: "2780",
        descricao: "SUPORTE SUPERIOR H 40X56 TAMBOREADO POLIDO - 30MM PFM-620",
        setor: "ALMOXARIFADO CENTRAL 1",
      },
    ],
  },
  {
    produtoId: "2887",
    produtoDescricao:
      "SUPORTE SUPERIOR MEDIO 39,1 TAMBOREADO POLIDO - 50MM PFM-630 REV",
    itens: [
      {
        codigo: "2886",
        descricao:
          "SUPORTE SUPERIOR MEDIO 39,1 TAMBOREADO POLIDO - 50MM PFM-630",
        setor: "ALMOXARIFADO CENTRAL 1",
      },
    ],
  },
  {
    produtoId: "3206",
    produtoDescricao:
      "TAMPA PLASTICA DIREITA E ESQUERDA 8 X 25 X 43 MM CINZA REV",
    itens: [
      {
        codigo: "3205",
        descricao: "TAMPA PLASTICA DIREITA E ESQUERDA 8 X 25 X 43 MM CINZA",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "3207",
    produtoDescricao: "TAMPA PLASTICA MOOVE DIR./ESQ. 8X25X43 MM PRETO REV",
    itens: [
      {
        codigo: "3204",
        descricao:
          "TAMPA PLASTICA MOOVE DIREITA E ESQUERDA 8 X 25 X 43 MM PRETO",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1859",
    produtoDescricao: "TAMPA PLASTICA U CONCAVO REV",
    itens: [
      {
        codigo: "1332",
        descricao: "TAMPA PLASTICA U CONCAVO",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "3155",
    produtoDescricao: "TAMPA PLASTICA V CONVEXO BRANCA REV",
    itens: [
      {
        codigo: "3154",
        descricao: "TAMPA PLASTICA V CONVEXO BRANCA",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "2258",
    produtoDescricao: "TAMPA PLASTICA V CONVEXO REV",
    itens: [
      {
        codigo: "1333",
        descricao: "TAMPA PLASTICA V CONVEXO",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1943",
    produtoDescricao: "TOPE DUAL 27/32MMX13MM PP CINZA REV",
    itens: [
      {
        codigo: "1942",
        descricao: "TOPE DUAL 27/32MMX13MM PP CINZA",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1464",
    produtoDescricao: "TOPE JM910 63,8MMX27 PP CINZA REV",
    itens: [
      {
        codigo: "563",
        descricao: "TOPE JM910 63,8MMX27 PP CINZA",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1939",
    produtoDescricao: "TOPE JM910R 63,8MMX27MM PP CINZA VS.02 REV",
    itens: [
      {
        codigo: "1938",
        descricao: "TOPE JM910R 63,8MMX27MM PP CINZA VS.02",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "2222",
    produtoDescricao: "TOPE MONTADO U CONCAVO VS.02 REV",
    itens: [
      {
        codigo: "2222",
        descricao: "TOPE MONTADO U CONCAVO VS.02",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "2202",
    produtoDescricao: "TOPE MONTADO V CONVEXO VS.02 REV",
    itens: [
      {
        codigo: "2201",
        descricao: "TOPE MONTADO V CONVEXO VS.02",
        setor: "TERCEIRIZAÇÃO",
      },
    ],
  },
  {
    produtoId: "3201",
    produtoDescricao: "TOPE UNIFICADO 13MMX40MM POM CINZA REV",
    itens: [
      {
        codigo: "3199",
        descricao: "TOPE UNIFICADO 13MMX40MM POM CINZA",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "3200",
    produtoDescricao: "TOPE UNIFICADO MOOVE 13MX40MM POM PRETO REV",
    itens: [
      {
        codigo: "3198",
        descricao: "TOPE UNIFICADO MOOVE 13MX40MM POM PRETO ",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1465",
    produtoDescricao: "TOPE 26MMX10MM PP CINZA REV",
    itens: [
      {
        codigo: "554",
        descricao: "TOPE 36MMX10MM PP CINZA",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "3137",
    produtoDescricao: "TOPE 26MMX10MM PP CINZA VS.02 REV",
    itens: [
      {
        codigo: "1161",
        descricao: "TOPE 26MMX10MM PP CINZA VS.02",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1466",
    produtoDescricao: "TOPE 26MMX13MM PP CINZA REV",
    itens: [
      {
        codigo: "560",
        descricao: "TOPE 26MMX13MM PP CINZA",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1467",
    produtoDescricao: "TOPE 32MMX13MM PP CINZA",
    itens: [
      {
        codigo: "1161",
        descricao: "TOPE 32MMX13MM PP CINZA",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "1468",
    produtoDescricao: "TRAVA PLASTICA BABY CLICK CINZA REV",
    itens: [
      {
        codigo: "268",
        descricao: "TRAVA PLASTICA BABY CLICK CINZA ",
        setor: "INJEÇÃO",
      },
    ],
  },
  {
    produtoId: "3452",
    produtoDescricao: "CALOTA RODA 74 M PLASTICA PRETO REV",
    itens: [
      {
        codigo: "3173",
        descricao: "CALOTA RODA 74 M PLASTICO PRETO",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3453",
    produtoDescricao: "CALOTA RODA 74 M PINTADO PRETO REV",
    itens: [
      {
        codigo: "3174",
        descricao: "CALOTA RODA 74 M PINTADO PRETO",
        quantidade: 1,
      },
    ],
  },
  {
    produtoId: "3450",
    produtoDescricao: "CAPA RETA MOOVE INJETADO PRETO REV",
    itens: [
      {
        codigo: "3188",
        descricao: "CAPA RETA MOOVE PLASTICA PRETO",
        quantidade: 1,
      },
    ],
  },
];

export const setores = [
  "TERCEIRIZAÇÃO",
  "INJEÇÃO",
  "MONTAGEM",
  "ESTAMPARIA",
  "REBITAGEM",
  "ALMOXARIFADO CENTRAL 1",
  "INSPEÇÃO",
] as const;
