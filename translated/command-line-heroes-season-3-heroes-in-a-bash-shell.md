[#]: collector: (bestony)
[#]: translator: (wardmon)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 3: Heroes in a Bash Shell)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-3/heroes-in-a-bash-shell)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 3: Heroes in a Bash Shell
======
**00:07** - _Saron Yitbarek_

It's 1987. Ronald Reagan's America is in full swing, and a 27-year-old high school dropout with big dreams is driving to his new home in Santa Barbara. That man's name is Brian Fox, and in the trunk of his car, he's got two massive tapes filled with the code he's been writing.
就在1987年，里根时代的美国十分兴盛活跃，当时,在圣塔芭芭拉，一个满怀梦想27岁的高中少年正开车回家，他就是Brian Fox，在他小车的后备箱里，装着俩个大大的磁带，磁带里面满满的记录了他所写的代码。
**00:28** - _Saron Yitbarek_

Fox has spent years working as a programmer in something called the free software movement. He believes the code he's got locked in that trunk is part of a new reality, a new software paradigm, that his community is bringing to life, one piece at a time.

Fox 在一个叫自由软件运动的组织里已经当程序员好几年了，他相信：他锁在后备箱里的代码就是一种新的现实，一种新的软件模式，他的团队正一步一步的让它充满活力。
**00:49** - _Saron Yitbarek_

That year, a team of coders at Richard Stallman's Free Software Foundation were trying to set the programming world free. They wanted to build an alternative to the UNIX operating system that had dominated programming since the '70s. Their GNU, which stood for GNU's not UNIX, was going to be an operating system for the people, one that anybody could use without worrying about license fees or copyright.

那一年， Richard Stallman 自由软件基金会的一个代码团队正想让编程的世界自由化。他们想建立一套替代，来替代从70年代一直是编程界主流的UNIX操作系统。他们的GNU,即是（GNU's Not Unix）的缩写准备成为一个操作系统，一个所有人可以不用担心许可费用和版权，可以自由使用的操作系统。

**01:18** - _Saron Yitbarek_

The foundation had been cobbling this brave new operating system together for years. And those two massive tapes of code in the trunk of Brian Fox's car? They held a crucial component. Written on those tapes was a free and hackable shell that could complete the GNU operating system, Brian Fox's gift to the free software movement. He called it Bash.
基金会已经在一起拼凑这个操作系统好几年了。在 Brian Fox's后备箱里俩个大大的磁带里的代码？里面有一个重要的组件。写在那些磁带里的是一个能完成GNU操作系统的自由和可破解的shell，是Brian Fox's带给自由软件运动的礼物，他叫它Bash。

**01:46** - _Saron Yitbarek_

I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. This episode, we're looking at our heroes in a Bash shell. We're uncovering the history of shells and why they're so crucial to our work today. Think of shell scripts like a script you would give an actor. They deliver a whole sequence of commands that the shell can then rattle off on its own, the same way an actor can read her lines one after another. It's the ultimate workaround if you've got repetitive or convoluted commands. It's the key to automation. You might say that shell scripting super charges our development. But could a shell be written that gave that superpower away to the whole world? That was the challenge.
我是Saron Yitbarek ，这里是代码英雄，一个来自红帽子的原创播客。这一集，我们寻找来自Bash shell的英雄。我们将揭开shells的历史，和解答为什么它们对于我们今天这么重要。想象一下shell脚本就像一个脚本你将写给演员。它们发出了一整套命令，shell能够自己解析，就像演员能够一句接一句的念出他的台词一样。如果你有重复或者难懂的命令，它是个极其有用的变通方法。它是自动化的关键。你可以说Shell脚本提升了我们的开发。但是，一个能够给全世界带来超级力量的shell是否能被写出来？这就是我们的挑战
**02:38** - _Ken Thompson_

Back in 1969, a couple of computer scientists here at Bell Labs started to develop some programs they needed for their own use.
早在1969，很多在贝尔实验室的科学家已经开始开发一些他们需要自己使用的程序。

**02:48** - _Saron Yitbarek_

That's pioneering command line hero, Ken Thompson. The UNIX operating system, designed at Bell Labs, really was intended for their personal use. Originally, it was just an internal system. UNIX encouraged close communication among programmers, but it wasn't intended to change the way the whole world worked. It was intended to change Bell Labs.

那是代码英雄的先驱， Ken Thompson.在贝尔实验室设计的NIX操作系统的初衷其实就是给他们私人使用。一开始，它就是一个内部系统。UNIX 鼓励程序员之间紧密的通信，但它并没有设想去改变全世界工作的方式。它想改变的是贝尔实验室。
**03:13** - _Ken Thompson_

By now, it's used all over Bell Labs. We have close to 20,000 computer terminals in this company, and most of them are used for communicating with UNIX systems.
直到现在，它用在全部的贝尔实验室。我们有近2万个计算机终端在这个公司，并且大多数都是用来跟UNIX系统通信。
**03:25** - _Saron Yitbarek_

A UNIX shell designed by Ken Thompson was released in 1971. The Thompson shell was designed to be a command line interpreter, but it really wasn't capable of full-on scripting. It wasn't until six years later, in 1977, that scripting started to take off.
在1971，Ken Thompson 设计的UNIX shell 发布了。Thompson shell设计成为一个命令行解释器，但它其实没有全面脚本的能力，它没有，于是6年后，在1977，它开始被取代了。
**03:44** - _Chet Ramey_

The shell parameters, the special parameters, the variables that we sort of take for granted today, originated with Steve Bourne and the Bourne shell.
我们今天认同的shell参数，特别的参数，变量，最开始出现于Steve Bourne和他的 Bourne Shell.
**03:57** - _Saron Yitbarek_

That's Chet Ramey, an IT architect at Case Western Reserve University. Chet works at maintaining Bash, but he's also a great resource for our origin story. He describes Bell Labs just as it was figuring out what the UNIX shell was going to look like.
那是 Chet Ramey， 一个 凯斯西储大学的IT 架构师， Chet从事Bash维护，但他也是我们当初故事的一个不错资源。他描述的贝尔实验室就只是指出了UNIX shell将看起来会是什么样子。
**04:13** - _Chet Ramey_

The programming constructs that we use without thinking today originated with Steve Bourne, and his shell basically won the bake-off. There was a significant user community using the Mashey shell. There was a significant user community beginning to use the Bourne shell. There was a committee that was set up to decide which one would win, which one would be the officially supported UNIX shell coming out of Bell Labs from then on, and Bourne's shell won. And the rest, as they say, is history.
我们现在用的编程结构开始于Steve Bourne，他的Shell基本上赢得了比赛。有这么一个重要用户社区正用着Mashey shell， 有这么一个重要用户社区开始了使用Bourne shell。有这么一个委员会建立了决定哪个将会赢，哪一个从此以后将成为贝尔实验室外部产生的UNIX shell 的官方支持，当然Bourne‘s shell 赢得了。就像他们说的一样，其他的只是个历史。
**04:54** - _Saron Yitbarek_

It's not the end of history, though. Sure, the Bourne shell was a huge leap forward. It opened a door toward super-powered operations, toward greater automation, yet while there was a kind of Bourne supremacy for a while, the Bourne shell didn't solve all our scripting needs.
这可不是历史的结束，确定的说，Bourne shell 是前进了一大步。 他打开了向超级操作，向了不起的自动化的一首门，Bourne式的优势还是持续了一段时间，虽然Bour shell 没有解决我们脚本的所有需求。
**05:14** - _Chet Ramey_

The constraints under which Bourne wrote his shell are almost unimaginable today. Obviously, when you have those constraints, you have to give up a lot, and Bourne gave up a lot. It's remarkable that he was able to put as much into the Bourne shell as he did given the space, memory, and CPU constraints he worked with.
Bourne写shell时的限制今天几乎难以想象。很明显，当你遇到这些限制，你不得不放弃很多，当然 Bourne也是放弃了很多。他的卓越在于在他的工作能够做了很多，来尽可能减少受到空间，内存和CPU等的限制。
**05:42** - _Saron Yitbarek_

And remember, the Bourne shell was still part of Bell Labs' UNIX system. It was still tied to the UNIX license. That meant it wasn't free. It wasn't open. This shell was owned.
还要记得， Bourne shell 还是贝尔实验室UNIX系统的一部分。 它还是绑定了UNIX许可， 那意味着 它不是自由的，开放的，它是私有的。
**05:55** - _Chet Ramey_

It was incredibly difficult to get UNIX source if you were not at a university. Obviously, that had an effect on the popularity of Berkeley UNIX, for instance, which started at a university, grew up among a community of universities, and kind of took off on the path of least resistance, as it were. So, getting access to the Bourne shell code was not difficult if you were at the right place, but in general, it wasn't viable.
如果你不是一个大学，去获得UNIX的源码是难以想象的困难。显然，这影响到了UNIX的流行度，例如，那些起步于大学，在大学社团发展起来的，正向着能最小阻力的道路前行，那样，就不难获取到Bourne shell 的源码，如果你在正确的地点，但一般的，这不是很可行的。
**06:36** - _Saron Yitbarek_

Chet Ramey is the maintainer of the Bash shell.
Chet Ramey 是 Bash shell 的维护者。
**06:41** - _Saron Yitbarek_

So, we've got the beginnings of shells, the start of this crucial component to programming, but the best shell out there is tied to a license. It's closed. For Richard Stallman and his Free Software Foundation, that arrangement just wasn't okay. What was needed was a shell that wasn't tied to any one company, a shell for the people.
那么， 我们已经获得了shells 的开始，重要的编程组件的开始，但最好的shell还是绑定着许可的，是封闭的。 对 Richard Stallman 和他的自由软件联盟来说， 那种安排是不适合的。他们所需要的是一个没有绑定任何一个公司的shell，一种属于大家的shell。
**07:05** - _Saron Yitbarek_

But here's the trick. That meant writing something that did everything the Bourne shell could do without infringing on any of those pesky copyrights. Copy the Bourne shell's code verbatim, and you'd have a lawsuit on your hands.
但是这就是技巧。 那意味着在没违反任何那些讨厌的版权下，写出Bourn shell 一切所能作的东西。一字不差的拷贝Bourne shell 代码，你将面临着诉讼。
**07:20** - _Saron Yitbarek_

To free people from the Bourne shell, you'd have to find a coder with the ability to write a program that complex, a program that did everything the Bourne shell could do, but who hadn't actually seen any of the Bourne source code. You'd have to find a kind of outsider genius. And Richard Stallman had just the coder for the job.

要大家从Bournce shell解放出来，必须有一个程序员，他能写一种复杂的程序，一种Bourn shell 一切所能作的程序，而他没有实际看过Bournce的源码。你必须找一种外围的天才。与原尔Richard Stallman 正好就是这种程序员。
**07:46** - _Saron Yitbarek_

Brian Fox was a 20-something high school dropout who knew code better than most of the folks at Bell Labs. He'd never been in a position to see any of the source code that made the Bourne shell work, and that made him ideal for the task at hand.
Brian Fox 是20多的辍学高中生，他比大多贝尔实验室的人更懂代码。他从没有机会看到Bourne shell的源码，这让他成为当时这个任务的理想人员。
**08:02** - _Brian Fox_

My name is Brian Fox.
我是Brian Fox。

**08:04** - _Saron Yitbarek_

I figured why not get the story from the man himself? These days, Fox is an open source advocate and the CEO of Opus Logica. But back in the late '80s, he was just a young guy who believed in the free software movement. We chatted about the old days and how Bash evolved from there.

我说明下，为什么不从人物自己的本身获得故事？这段日子，Fox 是一个开源的拥护者，Opus Logica 的CEO.但回到之前的80年代，他是一个相信自由软件运动的年轻小伙。我们来谈谈以前的日子和Bash 怎么样从那开始发展起来。

**08:23** - _Saron Yitbarek_

So Richard Stallman asks you to create a shell for UNIX. That one will be a free shell, and it's a replacement for the Bourne shell. What was your response to that request?
当Richard Stallman 要你为UNIX开发一个shell.一种将成为自由的shell，和它是Bourne shell 的一个替代，你当时对这个要求的反应是怎样的？
**08:38** - _Brian Fox_

"Can't we make a better one?"
“我们能够做出一个更好的？”

**08:41** - _Saron Yitbarek_

I love that. Tell me more.
我喜爱那种，告诉我多点
**08:45** - _Brian Fox_

So the very first thing I did for Stallman was actually work on this tech info documentation system. I surprised Richard at the speed at which this type of programming would be done. He's a good programmer and he works quickly, but he doesn't judge that other people would work that quickly.

这样，最开始我给Stallman做的实际上是做这种技术信息文档系统的事情。我很奇怪Richard的工作速度，一种程序员该有的工作速度。他是一个好的程序员，他工作很快，但他没有猜测别人将会工作这么快。

**09:00** - _Brian Fox_

So, within the first week, I finished the first implementation of a program called GNU Info, and Richard was kind of stunned by that. I said, "What's my next project? What's my next project?" And he said, "Well, now do a compiler for this." And I did that, and I was done in a week with that, right? And then I said, "What's my next project? What's my next project?" And he said, "Well, this other guy's been working on this shell, but he hasn't gotten very far." I was like, "Okay," and nine months later, the Bourne replacement shell was done.

这样，在第一周，我完成了一个叫GNU信息的程序的初次实现， Richard 对此表现出了一种惊讶。我说，“我的下一个项目是什么？我的下一个项目是什么？“ 然后他说，”好，现在给这个做个编译器。“  然后我做了，我一个星期后完成了它，对吗？然后我说，”我的下一个项目是什么？，我的下一个项目是什么？“ 然后他说，”好，这个，其他人已经开始这个shell的工作了，但他没有进展很快，“ 我是喜欢的，就说 ”好“ ，然后，九个月后，Bourne的替代shell完成了。
**09:29** - _Saron Yitbarek_

Nine months. Wow. Tell me about that. Why was it so challenging?
九个月。卧槽 。告诉我，为什么它那么有挑战性？
**09:33** - _Brian Fox_

That's actually a fascinating question. The reason it was so challenging is because we had to faithfully mimic all of the behaviors of the Bourne shell, of Stephen Bourne's original shell, while at the same time being allowed to extend it and make a better tool for people to use.
这是个很好的问题。它那么有挑战性的原因是我们必须如实的模仿出Bourne shell（Stephen Bourne's 原始的shell—）所有的表现，，同时我们允许扩展它，做出一个更好的工具给大家使用。

**09:51** - _Brian Fox_

While that was happening, I was in a quiet undercover argument with David Korn, the author of the Korn shell. The POSIX committee, which is the committee that says what's standard UNIX, they got involved and said, "Oh good, we need to find what the standard shell is," and 2 most important people on input for that were myself and David Korn. And David Korn had already written this shell called KSH, and every feature that he had put into KSH, he said, "That should be a standard feature," right? This would be easy for him than to have the most perfect POSIX shell, if it was simply his shell.
这时这个发生了，我暗中与korn shell 的作者David Korn 发生了争论，POSIX 委员会，发布UNIX标准的委员会，他们参与进来说，”好，我们需要找到什么是标准的shell，“然后指定了做这件事俩个重要的人员：我和 David Korn。 David Korn 已经写了它的shell叫KSH,然后他写到KSH的每一个特性,他说，”那将是一个标准特性“，对吧？对他来说，如果他简化他的shell，这样比有一个更完美的POSIX shell更容易。
**10:31** - _Brian Fox_

Some of those features were not good features, were not good choices and made the shell somewhat incompatible with the Bourne shell, or I felt were missed features, and so there were several discussions and arguments about that, and so building a POSIX-compliant shell that was 100% perfectly compatible with every single shell script that had ever been written for the Bourne shell took longer than 3 months.
那些特性中，有些不是好的特性，不是好的选择，某种程度上不能让shell与Bourne shell兼容，或者我觉得缺少的特性，都会为这些发生激烈的讨论和争论，然后建立一套与POSIX兼容的shell，200%完美与每一个为Bourne shell 写的shell脚本兼容的shell将要3 个多月
**10:54** - _Saron Yitbarek_

So, if you are designing something that not only replaces the Bourne shell, but also is trying to mimic every part of the Bourne shell, it sounds like you might've run into some copyright issues. How did you approach that?
然而，如果你设计一种只是代替Bourne shell ，但能模拟Bourne shell的每一部分的东西，听起来你可能会卷入某些版权问题。你是怎么样达成它的？
**11:08** - _Brian Fox_

In order to build true open source and free software, you have to do it in a clean room. You can't look at somebody else's code, start from there, and re-implement it. So I'd never seen any of the software associated with any Bell systems, UNIX or even Berkeley UNIX, I'd never seen the source code for any of these things.

为了建立真正开源和自由的软件，你需要在一个干净的房间里完成。你不能看任何其他人的代码，从那里开始，然后实现它。所以，我没有看过任何与Bell系统，UNIX 甚至Berkeley UNIX有联系的软件，我没有看过任何这种东西的源码。

**11:29** - _Brian Fox_

When I started building the Bash shell, I used a parser called Bison, which was something that Richard had started to put together at the Free Software Foundation, and that was completely different from basically any other program that had come before it. So I knew already that the thing I was building was not ever going to be a copyright infringement on something that had been built previously.
我开始建造Bash shell时， 我用到了一个分析器叫Bison，Richard之前已经把它加入了自由软件联盟，它是完全不同于它之前的任何程序。 所以我已经知道我做这些将不会有已之前建立的一些有版权方面的问题
**11:55** - _Saron Yitbarek_

The work to create Bash had plenty of hiccups. Here is just one example, for the hardcore heroes out there.
开发Bash的工作有很多的小麻烦。 这就是硬核英雄出场的一个例子
**12:03** - _Brian Fox_

At one point, I was working on implementing globbing in the shell. This is the wild card expansion that allows you to match a large number of files, for example. You could say star dot C, and that would match every file that had an extension of dot C.
有一次，我是在实现shell里面的通配符。这是一种允许你匹配很多文件的万能符，例如，你说*.c, 就能匹配任何扩展名是.c的文件。
**12:17** - _Brian Fox_

So I worked on globbing for several hours, and I got it working, and I was excited about it. It was a good implementation. And in the course of creating this implementation, I had created a file in my directory called asterisk dot C, star dot C, and I thought, "Well, I should get rid of that file," and I typed in RM space, quote, star dot C, close quote, which in a modern shell, when you use the quotes, it means, "Do not expand this," and then I pressed return, and it was taking a long time for the prompt to come back because we're using Sun 350s and things are slow. And I realized, it's taking a long time because it's deleting all of the source files in this directory.
所以我花了很多时间在通配符上，然后我实现了它，我为此非常激动。它是个很好的实现。在实现的过程中， 我在我的文件夹里建立了一个*。c的文件，我想，“嗯，我将删掉那个文件” ， 我输入了 RM 空格 ，引号，*.c,右引号，在现代shell中，当你用引号时，它表示，“不要展开它”， 然后我按了回车后， 等了很长时间提示符才重新出现，因为我用的是很慢SUN 350S。然后我明白它运行了那么长时间是因为它删除了这个目录是的源文件。


**12:58** - _Saron Yitbarek_

Oh no.
喔，不
**12:59** - _Brian Fox_

Yeah. So I deleted the source to Bash at that point.
是的， 所以在那时我删除了Bash的所有源文件
**13:01** - _Saron Yitbarek_

Oh no.
喔，不
**13:04** - _Brian Fox_

Which-
哪个
**13:05** - _Saron Yitbarek_

Oh my goodness, yeah.
哦，我的天，耶
**13:06** - _Brian Fox_

Which caused me to just laugh kind of loudly for a really long time. I wasn't even slightly upset. And then over the next couple days, I typed it all back in. The code was completely fresh in my mind.
这让我大笑了很久很久， 我一点也不难受。然后在接下来的几天，我重新输入了它们回来，这样以后我脑海里的代码安全是新的了。
**13:20** - _Saron Yitbarek_

Wow.
喔
**13:20** - _Brian Fox_

The problems had been solved. It was just a matter of putting it down into files.
问题解决了。还需要做的就是把它写进文件中。
**13:25** - _Saron Yitbarek_

Okay. So most people would completely freak out at that moment. You laughed and you just said, "Oh, I guess I have to do it all over again." Why were you so calm?
好的，当大多数人都安全惊讶的那一刻。 你笑了只是说，“哦，我想我不得不重新再干一次。” 为什么你会那么平静？
**13:35** - _Brian Fox_

It struck me as insanely absurd and very funny that I'm building this tool, and to make sure it's good to eat your own dog food, to make sure the tool works correctly, you use the tool while you're building it. But the tool didn't work correctly. I had not yet implemented quoting, and because I hadn't implemented quoting, this command that I casually typed did not do what I expected it to do, and I thought that was really funny.
它打击了我，荒唐和很有趣，我在创建一个工具，为了确认它能正确的运作，你用了它，但它没有正常工作。我还没有实现引用， 正因为我还没有实现应用，我随意输入的命令没有达到我期望的功能，我想它真的很有意思。
**14:06** - _Saron Yitbarek_

That's amazing.
真有意思
**14:08** - _Saron Yitbarek_

Even that story about a mistake speaks to Fox's brilliance, though. They say that Mozart finished symphonies in his head and then just had to write them down once he'd finished. Fox had a similar talent.
然而那个失误的故事说的是Fox‘s的才华，他们说莫扎特必须把头脑中的交响曲写下来，他才能完成创作。 Fox有相似的天才。
**14:23** - _Saron Yitbarek_

So, when you were finally done and you got to deliver Bash, how did that feel?
然后，当你最终完成，准备交付Bash时，他们是怎么样的感受的。
**14:27** - _Brian Fox_

Oh, it actually felt spectacular. So here's a story that I don't actually usually tell. It was about 8 months into building the shell. I knew I needed about a month before I'd be done, and another shell was released. ASH, an open source shell got released, and I was crestfallen because we had not released the Bash shell to anyone yet, so only a handful of people were using it. I knew it needed another month's worth of work and I thought, "Oh, this is terrible. All this energy and effort I've put in will not be appreciated. It might not even be seen," and so I was pretty distraught. I was not laughing.
因为我们没有向任何人发布过Bash shell， 只有很少的人在用它。我知道它还需要一个月的工作，然后我想，“哦，这很可怕，我付出的所有精力和努力将不会得到认可，它将甚至不为人知，” 我是非常的心烦意乱。我不是在开玩笑。
**15:13** - _Saron Yitbarek_

The proof was in the pudding, though. GNU's Bash was released in 1989 and became the default shell for Linux. Today, it saturates our whole computing experience.
证据已经摆在眼前。然而，GNU'S Bash 在1989年发布了，并且成了linux的默认shell。 今天，它满足了我们全部的计算体验。
**15:25** - _Saron Yitbarek_

But it is everywhere. So many people use it every single day. It's on every single computer. How does it feel being the author of Bash?
它无处不在，很多人天天用它，它存在于每台电脑。它是怎么样被认为是Bash中的权威呢？
**15:34** - _Brian Fox_

Most of the time, I don't even notice that Bash is a thing other than a tool that I use in my daily life. I don't really think about it. Every so often, I'll walk into an Apple store and look around and think, "Wow, every computer in here is not only running software I wrote 27 years ago, or more now, it also has my name in it," and then I think, "Every computer on the internet, every server on the internet is running the Bash shell and has my name in it." And then Windows last year or the year before came out with the Power shell, which is Bash, and I was like, "Oh my goodness. My name is in every computer on the planet."
很多时候，我甚至没有注意到Bash跟我们日常中用的工具有什么区别。我从没想过它。有时，我走进苹果店随便看看会想下，“喔，这里的每个电脑不但运行我27年前写的软件，而且它里面有我的名字，” 然后我会想，“Internet上的每个电脑，每个服务器在用着我的Bash shell 和有我的名字在里面。” 然后去年或更早，windows也出了Power shell，它也是Bash，我很开心，“喔，我的天，我的名字在星球上的每个电脑里面。”
**16:21** - _Saron Yitbarek_

I want you to really hear what Fox told me next, though, because it's so important. He was never trying to code his way through this global domination. He was trying to help, trying to help the culture of programming that he was part of.
我想你们好好听听Fox 接下来告诉我什么，显然，这是很重要的。他从没有想通过他的编程方式主导全球，他一直想着帮助，想着帮助他作为其中一员的编程界的文化
**16:37** - _Brian Fox_

I didn't set out to achieve some grandiose goal of being on everybody's computer. I wasn't interested in that at all. I wanted to make a useful piece of software and I expected it to have a kind of typical software lifespan of 3 - 5 years, not this kind of crazy 30-year term that it's had.
在每个人的电脑上，我没有想达到什么雄伟的目标。我对这些完全没有兴趣。我想着能为软件做点有用的东西，我期望有生命周期3-5年的那种软件，而不是这种有30年周期的变态软件。哈哈😄
**16:58** - _Saron Yitbarek_

Were you always so, frankly, so nonchalant about the impact that you've had on computing?
您总是那样坦率，淡泊的对待你对电脑界所做的影响吗？
**17:06** - _Brian Fox_

I'm proud that I wrote Bash and I have an ego, so I do things like accept podcast requests to talk about the shell.
我很自豪我写了Bash，我也很自负，所以我做了接受播客邀请来讨论shell这样的事情。
**17:14** - _Saron Yitbarek_

Thank you very much.
非常感谢你
**17:15** - _Brian Fox_

Thank you. But it is not something that is there in my everyday life. Fortunately, I'm just an obscure person, right? It is true that my software's running on everybody's computer in everybody's house and it's also true that nobody knows that, right? So I have plenty of anonymity, and the fact that the shell exists and that somebody wrote it and that person lives in Santa Barbara is getting more known, and I'm beginning to notice it more in my life. People sometimes come to see me play music and then tell me, "You're the guy that wrote the shell," and I feel a little like Keanu Reeves.
谢谢。但幸运的是那些并没有对我的日常生活有影响。我只是个默默无闻的人，对吗？确实我的软件运行于每个人房间的电脑里，但确实也没有人认识我，对吗？这样我就有充足的隐私。shell的存在，某个人写了它，这个人住在Santa Barbara这个事实越来越被人们知道，生活中，我也开始得到了更多的注意。人们有时过来看我弹音乐跟我说，“你就是写出shell的人” ，然后我就有点喜欢上了Keanu Reeves。
**17:54** - _Saron Yitbarek_

Very cool. So you said that you didn't set out to make sure Bash is on every single computer. What did you set out to do? What were your hopes for Bash?
非常酷。你说你没有打算过确保Bash运行于每一台电脑。你打算做的是什么呢？你对Bash的期望是怎样的呢？
**18:04** - _Brian Fox_

A useful replacement tool to be part of the project GNU and to help create this free open source operating system. I actually assumed that once we had finished creating this open source operating system, that the software on that system would advance and I would get a chance to create the kind of shell that I wanted to create, which would help people to advance the science in a manner of speaking.
成为GNU项目中的一部分中的一个有用的替代工具，去帮助创建这个开源操作系统。事实上，我假想一旦我们完成了这个开源操作系统，那个系统上的软件应该是发展的，然后我应该有机会去创造一种我想要创造的shell，或者用一种说法来说它能帮助大家发展科学
**18:35** - _Brian Fox_

I eventually came to the realization that the reason Bash was created was to in fact be backwards compatible with the entire world of UNIX that already existed, and that momentum has kind of kept it alive, which is another unique position to be in, that your tool is so fundamental, it's so much of a nut and bolt that it's not something that will be removed.
最后我终于明白Bash创立的原因，事实上是兼容了已经存在全世界的UNIX，那种使它活着的动力，也是它所处于的独特位置，因为你的工具是那么的基础，它不过是螺母及螺栓，不是那种将会移除掉的。
**19:01** - _Saron Yitbarek_

Absolutely. 
绝对的
**19:01** - _Brian Fox_

It's been a great feeling to know that I've created something of value in the world, something that other people are still using, and that is a good feeling. And then as I look at how that came about, I realize the more important thing is the words free software and open source are in everyday English, everyday language across the globe, and that certainly wasn't true on day one. That was a creation of the efforts that Richard Stallman and myself and others put in. And to be part of that movement, that's lucky to have been early, but it's also extremely satisfying when I look back at that and I think, "Wow, open source software exists, and I was a part of that."
知道我创造的东西在世界中的价值是很美妙的感觉，其他人还一直用的你创造的东西是也一种很好的感觉。然后我回想那是怎么样发生的，我意思到更加重要的东西是英语中。全球语言中每天说的自由软件，开源这些词语。那些当然不是一天成为真实。那是Richard Stallman，我和其他人投入的一连串的努力。能成为该运动中的一员，是有兴于中于后来者。但是，当我回头看那些，是有极其的满足感的。我也想，“喔，开源软件存在了，而我也是其中一部分。”
**19:50** - _Saron Yitbarek_

Brian Fox is the creator of the Bash shell and CEO of Opus Logica.
Brian Fox是Bash shell的创造者，Opus Logica的CEO
**20:01** - _Steve Bourne_

I did hear about Bash, actually.
事实上，我听说过Bash
**20:03** - _Saron Yitbarek_

That's Steve Bourne, creator of the Bourne shell, that Brian Fox worked to replace. We wanted to know what Bourne thought about Fox's work. Did he think of Bash, that born-again shell, as an open source clone of his own work? I mean, was he cool with Bash?
那是Steve Bourne，Bourne shell的创造者，Brian Fox 代替了它。我们想知道Bourne 对Fox‘s的成就有何想法。他是否想过Bash，哪个重生的shell，能成为他的创作的开源的克隆？我意思是，他是否觉的Bash很COOL?
**20:20** - _Steve Bourne_

The person that wrote it came up to me in a conference one day and gave me a t-shirt which said “Bourne again” on the front of it.
某天，写这个的人在一次会议中来到我身边，并给我一个t恤，前面写着“Bourne again”
**20:26** - _Saron Yitbarek_

That'd be Brian Fox.
那一定是Brian Fox.
**20:29** - _Steve Bourne_

It was a friendly sentiyoument, and it was, "Well, I hope you don't mind, but I just rewrote your shell," and I said, "That sounds great," and he gave me a t-shirt.
他是很友好的，确实是的，“嗯，我希望你不会介意，但是我正重写了你的shell，” 然后我说，“那听起来极好的,"",然后他给了我一个t恤。
**20:38** - _Saron Yitbarek_

If there's one thing I've learned in the coding world, it's that everybody loves swag. Stephen Bourne, turns out, saw Bash as a necessary extension of the work he and others did at Bell Labs. There's no bitterness at all.
我从编程界学到的一点就是，每个人都有风格。Stephen Bourne看到Bash成为他和其他人在贝尔实验室工作的必要扩充时，他一点也不在乎。


**20:52** - _Steve Bourne_

There were things that people wanted to do in variable substitution and doing string management that I didn't do, but that were put into Bash, that people use a lot these days. The relationship between Bash and the original shell, my impression at the time was it was just a reimplementation of the language, and over time, it did have features added to it, so it did sort of progress beyond what I wrote, certainly in the string management area. I use it all the time now.
有些我没有做的事情象大家想做的变量替换和字符串管理，但那些被加入了Bash，那些都是大家现在经常用到的。Bash跟最初的shell的关系，我的开始的印象是它只是一种语言的重新实现，后来，它确实加入了不少的功能，所以它是有是有进步的，超过了我写的，当然，在字符串管理这个方面，我现在一直在使用它。


**21:21** - _Saron Yitbarek_

Steve Bourne is creator of the Bourne shell and CTO at Rally Ventures.
Stere Bourne 是Bourne shell 的创造者， Rally Ventures 的 CTO
**21:32** - _Saron Yitbarek_

It's been many years now since Bash was stowed away in Brian Fox's truck on that long drive to Santa Barbara. In 2019, version 5.0 was released, and like Fox mentioned, Bash is now built into Linux, into Mac OS, and even into Microsoft Windows. As UNIX gives way to Linux, Bash has become a cornerstone of scripting in an open source world. It's fundamental to our automation.

离Bash被Brian Fox's收藏在去圣巴巴拉市的长途旅途中的后备箱那时，已经过去很多年了。 在2019， 5.0版本发布了，像Fox所说的，Bash 现在内置于Linux，Mac OS，甚至加入了微软的Windows。 单UXIX 让为于LINUX， Bash 已经成为了开源世界脚本的基础。它是我们自动化的基础。
**22:02** - _Taz Brown_

It became almost crucial, as organizations got bigger, to use something that would allow us to get things done quicker. It became a necessity.
单一个组织大起来了，要用到能提高他们效率的东西，它几乎是决定性的作用，它是不可缺少的。
**22:16** - _Saron Yitbarek_

Taz Brown is a Senior Ansible Automations Consultant at Red Hat, so she's well-acquainted with the value of Bash.
Taz Brown 是红帽子的资深 ansible 自动化顾问，所以他能深刻体会到Bash的价值。
**22:24** - _Taz Brown_

I definitely think that someone starting in the beginning stage of their career should definitely use Bash. Instead of using the GUI or graphical user interface, you would tend to be taken more seriously as an admin or as a DevOps person.

我敢肯定的认为，人们是开始职业的开始阶段肯定会用到shell，而不是用GUI或者图形用户界面，你们更倾向于做为一个管理员或者一个Devops。
**22:39** - _Saron Yitbarek_

And that's because a Bash coder will have one of those core skills that simply levels you up.
而且，那是因为Bash的编程员将会有能让自己得到简单的提升的核心技术。
**22:45** - _Taz Brown_

There's a value in learning scripting because it prepares you to be much more of a long-term sort of thinker when it comes to automation itself, because you can see how a script runs, then you can start to say, "Well, okay, I can do this. I can automate this task. I can automate this," and it starts to make you a different thinker and a different technologist.

这就是学习脚本编写的价值，因为它能达到自动化时，需要你好好的思考很长时间。因为你能够看到脚本是怎么运行的，然后你开始说，"嗯，哦，我能做到它，我能自动化这个任务，我能自动化它"，然后它让你成为不一样的思考者，不一样的技术专家。

**23:09** - _Saron Yitbarek_

For the ops side of things, that automation has become indispensable. Sophisticated programs, applications, and tools are all being supported by legacy Bash code.
关系 OPS这方面，自动化已经是不可缺少的。复杂的程序，应用，和工具到是得到传统Bash代码的支持。
**23:21** - _Taz Brown_

You don't have to reinvent the wheel, if you will. You can continue and just pull those in from a GitHub repository or wherever you store those particular files. Bash allows you to do that. Bash allows you to take those common tasks and allows you to scale across to, say, from 10 servers to 1000 servers.

你不需要重新建造轮子，如果你愿意，你能够继续从Github仓库，或者你存放那些特殊文件的地方拉取它们。Bash允许你们那样做。Bash允许你们获取那些共用的任务，并且允许你们从10个服务器之间扩展到1000个服务器。
**23:42** - _Taz Brown_

The great thing about automation is once you have a plan in place, it allows you to do it at a very cost sort of efficient manner. It allows you to do things that would be impossible to do manually.
自动化的伟大之处在于，当你有了一个计划， 它能让你以一种很省成本的方式完成。 它能让你完成你手工不可能完成的事情。
**23:56** - _Saron Yitbarek_

And then, more recent arrivals, like Ansible®, which Taz Brown works on, can always be integrated with Bash to get the job done.
然后，最近以来，像Ansible， Taz Brown正在从事的，能总是结合Bash一起来完成任务。
**24:04** - _Taz Brown_

Things have evolved, but I don't think Bash is ever going to not be a tool that an admin would apply, especially if you want a quick automation.
情况已经进化了，但我不会认为，Bash将会成为一个管理员不会使用的工具。特别的，如果你需要快速的自动化。
**24:14** - _Saron Yitbarek_

In the end, all this success can be traced back to the fact that it's a free and hackable program. Brian Fox's desire to give something to the world with no licenses, no strings, has been the key to Bash's success. In fact, he's not even calling the shots anymore. Hasn't for a long time. Here's Chet Ramey again, who's been maintaining Bash for decades.
最后，所有这些的成功追溯到它是一个自由和可魔改的程序这个事实。Brian Fox‘s 想给这个世界一个不需版权的东西，没有附带条件，已经成为Bash成功的密钥。事实上，他甚至没有再发号施令，已经很久没有了。接下来是 Chet Ramey， 再一次维护着Bash几十年。
**24:38** - _Chet Ramey_

Brian had decided after releasing, I think, version 1.05 that he wanted to move on and work on other things. He had been given other assignments at the Free Software Foundation and he wanted to do things besides Bash, and I was the most active contributor. He and I worked together on a lot of new features. We worked together on a lot of bug fixes, and so when it came time for someone else to take over, I was the logical candidate.

我想，1.05版本发布以后Brian已经决定，他想重新投入其他的方面。他已经得到了自由软件基金的其他指派，并且，他想做点Bash之外的其他东西，然而我是很活跃的贡献者，在很多新功能上，他跟我一起工作。我们一起工作解决了很多Bug，所以单需要其他人接手的时候，我是个合理的候选人。

**25:16** - _Saron Yitbarek_

And Ramey will have to pass on the mantle, too, just like Fox, because Bash is bigger than any one maintainer.
Ramey必须接过衣钵，而且也要像Fox一样，因为，Bash比任何一个维护者都要大。
**25:25** - _Chet Ramey_

I started when I was 23, and Bash and I have kind of grown together. At some point, I will need to solicit a team. I will need to solicit folks who are willing and able to put the time in and move the shell forward.
我从23岁开始，然而Bash 跟我有着一样的成长。某种意义上，我将需要招揽一个团队，我将需要招揽愿意和能够投入时间让Shell继续前进的一批人。

**25:46** - _Saron Yitbarek_

Bash, the born-again shell, will turn 30 next year, and it's showing no signs of shrinking away. Bash has ridden the free software wave, and then the open source wave, until it spread to every corner of the programming world. But it's amazing to remember that, at one point, it was just code on a tape in the trunk of Brian Fox's car. It was just a dream of a shell language that a few committed coders were willing to give away. Almost by accident, Brian Fox became a huge command line hero in the process.

Bash,重生的Shell，明年就会30年了，但它没有要消失的信号。Bash掀起了自由软件的浪潮，开源的浪潮，直到它偏及编程界的每个角落。但它让我们惊奇的记住，某种意义上，它只是Brian Fox 小车后备箱里磁带上的代码。它是shell语言的一个梦想：一些愿意捐赠出来的义务代码。几乎是偶然的，Brian Fox 成为了这过程中的巨大的代码英雄。
**26:23** - _Saron Yitbarek_

By the way, something's been bugging me, Brian Fox driving all that Bash code to Santa Barbara. Why the move? I mean, did he have a new job at some tech company, or?

顺便问下，有些迷糊我的问题，Brian Fox 载着Bash全部的代码去圣巴巴拉，为什么呢？我的意思是，是他在某个技术公司有新的工作吗？或者？

**26:34** - _Brian Fox_

I wanted to continue my music career, and I thought the best place to do that was where the weather was always about 72 degrees and there are no clouds in the sky and the beaches are beautiful.

我想继续我的音乐事业，我想最好的地方是天气总是大约72华度的地方，并且那里天空晴朗，没有云朵，还有美丽的沙滩。

**26:45** - _Saron Yitbarek_

Nice. I like that reason better.
很好，我喜欢更喜欢这个原因。
**26:49** - _Saron Yitbarek_

Shoutout to Wayne A. Lee, who suggested our title for this episode, Heroes in a Bash Shell. Nice one, Wayne.
向Wayne A. Lee致敬，谁给这集的标题提个建议，一个Bash shell的英雄，不错的一个，wayne.
**26:57** - _Saron Yitbarek_

Next episode, we take our interest in automation to a whole new level and look at the languages of AI with a special focus on John McCarthy's creation, LISP.
下一集，我们将把我们的兴趣放在一个全新阶段自动化上，去看看John Mccarthy 特别重视的AI语言lisp，
**27:11** - _Saron Yitbarek_

Command Line Heroes is an original podcast from Red Hat. You can dive deeper into the story of Bash or any of the programming languages we covered this season, if you head over to the show's site at [redhat.com/commandlineheroes](//www.redhat.com/en/command-line-heroes).
代码英雄是红帽子原创的播客节目。如果你反问我们节目的网站：redhat.com/commandlineheroes。你可以深入了解Bash的故事，货其他我们这季所覆盖的语言。
**27:28** - _Saron Yitbarek_

I'm Saron Yitbarek. Until next time, keep on coding.
我是Saron Yitbarek。继续写代码，下次见。
--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-3/heroes-in-a-bash-shell

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
