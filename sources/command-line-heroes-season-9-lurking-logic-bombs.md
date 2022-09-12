[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 9: Lurking Logic Bombs)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-9/logic-bombs)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 9: Lurking Logic Bombs
======

### Shownotes

Logic bombs rarely have warning sounds. The victims mostly don’t know to expect one. And even when a logic bomb is discovered before it’s triggered, there isn’t always enough time to defuse it. But there are ways to stop them in time.

Paul Ducklin recounts the race to defuse the CIH logic bomb—and the horrible realization of how widespread it was. Costin Raiu explains how logic bombs get planted, and all the different kinds of damage they can do. And Manuel Egele shares some strategies for detecting logic bombs before their conditions are met.

### Transcript

00:04 - Female Voice Actor

Hello?

00:05 - Male Voice Actor

Hi, who's this?

00:08 - Female Voice Actor

Who's this? I think you have the wrong number.

00:13 - Male Voice Actor

Do I?

00:14 - Female Voice Actor

I'm hanging up. I don't have time for this.

00:16 - Male Voice Actor

No, no. Don't. I want to talk.

00:18 - Female Voice Actor

Look, I don't know who you are. I've got to go. I'm late to meet a friend.

00:24 - Male Voice Actor

Are you? Then why did you just make popcorn?

00:30 - Saron Yitbarek

Okay. You've probably seen this one, right? An innocent girl is home alone one night when she gets a deeply disturbing phone call. She runs around the house, peering out windows, locking the doors. She's stuck on the idea that this creepy caller could get in. But what if the call was coming from inside the house?

01:02 - Saron Yitbarek

Just like that classic horror scene, digital security breaches can come from inside the house. They've already gained access to all the computers they're going to attack before anybody even knows they exist. I'm talking about one of the most terrifying kinds of malware out there, The Logic Bomb. I'm Saron Yitbarek. And this is Command Line Heroes, an original podcast from Red Hat. All season long, we're learning about the malware, cyber crimes, and bad actors that security teams guard against. In our first two episodes, we looked at vectors of attack. The way worms, viruses, and Trojan horses infect our devices. Now, with Logic Bombs, we're looking at a dangerous kind of payload. Logic Bombs buy their time and go off at a particular moment, often as a punishment or retribution. There are powerful ways to set off a massive coordinated ambush. We often think of Logic Bombs as inside jobs. Maybe it disgruntled sysadmin plants one, and it just sits there on the server for years, until the day that sysadmin gets fired. Then, boom, all Logic Bombs attack from inside the house. But not all Logic Bombs are actually planted by insiders. We're starting this episode with an example of a truly dangerous Logic Bomb that was created by a lone student, someone who didn't seem to have any special access at all.

02:39 - Paul Ducklin

You know, those little rust spots you sometimes see on an older car and you think, oh, I'll just scratch the rust off and you start scratching. And pretty soon the whole thing. Oh no, I wish I hadn't started.

02:57 - Saron Yitbarek

Paul Ducklin is a principal research scientist at Sophos, the security company. He was working there back in the late nineties, when a strange new virus called CIH appeared. It was spreading around the world fast, on any computer that ran Windows. And in the late nineties, that was a lot of computers. Ducklin remembers a call he got on a Friday afternoon. He was getting ready for the weekend. It was a rare and beautiful spring day in England. And his Italian motorcycle was waiting outside. But the voice on the phone was terrified.

03:33 - Paul Ducklin

We've just suddenly realized it is all over the business.

03:37 - Saron Yitbarek

The client needed immediate help removing a virus off their computers. Why the rush? Because the virus was a Logic Bomb. It had a detonation date, which was visible from its source code. Think of a time bomb with that glowing red countdown. Once CIH was detected, it was a race against the clock.

03:59 - Paul Ducklin

As anyone who is around then will remember the, the kind of D-day, the big bad day for this CIH virus was the 26th of April, 1999.

04:10 - Saron Yitbarek

The 26th of April also happened to be the anniversary of the Chernobyl disaster. Nobody knew at the time if that was significant, but some people started calling it the Chernobyl virus, an allusion to both the date and the scale of this impending nightmare. Whatever you call it, Chernobyl CIH, its deadline was days away and Ducklin knew he had to help whoever he could.

