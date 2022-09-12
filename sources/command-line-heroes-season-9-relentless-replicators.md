[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 9: Relentless Replicators)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-9/relentless-replicators)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 9: Relentless Replicators
======

### Shownotes

Computer viruses and worms haunt the internet. They worm their way into a system, replicate, and spread again. It’s a simple process—with devastating consequences. But there’s a whole industry of people that rose up to fight back.

Craig Schmugar recalls how he and his team responded to MyDoom, one of the fastest-spreading worms ever. Dr. Nur Zincir-Heywood reveals the inner workings of viruses and worms, and how they draw their names from the world of biology. And security expert Mikko Hypponen shares advice on avoiding malware. But he also warns that we’re in an arms race against malware developers.

### Transcript

00:02 - Saron Yitbarek

It's late one night in 1971. A young engineer is still awake, working away in the computer lab. Her name is Sheila and she loves it there. She's writing code on a PDP-10, that's running the flashy TENEX operating system. The first OS to run email. And she's even connected to the ARPANET. This feels to Sheila like a tech Utopia. A printer at the back of the lab starts spitting something out. Sheila wasn't printing anything. She looks around, still alone, walks over to check the printer and reads the words on the page.

00:50 - Male Voice Actor

I'm the creeper. Catch me if you can.

00:55 - Saron Yitbarek

What was the creeper? Sheila couldn't have known then, but the creeper was moving all over the net, transferring itself into systems via the same ARPANET. Sheila was so excited to be using and printing its ominous message wherever it went. The Creeper was a new kind of malware, a worm, and nobody knew how to stop it. Welcome to season nine of Command Line Heroes, an original podcast from Red Hat.

01:30 - Saron Yitbarek

I'm Saron Yitbarek. I'm a coder, a founder and an entrepreneur. I live and read the stories we tell on Command Line Heroes. And I've definitely worried, like most people about keeping secure in a world full of malware. That's why this season is all about security. We're exploring the epic horror stories that hunt our digital lives. The viruses, the Trojan horses, the botnets. We'll cover lots of things that go bump in the digital night. We're starting with replicants, the viruses and worms that spread like wildfire. All the way back in 1949, mathematician John Von Neumann theorized that self replicating computer programs could be made. But it wasn't until the 1970s that programs like the Creeper proved him right.

02:23 - Saron Yitbarek

An engineer named Bob Thomas made the Creeper, not for any malicious reason, just because he wanted to prove it could be done. Programs could move through networks like the ARPANET multiplying and spreading. In the decade since, replicants have kept on terrorizing us. They can cause billions of dollars in damage. They can take computers hostage, destroy work and run away with our private information. So, was the Creeper ever stopped? You'll find out at the end of this episode. But first we need to learn how viruses and worms began threatening our digital lives and how they pushed us to build better tech. The creeper worm that Bob Thomas unleashed on the world was only a warning shot. Soon, there were some truly malicious replicators crawling through our networks. One of the creepiest arrived in 2004.

03:22 - Craig Schmugar

It was very apparent that this was going to be a significant threat.

03:25 - Saron Yitbarek

Craig Schmugar is a security researcher at McAfee. It's his job to understand threats and come up with countermeasures. And he's been there about 20 years, which means he was there when one of the most epic security dramas began.

03:40 - Craig Schmugar

In 2004, I was the virus research manager. I managed teams in North America and Asia-Pacific.

03:48 - Saron Yitbarek

Schmugar and his teams were ready for any serious virus to show up. This wasn't a 1970s anymore. They even laid some bait and were waiting for the next threat to snap it up.

04:00 - Craig Schmugar

We actually had a honey pot, which was basically a set of mailboxes that had email addresses that were out in the world on the chance that a virus in the wild would pull down one of those addresses and send a copy to it like it would send to anybody else in the world.

04:18 - Saron Yitbarek

And one day something bit. Something big.

04:23 - Craig Schmugar

There was a sense of adrenaline and heightened urgency to respond to this threat as quickly as we could. We immediately prioritized that if we had people looking at it from a code perspective, from a defensive signature perspective-

04:39 - Saron Yitbarek

They'd never seen this virus before. All they knew about it was that it moved fast.

04:45 - Craig Schmugar

The rules in antivirus research are that whoever first discovers the threat gets to choose the name. And while looking at the threat, there was a string in there, M-Y-D-O-M-A-N for my domain and MyDoom was kind of born out of that.

05:04 - Saron Yitbarek

