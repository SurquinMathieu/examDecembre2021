CREATE TABLE IF NOT EXISTS `rooms`(
    `id`int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(30) COLLATE utf8_bin NOT NULL,
    `length` int(11) NOT NULL,
    `width` int(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
COMMIT;