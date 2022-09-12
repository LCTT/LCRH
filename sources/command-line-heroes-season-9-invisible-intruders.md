[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 9: Invisible Intruders)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-9/invisible-intruders)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 9: Invisible Intruders
======

### Shownotes

What began as a supposed accounting error landed Cliff Stoll in the midst of database intrusions, government organizations, and the beginnings of a newer threat—cyber-espionage. This led the eclectic astronomer-cum-systems administrator to create what we know today as intrusion detection. And it all began at a time when people didn’t understand the importance of cybersecurity.

This is a story that many in the infosec community have already heard, but the lessons from Stoll’s journey are still relevant. Katie Hafner gives us the background on this unbelievable story. Richard Bejtlich outlines the “honey pot” that finally cracked open the international case. And Don Cavender discusses the impact of Stoll’s work, and how it has inspired generations of security professionals.

### Transcript

00:01 - Voice Actor — Carol

I know. I know. Yeah, I've got it with me. Okay, just ducking into the subway. See you soon. Oh, great. 20 minutes before the next one.

00:16 - Saron Yitbarek

Carol waits on the freezing subway station, alone. Out of habit, she scans her phone, no signal. Looks in her bag, there's the thumb drive. After months of back and forth with a reluctant source, Carol finally has the incriminating evidence she needs to win her case. What's in her bag proves it all. Carol looks to the opening elevator door. No one comes out.

00:53 - Voice Actor — Carol

Strange.

00:56 - Saron Yitbarek

She takes a few steps backwards and looks down the rest of the platform.

01:01 - Voice Actor — Carol

Anybody there? Hello? Is somebody there?

01:06 - Saron Yitbarek

Clutching her bag ...

01:08 - Voice Actor — Carol

Hello?

01:08 - Saron Yitbarek

... Carol starts to make her way to the stairs. She can hear someone. She just can't see them.

01:16 - Voice Actor — Carol

What do you want? No! No!

01:17 - Saron Yitbarek

An invisible force ...

01:19 - Voice Actor — Carol

Who are you?

01:19 - Saron Yitbarek

... Grabs her bag ...

01:20 - Voice Actor — Carol

What are you? Stop. Come back.

01:21 - Saron Yitbarek

... Wrestles it from her grip.

01:22 - Voice Actor — Carol

No. Somebody help me.

01:23 - Saron Yitbarek

The thumb drive with all those crucial secrets disappears. The ability to turn invisible to roam without being noticed has profound consequences. It opens the door for all kinds of crimes. After all, the rules change when nobody knows you're there. Suddenly, the risk factor drops away. Forbidden places, forbidden actions, they all start to look inviting. I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast for Red Hat. This season, we're exploring the great security crises of the digital age and we saved one of the wildest stories until now, the tale of a hacker who crept unnoticed into some of America's most valuable computer systems.

02:22 - Saron Yitbarek

They snooped wherever they wanted because they believed nobody would ever see their movements, nobody would ever track them. It was a perfect plan, unless someone found a way to begin seeing the invisible. It's the 1980s, the internet as we know it really doesn't exist. There's ARPANET and it was in some ways, fantastic. In other ways, really innocent.

02:55 - Katie Hafner

It was like a neighborhood where people feel really safe just keeping their doors unlocked.

03:03 - Saron Yitbarek

Katie Hafner is a journalist and author who's been writing about technology and hackers since the '80s. 40 years ago, she reminds us, computer networks were just beginning to grow and security was not top of mind. Logins and passwords were a formality. The ARPANET was being built, after all, to help people connect and unwanted intruders were ...

03:29 - Katie Hafner

Back then really kind of a stunning, even, notion that someone would want to break into a computer.

03:44 - Saron Yitbarek

In the midst of that innocent ARPANET age in 1986, an excitable astronomer named Cliff Stoll was looking for work. While waiting for an astronomy job, he found himself a gig as a system administrator at the Lawrence Berkeley Lab in California. He'd help them run a dozen mainframes that scientists logged in to use. Stoll chose a desk in an unventilated windowless office in the basement, hoping nobody would notice him.

04:14 - Katie Hafner

There he was, and he'd been asked to look into this small accounting discrepancy.

04:22 - Saron Yitbarek

