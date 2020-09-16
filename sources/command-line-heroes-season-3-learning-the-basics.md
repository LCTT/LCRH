[#]: collector: "bestony"
[#]: translator: "erlinux"
[#]: reviewer: " "
[#]: publisher: " "
[#]: url: " "
[#]: subject: "Command Line Heroes: Season 3: Learning the BASICs"
[#]: via: "https://www.redhat.com/en/command-line-heroes/season-3/learning-the-basics"
[#]: author: "RedHat https://www.redhat.com/en/command-line-heroes"

Command Line Heroes: Season 3: Learning the BASICs
======
**00:02**-  _Saron Yitbarek_

1965 was a year of massive change in America. The Civil Rights Act was signed.

1965 年是美国史上发生重大变化的一年。民权法案就在那年签署的。

**00:09**-  _Archival news_

Congress passes the most sweeping Civil Rights bill ever to be written into the law.

国会全面通过了民权法案，并写进法律里。

**00:12**-  _Saron Yitbarek_

Combat troops were sent to Vietnam for the first time. Men burned their draft cards.

作战部队被第一时间被送往越南。男人烧掉了他们的士兵证。

**00:19**-  _Archival news_

Draft cards on the steps of a Boston courthouse. A group of high school boys set upon them with fists.

草拟卡放在了波士顿法院的台阶上，一群高中男生在用拳头胖揍它们。

**00:25**-  _Saron Yitbarek_

The Beatles delivered the world's first stadium concert in New York. But, far from all those headlines, a revolution of a different kind was underway.

披头士乐队在纽约发出了世界第一场音乐会。但是，远离这些大新闻的地方，一场与众不同的革命正在酝酿。

**00:39**-  _Saron Yitbarek_

4:00 AM, May 1. Professor John Kemeny and an undergrad student were working at a GE 225 computer at Dartmouth. They ran a program they'd been working on, and then the teletypewriter produced three short lines of output. Those three lines changed computer programming forever.

五月一号，上午四点。专家 John Kemeny 和一个大学生正在达特默斯（美国马萨诸塞东南一城镇）的 GE 225 型电脑上忙碌着。他们运行了一个他们已经为之努力了很久的程序，电传打字机打出了三行输出。而这三行输出永远的改变了计算机编程。

**01:04**-  _Saron Yitbarek_

Welcome to episode 2 of Command Line Heroes, an original podcast from Red Hat. I'm your host, Saron Yitbarek. In this episode, we continue our season-long journey into the history and future of programming languages. In episode 1, we dove into Python, and learned how open source language communities survive major upheavals in their leadership. But this time, we're getting more personal. We're looking at an experience we've all had, the experience of encountering our very first language. We'll take a look at my first language, Ruby, and we'll learn how some first languages come to us in the form of a game.

欢迎来到红帽播客，命令行英雄的第二集。主持人就是我—— Saron Yitbarek。在这一集，我们继续 “计算机语言的过去与未来” 中完成整季的旅程。在第一集中，我们深入研究了 Python 以及学习到开源社区如何在领导阶层大动荡中生存。但现在，我们要更加私人化。看一些我们已经得到的经验，这些经验遇上了初代语言。我将带领你们看下我的第一门语言 ruby 以及我们将学习到一些初代语言如何以游戏形式来到我们身边。

**01:50**-  _Saron Yitbarek_

But we're beginning with an example that can help us understand what "first languages" really means. It's the language that was born in that Dartmouth laboratory with those three short lines of output. At that pre-dawn meeting in 1965, John Kemeny witnessed the birth of his co-creation, BASIC.

让我们从一个可以帮助理解什么是 “初代语言” 真实含义的例子开始吧。初代语言诞生于（上述提到）三行输出的 Dartmouth 实验室。在 1965年黎明前的会议上， John Kemeny 见证了共同创造出来的的 BASIC 的诞生。

**02:14**-  _Saron Yitbarek_

BASIC. It stands for Beginner's All Purpose Symbolic Instruction Code. That first word, “beginner's,” is where the magic lies. In the early days of programming, you pretty much needed a PhD in order to do a little coding. It was an elite pursuit that required major education, not to mention major hardware. But Professor Kemeny and his team wanted to change all that. What would it look like, they wondered, to produce a programming language that anybody could use? While teenage baby boomers were demanding change all across America, the team at Dartmouth proposed a shakeup of another kind.

BASIC，他是初学者的通用符号指令代码的标准。这里面第一个词 “初学者” 是个神奇谎言。在编程早期，你非常需要为了做一些小的编程使用 PhD。这是一个精英对接受专业教育的追求，不是提及硬件就可以的。但是教授 Kemeny 和他的团队希望改变现状。他们想知道:生产一个所有人都可以使用的编程语言是什么样的？当十几岁的孩子们强烈要求美国改变的时候，Dartmouth 团队提出了另一种类型的改变。

**02:57**-  _Saron Yitbarek_

Their secret weapon was a room-sized mainframe computer, that GE 225. Weighing in at a healthy 2,000 pounds, it was capable of something brand new. The GE 225 was capable of time-sharing. Suddenly, the complicated system of punch cards, or enormous walls of switches, wasn't necessary anymore. Time-sharing meant that a whole bunch of programs could be executed almost simultaneously, with the machine's attention bouncing between users.

他们的秘密武器是房间那么大的大型机 —— GE 225。它重达 2000 磅，它具备全新的功能，具备分时（译者注:也就是时间片，实现了多用户操作）功能。突然间，不再需要复杂的打孔卡系统或庞大的开关墙。分时意味着整个一堆程序可以同时执行了，因为机器的附加弹跳在用户之间。

**03:31**-  _Saron Yitbarek_

Time-sharing meant that access to computing could expand in amazing new ways. Here's some audio from Dartmouth, featuring one of the undergrad’s studying there when BASIC first appeared. He's John McGeachie, class of '65.

分时意味着访问计算可以以不可思议的新方式扩展。这是来自 Dartmouth 的些许录音，记录了 BASIC 刚诞生的时候，其中一位大学生在那里学习。他是65岁的John McGeachie。

**03:47**-  _John McGeachie_

We had taken a fairly expensive computer that could only be used by one person at a time, and converted it into something where it wasn't just 30 users who could use it. It was 30 undergraduate students using this computer simultaneously, writing programs, getting answers quickly. It was a combination of immediacy and simplicity that had not previously existed.

我们采取了一个公平扩展计算机的方法，使得一次只能一个人用转换成了 30 个谁都可以用。30的大学生同时使用它也可以了，写程序快速得到回馈。它结合了直接和简朴，这在之前是史无前有的。

**04:15**-  _Saron Yitbarek_

John Kemeny had teamed up with Thomas Kurtz, another evangelist for computer literacy, to develop the BASIC language. They saw how time-sharing democratized things, and knew that the barrier for entry was suddenly so much lower. All that was needed was a language that prioritized simplicity and immediacy. A language like BASIC.

John Kemeny 联合了 Thomas Kurtz, 以及另外对计算机文化的传道者，去开发 BASIC 语言。他们见证了分时如何公平化事务，以及清楚整体供电如何突然骤降这么多。这些都需要简单高效的编程语言，就像 BASIC 的语言。

**04:39**-  _Saron Yitbarek_

They developed commands like "hello" and "goodbye" instead of "log on" and "log off." In fact, the first version of BASIC only had 14 simple commands, just easy options like if, then, and go to.

他们开发了类似于 “你好” 和 “再见” 来代替 “登录” 和 “登出” 的命令。事实上，初版的 BASIC 只有 14 个简单指令，像条件if判断，与或操作和跳转的简单选项。

**04:54**-  _Tom Cormen_

I am Tom Cormen. I'm a professor of computer science at Dartmouth College.

我是  Tom Cormen。我是达特默斯大学，计算机科学领域的一名教授。

**04:59**-  _Saron Yitbarek_

Professor Cormen spoke with us about that beginner's revolution, and how the creation of BASIC really did feel like part of a new zeitgeist, a world where computing was exciting to more people. Even a little bit hip.

Cormen 教授告诉我们关于当时那伙人的革命，以及 BASIC 的创造如何像新时代精神的一部分，一个计算机激励了更多人的世界。甚至有点赶时髦了。

**05:14**-  _Tom Cormen_

At the time in the 1960s, it's said that the male students would bring their dates there, and I can't really imagine that happening now. But at the time, the computer center was the cool place to be.

在1960年时，据说男学生在这里约会，我真是不能想象现在发生的话。但在那个时候，计算机中心一度是最佳场所。

**05:24**-  _Saron Yitbarek_

This new interest in computing on campus was the immediate result of that first beginner's language.

对大学里运作计算机这种新爱好，是初代使用者语言的直接结果。

**05:31**-  _Tom Cormen_

BASIC opened up computing to people who weren't just computer jocks, as we used to say back then. Social scientists who really didn't want to get into the weeds of a language like FORTRAN could use BASIC, and people doing work in the arts and humanities, if they were doing text analysis, or even trying to create art, they could use BASIC for that.

就如同我们过去说的那样，BASIC 向那些计算机爱好者开放了计算。不想去除 FORTRAN 这样语言的社会学家可以使用 BASIC，以及人们在人文艺术中工作了。如果他们做文字分析，或仅仅尝试创建技术，他们完全可以使用 BASIC 完成。

**05:55**-  _Tom Cormen_

After a few years, people were doing things like writing computer games, and also incorporating computer graphics routinely into their work.

很多年后，人们开始做一些类似写电脑游戏的事情，也开始在他们的工作中常常使用到计算机图形化。

**06:03**-  _Saron Yitbarek_

All those kids who didn't necessarily see themselves as programmers suddenly got into programming on an almost intuitive level. It reminds me of the kind of world Grace Hopper pushed for. When we talked about Hopper last season, we saw how her language innovations brought programming to a wider circle. This BASIC moment, it was like a continuation of Hopper's dream.

所有这些不需要知晓他们自己成为程序员的孩子们，突然有了进入了直觉编程的水平。它使得我想起来 Grace Hopper所追求的那种世界。当我们上季谈论关于 Hopper 的梦，我们看到她的创新语言将编程带入了更大的地方。这是 BASIC 的时刻，它就像是一个 Hopper 梦的后续。

**06:29**-  _Tom Cormen_

I'm sure Grace Hopper would've liked seeing more people coding. She probably would've liked that BASIC had a different slant from COBOL, and that it just opened things up to people even more and gave them a choice. They could write in COBOL, they could write in FORTRAN, they could write in BASIC, they could write in ALGOL. Any of the popular languages of the time.

我非常确信 Grace Hopper 很高兴看到更多的人写代码。她可能喜欢有一点不同与 COBOL 的 BASIC，以及它为人们敞开了大门，提供了更多的选择。他们可以写 COBOL，可以写 FORTAN，可以写 BASIC，可以写 ALGOL，当时的任何流行的语言。

**06:54**-  _Saron Yitbarek_

Tom Cormen is a professor in Dartmouth's computer science department. A new generation of computer programmers was ushered in thanks to a couple of major changes. Simultaneous work made possible by time-sharing, and a new simple language, BASIC. Those two factors combined to create a game-changing spark. Soon, it wasn't just massive institutions that could get into programming. It was mavericks like Bill Gates and Steve Wozniak. It was also everyday programmers just exploring on their personal computers.

Tom Cormen 是达特默斯CS专业的一名教授。新一代计算机程序员引入了大量新变化。并发工作因为时间片变得可能，别忘记新的通俗易懂的语言 —— BASIC。这俩个因素结合在一起创建出了改变游戏规则的星星之火。它并不是最大建立可以进行编程。引以为傲的还有比尔盖茨和史蒂夫乔布斯，程序员的他们日常在个人计算机上进行探索。

**07:32**-  _Denise Dumas_

To be able to interact with a language to get immediate feedback when something was wrong, that made all the difference in the world, because it sucked you in, it kept you going, and the interaction was meaningful, because it was an interaction.

为了能够互相影响在出问题的时候马上得到语言的反馈，在世界做出了很多不同。因为它吸引了你，这种交互是有意义的，它使你继续前进，因为它是一种交互。

**07:50**-  _Saron Yitbarek_

This is Denise Dumas. She runs the Red Hat® Enterprise Linux® engineering team.

这位是 Denise Dumas，她带领 “红帽企业版操作系统” 工程师团队。

**07:55**-  _Denise Dumas_

I mean BASIC democratized programming in a big way, because it put it in the hands of students, in the hands of people, in a way that COBOL, FORTRAN, the other languages of the day ... it just wasn't possible. It became really popular at a time when CRTs (cathode ray tubes) became popular, so instead of typing something in and getting it printed on a piece of paper, it displayed on a screen in front of you.

我认为 BASIC 使编程民主化，向前走了一大步。因为 BASIC 把当今的 COBOL，FORTRAN，其他语言以一种方式交到了学生、人民的手上。这曾是不可能的。当 CRTs（阴极射线管）变流行的时候，BASIC 在当时更为火爆。所以，它显示在您前面的屏幕上，而不是输入内容并将其打印在纸上。

**08:26**-  _Denise Dumas_

We laugh at command line sometimes now, right? Everything is graphics, but the command line is what there was, and it was such an improvement over what had been. That was huge, just to type something in and get a response. I think that BASIC lowered the bar, and I say this as someone who actually loves assembler, because that's the kind of control freak I am. But I think BASIC made it much more approachable.

我们现在有时候再命令上很高兴，对吧。一切都是图形化了，命令还是一如往常，但它比以前的版本有了很大的改进。命令行曾是重大的，你输入一些内容进去然后得到回应。我认为 BASIC 降低了标准，我是说如我这样的控制狂，一个真正喜欢汇编程序的人， 但 BASIC 使它变得更加平易近人。

**08:59**-  _Saron Yitbarek_

The excitement BASIC created in the 1980s lives on today, with a whole fleet of languages that beginners use as shiny red doors into the world of programming. Yet something important has changed, because those entrances don't just show up on university campuses anymore. The way into programming is becoming even more open.

令人兴奋的 BASIC 于1980年被代创造，一直存在到今天。一整套语言被初学者用作进入编程世界的光明大道。 但是重要的事情已经改变了，因为那些入口不再仅仅出现在大学校园里了。 编程方式变得更加开放。

**09:29**-  _Saron Yitbarek_

As amazing as BASIC was, Grace Hopper's dream wasn't going to stop there. Today, beginners have a hundred ways to find their start, and for me, learning a first language meant attending an institution called the Flatiron School in New York City. I prepared for months for that program. I read every single programming resource and tutorial that I possibly could to make sure I got the most out of my bootcamp. I wanted to learn about how people today discover that first language. So, I headed back to interview my old teacher.

和BASIC一样神奇，Grace Hopper 的梦想不会止步于此。 如今，初学者有一百种方法可以找到自己的开始（编程语言）。就我而言，我是就读于纽约市一家名为Flatiron的编程学校，学习的第一门语言。 我为那个程序准备了几个月，阅读了每个编程资源和教程，它们也许能让我再训练营中获得最大收益。 我想了解当今人们如何发现第一语言。 所以，我回去采访我的那位年长的老师。

**10:03**-  _Avi Flombaum_

I'm Avi Flombaum.

我是 Avi Flombaum.

**10:04**-  _Saron Yitbarek_

Avi's one of the founders of the Flatiron School, so it was a treat for me to dig into all these thoughts about first languages, and how our approaches to first languages have changed since the old days of BASIC.

Avi是Flatiron学校的创始人之一。对我来说这就是一种享受，探究所有有关第一语言的思想，以及自有了 BASIC 以后对我们第一语言发生了怎样的变化。

**10:26**-  _Saron Yitbarek_

So when you are teaching someone how to code, where do you begin? I remember when I first learned my first programming language, thinking, this is so weird. I was an English major, I really liked math when I was in school. I liked organic chemistry. There were a lot of things that I was really into, a lot of different subjects, but there was nothing I could connect coding to. There was nothing that was a good analogy. It just felt like its own little world, so as a teacher, where do you start?

当你教谁谁谁该如何编程时，先从哪里下手呢？ 我记得当我第一次学习第一门编程语言时，感到这么奇怪。 我当时是英语专业，在学校里我是真的很喜欢数学，喜欢化学。我真的很成谜很多不同的主题，但是没有什么是和编程有关的。 没有什么比这更好。 感觉就像是自己的小世界，作为老师，你从哪里开始？

**10:49**-  _Avi Flombaum_

I think that anything that is familiar to you in life was once foreign, and experiencing it and wading in its waters and actually spending time with it is what makes you comfortable with it, and it's just a question of reps, and really just time that you put into it. I think what makes programming difficult, and what makes it feel so foreign, is that it is a tremendously particular syntax for expressing something. There's zero ambiguity. There's no margin of error. It either works or it doesn't. When we communicate to each other, we generally don't have that kind of requirement, where everything has to be exactly correct. One comma is off, one parenthesis is missing, and it's all broken.

我认为生活中您所熟悉的任何事物都曾经是陌生的，经历并涉水涉猎，然后花时间与之共处，这才使您对它感到满意，这只是代表问题，而实际上只是时间 你放进去了。 我认为是使编程变得困难，并且使它感觉如此陌生，是因为它是表达某些东西的极其特殊的语法。 零歧义。 没有误差的余地。 它要么起作用，要么不起作用。 当我们彼此交流时，我们通常没有那种要求，即一切都必须正确无误。 一个逗号关闭，一个括号丢失，并且全部损坏。

**11:32**-  _Avi Flombaum_

I always say that computers are stupid, and we have to just be perfect in order to get them to understand what we mean.

我总是说计算机是愚蠢的，为了使计算机理解我们的意思，我们必须做到完美。

**11:37**-  _Saron Yitbarek_

I like that. I like this idea of the machine being the stupid one and me being the smart one. I approve of this. This is great.

我喜欢。 我喜欢这样的想法:机器是愚蠢的，而我是聪明的。 我同意这一点。 这很棒。

**11:43**-  _Avi Flombaum_

Yeah.

是的

**11:44**-  _Saron Yitbarek_

对我来说，我喜欢的第一语言是Ruby。根据经验，我可以告诉你，这是一种非常可爱的母语。当您阅读代码时，感觉就像您在阅读英语。这里有很多很棒的图书馆，这里有一些琐事。 Ruby的创建者Yukihiro Matsumoto通过学习BASIC进入编程领域。

**12:06**-  _Saron Yitbarek_

如今，许多新手可能会改用Python或JavaScript，而我想知道Avi是否认为任何一种语言都比其他语言更好。

**12:18**-  _Saron Yitbarek_

我想知道，是否有首选的入门语言？如果某人没有技术背景，没有编码经验，也没有CS学历而进入这个领域，那么他们就是从零开始，甚至从平方1到平方0都开始...是否有首选的语言已经改变了好起点随着时间的推移？

**12:39**-  _Avi Flombaum_

好吧，首先，我要说的是每个人都没有背景。没有人是天生的程序员，因此，无论您是在CS程序中还是在社区中心中正式学习它，还是读书并自学，每个人都是从初学者开始的。然后，就首选的初学者而言，我认为实际上是最先和您说话的语言。我对初学者的建议始终是选择一种语言并学习它。不要改变我认为，初学者要做的最大事情就是开始学习Python，然后对它感到沮丧，然后说Python很烂，现在我要去做JavaScript。然后他们学习JavaScript，然后对JavaScript感到沮丧，然后又跳了起来。

**13:22**-  _Avi Flombaum_

如您所知，我个人认为Ruby是一种很棒的初学者语言。我认为它的语法真的很漂亮。它的价值明确地是使您（程序员）感到高兴。我不知道其他任何使程序员满意的语言。我知道发明了许多语言来使机器开心，但我认为Ruby确实很自然。

**13:44**-  _Saron Yitbarek_

我们可以就这一点达成共识。但是同样，这里没有错误的答案。毕竟，第一语言就是这样。第一。我们所有人都有一生的语言学习生涯，而且，选择一种语言而不是另一种语言并不会阻止您成为注定要成为出色的程序员。

**14:05**-  _Saron Yitbarek_

我喜欢画画，但是我不会死于特定的笔。我用笔不花力气。我对自己创造的东西感到吃力，所以从您的经验来看，这是从哪里来的？那需要在哪里捍卫和说服大家您对编程语言是正确的，它来自何处？

**14:23**-  _Avi Flombaum_

我想我不知道。我想到的第一件事，是因为我喜欢您对笔和输出的隐喻...我只是想像有些输出不是那么好，所以人们唯一能抓住的就是工具。

**14:41**-  _Saron Yitbarek_

那真好笑。

**14:42**-  _Avi Flombaum_

如果您所做的事情不那么出色，不出色并且对世界没有太多价值，并且您仍想捍卫自己的手艺，那么您唯一可以指向的就是，是的，看一下好吧，我摇了锤子。当然。房子倒塌了，但是那把锤子，那把锤子真的很棒，我知道怎么用。作为一个人，我对构建的东西比构建它们的方式更感兴趣。

**15:09**-  _Saron Yitbarek_

那是个很好的观点。现在，初学者不仅可以选择BASIC，还可以选择FORTRAN，而现在我们已经拥有一整套的第一语言菜单，但总有一种危险，那就是您忘记了这些语言仍然是达到目的的一种手段。语言是工具，不是您要制作的东西。

**15:27**-  _Avi Flombaum_

我认为技术的价值在于为人们创造有意义的事物。最终，如果您是一名程序员并且确实非常，非常好，但是您正在构建的人不需要，没有人喜欢和不喜欢的东西……并没有为世界增加价值，但是您真的，真的非常擅长手艺，只是找不到真正产生想要的影响的方法，我想您可能会深入研究并讨论所使用的工具。

**15:56**-  _Saron Yitbarek_

好吧，非常感谢Avi，感谢您分享您的所有经验以及对编程语言的想法。你想说再见吗？

**16:01**-  _Avi Flombaum_

是的，这非常好玩，再次连接很愉快，我希望大家都找到自己喜欢的语言，并每天努力工作。

**16:10**-  _Saron Yitbarek_

听起来不错。

**16:13**-  _Saron Yitbarek_

Avi Flombaum是Flatiron学校的联合创始人之一。

**16:20**-  _Saron Yitbarek_

编码学校可以将获取和教育的精神提升到一个全新的水平。这是我们在达特茅斯看到的一切的延续，但是在一个丰富的开发生态系统中，我们将随着越来越多的自然进入点，初学者已经开始发现进入游戏的更高级方法，有时甚至是字面意义。

**16:45**- _CO.LAB参与者_

您尝试过其他键吗？尝试按G键。

**16:52**-  _Saron Yitbarek_

现在，等一下。那不是一群年轻的编码员默默地记住一本奥赖利的教科书，也不是在熨斗学校的一次演讲。红帽实际上是在伦敦泰特现代美术馆（Tate Modern）上运行的一个小实验室。和那些孩子？他们正在学习编码。对于新一代来说，编码的乐趣就是他们首先遇到的。

**17:13**- _Femi Owolade-Coombes_

好的。嗨，我叫Femi，又名Hackerfemo。

**17:17**-  _Saron Yitbarek_

Femi Owolade-Coombes只有13岁，但他已经是新一波年轻编码员的领导者。

**17:26**- _Femi Owolade-Coombes_

我八岁的时候第一次遇到编码，后来我去了约克，实际上是关于数学的活动，在那里我看到了这个很酷的东西，从道德上讲我的世界。作为八岁的孩子，我认为那真的很酷。这就是我编码的方式。

**17:47**-  _Saron Yitbarek_

他并不孤单。 Minecraft已经将一代人引入了编码领域，并且做到了这一点，而无需经过前几代人的辛苦研究。游戏的魔力正在消除障碍。 Minecraft是基于Java™的，并且已获得认可，为该语言注入了新的活力，催生了一大堆新面孔的Java迷。

**18:11**-  _Saron Yitbarek_

但这不一定是Java。对于Femi来说，Python是他在Minecraft中发现的语言。

**18:16**- _Femi Owolade-Coombes_

当您在Minecraft中使用Raspberry Pi时，可以使用Python，因为Minecraft为Raspberry Pi创建了此特殊版本，它非常酷，因为您可以通过导入该库来对其进行破解，并且可以放置爆炸性的TNT随处可见，您可以在自己身后创建街区，也可以创建整个建筑物。各种各样的事情。

**18:42**- _Femi Owolade-Coombes_

当我第一次玩它时，我知道可以添加很多类似mod的东西，这很酷。这些本身就像是小小的黑客，但这是我第一次意识到您可以正确地对其进行黑客攻击，并使它真正做到您想要的。我认为这真的很酷。

**18:57**-  _Saron Yitbarek_

Femi为他打开了一个编码世界，而通往世界的大门是他最喜欢的游戏。然后，费米做了一些了不起的事情。他开始向其他孩子展示那扇门。

**19:10**- _Femi Owolade-Coombes_

好吧，我想与同行分享我的知识，因为我想，你知道吗？他们会非常喜欢的，我度过了愉快的时光。我想与其他所有人共享此内容，以便他们可以了解它，甚至可以参与编码。

**19:30**-  _Saron Yitbarek_

Femi继续创建了南伦敦Raspberry Jam，在那里，他已经能够看到新一代的编码员对人们对第一语言体验的期望没有任何期望。除了那些Minecraft骇客之外，像Scratch或Fruit这样的可视语言也使越来越小的用户可以实现编码的基础知识。

**19:54**- _Femi Owolade-Coombes_

我确实喜欢玩游戏的想法，并且我当然会在学习在教室里编写代码的基础上这样做，但这是能够控制游戏中发生的事情的想法，而代码却在其中，而代码使您能够真正出色的能力，可以使游戏做您想要的。

**20:15**-  _Saron Yitbarek_

Femi的妈妈告诉我们，发现游戏并不一定是消极的追求，她感到多么高兴。我喜欢他的故事，那肯定是从游戏开始的。但这还不止于此。他建立了一个由年轻编码员组成的惊人社区，而Femi自己的编码生活正在蓬勃发展。不再是Minecraft。他从事HTML，JavaScript和CSS的工作，建立网站并进行网页设计。他甚至正在使用Unity构建自己的游戏。

**20:44**- _Femi Owolade-Coombes_

每个人都应该真正有权学习编码，因为这是未来。

**20:53**-  _Saron Yitbarek_

我的世界真的是一所巨型编程大学吗？明天的编码员是否会通过游戏来吸收新的语言并只是搞乱呢？是否会通过渗透学习语言？

**21:06**- _Robyn Bergeron_

嗨，我叫Robyn Bergeron。

**21:08**-  _Saron Yitbarek_

罗宾（Robyn）是Red Hat的Ansible®社区设计师，她恰好有几个孩子，偶然发现自己编程。

**21:18**- _Robyn Bergeron_

晚上有晚饭。我实际上在做饭，每个人都印象深刻。我的女儿来到厨房区域，她说:“妈妈，我在Minecraft中提交了一个错误！”我从事软件工作，我看到很多很多错误报告，而且我真的很好奇那在宇宙中意味着什么。就像那样，我在Twitter上与某人交谈并说它坏了，还是什么？我问她告诉我，所以她打开计算机，并在Mojang的系统中创建了JIRA帐户。

**21:53**-  _Saron Yitbarek_

我们应该注意，罗宾的女儿当时只有11岁。

**21:57**- _Robyn Bergeron_

她已经准确地填写了他们的表格，我发现很多错误报告格式不正确，或者它们很刻薄。我也看到很多。但这是完美的……这是发生的事情，这是我期望发生的事情，这是所有要复制的步骤，对于很多人来说，这是他们与任何项目的第一次互动，无论它是商业的，专有的软件项目（例如视频游戏）或开源软件项目。我感到非常自豪，我告诉她我们之后可以完全参加Minecraft会议，因为他们一直渴望参加。

**22:33**-  _Saron Yitbarek_

罗宾（Robyn）即将意识到，当我们其他人从事日常工作时，孩子们正在开始一场革命。这是那个会议上发生的事情。

**22:43**- _Robyn Bergeron_

我们去了主题演讲，我说，哦，我们将在最后一秒去，我们会没事的，我们将完全排在第二行。不好了。不不不。我们就像回到房间里的那十个巨大的大屏幕一样。但这对于孩子们来说是一件很酷的事情，在他们带走所有开发人员的那一天，他们有片刻的时间，当工程师出来时，实际上，这个观众中的每个孩子都站在椅子上尖叫。如果您曾经看过披头士乐队，就像披头士乐队来到美国的视频一样。就像，我简直不敢相信我们在他们附近，他们真了不起！在会议上，人们试图拿到他们的签名，那是……我和我的孩子坐在那里，我喜欢在连接互联网的操作系统上工作，以便你们实际上可以一起玩游戏？我们做错了什么？

**23:36**- _Robyn Bergeron_

但是孩子们就像，我长大后要成为JavaScript的人，是的！只是看着那场比赛的热情令人着迷，但这是一个电子游戏。

**23:51**-  _Saron Yitbarek_

可以追溯到70年代，当时每个人的第一语言都是BASIC，然后也许是C。最近，人们开始使用Java或Python，但是可视语言和游戏为我们带来了编码的未来才开始想象。

**24:10**-  _Robyn Bergeron_

即使对于已经从事多年编程工作的人来说，这似乎微不足道，但那是我正在玩的第一刻，我什至没有意识到我实际上正在学习可以变成终身技能的东西。

**24:23**-  _Saron Yitbarek_

Robyn Bergeron是Red Hat Ansible的社区架构师。

**24:32**-  _Saron Yitbarek_

BASIC邀请大学生进入编程世界，而Minecraft等游戏则邀请小学生进入当今世界。但是从某种意义上说，所有这些背后的创造力并没有改变。那些大学生在探索BASIC？是的，他们经常使用它来构建自己的游戏。显然，很多幻想足球。

**24:54**-  _Saron Yitbarek_

首先，我们的创新精神是驱使我们朝编程语言发展。从而调整世界，使世界变得更好或变得更加有趣。

**25:08**-  _Saron Yitbarek_

下次，在第3集中，全新的编程语言从何而来？我们正在学习令人难以置信的挑战如何促使开发人员放弃昨天的语言，并开发出全新的东西。

**25:26**-  _Saron Yitbarek_

Command Line Heroes是Red Hat的原始播客。如果您想更深入地了解BASIC的起源或在本集中听到的其他内容，请转至redhat.com/commandlineheroes。

**25:37**-  _Saron Yitbarek_

我是Saron Yitbarek。在下一次之前，请继续编码。

-------------------------------------------------- ------------------------------



via: https://www.redhat.com/en/command-line-heroes/season-3/learning-the-basics

作者:[Red Hat][a]
选题:[bestony][b]
译者:[erlinux](https://github.com/erlinux)
校对:[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
