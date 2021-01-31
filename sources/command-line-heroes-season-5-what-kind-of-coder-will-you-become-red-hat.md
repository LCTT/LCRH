[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 5: What Kind of Coder Will You Become? - Red Hat)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-5/what-kind-of-coder-will-you-become)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 5: What Kind of Coder Will You Become? - Red Hat
======
**00:01** - _Saron Yitbarek_

Hello, welcome to Command Line Heroes, an original podcast from Red Hat. This is the final episode of our special mini-season all about our jobs as developers, sys admins, architects, engineers, and programmers. In this episode, we're going to talk about the issues surrounding the question: “What kind of coder will you become?” I'm your host Saron Yitbarek, and joining me is our featured guest, Clive Thompson. He's a journalist, technology writer, and author of the book Coders. Hi Clive.

**00:35** - _Clive Thompson_

Hi Saron. Thanks for having me back.

**00:37** - _Saron Yitbarek_

Thanks for joining us, Clive. Last summer, Twitter was buzzing about a particular topic, a particular type of coder. It started with a tweet from an investor, and it quickly went viral. In short, it encouraged founders to hire a rare breed of coder as soon as possible to increase their startup’s chances of success. These coders have a special designation: “10X.” The response to the tweet was...not great. Here's just a taste:

**01:09** - _Brianna Wu_

One of my very best friends, she was texting this to me, "Can you even believe this guy right here?" It just had the worst stereotypes about engineers that exist in the startup space. And the thing is, I've worked with these prima donnas; I'm sure you've worked with these prima donnas.

**01:28** - _Bonnie Eisenman_

When someone says “10X coder,” there's either one of two things going on. The first possibility is that they mean it as a euphemism for brilliant \*\*\*hole. And the second is that it means that they're trying to hire someone, they think they should be hiring a 10X coder, but they don't actually know what they're looking for.

**01:48** - _Saron Yitbarek_

So what is a 10X coder anyway? And should new coders aspire to be one? And if you are one, does that justify bad behavior? Turns out there's a whole history around this topic. So Clive, what exactly is a 10X coder?

**02:04** - _Clive Thompson_

Well, as the name suggests, it's a coder who is 10 times better, more productive, more creative, however you want to measure that. They are 10 times better than the average coder sitting alongside them, right? They're this sort of super person who can execute things faster, write better code, more code, ship it more quickly, have better ideas, just like, essentially, a sort of super-powered creature—that is the theory behind the 10X coder.

**02:39** - _Saron Yitbarek_

The whole idea of a 10X coder has never really made sense to me, because it's such a specific number, 10X. You are 10 times better than the average coder. How could you possibly measure that? How would you even know if anyone is 5 times, 10, 100 times better than the average coder? What does that even mean?

**02:58** - _Clive Thompson_

Well, it's funny that there's this number attached because it sort of cracks me up. Every field has this idea that there's someone who is just way better than others. They have that idea in music and entertainment, they're sort of the star, they have that in every discipline, but in coding they put a number on it. It's data-driven, and they love to quantify things. But in this case, there's actually kind of a history behind that number, there's a reason why it's 10. It actually goes back to the 1960s. In the early days of coding, no one was really sure what it meant to do this for a living, and no one was really sure what productivity kind of looked like. They had some sense that some people seemed to be better at it than others, and they couldn't really figure out why.

**03:44** - _Clive Thompson_

And so this one guy, Hal Sackman, decided to do a study where he was trying to answer a question: “Do coders prefer to work in an online system or an offline?” And what online and offline meant back then was, offline meant kind of working where you wrote your code on punch cards, and then handed it to a punch card operator, and they fed it in, and then three hours later, you found out whether or not your code worked, right? Online meant you could sit in front of a screen and a keyboard, and you could type, and you could execute your code right away, a more modern way of coding, that's the way we code today. But online coding was really expensive, because those computers were really expensive. Are people so much more productive that it's worth spending the money on these expensive online computers?

**04:32** - _Clive Thompson_

