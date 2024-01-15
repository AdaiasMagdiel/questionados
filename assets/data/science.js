const SCIENCE = [
	{
    question: "Qual é o centro do sistema solar?",
    choices: ["Lua", "Sol", "Vênus", "Marte"],
    answer: 1,
  },
  {
    question: "O que é a fotossíntese?",
    choices: [
      "Processo de transformação de energia solar em elétrica",
      "Processo de produção de oxigênio nas plantas",
      "Processo de produção de glicose nas plantas",
      "Processo de decomposição de matéria orgânica",
    ],
    answer: 2,
  },
  {
    question: "Qual é o maior planeta do nosso sistema solar?",
    choices: ["Terra", "Marte", "Júpiter", "Saturno"],
    answer: 2,
  },
  {
    question: "O que é um átomo?",
    choices: [
      "Menor partícula de um elemento químico",
      "Um tipo de molécula",
      "Uma partícula subatômica",
      "Um tipo de célula",
    ],
    answer: 0,
  },
  {
    question: "Qual é a fórmula química da água?",
    choices: ["CO2", "H2O", "O2", "CH4"],
    answer: 1,
  },
  {
    question: "Quem propôs a teoria da relatividade?",
    choices: ["Isaac Newton", "Galileu Galilei", "Albert Einstein", "Stephen Hawking"],
    answer: 2,
  },
  {
    question: "O que é um exoplaneta?",
    choices: [
      "Um planeta dentro do sistema solar",
      "Um planeta com anéis",
      "Um planeta fora do sistema solar",
      "Um planeta gasoso",
    ],
    answer: 2,
  },
  {
    question: "Qual é a unidade básica da hereditariedade?",
    choices: ["DNA", "RNA", "Proteína", "Cromossomo"],
    answer: 0,
  },
  {
    question: "O que é a Lei da Gravidade?",
    choices: [
      "Um objeto em repouso permanece em repouso, e um objeto em movimento permanece em movimento",
      "A força aplicada a um objeto é igual à sua massa multiplicada pela aceleração",
      "Dois corpos atraem-se com uma força diretamente proporcional ao produto de suas massas",
      "A energia total em um sistema isolado permanece constante ao longo do tempo",
    ],
    answer: 2,
  },
  {
    question: "O que é um buraco negro?",
    choices: [
      "Um objeto celestial brilhante",
      "Uma estrela em formação",
      "Uma região do espaço-tempo com forte campo gravitacional",
      "Um planeta gigante gasoso",
    ],
    answer: 2,
  },
  {
    question: "Qual é a unidade de medida de temperatura no sistema internacional?",
    choices: ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
    answer: 0,
  },
  {
    question: "O que é a teoria do Big Bang?",
    choices: [
      "Uma teoria sobre a origem da vida na Terra",
      "Uma teoria sobre a expansão do universo a partir de um estado inicial extremamente quente e denso",
      "Uma teoria sobre a formação de estrelas",
      "Uma teoria sobre a evolução das galáxias",
    ],
    answer: 1,
  },
  {
    question: "Qual é o nome do processo pelo qual as plantas convertem a luz solar em energia?",
    choices: ["Fotossíntese", "Respiração", "Digestão", "Fermentação"],
    answer: 0,
  },
  {
    question: "O que é a mitose?",
    choices: [
      "Divisão celular que resulta em células filhas com metade do número de cromossomos da célula-mãe",
      "Divisão celular que resulta em células filhas geneticamente idênticas à célula-mãe",
      "Processo de reprodução assexuada em células animais",
      "Processo de formação de gametas",
    ],
    answer: 1,
  },
  {
    question: "Quem é conhecido como o pai da computação?",
    choices: ["Steve Jobs", "Bill Gates", "Alan Turing", "Tim Berners-Lee"],
    answer: 2,
  },
  {
    question: "O que é a teoria da evolução?",
    choices: [
      "Uma teoria sobre a formação do sistema solar",
      "Uma teoria sobre a origem da vida na Terra",
      "Uma teoria sobre a seleção natural e a diversificação das espécies ao longo do tempo",
      "Uma teoria sobre a formação de estrelas",
    ],
    answer: 2,
  },
  {
    question: "Qual é o componente principal da atmosfera terrestre?",
    choices: ["Oxigênio", "Dióxido de carbono", "Nitrogênio", "Hidrogênio"],
    answer: 2,
  },
  {
    question: "O que é a teoria das cordas?",
    choices: [
      "Uma teoria sobre a vibração de cordas musicais",
      "Uma teoria sobre a natureza quântica das partículas subatômicas",
      "Uma teoria sobre a formação de cordas em sistemas planetários",
      "Uma teoria sobre a origem das ondas sonoras",
    ],
    answer: 1,
  },
  {
    question: "Qual é a unidade de medida da corrente elétrica?",
    choices: ["Volts", "Watts", "Ohms", "Amperes"],
    answer: 3,
  },
  {
    question: "O que é um quasar?",
    choices: [
      "Um tipo de cometa",
      "Uma estrela em explosão",
      "Uma galáxia extremamente brilhante e distante",
      "Uma partícula subatômica",
    ],
    answer: 2,
  },
  {
    question: "Quem desenvolveu a teoria da relatividade restrita?",
    choices: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
    answer: 2,
  },
  {
    question: "O que é a teoria da seleção natural?",
    choices: [
      "Uma teoria sobre a origem do universo",
      "Uma teoria sobre a evolução das espécies por meio da sobrevivência dos mais aptos",
      "Uma teoria sobre a formação de estrelas",
      "Uma teoria sobre a origem da vida na Terra",
    ],
    answer: 1,
  },
  {
    question: "Qual é o órgão responsável pela produção de insulina no corpo humano?",
    choices: ["Pâncreas", "Fígado", "Rim", "Estômago"],
    answer: 0,
  },
  {
    question: "O que é a teoria do caos?",
    choices: [
      "Uma teoria sobre a imprevisibilidade em sistemas dinâmicos",
      "Uma teoria sobre a formação de planetas",
      "Uma teoria sobre a origem do universo",
      "Uma teoria sobre a formação de buracos negros",
    ],
    answer: 0,
  },
  {
    question: "Qual é o menor osso no corpo humano?",
    choices: ["Fêmur", "Estribo", "Tíbia", "Fíbula"],
    answer: 1,
  },
  {
    question: "O que é a Lei de Coulomb?",
    choices: [
      "Uma lei da termodinâmica",
      "Uma lei da óptica",
      "Uma lei da eletricidade e magnetismo",
      "Uma lei da gravidade",
    ],
    answer: 2,
  },
  {
    question: "Qual é a principal função dos leucócitos no corpo humano?",
    choices: [
      "Transportar oxigênio",
      "Combater infecções",
      "Produzir insulina",
      "Realizar a coagulação sanguínea",
    ],
    answer: 1,
  },
  {
    question: "O que é a Teoria da Relatividade Geral?",
    choices: [
      "Uma teoria sobre a gravidade em campos magnéticos",
      "Uma teoria sobre a relação entre massa e energia",
      "Uma teoria sobre a expansão do universo",
      "Uma teoria sobre a formação de estrelas",
    ],
    answer: 0,
  },
  {
    question: "Qual é o ácido presente no suco gástrico?",
    choices: ["Ácido sulfúrico", "Ácido cítrico", "Ácido clorídrico", "Ácido acético"],
    answer: 2,
  },
  {
    question: "O que é a Lei de Boyle?",
    choices: [
      "Uma lei da termodinâmica",
      "Uma lei da óptica",
      "Uma lei da eletricidade e magnetismo",
      "Uma lei sobre o comportamento dos gases",
    ],
    answer: 3,
  },
  {
    question: "Quem é considerado o pai da química moderna?",
    choices: ["Marie Curie", "Antoine Lavoisier", "Dmitri Mendeleev", "Robert Boyle"],
    answer: 1,
  },
  {
    question: "O que é um pulsar?",
    choices: [
      "Um tipo de cometa",
      "Uma estrela em explosão",
      "Um tipo de galáxia",
      "Uma estrela de nêutrons que emite radiação pulsante",
    ],
    answer: 3,
  },
  {
    question: "Qual é a principal função dos rins no corpo humano?",
    choices: [
      "Produzir insulina",
      "Filtrar o sangue e excretar produtos residuais",
      "Realizar a coagulação sanguínea",
      "Transportar oxigênio",
    ],
    answer: 1,
  },
  {
    question: "O que é a teoria das placas tectônicas?",
    choices: [
      "Uma teoria sobre a formação de planetas",
      "Uma teoria sobre a evolução das espécies",
      "Uma teoria sobre a movimentação das camadas da Terra",
      "Uma teoria sobre a formação de buracos negros",
    ],
    answer: 2,
  },
  {
    question: "Qual é o nome da primeira mulher a receber dois prêmios Nobel em campos diferentes?",
    choices: ["Marie Curie", "Rosalind Franklin", "Dorothy Crowfoot Hodgkin", "Barbara McClintock"],
    answer: 0,
  },
  {
    question: "O que é a radioatividade?",
    choices: [
      "Um processo de decomposição de matéria orgânica",
      "Uma forma de energia luminosa",
      "A emissão de partículas subatômicas instáveis",
      "Um fenômeno meteorológico",
    ],
    answer: 2,
  },
  {
    question: "Qual é o elemento mais abundante na crosta terrestre?",
    choices: ["Ferro", "Oxigênio", "Silício", "Alumínio"],
    answer: 1,
  },
  {
    question: "O que é a Lei da Conservação da Massa?",
    choices: [
      "A matéria não pode ser criada nem destruída, apenas transformada",
      "A velocidade de um objeto é diretamente proporcional à força aplicada",
      "Dois corpos atraem-se com uma força diretamente proporcional à massa de ambos",
      "A energia total em um sistema isolado permanece constante ao longo do tempo",
    ],
    answer: 0,
  },
  {
    question: "O que é a Teoria da Gravidade Quântica?",
    choices: [
      "Uma teoria sobre a gravidade em campos magnéticos",
      "Uma teoria sobre a relação entre massa e energia",
      "Uma teoria que busca unificar a gravidade com a mecânica quântica",
      "Uma teoria sobre a expansão do universo",
    ],
    answer: 2,
  },
  {
    question: "Qual é a função principal dos glóbulos vermelhos no sangue?",
    choices: [
      "Combater infecções",
      "Transportar oxigênio",
      "Filtrar o sangue",
      "Realizar a coagulação sanguínea",
    ],
    answer: 1,
  },
  {
    question: "O que é a lei da conservação da energia?",
    choices: [
      "A matéria não pode ser criada nem destruída, apenas transformada",
      "A velocidade de um objeto é diretamente proporcional à força aplicada",
      "A energia total em um sistema isolado permanece constante ao longo do tempo",
      "Dois corpos atraem-se com uma força diretamente proporcional à massa de ambos",
    ],
    answer: 2,
  },
  {
    question: "Qual é o processo pelo qual as plantas convertem gás carbônico em oxigênio?",
    choices: ["Fotossíntese", "Respiração", "Digestão", "Fermentação"],
    answer: 0,
  },
  {
    question: "O que é a terapia genética?",
    choices: [
      "Um tipo de tratamento para problemas oculares",
      "Um método para modificar o código genético de um organismo",
      "Um processo de clonagem de animais",
      "Uma técnica de cirurgia cardíaca",
    ],
    answer: 1,
  },
  {
    question: "Qual é a unidade de medida de distância no sistema internacional?",
    choices: ["Metro", "Quilômetro", "Milha", "Polegada"],
    answer: 0,
  },
  {
    question: "O que é um eclipse solar?",
    choices: [
      "Quando a Lua passa entre a Terra e o Sol",
      "Quando a Terra passa entre a Lua e o Sol",
      "Quando o Sol passa entre a Terra e a Lua",
      "Quando Marte fica visível no céu noturno",
    ],
    answer: 0,
  },
  {
    question: "Quem é considerado o pai da microbiologia?",
    choices: ["Anton van Leeuwenhoek", "Louis Pasteur", "Robert Koch", "Alexander Fleming"],
    answer: 0,
  },
  {
    question: "O que é a síntese de proteínas?",
    choices: [
      "Um processo de respiração celular",
      "Um processo de divisão celular",
      "Um processo de produção de energia nas células",
      "Um processo de construção de proteínas a partir de aminoácidos",
    ],
    answer: 3,
  },
  {
    question: "Qual é o nome do primeiro satélite artificial lançado pela humanidade?",
    choices: ["Hubble", "Sputnik 1", "Voyager 1", "International Space Station"],
    answer: 1,
  },
  {
    question: "O que é a lei da inércia?",
    choices: [
      "A força aplicada a um objeto é igual à sua massa multiplicada pela aceleração",
      "Um objeto em repouso permanece em repouso, e um objeto em movimento permanece em movimento",
      "A energia total em um sistema isolado permanece constante ao longo do tempo",
      "A cada ação, há uma reação igual e oposta",
    ],
    answer: 1,
  },
  {
    question: "O que é um neurotransmissor?",
    choices: [
      "Uma partícula subatômica",
      "Um tipo de célula nervosa",
      "Uma substância química que transmite sinais entre os neurônios",
      "Uma enzima digestiva",
    ],
    answer: 2,
  },
  {
    question: "Qual é a principal função do sistema linfático?",
    choices: [
      "Produzir insulina",
      "Combater infecções",
      "Filtrar o sangue",
      "Realizar a coagulação sanguínea",
    ],
    answer: 1,
  },
  {
    question: "O que é a constante de Planck?",
    choices: [
      "Uma constante relacionada à aceleração de corpos em queda livre",
      "Uma constante relacionada à resistência elétrica em um circuito",
      "Uma constante relacionada à quantização de energia",
      "Uma constante relacionada à densidade populacional",
    ],
    answer: 2,
  },
  {
    question: "Qual é a estrutura fundamental da matéria?",
    choices: ["Átomo", "Molécula", "Próton", "Célula"],
    answer: 0,
  },
  {
    question: "O que é a Lei de Ohm?",
    choices: [
      "Uma lei da termodinâmica",
      "Uma lei da óptica",
      "Uma lei da eletricidade e magnetismo",
      "Uma lei que descreve a relação entre tensão, corrente e resistência em um circuito elétrico",
    ],
    answer: 3,
  },
  {
    question: "Quem é conhecido como o pai da medicina moderna?",
    choices: ["Hippocrates", "Avicenna", "Galen", "Paracelsus"],
    answer: 0,
  },
  {
    question: "O que é a Teoria do Caos?",
    choices: [
      "Uma teoria sobre a imprevisibilidade em sistemas dinâmicos",
      "Uma teoria sobre a gravidade em campos magnéticos",
      "Uma teoria sobre a formação de planetas",
      "Uma teoria sobre a origem da vida na Terra",
    ],
    answer: 0,
  },
  {
    question: "O que é a síndrome de Alzheimer?",
    choices: [
      "Uma doença cardiovascular",
      "Um distúrbio do sono",
      "Um transtorno alimentar",
      "Uma doença neurodegenerativa que afeta a memória e as funções cognitivas",
    ],
    answer: 3,
  },
  {
    question: "Qual é a unidade de medida de tempo no sistema internacional?",
    choices: ["Segundo", "Minuto", "Hora", "Dia"],
    answer: 0,
  },
  {
    question: "O que é a teoria da evolução química?",
    choices: [
      "Uma teoria sobre a formação do sistema solar",
      "Uma teoria sobre a evolução das espécies por meio de processos químicos",
      "Uma teoria sobre a origem da vida na Terra",
      "Uma teoria sobre a formação de estrelas",
    ],
    answer: 1,
  },
  {
    question: "Qual é a unidade de medida da luminosidade de uma estrela?",
    choices: ["Watt", "Candela", "Lúmen", "Magnitude aparente"],
    answer: 3,
  },
  {
    question: "O que é a teoria da informação quântica?",
    choices: [
      "Uma teoria sobre a transmissão de dados em redes de computadores",
      "Uma teoria sobre a codificação de informação em níveis subatômicos",
      "Uma teoria sobre a origem do universo",
      "Uma teoria sobre a formação de ondas sonoras",
    ],
    answer: 1,
  },
  {
    question: "Quem é conhecido como o pai da psicologia moderna?",
    choices: ["Sigmund Freud", "John B. Watson", "B.F. Skinner", "William James"],
    answer: 3,
  },
  {
    question: "O que é a lei da reflexão da luz?",
    choices: [
      "A luz se propaga em linha reta",
      "A luz se refrata ao passar de um meio para outro",
      "A luz é refletida em diferentes direções",
      "A luz é refletida com um ângulo igual ao ângulo de incidência",
    ],
    answer: 3,
  },
  {
    question: "O que é a teoria das supercordas?",
    choices: [
      "Uma teoria sobre a vibração de cordas musicais",
      "Uma teoria sobre a origem do universo",
      "Uma teoria sobre a formação de cordas em sistemas planetários",
      "Uma teoria sobre a natureza quântica das partículas subatômicas",
    ],
    answer: 3,
  },
  {
    question: "Qual é a função do sistema nervoso autônomo?",
    choices: [
      "Controle voluntário dos músculos esqueléticos",
      "Controle de funções involuntárias, como batimentos cardíacos e respiração",
      "Processamento de informações sensoriais",
      "Coordenação de movimentos finos",
    ],
    answer: 1,
  },
  {
    question: "O que é a teoria da inflação cósmica?",
    choices: [
      "Uma teoria sobre a expansão acelerada do universo no início de sua história",
      "Uma teoria sobre a formação de planetas",
      "Uma teoria sobre a gravidade em campos magnéticos",
      "Uma teoria sobre a formação de buracos negros",
    ],
    answer: 0,
  },
  {
    question: "O que é a lei da terceira lei de Newton?",
    choices: [
      "A força aplicada a um objeto é igual à sua massa multiplicada pela aceleração",
      "Dois corpos atraem-se com uma força diretamente proporcional à massa de ambos",
      "A cada ação, há uma reação igual e oposta",
      "A energia total em um sistema isolado permanece constante ao longo do tempo",
    ],
    answer: 2,
  },
  {
    question: "Qual é a principal função do sistema endócrino?",
    choices: [
      "Coordenação de movimentos finos",
      "Produção de insulina",
      "Controle de funções involuntárias, como batimentos cardíacos e respiração",
      "Transporte de oxigênio no sangue",
    ],
    answer: 2,
  },
  {
    question: "O que é a teoria do multiverso?",
    choices: [
      "Uma teoria sobre a existência de múltiplos universos",
      "Uma teoria sobre a formação de estrelas",
      "Uma teoria sobre a origem do universo",
      "Uma teoria sobre a evolução das espécies",
    ],
    answer: 0,
  },
  {
    question: "Qual é o nome do processo pelo qual as plantas perdem água para a atmosfera?",
    choices: ["Transpiração", "Fotossíntese", "Evaporação", "Respiração"],
    answer: 0,
  },
  {
    question: "O que é a síndrome de Down?",
    choices: [
      "Uma doença cardiovascular",
      "Um distúrbio do sono",
      "Um transtorno genético causado pela presença de um cromossomo extra",
      "Uma doença neurodegenerativa",
    ],
    answer: 2,
  },
  {
    question: "Qual é o componente principal da atmosfera de Vênus?",
    choices: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Metano"],
    answer: 2,
  },
  {
    question: "O que é a teoria da abiogênese?",
    choices: [
      "Uma teoria sobre a origem da vida a partir de seres preexistentes",
      "Uma teoria sobre a formação de estrelas",
      "Uma teoria sobre a origem do universo",
      "Uma teoria sobre a evolução das espécies",
    ],
    answer: 0,
  },
  {
    question: "O que é a refração da luz?",
    choices: [
      "A luz se propaga em linha reta",
      "A luz é refletida em diferentes direções",
      "A luz é absorvida por um meio",
      "A mudança de direção da luz ao passar de um meio para outro",
    ],
    answer: 3,
  },
  {
    question: "Qual é a unidade de medida da pressão no sistema internacional?",
    choices: ["Pascal", "Newton", "Watt", "Joule"],
    answer: 0,
  },
  {
    question: "O que é a Lei de Snell-Descartes?",
    choices: [
      "Uma lei da termodinâmica",
      "Uma lei da óptica",
      "Uma lei da eletricidade e magnetismo",
      "Uma lei que descreve a refração da luz",
    ],
    answer: 1,
  },
  {
    question: "O que é a teoria do caos quântico?",
    choices: [
      "Uma teoria sobre a imprevisibilidade em sistemas dinâmicos",
      "Uma teoria sobre a natureza quântica das partículas subatômicas",
      "Uma teoria sobre a formação de planetas",
      "Uma teoria sobre a origem da vida na Terra",
    ],
    answer: 0,
  },
  {
    question: "Qual é a soma dos ângulos internos de um triângulo?",
    choices: ["90 graus", "180 graus", "270 graus", "360 graus"],
    answer: 1,
  },
  {
    question: "Quanto é 7 elevado à potência de 3?",
    choices: ["21", "49", "343", "512"],
    answer: 2,
  },
  {
    question: "Qual é o resultado da multiplicação: 12 x 5?",
    choices: ["50", "60", "70", "80"],
    answer: 1,
  },
  {
    question: "Quanto é a raiz quadrada de 144?",
    choices: ["10", "12", "14", "16"],
    answer: 1,
  },
  {
    question: "Qual é a fórmula para calcular a área de um círculo?",
    choices: [
      "A = πr",
      "A = 2πr",
      "A = πr^2",
      "A = 0.5πr^2",
    ],
    answer: 2,
  },
  {
    question: "Qual é o valor de π (pi) aproximado?",
    choices: ["3.14", "2.71", "1.62", "4.20"],
    answer: 0,
  },
  {
    question: "Quanto é 15 dividido por 3?",
    choices: ["3", "5", "7", "9"],
    answer: 1,
  },
  {
    question: "Qual é o valor absoluto de -8?",
    choices: ["-8", "8", "0", "1"],
    answer: 1,
  },
  {
    question: "Qual é o resultado da expressão: 4² - 2³?",
    choices: ["4", "8", "12", "16"],
    answer: 0,
  },
  {
    question: "Qual é a fórmula para calcular o volume de uma esfera?",
    choices: [
      "V = (4/3)πr",
      "V = 2πr",
      "V = (4/3)πr^2",
      "V = 4πr^3",
    ],
    answer: 0,
  },
  {
    question: "Quanto é 25% de 80?",
    choices: ["15", "20", "25", "30"],
    answer: 1,
  },
  {
    question: "Qual é a soma dos primeiros 10 números naturais?",
    choices: ["45", "55", "65", "75"],
    answer: 1,
  },
  {
    question: "Quanto é a raiz cúbica de 27?",
    choices: ["3", "6", "9", "12"],
    answer: 0,
  },
  {
    question: "Qual é o resultado da expressão: 2x + 5 = 15?",
    choices: ["x = 5", "x = 7", "x = 8", "x = 10"],
    answer: 0,
  },
  {
    question: "Quanto é o logaritmo de 1000 na base 10?",
    choices: ["1", "2", "3", "4"],
    answer: 2,
  },
  {
    question: "Qual é o resultado da expressão: 3! (fatorial de 3)?",
    choices: ["3", "6", "9", "12"],
    answer: 1,
  },
  {
    question: "Quanto é a soma dos ângulos externos de um triângulo?",
    choices: ["90 graus", "180 graus", "270 graus", "360 graus"],
    answer: 3,
  },
  {
    question: "Qual é o resultado de 2 elevado à potência de 5?",
    choices: ["4", "8", "16", "32"],
    answer: 3,
  },
  {
    question: "Qual é a fórmula para calcular a área de um retângulo?",
    choices: [
      "A = πr",
      "A = 2πr",
      "A = l x w",
      "A = 0.5 x (base x altura)",
    ],
    answer: 2,
  },
  {
    question: "Qual é o valor de √25?",
    choices: ["3", "5", "7", "10"],
    answer: 1,
  }
]
