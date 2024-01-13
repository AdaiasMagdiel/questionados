const SPORTS = [
  {
    question: "Qual é o único clube brasileiro a vencer a Libertadores, a Copa Sul-Americana e a Recopa Sul-Americana?",
    choices: ["Flamengo", "Palmeiras", "Santos", "São Paulo"],
    answer: 0,
  },
  {
    question: "Quantas Copas do Mundo a seleção brasileira de futebol já venceu?",
    choices: ["3", "5", "6", "4"],
    answer: 1,
  },
  {
    question: "Qual atleta é conhecido como 'Rei do Futebol'?",
    choices: ["Diego Maradona", "Pelé", "Cristiano Ronaldo", "Lionel Messi"],
    answer: 1,
  },
  {
    question: "Qual time brasileiro é conhecido como 'Galo'?",
    choices: ["Fluminense", "São Paulo", "Cruzeiro", "Atlético Mineiro"],
    answer: 3,
  },
  {
    question: "Em que esporte Ayrton Senna era famoso?",
    choices: ["Fórmula 1", "Tênis", "Vôlei", "Natação"],
    answer: 0,
  },
  {
    question: "Quem é o maior artilheiro da história da seleção brasileira de futebol?",
    choices: ["Pelé", "Neymar", "Ronaldo Nazário", "Romário"],
    answer: 0,
  },
  {
    question: "Qual é o clube mais antigo de futebol em atividade no Brasil?",
    choices: ["Flamengo", "Corinthians", "Botafogo", "Paysandu"],
    answer: 3,
  },
  {
    question: "Qual esporte Michael Jordan praticava?",
    choices: ["Basquete", "Golfe", "Tênis", "Futebol Americano"],
    answer: 0,
  },
  {
    question: "Em que país nasceu o jogador de futebol Cristiano Ronaldo?",
    choices: ["Brasil", "Argentina", "Portugal", "Espanha"],
    answer: 2,
  },
  {
    question: "Qual é o mascote oficial da Copa do Mundo de 2014 realizada no Brasil?",
    choices: ["Fuleco", "Zabivaka", "Pique", "Goleo"],
    answer: 0,
  },
  {
    question: "Qual time de futebol possui mais títulos da Copa Libertadores da América?",
    choices: ["Boca Juniors", "Santos", "Independiente", "River Plate"],
    answer: 2,
  },
  {
    question: "Em qual esporte o brasileiro Gustavo Kuerten se destacou?",
    choices: ["Vôlei", "Tênis", "Surfe", "Natação"],
    answer: 1,
  },
  {
    question: "Qual é o apelido do estádio do Maracanã, no Rio de Janeiro?",
    choices: ["Arena das Dunas", "Templo do Futebol", "Maior do Mundo", "Sambódromo"],
    answer: 1,
  },
  {
    question: "Em que ano o Brasil sediou a Copa do Mundo pela última vez antes de 2014?",
    choices: ["2002", "1998", "1986", "1970"],
    answer: 0,
  },
  {
    question: "Qual é o único clube a participar de todas as edições do Campeonato Brasileiro da Série A desde sua criação em 1971?",
    choices: ["Santos", "Flamengo", "São Paulo", "Cruzeiro"],
    answer: 1,
  },
  {
    question: "Quem é o maior artilheiro da história da seleção argentina de futebol?",
    choices: ["Lionel Messi", "Diego Maradona", "Gabriel Batistuta", "Hernán Crespo"],
    answer: 2,
  },
  {
    question: "Qual é o nome do troféu concedido ao campeão da Copa do Mundo de Futebol?",
    choices: ["Taça do Mundo", "Taça Jules Rimet", "Copa FIFA", "Troféu Ouro"],
    answer: 2,
  },
  {
    question: "Qual é o clube que detém o recorde de mais títulos da Liga dos Campeões da UEFA?",
    choices: ["Real Madrid", "Barcelona", "Manchester United", "Bayern de Munique"],
    answer: 0,
  },
  {
    question: "Em que cidade brasileira se encontra o estádio Beira-Rio?",
    choices: ["Porto Alegre", "Curitiba", "Florianópolis", "Caxias do Sul"],
    answer: 0,
  },
  {
    question: "Qual é o esporte praticado pela equipe Chicago Bulls, na qual Michael Jordan se destacou?",
    choices: ["Futebol Americano", "Hóquei no Gelo", "Basquete", "Beisebol"],
    answer: 2,
  },
  {
    question: "Qual país é considerado o berço do futebol?",
    choices: ["Inglaterra", "Brasil", "Espanha", "Itália"],
    answer: 0,
  },
  {
    question: "Qual é o apelido da seleção brasileira de futebol feminino?",
    choices: ["Guerreiras", "Canarinhas", "Verde-Amarelas", "Furacões"],
    answer: 1,
  },
  {
    question: "Qual é o clube brasileiro com mais títulos nacionais?",
    choices: ["Flamengo", "Corinthians", "Santos", "São Paulo"],
    answer: 2,
  },
  {
    question: "Em que esporte o brasileiro Ayrton Senna se destacou?",
    choices: ["Tênis", "Automobilismo", "Golfe", "Natação"],
    answer: 1,
  },
  {
    question: "Qual é o nome do estádio onde o Barcelona FC manda seus jogos?",
    choices: ["Santiago Bernabéu", "Anfield", "Camp Nou", "Old Trafford"],
    answer: 2,
  },
  {
    question: "Qual é o nome do primeiro brasileiro a vencer uma etapa do Tour de France?",
    choices: ["Lance Armstrong", "Fernando Gaviria", "Egan Bernal", "Fábio Casartelli"],
    answer: 2,
  },
  {
    question: "Quem é o atual campeão da NBA na temporada 2021-2022?",
    choices: ["Los Angeles Lakers", "Brooklyn Nets", "Golden State Warriors", "Milwaukee Bucks"],
    answer: 3,
  },
  {
    question: "Qual é o nome do circuito que sedia o Grande Prêmio de Mônaco de Fórmula 1?",
    choices: ["Circuito de Silverstone", "Circuito de Spa-Francorchamps", "Circuito de Suzuka", "Circuito de Monte Carlo"],
    answer: 3,
  },
  {
    question: "Em que esporte a expressão 'hat-trick' é comumente usada?",
    choices: ["Golfe", "Críquete", "Futebol", "Beisebol"],
    answer: 2,
  },
  {
    question: "Qual é o nome do brasileiro considerado um dos maiores pilotos de Fórmula 1 e tricampeão mundial?",
    choices: ["Rubens Barrichello", "Felipe Massa", "Nelson Piquet", "Ayrton Senna"],
    answer: 3,
  },
  {
    question: "Em que esporte o termo 'grand slam' é utilizado?",
    choices: ["Tênis", "Golfe", "Beisebol", "Basquete"],
    answer: 0,
  },
  {
    question: "Qual é o nome do técnico que comandou a seleção brasileira na conquista do pentacampeonato mundial de futebol em 2002?",
    choices: ["Carlos Alberto Parreira", "Tite", "Dunga", "Luiz Felipe Scolari"],
    answer: 0,
  },
  {
    question: "Qual é o esporte principal dos Jogos Olímpicos de Inverno?",
    choices: ["Esqui", "Bobsled", "Hóquei no Gelo", "Patinagem Artística"],
    answer: 2,
  },
  {
    question: "Qual é o nome do ex-jogador de basquete brasileiro que foi campeão da NBA com o Chicago Bulls na década de 90?",
    choices: ["Oscar Schmidt", "Magic Johnson", "Leandro Barbosa", "Anderson Varejão"],
    answer: 0,
  },
  {
    question: "Qual é o nome do estádio onde a final da Copa do Mundo de 2018 foi realizada?",
    choices: ["Estádio Nacional", "Estádio Luzhniki", "Estádio Maracanã", "Estádio Wembley"],
    answer: 1,
  },
  {
    question: "Qual é o único clube a vencer a tríplice coroa no futebol brasileiro (Campeonato Brasileiro, Copa do Brasil e Libertadores no mesmo ano)?",
    choices: ["Flamengo", "São Paulo", "Grêmio", "Cruzeiro"],
    answer: 3,
  },
  {
    question: "Quem é o recordista de medalhas de ouro olímpicas em uma única edição dos Jogos Olímpicos?",
    choices: ["Michael Phelps", "Usain Bolt", "Simone Biles", "Nadia Comăneci"],
    answer: 3,
  },
  {
    question: "Qual é o país sede da Copa do Mundo de 2022?",
    choices: ["Egito", "Qatar", "Emirados Árabes Unidos", "Arábia Saudita"],
    answer: 1,
  },
  {
    question: "Qual é o único clube a vencer a tríplice coroa no futebol sul-americano (Copa Libertadores, Recopa Sul-Americana e Copa Sul-Americana)?",
    choices: ["Independiente", "Boca Juniors", "Santos", "River Plate"],
    answer: 0,
  },
  {
    question: "Quem é o maior artilheiro da história do Barcelona FC?",
    choices: ["Lionel Messi", "Xavi Hernández", "Andrés Iniesta", "César Rodríguez"],
    answer: 3,
  },
  {
    question: "Em que ano o Brasil sediou as Olimpíadas pela segunda vez na história?",
    choices: ["2004", "2012", "2016", "2020"],
    answer: 2,
  },
  {
    question: "Qual é o nome do lendário jogador de basquete norte-americano que é conhecido como 'The Black Mamba'?",
    choices: ["LeBron James", "Michael Jordan", "Magic Johnson", "Kobe Bryant"],
    answer: 3,
  },
  {
    question: "Qual é o nome do estádio do Barcelona FC?",
    choices: ["Anfield", "Santiago Bernabéu", "San Siro", "Camp Nou"],
    answer: 3,
  },
  {
    question: "Qual é o único clube brasileiro a vencer a Copa Intercontinental de Clubes por três vezes consecutivas?",
    choices: ["Grêmio", "Santos", "Palmeiras", "Flamengo"],
    answer: 1,
  },
  {
    question: "Quem é a maior medalhista olímpica de todos os tempos?",
    choices: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Nadia Comăneci"],
    answer: 1,
  },
  {
    question: "Qual é o país conhecido como 'A Casa do Futebol'?",
    choices: ["Alemanha", "Brasil", "Inglaterra", "Argentina"],
    answer: 1,
  },
  {
    question: "Qual é o time de futebol mais antigo do Brasil?",
    choices: ["Flamengo", "Botafogo", "Corinthians", "Paysandu"],
    answer: 2,
  },
  {
    question: "Em que ano o surf foi incluído nos Jogos Olímpicos?",
    choices: ["2016", "2020", "2024", "2028"],
    correta: 2
  },
  {
    question: 'Qual time brasileiro tem mais títulos de Copa Libertadores?',
    choices: ['Flamengo', 'Santos', 'Palmeiras', 'São Paulo'],
    answer: 0,
  },
  {
    question: 'Qual esporte é conhecido como "esporte bretão"?',
    choices: ['Críquete', 'Rúgbi', 'Golf', 'Futebol'],
    answer: 3,
  },
  {
    question: 'Quem é o maior artilheiro da história da seleção brasileira de futebol?',
    choices: ['Pelé', 'Neymar', 'Ronaldo', 'Romário'],
    answer: 0,
  },
  {
    question: 'Quantas vezes a França venceu a Copa do Mundo de futebol?',
    choices: ['1', '2', '3', '4'],
    answer: 2,
  },
  {
    question: 'Em que ano o Brasil sediou a Copa do Mundo de futebol pela primeira vez?',
    choices: ['1950', '1954', '1958', '1962'],
    answer: 0,
  },
  {
    question: 'Qual é o esporte conhecido como "esporte da raquete e peteca"?',
    choices: ['Badminton', 'Tênis', 'Ping Pong', 'Squash'],
    answer: 0,
  },
  {
    question: 'Quantas medalhas de ouro o Brasil conquistou nos Jogos Olímpicos de Verão de 2020 (realizados em 2021)?',
    choices: ['3', '5', '7', '10'],
    answer: 1,
  },
  {
    question: 'Qual é o clube mais antigo de futebol do Brasil?',
    choices: ['Flamengo', 'Santos', 'Vasco da Gama', 'Corinthians'],
    answer: 2,
  },
  {
    question: 'Em que ano a NBA (National Basketball Association) foi fundada?',
    choices: ['1946', '1950', '1960', '1970'],
    answer: 0,
  },
  {
    question: 'Quem é considerado o maior jogador de tênis de todos os tempos?',
    choices: ['Roger Federer', 'Rafael Nadal', 'Novak Djokovic', 'Serena Williams'],
    answer: 2,
  },
  {
    question: 'Qual país sediou os Jogos Olímpicos de Inverno em 2018?',
    choices: ['Canadá', 'Coreia do Sul', 'Noruega', 'Rússia'],
    answer: 1,
  },
  {
    question: 'Qual é o único clube brasileiro a vencer a Copa Intercontinental três vezes?',
    choices: ['São Paulo', 'Santos', 'Grêmio', 'Flamengo'],
    answer: 1,
  },
  {
    question: 'Em que ano o futebol se tornou um esporte olímpico?',
    choices: ['1900', '1912', '1924', '1936'],
    answer: 2,
  },
  {
    question: 'Quem é o maior artilheiro da história da NBA?',
    choices: ['LeBron James', 'Michael Jordan', 'Kareem Abdul-Jabbar', 'Kobe Bryant'],
    answer: 2,
  },
  {
    question: 'Qual é o esporte principal da trilogia esportiva de inverno, ao lado do biatlo e do salto com esqui?',
    choices: ['Curling', 'Hóquei no Gelo', 'Luge', 'Esqui Alpino'],
    answer: 3,
  },
  {
    question: 'Qual seleção de futebol venceu a primeira Copa do Mundo?',
    choices: ['Brasil', 'Uruguai', 'Argentina', 'Alemanha'],
    answer: 1,
  },
  {
    question: 'Qual é o recorde mundial dos 100 metros rasos no atletismo masculino?',
    choices: ['9.58 segundos', '9.63 segundos', '9.69 segundos', '9.74 segundos'],
    answer: 0,
  },
  {
    question: 'Qual é o clube de futebol mais antigo do mundo ainda em atividade?',
    choices: ['Real Madrid', 'Nottingham Forest', 'Sheffield FC', 'FC Basel'],
    answer: 2,
  },
  {
    question: 'Quem é conhecido como "The Notorious" no mundo das artes marciais mistas (MMA)?',
    choices: ['Jon Jones', 'Georges St-Pierre', 'Anderson Silva', 'Conor McGregor'],
    answer: 3,
  },
  {
    question: 'Qual é o esporte coletivo mais praticado do mundo?',
    choices: ['Futebol', 'Basquete', 'Críquete', 'Vôlei'],
    answer: 0,
  },
  {
    question: 'Qual jogador de basquete ficou conhecido como "The Black Mamba"?',
    choices: ['LeBron James', 'Kobe Bryant', 'Michael Jordan', 'Kevin Durant'],
    answer: 1,
  },
  {
    question: 'Quantas voltas um piloto precisa dar em uma corrida de Fórmula 1 com distância total de 305 km?',
    choices: ['71', '78', '81', '87'],
    answer: 1,
  },
  {
    question: 'Qual país é conhecido como a "casa do críquete"?',
    choices: ['Índia', 'Austrália', 'Inglaterra', 'África do Sul'],
    answer: 2,
  },
  {
    question: 'Quem é o recordista mundial do salto em altura masculino?',
    choices: ['Javier Sotomayor', 'Stefan Holm', 'Mutaz Essa Barshim', 'Ivan Ukhov'],
    answer: 0,
  },
  {
    question: 'Qual é o esporte principal nos Jogos Paralímpicos de Inverno?',
    choices: ['Esqui Alpino', 'Curling em Cadeira de Rodas', 'Hóquei em Sled', 'Snowboard Adaptado'],
    answer: 2,
  }
]
