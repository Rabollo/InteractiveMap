-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 05, 2015 at 12:29 AM
-- Server version: 5.5.41-cll-lve
-- PHP Version: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kodpence_interactivemap`
--

-- --------------------------------------------------------

--
-- Table structure for table `Clients`
--

CREATE TABLE IF NOT EXISTS `Clients` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(200) DEFAULT NULL,
  `c_surname` varchar(200) DEFAULT NULL,
  `c_email` varchar(200) DEFAULT NULL,
  `c_p_number` varchar(45) DEFAULT NULL,
  `creation_date` timestamp NULL DEFAULT NULL,
  `isActive` binary(1) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `Clients`
--

INSERT INTO `Clients` (`c_id`, `c_name`, `c_surname`, `c_email`, `c_p_number`, `creation_date`, `isActive`) VALUES
(7, 'asdf', 'asdf', 'asdf', 'asdf', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Comments`
--

CREATE TABLE IF NOT EXISTS `Comments` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `place_id` int(11) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `creation_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` int(1) DEFAULT '1',
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `Comments`
--

INSERT INTO `Comments` (`c_id`, `user_id`, `place_id`, `comment`, `creation_date`, `isActive`) VALUES
(1, 7, 1, 'Very Good Place blablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla', '2014-11-05 17:15:09', 1),
(2, 2, 1, 'Its nice to have such placeses', '2014-11-05 17:30:22', 1),
(3, 1, 1, 'test', '2015-05-28 10:33:34', 1),
(4, 7, 1, 'one of the best places!', '2015-05-28 10:57:22', 1),
(10, 7, 3, ';) nice place in Grund', '2015-06-01 05:15:47', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Events`
--

CREATE TABLE IF NOT EXISTS `Events` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `e_name` varchar(45) DEFAULT NULL,
  `e_description` varchar(45) DEFAULT NULL,
  `e_date` datetime DEFAULT NULL,
  `isActive` binary(1) DEFAULT NULL,
  `creation_date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Pictures`
--

CREATE TABLE IF NOT EXISTS `Pictures` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_link` varchar(1000) DEFAULT NULL,
  `place_id` int(11) DEFAULT NULL,
  `creation_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` binary(1) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `Pictures`
--

INSERT INTO `Pictures` (`p_id`, `p_link`, `place_id`, `creation_date`, `isActive`) VALUES
(1, 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/11043227_940324925986310_2776955453227210409_n.jpg?oh=8e74891c8e9941c105fe4d11cb108e69&oe=55BF9FF5&__gda__=1439844649_b14aff4140401dd2d6e7ba3ae28d91e6', 1, '2015-05-09 22:00:00', '1'),
(2, 'https://scontent-fra.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10441369_931791923506277_4173593230467267280_n.jpg?oh=8bc22e841157d088be2897f6329f277f&oe=55C26E2E', 1, '2015-05-09 22:00:00', '1'),
(3, 'https://scontent-fra.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10462830_927078573977612_7620620068029621326_n.jpg?oh=1ea04a80881a386e68344900fbaa7cc5&oe=55DA50B1', 7, '2015-05-09 22:00:00', '1'),
(4, 'http://www.starbucks.pl/assets/7084f773960a4e06a5e1b35222ac46d2.jpg', 3, '2015-05-11 22:00:00', '1'),
(5, 'https://scontent-fra.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/23361_419176021447976_1330979577_n.jpg?oh=d102d07c2f6e919dcb166a27b172fc22&oe=55C9E992', 3, '2015-05-12 12:35:51', '1'),
(6, 'http://d.wiadomosci24.pl/g2/63/1e/73/58863_1203506020_1bcd_p.jpg', 5, '2015-05-12 12:35:51', '1'),
(7, 'http://cdn2.ogrod.smcloud.net/t/photos/t/4464/bazylia_707158.jpghttp://d.wiadomosci24.pl/g2/63/1e/73/58863_1203506020_1bcd_p.jpg', 7, '2015-05-12 12:35:51', '1'),
(8, 'https://irs1.4sqi.net/img/general/width960/9756492_igU5SKkDuAZOH8yv4bCSkz4Mn49gny53OmhWmrUBWA4.jpg', 4, '2015-05-12 12:35:51', '1'),
(9, 'https://irs2.4sqi.net/img/general/width960/39281833_0ADoosemY3q3oQhGPpHsSEKqBx8C_ueCBx7ttiEqL5A.jpg', 4, '2015-05-12 12:35:51', '1'),
(10, 'https://irs3.4sqi.net/img/general/width960/Y3z3DujYs-xZkIz_DDJJi-_Wt6EncbnTIvGf75thuA8.jpg', 6, '2015-05-12 12:35:52', '1'),
(11, 'https://irs3.4sqi.net/img/general/width960/9935461_nFAFWpmIZCr72n7hLLJ2je77a5ojd_eHizGlxZHOZGM.jpg', 6, '2015-05-12 12:35:52', '1');

-- --------------------------------------------------------

--
-- Table structure for table `Places`
--

CREATE TABLE IF NOT EXISTS `Places` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) DEFAULT NULL,
  `p_name` varchar(200) DEFAULT NULL,
  `p_description` varchar(500) DEFAULT NULL,
  `p_lat` varchar(100) DEFAULT NULL,
  `p_long` varchar(100) DEFAULT NULL,
  `tag` varchar(1000) DEFAULT NULL,
  `creation_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `isOpen` int(1) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `Places`
--

INSERT INTO `Places` (`p_id`, `client_id`, `p_name`, `p_description`, `p_lat`, `p_long`, `tag`, `creation_date`, `isOpen`) VALUES
(1, 1, 'Casa de la musica', 'Best place ever', '51.1107095', '16.9582892', 'all,pub,club,bar,fun', '2014-11-05 16:09:47', 1),
(2, 1, 'Test', 'Test Description', '23.4125512', '64.1235341', 'all,pub', '2015-05-09 22:00:00', 1),
(3, 1, 'Starbucks', 'Seattle-based coffeehouse chain known for its signature roasts, light bites and WiFi availability.', '51.111402', '17.0615716', 'all,coffee', '2015-05-12 11:51:22', 1),
(4, 1, 'Remont Bar', 'Traditional Polish food and pizza.', '51.111507', '17.058596', 'all,lunch', '2015-05-12 12:28:52', 1),
(5, 1, 'Bazylia Bistro', 'Students lunch place. Low prices', '51.1104844', '17.0590225', 'all,lunch', '2015-05-12 12:30:30', 1),
(6, 1, 'Kawalerka Cafe', 'A cozy place to hang out for coffee around Grunwald Sq', '51.111379', '17.054928', 'all,coffe', '2015-05-12 12:31:24', 1),
(7, 1, 'Przekrzt', 'Nightlife Spot, Bar and Nightclub', '51.11233', '17.056389', 'all,nightlife', '2015-05-12 12:32:09', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Raitings`
--

CREATE TABLE IF NOT EXISTS `Raitings` (
  `r_id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `r_value` int(11) DEFAULT NULL,
  `creation-date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`r_id`),
  UNIQUE KEY `r_id` (`r_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=123 ;

--
-- Dumping data for table `Raitings`
--

INSERT INTO `Raitings` (`r_id`, `place_id`, `user_id`, `r_value`, `creation-date`) VALUES
(1, 3, 98, 10, '2015-05-11 22:00:00'),
(2, 4, 2, 9, '2015-05-12 12:36:29'),
(3, 1, 3, 6, '2015-05-09 22:00:00'),
(4, 7, 4, 7, '2015-05-12 12:36:39'),
(5, 5, 99, 10, '2015-05-12 12:36:32'),
(6, 2, 123, 6, '2015-05-09 22:00:00'),
(18, 1, 1, 10, '2015-05-12 10:18:23'),
(21, 3, 1, 10, '2015-05-12 12:24:26'),
(22, 6, 1, 2, '2015-05-12 12:36:36'),
(23, 6, 1, 10, '2015-05-12 12:42:52'),
(24, 7, 1, 10, '2015-05-12 13:03:07'),
(25, 1, 1, 5, '2015-05-21 20:01:31'),
(26, 1, 1, 2, '2015-05-21 20:32:56'),
(27, 1, 1, 5, '2015-05-26 21:27:15'),
(28, 1, 1, 2, '2015-05-26 21:27:29'),
(29, 1, 1, 5, '2015-05-26 21:27:33'),
(30, 1, 1, 2, '2015-05-26 21:27:49'),
(31, 1, 1, 5, '2015-05-26 21:27:52'),
(32, 1, 1, 9, '2015-05-27 11:38:20'),
(33, 5, 1, 2, '2015-05-27 11:39:33'),
(34, 5, 1, 2, '2015-05-27 11:39:37'),
(35, 1, 1, 5, '2015-05-27 19:15:03'),
(36, 1, 1, 5, '2015-05-27 19:15:06'),
(37, 3, 1, 2, '2015-05-27 19:15:18'),
(38, 1, 1, 2, '2015-05-27 22:39:30'),
(39, 1, 1, 2, '2015-05-27 22:41:14'),
(40, 1, 1, 5, '2015-05-27 22:41:42'),
(41, 1, 1, 5, '2015-05-27 22:41:45'),
(42, 1, 1, 2, '2015-05-27 22:44:59'),
(43, 3, 1, 2, '2015-05-27 22:46:50'),
(44, 3, 1, 2, '2015-05-27 22:46:51'),
(45, 3, 1, 2, '2015-05-27 22:46:52'),
(46, 3, 1, 2, '2015-05-27 22:46:53'),
(47, 3, 1, 2, '2015-05-27 22:46:53'),
(48, 3, 1, 2, '2015-05-27 22:46:53'),
(49, 3, 1, 2, '2015-05-27 22:46:54'),
(50, 3, 1, 2, '2015-05-27 22:46:54'),
(51, 3, 1, 2, '2015-05-27 22:46:54'),
(52, 3, 1, 2, '2015-05-27 22:46:55'),
(53, 3, 1, 2, '2015-05-27 22:46:55'),
(54, 3, 1, 2, '2015-05-27 22:46:55'),
(55, 3, 1, 2, '2015-05-27 22:46:56'),
(56, 3, 1, 2, '2015-05-27 22:46:56'),
(57, 3, 1, 2, '2015-05-27 22:46:57'),
(58, 3, 1, 2, '2015-05-27 22:46:57'),
(59, 3, 1, 9, '2015-05-27 22:46:58'),
(60, 3, 1, 5, '2015-05-27 22:47:07'),
(61, 3, 1, 9, '2015-05-27 22:47:07'),
(62, 3, 1, 9, '2015-05-27 22:47:08'),
(63, 3, 1, 9, '2015-05-27 22:47:09'),
(64, 3, 1, 9, '2015-05-27 22:47:10'),
(65, 3, 1, 9, '2015-05-27 22:47:18'),
(66, 3, 1, 9, '2015-05-27 22:47:21'),
(67, 3, 1, 2, '2015-05-27 22:47:39'),
(68, 1, 1, 9, '2015-05-27 22:48:43'),
(69, 1, 1, 5, '2015-05-27 22:48:53'),
(70, 1, 1, 2, '2015-05-27 22:50:13'),
(71, 1, 1, 2, '2015-05-27 22:50:15'),
(72, 5, 1, 9, '2015-05-27 22:50:21'),
(73, 5, 1, 5, '2015-05-27 22:50:23'),
(74, 4, 1, 2, '2015-05-27 22:51:09'),
(75, 1, 1, 2, '2015-05-27 22:53:23'),
(76, 3, 1, 2, '2015-05-27 22:53:28'),
(77, 3, 1, 2, '2015-05-27 22:53:29'),
(78, 4, 1, 2, '2015-05-27 22:54:13'),
(79, 1, 1, 9, '2015-05-27 22:56:38'),
(80, 1, 1, 2, '2015-05-27 22:56:43'),
(81, 3, 1, 2, '2015-05-27 22:56:48'),
(82, 3, 1, 9, '2015-05-27 22:56:49'),
(83, 5, 1, 5, '2015-05-27 22:56:54'),
(84, 1, 1, 9, '2015-05-27 22:57:54'),
(85, 3, 1, 5, '2015-05-27 22:58:01'),
(86, 5, 1, 2, '2015-05-27 22:58:05'),
(87, 1, 1, 2, '2015-05-27 22:58:10'),
(88, 1, 1, 2, '2015-05-27 23:00:28'),
(89, 3, 1, 5, '2015-05-27 23:00:33'),
(90, 4, 1, 9, '2015-05-27 23:00:39'),
(91, 1, 1, 2, '2015-05-27 23:02:08'),
(92, 3, 1, 2, '2015-05-27 23:02:13'),
(93, 1, 1, 2, '2015-05-27 23:04:17'),
(94, 3, 1, 5, '2015-05-27 23:04:24'),
(95, 1, 1, 2, '2015-05-27 23:05:08'),
(96, 1, 1, 5, '2015-05-27 23:05:10'),
(97, 1, 1, 9, '2015-05-27 23:05:13'),
(98, 1, 1, 2, '2015-05-27 23:07:25'),
(99, 1, 1, 2, '2015-05-27 23:10:21'),
(100, 1, 1, 2, '2015-05-27 23:10:22'),
(101, 3, 1, 2, '2015-05-27 23:10:27'),
(102, 3, 1, 2, '2015-05-27 23:10:29'),
(103, 1, 1, 9, '2015-05-27 23:10:42'),
(104, 1, 1, 5, '2015-05-27 23:10:56'),
(105, 1, 1, 5, '2015-05-27 23:12:32'),
(106, 1, 1, 2, '2015-05-27 23:12:33'),
(107, 1, 1, 9, '2015-05-27 23:12:34'),
(108, 1, 1, 5, '2015-05-27 23:12:42'),
(109, 1, 1, 5, '2015-05-27 23:13:34'),
(110, 1, 1, 9, '2015-05-27 23:13:43'),
(111, 1, 1, 9, '2015-05-27 23:13:45'),
(112, 1, 1, 9, '2015-05-27 23:13:47'),
(113, 1, 1, 9, '2015-05-27 23:14:15'),
(114, 1, 1, 9, '2015-05-27 23:14:18'),
(115, 1, 1, 5, '2015-05-27 23:14:38'),
(116, 7, 1, 9, '2015-05-28 10:13:40'),
(117, 3, 1, 9, '2015-05-28 11:06:07'),
(118, 5, 7, 2, '2015-05-28 15:59:58'),
(119, 5, 7, 2, '2015-05-28 15:59:59'),
(120, 7, 7, 2, '2015-05-28 18:40:32'),
(121, 3, 7, 9, '2015-05-28 20:34:44'),
(122, 3, 7, 5, '2015-05-28 20:34:59');

-- --------------------------------------------------------

--
-- Table structure for table `SavedPlaces`
--

CREATE TABLE IF NOT EXISTS `SavedPlaces` (
  `sp_id` int(100) NOT NULL AUTO_INCREMENT,
  `place_id` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`sp_id`),
  UNIQUE KEY `place_id` (`place_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `SavedPlaces`
--

INSERT INTO `SavedPlaces` (`sp_id`, `place_id`, `user_id`, `creation_date`) VALUES
(9, '1', '7', '2015-05-28 21:45:45'),
(12, '3', '7', '2015-05-29 07:31:57'),
(13, '', '7', '2015-05-30 18:03:29');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `facebook_id` varchar(300) DEFAULT NULL,
  `creation_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` int(1) DEFAULT '1',
  `u_email` varchar(200) NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`u_id`, `facebook_id`, `creation_date`, `isActive`, `u_email`) VALUES
(1, '126350912365', '0000-00-00 00:00:00', 1, 'ismail@gmail.com'),
(2, '2147483647', '2014-11-05 08:35:31', 1, 'sahin@gmail.com'),
(3, '102043619868799623', '2014-11-05 09:10:54', 1, ''),
(4, '102043619868799623', '2014-11-05 09:12:35', 1, ''),
(5, '102043619868799623', '2014-11-05 09:13:29', 1, ''),
(6, '102043619868799624', '2014-11-05 09:15:07', 1, ''),
(7, '10204361986879962', '2014-11-05 09:16:54', 1, ''),
(8, '12351237401723897490172341412341234123', '2014-11-05 09:36:14', 1, 'asdfl!gmil.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
