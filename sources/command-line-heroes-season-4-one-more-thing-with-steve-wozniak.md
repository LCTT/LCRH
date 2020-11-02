[#]: collector: "bestony"
[#]: translator: "xiao-song-123"
[#]: reviewer: " "
[#]: publisher: " "
[#]: url: " "
[#]: subject: "Command Line Heroes: Season 4: One More Thing with Steve Wozniak"
[#]: via: "https://www.redhat.com/en/command-line-heroes/season-4/steve-wozniak"
[#]: author: "RedHat https://www.redhat.com/en/command-line-heroes"

《代码英雄》第四季（8）：史蒂夫·沃兹尼亚克（Steve Wozniak）的另一件事
======
**00:01** - _Saron Yitbarek_

大家好，我是 Saron Yitbarek，红帽原创播客《代码英雄》的主持人。 如果你在数的话，这一季，是我们节目的第四季。在这一季中我们将带你踏上一段历史性的旅程，走进硬件世界以及那些敢于改变硬件制造传统的团队。从 Eagle 微型计算机到 GE-225 大型机，从 Altair 8800 到软盘，从 Palm 的掌上电脑到世嘉的电视游戏机，虽然这些机器现在已经过时，被大家所遗忘，但它们为今天的硬件演变和开发人员的发展铺平了道路。

**00:44** - _Saron Yitbarek_

在此过程中，这些机器通过激发个人计算机革命、开源软件运动和开源硬件运动，改变了计算机历史的进程。但在我们结束第四季之前，还有一件事。

**01:03** - _Steve Wozniak_

我是史蒂夫·沃兹尼亚克，苹果电脑公司的联合创始人。很高兴与您交谈。

**01:08** - _Saron Yitbarek_

如果你能回想下这一季的前面几集，就会发现史蒂夫·沃兹尼亚克的名字不止出现过一次，两次，而是很多次。这是因为沃兹（人们对他亲切的称呼），他不仅经历了那段历史，而且在其中发挥了重要作用。这个非常特别的代码英雄坐在这里和我们谈论他在硬件历史上的亲身经历。我们先从询问他第一件钟爱的硬件开始。

**01:42** - _Steve Wozniak_

在我很小很小的时候，大概10岁，我爱上了一台晶体管收音机，很多年以来，我睡觉的时候都会把它放在脑袋旁边播放音乐。 这算是第一步，在那之后还经历了许多步骤，仅在我做过的科学展览中就有几百个不可思议的部分。现在，如果你谈到计算机化和命令行的东西，我10岁那年，不知何故发现了一本叫做《数字逻辑》的手册，我用它在纸上玩游戏。在那时我就说，“计算机将会是我一生的挚爱”。

**02:19** - _Saron Yitbarek_

 20 世纪 60 年代，当史蒂夫·沃兹尼亚克还在上高中的时候，他有机会在通用电气公司（GE）带入他学校的一款电传终端机上试用分时系统。也就是我们在第二集中介绍 GE-225 大型机时讨论过的系统。

**02:37** - _Steve Wozniak_

那时候你是不能从书和杂志中找到“什么是计算机？”这个问题的答案的。在高中时我得到了参与一次测试的许可...我想我得到了，是我们几天前才买的一个小装置。它是一种和时分系统相连的电传打字机，在这上面可以运行一些用 BASIC 语言编写的程序。我在上面做了一些实验并且感叹道：“ BASIC 语言真的是简洁。”

**02:58** - _Saron Yitbarek_

沃兹尼亚克上高中的最后一年，他的电子老师安排他去加州森尼维尔的一家当地公司西尔瓦尼亚学习如何编程。

**03:10** - _Steve Wozniak_

我的电子老师让我去一家公司每周用 Fortran 语言在一台 IBM 1170 上编程，我想那是计算机的编号，而且我没有看到它的结构。但是当我有一天去那里的时候，我在一个工程师的桌子上看到有一本书，叫做《小型计算机手册》，它描述的是 PDP-8 微型计算机。

**03:33** - _Saron Yitbarek_

在第 1 集中，我们介绍了《新机器的灵魂》这本书中讲述的故事，该故事讲述了通用数据公司的小型计算机 Eagle 是如何对抗数字设备公司的小型计算机 VAX 的。PDP-8 是 VAX 的前身，并且也是数字设备公司第一个成功商用的微型计算机。

**03:53** - _Steve Wozniak_

他们给了我使用手册，并且让我把它带回家研究。我的天啊，这本手册上记录了所有的微型寄存器中不同的 1 和 0 代表什么意思，那些指令有什么含义，以及数据是如何存储在内存中的。于是我开始坐在纸上说:“我想知道我能不能设计一台电脑。”这对我来说是一个很不同寻常的开始。我拿到了这本小册子，我可以按照这本小册子来订购零件。此时的问题是怎么能找到一家电脑公司，并且得到这家公司的地址呢？

**04:19** - _Steve Wozniak_

我会开车去斯坦福直线加速器中心，世界上最聪明的人不会锁门（所以那里会开着门的）。我会在周日那天去他们的主楼四处走走。我在那里的二楼找到图书馆坐了下来，那里有计算机方面的期刊和杂志，你也可以在图书馆中的小卡片上订购手册。我订购了一本通用数据公司的手册，拿到它以后，我了解到了更多信息：总裁、运营主管和软件与工程主管的姓名。但是你知道那不是我想要的。

**04:51** - _Steve Wozniak_

我想要知道 1 和 0 的内核。在最后一页上有一条指令，那是一条算术指令。我习惯于每台电脑都有 56 条指令。每个指令，每一个小比特，都有各自的小意义。一个比特可能代表在加法之前设置进位。另外三位比特可能意味着你要做加法，减法，异或运算，以及其他一些运算。那么其他的比特就会问：等一下，你是补码运算的结果还是移位运算的结果？移位运算有进位吗？每一个比特都有各自的意义。

**05:21** - _Steve Wozniak_

从微型计算机问世以后，我终于坐下来，每个周末都在设计计算机。我坐下来设计它，每一个具有意义的比特，其实就是一根连接到芯片上的线，用来实现具体的功能。它的芯片数是我所有其他微型计算机设计的一半，而且效果一样好。我的墙上贴着那张他们和宣传册一起寄来的海报，就像普通的计算机设备一样，它是放在机架中的，因为它是前面板，代表着 0 和 1 的开关和灯，所有的这些东西让人讨厌。

**05:54** - _Steve Wozniak_

但是他们还有另一张图片，就像那种放在桌面上的台式机那样。这引起了我的兴趣，你怎么能想象出电脑居然可以放在桌上呢？我告诉我的父亲我爱上了它，肯定的对我父亲说：“总有一天我会拥有一台 4 K 大小的通用数据公司的 Nova 牌电脑。”为什么大小是 4 K ？ 因为需要 4 K 的空间才能运行像我编程所使用的 Fortran、ALGOL 或是 PL / I  这样的语言。我之前从来没有用 BASIC 编程过，我把这个告诉我爸爸的时候，他说这个电脑和房子一样贵，我回答道，“那我就住在公寓里。”当时就决定：我要有一台可以真正使用的电脑，尽管要整天切换 1 和 0，用按钮来把它存入内存，但这就是我想要的，它甚至比房子更加重要。

**06:42** - _Saron Yitbarek_

通用数据公司的 16 位 Nova 牌微型计算机是 Eclipse 公司 32 位微型计算机的前身，就是第一集中代号为 Eagle 的那个。实际上，正是 Nova 微型计算机启发了沃兹的工程设计理念。

**06:59** - _Steve Wozniak_

这台计算机教会了我，应该始终对架构进行设计，以使用最少的结构和零件。那是我非常擅长的事情，我一直在从事设计工作，总是试图得到使用越来越少的芯片的架构。如果围绕已有的芯片进行设计，那么从某种意义上讲，可以用更少的零件、更少的工作量、更少的工作来理解它。后来这也成为我设计的口头禅，始终寻求简单、直接、易于理解的方法。不要构建出这样复杂化的东西：来让一项工作在 20 个芯片上运行，实现正确的功能、得到正确的信号。而是寻找简单、直接的方法。

**07:39** - _Saron Yitbarek_

沃兹的设计理念让我想起我们在第五集中提到的 Palm 公司用来开发应用程序的 Zen 方法：让它变简单。

**07:51** - _Saron Yitbarek_

还记得第3集中我们谈到的 Altair 8800 和个人计算机的诞生吗？ 史蒂夫·沃兹尼亚克参加了家酿计算机俱乐部决定性的第一次会议，当时他一直制作自己的计算机版本。

**08:07** - _Steve Wozniak_

在那里，我展示了这些视频游戏的所以设计，比如雅达利游戏，我甚至为雅达利设计出了“越狱”版。我还看到了当今互联网的前身：ARPANET，它最开始的时候全国大概有五六台计算机。我在会议上见到了许多人，在那时我已经知道如何设计东西了。我把我的电视机作为电子游戏的输出，用一个 60 美元的键盘做了一个小终端。在那时，这个键盘是这些东西中最昂贵的部分。我有一个键盘和一个视频显示器，我可以通过电话线与 ARPANET 联系，在那些日子里，通过电话线调制解调器发送非常缓慢的短信，我可以在波士顿的一台电脑上打字，它可以给我回输。我可以切换到加州大学洛杉矶分校的电脑上，可以在上面阅读文件，运行程序。这太不可思议了！

**08:57** - _Steve Wozniak_

我听说有一家没有名字的俱乐部正在开业，它只是一群技术爱好者组成的。我想，“哦，天哪！我可以在这里炫耀我的这个小设计，没人知道其实可以使用自己的电视来进行显示。我会去展示我的设计并把它传播出去，我将成为英雄。” 我到了俱乐部后，那里的每个人都在谈论这个叫做 Altair 的东西。 它曾出现在《大众电子》杂志的封面上，但我对此一无所知。有些在俱乐部进行参观的人，谈论现在可以花400美元购买一台计算机。 这是一台只有 256 字节内存的机器，它使用了静态 RAM。 它只是一个 Intel 数据手册、一个 Intel 微处理器，Intel 展示你可以用这种方式连接到这些开关和灯，然后你可以有一个小系统来输入 1 和 0。

**09:39** - _Steve Wozniak_

五年前，我用自己买的芯片设计并制造了自己的计算机。我曾经做过这些事，所以很清楚这些人在看什么，400 美元对一个人来说是负担得起的。设计师不得不围绕静态存储器进行设计，静态存储器是计算机中最昂贵的部件，这也是为什么它只有 256 字节的内存的原因。但如果你必须拥有 4 K 的内存才能使用一种编程语言，静态内存的昂贵超出了任何正常人的能力范围，所以我们甚至不会认为它是一台能做有用事情的电脑。什么是有用的事情?遇到问题，输入程序，解决问题。

**10:14** - _Steve Wozniak_

And now, I'm sitting there thinking. I'm working at Hewlett-Packard on calculators that work with humans, and I have my little machine that can talk to a computer far away on the ARPANET. I said, "Wait a minute." I discovered the price of microprocessors had finally come down. The Intel one was $400. I could not afford that. For a single microprocessor, that's what the Altair was based on: Intel. And then as an HP employee, I could buy a Motorola 6800 for $40. Whoa. So I designed my computer to put a microprocessor and memory. Not expensive static memory that you can't afford, 32 chips worth. Just eight chips of dynamic memory and then five other chips to help cycle it and make it not forget its data. It's called refreshing.

**10:56** - _Steve Wozniak_

So I designed that computer around the 6800 from Motorola, and then a company introduced the 6502 microprocessor at a show in San Francisco and, oh, I bought that microprocessor, you know, and I knew—the whole formula was in my head. I'd have my own computer very soon. And I did.

**11:17** - _Saron Yitbarek_

Woz wasn't a big fan of the BASIC language. But with the introduction of Altair BASIC, the start of Microsoft software business, he realized Bill Gates and Paul Allen's version of BASIC would become widespread.

**11:31** - _Steve Wozniak_

Now the Altair, once it was out in our club, we knew very well. Bill Gates and Paul Allen had developed a BASIC for it. And I sniffed the wind. The key to computers in the home was going to not be what computers were used for traditionally, which was inventory levels, sales figures, employment, all the stuff big companies did with mainframes. No, it was going to be games. The key to it was games. And the key was BASIC. I had programmed in Fortran, ALGOL, and PL/I, and some assembly languages, the scientific languages. I had never touched BASIC in my life except for those three days in high school because it was a kid's language kind of.

**12:08** - _Steve Wozniak_

It wasn't really the language we scientists use, and I said, "Gotta have BASIC on this machine." And the trouble is I had no one else working with me. I mean, I not only developed the hardware, I had to write the BASIC language. I'd never taken a course in writing languages, so I wrote my own BASIC. I went into Hewlett-Packard at night where I worked, and I opened up the BASIC manual, and I started making notes on paper what all the commands were in BASIC. I didn't realize that BASIC was not BASIC—that the BASIC that digital equipment used that was in all the books and Bill Gates had programmed was totally a different language in how they handled strings of characters, words.

**12:45** - _Steve Wozniak_

They handled words totally different than Hewlett-Packard. I just thought if you write a BASIC, you make your own computer running BASIC, it's the same everywhere. No, it wasn't. So that was a key of the Altair was realizing that now you have to have a language, and the language is BASIC or people won't want it in their homes.

**13:03** - _Saron Yitbarek_

In episode 4, we learned how the floppy disk came to be, but this portable storage method only became ubiquitous with the invention of the Apple II's disk drive. Steve Wozniak created this beautiful piece of hardware in a high pressure, two-week time frame. Here's his story.

**13:25** - _Steve Wozniak_

An issue came up at Apple actually. What we started out with was an Apple II computer with cassette tapes. That means you manually, if you wanted a certain program, you search through the cassette tape, found that program, put it in a tape player and read it into your computer. It wasn't like you could type “run checkbook” to run a checkbook program. I wanted to get to that level someday, and we had a staff meeting, and they were going to allow ... Apple, since we were less than a year old ... Apple, Commodore, and Radio Shack, three personal computer companies, into the CES show in Las Vegas, Nevada.

**14:00** - _Steve Wozniak_

Wow. I had never seen Las Vegas except in movies. I wanted to go there, and in our staff meeting it was said, "Well, we're only going to send three marketing people." Mike Markkula, who ran marketing and was our investor, equal stock owner to me and Steve Jobs. Steve Jobs would go, and our sales guy, Gene Carter, would go. And I was thinking, I'm just too shy to say, "Hey, I'm a founder. Let me go see Las Vegas. Pay for me to go." So I raised my hand. I don't know why I did this. The show was in two weeks. I said, "If we have a floppy disk, can we show it?" Mike Markkula said, "Yes," and my wheels are spinning. He was the adult in the company. My wheels are spinning in the back of my head.

**14:38** - _Steve Wozniak_

If I can develop a floppy disk, not knowing a thing about disks, hardware or software, if I can do it in two weeks to where you can say “run checkbook,” they'll have to take me to Vegas. If they're going to show the floppy disk, they'll have to take me. I worked every single day, day and night, New Year's Day, Christmas Day, every day I worked on it.

**14:59** - _Steve Wozniak_

I first looked at the Shugart five-inch floppy disk. I looked at it, and I sort of reverse engineered it in my head, and I took everything apart and I said, "All it needs is chunks of data, zeroes and ones, four microseconds each. I can supply that from my computer with one wire." So I took out all the Shugart digital chips, all the ones that would step tracks, track to track to track with what's called stepping motor, had phases, A, B, C, D, and every other phase. A would be a track one, and then you go B-C, and now you're on track two. And you go D-A again, you're on track three. I stripped out 20 of their chips to begin with, and then I said, "I'm just going to have the minimum circuits I can."

**15:36** - _Steve Wozniak_

I came up with, in the end, seven little $1 chips, and I could write those data bits out four microseconds at a time to meet the specs of the floppy disk. And my computer could do the software to figure out what ones and zeroes I had to send that equaled ones and zeroes in a different coded data form. But the more difficult thing was, then I got it to where I could write it, and I could look with an oscilloscope and see the data going up and down, but I don't know where any of it starts and stops. Now I have to read it.

**16:04** - _Steve Wozniak_

To read it, you have one bit coming in, and what you can do is you can wait ... it's going to switch in either four or eight microseconds, so around six microseconds, you could build in little timers and say, "Did the signal go from up to down or down to up in those periods?" It would have taken me so many chips, 10 to 20 chips, who knows, with timers in there to determine when is it really making the decision to flip. And then I said, "I've got a little seven megahertz clock, and I'll make what's called a state machine." I'd had a state machine course in my third year of college, and a state machine basically has an address that says where I am now, or a state number, and I just think of addresses into a little ROM chip, a little 256 by 8 ROM chip that was available now.

**16:48** - _Steve Wozniak_

I'll put an address in that's at state. That's where it is now in deciding things, and in comes this one bit that's coming from the read head of the floppy. I'll put that one read bit in, and then the ROM decides here's what my next state will be, and then here comes the bits the next day. And I could flip it—28 of those cycles at seven megahertz equals a four-microsecond stretch, and I could just have it go to stage one, stage two, stage three, stage 28, and then eventually around stage 40 or something, it makes a decision. Did I get a pulse or not? I'll shift a zero or I'll shift a one into the register that goes to the computer.

**17:23** - _Steve Wozniak_

This whole thing was two chips just to read all that data. I look back, I do not know where the magic was pouring out of my head in those days. I just looked at what's the problem, what is the absolute minimum number of parts to do that job and not how it's ever ... because I'd never known how it was done before. I had a high school programmer, Randy Wigginton, working on this with me all those days too. When I got all done, I said, "Why are the other boards so big that they sell for Altair and the S-100 computers?"

**17:51** - _Steve Wozniak_

And I pulled out, I think it was a North Star eight-inch floppy disk or something. I looked at their board, and it had like 50 chips on it. I only had eight on mine, and I could handle two floppy drives. And it worked. We introduced it at the show. I got to see Las Vegas, I got to teach my high school friend Randy how to play craps, and he won 35 bucks, and that was a big, important difference. To be able to run a program is a huge step for a user.

**18:21** - _Saron Yitbarek_

In episode 6, we learned about a whole new generation of makers, the people behind the open source hardware movement. This movement has been compared to the Homebrew Computer Club and all the collaboration and innovation that was going on then. We asked Woz what he thinks of the creativity and openness being generated in hardware again.

**18:44** - _Steve Wozniak_

Well, I believe in it. And you should always make things and share what you have and make it possible for others to use their own skills and experience and expand on it and do something new and more than you had even thought of originally and apply it to a lot of different applications in the world. Not just one tiny one that you understand. No, I'm totally for that. And a lot of the embedded processors now, these tiny little processors, here's a guy who actually built a business card, as thin as a business card with a little flat chip on it, you know barely, and it plugs into USB. For $2 he builds it, and it's a full Linux computer.

**19:17** - _Steve Wozniak_

These things are just so exciting. I built a little a PDP-8 kit, PiDP-8 they call it. The Raspberry Pi is the computer, and the kit is just all the lights and switches for the old PDP-8 minicomputer, and it can run some PDP-8 programs from back then. Only has 4K of memory maximum, and it's how do you connect it to something. The processor is now software inside of a Raspberry Pi. And now you can connect Raspberry Pi to sensors and output devices, and people will want to experiment and explore.

**19:52** - _Steve Wozniak_

Going back to building some of the retro computers sure teaches you how hardware connects to hardware and how to hook it up and how to do more things with it. What can I do that hasn't been done yet? A little bit differently maybe. That's what I love. The independent person, usually a student. I want to learn, I want to try something. It doesn't have any value in life. I look back to a series of projects, maybe 10 or 15 projects where they didn't have any value. They were just fun things I thought of at the time: "Maybe I can do this. I'll try putting this together. I'll build this up." If you know how a chip is constructed inside, you could figure out how the whole circuit is going to work.

**20:28** - _Saron Yitbarek_

As one of the founders of Apple, Steve Wozniak is an icon of modern technology. But for him, success isn't about fame. What's most important is being seen for his work, and that work starts at the command line.

**20:45** - _Steve Wozniak_

All my life, even before Apple, I was doing a lot of projects on the side for companies, electronic projects like the first hotel movie system ever, timecodes for the one-inch tape reels that television stations used. I was doing all the circuits, and I was always proud of my engineering. I wanted other engineers to look at my work, as an engineer could see things that a normal person can't. Not what it does, how it's built. And I wanted them to look at it and “Whoa” and be amazed at my engineering skills.

**21:14** - _Steve Wozniak_

Recently, I got an IEEE fellowship. That's the highest electrical engineering kind of acknowledgement by other engineers you can get in your life. I mean, it just almost brings tears to me. That's what I wanted. Not to start a company, not to start an industry as much as I wanted to be known as a great engineer. Now engineers can see what I did. They see the effects of it, but they can't look at my schematics and my code and say, "How did you do that code?"

**21:41** - _Steve Wozniak_

It is one of the most meaningful awards I've ever gotten in my life. Because that's what I always wanted. And nobody knows that. Everybody thinks, "Oh, my first computer was an Apple II, and I did this and that on it and ran these programs at school and wow, and you designed it." That's cool. But they aren't looking from the engineering point of view.

**21:58** - _Saron Yitbarek_

Thank you, Steve Wozniak, for joining us on Command Line Heroes. Before I close out the season, I'd like to bring on another special guest to tell you about season 5.

**22:10** - _Clive Thompson_

I'm Clive Thompson, author of the book, Coders. I'll be Saron's fireside guests during season 5, all about the career life of developers. Don't miss it.

**22:21** - _Saron Yitbarek_

Command Line Heroes is an original podcast from Red Hat. Go to [redhat.com/commandlineheroes](https://www.redhat.com/commandlineheroes "redhat.com/commandlineheroes") to check out all our great research on the hardware you heard about this past season. I'm Saron Yitbarek and ...

**22:34** - _Steve Wozniak_

I'm Steve Wozniak. Keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-4/steve-wozniak

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