So Hal Sackman said: "Okay, I'm going to give a bunch of coders the same task in online versus offline, and I'm going to see how well they do." But he discovered something so remarkable to him that he sort of focused on it. The people who were doing this test, there was a subset of them that were way better than everyone else. Like, the delta between the really good and the really bad is massive. Sometimes people were 20 times faster at solving a bug than other people. Sometimes they were 16 times faster at writing a piece of code. It's kind of like there's this order of magnitude difference between the really great performers and the really bad ones and that was the beginning of the 10X mythology that people who are really good at coding are rare, and they are 10 times better than everyone else. From there on, the myth sort of grew until it is what we have today.

**05:28** - _Greg Sadetsky_

Am I comfortable announcing on the air that I am part of that? Maybe if you grill me a little bit more, but right now I'm feeling a tiny bit shy to say it out loud.

**05:41** - _Saron Yitbarek_

Greg Sadetsky has been labeled a 10X coder. He founded a company called Poly9. He received one of the highest civilian awards from the U.S. Coast Guard for creating a map that helped rescue 1,700 people during Hurricane Harvey.

**05:58** - _Greg Sadetsky_

A pro player in whatever sports is undeniably extremely much better than average, you know, somebody who plays sports or who is just starting out. So as in other fields, it's the same in software engineering, and I definitely can vouch for the fact that they exist. If you have a startup, and you know that you need to be on the market in a month, the supply of people that can do the work in that amount of time, and bring you where you want to be, is smaller than the supply of people who can do the same work in three months or a year. So there's just less people who can achieve these things.

**06:41** - _Saron Yitbarek_

So Clive, there's the pretty famous book, The Mythical Man-Month, that came out in 1975. How did the idea of the 10X coder get further entrenched with that book?

**06:52** - _Clive Thompson_

Well, in that book, Fred Brooks was thinking about the art of managing software projects. There was this paradox in software development whereby if a project had, like, 20 people working on it, and it was really late in any other industry, like, say you're building a building or digging a ditch or building a fence, the way you move faster is you hire more people so that more hands can just get that done faster. But in software, often the opposite happened. If you had 20 people working on the project, and it was late, and you added 10 more people, the project slowed down. Why is that? Well, part of it is that there is a lot of communication that's involved in software projects, and so the more people you add, the more communication there is and you sort of get bogged down in organization.

**07:44** - _Clive Thompson_

But he also reiterated this idea that there was a handful of people that were just better at this than everyone else. And so he's, like, "Look, if you had like a huge team of 200 people and 25 of them are doing most of the work, then just get rid of the other 175 and just have your 25 superstars and everything's going to happen faster." It, sort of, so flattered the fantasy that a lot of software developers have that they are the 10X person, right? That they are the sort of Colossus who bestrides the world like a giant with all these ants scurrying between their legs. It definitely is a lesson that a lot of people quote from, and every time someone came along, this mythology just got more and more cemented in place.

**08:28** - _Bonnie Eisenman_

In terms of where the myth comes from, it's from people who would build tools that were wildly successful and they would build them on their own—and then would sometimes be very aggressive and actually harass people who tried to contribute.

**08:44** - _Saron Yitbarek_

Bonnie Eisenman is a software engineer at Twitter and author of “Learning React Native.” She thinks that the tech community mythologizes the 10X coder, and makes excuses for them.

**08:56** - _Bonnie Eisenman_

I think there's always going to be a place within startups for someone who can build a proof of concept really quickly. When you're working at a startup, the thing that you need to do is really quickly build something, get it to market, see if it works, see if it sticks, see if you can raise funding. So I think that we don't need 10Xers exactly. In order to do that, we need people who are able to produce really quickly while still being decent human beings.

**09:22** - _Saron Yitbarek_

So 10Xers are glorified by many people in the tech industry, but specifically by venture capitalists. Why is that?

**09:29** - _Clive Thompson_

