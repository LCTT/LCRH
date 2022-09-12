[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 9: Terrifying Trojans)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-9/terrifying-trojans)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 9: Terrifying Trojans
======

### Shownotes

Sometimes a fun game, a friendly email, or an innocuous link can be the most convenient place for an enemy to hide. And its prey is none the wiser—until it strikes. The trojan horse uses many layers of deception to do damage. The ingenuity of these attacks keeps an alarming pace with the technology we use every day. But as long as we stick to trusted sites and sources, we can better the odds against those who use our trusting nature against us.

Steve Weisman tells us about how trojans still keep security professionals on the defensive. Josephine Wolff details how these attacks have evolved, and keep evolving, to catch victims off guard. And Yanick Franantonio takes on the new frontier for trojan attacks.

### Transcript

00:04 - Saron Yitbarek

You are at base camp in the middle of a bleak stretch of Antarctica, many miles away from any form of civilization. You're there with a team. You've been there for months. You all know each other pretty well, trust one another. You have to in a remote environment like this. But one night you hear your sled team barking. You go to investigate. The dogs are agitated, growling, and snarling, and you're not sure why. The next morning doors and windows were left open letting snow in, and no one can explain it. Your team is on edge.

00:54 - Saron Yitbarek

They're questioning each other, pointing fingers. And then you notice a colleague you thought you could trust with your life, he looks more or less the same, but he's not himself anymore. You might remember the '80s movie, The Thing. An evil alien is lurking among the ice fields of Antarctica and it has the power to take the shape of humans. The thing can commit all kinds of evil just by capitalizing on our basic belief that familiar things won't do us harm. Of course, a trick like that can play out in real life, too.

01:38 - Saron Yitbarek

Happens online all the time. This season, we're exploring the horror stories that haunt our digital lives, the malware, the hacks, the identity theft that keeps security heroes awake at night. And this time we're looking at Trojan horses, the cyber attacks that depend on human behavior. Our want and need to trust. I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat.

02:11 - Saron Yitbarek

I'm definitely weary of emails asking me to do something like confirm my password, but even people who should know better can fall for these scams. We're going to figure out exactly how hackers capitalize on human psychology to make that happen and how and why it can lead to so much destruction. Last time, we learned about viruses and worms, where the goal is rapid far reaching attacks, but the focus of a Trojan isn't speed or reach. It's access. Think about the original Trojan horse. A team of Greek soldiers spills out of a giant wooden horse that the Trojans thought was a gift.

02:55 - Saron Yitbarek

A Trojan horse attack is going to roll right up to your front door and announce itself. It could be a fun game, a friendly email, a tempting bit of click bait. The most appealing, familiar things are offered up. And it's only once we let down our defenses and invite them in that we realize they're harboring an enemy. Once inside a device, Trojans can steal identities, capture keystrokes on banking sites, disable antivirus software, even allow your computer to become a zombie soldier in some hackers botnet.

03:32 - Saron Yitbarek

Some get to work automatically, and others wait patiently for instructions from their creator. What they all have in common is that element of trust. And as we're about to find out, trust can be a powerful and a very dangerous thing.

03:53 - Steve Weisman

Things aren't as bad as you think. They are far worse. The more you know, the more scared you get.

03:59 - Saron Yitbarek

Steve Weisman teaches students at Bentley University about white collar crime with a focus on cyber crimes and identity theft. From his perspective, those in security software are in a difficult situation. Trojans keep evolving to match every new technology. Security teams have no choice but to respond on the fly.

04:21 - Steve Weisman

They are always playing catch up.

04:23 - Saron Yitbarek

But there is something universal, something constant about Trojan attacks and that's the fact that they all take advantage of human trust and they do that by using social engineering.

04:37 - Saron Yitbarek

Social engineering is using information that can be obtained in all kinds of places to lure someone into doing something. So if I get an email that says, "Send me your username and password for your bank," well, I'm not going to trust that. However, if I get one that appears to come from my bank, so they leverage personal information to get you to trust them. Social engineering just is good, old fashion digging, getting information and using that to get people to trust them. And my motto, trust me, you can't trust anyone.

05:17 - Saron Yitbarek

Bit harsh, but point taken. Human trust is the math ingredient, but how does that play out in the real world? What level of damage can a little social engineering really do?

05:30 - Steve Weisman

When Zeus first came out, people weren't thinking of security and defense that much.

05:36 - Saron Yitbarek