Schmugar named the new virus, MyDoom, a strange bit of malware replicating at an extraordinary rate and doing serious damage as it moved. When activated, MyDoom replicates itself, opens a back door for possible hackers and allows for the installation of a keystroke program to record keyboard activity. That way hackers can harvest passwords and credit card numbers, private information like that, allowing the hackers or their clients to steal cash.

05:38 - Craig Schmugar

At this point, really virtually nobody in the world really knew what the threat was that was going on.

05:44 - Saron Yitbarek

Schmugar sat in the cubicle, coordinating with two coworkers racing against the cock. He didn't know it yet, but he was racing against something much bigger than he'd ever seen before.

05:57 - Craig Schmugar

It's the kind of situation where you don't really think much about eating or drinking.

06:02 - Saron Yitbarek

Phones were ringing. Journalists were calling. It was chaotic, but Schmugar and his team were protected from that. They were kept in quiet until their push was done. As the team looked closely at MyDoom, they found that it was drawing on a lot of past viruses. This wasn't the first one to use email. Its creator had optimized the spread of this virus though. MyDoom was moving at lightning speed and doing its damage before people like Schmugar had a chance to shut it down.

06:35 - Craig Schmugar

It would harvest email addresses from the local system, the address book, and it preyed on the social engineering aspects purporting to be failed email messages, right? A pretty common thing in the day and users were getting notified and they would be curiosity: what was this message? Did they really send it? And that led to the spread of the worm.

06:58 - Saron Yitbarek

MyDoom traveled to hundreds of countries. At its peak in late January 2004, security experts were catching 4.5 million copies every day. Schmugar and his team in Beaverton, Oregon were focused on creating threat descriptions and signatures getting the message out all from a one-story brick building in a small town outside of Portland. Meanwhile, MyDoom had one more surprise in store, a kind of bonus punch on top of all the stolen financial information. It was gathering an army of computers, all controlled by a hacker who used that army to launch a denial-of-service attack against the software giant SCO. To this day, the hacker's motivation is debated. Some believe they were attacking SCO because the company had threatened certain open source communities. As payback, the theory goes, the MyDoom hacker overwhelmed SCO's website with a flood of traffic from their army of infected computers. I should note here, the Linux community for one, has been pretty adamant. They had nothing to do with the attack. But whatever the hacker's intentions were, MyDoom caused a lot of collateral damage along the way. It infected millions of computers and spammed the planet.

08:22 - Saron Yitbarek

By the time it was done, it would cause 38 and a half billion US dollars in damage. It was a couple weeks before security teams reverse engineered the virus and were able to finally block it from spreading further. The MyDoom attack was the largest of its kind in computer history. To this day, it's the most fast spread email worm of all time. Looking back, it's pretty obvious what went so terribly wrong. What allowed MyDoom to spread so fast? It was a lack of security controls. For example, back in 2004, you've got open SMTP relays. And that means-

09:08 - Craig Schmugar

The ability for a piece of code like MyDoom to just reach out to any arbitrary mail server and send a message without any authentication or verification was kind of the Achilles' heel of email at the time.

09:26 - Saron Yitbarek

MyDoom had exposed, in a pretty dramatic way, the vulnerability of not just email, but the web at large. For a brief moment, one in 10 emails anywhere in the world were MyDoom emails. Imagine a hacker able to raise an army of 30 million zombie computers by sending out a simple command. They effectively crashed SCO's website through that denial-of-service attack and forced them to create a new one. Security professionals evolve their services after MyDoom and fast.

10:01 - Craig Schmugar

There's a reason why MyDoom, 17 years later is still recognized as the fastest spreading email worm because the techniques of the day are no longer available. So open SMTP relays today, sending out bomb mail largely requires authentication. You can't just connect to arbitrary remote mail servers to send these messages.

10:22 - Saron Yitbarek

What we're about to discover this season is that security threats always push us to level up our infrastructure. And at the same time, they push the public to gain a little common sense about what emails to trust and not. But we're also going to find that not every bad guy gets caught. SCO actually offered a quarter million dollar bounty to try and find the author of MyDoom. What ended up happening though wasn't a tidy ending. The creator of MyDoom retaliated by sharing their source code. And that code ended up everywhere. It became impossible to trace back to its origins. And so this creator was never found. And the rest of us, we'd been put on notice. Like most people working in tech today, I feel like I've got a basic idea of how a bit of malware like MyDoom could spread. But I wanted to get it clear in my head.

11:26 - Nur Zincir-Heywood

I'm Nur Zincir-Heywood. I'm at Dalhousie university.

11:32 - Saron Yitbarek

