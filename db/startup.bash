mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "create database if not exists $APP_DB_NAME default character set utf8mb4 collate utf8mb4_unicode_ci;";
mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "create user '$APP_DB_USER'@'localhost' identified by '$APP_DB_PASSWORD';";
mysql -u root -p"$MYSQL_ROOT_PASSWORD" -e "grant all privileges on $APP_DB_NAME.* to '$APP_DB_USER'@'localhost'";

# dump the data
mysql -u $APP_DB_USER -p"$APP_DB_PASSWORD" $APP_DB_NAME < test.sql