Zeus was a Trojan horse, one of the very first Trojan malware packages. And by 2009, it was a pretty prominent security problem. The thing about 2009, as Weisman just said, is that it was a slightly more naive time. Most people weren't on social media, online banking and even email were new concepts for many.

05:58 - Steve Weisman

People didn't see it coming.

06:00 - Saron Yitbarek

So imagine in that more innocent time, you open your laptop and see an email, a message from a federal tax authority say, looks legit. And the subject line reads "Notice of underreported income," that can't be right. Can it? You better check. And that's it. You clicked on the link in that email and a Trojan entered your computer. Now it waits there totally unnoticed. You don't even know you've been attacked, but next time you hop on a banking website, Zeus records the keystrokes of your login and password.

06:41 - Saron Yitbarek

The stolen info is then shuttled back to the hacker who can tap into your bank account. Money gets funneled to so-called money mules who move the cash around and the rest is your basic crime world shenanigans. Back in 2009, the tech world was not ready for Zeus. $70 million were stolen before software was developed to combat it. And there's no big courthouse conclusion to the story of Zeus. The creator was never found. In fact, whoever they are, they open sourced their code allowing others to adapt it and make their own Trojan malware.

07:20 - Steve Weisman

That basic Zeus code that he provided to everyone, we had defenses on that. But by providing that code, he sort of had the house half built. So other cyber criminals could use that valuable information to develop and evolve newer versions and that's what we have seen.

07:42 - Saron Yitbarek

Tens of millions of PCs were ultimately infected with some form of Zeus and the Trojan technique capitalizing on basic human trust to gain entry into a computer became a mainstay of cyber crime.

07:55 - Steve Weisman

This was something that should have been a wake up for many people and for many it was, but not enough.

08:03 - Saron Yitbarek

The world was growing more connected and along the way, we became used to updating passwords and confirming contact details whenever prompted. Just getting through the day meant putting trust in the entities that reached out to us. And we rarely stopped to wonder who was behind that random email who had taken the form of a trusted friend. That was good news for malicious hackers.

08:39 - Josephine Wolff

A lot of the times, the only clues you have to go on are what's the logo, what's the name, what does the website look like where I'm downloading this from.

08:47 - Saron Yitbarek

Josephine Wolff is an associate professor of cybersecurity policy at the Fletcher School at Tufts University. She describes a world where Trojan attacks are part of a larger arsenal that criminals use, a way to leapfrog pass security innovations.

09:04 - Josephine Wolff

The goal is to make you trust or want it enough that you're willing to sort of go to the trouble of saying, Yeah, I know this was just something I download from the internet and my operating system manufacturer hasn't vetted it and I don't know exactly where it's coming from, but I still really want it.

09:22 - Saron Yitbarek

Security specialists can build all kinds of safeguards into systems. But if a user really wants to believe they have, say, inherited $60 million, just click here. Or, caught the eye of someone who'd like to go on a date with you, open and see, they might go ahead and follow those prompts.

09:40 - Josephine Wolff

That's the goal is to get that initial foothold in a targeted system and circumvent all of the layers of protection that we've built up to try and make that harder to do.

09:51 - Saron Yitbarek

In a world where personal information is often available for anybody to collect online, that means Trojans aren't always generic. Advertisers have learned to personalize and nano target their messages to your specific profile. The creators of Trojans can do the same.

10:10 - Josephine Wolff

I think that's sort of the scariest and most effective form of Trojan attacks is to see somebody who's willing to take the time to figure out okay, who exactly would be a person you would expect to see an email from? Who's a person who you wouldn't be able to sort of just ignore or say maybe this is something suspicious?

10:29 - Saron Yitbarek

The goal with these targeted Trojans is, of course, to offer you something so appealing so designed to meet your personal needs, that any lessons you know about digital hygiene just sort of fade. And because we're all human, anybody can be tempted.

10:45 - Josephine Wolff

This past year while I was at home, I taught a zoom class and I'm going through my email inbox and I see there's a message there from a colleague at Tufts saying, "If you've experienced any hardship this year due to the pandemic, Tufts University has applied for some funds to support any relief efforts among faculty and staff. You can click here to apply for it."

11:11 - Saron Yitbarek

Think how targeted that is. It's an email supposedly from one of Wolff's colleagues and it's offering her money, but not in a bonkers, you won the lottery way. It's a really believable way, funding for hardship during the pandemic. It's a very carefully designed promise.

11:29 - Josephine Wolff