Well, from a venture capitalist point of view, what are they doing? They are trying to find a small new company that they think is going to produce a product that is just going to become absolutely massive, and they also want it to move incredibly quickly so it beats everyone else. First to market dominates. So that tends to gravitate towards wanting a team that is very small so that it can iterate quickly, and also a team that can sort of do everything, you know, soup to nuts—the whole stack. When I was talking to Marc Andreessen who really believes in 10X, he says it might even be a 1000X, right? He says: "Look at these really big pioneering pieces of software that changed the arc of the entire industry. You know, Photoshop, Doom and Quake, the original video games, the original Netscape team, Microsoft BASIC."

**10:23** - _Clive Thompson_

Very often you're talking about two to, like, three or four people. And he goes: "That's because there's a type of magic that those highly productive people can do when everyone else just gets out of the way, and they can build that crystal palace in their mind." So that's why venture capitalists really love it, because there's a reality, and there's also a great myth that makes for a really good story, too, because they have to take this dog-and-pony show and sell it to other investors. It's really mythologically and narratively great to be able to say, "Here is the brilliant software king who did all this. Here is Max Levchin who single-handedly coded PayPal into existence,” which he really did; he actually created that prototype. He had spent years and years banging away on mobile software and crypto and payment software, and so he just willed that into existence by himself, the first prototype. So the stories really do exist, but they're enormously marketable and mythic for a venture capitalist.

**11:26** - _Saron Yitbarek_

Venture capitalists might love 10Xers, but it's a different story when you have to work with one.

**11:31** - _Saron Yitbarek_

I do think that it is not necessarily the case that one is born a Rick, and lives a Rick, and dies a Rick. I think it is more the case that under different kinds of pressure, people are pushed into different kinds of corners. And for some people, I think particularly people that have achieved a lot of success in the past on their own initiative and through their own work and without relying on other people when things get really tough, you need a community to support you.

**12:01** - _Saron Yitbarek_

Jonathan Solórzano-Hamilton is a Senior Site Reliability Engineering Manager at Procore Technologies. Years ago, before he worked at Procore, he worked with a man he nicknamed Rick. Rick was a 10X coder, and he was a problem.

**12:17** - _Jonathan Solórzano-Hamilton_

Every week there was a new surprise reason why he hadn't achieved his deadline or hadn't met his quote over bugs closed, or whatnot, that he had agreed to, and it was always the result of somebody else failing to do something that they didn't even know they were expected to do. There was a very, very large portion of the code base to which Rick was the sole contributor. So there was no code review process, it was just Rick pushing up into master if you will, time and again, without any other eyes on that.

**12:47** - _Jonathan Solórzano-Hamilton_

So the initial commitment that we made was to take two of our most senior engineers and put them side by side with him while he was doing his work, just shadowing and pairing and asking questions. The other developers would report to us, "Well, I came in and I sat down to pair with him, but he had come into work three hours early today and just did the bug fix before I even got in, and then he didn't want to go back and revisit it with me because he said it would take too long to get us up to speed."

**13:15** - _Jonathan Solórzano-Hamilton_

And so we started to take a little bit more of an assertive approach of what if instead, we task them with being sort of the first point of contact and being the owners for different parts of the code base that he currently is the sole owner of. And then the request for changes, or bug fixes, or whatnot would have to go through them first, and then they could escalate to him as needed, but that didn't succeed either. When another developer released a fix to a part of the code that had been broken and causing major problems, he went into the code base and actually reverted that fix because he was pretty angry they had the audacity to touch a part of the code base that hadn't been officially given to them. The real tipping point was the crushing morale problem that his presence made on the rest of the team. The more we tried to get them involved in helping him, the more belligerent and intransigent he became, and it was really a vicious cycle.

**14:14** - _Saron Yitbarek_

The product got so delayed that the company eventually fired Rick. After that, team culture improved. The product shipped in six months with very little of Rick's original code left in it, and it was a success. Here's Bonnie Eisenman again, Software Engineer at Twitter.

**14:32** - _Bonnie Eisenman_