04:38 - Paul Ducklin

I just said to this guy, why don't we just form a team of two? I'll come around and help you. And when there's nobody in the office, we will close all the doors, put on all the lights, build some cleanup gear and we'll just go around and make sure every computer is okay.

04:56 - Saron Yitbarek

Later at home, Ducklin felt pretty sure they'd managed to save that company. He didn't hear back from them on April 27th, but that last minute effort to save their computers was just one of the countless emergencies taking place all around the world. By the time CIH was ready to detonate, 60 million computers had the virus in waiting.

05:21 - Costin Raiu

My name is Costin Raiu, and I'm the head of the global research and the analysis team at Kaspersky.

05:29 - Saron Yitbarek

Costin Raiu is based in Bucharest, where he's devoted his life to fighting computer viruses. He remembers the year leading up to CIH's blow. The warning signs were there.

05:41 - Costin Raiu

We started seeing software. It was mostly pirate software that was being distributed through different internet websites. Sometimes we even received CD ROMs from magazines, which were infected with this CIH virus.

05:59 - Saron Yitbarek

In many countries in the late nineties, people didn't have access to fast internet. So they were sharing a lot of software via CD ROMs.

06:08 - Costin Raiu

CD ROMs were particularly tricky to deal with because you couldn't disinfect them.

06:14 - Saron Yitbarek

Some kept a Windows 98 CD in a drawer, and just kept infecting their own computer and others, over and over again. And then, on top of the CD ROMs problem, CIH had a bewildering ability to hide itself from detection. This malware seemed capable of slipping through the cracks, staying out of sight from ordinary antivirus scans.

06:39 - Costin Raiu

Instead of copying itself at the end of the files, it would try to find holes, effectively holes in these executables, and hide himself in one of these holes. And as a result of this technique, basically an infection would be almost, almost invisible.

06:59 - Saron Yitbarek

This technique that Raiu is describing is called code caving. Most viruses, like you said, attach their code to the end of an infected file. A good sysadmin could memorize the size of well known files on their system. And if the size changed, they knew that something was up. That CIH was able to split its code up and insert slices of itself in the coding slots on software utilities. And that meant the file size would never actually change. The result was that from the outside, it was very difficult to notice that an intruder had arrived. Many people had no clue their computers were infected. A stealth approach like this, is especially useful for a Logic Bomb because they rely on our ignorance. They need to hang out undetected while they wait for that one dramatic moment, when they detonate. Stopping CIH, before it went off, wasn't possible. There were just too many infected computers, too many shadowy cases where the virus remained hidden. And besides, not everybody had a specialist like Paul Ducklin on hand to save the day. So some computers, a lot of computers actually, were going to be infected when this particular Logic Bomb went off.

08:28 - Costin Raiu

It was kind of, let's say kind of waiting, waiting to see if this is kind of the hydrogen bomb or if it's more like a firecracker.

08:38 - Saron Yitbarek

Yeah, it wasn't a firecracker. On April 26th, 1999 if you turned on an infected computer, CIH was turned on too, and it got to work. For starters, it erased the first megabyte of information on a hard drive. This is a critical area. It's called the partition table and it acts like a table of contents for your computer. Without it, computers are lost. Next, CIH attacked the basic input output system, the bios, which could leave the computer entirely useless. And that was the really surprising thing about this event. CIH was attacking computers in a very new way.

09:29 - Costin Raiu

Perhaps the most significant feature was a destructive payload. The ability to wipe the system bios, to wipe it with trash rendering computers unbootable and sometimes kind of useless.

09:47 - Saron Yitbarek

This was the first virus that actually left computers requiring new hardware. It would write garbage into your bios, so you couldn't boot your computer at all. For the unlucky ones this was unfixable, and you'd have to get a whole new motherboard. By the time CIH had finished going off, it had threatened the work of millions of people, especially throughout Asia, causing enormous stress and panic, as well as a billion US dollars in damage. And nobody knew why.

