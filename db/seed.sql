DROP DATABASE blog_db;
CREATE DATABASE blog_db;

\c blog_db


CREATE TABLE topic (
    id serial PRIMARY KEY,
    name VARCHAR
);

INSERT INTO topic(name) VALUES ('FASHION'),
('BEAUTY'),
('HEALTH'),
('MOVIES');



CREATE TABLE post (
    id serial PRIMARY KEY,
    subject VARCHAR,
    content text,
    topic_id INT,
     FOREIGN KEY(topic_id) REFERENCES topic
);

INSERT INTO post (subject, content, topic_id) VALUES ('24 fashion trends for Fall', 'What’s new for next winter? Plenty. Easywear continues to be big, we’ll still be wrapping up warm in cozy clothes that make us feel safe, but for 2018 comfort will also mean an eclectic succession of familiar pieces, that are also fail-safe in the style stakes. The overall trend might have been towards real clothe Fashion looked to America this season, to discover the New World through Western accents at Isabel Marant, an effortlessly chic Margot Hemingway-esque look at Lorenzo Serafini and a Wild West edge for Alberta Ferretti’s signature femininity.', 1),
('Why you feel tired all the time', 'Do you often ask yourself, "Why am I so tired all the time?" If so, this article may be the perfect read for you; we have compiled a list of some of the most common reasons for tiredness and what you can do to bounce back into action', 3),
('The 8 Most Important Trends of the Spring 2019 Season', '
Nongender clothing is on the rise, from Maison Margiela and Louis Vuitton to Givenchy. So it’s not surprising that the single most popular item on the Spring 2019 runways was a big, boxy blazer. Sort of mannish in its loose cut but with a feminine edge in its pointed shoulders, this shape works on every body, no matter size, gender, race, or creed.', 1),
('The Resort 2019 Trend Report', 'The Resort season remains one of the longest and most diverse on the fashion calendar. For some brands, it’s an opportunity to reiterate what happened on the Fall runways. For others, it’s a chance to offer a holiday wardrobe of sparkly cocktailwear. Yet more see it as the opportunity to redefine a brand’s core offering. A few others paint Resort as a season of experimentation, for new ideas and wild silhouettes.', 1),
('The Biggest Trends In The Beauty Industr', 'The beauty industry has been on a tear for years. There are some submarkets that are exceptions, like the mass beauty markets, but overall the business of beauty continues to defy gravity. Even multibrand stores, which in other consumer sectors have a questionable future, are performing. Stefano Curti, global president of Markwins Beauty Brands, pointed out to me that half the growth in beauty is online. But that implies that half the growth is in stores. It’s hard to find another market segment where that’s true.', 2),
('The 11 Key Beauty Trends Of Spring/Summer 2019', 'Following an uncharacteristically long and hot summer, beauty took its cues from the weather and showed us sun-kissed skin, wind-swept hair and a healthy, well-rested glow. At Altuzarra, Tom Pecheux used warm tones to create a post-summer radiance, complemented by surfer-girl hair by Damien Boissinot. Similarly summery looks were on show at Prabal Gurung, Alberta Ferretti and Michael Kors, whilst Chanel took us straight to the heart of the action with an entire beach-themed show complete with lapping waves and a beachy beauty look to match.', 2),
('11 Wellness Trends To Watch In 2019', 'By now you have probably heard of the circadian rhythm, also known as our body/s biological clock. But did you know that this daily cycle has everything to do with two important hormones: cortisol and melatonin? 2019 will be the year that we all learn just how important the daily fluctuations in these two hormones—and the circadian rhythm in general—is to your health.
ly put, the hormone cortisol is supposed to peak in the morning, helping wake us up and make us feel alert and ready to tackle the day. Later on, melatonin starts to rise to encourage us to wind down at the end of the day. But when these hormones are out of whack, they can leave us feeling tired all day and totally amped when we are trying to get to sleep at night.', 3),
('Why Movies Still Matter', 'The principal quality of quality TV has proven to be its ability to generate discourse—not just on the part of critics and viewers but on the part of journalists. As particular series, and television over all, became the subjects of widespread public discussion—discussion in the literal sense, of writers and viewers responding to each other—that discussion became news. Suddenly, television was propelled from the arts page to the front page, and that trend was accelerated by the nature of the shows. Their emphasis on stories and characters involving iconic phenomena in cultural history and hot-button issues of contemporary sociology and politics grabbed—and still grabs—hold of journalists’ nose for stories. Many series seem to exist only to present topics in ready-to-debate form; they are built to give rise to “think pieces,” which have become the dominant, if easily parodied, critical mode.', 4);