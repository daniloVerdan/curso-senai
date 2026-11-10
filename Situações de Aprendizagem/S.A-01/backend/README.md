docker run -d --name sa-sql-tech -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=techsolutions-db -p 3309:3308 mysql:8


docker exec -it mysql -u root -p

fcddd93cc26c

docker exec -it sa-sql-tech -u root -p