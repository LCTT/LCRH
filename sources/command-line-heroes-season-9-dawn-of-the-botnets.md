[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 9: Dawn of the Botnets)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-9/botnets)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 9: Dawn of the Botnets
======

### Shownotes

Overwhelming numbers are scary—even in the best of circumstances. You can plan for them, build up your defenses, and do everything imaginable to prepare. But when that horde of zombies hits, their sheer numbers can still cause devastation.

Botnets are digital zombie hordes. Jamie Tomasello recounts the scale of the Bredolab botnet—and the many malicious kinds of missions it carried out. Martijn Grooten explains how botnets work, and why they can be so difficult to permanently dismantle. And Darren Mott shares some of the successes the FBI had in rounding up some of the world’s most prolific bot herders.

### Transcript

00:05 - Voice Actor - News Anchor

Authorities aren't sure if it's a virus alive or dead. There appear to be hundreds, thousands.

00:18 - Female Voice Actor

They're here!

00:27 - Male Voice Actor

Lock the door. Get something in front of it.

00:28 - Saron Yitbarek

Don't worry. They're safe, for now anyway.

00:31 - Male Voice Actor

We need more things against the door.

00:33 - Saron Yitbarek

But you know how this plays out. When zombies are on the prowl, no defense can last forever. Eventually, zombie hordes will break through the defenses. There's just too many of them. They overwhelm the most prepared group, and this particular army of zombies is especially dangerous because they've got a leader. They're being herded by a villain and that villain has a target. That villain has a plan.

01:09 - Saron Yitbarek

Zombies: millions of mindless soldiers that can overwhelm your defenses just by their sheer numbers. You've got The Walking Dead or maybe 28 Days Later in your head. But now, I want you to imagine all those flesh and blood zombies are computers, a botnet of zombified computers. Just like zombies in the movies, these computers don't have free will. They behave as a giant army controlled by a botnet herder who tells them what to do. What's so scary about a botnet of zombie computers? Imagine that zombie attack you just heard was a botnet of computers, overwhelming your website with traffic, a denial of service attack or maybe every zombie computer is conspiring and a global spam campaign.

02:03 - Saron Yitbarek

There are a hundred different ways you can mobilize a botnet army and the incredible scale of these botnets really can break down doors. There are literally billions of computers and devices connected to the internet. That's a lot of potential zombies.

02:23 - Saron Yitbarek

I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. This season we're featuring security horror stories. If you've been listening since episode one, you'll have learned about viruses and trojan horses and other kinds of malware that threaten our digital lives. This time we're facing up to botnets, figuring out what damage they can do, and how we can start fighting back before they flood through the gates.

02:58 - Saron Yitbarek

It's the fall of 2009 and Kenny had just got an email. Looks like it's from a social media platform he uses all the time; one that he trusts and depends on. It has all his family photos. His friends use it to keep in touch. The email says the platform has reset his password for security purposes and he'll need to take action if he wants to get into his account.

03:24 - Voice Actor - Kenny

I don't want to get locked out.

03:26 - Saron Yitbarek

The email includes an attachment and it looks like Kenny needs to open that attachment in order to get his new password.

03:34 - Voice Actor - Kenny

That's strange.

03:36 - Saron Yitbarek

Don't do it, Kenny. Oh, Kenny. That attachment turned out to be a zip file containing a downloader trojan. It got to work downloading malware onto his computer. And without Kenny ever realizing it, his computer became a zombie. It was now part of a botnet called Bredolab. I know you're thinking, "I wouldn't have been like Kenny. I wouldn't make that mistake." But here's the thing, in 2009, 30 million computers joined that same botnet. Bredolab was huge and it was ready to do some damage.

04:18 - Jamie Tomasello

What we had seen is an uptick of messages being reported as spam.

04:22 - Saron Yitbarek

Jamie Tomasello is the head of security programs and security governance, risk, and compliance at Gusto. They're a payroll and HR management company. She remembers the Bredolab moment as a point in history, 2009, when social media platforms were starting to get pared down leaving room for just a few mega companies.