Hundreds of scientists paid to use those mainframes and the accounting logs at Berkeley Lab showed that for the first time ever something didn't add up. Stoll's boss had found that 75 cents were missing. An ordinary person might have assumed it was some kind of rounding error and moved on. Stoll, though, wasn't ordinary. 75 cents couldn't just go missing. He started scrolling through the list of users and hours later found one that didn't have a valid billing address. He deleted that user from the system.

05:00 - Saron Yitbarek

Now, this is where most people would go for lunch, forget about the whole thing. But this discrepancy didn't sit well with Stoll. He decided to watch the system more closely. He programmed his terminal to beep whenever somebody logged on to one of their computers. Every few minutes, Stoll heard a beep and ran over to see what username was being typed in. He asked his boss about one name that kept coming up, Sventek, and his boss found that odd because the user behind that name, Joe Sventek, was away that year.

05:37 - Katie Hafner

Sventek hadn't even been a user at LBL for a while.

05:45 - Saron Yitbarek

So if Sventek wasn't around anymore, why was Sventek logging in?

05:52 - Katie Hafner

And then he realized that it was somebody who had basically taken over Sventek's account.

06:00 - Saron Yitbarek

Who would want to do that? The Berkeley Lab's files were mostly dry academic stuff and they weren't exactly top secret either. It seemed pointless to sneak in using somebody else's username and look at them. Stoll couldn't let it go. What happened next turned into a legendary cat and mouse story. Stoll even turned it all into a thriller style memoir called The Cuckoo's Egg. You might have heard about it. His book sprawls across continents and through a lot of technical details, but we're focusing on just one question. How do you catch an invisible intruder? Here's how he started.

06:45 - Katie Hafner

When he noticed that there was an intruder, he took on the job again, just as a one man SWAT team.

06:55 - Saron Yitbarek

Stoll swept beside printers that spat out records of every keystroke by each user that came through the lab's modems. He studied it all and then he noticed somebody had spent four hours looking around their operating system throughout the night. This was getting strange, and then it got even stranger. Whoever this intruder was, they had somehow learned to cover their tracks, to make themselves invisible. They could do this because they managed to make themselves into a super user. This person had keys to every room in the system.

07:34 - Saron Yitbarek

They could read everything. They could change everything. They could even delete the accounting files, which was how they were able to move around unnoticed. That 75 cent accounting discrepancy was the only mistake they made. It was like a single fingerprint they forgot to wipe clean. Other than that one mistake, they had somehow figured out how to make themselves into an invisible intruder. Getting into the lab system in the first place would've been a simple version of what we call a brute force attack, the digital equivalent of trying car doors until you find one that's not locked.

08:12 - Katie Hafner

Back then, it was very common for a login to be somebody's name and then the password to be their last name or their birthday. It was all very loosey goosey.

08:27 - Saron Yitbarek

But once they were in, how did they get all those super user privileges? For what happens next, you need to know that the Lawrence Berkeley Lab was using a variation of Unix called GNU.

08:41 - Katie Hafner

The way that Lawrence Berkeley Lab had set it up, they had installed a text editing program, and clearly the intruder knew some really basic Unix commands.

08:55 - Saron Yitbarek

The GNU Emacs editing program had its own email subsystem that had this tiny security flaw. When it received mail, it renamed the file and changed the ownership label. That meant you could move a file into any part of the setup, even protected parts. A hacker could mail a program into the protected part of the system where it could later start running. When it ran in that protected space, there were no limits to what the program could execute. It could even make a hacker into a superuser.

09:30 - Katie Hafner

When this hacker discovered that he could become a superuser on the LBL computers, he must have just felt like he'd fallen into a tub of butter.

09:41 - Saron Yitbarek

A superuser, again, could steal files, could cover up tracks. It was like becoming invisible, capable of getting away with any crime. It would've been easy enough for Stoll to patch the hole and lock this hacker out. That would've been the easy road, but Cliff Stoll had noticed something else. This hacker wasn't just poking around the Berkeley Lab. They were leapfrogging from their network into the MILNET, the network used by the US Department of Defense.

10:12 - Katie Hafner

You could do anything you wanted to any file on the computer, including download something. Really nothing could be protected from a superuser.

10:25 - Saron Yitbarek

So what was this intruder doing with all those military files? Stoll decided it was his job to find out. What's more, he decided it was his job to catch this hacker.

