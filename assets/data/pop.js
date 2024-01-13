const POP = [
  {
    question: "Qual ator interpretou o Homem de Ferro nos filmes da Marvel?",
    choices: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    answer: 1,
  },
  {
    question: "Quem é a cantora conhecida como 'Queen B'?",
    choices: ["Adele", "Beyoncé", "Rihanna", "Taylor Swift"],
    answer: 1,
  },
  {
    question: "Qual é o nome do diretor de 'O Senhor dos Anéis'?",
    choices: ["Christopher Nolan", "Peter Jackson", "Steven Spielberg", "James Cameron"],
    answer: 1,
  },
  {
    question: "Qual é a cidade natal do personagem Batman?",
    choices: ["Gotham City", "Metropolis", "Central City", "Star City"],
    answer: 0,
  },
  {
    question: "Quem interpretou Jack Dawson em 'Titanic'?",
    choices: ["Brad Pitt", "Leonardo DiCaprio", "Matt Damon", "Johnny Depp"],
    answer: 1,
  },
  {
    question: "Em que ano a primeira temporada de 'Stranger Things' foi lançada?",
    choices: ["2014", "2016", "2018", "2020"],
    answer: 1,
  },
  {
    question: "Qual é o nome da protagonista de 'Mulher-Maravilha'?",
    choices: ["Natasha Romanoff", "Diana Prince", "Carol Danvers", "Selina Kyle"],
    answer: 1,
  },
  {
    question: "Quem interpretou Tony Montana no filme 'Scarface'?",
    choices: ["Al Pacino", "Robert De Niro", "Joe Pesci", "Johnny Depp"],
    answer: 0,
  },
  {
    question: "Qual é o nome do segundo filme da trilogia 'O Poderoso Chefão'?",
    choices: ["O Poderoso Chefão II", "O Poderoso Chefão: A Vingança", "O Poderoso Chefão: Ascensão", "O Poderoso Chefão: A Queda"],
    answer: 0,
  },
  {
    question: "Quem é o criador da série de animação 'Os Simpsons'?",
    choices: ["Matt Groening", "Seth MacFarlane", "Mike Judge", "Trey Parker"],
    answer: 0,
  },
  {
    question: "Qual é o nome da nave espacial em 'Star Wars'?",
    choices: ["Enterprise", "Millennium Falcon", "TIE Fighter", "X-Wing"],
    answer: 1,
  },
  {
    question: "Quem foi o primeiro apresentador do programa 'Late Night with Conan O'Brien'?",
    choices: ["David Letterman", "Jay Leno", "Johnny Carson", "Conan O'Brien"],
    answer: 3,
  },
  {
    question: "Em que ano foi lançado o primeiro álbum de estúdio de Taylor Swift?",
    choices: ["2006", "2008", "2010", "2012"],
    answer: 0,
  },
  {
    question: "Qual é o nome da cidade fictícia onde ocorre 'The Walking Dead'?",
    choices: ["Atlanta", "New York", "Los Angeles", "Woodbury"],
    answer: 0,
  },
  {
    question: "Quem interpretou James Bond em '007 - Cassino Royale'?",
    choices: ["Pierce Brosnan", "Daniel Craig", "Sean Connery", "Roger Moore"],
    answer: 1,
  },
  {
    question: "Qual é o nome da série baseada nos livros de George R. R. Martin?",
    choices: ["The Witcher", "Outlander", "Westworld", "Game of Thrones"],
    answer: 3,
  },
  {
    question: "Quem é a protagonista da série 'Fleabag'?",
    choices: ["Phoebe Waller-Bridge", "Emma Stone", "Sandra Oh", "Rachel Brosnahan"],
    answer: 0,
  },
  {
    question: "Qual é o nome do personagem principal em 'Breaking Bad'?",
    choices: ["Walter White", "Jesse Pinkman", "Saul Goodman", "Hank Schrader"],
    answer: 0,
  },
  {
    question: "Qual é o nome do grupo musical formado por Jim Morrison?",
    choices: ["The Beatles", "The Rolling Stones", "The Doors", "Led Zeppelin"],
    answer: 2,
  },
  {
    question: "Quem dirigiu o filme 'A Origem'?",
    choices: ["Christopher Nolan", "Quentin Tarantino", "Steven Spielberg", "James Cameron"],
    answer: 0,
  },
  {
    question: "Qual é o nome da protagonista da série 'Friends'?",
    choices: ["Monica Geller", "Rachel Green", "Phoebe Buffay", "Joey Tribbiani"],
    answer: 1,
  },
  {
    question: "Quem é o criador da série de animação 'Rick and Morty'?",
    choices: ["Matt Groening", "Justin Roiland", "Seth MacFarlane", "Dan Harmon"],
    answer: 3,
  },
  {
    question: "Qual é o nome da cidade onde se passa a história de 'Breaking Bad'?",
    choices: ["Albuquerque", "Phoenix", "Las Vegas", "Santa Fe"],
    answer: 0,
  },
  {
    question: "Qual é o nome do ator que interpretou Edward Cullen em 'Crepúsculo'?",
    choices: ["Robert Pattinson", "Taylor Lautner", "Kellan Lutz", "Jackson Rathbone"],
    answer: 0,
  },
  {
    question: "Quem é a voz do personagem Woody na franquia 'Toy Story'?",
    choices: ["Tom Hanks", "Tim Allen", "Billy Crystal", "John Goodman"],
    answer: 0,
  },
  {
    question: "Qual é o nome do dragão de Daenerys Targaryen em 'Game of Thrones'?",
    choices: ["Drogon", "Rhaegal", "Viserion", "Balerion"],
    answer: 0,
  },
  {
    question: "Em que filme Leonardo DiCaprio ganhou seu primeiro Oscar de Melhor Ator?",
    choices: ["Titanic", "O Regresso", "Django Livre", "A Origem"],
    answer: 1,
  },
  {
    question: "Quem dirigiu o filme 'Jurassic Park'?",
    choices: ["James Cameron", "Steven Spielberg", "George Lucas", "Peter Jackson"],
    answer: 1,
  },
  {
    question: "Qual é o nome da banda de rock liderada por Mick Jagger?",
    choices: ["The Beatles", "The Rolling Stones", "Led Zeppelin", "The Who"],
    answer: 1,
  },
  {
    question: "Qual é o nome do vilão principal em 'O Rei Leão'?",
    choices: ["Scar", "Mufasa", "Simba", "Timão"],
    answer: 0,
  },
  {
    question: "Quem interpretou o Coringa no filme 'Coringa' de 2019?",
    choices: ["Joaquin Phoenix", "Heath Ledger", "Jack Nicholson", "Cesar Romero"],
    answer: 0,
  },
  {
    question: "Qual é o nome da protagonista da série 'The Crown'?",
    choices: ["Queen Elizabeth II", "Princesa Diana", "Margaret Thatcher", "Camilla Parker Bowles"],
    answer: 0,
  },
  {
    question: "Qual é o nome do planeta natal do Superman?",
    choices: ["Krypton", "Earth", "Mars", "Venus"],
    answer: 0,
  },
  {
    question: "Quem é o criador da série 'Black Mirror'?",
    choices: ["Charlie Brooker", "Joss Whedon", "David Benioff", "D.B. Weiss"],
    answer: 0,
  },
  {
    question: "Qual é o nome do personagem interpretado por Johnny Depp em 'Piratas do Caribe'?",
    choices: ["William Turner", "Jack Sparrow", "Davy Jones", "Hector Barbossa"],
    answer: 1,
  },
  {
    question: "Quem é o diretor do filme 'Cidade de Deus'?",
    choices: ["Fernando Meirelles", "Walter Salles", "José Padilha", "Glauber Rocha"],
    answer: 0,
  },
  {
    question: "Qual é o nome do universo cinematográfico da DC?",
    choices: ["DC Cinematic Universe", "Justice League Universe", "DC Extended Universe", "Dark Knight Trilogy"],
    answer: 2,
  },
  {
    question: "Qual é o nome do protagonista da série 'Sherlock'?",
    choices: ["John Watson", "Mycroft Holmes", "Greg Lestrade", "Sherlock Holmes"],
    answer: 3,
  },
  {
    question: "Quem é o autor da série de livros 'Harry Potter'?",
    choices: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
    answer: 2,
  },
  {
    question: "Qual é o nome da nave espacial em 'Guardiões da Galáxia'?",
    choices: ["Star Destroyer", "Normandy", "Serenity", "Milano"],
    answer: 3,
  },
  {
    question: "Qual é o álbum mais vendido de todos os tempos?",
    choices: ["Thriller - Michael Jackson", "Back in Black - AC/DC", "The Dark Side of the Moon - Pink Floyd", "Abbey Road - The Beatles"],
    answer: 0,
  },
  {
    question: "Quem é conhecido como 'Rei do Pop'?",
    choices: ["Prince", "Elvis Presley", "Michael Jackson", "David Bowie"],
    answer: 2,
  },
  {
    question: "Qual é o nome da cantora que protagonizou o documentário 'Homecoming'?",
    choices: ["Beyoncé", "Adele", "Rihanna", "Lady Gaga"],
    answer: 0,
  },
  {
    question: "Qual é o nome do primeiro álbum da banda BTS?",
    choices: ["Love Yourself: Tear", "Wings", "Dark & Wild", "2 Cool 4 Skool"],
    answer: 3,
  },
  {
    question: "Quem é o vocalista da banda U2?",
    choices: ["Bono", "Chris Martin", "Thom Yorke", "Eddie Vedder"],
    answer: 0,
  },
  {
    question: "Qual é o nome do álbum de estreia de Taylor Swift?",
    choices: ["Fearless", "Speak Now", "1989", "Taylor Swift"],
    answer: 3,
  },
  {
    question: "Quem é a artista feminina com mais Grammys na história?",
    choices: ["Adele", "Beyoncé", "Whitney Houston", "Mariah Carey"],
    answer: 1,
  },
  {
    question: "Qual é o nome do álbum que apresenta 'Bohemian Rhapsody', do Queen?",
    choices: ["A Night at the Opera", "News of the World", "Sheer Heart Attack", "The Game"],
    answer: 0,
  },
  {
    question: "Qual é o nome do ex-Beatle que formou a banda Wings?",
    choices: ["John Lennon", "George Harrison", "Ringo Starr", "Paul McCartney"],
    answer: 3,
  },
  {
    question: "Quem é a vocalista da banda Paramore?",
    choices: ["Hayley Williams", "Avril Lavigne", "Amy Lee", "Lzzy Hale"],
    answer: 0,
  },
  {
    question: "Qual é o nome do último álbum de estúdio de David Bowie, lançado em 2016?",
    choices: ["The Next Day", "Blackstar", "Reality", "Heathen"],
    answer: 1,
  },
  {
    question: "Quem é conhecido como 'The Boss'?",
    choices: ["Elton John", "Bob Dylan", "Bruce Springsteen", "Tom Petty"],
    answer: 2,
  },
  {
    question: "Qual é o nome da cantora britânica que lançou 'Rolling in the Deep'?",
    choices: ["Adele", "Amy Winehouse", "Florence Welch", "Jessie J"],
    answer: 0,
  },
  {
    question: "Qual é o nome do primeiro single de Billie Eilish que a levou à fama?",
    choices: ["bad guy", "bury a friend", "Ocean Eyes", "when the party's over"],
    answer: 2,
  },
  {
    question: "Quem é conhecido como 'Rocket Man'?",
    choices: ["Elton John", "David Bowie", "Freddie Mercury", "Billy Joel"],
    answer: 0,
  },
  {
    question: "Qual é o nome do álbum mais vendido de Adele?",
    choices: ["19", "21", "25", "30"],
    answer: 2,
  },
  {
    question: "Quem é a rainha do pop?",
    choices: ["Beyoncé", "Madonna", "Lady Gaga", "Katy Perry"],
    answer: 1,
  },
  {
    question: "Qual é o nome do primeiro álbum de estúdio de Ariana Grande?",
    choices: ["Dangerous Woman", "Sweetener", "My Everything", "Yours Truly"],
    answer: 3,
  },
  {
    question: "Quem é conhecido como 'The King'?",
    choices: ["Elvis Presley", "Chuck Berry", "Little Richard", "Jerry Lee Lewis"],
    answer: 0,
  },
  {
    question: "Qual é o nome do guitarrista lendário conhecido por sua habilidade em tocar a guitarra com os dentes?",
    choices: ["Eric Clapton", "Jimi Hendrix", "Jimmy Page", "Stevie Ray Vaughan"],
    answer: 1,
  },
  {
    question: "Quem interpretou o personagem principal em 'Forrest Gump'?",
    choices: ["Tom Hanks", "Brad Pitt", "Leonardo DiCaprio", "Matt Damon"],
    answer: 0,
  },
  {
    question: "Qual é o nome da série que apresenta um grupo de crianças enfrentando ameaças sobrenaturais?",
    choices: ["The X-Files", "Supernatural", "Stranger Things", "Buffy the Vampire Slayer"],
    answer: 2,
  },
  {
    question: "Quem é o vocalista da banda Coldplay?",
    choices: ["Chris Martin", "Brandon Flowers", "Thom Yorke", "Dave Grohl"],
    answer: 0,
  },
  {
    question: "Qual é o nome da princesa da Disney que vive sob o mar?",
    choices: ["Cinderela", "Ariel", "Bela", "Jasmine"],
    answer: 1,
  },
  {
    question: "Qual é o nome do protagonista da série 'Breaking Bad'?",
    choices: ["Walter White", "Jesse Pinkman", "Saul Goodman", "Hank Schrader"],
    answer: 0,
  },
  {
    question: "Quem dirigiu o filme 'A Origem'?",
    choices: ["Christopher Nolan", "Quentin Tarantino", "Steven Spielberg", "James Cameron"],
    answer: 0,
  },
  {
    question: "Qual é o nome da banda famosa por hits como 'Stairway to Heaven'?",
    choices: ["The Beatles", "The Rolling Stones", "Led Zeppelin", "Queen"],
    answer: 2,
  },
  {
    question: "Em que ano foi lançado o primeiro álbum de estúdio de Taylor Swift?",
    choices: ["2006", "2008", "2010", "2012"],
    answer: 0,
  },
  {
    question: "Quem interpretou Tony Stark no filme 'Homem de Ferro'?",
    choices: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    answer: 1,
  },
  {
    question: "Qual é o nome do álbum de estreia da banda Nirvana?",
    choices: ["In Utero", "Nevermind", "Bleach", "Incesticide"],
    answer: 2,
  },
  {
    question: "Quem é a atriz principal em 'A Culpa é das Estrelas'?",
    choices: ["Emma Watson", "Shailene Woodley", "Jennifer Lawrence", "Ansel Elgort"],
    answer: 1,
  },
  {
    question: "Qual é o nome do vilão principal em 'O Senhor dos Anéis'?",
    choices: ["Sauron", "Gollum", "Saruman", "Balrog"],
    answer: 0,
  },
  {
    question: "Quem interpretou o papel de Jack Dawson em 'Titanic'?",
    choices: ["Brad Pitt", "Leonardo DiCaprio", "Matt Damon", "Johnny Depp"],
    answer: 1,
  },
  {
    question: "Qual é o nome da série de animação sobre um cientista insano e seu neto?",
    choices: ["The Simpsons", "Family Guy", "Rick and Morty", "Futurama"],
    answer: 2,
  },
  {
    question: "Qual é o nome da protagonista da série 'Stranger Things'?",
    choices: ["Eleven", "Max", "Will", "Mike"],
    answer: 0,
  },
  {
    question: "Quem é o criador da série 'Black Mirror'?",
    choices: ["Charlie Brooker", "Joss Whedon", "David Benioff", "D.B. Weiss"],
    answer: 0,
  },
  {
    question: "Qual é o nome do álbum que contém 'Bohemian Rhapsody', do Queen?",
    choices: ["A Night at the Opera", "News of the World", "Sheer Heart Attack", "The Game"],
    answer: 0,
  },
  {
    question: "Quem é o diretor do filme 'Pulp Fiction'?",
    choices: ["Quentin Tarantino", "Martin Scorsese", "Christopher Nolan", "Stanley Kubrick"],
    answer: 0,
  },
  {
    question: "Qual é o nome da banda conhecida por hits como 'Hotel California'?",
    choices: ["The Rolling Stones", "The Eagles", "Pink Floyd", "The Doors"],
    answer: 1,
  },
  {
    question: "Quem é a atriz principal da saga 'Jogos Vorazes'?",
    choices: ["Emma Stone", "Jennifer Aniston", "Jennifer Lawrence", "Scarlett Johansson"],
    answer: 2,
  },
  {
    question: "Quem interpretou o personagem Wolverine nos filmes da franquia 'X-Men'?",
    choices: ["Hugh Jackman", "Ryan Reynolds", "Chris Hemsworth", "Michael Fassbender"],
    answer: 0,
  },
  {
    question: "Qual é o nome da série de TV que se passa em um mundo pós-apocalíptico zumbi?",
    choices: ["The Walking Dead", "Fear the Walking Dead", "Z Nation", "World War Z"],
    answer: 0,
  },
  {
    question: "Qual é o nome do álbum mais vendido de todos os tempos?",
    choices: ["Thriller - Michael Jackson", "Back in Black - AC/DC", "The Dark Side of the Moon - Pink Floyd", "Abbey Road - The Beatles"],
    answer: 0,
  },
  {
    question: "Quem é conhecido como 'Rainha do Pop'?",
    choices: ["Lady Gaga", "Madonna", "Beyoncé", "Rihanna"],
    answer: 1,
  },
  {
    question: "Qual é o nome do personagem principal em 'O Poderoso Chefão'?",
    choices: ["Michael Corleone", "Tony Montana", "Don Vito Corleone", "Sonny Corleone"],
    answer: 2,
  },
  {
    question: "Qual é o nome do protagonista da série 'Sherlock'?",
    choices: ["John Watson", "Mycroft Holmes", "Greg Lestrade", "Sherlock Holmes"],
    answer: 3,
  },
  {
    question: "Quem é o guitarrista da banda Queen?",
    choices: ["Freddie Mercury", "Roger Taylor", "Brian May", "John Deacon"],
    answer: 2,
  },
  {
    question: "Qual é o nome do vilão em 'O Cavaleiro das Trevas'?",
    choices: ["Coringa", "Duas-Caras", "Bane", "Ra's al Ghul"],
    answer: 0,
  },
  {
    question: "Quem é a protagonista da série 'The Crown' na terceira temporada?",
    choices: ["Claire Foy", "Olivia Colman", "Helena Bonham Carter", "Gillian Anderson"],
    answer: 1,
  },
  {
    question: "Qual é o nome do vocalista da banda Nirvana?",
    choices: ["Kurt Cobain", "Eddie Vedder", "Chris Cornell", "Dave Grohl"],
    answer: 0,
  },
  {
    question: "Quem interpretou o papel de Neo na trilogia 'Matrix'?",
    choices: ["Keanu Reeves", "Laurence Fishburne", "Hugo Weaving", "Carrie-Anne Moss"],
    answer: 0,
  },
  {
    question: "Qual é o nome do segundo filme da trilogia 'O Senhor dos Anéis'?",
    choices: ["A Sociedade do Anel", "As Duas Torres", "O Retorno do Rei", "A Batalha dos Cinco Exércitos"],
    answer: 1,
  },
  {
    question: "Quem é o criador da série 'Friends'?",
    choices: ["David Crane", "Mart Kauffman", "Judd Apatow", "Aaron Sorkin"],
    answer: 0,
  },
  {
    question: "Qual é o nome do álbum mais recente de Beyoncé?",
    choices: ["Lemonade", "B'Day", "4", "Homecoming"],
    answer: 0,
  },
  {
    question: "Quem é o diretor do filme 'Interestelar'?",
    choices: ["Christopher Nolan", "Denis Villeneuve", "Steven Spielberg", "James Cameron"],
    answer: 0,
  },
  {
    question: "Qual é o nome da protagonista da série 'Fleabag'?",
    choices: ["Phoebe Waller-Bridge", "Emma Stone", "Sandra Oh", "Rachel Brosnahan"],
    answer: 0,
  },
  {
    question: "Quem interpretou Freddie Mercury no filme 'Bohemian Rhapsody'?",
    choices: ["Rami Malek", "Taron Egerton", "Tom Hardy", "Joaquin Phoenix"],
    answer: 0,
  },
  {
    question: "Qual é o nome do terceiro filme da trilogia 'O Senhor dos Anéis'?",
    choices: ["A Sociedade do Anel", "As Duas Torres", "O Retorno do Rei", "A Batalha dos Cinco Exércitos"],
    answer: 2,
  },
  {
    question: "Quem é o diretor do filme 'Piratas do Caribe: A Maldição do Pérola Negra'?",
    choices: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Gore Verbinski"],
    answer: 3,
  },
  {
    question: "Qual é o nome do álbum que contém a música 'Hello' de Adele?",
    choices: ["25", "21", "19", "Hello"],
    answer: 0,
  }
];