People could very easily fall for it. It was reasonably official looking in its formatting in its style. It was a moment when that was a real thing that was happening. Workplaces were offering relief funds of this nature. People try to take advantage of particular moments, particular current events, particular employers, and access to accounts to install Trojan malware, and gain access to computers and accounts.

11:53 - Saron Yitbarek

Did Wolff who specializes in this stuff fall for it?

11:58 - Josephine Wolff

So I was curious enough to click through to the phishing website that the email linked to. And once you do that, you do get some other clues. You can see, okay, what domain is hosting this website? Is this really a Tufts University website? Things like that. I would say one of the things that was interesting about it was a lot of the times when we talk about this kind of email message, it comes from a slightly wrong email address. Instead of somebody's name @tufts.edu, it will come from like somebody's name @tufts.ed or T-U-F-T.ed or something that's a little bit wrong.

12:35 - Saron Yitbarek

That's the number one giveaway for most of us, isn't it? An email address that's just slightly off, maybe only one letter difference.

12:44 - Josephine Wolff

One of the things that was, I think, really scary about this particular incident was that wasn't the case. It really was coming from a tufts.edu email address, but there was definitely a fair bit of work and effort that had gone into formulating it. So there weren't as many obvious clues as you would hope. There weren't as many of the clues that we sometimes tell people you should look for this when you're reading your email.

13:07 - Saron Yitbarek

The level of care and even cynicism that is needed to avoid these deceptions can sometimes feel over the top. We don't like to treat everything as a potential scam. We don't like to assume every new encounter is a con and largely that's because for most of us, we don't think we have anything on our computers worth stealing. Why wouldn't an elaborate Trojan attack happen to me? It just feels paranoid.

13:34 - Josephine Wolff

This is a fight I have, say, with my parents all the time. They say, "What's interesting in my email? Who would possibly bother?" And sort of that psychology is actually a huge hurdle for people who are trying to get users to take cybersecurity seriously, and I think there are a couple things that are really important to keep in mind in response to that. One is that it is not just about protecting yourself. Your computers, your accounts are often an intermediate point for attacking other victims.

14:04 - Saron Yitbarek

Wolff works at a university, for example, and universities are favorite targets for cyber criminals. Not because they want Dr. Wolff's personal lecture notes, but because universities communicate with governments and private companies.

14:18 - Josephine Wolff

And it will look like that traffic is coming from a place that that company or that government communicates with all the time, a place that can be trusted. So the first thing I'd say is really when we're talking about security, we're not just talking about, do you care about your data? Do you want to protect it? We're talking about do you want to be a good citizen? Do you want to be sort of somebody who's contributing to the overall security of the internet at large and the security of everybody else who's using it, not just you?

14:47 - Saron Yitbarek

Even if you don't care about being a good citizen, you probably have more to protect than you think.

14:53 - Josephine Wolff

Probably, you do some online banking. Probably, your payroll is operated through a website and an online account. Probably, you manage important functions in your life through websites and all of that is vulnerable.

15:11 - Saron Yitbarek

So there are two things here. First, a lot of people don't take security seriously, leaving them open to malware like Trojans. And second, those same people are importing more and more of their lives into digital spaces where Trojans work. Maybe most importantly, our financial lives have moved online.

15:33 - Josephine Wolff

As there's more money changing hands over the internet, then there's perhaps inevitably much more interest in how do you steal that money and how do you steal all of the information that can be turned into money in that space.

15:47 - Saron Yitbarek

We're not just talking about phishing emails anymore. Trojans evolving to meet the moment. Steve Weisman mentioned a new avenue for Trojan attacks that frankly have me a little freaked.

15:59 - Steve Weisman

There have been some banking Trojans that have infected apps, legitimate apps. We always tell people, only get your apps from the legitimate stores, but even when you get your app from the legitimate store, it can still be infected.

16:16 - Saron Yitbarek

That made me wonder, what is the new frontier of Trojan horses? This con, as old as the ancient Greeks, what shape does that wooden horse take today?

16:33 - Yanick Fratantonio

Humans historically have not been the best partners of themselves. The root of many problems start from there.

16:41 - Saron Yitbarek

Yanick Fratantonio is a senior security researcher at Cisco Talos. Before joining Cisco, he spent years in academia researching Android security. He taught a course that focused on mobile security, one of the first, and that gives him a unique perspective. He sees how new tech is often a space where we are naive, where we might not be thinking about security issues. For example, all the apps we keep downloading onto our phones, each one is a potential Trojan if we aren't careful.

17:15 - Saron Yitbarek

