-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: questionapp
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `set_name` varchar(255) NOT NULL,
  `question_text` text NOT NULL,
  `delay_hours` bigint DEFAULT NULL,
  `levelx` int NOT NULL,
  `levely` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'normal','What is the capital of France?',0,0,0),(2,'normal','What do you wish you didn\'t have to do today? Write about how easy it\'lls be and how you\'ll feel once you\'re done.',28375849,1,1),(3,'journal','1. Write down a happy little memory from each day this week that you may have otherwise forgotten.',0,0,0),(4,'journal','2. Write a letter to a person in your life that you have found to be draining of your energy. Avoid excessive negativity - simply say goodbye to them and explain that you\'re committing yourself to spending more time with those who give you energy.',0,0,0),(5,'journal','3. What is a task(s) you keep scheduling and rescheduling that you could just take off your plate altogether? Consider that if you keep not getting it done, it might not be of value to you.',0,0,0),(6,'journal','4. What is something you want to do but haven\'t yet because of fear? Could that fear be a compass? How can you face the fear?',0,0,0),(7,'journal','5. What do you wish you didn\'t have to do today? Write about how easy it\'lls be and how you\'ll feel once you\'re done.',0,0,0),(8,'journal','6. What are your absolute favorite items in your closet? Conversely, what are some items you find yourself rarely wearing or feeling uninspired by?',0,0,0),(9,'journal','7. When do you feel like you rush too much? How could you slow down and enjoy the process?',0,0,0),(10,'journal','8. What makes you feel cozy and safe?',0,0,0),(11,'journal','9. What qualities in other people bother/annoy you? How can you strive to make sure you don\'t embody those qualities?',0,0,0),(12,'journal','10. What is something you are involved in (like volunteering or a side project) that doesn\'t feel like work at all to you? Why is that?',0,0,0),(13,'journal','11. A good prompt for when you\'re getting ready for bed, especially if you feel like you need to calm yourself before going to sleep: outline your bedtime ritual, write about how relaxed you feel, and how comfy you will feel once you are in your bed.',0,0,0),(14,'journal','12. What opportunities have come your way recently that you are grateful for? How did you open yourself up to those opportunities/invite them into your life?',0,0,0),(15,'journal','13. What is a goal that you are currently working on and who is someone who could help you with that? What could you ask them for?',0,0,0),(16,'journal','14. What is a challenge that you have overcome recently that you need to give yourself credit for?',0,0,0),(17,'journal','15. What are some skills you have always wanted to learn or topics you have wanted to explore?',0,0,0),(18,'journal','16. Who is someone in your life you appreciate at the moment? Write a letter of gratitude to them.',0,0,0),(19,'journal','17. What task has been weighing on your mind lately? Make a plan to prioritize it and get it done today.',0,0,0),(20,'journal','18. What are 3 things you accomplished today (or yesterday) that you are proud of and need to pat yourself on the back for?',0,0,0),(21,'journal','19. 3 things I am looking forward to today are...',0,0,0),(22,'journal','20. What do you wish you could tell someone about how you feel? Write as if you are conversing with them.',0,0,0),(23,'journal','21. They say you’re the average of the 5 people you spend the most time with. Who are those 5 people for you and what qualities do you think you have adopted from them?',0,0,0),(24,'journal','22. What makes your body feel energized and refreshed? How can you do more of that?',0,0,0),(25,'journal','23. What is your fashion style? You might have a Pinterest board filled with clothes/outfits you like, but try summarizing your style in words. This could help you when shopping!',0,0,0),(26,'journal','24. What would be your ideal location to live in? City, suburbs, or out in the country? House or apartment? Having to drive a car everywhere or being able to walk places? Where in the world?',0,0,0),(27,'journal','25. What are the most used apps on your phone? What value do they add to your life? What are the least used apps? How about the apps you use a lot but consider to be a distraction? Could you part with them?',0,0,0),(28,'journal','26. What are somet  things  that you sometimes take for granted that make your life easier or more comfortable?',0,0,0),(29,'journal','27. When in the day do you feel you are able to work best? When are you most motivated? How can you arrange your day to maximize those productive window(s)?',0,0,0),(30,'journal','28. What are some ways you could spend quality time with family and friends in the upcoming month? Brainstorm ideas and then commit to scheduling those.',0,0,0),(31,'journal','29. If you had unlimited money/resources/ connections, what gifts would you give to the people you appreciate in your life? Get creative ',0,0,0),(32,'journal','30. What topics do you feel like an expert on? It doesn’t have to be anything academic. Maybe you could talk for hours about a band you like, or about different kinds of eyeshadow. Celebrate your knowledge!',0,0,0),(33,'journal','31. Write down in complete detail a day in your dream life. What are you doing? What do you have? What have you accomplished? Don’t judge what you are writing down, just let the ideas flow.',0,0,0),(34,'journal','32. What is something you currently desire? (an opportunity, an experience, a material item, it really doesn’t matter) Get clear on it and ask the universe for it (yes, straight up ask, manifest it!)',0,0,0),(35,'journal','33. Who is someone in your life you would like to spend more time with? What are some ways you could do that?',0,0,0),(36,'journal','34. When you think about your future, are you excited or scared? Which aspects exactly are you excited/scared about?',0,0,0),(37,'journal','35. Do you prefer being outdoors or indoors? Feel free to say “it depends” and list all of the conditions that would go into your decision ',0,0,0),(38,'journal','36. What is something you would improve about how today went? Use positive language and don’t beat yourself up about it. Rather, find joy in anticipating a better day now that you have acknowledged that you have room for improvement and are going to make that change.',0,0,0),(39,'journal','37. Make a small list of things you are good at and/or passionate about and brainstorm ways that you could use these  to help people  (and maybe earn money at the same time!)',0,0,0),(40,'journal','38. How can you surpass your own expectations today? What are some ways you can go above and beyond what you have planned for yourself to accomplish?',0,0,0),(41,'journal','39. How would you describe your relationship with your phone/other technology in your life?',0,0,0),(42,'journal','40. What never fails to motivate you and get you pumped up? A certain song, a power pose, an inspirational video?',0,0,0),(43,'journal','41. How would you describe the mood you are in right now? Make a playlist for that mood. You can definitely do this quite easily  on your phone  but try to stick to paper to minimize distractions!',0,0,0),(44,'journal','42. Choose an affirmation that feels right for the day and write it ten times while saying it out loud to get it in your head.',0,0,0),(45,'journal','43. What is something you need to forgive yourself for? Write it down and leave it in the past.',0,0,0),(46,'journal','44. What are some ways you would like to serve your community in the near future?',0,0,0),(47,'journal','45. What are some areas of your life in which you are too harsh with yourself? Write down some loving statements to show acceptance of where you currently are in your life.',0,0,0),(48,'journal','46. What is something you can do for a loved one today to make their day easier?',0,0,0),(49,'journal','47. What are some things you do simply because that is what is expected of you by others? Are those things really adding value to your life?',0,0,0),(50,'journal','48. What are 3 lessons you have learned in this past week?',0,0,0),(51,'journal','49. What are some habits you would like to incorporate into your routines? How would they improve your life and how could you get started?',0,0,0),(52,'journal','50. If you could only accomplish three things today, what would be the most important items on your to-do list?',0,0,0),(53,'journal','51. What is an area of your life that could use more organization? Ex. your closet, your bathroom cabinet, your photos and videos, your schedule, etc. Is there a time this week that you could dedicate to working on that?',0,0,0),(54,'journal','52. What is your favorite way to start the day? What makes you feel energized and peaceful?',0,0,0),(55,'journal','53. Make a travel bucket list. Describe the things you would like to see/experience in each place to make it feel more tangible and get you excited.',0,0,0),(56,'journal','54. What relationships are you looking for in life? Doesn’t have to be a romantic relationship. Maybe you are looking for acertain kind of friendship, or a mentor figure. Describe this ideal relationship.',0,0,0),(57,'journal','55. Do you consider yourself to be spontaneous or more of a planner? Would you like to be more of either?',0,0,0),(58,'journal','56 What are some compliments you have wanted to give someone but have been too shy to?',0,0,0),(59,'journal','57. What are your 3 favorite qualities about yourself?',0,0,0),(60,'journal','58. What is a big project that has intimidated you for a while and what is the one simplest step you can think of that will help you advance in that project?',0,0,0),(61,'journal','59. What 3 words would you use to describe your dream life? Explain. Write them down somewhere, maybe even set them as your phone wallpaper!',0,0,0),(62,'journal','60. Make a life bucket list. Don’t  hold back.  You can edit later if you want but let your imagination run wild for a few minutes.',0,0,0),(63,'journal','61. Where would you travel to if you had unlimited money and time? Describe the trip in detail.',0,0,0),(64,'journal','62. Choose a mantra that you want to keep with you for a while. This is great at the beginning of a new year or month but works whenever you decide to do it.',0,0,0),(65,'journal','63. What do other  people admire about  you? Do you accept those compliments or push them away?',0,0,0),(66,'journal','64. 5 things I am looking forward to this week...',0,0,0),(67,'journal','65. The age-old “get to know you” question that tends to make people nervous: What are your hobbies? Don’t worry, you are just writing this for yourself.  What do you do in your free time that you truly enjoy?',0,0,0),(68,'journal','66. Write a letter to yourself in 5 years. Tell yourself about your current life and express the dreams you hope to reach in 5 years.',0,0,0),(69,'journal','67. Walk through your entire day and document a detailed snapshot of your daily life.',28375855,1,1),(70,'journal','68. How do you undervalue yourself? In what situations do you ask for too little when deep down you know you are worth more than that?',0,0,0),(71,'journal','69. Do you prefer spending time alone or with other people? In what situations do you feel you gain energy? Does it depend?',0,0,0),(72,'journal','70. Make a gratitude list. A list of 10 things, 50, a 100!! Go crazy.',0,0,0);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-14 17:24:40
