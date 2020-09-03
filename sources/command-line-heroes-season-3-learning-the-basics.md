[#]: collector: (bestony)
[#]: translator: (erlinux)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 3: Learning the BASICs)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-3/learning-the-basics)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 3: Learning the BASICs
======
**00:02** - _Saron Yitbarek_

1965 was a year of massive change in America. The Civil Rights Act was signed.

**00:09** - _Archival news_

Congress passes the most sweeping Civil Rights bill ever to be written into the law.

**00:12** - _Saron Yitbarek_

Combat troops were sent to Vietnam for the first time. Men burned their draft cards.

**00:19** - _Archival news_

Draft cards on the steps of a Boston courthouse. A group of high school boys set upon them with fists.

**00:25** - _Saron Yitbarek_

The Beatles delivered the world's first stadium concert in New York. But, far from all those headlines, a revolution of a different kind was underway.

**00:39** - _Saron Yitbarek_

4:00 AM, May 1. Professor John Kemeny and an undergrad student were working at a GE 225 computer at Dartmouth. They ran a program they'd been working on, and then the teletypewriter produced three short lines of output. Those three lines changed computer programming forever.

**01:04** - _Saron Yitbarek_

Welcome to episode 2 of Command Line Heroes, an original podcast from Red Hat. I'm your host, Saron Yitbarek. In this episode, we continue our season-long journey into the history and future of programming languages. In episode 1, we dove into Python, and learned how open source language communities survive major upheavals in their leadership. But this time, we're getting more personal. We're looking at an experience we've all had, the experience of encountering our very first language. We'll take a look at my first language, Ruby, and we'll learn how some first languages come to us in the form of a game.

**01:50** - _Saron Yitbarek_

But we're beginning with an example that can help us understand what "first languages" really means. It's the language that was born in that Dartmouth laboratory with those three short lines of output. At that pre-dawn meeting in 1965, John Kemeny witnessed the birth of his co-creation, BASIC.

**02:14** - _Saron Yitbarek_

BASIC. It stands for Beginner's All Purpose Symbolic Instruction Code. That first word, “beginner's,” is where the magic lies. In the early days of programming, you pretty much needed a PhD in order to do a little coding. It was an elite pursuit that required major education, not to mention major hardware. But Professor Kemeny and his team wanted to change all that. What would it look like, they wondered, to produce a programming language that anybody could use? While teenage baby boomers were demanding change all across America, the team at Dartmouth proposed a shakeup of another kind.

**02:57** - _Saron Yitbarek_

Their secret weapon was a room-sized mainframe computer, that GE 225. Weighing in at a healthy 2,000 pounds, it was capable of something brand new. The GE 225 was capable of time-sharing. Suddenly, the complicated system of punch cards, or enormous walls of switches, wasn't necessary anymore. Time-sharing meant that a whole bunch of programs could be executed almost simultaneously, with the machine's attention bouncing between users.

**03:31** - _Saron Yitbarek_

Time-sharing meant that access to computing could expand in amazing new ways. Here's some audio from Dartmouth, featuring one of the undergrad’s studying there when BASIC first appeared. He's John McGeachie, class of '65.

**03:47** - _John McGeachie_

We had taken a fairly expensive computer that could only be used by one person at a time, and converted it into something where it wasn't just 30 users who could use it. It was 30 undergraduate students using this computer simultaneously, writing programs, getting answers quickly. It was a combination of immediacy and simplicity that had not previously existed.

**04:15** - _Saron Yitbarek_

John Kemeny had teamed up with Thomas Kurtz, another evangelist for computer literacy, to develop the BASIC language. They saw how time-sharing democratized things, and knew that the barrier for entry was suddenly so much lower. All that was needed was a language that prioritized simplicity and immediacy. A language like BASIC.

**04:39** - _Saron Yitbarek_

They developed commands like "hello" and "goodbye" instead of "log on" and "log off." In fact, the first version of BASIC only had 14 simple commands, just easy options like if, then, and go to.

**04:54** - _Tom Cormen_

I am Tom Cormen. I'm a professor of computer science at Dartmouth College.

**04:59** - _Saron Yitbarek_

Professor Cormen spoke with us about that beginner's revolution, and how the creation of BASIC really did feel like part of a new zeitgeist, a world where computing was exciting to more people. Even a little bit hip.

**05:14** - _Tom Cormen_

At the time in the 1960s, it's said that the male students would bring their dates there, and I can't really imagine that happening now. But at the time, the computer center was the cool place to be.

**05:24** - _Saron Yitbarek_

This new interest in computing on campus was the immediate result of that first beginner's language.

**05:31** - _Tom Cormen_

BASIC opened up computing to people who weren't just computer jocks, as we used to say back then. Social scientists who really didn't want to get into the weeds of a language like FORTRAN could use BASIC, and people doing work in the arts and humanities, if they were doing text analysis, or even trying to create art, they could use BASIC for that.

**05:55** - _Tom Cormen_

After a few years, people were doing things like writing computer games, and also incorporating computer graphics routinely into their work.

**06:03** - _Saron Yitbarek_

All those kids who didn't necessarily see themselves as programmers suddenly got into programming on an almost intuitive level. It reminds me of the kind of world Grace Hopper pushed for. When we talked about Hopper last season, we saw how her language innovations brought programming to a wider circle. This BASIC moment, it was like a continuation of Hopper's dream.

**06:29** - _Tom Cormen_

I'm sure Grace Hopper would've liked seeing more people coding. She probably would've liked that BASIC had a different slant from COBOL, and that it just opened things up to people even more and gave them a choice. They could write in COBOL, they could write in FORTRAN, they could write in BASIC, they could write in ALGOL. Any of the popular languages of the time.

**06:54** - _Saron Yitbarek_

Tom Cormen is a professor in Dartmouth's computer science department. A new generation of computer programmers was ushered in thanks to a couple of major changes. Simultaneous work made possible by time-sharing, and a new simple language, BASIC. Those two factors combined to create a game-changing spark. Soon, it wasn't just massive institutions that could get into programming. It was mavericks like Bill Gates and Steve Wozniak. It was also everyday programmers just exploring on their personal computers.

**07:32** - _Denise Dumas_

To be able to interact with a language to get immediate feedback when something was wrong, that made all the difference in the world, because it sucked you in, it kept you going, and the interaction was meaningful, because it was an interaction.

**07:50** - _Saron Yitbarek_

This is Denise Dumas. She runs the Red Hat® Enterprise Linux® engineering team.

**07:55** - _Denise Dumas_

I mean BASIC democratized programming in a big way, because it put it in the hands of students, in the hands of people, in a way that COBOL, FORTRAN, the other languages of the day ... it just wasn't possible. It became really popular at a time when CRTs (cathode ray tubes) became popular, so instead of typing something in and getting it printed on a piece of paper, it displayed on a screen in front of you.

**08:26** - _Denise Dumas_

We laugh at command line sometimes now, right? Everything is graphics, but the command line is what there was, and it was such an improvement over what had been. That was huge, just to type something in and get a response. I think that BASIC lowered the bar, and I say this as someone who actually loves assembler, because that's the kind of control freak I am. But I think BASIC made it much more approachable.

**08:59** - _Saron Yitbarek_

The excitement BASIC created in the 1980s lives on today, with a whole fleet of languages that beginners use as shiny red doors into the world of programming. Yet something important has changed, because those entrances don't just show up on university campuses anymore. The way into programming is becoming even more open.

**09:29** - _Saron Yitbarek_

As amazing as BASIC was, Grace Hopper's dream wasn't going to stop there. Today, beginners have a hundred ways to find their start, and for me, learning a first language meant attending an institution called the Flatiron School in New York City. I prepared for months for that program. I read every single programming resource and tutorial that I possibly could to make sure I got the most out of my bootcamp. I wanted to learn about how people today discover that first language. So, I headed back to interview my old teacher.

**10:03** - _Avi Flombaum_

I'm Avi Flombaum.

**10:04** - _Saron Yitbarek_

Avi's one of the founders of the Flatiron School, so it was a treat for me to dig into all these thoughts about first languages, and how our approaches to first languages have changed since the old days of BASIC.

**10:26** - _Saron Yitbarek_

So when you are teaching someone how to code, where do you begin? I remember when I first learned my first programming language, thinking, this is so weird. I was an English major, I really liked math when I was in school. I liked organic chemistry. There were a lot of things that I was really into, a lot of different subjects, but there was nothing I could connect coding to. There was nothing that was a good analogy. It just felt like its own little world, so as a teacher, where do you start?

**10:49** - _Avi Flombaum_

I think that anything that is familiar to you in life was once foreign, and experiencing it and wading in its waters and actually spending time with it is what makes you comfortable with it, and it's just a question of reps, and really just time that you put into it. I think what makes programming difficult, and what makes it feel so foreign, is that it is a tremendously particular syntax for expressing something. There's zero ambiguity. There's no margin of error. It either works or it doesn't. When we communicate to each other, we generally don't have that kind of requirement, where everything has to be exactly correct. One comma is off, one parenthesis is missing, and it's all broken.

**11:32** - _Avi Flombaum_

I always say that computers are stupid, and we have to just be perfect in order to get them to understand what we mean.

**11:37** - _Saron Yitbarek_

I like that. I like this idea of the machine being the stupid one and me being the smart one. I approve of this. This is great.

**11:43** - _Avi Flombaum_

Yeah.

**11:44** - _Saron Yitbarek_

For me, that first language, the one I cut my teeth on, was Ruby. From experience, I can tell you, it's a pretty sweet first language. When you read the code, it feels like you're reading English. It's got tons of great libraries, and here's a bit of trivia. The creator of Ruby, Yukihiro Matsumoto, he got into programming by learning BASIC.

**12:06** - _Saron Yitbarek_

These days, a lot of newbies might be tackling Python or JavaScript instead, and I wanted to know whether Avi thought any one language was a better front door than all the others.

**12:18** - _Saron Yitbarek_

I'm wondering, are there preferred starter languages? If someone's coming into this with no tech background, no coding experience, no CS degree, they're kind of starting from absolutely nothing, from square one, square zero even ... Are there preferred languages that are good starting points that have changed over time?

**12:39** - _Avi Flombaum_

Well, first, I'll say that everyone comes into it with no background. No one is born a programmer, so whether you formally learned it in a CS program or in your community center or read books and taught yourself, everyone started as a beginner. Then in terms of the preferred beginner language, I think it's really whatever speaks to you first. My advice to beginners is always just pick a language and learn it. Don't change. I think the biggest thing that beginners do is start learning Python, and then get frustrated with it and say, Python sucks, now I'm going to go do JavaScript. Then they learn JavaScript and then they get frustrated with JavaScript and they jump again.

**13:22** - _Avi Flombaum_

I personally, as you know, think that Ruby's a great beginner language. I think that its syntax is just really beautiful. Its value explicitly is to make you, the programmer, happy. I don't know any other language that was invented to make a programmer happy. I know a lot of languages are invented to make machines happy, but I think Ruby's really natural.

**13:44** - _Saron Yitbarek_

We can agree on that one. But again, there's no wrong answer here. A first language, after all, is just that. A first. We've all got a whole lifetime of language learning ahead of us, and besides, choosing one language over another isn't going to stop you from becoming the awesome programmer you were destined to be.

**14:05** - _Saron Yitbarek_

I like to draw, but I will not live and die by a particular pen. I don't get all worked up over the pen that I use. I get worked up over the things I create, so from your experience, where does that come from? Where does that need to defend and convince everyone that you are right about a programming language, where does that come from?

**14:23** - _Avi Flombaum_

I guess I don't know. The first thing that came into my head, because I loved your metaphor of the pen versus the output ... I just imagine that some of the output is not that great, so the only thing that people can hold onto is the tool.

**14:41** - _Saron Yitbarek_

That's hilarious.

**14:42** - _Avi Flombaum_

If the things you make just aren't awesome and aren't great and don't have a lot of value for the world, and you want to still defend your craft, the only thing you can point to is, yeah, look how well I swung that hammer. Sure. The house fell apart, but that hammer, that hammer's really great and I know how to use it. As someone ... I was also more interested in the things I built than the manner in which I built them.

**15:09** - _Saron Yitbarek_

That's a good point. Now that beginners have more to choose from than just BASIC, or, I don't know, FORTRAN, now that we have a whole menu of first languages, there's always the danger that you forget these languages are still a means to an end. The language is the tool, it's not the thing you're making.

**15:27** - _Avi Flombaum_

I think that the value of technology is to create meaningful things for people. Ultimately, if you're a programmer and you're really, really good, but you're building things that no one needs and no one likes and don't ... aren't adding value to the world, but you're really, really good at the craft and just can't find a way to actually make the impact you want, I imagine that you'd probably dig in and talk about the tool you used.

**15:56** - _Saron Yitbarek_

Well, thank you so much, Avi, for sharing all your experiences and your thoughts about programming languages. You want to say goodbye?

**16:01** - _Avi Flombaum_

Yeah, this was super fun, it was nice connecting again, and I hope you all find a language that you love, and get to work in it every day.

**16:10** - _Saron Yitbarek_

Sounds good.

**16:13** - _Saron Yitbarek_

Avi Flombaum is one of the co-founders of Flatiron School.

**16:20** - _Saron Yitbarek_

Coding schools can bring that spirit of access and education to a whole new level. It's a continuation of what we saw at Dartmouth, but in a rich development ecosystem, we'll keep getting more and more natural points of entry, and first time coders are already discovering next-level ways to get into the game, sometimes literally.

**16:45** - _CO.LAB participants_

Have you tried a different key? Try the G key.

**16:52** - _Saron Yitbarek_

Now, hold on. That is not a bunch of young coders silently memorizing an O'Reilly textbook, and it's not a lecture at the Flatiron School either. It's actually a little lab that Red Hat ran at the Tate Modern in London. And those kids? They're learning to code. For a new generation, the joy of coding is what they first encounter.

**17:13** - _Femi Owolade-Coombes_

Okay. Hi, my name is Femi, AKA Hackerfemo.

**17:17** - _Saron Yitbarek_

Femi Owolade-Coombes is only 13 years old, but he's already a leader in a new wave of young coders.

**17:26** - _Femi Owolade-Coombes_

I first encountered coding when I was eight, and I went to an event in York, actually, about maths, and there I saw this cool thing, hacking Minecraft ethically. As an eight-year old, I thought that was really cool. So that's how I got into coding.

**17:47** - _Saron Yitbarek_

He's not alone. Minecraft has introduced a whole generation to coding, and it's done that without any of the pain or dry studying that past generations suffered through. The magic of gaming is dropping barriers. Minecraft is Java™-based, and it's been accredited with breathing new life into that language, spawning a whole crowd of fresh-faced Java fans.

**18:11** - _Saron Yitbarek_

But it doesn't have to be Java. For Femi, Python was the language he discovered in Minecraft.

**18:16** - _Femi Owolade-Coombes_

You can use Python when you're using the Raspberry Pi in Minecraft, because Minecraft have created this special edition for the Raspberry Pi, which is so cool, 'cause you can hack it by just importing this library, and you can put exploding TNT everywhere, and you can create blocks behind you, you can create whole buildings. All sorts of things.

**18:42** - _Femi Owolade-Coombes_

When I first played it, I knew there were quite a few things like mods you could add on, which were pretty cool. Those were like little hacks in themselves, but this was the first time I realized you could properly hack it and really make it do what you want. I thought it was really cool.

**18:57** - _Saron Yitbarek_

A world of coding opened up for Femi, and the door to that world was his favorite game. Then, Femi did something kind of amazing. He started showing other kids that door.

**19:10** - _Femi Owolade-Coombes_

Well, I wanted to share my knowledge with my peers, because I thought, you know what? They will really enjoy this, and I had a great time. I want to share this with everyone else so that they can learn about it, and so that they can even get into coding.

**19:30** - _Saron Yitbarek_

Femi went ahead and founded the South London Raspberry Jam, and there, he's been able to watch a whole new generation of coders defy expectations about what a first language experience should look like. Besides those Minecraft hacks, visual languages like Scratch or Fruit are making the basics of coding achievable to younger and younger users.

**19:54** - _Femi Owolade-Coombes_

I do like the idea of playing a game, and I most certainly do it over learning to code in a classroom, but it's the idea of being able to control what happens in that game, and code is behind that, and code gives you that really cool ability to make the game do what you want.

**20:15** - _Saron Yitbarek_

Femi's mom told us how happy she was to discover that gaming didn't have to be a passive pursuit. What I love about his story is that it starts with gaming, sure. But it doesn't end there. He built an amazing community of young coders, and Femi's own coding life is taking off. It's not just Minecraft anymore. He works in HTML, JavaScript, and CSS, building websites and doing web design. He's even building his own games using Unity.

**20:44** - _Femi Owolade-Coombes_

Everyone really should have a right to learn how to code, because it is the future.

**20:53** - _Saron Yitbarek_

Is Minecraft really a giant programming university? Are the coders of tomorrow going to absorb new languages through games and simply messing around? Will languages be learned just through osmosis?

**21:06** - _Robyn Bergeron_

Hi, my name's Robyn Bergeron.

**21:08** - _Saron Yitbarek_

Robyn's the community architect for Ansible® over at Red Hat, and she also happens to have a couple kids who stumbled into programming themselves.

**21:18** - _Robyn Bergeron_

There was a moment at dinner one night. I was actually cooking, everyone was impressed. My daughter came into the kitchen area, and she said, "Mommy, I filed a bug in Minecraft!" I work in software, I see lots and lots and lots of bug reports, and I was just really curious about what that meant in that universe. Is that like, I talked to someone on Twitter and said it's broken, or what? I asked her to show me, so she opened up her computer, and she had created a JIRA account in Mojang's system.

**21:53** - _Saron Yitbarek_

We should note, Robyn's daughter was 11 when she did this.

**21:57** - _Robyn Bergeron_

She had filled out their form exactly, and I see lots of bug reports that are not well-formed, or they're very mean. I see a lot of that, too. But it was a perfectly ... Here's what happened, here's what I expected to happen, and here's all of the steps to reproduce, which is, for a lot of people, that's their first interaction with any project, whether it's commercial, proprietary software project, like a video game, or an open source software project. I was so proud, and I told her we can totally go to the Minecraft conference after that, because they had been dying to go.

**22:33** - _Saron Yitbarek_

Robyn was about to realize that while the rest of us were going about our day jobs, the kids were starting a revolution. Here's what happened at that conference.

**22:43** - _Robyn Bergeron_

We went to the keynotes, and I said, oh, we'll go at the last second, we'll be fine, we'll totally be in the second row. Oh, no. No, no, no. We were like 10 of those gigantic, big screens back in the room. But it was nonstop cool stuff for kids, and they had a moment on one of the days where they brought out all of the developers, and when the engineers came out, literally every kid in this audience was standing on their chairs screaming. If you've ever seen here's the Beatles, like the Beatles come to America video, it was like that. It was like, I can't believe we're near them and they're amazing! During the sessions, people were trying to get their autographs, and it was ... I'm sitting there with my kids being like, I work on operating systems that connect the internet so that you guys can actually game together? What are we doing wrong?

**23:36** - _Robyn Bergeron_

But kids are just being like, I'm going to be a JavaScript person when I grow up, yes! And just watching the level of enthusiasm at that event was fascinating, but ... it's a video game.

**23:51** - _Saron Yitbarek_

There was a time back in the '70s when everyone's first language was BASIC, and then maybe it was C. More recently, people have been starting with Java or Python, but visual languages and games are ushering in a coding future that we're only beginning to imagine.

**24:10** - _Robyn Bergeron_

Even though it may seem trivial to someone who's been programming for years, it's that first moment of, I'm playing, and I don't even realize that I'm actually learning something that could turn into a lifelong skill.

**24:23** - _Saron Yitbarek_

Robyn Bergeron is the community architect of Ansible at Red Hat.

**24:32** - _Saron Yitbarek_

BASIC invited college students into the world of programming, and games like Minecraft invite elementary school students into that world today. But in a way, the creative impulse behind all this hasn't changed. Those college kids exploring BASIC? Yeah, they were often using it to build their own games. Lots of fantasy football, apparently.

**24:54** - _Saron Yitbarek_

Our creative spirit is what drives us toward programming languages in the first place. That drive to tweak the world, make it better, or just more fun.

**25:08** - _Saron Yitbarek_

Next time, in episode 3, where do brand new programming languages come from, anyway? We're learning how incredible challenges pushed developers to walk away from the languages of yesterday and build something totally new today.

**25:26** - _Saron Yitbarek_

Command Line Heroes is an original podcast from Red Hat. If you want to dive deeper into the origins of BASIC or anything else you heard on this episode, head on over to redhat.com/commandlineheroes.

**25:37** - _Saron Yitbarek_

I'm Saron Yitbarek. Until next time, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-3/learning-the-basics

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
