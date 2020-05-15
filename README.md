## Requirements

* node v10.19.0 https://nodejs.org/download/release/v10.19.0/
* npm v6.9.0 (Comes with node)
* git
* mysql server

## Installation / Usage
Using Git (Use on any command line in order)
```shell
    $ git clone https://github.com/BoonieHat/myAsylum.git
    $ cd /myasylum
    $ npm i
    $ node server.js
```
in your browser goto http://localhost:3000/

## Dotenv
A `.env` file parsing and loading library for node.js.
- Used for environment-specific information do not commit a .env file
- You need to create a .env file in the myasylum folder

```shell
NODE_ENV=production

HOST=149.56.29.23
DBUSER=inputmysqluser
PW=inputmysqlpw
DB=arma3life
SERVERHOST=localhost:3000

OPENID_KEY=A2F016E084FC62E199FC3D15074B0683

SESSION_DELETE_FROM_DB_INTERVAL=3600000
SESSION_EXPIRE=604800000
SESSION_COOKIE_MAXAGE=604800000
SESSION_SECRET=43AA036FAB1FFDB3CAAD075B8396C5471DBEADC1B39493D8AA1B517C7B2BB585

MYSQL_CONNECTION_LIMIT=7

ENABLE_LEADERBOARDS=true

STEAM_REQUEST_DELAY=2000
LB_REQUEST_DELAY=4000

ROOTADMIN=[76561198156773425,76561198032942781]

```
## MYSQL

```mysql
CREATE TABLE `arma3life`.`myasylumlogs` (
  `log_id` INT(11) NULL AUTO_INCREMENT,
  `staff_pid` VARCHAR(17) NULL,
  `staff_name` VARCHAR(50) NULL,
  `action` VARCHAR(50) NULL,
  `type` VARCHAR(50) NULL,
  `pid` VARCHAR(17) NULL,
  `description` VARCHAR(200) NULL,
  `updated` DATETIME NULL,
  PRIMARY KEY (`log_id`));

CREATE TABLE `arma3life`.`myasylumroles` (
  `role_id` INT(11) NULL AUTO_INCREMENT,
  `role_name` VARCHAR(45) NULL,
  `admin_level` INT(2) NULL,
  `police_level` INT(2) NULL,
  `medic_level` INT(2) NULL,
  `permissions` TEXT NULL,
  `updated` DATETIME NULL,
  `role_created_by` VARCHAR(45) NULL,
  PRIMARY KEY (`role_id`));


CREATE TABLE `arma3life`.`myasylumstaff` (
  `staff_id` INT(11) NULL AUTO_INCREMENT,
  `staff_name` VARCHAR(50) NULL,
  `staff_playerid` VARCHAR(50) NULL,
  `role_id` TEXT NULL,
  `updated` DATETIME NULL,
  PRIMARY KEY (`staff_id`));

```
## CHMOD
Every folder and file besides the 'public' folder should be protected
