### Development Environment Setup

#### Install Mysql

```shell
$ brew install mysql
```

#### Start mysql server

```shell
$ mysql.server start
```

#### Setup authentication login configuration

```
$ vim /usr/local/etc/my.conf
```

Add following config to bottom of `my.conf`

```
[mysqld]
default-authentication-plugin=mysql_native_password
```

setup password:

```shell
$ mysql -u root -p
$ ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '[PASSWORD]';
```

restart mysql

```shell
$ mysql.server stop
$ mysql.server start
```

#### Create database and tables

```shell
$ mysql -u root -p
$ mysql> CREATE DATABASE IF NOT EXISTS `dsp-website`;
$ mysql> use dsp-website;
$ mysql> CREATE TABLE `news` (
  `id` varchar(36) NOT NULL COMMENT 'primary key',
  `title` varchar(255) DEFAULT NULL COMMENT 'news title',
  `auther` varchar(255) DEFAULT NULL COMMENT 'news auther',
  `main_desc` varchar(255) DEFAULT NULL COMMENT 'new main content description',
  `main` mediumtext DEFAULT NULL COMMENT 'news main body content',
  `banner` mediumtext DEFAULT NULL COMMENT 'news banner',
  `publish_at` datetime DEFAULT NULL COMMENT 'news publish time',
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY (`id`),
  UNIQUE (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='news';
```

#### Run in dev

```
$ npm run dev
```