04:44 - Jamie Tomasello

We were seeing a transition from some social networks that were really popular to now the one that is predominantly used and that we're all familiar with.

04:51 - Saron Yitbarek

A consequence of that was if you could design a trojan that fooled people into thinking you were part of that one trusted company, you could get yourself a lot of zombies. All at once. That's what the creator of Bredolab was counting on. Security pros like Tomasello quickly realized that people like Kenny were being dragged into the botnet. Their computers were getting zombified, so the hackers' message was marked as spam and yet...

05:21 - Jamie Tomasello

The interesting part here is how many people actually... Once we started marking this message as spam, the number of people that went into their spam box or their junk folder... that point in time eight percent... and pulled it out because they thought it was legitimate.

05:36 - Saron Yitbarek

Eight percent of users were falling victim to Bredolab, even after the message went to their spam folders. I guess if a social engineering play is compelling enough it's always going to get some traction.

05:49 - Jamie Tomasello

When we think about victim behavior and we think about people's dependency on social media networks, we can tell that the content was very impactful and it resonated with people. A very well-crafted spam message can trigger people to action. It triggers their fear around, "Oh goodness, a password reset confirmation? I need to take action. I need to be able to log into my social network. I need to connect with this person. I need to see these pictures." It is, "I need to stay connected."

06:20 - Saron Yitbarek

In many countries in the late nineties, people didn't have access to fast internet. So they were sharing a lot of software via CD ROMs.This trigger was so powerful, 30 million people like Kenny saw their computers become part of the Bredolab botnet.

06:29 - Jamie Tomasello

Your computer could then be used to launch DDoS attacks. It could send out other spam messages and that it's pretty much how it would work. Your system would connect to that command and control, and then it would be executing the commands that it was given.

06:45 - Saron Yitbarek

Bredolab could even download other malware onto your machine. In fact, ZeuS malware that we learned about in episode two has ties to the Bredolab botnet. Tomasello says that Bredolab was partly so successful because once it gained a new zombie for its army, it was really good at keeping that zombie on its side.

07:06 - Jamie Tomasello

It was also capable of detecting whether it was running in an environment that was being analyzed or observed, and so it could check the presence of certain files. It causes the system to stop responding. It could also unhook certain API calls to antivirus software and other malware detection to have it essentially removed from the system. So, it is an interesting piece of software because it not only was like, "Hey, now your system is part of this botnet," but it was slightly self-aware. It operated in such a way where it was trying to actively evade detection.

07:40 - Saron Yitbarek

It wasn't self-aware in any artificial intelligence sense, but you have this very large, very cleverly designed botnet. So, if you're the botnet herder, the evil mastermind who controls all those zombified computers, what are you going to do with your army?

07:58 - Jamie Tomasello

This particular attacker not just used it for himself, but he generated revenue by renting this out. It's a significant amount of money on a monthly basis so that anybody who wanted that huge network of computers, they were able to use it for whatever they wanted, and that's why we saw the proliferation of different types of spam. And if it was purely spam, there's monetization of spam that is separate from it being malicious, but there were also those malicious things that helped further other botnets.

08:31 - Saron Yitbarek

So Bredolab was now being rented out to the highest bidder. Got some spam to push? Or maybe you want to take down a rival company or pay to have your own malware shuttled into thousands of computers? Bredolab was offering up 30 million accomplices who would do your bidding. It was a lucrative business. The guy in charge was making about 125,000 USD every month just by renting out his botnet. It was a pretty sweet deal while it lasted.

09:03 - Jamie Tomasello

Fast forward to 2010 where the Dutch law enforcement seized 143 servers, three command and control systems.

09:12 - Saron Yitbarek

Those would be the systems that were actually sending the execution commands to the zombies within the botnet.

09:18 - Jamie Tomasello

One database server in several management servers. They were able to get those at a co-location facility and they found out that it was tied back to an individual called...

09:29 - Saron Yitbarek