10:25 - Paul Ducklin

The guy wrote this virus, he didn't do it to make money like in the current era, it was just "Hey, look how clever I am."

10:31 - Saron Yitbarek

Four days after CIH exploded, Taiwan's police arrested a 24 year old man named Chen Ing-hau. What are those initials? C I H. He was a student, it turned out, at Tatung university in Taiwan, and he'd stuck his initials inside the virus code, like a signature at the bottom of a painting.

10:55 - Paul Ducklin

I guess the guy just thought he was being really clever.

10:58 - Saron Yitbarek

Chen Ing-Hau has said he wasn't trying to be malicious, that he just wanted to point out the security flaws and antivirus software that folks were relying on back then. Like a lot of stories were covering this season, the CIH Logic Bomb seems to have been created by someone who didn't think very clearly about potential victims.

11:20 - Paul Ducklin

For people who got hit by this it was really unhappy times.

11:23 - Saron Yitbarek

Chen Ing-hau apparently didn't have especially evil intentions, but Logic Bombs can be a lot more strategic. And that's what makes them so dangerous.

11:35 - Paul Ducklin

Logic Bomb means there's some specific ,if you like, sub component of the malware that under certain very specific circumstances, in this case, it was just the date on the calendar is the 26th of April, but it could be something more subtle, such as "Go and do a database query. Oh, look. Such and such a contractor by the name Jones or Smith or whatever got fired last week. Engage the Logic Bomb and go into destruction mode."

12:08 - Saron Yitbarek

This is one of the classic scenarios for Logic Bombs. You could call it a revenge plot.

12:14 - Paul Ducklin

There is, if you like a sort of, "if this, then that" feature in the program that is specifically designed to look for a non-obvious condition and then deliberately do something bad, but nobody would've intended to put in the program.

12:34 - Saron Yitbarek

Back in the nineties, the "if, then" scenarios were often pretty benign.

12:39 - Paul Ducklin

The Logic Bomb date would be to celebrate some political event, or it would be somebody's birthday. It was almost like the Logic Bomb was it was part of the puzzle. Whereas I think these days, things are quite different, right? You're putting a Logic Bomb there because you are the attacker. You know the conditions that trigger it. And if nobody else has realized, it gives you a secret way back in later.

13:06 - Saron Yitbarek

Costin Raiu told us that these days, Logic Bombs can be strategically placed throughout our digital infrastructure or on the computers of major companies, simply waiting for any number of "if, then" scenarios to occur.

13:21 - Costin Raiu

There could be a lot of Logic Bombs hidden in critical infrastructures around the world. And the reason I'm saying that is because we have seen the signs of such things in some of our research. Every now and then we discover malware, which is unlike anything else that we have seen to that day. And one very good example is a malware that has a hidden capability. And it's actually cryptographically hidden that you can't simply determine what it is supposed to do. So the inner payload, if you are on the warhead, is encrypted and the attackers are essentially the only ones with the keys.

14:07 - Saron Yitbarek

In the same way that Chen Ingu-Hau was able to use code caving to hide his virus inside coding gaps. There could easily be cryptographic tricks or new undiscovered ways that bad actors are burying Logic Bombs around the digital world. It reminds me of that disturbing scene where the call is coming from inside the house. We can guess that some threats are already inside the system. We can assume there are Logic Bombs we don't know about. Hidden bombs that are set to go off whenever certain requirements are met. The election of a certain leader could trigger one or maybe another, when gas prices hit a certain high. The trigger could be anything that a hacker sees as a moment to unleash chaos.

14:58 - Costin Raiu

We see them deployed in different places, especially critical infrastructure and especially energy related companies. Of course, whenever we solve things like this, we disinfected them, we delete them with our products, but the fact that we are seeing such cases, it kind of makes me believe that there are hidden warheads planted around the internet, probably in the critical points in critical infrastructure.

15:31 - Saron Yitbarek

The usual security responses we use against viruses and worms can't be applied if we don't even know the problem is there. Since the CIH Logic Bomb, there have been plenty more cautionary tales. Bank servers are attacked, databases at the TSA are threatened. Nobody can afford to lower their guard, and the stakes are as big as they come.