10:46 - Saron Yitbarek

This was a new kind of crime and Cliff Stoll had a hard time convincing anybody they should be worried. If you go read his memoir, The Cuckoo's Egg, you'll be amazed at all the back and forthing he did with the FBI and CIA just trying to get their attention. At one point, he asked his boss what cops are in charge of the ARPANET. His boss said, "Damned if I know." Stoll would have to do it himself. He'd have to lie in wait, learn to identify the intruder and trace them back to wherever they were based. He'd have to catch the invisible intruder himself.

11:25 - Richard Bejtlich

The intrusion took over his life for several weeks.

11:29 - Saron Yitbarek

Richard Bejtlich is a strategist, an author in residence at the security company, Corelight.

11:35 - Richard Bejtlich

I don't think Cliff Stoll knew it at the time, but he was basically inventing the way people investigate intrusions.

11:43 - Saron Yitbarek

Over those first weeks, Stoll set up a system that alerted him via his pager whenever Sventek logged into the lab's computers. Then Stoll would race to turn on his printers and watch the hacker's activity. He was doing a painstaking kind of intrusion detection that today would simply be automated. Each time Sventek showed up, Stoll tried to trace it too. Eventually, he pieced together that the hacker was coming in from overseas. The calls were coming via a satellite called Westar 3. And finally, after many weeks of wrangling with authorities, he had narrowed things down to West Germany.

12:28 - Saron Yitbarek

That's where he hit a major load block. The German phone exchange, which the hacker was being routed through, was built in the 1950s. That meant in order to trace the call, technicians had to test every switch by hand. It would take over an hour. Making things worse, the hacker was still using the Berkeley Lab as their main launch point into US military systems, but they just never stayed on the lab's computers for that long anymore. Stoll had to find some way to keep the hacker busy while the Germans did their work.

13:06 - Richard Bejtlich

And so his girlfriend at the time came up with the idea of providing fake documents that these intruders might be interested in

13:15 - Saron Yitbarek

That girlfriend was Martha Matthews. She told Stoll if the hacker is looking for interesting secrets and seems to be interested in the military, why not just give them a treasure trove?

13:29 - Richard Bejtlich

Every time that they were logging into the network, they were looking for defense-related information. And so Cliff and his girlfriend created all of these fake documents involving something called SDI net, SDI, referring to strategic defense initiative, which was the official name for what a lot of people remember is Star Wars under President Reagan, and they just invented all of these fake documents.

13:50 - Saron Yitbarek

Stoll was creating what we'd call a honey pot, a lure for criminals. He uploaded these reams of fake secrets to the lab system and then he waited.

14:05 - Richard Bejtlich

The hope was that if the intruders found this information, not only would they be interested in it, they would spend hours downloading it. And that's what happened.

14:14 - Saron Yitbarek

At last, the German technicians scrambling away in their 1950s phone exchange were able to trace the hacker to the city of Hanover and then to a single individual, a man called Markus Hess.

14:29 - Katie Hafner

He was in the early generation of hackers who just considered it a challenge to break into computers.

14:40 - Saron Yitbarek

Katie Hafner says that Marcus Hess probably began his attack on the Berkeley Lab without much malicious intent.

14:48 - Katie Hafner

Don't forget that programming is really all about solving puzzles. I think that he thought it was pretty special to see that he could dial into a computer in California. I mean, there you are. You're basically someone in your 20s, you're working for this startup in Hanover. The world feels very small and suddenly the world opens up to you.

15:10 - Saron Yitbarek

It may have begun as a puzzle, but Hess was not alone over in Hanover. He was actually part of a club of hackers.

15:19 - Katie Hafner

They are the ones who brought him into their little hacking ring. They had met up with some Soviet—you know this was back in the 1980s when the Cold War was really in full swing and there was a lot of worry about what could happen with classified information. Don't forget that this was in the era of Star Wars, and so the Soviets would've wanted any information they could get about that.

15:50 - Saron Yitbarek

So Hess found himself hacking for info that could be sold to the Soviets.

15:55 - Katie Hafner

They pulled him into it.

15:58 - Saron Yitbarek

Hess was different from the rest of the hackers though.

16:01 - Katie Hafner

It bears emphasizing, he was a Unix guy.