I've seen the sort of wreckage left behind from them. I've seen teams where they think they have a 10Xer on their team. So literally everyone else on the team is just clammed up and frozen and feels like they can't put forth any creative output, which really sucks to observe because you have all these other people who are basically not being mentored and not being grown into better engineers.

**14:53** - _Saron Yitbarek_

So Clive. you talked to a lot of coders for your book. What's the consensus about 10X coders? Are they a necessary evil, or an unnecessary appendage from those old days of coding?

**15:05** - _Clive Thompson_

I've found that people are very divided about this question of 10X coders. There is a chunk of people who strongly believe it's true that a minority of coders are wildly more productive and creative than the others, and that everything should be done to hire them and give them as much work as you can. And there was another cohort that thinks that is absolute nonsense and that this is just a bunch of Ricks, right? You know, people who are talented, yes, but just so belligerent and terrible and full of themselves that it destroys morale for the rest of the company. It creates bad code because they're writing a ton of stuff that no one else has set eyes on. There's also the point of view, which I think is true even for people that call themselves 10X coders, which is that there'll be like, "Look, I'm amazing and I generate a ton of stuff and I get the prototype done. But you know, it's going to be a bit of a mess because I'm just working so fast and so intensely."

**16:04** - _Clive Thompson_

Max Whitney, she's been working for 20 years in all sorts of companies. She says: "They're just great at generating technical debt for everyone else to clean up." Yes, they sling a ton of code, but you're going to spend years fixing the mess. I think what I've found is that people are really at a point in time when they are very divided about this myth, and whether or not it's worth accommodating people who conform to that myth.

**16:31** - _Saron Yitbarek_

So for managers who do end up hiring 10X coders, what can they do to keep them in check and get the most value out of them?

**16:39** - _Clive Thompson_

If you have someone who really is genuinely talented in that Max Levchin like way, where they're really good, they've done their 10,000 hours and more, they think deeply about the stack. There's two things you want to do, you want to keep them in check, and you want to maybe also take advantage of what they're great at and make that really fantastic for the rest of the company. Some of that is just good management, it's not tolerating \*\*\*hole behavior in your company. Setting that standard up high, and making sure that it applies to everyone, even the 10Xers. The second thing is making sure that they don't get locked in a box where they're just producing stuff and no one else knows what's going on. So code review, pair programming, all that stuff.

**17:27** - _Clive Thompson_

Now the other side of the equation, which is like, okay, if you've got someone who's really productive, can you maximize what's good about them? In the smartest companies, what they look for is not just someone who's 10X in their technical capability, but 10X in their social capability, which is to say they are not just great at writing their own code, but they're great at helping everyone else write the best code, too. And these are, like, what you could really call the real 10Xers, the people who are masterful in writing code and thinking about the stack and are masterful at helping junior developers develop, at unblocking other people, and very often I heard stories from companies that they had someone who was just absolutely fantastic in that way.

**18:13** - _Clive Thompson_

They were great at doing the work, and they were incredibly generous and amazing at working with other people. And they would say to me that, like, "Sure, I'm getting, like, 1000 hours of work out of 10 hours of this person's coding time. But when they talk to, like, 10 other developers, I get 10,000 hours out of them, because those people go back in their own block, and they know more.” Those are the people that are the real, true 10Xers—that are enormously valuable, and those are the ones that companies ought to be trying to find.

**18:44** - _Saron Yitbarek_

Greg Sadetsky.

**18:45** - _Greg Sadetsky_

I'll never defend anybody who's being a jerk regardless of their brilliance or absence of brilliance. Is that related to specifically 10Xers and software? I'll play the role of the optimist. I think that the most beautiful and proper definition of somebody who's truly good, and an inspiration, and somebody who's this leader that also is defining new things, inventing new things, creating things that were not possible before—a part of that definition needs to include that they are also a human with empathy.

**19:29** - _Saron Yitbarek_

Remember when Jonathan's team fired the 10Xer he called Rick? Here's what happened within the company after that.