15:55 - Costin Raiu

I would suspect that there's well positioned, well placed Logic Bombs in critical places around the world, which is, I would say maybe just another dimension of cyber warfare.

16:18 - Saron Yitbarek

We know we need to up our security game to protect against these potential Logic Bombs. But how far has security come since April 26th, 1999, when the CIH bomb exploded? Could we prevent that damage today?

16:33 - Manuel Egele

That is a good question.

16:36 - Saron Yitbarek

Manuel Egele is an associate professor at Boston university, and his research focus is software security.

16:43 - Manuel Egele

So the implementation that the, the person writing it was able to write it. I don't think that there was a good preventative measure that would have hindered the implementation from a technical perspective. I don't know, even in retrospect of a good mechanism to say that something like this should not be possible.

17:02 - Saron Yitbarek

So far this season, we've talked about digital hygiene. All the common sense practices that everyday users can employ to keep their devices safe. Careful what link you click on. Check the URL for that little padlock icon, things like that. But here's the thing about Logic Bombs. Because they're often engineered by insiders and because they specialize in stealth, sitting there and waiting in silence, ordinary digital hygiene might not be enough. Egele points out that institutional moves are necessary too. Large companies for example, could set up their systems, so software written by a particular coder doesn't work after they leave the company. That might make it harder to plant a Logic Bomb. Better yet, security pros can be constantly scanning for suspicious code.

17:57 - Manuel Egele

Is there code that is potentially nefarious that only gets executed in very narrow circumstances?

18:05 - Saron Yitbarek

That might be a warning sign.

18:07 - Manuel Egele

An example: it looks at what day is it today? And then only executes code if today is a specific trigger date, that would be something that an automated analysis can very well detect.

18:18 - Saron Yitbarek

That's a start. Big organizations also need to keep a kind of ongoing audit though. Something that lets them know who's running what.

18:27 - Manuel Egele

So be able to attribute every piece of code to a user that either authored that code or install that code on a given system.

18:35 - Saron Yitbarek

In addition to keeping track of code attribution, limiting access also sounds like a good idea.

18:41 - Manuel Egele

Operational systems should be locked down with only giving people access to those systems who actually need that access. So if someone needs to analyze data, they need to get access to that data. Absolutely. Does that mean at the same time that they can schedule codes to be executed sometime in the future? Probably not.

19:01 - Saron Yitbarek

And on top of all that Egele always recommends cryptographic verification.

19:07 - Manuel Egele

The bad guy switched to try to find a context that somehow legitimized their request.

19:11 - Saron Yitbarek

What that means is a cryptographic checksum is attached to files. It can be used to verify that the file hasn't been altered down the road. So whether we're talking about something as small as my smartphone, or as big as a company's headquarters, you can limit things. So your own only executing software that's cryptographically signed. There are lots of common sense solutions like these that can keep people from planting a Logic Bomb, but why not use every security measure we've got, we need a whole arsenal of systematic efforts to secure our digital work and lives.

19:51 - Manuel Egele

I think the realistic best we can hope for is to make it more costly and more complicated for attackers to be successful.

20:01 - Saron Yitbarek

Security is never about one perfect strategy. It's a whole attitude of vigilance. You have to assume that attackers are using every new trick and employ. So we have to do the same. We have to even assume some problems are brilliantly hidden, just waiting to cause havoc down the road. Logic Bombs force us to investigate every nook and cranny. They remind us that the villain could be calling from inside the house. So I know some of this stuff sounds quite scary and can be stressful, but here's the good news. Even in a worst case scenario where a Logic Bomb does a lot of damage, we have a chance afterward to sweep up the rubble and learn what went wrong. We can learn from these attacks and improve security going forward. Every horror story points out the vulnerabilities that we've got to address next. And meanwhile, we're getting better and better at spotting those warnings. I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. Next time, we switch from the inside job of Logic Bombs, to a major external threat botnets, those hordes of zombified computers that obey their herders' commands. Never miss an episode by following or subscribing wherever you get your podcasts. And until next time, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-9/logic-bombs

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
