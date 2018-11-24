insert into Galaxia values ('Via Láctea', 9)

alter table Estrela
drop column VelocidadeDeTranslacao

select*from Galaxia

alter table Estrela
alter column VelocidadeDeRotacao float(53)

insert into Estrela values ('Sol', 1412000000000000000000, 6087700000000, 149600000000, 1989100000000000000000000000000, 1408, 274,	240000000, 	9, 5778, 15700000, 7189, '.')