**19:36** - _Jonathan Solórzano-Hamilton_

Under Rick's regime, anytime somebody would speak up and say, "Hey, I think we could solve it this way," the feedback was biting and cruel and swift, that they really shouldn't even bother speaking up at all. It took a little time for people to come out of their shells a bit, and realize that it was actually safe to start talking about solving the problems collaboratively again. But the team started having big planning meetings, and multiple days of just bantering and sharing ideas and putting things up on the whiteboard and taking them down, and that willingness to be open and communicate and share one's ideas was probably the biggest factor in kind of turning it around. Then people started to feel more comfortable, more healthily confronting each other with different ideas or opinions, or being able to hash things out in a constructive and positive way, with the understanding that respect for each other underlaid every disagreement.

**20:38** - _Saron Yitbarek_

Clive, what's the opposite of a 10Xer?

**20:41** - _Clive Thompson_

Well, the joke is it's a 1Xer, right? It's someone who works at exactly the pace of a normal developer. But I think if you wanted to be more clear, people who told me proudly that I'm not a 10Xer I'm a 1Xer, I think their attributes are often that they're the person that is actually the sort of careful, thoughtful developer, who instead of just thinking they can sort of accomplish this all in one sudden romantic evening of bashing out a prototype, is, like, "No, no, I want this thing to work and to scale and to be reliable. I want my code to be readable by other people because they know that coding is a team sport." And so they are working much more patiently and carefully. They are talking all the time to everyone else on their team.

**21:28** - _Clive Thompson_

So everyone knows what everyone else is doing when they write the code, it's written for other people as well as the machine. So someone else can come in and read it later on. And they often have a really great sense of humor, they're good to work with, they're really good people. They're humble about what they don't know and eager to learn it.

**21:45** - _Jonathan Solórzano-Hamilton_

I'm a 0X coder, because I'm a manager now, so I don't really get to roll up my sleeves a whole lot. But if I were to put myself in that pigeon hole, I would say that I hope I'm a 1.1X coder, and that I hope that I add 10% to everything that I touch instead of trying to do it all myself.

**22:06** - _Saron Yitbarek_

Brianna Wu is a software engineer and entrepreneur. She founded the game studio, Giant Spacekat.

**22:13** - _Brianna Wu_

I'm absolutely a 1X coder. There are plenty of people out there that have a broader knowledge of frameworks and languages. I have always felt my best skill, when it comes to tech, is not my ability to sit down and pour out perfect, great code that doesn't need someone else to look over it and make sure it's good. My skill has always been figuring out the roadblocks. I've always been that person that can step up and adapt and get things done.

**22:48** - _Saron Yitbarek_

So Clive, can successful companies be led by 1Xers?

**22:52** - _Clive Thompson_

So one guy I talked to, Dennis Crowley, he's a friend of mine, and he created, back in the early aughts, Dodgeball. And he essentially created the idea of the check-in. It was a little service that lets you say, "Hey, I'm at this bar, I'm at this restaurant." And he is, as he told me, the worst coder he has ever met in his entire life. He could not get anything to compile. And he kept on trying to learn and failing and trying to learn and failing, and he was at companies and they would try and teach him and they would give up on it. So finally, he wanted to make this crazy check-in service, he had the idea in his head because he was a nightlife guy from New York. He loved going from bar to bar and he loved the idea.

**23:32** - _Clive Thompson_

What if everyone could communicate where they were at? Like wouldn't that just be fun? And so because he had that idea, he was willing to force himself to make some crappy prototype, and he did it. He basically learned how to program server stuff in ASP. It's just a hairball of code, like, he's shown it to people and they just laughed at him. But he got it working and it turned into not just a company, it turned into an entirely new activity. That's something we all do all the time now. He created that idea, he's a terrible coder by his own admission, but if you have a really great idea, and you're a proud 1Xer, you can tilt the axis of the universe just as much, and maybe even more, than the 10Xers.

**24:09** - _Saron Yitbarek_

Is that an anomaly or is that a common thing that can happen?

