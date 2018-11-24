create table Galaxia(
Nome varchar(30) primary key,
QntEstrelas int not null)

create table Sistema(
Nome varchar(30) not null,
QntsPlanetas int not null,
VelocidadeDeRotacao int not null,
NomeGalaxia varchar(30) not null,
constraint fkGalaxia foreign key (NomeGalaxia) references Galaxia
)

create table SateliteNatural(
Nome varchar(30) primary key,
Volume int not null,
AreaDaSuperficie int not null,
Distancia int not null,
Temperatura varchar(10) not null,
Massa int not null,
Densidade int not null,
Gravidade int not null, 
Pressao varchar(30) not null,
PeriodoDeRotacao int not null,
PeriodoOrbital int not null,
VelocidadeDeTranslacao int not null,
VelocidadeDeRotacao int not null,
Descricao ntext not null,
NomePlaneta varchar(30) not null,
constraint fkPlaneta foreign key (NomePlaneta) references Planeta
)

create table Planeta(
Nome varchar(30) primary key,
Volume int not null,
AreaDaSuperficie int not null,
Distancia int not null,
Massa int not null,
Densidade int not null,
Gravidade int not null, 
Pressao varchar(30) not null,
PeriodoDeRotacao int not null,
PeriodoOrbital int not null,
Temperatura varchar(10) not null,
VelocidadeDeTranslacao int not null,
VelocidadeDeRotacao int not null,
QntsSatelitesNaturais int not null,
Descricao ntext not null,
NomeSistema varchar(30) not null,
constraint fkSistema foreign key (NomeSistema) references Sistema
)

create table Estrela(
Nome varchar(30) primary key,
Volume int not null,
AreaDaSuperficie int not null,
Distancia int not null,
Massa int not null,
Densidade int not null,
Gravidade int not null, 
Pressao varchar(30) not null,
PeriodoDeRotacao int not null,
PeriodoOrbital int not null,
QntsPlanetasOrbitam int not null,
TemperaturaSuperficie varchar(10) not null,
TemperaturaNucleo varchar(10) not null,
VelocidadeDeTranslacao int not null,
VelocidadeDeRotacao int not null,
Descricao ntext not null,
NomeSistema varchar(30) not null,
constraint fkSistema2 foreign key (NomeSistema) references Sistema
)

