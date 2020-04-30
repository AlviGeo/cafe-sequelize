CREATE DATABASE IF NOT EXIST `cafe`;
USE `cafe`;

DROP TABLE IF EXIST `new`;
CREATE TABLE `menu` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `price` varchar(4) NOT NULL,
    `description` text NOT NULL.
    `image` varchar(255) NOT NULL,
    `createAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    PRIMARY KERY (id)
);