Georgiy Avanesov, a 27-year-old Russian. He created Bredolab in the spring of 2009 and was arrested one year later.

10:55 - Paul Ducklin

I guess the guy just thought he was being really clever.

10:58 - Saron Yitbarek

Chen Ing-Hau has said he wasn't trying to be malicious, that he just wanted to point out the security flaws and antivirus software that folks were relying on back then. Like a lot of stories were covering this season, the CIH Logic Bomb seems to have been created by someone who didn't think very clearly about potential victims.

09:38 - Jamie Tomasello

He ended up being imprisoned for four years because of this activity.

09:43 - Saron Yitbarek

But here's something quite disturbing, even behind bars with all his servers seized...

09:49 - Jamie Tomasello

Even after removing the command and control systems, the button was still alive; the botnet was still active because we had all of these victims who were still infected.

10:00 - Saron Yitbarek

Security professionals sent messages to infected users encouraging them to get fixed, but infected computers may still be around to this day and the Bredolab code itself was soon picked up by others. Capture the botnet herder, take down the guy in charge and you still haven't stopped the zombies themselves. Researchers discovered that a Bredolab command and control server in Russia remained active even after the bust involving Avanesov. The idea of botnets also hasn't been stopped: the promise of all that easy money that a hacker could make just by renting out their army.

10:46 - Jamie Tomasello

If you had an infected machine, it would receive commands from a command and control system and it would do essentially whatever it was told to do. When the botnet is rented out, it's rented out almost like any other distributed service.

11:00 - Saron Yitbarek

How exactly does that happen? How are these armies actually controlled?

11:06 - Martijn Grooten

So built into the malware, there is a mechanism that allows for remote control.

11:11 - Saron Yitbarek

Martijn Grooten is head of threat intel research at Silent Push.

11:16 - Martijn Grooten

All the bots connect to a central server, sometimes multiple servers, and the bot herder controls the server and, therefore, controls the botnet.

11:24 - Saron Yitbarek

Sounds pretty simple. There are though two different ways this control can work. In the classic centralized approach there's just a server somewhere that all the bots are connecting to, but there's also the possibility of a peer-to-peer arrangement.

11:40 - Martijn Grooten

In a peer-to-peer setup, individual bots connect to each other and are still a way for someone like the bot herder to control them. They operate a few bots directly and then, this way, they connect to the network.

11:55 - Saron Yitbarek

Why would a bot herder use a peer-to-peer network then if they're still just sending out instructions for the whole group?

12:02 - Martijn Grooten

It tends to be more resilient and that's why, historically, some bots herders have chosen for this approach. There's not a single server that someone can take out to destroy the botnet.

12:12 - Saron Yitbarek

Once a herder has set up their botnet, whether it's centralized or peer-to-peer, their next step is, of course, to find customers: people or organizations who want to hire that zombie army.

12:26 - Martijn Grooten

Some botnets are designed with a particular purpose in mind. These days, they tend to be more multipurpose, so sometimes it also depends on the kind of machines that have infected, the location of these machines. If the botnet consists of a lot of servers, like network servers, from a bot herder's point of view, spam is probably a sensible thing to do because there tend to be large network connections and these are machines that would normally send email so you don't stand out. But if you have a botnet of, say, internet routers, it might make more sense to use them for a DDoS attack, for example.

13:03 - Saron Yitbarek

I promise I'm not trying to get into cyber crime or teach you how to run a bo net, but I am curious how these arrangements go down. Is there a Craigslist for cyber crime? How do botnet herders connect with their clients?

13:18 - Martijn Grooten

You basically go to places where cyber criminals hang out, so that's cyber crime forums, typically on the dark web.

13:25 - Saron Yitbarek

Makes sense.

13:26 - Martijn Grooten

It's a bit similar to organized crime in the real world. You don't just get there. You need to know someone. You start with a more broad or accessible and maybe eventually people start trusting you, and you get into something more secret.

13:42 - Saron Yitbarek

