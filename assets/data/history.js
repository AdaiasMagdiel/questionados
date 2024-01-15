const HISTORY = [
  {
    question: "Quem foi o imperador romano conhecido por ter incendiado Roma?",
    choices: [
      "Augusto",
      "Nero",
      "Calígula",
      "Trajano"
    ],
    answer: 1
  },
  {
    question: "Qual foi o evento que marcou o fim da Idade Média e o início da Idade Moderna?",
    choices: [
      "Renascimento",
      "Descobrimento da América",
      "Guerra dos Cem Anos",
      "Queda de Constantinopla"
    ],
    answer: 3
  },
  {
    question: "Quem foi o líder do movimento de independência da Índia contra o domínio britânico?",
    choices: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Subhas Chandra Bose",
      "Bhagat Singh"
    ],
    answer: 1
  },
  {
    question: "Em que ano a Primeira Guerra Mundial começou?",
    choices: [
      "1914",
      "1917",
      "1918",
      "1920"
    ],
    answer: 0
  },
  {
    question: "Qual filósofo grego é considerado o pai da filosofia ocidental?",
    choices: [
      "Sócrates",
      "Aristóteles",
      "Platão",
      "Tales de Mileto"
    ],
    answer: 3
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    choices: [
      "Getúlio Vargas",
      "Juscelino Kubitschek",
      "Deodoro da Fonseca",
      "Marechal Floriano Peixoto"
    ],
    answer: 2
  },
  {
    question: "Qual foi a principal causa da Revolução Industrial?",
    choices: [
      "Invenção da máquina a vapor",
      "Descobrimento da eletricidade",
      "Aprimoramento da agricultura",
      "Expansão colonial"
    ],
    answer: 0
  },
  {
    question: "Quem foi o líder da Revolução Russa em 1917?",
    choices: [
      "Vladimir Lenin",
      "Joseph Stalin",
      "Nikolai Bukharin",
      "Leon Trotsky"
    ],
    answer: 0
  },
  {
    question: "Em que ano a Segunda Guerra Mundial começou?",
    choices: [
      "1939",
      "1941",
      "1943",
      "1945"
    ],
    answer: 0
  },
  {
    question: "Qual civilização construiu as pirâmides de Gizé?",
    choices: [
      "Mesopotâmia",
      "Roma",
      "Egito",
      "China"
    ],
    answer: 2
  },
  {
    question: "Qual era o nome do navio em que Cristóvão Colombo chegou às Américas em 1492?",
    choices: [
      "Santa Maria",
      "Pinta",
      "Nina",
      "Victoria"
    ],
    answer: 0
  },
  {
    question: "Quem foi o líder militar e político que desempenhou um papel fundamental na independência da Argentina, Chile e Peru?",
    choices: [
      "Miguel Hidalgo",
      "Simón Bolívar",
      "José de San Martín",
      "Augusto Pinochet"
    ],
    answer: 2
  },
  {
    question: "O que foi o Tratado de Versalhes após a Primeira Guerra Mundial?",
    choices: [
      "Um acordo de paz",
      "Uma aliança militar",
      "Um tratado comercial",
      "Um pacto cultural"
    ],
    answer: 0
  },
  {
    question: "Quem foi o líder da Revolução Cubana em 1959?",
    choices: [
      "Fulgencio Batista",
      "Che Guevara",
      "Camilo Cienfuegos",
      "Fidel Castro"
    ],
    answer: 3
  },
  {
    question: "Qual batalha marcou o fim definitivo da Guerra dos Cem Anos entre Inglaterra e França?",
    choices: [
      "Batalha de Hastings",
      "Batalha de Agincourt",
      "Batalha de Castillon",
      "Batalha de Bosworth"
    ],
    answer: 2
  },
  {
    question: "Quem foi a rainha da Inglaterra durante a Era Elisabetana?",
    choices: [
      "Rainha Maria I",
      "Rainha Ana",
      "Rainha Isabel I",
      "Rainha Vitória"
    ],
    answer: 2
  },
  {
    question: "Qual cidade foi a capital do Império Romano do Ocidente antes de sua queda?",
    choices: [
      "Atenas",
      "Roma",
      "Cartago",
      "Constantinopla"
    ],
    answer: 1
  },
  {
    question: "O que foi a Revolução Industrial?",
    choices: [
      "Uma revolta social",
      "Um avanço na agricultura",
      "Uma transformação econômica e tecnológica",
      "Uma reforma religiosa"
    ],
    answer: 2
  },
  {
    question: "Quem foi o líder sul-africano que lutou contra o apartheid e se tornou o primeiro presidente negro do país?",
    choices: [
      "Nelson Mandela",
      "Desmond Tutu",
      "Steve Biko",
      "Thabo Mbeki"
    ],
    answer: 0
  },
  {
    question: "Em que ano a Guerra Fria chegou ao fim com a queda do Muro de Berlim?",
    choices: [
      "1985",
      "1989",
      "1991",
      "1995"
    ],
    answer: 1
  },
  {
    question: "Quem foi o fundador do Império Mongol e criador de um dos maiores impérios da história?",
    choices: [
      "Genghis Khan",
      "Kublai Khan",
      "Attila, o Huno",
      "Tamerlão"
    ],
    answer: 0
  },
  {
    question: "Qual foi a principal causa da Revolução Francesa?",
    choices: [
      "Desigualdade social",
      "Fome",
      "Guerra",
      "Todas as anteriores"
    ],
    answer: 3
  },
  {
    question: "Quem foi o líder da Revolução Industrial na Inglaterra?",
    choices: [
      "James Watt",
      "George Stephenson",
      "Richard Arkwright",
      "James Hargreaves"
    ],
    answer: 2
  },
  {
    question: "Qual foi o impacto da Peste Negra (ou Peste Bubônica) na Europa medieval?",
    choices: [
      "Aumento da população",
      "Decadência do feudalismo",
      "Expansão territorial",
      "Desenvolvimento da medicina"
    ],
    answer: 1
  },
  {
    question: "O que foi a Guerra dos Trinta Anos?",
    choices: [
      "Conflito religioso na França",
      "Guerra entre Inglaterra e França",
      "Conflito na Europa Central",
      "Guerra civil na Inglaterra"
    ],
    answer: 2
  },
  {
    question: "Quem foi o líder da Revolução Bolchevique na Rússia em 1917?",
    choices: [
      "Vladimir Lenin",
      "Joseph Stalin",
      "Lev Tolstói",
      "Nikolai Bukharin"
    ],
    answer: 0
  },
  {
    question: "O que foi o Congresso de Viena em 1815?",
    choices: [
      "Um tratado de paz",
      "Uma conferência para reorganizar a Europa pós-Napoleão",
      "Uma revolta contra monarcas absolutistas",
      "Uma aliança militar"
    ],
    answer: 1
  },
  {
    question: "Quem foi o líder da independência do México em 1810?",
    choices: [
      "Miguel Hidalgo",
      "Benito Juárez",
      "Emiliano Zapata",
      "Pancho Villa"
    ],
    answer: 0
  },
  {
    question: "Qual foi o evento que desencadeou a entrada dos Estados Unidos na Segunda Guerra Mundial?",
    choices: [
      "Ataque a Pearl Harbor",
      "Bombardeio de Hiroshima",
      "Invasão da Normandia",
      "Ataque a Londres"
    ],
    answer: 0
  },
  {
    question: "Quem foi o primeiro imperador romano?",
    choices: [
      "Júlio César",
      "Augusto",
      "Nero",
      "Calígula"
    ],
    answer: 1
  },
  {
    question: "Quem foi o líder militar francês que liderou as forças aliadas na Batalha de Waterloo contra Napoleão Bonaparte?",
    choices: [
      "Arthur Wellesley",
      "Horatio Nelson",
      "Charles Cornwallis",
      "Robert Clive"
    ],
    answer: 0
  },
  {
    question: "Qual foi o evento que marcou o início da Revolução Industrial na Inglaterra?",
    choices: [
      "Invenção da máquina a vapor",
      "Revolução Francesa",
      "Descobrimento da eletricidade",
      "Expansão colonial"
    ],
    answer: 0
  },
  {
    question: "Quem foi o primeiro presidente dos Estados Unidos a ser impeachado?",
    choices: [
      "John F. Kennedy",
      "Richard Nixon",
      "Bill Clinton",
      "George W. Bush"
    ],
    answer: 2
  },
  {
    question: "O que foi o Apartheid na África do Sul?",
    choices: [
      "Um movimento de independência",
      "Um regime de segregação racial",
      "Uma guerra civil",
      "Um tratado de paz"
    ],
    answer: 1
  },
  {
    question: "Quem foi o líder da Revolução Industrial nos Estados Unidos?",
    choices: [
      "Andrew Carnegie",
      "John D. Rockefeller",
      "Henry Ford",
      "Thomas Edison"
    ],
    answer: 2
  },
  {
    question: "Qual foi o evento que desencadeou a Primeira Guerra Mundial?",
    choices: [
      "Assassinato de Franz Ferdinand",
      "Ataque a Pearl Harbor",
      "Bombardeio de Hiroshima",
      "Tratado de Versalhes"
    ],
    answer: 0
  },
  {
    question: "Quem foi o explorador português que liderou a primeira circum-navegação ao redor da Terra?",
    choices: [
      "Fernão Mendes Pinto",
      "Vasco da Gama",
      "Fernão Magalhães",
      "Bartolomeu Dias"
    ],
    answer: 2
  },
  {
    question: "Em que ano a União Soviética foi oficialmente dissolvida?",
    choices: [
      "1989",
      "1991",
      "1993",
      "1995"
    ],
    answer: 1
  },
  {
    question: "Quem foi o líder do movimento pelos direitos civis nos Estados Unidos na década de 1960?",
    choices: [
      "Malcolm X",
      "Rosa Parks",
      "Martin Luther King Jr.",
      "John Lewis"
    ],
    answer: 2
  },
  {
    question: "Qual foi o tratado que encerrou a Primeira Guerra Mundial?",
    choices: [
      "Tratado de Paris",
      "Tratado de Versalhes",
      "Tratado de Tordesilhas",
      "Tratado de Lisboa"
    ],
    answer: 1
  },
  {
    question: "Quem foi o líder revolucionário que desempenhou um papel importante na independência de vários países da América Latina, incluindo Venezuela, Colômbia, Equador, Peru e Bolívia?",
    choices: [
      "José de San Martín",
      "Miguel Hidalgo",
      "Simón Bolívar",
      "Bernardo O'Higgins"
    ],
    answer: 2
  },
  {
    question: "Qual foi o evento que levou à Guerra do Vietnã?",
    choices: [
      "Ataque a Pearl Harbor",
      "Guerra Fria",
      "Guerra Franco-Prussiana",
      "Incidente do Golfo de Tonkin"
    ],
    answer: 3
  },
  {
    question: "Quem foi o faraó responsável pela construção das Grandes Pirâmides de Gizé?",
    choices: [
      "Cleópatra",
      "Ramsés II",
      "Tutancâmon",
      "Quéops"
    ],
    answer: 3
  },
  {
    question: "O que foi a Revolta dos Boxers na China?",
    choices: [
      "Uma revolta contra o domínio britânico",
      "Um movimento de independência indiana",
      "Uma revolta contra estrangeiros na China",
      "Uma guerra civil na China"
    ],
    answer: 2
  },
  {
    question: "Quem foi o líder da Revolução Industrial na Alemanha?",
    choices: [
      "Otto von Bismarck",
      "Friedrich Engels",
      "Karl Marx",
      "Werner von Siemens"
    ],
    answer: 3
  },
  {
    question: "Em que ano a Guerra Civil Americana teve início?",
    choices: [
      "1861",
      "1870",
      "1848",
      "1885"
    ],
    answer: 0
  },
  {
    question: "Qual cidade foi o centro da Renascença italiana?",
    choices: [
      "Madri",
      "Paris",
      "Roma",
      "Florença"
    ],
    answer: 3
  },
  {
    question: "Quem foi o líder da Revolução Cubana ao lado de Fidel Castro?",
    choices: [
      "Che Guevara",
      "Raul Castro",
      "Camilo Cienfuegos",
      "Fulgencio Batista"
    ],
    answer: 0
  },
  {
    question: "Qual foi o tratado que encerrou a Guerra Franco-Prussiana em 1871?",
    choices: [
      "Tratado de Paris",
      "Tratado de Versalhes",
      "Tratado de Frankfurt",
      "Tratado de Brest-Litovski"
    ],
    answer: 2
  },
  {
    question: "Quem foi o líder do movimento pelos direitos civis dos negros nos Estados Unidos, conhecido por suas ideias de resistência não violenta?",
    choices: [
      "Malcolm X",
      "Rosa Parks",
      "Martin Luther King Jr.",
      "Harriet Tubman"
    ],
    answer: 2
  },
  {
    question: "Qual batalha foi decisiva para a independência dos Estados Unidos durante a Guerra Revolucionária Americana?",
    choices: [
      "Batalha de Yorktown",
      "Batalha de Lexington",
      "Batalha de Saratoga",
      "Batalha de Bunker Hill"
    ],
    answer: 0
  },
  {
    question: "Quem foi o líder do movimento pela independência da Índia, conhecido por suas táticas de resistência não violenta?",
    choices: [
      "Jawaharlal Nehru",
      "Subhas Chandra Bose",
      "Rajiv Gandhi",
      "Mahatma Gandhi"
    ],
    answer: 3
  },
  {
    question: "O que foi a Revolução Meiji no Japão?",
    choices: [
      "Uma revolta contra a dinastia Qing",
      "Uma revolta camponesa",
      "Um movimento anti-imperialista",
      "Uma modernização radical do país"
    ],
    answer: 3
  },
  {
    question: "Quem foi o líder da Revolução Haitiana que resultou na independência do Haiti?",
    choices: [
      "Simón Bolívar",
      "Toussaint Louverture",
      "Jean-Jacques Dessalines",
      "Henri Christophe"
    ],
    answer: 1
  },
  {
    question: "Qual foi a principal consequência da Batalha de Actium em 31 a.C.?",
    choices: [
      "Ascensão de Augusto ao poder",
      "Fim da República Romana",
      "Conquista da Grécia por Roma",
      "Morte de Cleópatra"
    ],
    answer: 0
  },
  {
    question: "Quem foi o líder do movimento sufragista que lutou pelos direitos das mulheres no Reino Unido?",
    choices: [
      "Emmeline Pankhurst",
      "Florence Nightingale",
      "Queen Victoria",
      "Jane Austen"
    ],
    answer: 0
  },
  {
    question: "Qual foi o evento que levou à Revolução Gloriosa na Inglaterra em 1688?",
    choices: [
      "Guerra Civil Inglesa",
      "Execução de Charles I",
      "Invasão holandesa",
      "Revolução Industrial"
    ],
    answer: 2
  },
  {
    question: "Quem foi o primeiro czar da Rússia?",
    choices: [
      "Ivan, o Terrível",
      "Pedro, o Grande",
      "Catarina, a Grande",
      "Alexandre II"
    ],
    answer: 0
  },
  {
    question: "O que foi o Manifesto Comunista?",
    choices: [
      "Um tratado de paz entre nações",
      "Um documento que proclama os direitos humanos",
      "Um chamado à revolta contra monarquias absolutistas",
      "Um texto de Marx e Engels que defende o comunismo"
    ],
    answer: 3
  },
  {
    question: "Quem foi o navegador português que liderou a primeira viagem de circum-navegação ao redor do mundo?",
    choices: [
      "Bartolomeu Dias",
      "Vasco da Gama",
      "Fernão Magalhães",
      "Pedro Álvares Cabral"
    ],
    answer: 2
  },
  {
    question: "Quem foi o líder militar e político que desempenhou um papel fundamental na independência da Argentina, Chile e Peru?",
    choices: [
      "Miguel Hidalgo",
      "Simón Bolívar",
      "José de San Martín",
      "Augusto Pinochet"
    ],
    answer: 2
  },
  {
    question: "O que foi a Revolução Meiji no Japão?",
    choices: [
      "Uma revolta contra a dinastia Qing",
      "Uma revolta camponesa",
      "Um movimento anti-imperialista",
      "Uma modernização radical do país"
    ],
    answer: 3
  },
  {
    question: "Quem foi o líder do movimento pela independência da Índia, conhecido por suas táticas de resistência não violenta?",
    choices: [
      "Jawaharlal Nehru",
      "Subhas Chandra Bose",
      "Rajiv Gandhi",
      "Mahatma Gandhi"
    ],
    answer: 3
  },
  {
    question: "O que foi a Revolta dos Boxers na China?",
    choices: [
      "Uma revolta contra o domínio britânico",
      "Um movimento de independência indiana",
      "Uma revolta contra estrangeiros na China",
      "Uma guerra civil na China"
    ],
    answer: 2
  },
  {
    question: "Quem foi o líder do movimento sufragista que lutou pelos direitos das mulheres no Reino Unido?",
    choices: [
      "Emmeline Pankhurst",
      "Florence Nightingale",
      "Queen Victoria",
      "Jane Austen"
    ],
    answer: 0
  },
  {
    question: "Qual foi a principal consequência da Batalha de Actium em 31 a.C.?",
    choices: [
      "Ascensão de Augusto ao poder",
      "Fim da República Romana",
      "Conquista da Grécia por Roma",
      "Morte de Cleópatra"
    ],
    answer: 0
  },
  {
    question: "Quem foi o explorador português que liderou a primeira circum-navegação ao redor da Terra?",
    choices: [
      "Fernão Mendes Pinto",
      "Vasco da Gama",
      "Fernão Magalhães",
      "Bartolomeu Dias"
    ],
    answer: 2
  },
  {
    question: "Qual cidade foi o centro da Renascença italiana?",
    choices: [
      "Madri",
      "Paris",
      "Roma",
      "Florença"
    ],
    answer: 3
  },
  {
    question: "Quem foi o líder revolucionário que desempenhou um papel importante na independência de vários países da América Latina, incluindo Venezuela, Colômbia, Equador, Peru e Bolívia?",
    choices: [
      "José de San Martín",
      "Miguel Hidalgo",
      "Simón Bolívar",
      "Bernardo O'Higgins"
    ],
    answer: 2
  },
  {
    question: "Qual foi o evento que levou à Revolução Gloriosa na Inglaterra em 1688?",
    choices: [
      "Guerra Civil Inglesa",
      "Execução de Charles I",
      "Invasão holandesa",
      "Revolução Industrial"
    ],
    answer: 2
  },
  {
    question: "Quem foi o líder da Revolução Haitiana que resultou na independência do Haiti?",
    choices: [
      "Simón Bolívar",
      "Toussaint Louverture",
      "Jean-Jacques Dessalines",
      "Henri Christophe"
    ],
    answer: 2
  },
  {
    question: "Qual foi o evento que levou à Guerra do Vietnã?",
    choices: [
      "Ataque a Pearl Harbor",
      "Guerra Fria",
      "Guerra Franco-Prussiana",
      "Incidente do Golfo de Tonkin"
    ],
    answer: 3
  },
  {
    question: "Quem foi o faraó responsável pela construção das Grandes Pirâmides de Gizé?",
    choices: [
      "Cleópatra",
      "Ramsés II",
      "Tutancâmon",
      "Quéops"
    ],
    answer: 3
  },
  {
    question: "Quem foi o líder do movimento pelos direitos civis dos negros nos Estados Unidos, conhecido por suas ideias de resistência não violenta?",
    choices: [
      "Malcolm X",
      "Rosa Parks",
      "Martin Luther King Jr.",
      "Harriet Tubman"
    ],
    answer: 2
  },
  {
    question: "O que foi o Manifesto Comunista?",
    choices: [
      "Um tratado de paz entre nações",
      "Um documento que proclama os direitos humanos",
      "Um chamado à revolta contra monarquias absolutistas",
      "Um texto de Marx e Engels que defende o comunismo"
    ],
    answer: 3
  },
  {
    question: "Quem foi o líder do movimento pela independência dos Estados Unidos, conhecido por suas contribuições na redação da Declaração de Independência?",
    choices: [
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
      "Benjamin Franklin"
    ],
    answer: 1
  },
  {
    question: "Qual foi o líder militar francês que liderou as forças aliadas na Batalha de Waterloo contra Napoleão Bonaparte?",
    choices: [
      "Arthur Wellesley",
      "Horatio Nelson",
      "Charles Cornwallis",
      "Robert Clive"
    ],
    answer: 0
  },
  {
    question: "Quem foi o primeiro imperador romano?",
    choices: [
      "Júlio César",
      "Augusto",
      "Nero",
      "Calígula"
    ],
    answer: 1
  },
  {
    question: "O que foi o Apartheid na África do Sul?",
    choices: [
      "Um movimento de independência",
      "Um regime de segregação racial",
      "Uma guerra civil",
      "Um tratado de paz"
    ],
    answer: 1
  },
  {
    question: "Quem foi o líder do movimento pelos direitos civis nos Estados Unidos na década de 1960?",
    choices: [
      "Malcolm X",
      "Rosa Parks",
      "Martin Luther King Jr.",
      "John Lewis"
    ],
    answer: 2
  },
  {
    question: "Quem foi o líder revolucionário que desempenhou um papel importante na independência da Colômbia, Venezuela, Equador, Peru e Bolívia?",
    choices: [
      "José de San Martín",
      "Simón Bolívar",
      "Miguel Hidalgo",
      "Bernardo O'Higgins"
    ],
    answer: 1
  },
  {
    question: "Qual foi o nome do movimento que buscava a reunificação da Itália no século XIX?",
    choices: [
      "Movimento Carbonário",
      "Movimento Risorgimento",
      "Movimento Garibaldino",
      "Movimento Medici"
    ],
    answer: 1
  },
  {
    question: "Quem foi o líder militar espartano na Batalha das Termópilas durante as Guerras Persas?",
    choices: [
      "Leônidas",
      "Péricles",
      "Alexandre, o Grande",
      "Sócrates"
    ],
    answer: 0
  },
  {
    question: "Em que ano ocorreu a Revolução Bolchevique na Rússia?",
    choices: [
      "1915",
      "1917",
      "1919",
      "1921"
    ],
    answer: 1
  },
  {
    question: "Qual foi o tratado que encerrou a Guerra dos Trinta Anos em 1648?",
    choices: [
      "Tratado de Vestfália",
      "Tratado de Utrecht",
      "Tratado de Paris",
      "Tratado de Versalhes"
    ],
    answer: 0
  },
  {
    question: "Quem foi o líder militar e político que liderou o movimento pela independência da Argentina?",
    choices: [
      "San Martín",
      "Bolívar",
      "Rosas",
      "Perón"
    ],
    answer: 2
  },
  {
    question: "Qual foi o imperador romano que implementou reformas significativas e é conhecido como o 'Filósofo-Rei'?",
    choices: [
      "Nero",
      "Marco Aurélio",
      "Calígula",
      "Augusto"
    ],
    answer: 1
  },
  {
    question: "O que foi o Tratado de Tordesilhas?",
    choices: [
      "Um tratado de paz entre Portugal e Espanha",
      "Um acordo comercial entre europeus e asiáticos",
      "Uma divisão territorial entre Portugal e Espanha nas Américas",
      "Um pacto de não agressão entre nações europeias"
    ],
    answer: 2
  },
  {
    question: "Quem foi o líder da Revolta dos Malês, uma revolta de escravizados muçulmanos no Brasil em 1835?",
    choices: [
      "Zumbi dos Palmares",
      "Luís Gonzaga das Virgens",
      "Manuel Congo",
      "Ahmad ibn Muhammad"
    ],
    answer: 3
  },
  {
    question: "Qual cidade foi a capital do Império Romano do Oriente antes de sua queda?",
    choices: [
      "Atenas",
      "Roma",
      "Cartago",
      "Constantinopla"
    ],
    answer: 3
  },
  {
    question: "Quem foi o líder militar e político que desempenhou um papel fundamental na independência do México?",
    choices: [
      "Miguel Hidalgo",
      "José de San Martín",
      "Simón Bolívar",
      "Emiliano Zapata"
    ],
    answer: 0
  },
  {
    question: "Qual evento marcou o início da Revolução Industrial na Inglaterra?",
    choices: [
      "Descobrimento da eletricidade",
      "Invenção da máquina a vapor",
      "Revolução Francesa",
      "Guerra dos Cem Anos"
    ],
    answer: 1
  },
  {
    question: "Quem foi o líder da Revolução Russa que mais tarde se tornou o líder da União Soviética?",
    choices: [
      "Vladimir Lenin",
      "Leon Trotsky",
      "Joseph Stalin",
      "Nikolai Bukharin"
    ],
    answer: 2
  },
  {
    question: "Qual foi o imperador romano que implementou reformas políticas e sociais durante o período conhecido como a 'Pax Romana'?",
    choices: [
      "Calígula",
      "Nero",
      "Marco Aurélio",
      "Júlio César"
    ],
    answer: 2
  },
  {
    question: "Em que ano a Revolução Francesa teve início?",
    choices: [
      "1789",
      "1799",
      "1765",
      "1804"
    ],
    answer: 0
  },
  {
    question: "Quem foi o líder militar e político da Guerra dos Cem Anos que conduziu as forças inglesas na Batalha de Agincourt?",
    choices: [
      "Joana d'Arc",
      "Eduardo III",
      "Ricardo Coração de Leão",
      "Henrique V"
    ],
    answer: 3
  },
  {
    question: "Qual foi o evento que desencadeou a Primeira Guerra Mundial?",
    choices: [
      "Assassinato de Franz Ferdinand",
      "Ataque a Pearl Harbor",
      "Invasão da Polônia",
      "Bombardeio de Hiroshima"
    ],
    answer: 0
  },
  {
    question: "Quem foi o explorador português que chegou às Índias por via marítima, contornando o Cabo da Boa Esperança?",
    choices: [
      "Bartolomeu Dias",
      "Fernão Mendes Pinto",
      "Vasco da Gama",
      "Pedro Álvares Cabral"
    ],
    answer: 2
  },
  {
    question: "O que foi a Revolução Industrial?",
    choices: [
      "Um movimento artístico",
      "Uma revolta camponesa",
      "Uma transformação econômica e tecnológica",
      "Uma guerra civil"
    ],
    answer: 2
  },
  {
    question: "Quem foi o líder militar e político que desempenhou um papel crucial na independência do Peru?",
    choices: [
      "Miguel Hidalgo",
      "Simón Bolívar",
      "Bernardo O'Higgins",
      "José de San Martín"
    ],
    answer: 3
  }
]
