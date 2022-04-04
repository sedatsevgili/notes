# Setup
 * Run this: `docker-compose up -d --build`
 * Login to php container with running `docker-compose exec php /bin/bash`.
 * In the php container:
   * Run `composer install --no-interaction` to install Symfony packages
   * Run these sequentially to build db
     * `symfony console doctrine:database:create`
     * `symfony console doctrine:migrations:migrate` with confirmation.
     * `symfony console doctrine:fixtures:load` to load fixtures. Passwords will be same with emails for created users by fixtures.
   * Run `yarn` to install assets
   * Run `yarn dev` to build Vue app
 * Open http://127.0.0.1:8080/ to test the app

# Connecting to Database
 * Run `doctrine-compose exec database /bin/bash` to login to the db container.
 * Run `mysql -u root -psecret notes` to login to the mysql
 * Run `use notes`

# References
 * https://www.twilio.com/blog/get-started-docker-symfony
 * 