Researchers predict there'll be 125 billion connected devices by 2030 and there's no telling how many of them could one day become zombies in someone's army. But botnets of the future may be evolving, may be getting smarter. Say you have a zombie army of a million computers and you were able to give your criminal clients access to specific companies.

14:05 - Martijn Grooten

You realize that a few of them are in larger organizations such as a company or a hospital, and you use that access that you have to that organization to deploy a ransomware within that organization. That's something that we see these days. And so it starts with what sounds like just a simple node in a large botnet, but it ends up being a very costly ransomware attack.

14:29 - Saron Yitbarek

And just how big is the threat today? How many zombies are out there?

14:33 - Martijn Grooten

My guess, based on what I've seen, I think it's an order of magnitude of tens of millions.

14:39 - Saron Yitbarek

Again, there are billions more devices out there that could get enlisted into a botnet down the road; not just laptops, but smartwatches and smart thermostats. In principle, they all could be turned into zombie watches and zombie thermostats, which means we need to ramp up on our botnet defenses fast.

15:07 - Saron Yitbarek

There are basic digital hygiene steps that make it less likely you'll become part of a botnet. Using newer computers with newer software helps. Paying for software and movies helps too, refusing to download pirated versions. But you know how in a zombie movie it's only the lucky ones that make it to the end? The same thing happens with botnets.

15:30 - Saron Yitbarek

A lot of people around the planet are using outdated computers because they can't afford anything else. A lot of people don't have enough cash so they scramble. They try to download pirated software and all this creates opportunities for bot herders to sneak in and zombify another device. It's a global issue and it's made worse sometimes by people who just don't care enough about cyber hygiene, and sometimes by people who can't afford to access the latest software, but the end result is a series of very real security crises at national and international levels. In the last couple decades, these attacks made the news and anxiety about botnets began to spike.

16:18 - Saron Yitbarek

In 2007, the Storm botnet assembled tens of millions of computers that were parceled off and sold as ready-to-use spam armies and also phishing attacks against banks. Next year, in 2008, the Kraken botnet arrived twice as big as Storm. It used social engineering, just like that password reset trick that Bredolab used to infect 50 of the Fortune 500 companies.

16:43 - Saron Yitbarek

Also in 2008, the Conficker worm snuck onto millions of computers that were missing a basic security patch, including many government computers, allowing hackers to amass a botnet that the New York Times called a black market supercomputer.

17:00 - Saron Yitbarek

Aside from some obvious uses like spam and DDoS attacks, botnets were getting used to download malware onto all the zombies, or they could be marshaled for click fraud where the whole botnet clicks on certain posts to artificially inflate them. The bad guys can get as creative as they want, so eventually, authorities took action. Then FBI Director, Robert Mueller, went on the record calling botnets the cyber criminal's weapon of choice, but could the FBI track down botnet herders and stop this new spree before it got worse? That wouldn't be easy.

17:37 - Darren Mott

I was a high school teacher before becoming an FBI agent.

17:41 - Saron Yitbarek

Darren Mott spent 20 years working on cyber crime at the FBI. Back when he started out, most of the FBI's field offices didn't even have cyber squads. The Bureau's Cyber Division didn't exist before 2002 and by the time those huge attacks, Storm, Kraken, Conficker, were coming around, the FBI was able to respond. In 2007, they started something called Operation Bot Roast, their biggest effort to hunt down the bot herders and end their game.

18:15 - Darren Mott

If you could get access to a compromised machine that was still working, you could then monitor it and see where the command and control center was coming from. So from that, you could backtrack and say, "Here's the command and control for this botnet. Where's that located?"

18:29 - Saron Yitbarek

Hunting down botnet herders requires international cooperation: not an easy task, especially in cases where countries don't have treaties.

18:38 - Darren Mott

In most cases, a lot of the command and control was not in the United States, so we had to get assistance from foreign partners. And at the time, the best foreign partner we really had were the Dutch.

18:50 - Saron Yitbarek