We've made things safer by centralizing app delivery through app stores that try to block bad actors, but it's still possible for Trojans to get through. You've probably had the experience of looking for an app and then wondering "There are a few similar ones here, which one is the real one?"

17:34 - Yanick Fratantonio

This stuff can still happen. I think maybe three or four years ago that you would look for WhatsApp and you get tons of results with many apps that looks like WhatsApp with the same icon and so forth. And of course, many of these, there were not maybe malware but was adware or tons advertisements and so forth. But this gives you an idea that even if there is a central store and Google and Apple check for this stuff, of course there are techniques to sneak in.

18:02 - Saron Yitbarek

More than just an app's thumbnail can be faked, of course. An entire shadow UI is sometimes developed, a fully developed fake version of an app that you trust. Fratantonio has found two different versions of this trick.

18:17 - Yanick Fratantonio

One, we'll say traditional phishing, where basically I show you something and this UI looks like the bank application or your Facebook application, but it's not. It's actually a malicious app like somehow mimicking the UI of Facebook and the user would be lured into putting username and password, and I will steal the password like this.

18:37 - Saron Yitbarek

The second type of trick is something Fratantonio calls click- jacking.

18:42 - Yanick Fratantonio

If you place this fake OK button exactly on top of where you want the user to click, then this click is now going to go through the OK button, go in the bottom and the bottom maybe it’s enabled this permission.

18:55 - Saron Yitbarek

In other words, the malware is hijacking your click. You thought you were clicking okay to one thing, but you've just granted access to maybe your contact list. Whenever we use apps, we're inviting new software and sometimes malware into our lives. And think of the kinds of permissions we give to our apps.

19:17 - Voice Actor

Can I have access to your camera? How about your email? Hey, mind if I track your location?

19:21 - Saron Yitbarek

We can mitigate that risk, though, by not giving blanket permissions.

19:26 - Yanick Fratantonio

Now we switched to a run time permission model, which means that a front time after you stole the app, after you can use the app a bit, they ask you, "Hey, can I please have this permission?"

19:36 - Saron Yitbarek

But remember criminals are always looking for ways to work around new limitations.

19:41 - Yanick Fratantonio

The bad guy switched to try to find a context that somehow legitimized their request.

19:48 - Saron Yitbarek

In the same way that email Trojans began getting personal details about the user, a Trojan app can be custom made to request the permissions that are desired.

19:58 - Yanick Fratantonio

For example, if the bad guy wants to get my voice and wants to record my voice, what would the bad guy do? Some kind of adding a fake voice recording application. And once he asks me for the voice permission, I'm going to give it to it.

20:13 - Saron Yitbarek

Fratantonio feels that for most people keeping track of your permissions is a key way to guard against Trojans in the app space. Attacks that circumvent permissions are incredibly expensive and are more likely to target specific state sponsored actions against particular people.

20:30 - Yanick Fratantonio

I'm talking about journalists, activists and things like this.

20:34 - Saron Yitbarek

Most of us can take comfort in the fact that bypassing security mechanisms on our phones has become much harder to do in even the last 10 years, especially with constant security updates. Still, every user has a responsibility to be skeptical about the apps they're using.

20:53 - Yanick Fratantonio

The biggest thing is not to store random apps from the store. That's stupid advice in a sense that people have these phones because they want to store random apps from the store. So, I guess the followup on this is if you really, really, really, really want random apps from the store, try to be reasonable in a sense of try to have a reality check on what you're asked to do.

21:17 - Saron Yitbarek

Every new form of communication has a custom designed Trojan of its very own, and you are the final gatekeeper.

21:31 - Saron Yitbarek

So how did those poor guys in Antarctica ever survive The Thing? They didn't just hope it stopped taking over their team members. They devised a test. They found a way to check everybody who looked human until they found an alien imposter. That's exactly how we defend ourselves against Trojans. We stop acting with blind trust and start looking deeper at the entities that reach out to us online. Because here's the thing, these cons, these Trojan horses, they need your permission before they can do their evil deeds.

22:11 - Saron Yitbarek

There might not always be a magic bullet to take them down, but a little personal responsibility and common sense goes a long way.

22:21 - Voice Actor

Hey, it's me. Check out this awesome link.

22:25 - Saron Yitbarek

Nope. I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. Next time, we're exploring another nefarious bit of software, the logic bomb. To make sure you never miss an episode, subscribe, follow wherever you get your podcasts. Until then, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-9/terrifying-trojans

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
