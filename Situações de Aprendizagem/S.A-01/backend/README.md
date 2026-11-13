docker run -d --name sa-sql-tech -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=techsolutions-db -p 3307:3306 mysql:8

docker exec -it sa-sql-tech mysql -uroot -p

use techsolutions-db

CREATE TABLE equipamentos (
     id VARCHAR(36) PRIMARY KEY,
     nome VARCHAR(100) NOT NULL,
     categoria VARCHAR(100) NOT NULL,
     numero_de_serie VARCHAR(255) NOT NULL,
     status VARCHAR(20) NOT NULL,
     data_aquisicao DATE NOT NULL
 );

 INSERT INTO equipamentos (id, nome, categoria, numero_de_serie, status, data_aquisicao)
 VALUES ('123e4567-e89b-12d3-a456-426614174000', 'monitor', 'perifericos', 'SN-2026-AB8392XK', 'disponivel', '2026-10-15');