That's because a lot of criminals were using Dutch infrastructure. Maybe they'd have gone elsewhere though if they knew how easy it is to get wiretaps in the Netherlands, much simpler than it is in the States.

19:03 - Darren Mott

The Dutch don't have those restrictions. It's a lot easier for them to say, "We're going to go monitor that machine right there."

19:07 - Saron Yitbarek

Between wiretapping and human informants, the FBI started to get a hold of this vast international ring of botnet herders. And when they made their arrests, they did it in one fell swoop.

19:20 - Darren Mott

As soon as the first search warrant or arrest warrant would've happened, all the other botnet people would've changed their techniques and we would've lost a lot of intelligence; they would've moved infrastructure; they would've destroyed evidence. So they wanted to do it all at once.

19:34 - Saron Yitbarek

Bot Roast was so successful, resulting in actual convictions and botnet dismantling that the FBI ran Bot Roast II just a couple years later. Their work-disrupting botnets ramped up and continues to this day.

19:49 - Darren Mott

It's not like the bots are going away. Bots still exist today. There are still plenty of botnets out there doing bad things.

19:55 - Saron Yitbarek

These days, Mott says the FBI is less likely to find individual bot herders like 27-year-old Avanesov who is running the Bredolab botnet. Things are more organized.

20:08 - Darren Mott

Do you have individual bot herders still? I'm sure you do. Not looking for those. Looking for those organized criminal enterprises, largely coming out of Eastern Europe. So the goal is to get as high – it's like any other investigation. How high up the chain can you get?

20:21 - Saron Yitbarek

And those higher ups are getting better and better at hiding.

20:26 - Darren Mott

It's harder now than it was 15 years ago, simply because their operational security has gotten better. So on the dark web, they can communicate and they can sell. I'm sure there's botnet as a service you can buy on the dark web, and there's communication platforms where they communicate about all this stuff.

20:45 - Saron Yitbarek

Internet service providers, ISPs, at this point, have a relatively easy time identifying botnets. They're going to notice some crazy changes in traffic. They can recognize the botnet signatures, but that doesn't cut off the serpent's head.

20:59 - Darren Mott

If you can find the leaders, they're the ones benefiting the most from this doing the most damage and they're the ones you want to get. So, the biggest challenge is attribution, trying to give attribution to who's doing it, especially now with encrypted communications, trying to get into these channels to talk. The encrypted traffic they use to do their command and control makes it very hard.

21:21 - Saron Yitbarek

Something we've discovered this season is that cyber criminals and security teams are in a kind of arms race. Everyone is trying to up their encryption, up their decryption, make use of bleeding edge technology to out-maneuver each other.

21:37 - Darren Mott

Because in the cyber world, you have to be creative in what it is you do to infiltrate these groups to come up with operations to identify the evidence you need to figure out who's running this bot now.

21:47 - Saron Yitbarek

Taking down those command and control servers can feel like a game of Whack-A-Mole. You take one down, but the code is still at large and another variation pops up somewhere else, but you're at least forcing the bot herders to find new infrastructure. You're making it expensive for them to keep running their scam. From Mott's perspective, the FBI and other security forces are in the business of making bot herding more painful, but they know there's no endpoint, no silver bullet.

22:20 - Saron Yitbarek

There is good news. Spam has actually been decreasing in recent years. The battle against botnets has done that much at least and we each can make a difference in that fight by keeping software up-to-date, or just staying skeptical of dodgy emails and their attachments. Vigilance is the key because each botnet you've heard about in this episode, Bredolab, Storm, Kraken, they're all just sets of code that can always be reanimated to tweaked just enough to slip through the gates. Our job is to remember that every computer, no matter how innocent its user, could become a weapon if we let in a botnet's code. Keeping a simple laptop safe can protect the whole world from the botnet zombie armies that may come marching tomorrow.

23:14 - Saron Yitbarek

I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. Next time on the show, we're learning about another terrifying attack style, the machine in the middle where interlopers get between you and your bank, you and your friend, you and your government. It's eavesdropping on steroids. Until then, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-9/botnets

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