We went to Dr. Nur Zincir-Heywood for a little one-on-one on replicators. She teaches cybersecurity courses in Canada and researches security issues too.

11:44 - Nur Zincir-Heywood

So, if there is a virus on our computer, it needs to be there because we run some kind of a program. This could be our document, an Excel file, an attachment to an email. This means we executed it. If we never open it, never touch it, it's going to just sit there. Once it start working, obviously, depending on what this malicious program is coded for, it's going to collect information or try to run other things without our knowledge. Eventually when we copy that word file on a USP disc and give it to a friend, he or she copies it down to their machine, opens it. Now it's replicated and the cycle continues.

12:39 - Saron Yitbarek

So users have to take an action with ordinary viruses. That's what lets them replicate and move from machine to machine. But then there are worms which are a kind of virus, but with the superpower.

12:52 - Nur Zincir-Heywood

Worms don't need the user action. So maybe your friend send you a link and you went and look at that website. HTML has the malicious code already. The fact that you browsed it starts the worm get into your machine. You are not even aware because all you did is browse the website. You don't need to do any execution, any other activation, it's already checking the different applications, how your machine is connected to the internet, what other machines are in the neighborhood. And then it can replicate itself and find the same, what we call the vulnerability on the neighborhood machines and move itself from one machine to another. So in that sense, it is more dangerous because you haven't done any action and you are thinking you are safe. You didn't open something.

13:48 - Saron Yitbarek

MyDoom was a worm, no execution from the user needed. You can imagine how malware like that would amaze people when it first showed up and creep them out. We were used to handling viruses and maybe they were less scary because we knew there was a way to defend against them. But then this new creature emerges from the shadows and it could, well, go viral at unprecedented rates like it had a will of its own. In the age of COVID-19, we've all become very aware of viral possibilities.

14:28 - Nur Zincir-Heywood

If we went to a location that there is someone who is already infected, just being in that location means we have the possibility of getting the same burn, infecting us.

14:43 - Saron Yitbarek

People who work in network management have learned security measures from medical scientists who battle biological viruses.

14:50 - Nur Zincir-Heywood

For example, when there is a problem in a computer network or system, the first thing that we teach our teams is isolate that problem machine. If it's on the internet, unplug it. Why? Because we already know in nature, when we have a cold, doctor tells us, go home, rest, isolate yourself. We as cybersecurity experts actually follow what the other scientists already done and proven that it's the good way of troubleshooting. And I think in this sense, computer science being a relatively newer field than, say, biology helps us because we don't need to recreate the real we can learn from their models and see how we can apply it in our field.

15:44 - Saron Yitbarek

And Zincir-Heywood also feels that as much as cybersecurity folks have learned from real world viruses like COVID, the reverse will be true in the future. Security specialists like her may be able to offer the wisdom they gain from battling worms and viruses to biologists and anyone battling pandemics.

16:04 - Nur Zincir-Heywood

It is very difficult to try all the, maybe different options in the real world and in nature because when you try something, it might end up giving a catastrophic result. You cannot just experiment.

16:22 - Saron Yitbarek

But in the world of zeros and ones, you can experiment. Of course, the stakes in tech are not life or death, but they are big. In the 1970s, when the Creeper showed up, the threat seemed pretty academic. But in 2004, when MyDoom appeared, governments had reason to be scared. The world was more and more dependent on internet connections. And if those same connections made our systems, our infrastructure all vulnerable to attack, we were a lot more vulnerable than we thought. Replicants force us to reinvent our tech landscapes all the time in the same way that COVID reimagine travel, public events and daily life. The emergence of malware replicants has forced us to reimagine the shape of our digital lives. Just like biological viruses keep coming back to haunt us, computer viruses and worms are always going to exist in one shape or another. And the world of cybercrime changes as fast as technology advances. So how has the security landscape evolved in the past few decades to keep up?

17:40 - Mikko Hypponen

I've always tried to defend people's security and privacy.

17:45 - Saron Yitbarek

Mikko Hypponen is the chief research officer at F-Secure, where he spent the last 30 years working to protect the digital world. He began his work in the early nineties just after the field of commercial antivirus products like McAfee and Norton antivirus had emerged. It was the beginning of a new high stake struggle.

18:07 - Mikko Hypponen

When you work with security, we have a different kind of an enemy. We have a very concrete, very real group of people who are fighting us and trying to bypass everything we do and watch our moves and try to make our job harder. The online crime gangs are very concrete and very real enemy.

18:27 - Saron Yitbarek

