[#]: collector: (bestony)
[#]: translator: (AmorSu)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 6: Jerry Lawson)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-6/jerry-lawson)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 6: Jerry Lawson
《代码英雄》第六季：Jerry Lawson
======
**00:00** - _Joseph Saulter_

Jerry Lawson. I said, "Who is Jerry Lawson?"
Jerry Lawson. 我说, "谁是 Jerry Lawson？"

**00:05** - _Saron Yitbarek_

那是2011年，Entertainment Arts Research 的 CEO， Joseph Saulter 接到一个来自记者 John William Templeton 的电话。这个电话让 Saulter 感到震惊。

**00:19** - _Joseph Saulter_

他说，“Jerry Lawson 是第一个擦卡式游戏的开发者。” 我说，“兄弟，你在说什么？”我说，“我刚刚完成了《Game Design and Development》这本书的介绍，然后你突然告诉我还有这么个人，我没写到书里面，兄弟！”

**00:35** - _Saron Yitbarek_

Saulter was about to discover that the history of video games, the one he had in his head, needed to be rewritten, and when he realized why, Joseph Saulter broke down in tears. So, why did learning about Jerry Lawson mean so much? We're about to find out. I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. In season 6 of Command Line Heroes we are getting personal. Learning about the lives, the motivations, and the extraordinary innovations that defined 8 powerful, but not quite famous, inventors—all of them integral to the advancement of tech in the 20th century and all of them less known than they should be. We are going to discover the man who brought PCs to IBM, the woman who helped put us all, literally, on the map and the man who made Silicon Valley more accessible for everyone. It's a whole new history celebrating Command Line Heroes who deserve a lot more credit. This time, it’s Jerry Lawson's turn.
Joseph Saulter 将会发现，在他印象中的那段关于视频游戏的历史，将要被改写。而当他明白其中的原因的时候，Joseph Saulter顿时泪流满面。那么，为什么了解Jerry Lawson这么重要？我们将在接下来的节目中为大家揭晓。我是Saron Yitbarek，这是《代码英雄》，一个来自红帽公司的原创播客。在《代码英雄》的第六季，我们更关注个人。了解八个非常厉害的，但是不那么出名的发明家们，的生活、动机、不同寻常的创新。20世纪的技术进步离不开他们，但他们却都没有得到应有的关注。我们将会了解到那个把个人电脑带到IBM的人，那个把我们所有人都放在地图上（字面上的）的女人，以及那个所有人更容易接近硅谷的人。这是一个崭新的历史，庆祝着那些值得更多荣誉的代码英雄们。而这一次，轮到Jerry Lawson了。

When Jerry Lawson came on the scene back in the early 70s, the few video game consoles available had a one-to-one ratio between machine and game. You'd lug home a console, plug it in and pretty much that was what you were playing. That one game they'd burned onto the machine's memory. The idea of snapping in the new Zelda and then trading that out for some Mario Kart, really the whole idea of a software-centered gaming industry, hadn't happened yet but it was coming. And that revolution started in the little beer-hall down in Sunnyvale, California.
当1970年代的早期，Jerry Lawson登场的时候，那个时候仅有的一些视频游戏机，机器和游戏都是按照1比1的比例的。你拖回家一个游戏机，接上电源，然后这就是你能玩的唯一游戏了。这个游戏已经被刻录到游戏机的机器内存里面了。那种“插入那张新的《萨尔达传说》，玩腻后出手换个《马里奥赛车》”的想法，甚至那种“以软件为中心的游戏产业”的想法，都还没有出现，但是即将来临。而那种革新，在加利福利亚州的Sunnyvale的一个小酒馆里面，开始了。

Jerry Lawson walked down El Camino and into Andy Cab's Tavern. A crowd was playing an arcade game, one of the first arcade games anywhere; it was Pong. Lawson was blown away for the first people to see video games come to life. That bouncing ball might as well have been Grand Theft Auto. Pretty soon Lawson got it into his head that he'd like to build a game too, but here's the thing you have to remember. Just a year earlier in 1971, Intel had released its 4004 microprocessor, the first commercially available microprocessor. And Lawson was convinced that he could use a microprocessor in the game he wanted to build. Only problem—that had never been done before. The machines being built back then all used dedicated logic circuitry. They were what you'd call a state machine. Code and computers weren't really what drove gaming back then. So Jerry Lawson's peers told him that just wouldn't work. It couldn't be done.
Jerry Lawson 走到 El Camino 然后进入 Andy Cab 酒馆。 一群人正在玩一个街机游戏。那是最早开始风靡起来的游戏之一。叫做《Pong》。Lawson 是第一次看到视频游戏的出现，他被震惊到了。那个弹跳的球也可能就像《侠盗猎车手》。很快的，Lawson 在脑中有一个念头，他也想自己开发个游戏。但是有一些事情需要提醒你一下。早在1971年的一年前，Intel 发布了它的 4004 微处理器，第一个商业化的微处理器。而 Lawson 相信，自己可以给自己想开发的游戏使用一个微处理器。唯一的问题是，以前从来没人做过这种事情。当时生产的机器都是使用了指定的逻辑电路。那种机器又叫“状态机”。当时，游戏的发展还不是依靠代码和计算机。所以，Jerry Lawson 的同僚都告诉他，这个是不可能的。
Luckily, Lawson was used to getting done what other people called impossible. He was used to being underestimated. In fact, being underestimated ran in the family. Lawson's grandpa dreamed of being a physicist, but that was decades before the Civil Rights Act of 1964 and being Black, he could only get work at the post office. Raised in Queens in the 1950s, options were still limited for Lawson, but his mom was determined that her son would have a different fate. She watched young Jerry build ham radios, watched him make his own walkie talkies, watched him repair TVs. So she decided to drive her son each day into a white neighborhood where they had better schools. She even became president of its PTA. I wanted to know how what kind of history shapes the family, shapes their ambitions, so we tracked down the perfect person to ask.
不过幸运的是，Lawson 已经习惯于做到别人认为不可能的事情。他已经习惯于被人低估。事实上，被低估贯穿着他的整个家庭。Lawson 的祖父梦想成为一名物理学家，但那还是1964年《民权法案》颁布前几十年，而作为黑人，他祖父只能在邮政局上班。1950年代在 Queens 长大的 Lawson，还是没有太多的选择的余地，当时他妈妈决心让他儿子有一个不一样的命运。她看着年轻的 Jerry Lawson 搞业余无线电。看着他做自己的无线对讲机，看着他修电视机。因此，她决定载着她儿子每天到临近的白人区上更好的学校。她甚至当上了家庭教师协会的主席。我想知道，是什么样的历史塑造了这个家庭，塑造了他们的雄心，因此我们找到了回答这个问题的完美人选。

**04:45** - _Anderson Lawson_

Hi, my name is Anderson Lawson. I'm the son of Gerald Anderson Lawson.
大家好，我是 Anderson Lawson 。我是 Gerald Anderson Lawson 的儿子。
**04:49** - _Saron Yitbarek_

So I imagine when it comes to the career aspirations of your great-grandfather and those people who came before you, I imagine racism probably had a huge effect on their goals, on their aspirations.
那么，我可以想象，说到你的曾祖父和那些在你之前的人的职业抱负，我可以想象种族主义可能对他们的职业目标会有巨大的影响。

**05:01** - _Anderson Lawson_

I know that he wanted to be—I want to say a physics teacher—and at the time, he wasn't seen as fit for that role and actually became a mailman. Now that's a stretch, right? But, I think we've come a long way, but we've still got a long way to go.
我知道他想成为，可以说是一名物理教师，但是这在当时，他被认为不适合那个职业，于是成了一名邮递员。如今已经大有改观了，对吧？但是我觉得这一路走来挺不容易的，而且我们还有很长的路要走。
**05:22** - _Saron Yitbarek_

And how did that story of your great-grandfather influence your father's own pursuits?
那么，你曾祖父的故事是如何影响到你父亲自己的追求的呢？
**05:28** - _Anderson Lawson_

You know, I really don't know because my father was so, his attitude, he was so freaking stubborn for the lack of a better term. He was the type of person where if—no matter what's going on—if somebody just said, "Hey, you're not able to do that," he would have found a way. He was different in that way, and it was more to spite the person that said that than anything else.
我实在不知道，因为我父亲，他的态度，除了“顽固”没有更好的词来形容。他是那种，无论是在什么情况下，只要有人说：“嘿，你是做不到那个的。” 那么，他就总会找到解决的办法。他在这方面很不一样，因为对他说那句话比任何语言都更加惹恼他。
**05:57** - _Saron Yitbarek_

That determination to build his own reality, to literally craft it with his own hands, was something Lawson passed on to his children.
创建自己的现实的决心，完完全全的靠自己双手来创造，是 Lawson 传给他的后人的一种品质。

**06:08** - _Anderson Lawson_

When I was about, actually I was 10, my cousin was with us, and we were playing games. And I guess my father had enough of seeing us play the video game for the day, so he goes into the garage and he comes back out. He shuts off the game and he doesn't let us play anymore. And he takes a book and throws it onto the counter, and it is 101 Basic Video Games. And he's like, "If you're going to play games, you better learn how to make them," and walked away. He set up an IBM, a portable IBM computer, in the room and said, "Figure it out." Turned it on. Now we're kids, we have to figure out how to get in, log in, find the basic compiler and start making games, but we did it!
但我大概，实际上是10岁的时候，我的堂兄弟和我们一起玩着游戏。然后我估计我父亲是已经看够了我们一天到晚玩这个视频游戏，于是他走进车库里，然后回来。他把游戏关掉，不让我们再继续玩。然后他拿起一本书扔到柜台上，那是一本《基础视频游戏入门》的书。他的意思大概是说：“如果你想玩游戏，你最好学习怎么创建它们”。然后就走掉了。他在房间里搭起了一台IBM，一台移动的 IBM 电脑，然后说，“你看着办吧！”，然后开机。我们当时只是小孩，我们不得不搞明白如何进入系统，如何登陆，如何找到基本的编译器，然后开始创建游戏，但是，我们做到了！
**07:03** - _Saron Yitbarek_

In the 1970s, Lawson got himself a job at Fairchild Semiconductor working as a field applications engineer out in California. That basically meant he was a traveling troubleshooter for clients driving all over in an RV full of demo products. Lawson had other plans though. For starters, he became the only Black member of the famous Homebrew Computer Club where Steve Wozniak and Steve Jobs used to show off their latest ideas. More important than "the Steves", though, was the fact that Lawson began assembling the tools he needed to build something of his own.
在1970年代的时候，Lawson 在加州的 Fairchild 半导体公司找到了一份工作，担任现场应用工程师。这基本上意味着，他得开着一辆装满演示产品的休闲车，到处奔波为他的客户们处理故障。然而，Lawson 有自己的计划。
**07:40** - _Anderson Lawson_

I guess, let me give you a breakdown of what a Saturday afternoon would be like with Jerry Lawson. I could spend 3 or 4 hours with him going to different electronic stores, and even flea markets looking for parts and things of that nature, or talking to people in the industry. His life was electronics, that's all he did—computers, electronics, computers, electronics, all day, every day. I mean, the man had a PDP-11 inside of the garage. So, if you know anything about computers, Digital Equipment Corporation put out that computer, and it was about as big as a refrigerator today, sitting there in our garage among other things. It was really different.

**08:29** - _Saron Yitbarek_

Side note, when the team at DEC found out Lawson had a PDP-11, they paid for $10,000 in upgrades in exchange for access. And that garage became Lawson's place of Zen, sitting in the middle of it all surrounded by computers, manuals, capacitors, tapes spitting out of a printer and his young kids marveling at the magic machines. When Jerry Lawson came home after seeing Pong, he walked into that garage and began willing into being a game of his own, a coin-operated arcade cabinet he called Demolition Derby. Back to Anderson. So, he was doing all this building and creating all these games and electronics and all that on the side; he was still working at Fairchild full-time. So did his bosses find out, or how do they find out about his garage project?

**09:23** - _Anderson Lawson_

Yeah. So, someone got wind of that, and it got around. They said, "Hey, Lawson has a side project. He's been working on this game." And so, he got called into an office and was told about this skunkworks project that they had going on.

**09:44** - _Saron Yitbarek_

A gaming project, but Fairchild getting into gaming was a weird move. Fairchild was this dry, industrial semiconductor company. Journalist Jenny List from hackaday.com explains why it made sense.

**09:59** - _Jenny List_

They had a microprocessor system, and they were looking for markets for it, they were looking for things they could put it into. They saw consumer microprocessor products as an up-and-coming thing, and they weren't a gaming company, but there weren't any gaming companies because there wasn't really a games industry at the time. And the first semiconductor company to suddenly realize, here's a consumer business coming up, and we've got to be part of it, is actually quite an adventurous thing. And so, it must've been an absolute godsend for them to have, as I say, a very talented engineer who actually had some experience in it when probably few others did.

**10:38** - _Saron Yitbarek_

By this point, that coin-operated arcade game Lawson built in his garage, Demolition Derby, had been tested out at the local pizza parlor. It was living proof that a game could run on Fairchild's F8 microprocessor. The Fairchild execs were intrigued and invited him to make a home game system for the world. A chance to finally prove what he was capable of building.

**11:04** - _Anderson Lawson_

Well, he worked night and day with that.

**11:08** - _Saron Yitbarek_

Lawson left his “RV days” behind and became Director of Engineering and Marketing of Fairchild's brand new video game division. But what Jerry Lawson was about to build for Fairchild wasn't just a new game console, what Lawson was about to build for them was a game changer.

In the early 1970s, a home video game console didn't offer you much. Some systems came with a vinyl overlay you would attach to your TV screen so that the same game would look different. Then there was the Magnavox Odyssey in 1972, which sort of used cartridges, but they had no memory of their own. They just reconfigured the console when you plugged them in. Those predecessors were super limited. The gameplay was limited. But two employees over at Alpex Computer Corporation, Wallace Kirschner and Lawrence Haskel, had cracked something new. They saw what Lawson saw, the potential of microprocessors to revolutionize the gaming industry. Tech historian Benj Edwards explains:

**12:20** - _Benj Edwards_

The guys at Alpex said, "Hey, we could do this with more intelligence. We can make it a software-based system." So they developed a prototype. The very primitive graphics, I think it was black and white at first in a very low resolution, that would hook to a TV set, and they could program it with software. They could make a simple game and play it on the screen, and then switch it out by loading a different program.

**12:43** - _Saron Yitbarek_

But things were still largely conceptual. Back then, removable storage devices meant magnetic, hard-drive disks or even paper tape. It would take several innovations to turn that idea into a consumer product.

**12:58** - _Benj Edwards_

These guys thought, "Let's just take the EPROM chip that we're using for the development kit of the Intel processor they're using, and let's just put that in a box." So they put the chip on a board, a circuit board. They put the board in a box, and the box had a connector on it that had a more durable connector like a 25-pin D connector, so that they could plug that module into their game system and change games out. They could play that game, and unplug that box, plug in another one. And that was the first game cartridge prototype.

**13:34** - _Saron Yitbarek_

Kirschner and Haskel had the seed of something great, a computer-controlled game console with removable software cartridges, but it was a long way from becoming a durable product. That would be Lawson's job once Fairchild had licensed their work. The path from prototype to store shelf would be long and complicated. For starters, Lawson translated the hardware circuitry from the 8080 to Fairchild's own F8 chip. But meanwhile, fundamental questions were cropping up everywhere.

**14:06** - _Benj Edwards_

How do you fit all this circuitry in a box that can sit on top of your TV set, and what does that box look like?

**14:14** - _Saron Yitbarek_

Everything was a first. Kirschner and Haskell for example, had players using a keyboard to play their games. This was a computer-powered experience after all, why not use the computer as the normal interface? But Lawson was set on building a hybrid where microprocessors lived alongside the tactile experience of a joystick you'd find at the arcade, a joystick with 8 axes of movement.

**14:40** - _Benj Edwards_

So you could move your paddle around, up, down, left, right. You could twist the top of the joystick to rotate the paddle’s angle, and then you could move your goalie piece like a different player by pulling up and pushing down on the plunger of the joystick. And that was Jerry Lawson's creation—that idea.

**15:01** - _Saron Yitbarek_

They also had to design a contact system between the cartridges pins and the console, an edge connector that wouldn't get wrecked after being rammed into the console thousands of times by some clumsy kid. And inventing something that could survive rough use was only half the battle, they also had to make it survive the regulators at the FCC. Lawson became famous for wrangling these technical issues. They encased the consoles motherboard in aluminum. They stopped leaking radiation by covering the cartridge adapter with a metal chute. Al Alcorn, the creator of Pong, walked us through the red tape.

**15:42** - _Al Alcorn_

The Federal Communications Commission said, "Wait a second, the FCC had to make regulations to limit the radiation of these new devices coming out so as not to interfere with other devices." And so, they made these regulations based on the only device that was out there at the time, which was the Magnavox Odyssey. And because it was an analog device, not digital, it had very little radiation inherently coming out of it. So the regulations were very strict and without getting too technical, frequencies like 10 megahertz the radiation limit was absurd—absurdly low. The regs were overly tight, it was very, very hard. To get approval, you had to make a prototype device and all the connectors, cables, everything, and physically bring it to the FCC offices in Maryland—and they had this big building there—and sit in the lobby and give them the product and hope for the best.

**16:48** - _Saron Yitbarek_

To move things forward, Lawson pretty much camped out at the FCC's offices for days pushing for long-delayed approvals. You might've noticed that those were hardware problems Lawson was tackling, that's because gaming was still a hardware-first industry back then. The software-focused industry we know today was in fact the one Lawson was about to create. At last, it was ready for market. They called their machine the Channel F.

**17:22** - _Commercial_

Channel F, the one with all the fun. The Fairchild video entertainment system, just $169.95. Video card cartridges $19.95 each.

**17:31** - _Saron Yitbarek_

Channel F hit the shelves in late 1976, just in time for the Christmas rush. Most people didn't notice it was the world's first ROM-programmable video game, though. Its genius was its simplicity. You could use this fantastic software innovation without understanding it at all. These were programmable cartridges, each bearing a game of their own, that even a child can manipulate. There was Hockey, Space War, Blackjack, a whole catalog of programmable fun. It turned out, though, their innovation was a little too much for some.

Christmas morning, Lawson was at the office and got stuck answering the helpline. He found himself a troubleshooter once more, this time for the general public and they had plenty of questions. One customer had taken the console apart looking for batteries. Some kids had put grandpa's dentures in the machine thinking they'd show up on the television.

We forget today how strange a cartridge system would have been when it first arrived, but for the few engineers tackling the problem of re-imagining the industry, his accomplishment was clear. Alcorn told us that Lawson had done something truly remarkable.

**18:54** - _Al Alcorn_

He really was a pioneer in coming up with a cartridge concept and built the first microprocessor-based video game system. To build the first video game, that's engineering, and that's what Jerry did. He certainly opened the door to a lot of what video games became by virtue of simply doing it, of making it work and making a credible system.

**19:24** - _Saron Yitbarek_

And we were surprised to discover Lawson even had a hand in creating Alcorn's own breakthrough, Pong.

**19:31** - _Al Alcorn_

Yeah. Yeah. I mean, he was very helpful on parts that I was designing for the Pong game, certainly helping design the power supply, and then it had a score and that score was very difficult. How do you make numbers appear on the TV screen? It's an engineering challenge. And Jerry says, "All I've got, I've got this new part from Fairchild. It's a CMOS device, and it would put score digits up on the screen on a digital system like that. He gave me a few sample parts, and I hooked it up, and in fact the very first Pong prototype that is today in the Computer History Museum on display—it has those Fairchild parts in it.

**20:20** - _Saron Yitbarek_

The more we researched, the more Jerry Lawson's little known contributions grew in scope.

**20:26** - _Jeremy Saucier_

I'm Jeremy Saucier, and I'm assistant vice-president for interpretation and electronic games at the Strong National Museum of Play.

**20:35** - _Saron Yitbarek_

Saucier says it's critically important to feature Lawson's work at his museum.

**20:40** - _Jeremy Saucier_

Here's someone whose story really hasn't been shared as widely as it should. Really one of the few Black engineers working in this area, certainly in the 1970s, and someone whose impact really in helping to create essentially a platform for what games would become. If we think about what video games were before the video game cartridge, before the interchangeable cartridge console, you had a lot of versions of Pong, a simple tennis game. You had some racing games. You had some other themed games, but they were generally on single systems where they were arcade games. And so, this was really, truly revolutionary.

**21:43** - _Saron Yitbarek_

But you know, revolutions don't always benefit the first heroes through the gate.

**21:48** - _Jeremy Saucier_

Initially, it's going to sell pretty well, a few hundred thousand units, but what you see over time is that it will be overshadowed.

**22:01** - _Commercial_

Thanks anyway.

**22:03** - _Commercial_

\[inaudible 00:22:03\] family bought an Atari video game—they had no trouble getting babysitters.

**22:08** - _Commercial_

Hello. Kate. No, we don't need a babysitter tonight. Bye.

**22:11** - _Commercial_

Everybody enjoys Atari.

**22:13** - _Saron Yitbarek_

Just a year after the Channel F was released, the Atari console arrived, selling millions. Key to Atari's success was their ability to take Lawson's philosophy and put it into action. Their focus was on the games themselves. Al Alcorn was with the company back then, and he remembers how Lawson's work paved the way to Atari's success.

**22:36** - _Al Alcorn_

We determined at Atari that clearly a cartridge-based game was the way to go, and Jerry had put one out well before us, and he's tackled some issues and problems with that and in our game, we were not going to architect it that way. We wanted to get the cost way down. There were too many chips in the Channel F Fairchild system, but it was interesting and very important because he blazed the trail. I mean, at that point when we're doing a cartridge-based game; we sure as hell couldn't say you can't make one because Jerry had done it and it was on the market. And the problem was that the product was a bit expensive because of all the parts that it used, and frankly, Fairchild was not very good at marketing a consumer product at that point in time. These were semiconductor companies.

**23:35** - _Saron Yitbarek_

When you bought an Atari, you got access to Space Invaders, Asteroids, Pac-Man. These were people who knew games. They also had third-party game developers like Activision to boost their catalog. The world Lawson helped to usher in, where game makers were king, ironically, spelled doom for a hardware company like Fairchild. Lawson's son Anderson has a great way of thinking about his father's legacy. Here's a bit more of our chat.

So, when you think about the gaming industry after the Channel F console, what impact do you think that console had made?

**24:18** - _Anderson Lawson_

I mean looking back at that again, the legacy probably is, "Hey, we successfully decoupled the software from the hardware." And that's probably the biggest piece right there. I mean, that's the model that's still followed today. I mean, we went from cartridges to DVDs, and from DVDs to now streaming, but there's still even some games, my son has a Nintendo Switch, they have those SD drives they use as cartridges, so it's the same thing. It's just using different mediums to house the games. So, I just think that's the biggest piece right there.

**25:03** - _Saron Yitbarek_

Absolutely. So when you engaged in a cartridge game, when you used one, or when you blew into it to make it work, did you think of your father?

**25:14** - _Anderson Lawson_

Yeah, so it's funny because blowing into the cartridge, but it was really about the cartridge sitting in the carriage the right way, and it's funny, it spread like wildfire. People were doing that, but I don't think it was really doing anything.

**25:34** - _Saron Yitbarek_

Well you just probably blew the minds of many of our listeners, so thank you for that.

**25:43** - _Karen Lawson_

My name is Karen Lawson, and I am the daughter of Gerald — Jerry Lawson.

**25:51** - _Saron Yitbarek_

We asked Karen about her father's life after he left Fairchild in 1980.

**25:56** - _Karen Lawson_

He created a company called VideoSoft, and his headquarters were right down the street from us—an office space—and he designed games for the Atari 2600. So, it was a story of, you know, if you can't beat them, join them.

**26:16** - _Saron Yitbarek_

In time, Atari was itself surpassed by Nintendo and Sega, which then gave way to Nintendo 64, to PlayStation, to the Wii and Xbox, and then the Nintendo Switch. And as Karen's brother Anderson pointed out, they all have in common this decoupling of the game from the system, the priority of offloaded memory. When Karen looks over the whole history of gaming, she takes pride in knowing her father shaped that industry.

**26:46** - _Karen Lawson_

We just didn't really know what the impact was at the time. Later on, it became apparent that, "Hey well why don't they talk about this? They talk about all these other gaming systems. Why don't they talk about this one?" The thing is, we do know that he was a little disappointed about how that ended up, but not ever disappointed about the accomplishments that he made—never, never. Because everything that came after had a cartridge. No longer were there systems being developed and made where the games were embedded in the console. So when you look at it, it was mind blowing, it really, really was.

**27:38** - _Saron Yitbarek_

Joseph Saulter, who we met at the top of this episode, was the Diversity Chair at the International Game Developers Conference, and it will be his job to give Jerry Lawson his moment of glory. Once he understood everything Lawson had done, he invited him to be honored at GDC 2011.

**27:56** - _Joseph Saulter_

I picked up Jerry in the morning, and we drove him to the session, and he was in a wheelchair because he had lost one of his legs through diabetes. So I pushed the wheelchair into the session and everybody was like, "Whoa, who's this coming in here?" I said, "I'd like to introduce you to Jerry Lawson, the man that created the first cartridge game for the Fairchild F Channel." And people were like, "Whoa, this is amazing. This is a blessing. This is so great. We really didn't know who you were." It was like all of the colleagues that were there were completely stunned at the fact that this man had done what he did. He had been a part of the life of the game industry from the beginning. Right from the beginning, he was the one who set the cartridge game into existence.

**29:00** - _Saron Yitbarek_

One month after the conference Jerry Lawson, 70 years old, passed away having just barely lived to see himself recognized by the industry he helped to create. And why was Joseph Saulter brought to tears when Lawson got his due?

**29:16** - _Joseph Saulter_

So many times in the game development arena, as an African-American, you're very lonely and anybody that's in the industry who is African-American knows what I'm talking about in terms of being lonely to the point of really not being accepted, really being looked at as an outsider. And to know that Jerry had gone through all the things he had gone through, and had survived into a great human being, was so important for me to see that. And it just got to my heart, and I actually started crying. Usually a Black man doesn't want to say, “I started crying,” but it was the sheer knowledge of his participation in an industry that I know is not very accommodating to African-Americans. So the tears were real. The tears were real.

**30:22** - _Saron Yitbarek_

And so was Jerry Lawson's place in history. Lawson's son Anderson remembers.

**30:28** - _Anderson Lawson_

The very last conversation I ever had with my father was about that. I had asked him, I said, "Don't you find it odd that near the end of your life, you're getting your roses?" And he said, "Yeah I do find that odd." But he wasn't upset, he was just, I think, that he understood that it had finally come that people were recognizing him. He liked that. I think he just liked to talk about a lot of the things that he worked on and inspire younger people to get interested. That's really what he was all about. And it wasn't about the game per se, he was more into the scientific aspect of the endeavor if that makes sense. He was a true engineer.

**31:20** - _Saron Yitbarek_

Today, there may be 3 billion gamers in the world, and they're spending about US$200 billion each year on their games. In just a few decades, we've gone from that to this. Even as we were working on this episode, Lawson's contributions were featured in a new docu-series from Netflix called High Score. The world is waking up and realizing it was the cartridge revolution that jump-started the industry, paving the way for game development to become a juggernaut.

The birth of cartridge games shifted the focus from hardware to software, from the console to the game itself. Pong was made by one guy alone in just 3 months. The gaming world that Jerry Lawson helped deliver is one where huge teams spend tens of millions of dollars to build games over the course of years, and those games are now reviewed in the New York Times with the same reverence as operas and symphonies. So, even if cartridges have largely been replaced by the cloud, we're all still living in that rich gaming landscape pioneered by people like Jerry Lawson, innovators who saw that games were ready to level up.

Command Line Heroes is an original podcast from Red Hat. For some great background material on Jerry Lawson, head to [redhat.com/commandlineheroes](https:/en/command-line-heroes/season-5). Next time, we meet the woman who helped make GPS a reality, mathematician Dr. Gladys B. West. I'm Saron Yitbarek, keep on coding.

I'm sorry. I'm still thinking about how blowing on game cartridges doesn't do anything. My world is upside down right now.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-6/jerry-lawson

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