16:07 - Saron Yitbarek

The other hackers didn't know Unix and this mattered because the Lawrence Berkeley Lab was running on it. So when that hacking ring brought on Marcus Hess, one of the unintended consequences was that somebody was now in a position to break into the very lab where Cliff Stoll had come to work. Six months after Stoll was told about that 75 cent see in his lab's accounting, the German police arrested Hess along with others from that hacking ring. Stoll flew to Germany to testify against him. Hess was found guilty of espionage and given a 20 month suspended sentence. Something vital had been proven.

16:54 - Saron Yitbarek

Cliff Stoll showed the world that sensitive government secrets were vulnerable to computer hacks. A whole landscape of international digital espionage snapped into focus. The FBI, the CIA, every agency was finally paying attention.

17:12 - Katie Hafner

And that's when people well started to get serious about building better defenses.

17:24 - Saron Yitbarek

Today, intrusion detection systems and honey pots, like the one Cliff Stoll made, have become part of everyday security. But we have to remember what a breakthrough these concepts really were.

17:35 - Don Cavender

A friend that was working in cyber recommended it to me, read this book. And I was immediately hooked.

17:45 - Saron Yitbarek

Don Cavender is a retired FBI cyber agent, and he's talking about the book Stoll ended up writing. Stoll's story has helped shape the entire field of security.

17:56 - Don Cavender

It's amazing that his book is still one of the top recommended reads for somebody new coming into cybersecurity, and he had no cybersecurity background whatsoever. The firewall hadn't been invented yet. So there was no perimeter security at all. There was no type of network security at the time.

18:19 - Saron Yitbarek

Stoll had to figure it all out on the fly.

18:24 - Don Cavender

Cliff Stoll not knowing any better, what he did was he let the guy in, he kept him online, he kept the hall open, he monitored everything, worked on tracing things back and would reach outside of the lab. Basically make noise, trying to tell the right people what's going on. He went totally against what everybody else was doing at the time in network security.

18:56 - Saron Yitbarek

But after Stoll's work, the field began to evolve. For one thing, we realized that in a networked world, everybody has to take part in making things secure. Just because you don't think anybody wants what's on your computer doesn't mean you can't be a gateway to something more sensitive.

19:15 - Don Cavender

This is something that can actually happen. If you're vulnerable, you could be used as this jump off point on the way to somewhere else.

19:26 - Saron Yitbarek

Authorities eventually learned that Markus Hess had broken into 400 US military computers. Beyond that awareness of our shared danger though, Stoll also showed that cyber criminals are always going to make use of brand new possibilities, brand new vectors of attack. That means security teams have to be constantly reinventing their jobs. They have to stay creative.

19:53 - Don Cavender

Now we use more sophisticated means to kind of trace back those types of communications, but he used what he had at his disposal at that time, which was a lot of creative thought on his side.

20:08 - Saron Yitbarek

Cavender said he was inspired by Stoll's story, and he wasn't alone. In researching this episode, we heard from many people in security who also read The Cuckoo's Egg and felt called to the world of digital security that people like Stoll were just beginning to uncover. That may be his greatest legacy, not just the technical tricks he thought up, but the philosophy that a single person can use the tools at their disposal to make the world a little more safe.

20:39 - Don Cavender

I'd say there's a whole industry full of unsung heroes out there that will never get recognized that are day to day saving civilization through their efforts.

20:56 - Saron Yitbarek

At the trial in Germany, one of the arrested hackers told the news cameras "At the beginning, I wasn't thinking of anything. I was just sitting there hacking." At another point, Cliff Stoll says when he ran into one of the hackers in the courthouse washroom, the hacker complained to him that his life was being ruined. Stoll could only shake his head. It seemed like none of these guys understood the severity of their actions. Like the horror film character, The Invisible Man, those hackers thought they could snoop and steal without any repercussions, that they would never get caught.

21:33 - Saron Yitbarek

But some of the foundations of our intrusion detection systems were invented by Stoll right as their hacks began. I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. Next episode, it's our season finale. We've got the tale of a little program called SATAN, that's honestly its name. And like the biblical Satan, this particular program managed to create a lot of chaos once it was unleashed. You'll want to hear how that drama plays out. Subscribe, follow wherever you get your podcasts. And until then, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-9/invisible-intruders

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