When internet based spam made viruses into a potential gold mine for criminals, the virus wars of the early 2000s were launched. This was when viruses like MyDoom were really in their prime and Hypponen was getting worked around the clock.

18:43 - Mikko Hypponen

You get woken up in the middle of the night and something big is happening. And we put our minds to it and we tried to crack it and we crack it and we create a fix for it. And we add detection, we test it, we ship the detection and it feels like you've saved the world. And it's really great. And it's excellent until it happens again two days later or two nights later. And then again and again, and after when you've been woken up 15 times over a month, it's no longer exciting or fun.

19:14 - Saron Yitbarek

The virus wars were going to change though. The security landscape was evolving. Companies like F-Secure were setting up research facilities around the globe to provide 24 hour coverage. And the perpetrators, meanwhile, have changed from teenagers playing games to serious crime rings looking to profit off spam or denial-of-service attacks.

19:37 - Mikko Hypponen

We estimate that 98% of the malware samples we see in our labs are coming from organized online crime gangs where the motive is money.

19:46 - Saron Yitbarek

The days when the whole world could be consumed by a single worm are sort of over, though. The virus wars have become more subtle, more targeted.

19:55 - Mikko Hypponen

Today, every now and then we do find a piece of malware, typically, a web worm, which spreads like they used to. I mean, it infects a system and immediately the infected system starts scanning for more vulnerable machines in the network. And when it finds them, it infects them. And when you have outbreaks like these, they are exponential. But that's not very common because that almost always means that it burns out very quickly. If you are after money, you don't want your piece of malware to be the headlines. And that's why modern, organized crime gangs keep the infections and the outbreaks small on purpose.

20:35 - Saron Yitbarek

The really malicious stuff might be so targeted that ordinary users don't hear about it. From Hypponen's perspective, the virus wars have become increasingly sophisticated.

20:46 - Mikko Hypponen

There is an arms race underway and I don't think we're winning this arms race. It's quite clear that the attackers have an upper hand. Whenever someone starts to write a new piece of an exploit or new malware, they can always look at the security systems that are being deployed today. They can go into a shop and buy every single security product. Then they can develop their attack and try it against these defenses and keep changing the attack until it succeeds, bypassing today's technology. It's not an easy war to fight when your enemy has access to your weapons.

21:25 - Saron Yitbarek

That means securities specialists need help from ordinary users. We all have a part to play in the battle against replicators. So we asked, what can each of us do?

21:37 - Mikko Hypponen

Tip number one. Back up your stuff, make it right now, pause this podcast and start a backup right now. Make a backup of your computer, make a backup of your phone, make a backup of your tablet. Then make a backup of those backups. Then make sure the backups of the backups are stored somewhere else. Tip number two, patch, update and patch. Whenever you're prompted, you all, there's a new update, would you like to take it, the answer is yes. Tip number three, passwords. Stop using passwords. Start using password managers.

22:13 - Saron Yitbarek

These are great tips. They're easy. It's really basic digital hygiene. Reminds me of the simple things we can do to stop a biological virus from spreading. Wash your hands, wear a mask. And just like with COVID, defending yourself from computer viruses and worms is a way to protect the larger community too. Okay, I promised to tell you about the fate of the Creeper worm. Whatever happened back in 1971. Well, a fix was created by Ray Tomlinson, the same pioneer who created the first email system on the ARPANET. Reaper, as he called it, was the first piece of antivirus software. It traveled through the network, just like Creeper did, deleting the Creeper worm everywhere it lurked.

23:04 - Saron Yitbarek

It's a great example of how the same tech that causes a problem often can be used to solve it. The world of security is one big arms race and tech keeps opening new avenues for attack along with brilliant new solutions. All season, we're learning some of the greatest horror stories from the history of tech security. And more importantly, we're going to see what we can learn from them going forward. Think back to the MyDoom story. It wasn't some totally new threat. It was a new arrangement of past techniques. So many security breaches are really just a bit of recycling.

23:45 - Craig Schmugar

One lesson, maybe the biggest, is just not to downplay or underestimate techniques of the past.

23:54 - Saron Yitbarek

Let's keep that in mind as we continue with season nine. These are moves in a never ending game of cat and mouse. We need to learn about these past security crises so that we can secure our future. I'm Saron Yitbarek. And this is Command Line Heroes, an original podcast from Red Hat. Next time we're moving on to another form of malicious malware, the devious Trojan horse. Subscribe, wherever you get your podcast and you won't miss an episode. Until then, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-9/relentless-replicators

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