**24:15** - _Clive Thompson_

I have very frequently run into founders and I said, "So tell me your story." They're, like, "Well, I'm not a great programmer, but I had this idea, so I just kind of made this crude prototype, and it worked well enough that then we got some real developers on and now the whole thing scales and it works." So, I think if you scratch the surface of a surprising number of successful startups, you'll find people who by no means would call themselves 10X coders: they would actually call themselves 1X or less, but they got things moving.

**24:50** - _Saron Yitbarek_

As an industry, are we moving away from glorifying 10X coders and supporting these 1Xers?

**24:57** - _Clive Thompson_

I would say I am hesitantly optimistic that, yes, we are. And I think it's for a couple of reasons: one is that there's been enough attention paid to the toxic side effects of tolerating abuse of creative \*\*\*holes. In one respect, one of the greatest things that Susan Fowler, who was that fantastic microservices engineer hired at Uber, and she was hired and she discovered that it was just a complete nightmare of an environment, where all these abusive guys up top were tolerated while they engaged in terrible behavior, including flat out sexual harassment, and she wrote a big blog post about it, and it single-handedly created the shockwave throughout the tech industry saying, "Wow, this stuff is happening, and it's unignorable, and it's driving talent out of companies."

**25:50** - _Clive Thompson_

Now, did that change the behavior of these companies towards tolerating 10Xers who were terrible? Certainly not always, but it did wedge that door open in a really interesting way. And you've also found, I think, an awful lot of companies I know where people have peeled off from a larger organization where there was a lot of abusive 10Xers around and tolerated and they said, "Screw that, I'm going to start my own company."

**26:19** - _Bonnie Eisenman_

Yeah, I think the needle is moving. I also think that the Me Too movement is finally having a really strong impact on what people perceive as acceptable in technology, and now people are willing to say: "Even if you've contributed good work, we don't think that's worth the opportunity cost of you creating a toxic environment and therefore making it impossible for other people to also contribute good work." So I get the sense that something is actually changing. I really hope it does.

**26:44** - _Saron Yitbarek_

The story of 1X coders is really the story of most of us out there. It's about how collaboration and contributing can achieve great things on the command line, not about hoarding the command line. Here's Brianna Wu with some final thoughts.

**27:00** - _Brianna Wu_

There was a line in a James S.A. Corey novel that came out last year, and I heard this, and I loved it. It said, "As you get older, you have to choose between being who you want to be and who you are. And that's a choice that you have to make." And I think for a lot of engineers, if you are kind of low on the self-introspection scale, it's easiest to say, "I'm going to just be who I am. Gruff, antisocial, telling myself I'm really great at this." There are tons of fantastic people in our field that stay there.

**27:34** - _Brianna Wu_

I think the true standout stars are the ones that really look deep within themselves and go, "Okay, I can understand the coding part of this, what do I need to then go understand about human nature? What do I need to understand about how to motivate a team? What do I need to understand about how to not let the worst parts of myself affect the projects that I'm working on?" I believe that's the bravest choice that you can have in software development. Like those are the people that I want to work for.

**28:08** - _Saron Yitbarek_

Command Line Heroes is an original podcast from Red Hat. Thank you, thank you, thank you to Clive Thompson, my featured guest throughout our special series on The Career Of A Coder. You are the best Clive, tell us how we can get your book?

**28:23** - _Clive Thompson_

Oh, that's a great question. Right now, given that we have an epidemic going and people are doing social distancing, you are probably ordering the book online. You can also find a lot of links at my website, [Clivethompson.net](//clivethompson.net/), but however you get it, I appreciate it, and do let me know anyone out there after you've read it what you think, I am easy to find online.

**28:45** - _Saron Yitbarek_

For more research and information about this season, go to redhat.com/commandlineheroes. And stay tuned for Season 6! We’ll be telling you the stories of 8 inventors who created technology that is now standard in our daily lives. You won’t want to miss it!

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-5/what-kind-of-coder-will-you-become

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
