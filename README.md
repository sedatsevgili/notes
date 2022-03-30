# Setup
 * Run this: `docker-compose up -d --build`
 * To set up db, first login to php container with `docker-compose exec php /bin/bash`. Then run these sequentially:
   * `symfony console doctrine:database:create`
   * `symfony console doctrine:migrations:migrate`
   * `symfony console doctrine:fixtures:load` to load fixtures. Passwords will be same with emails for created users by fixtures. 

# Connecting to Database
 * Run `doctrine-compose exec database /bin/bash` to login to the db container.
 * Run `mysql -u root -psecret notes` to login to the mysql
 * Run `use notes`