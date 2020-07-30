[#]: collector: (bestony)
[#]: translator: (Mikedkmilk)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 3: Diving for Perl)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-3/diving-for-perl)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

命令行英雄 第三季:深入聊聊Perl语言
======
**00:02** - _Saron Yitbarek_

想象一下Perl语言的创建者Larry Wall在1999年的一次会议上拿起麦克风，留着他标志性的浓密小胡子和梳理过的刘海，感觉相当好，因为他所发明的语言正在越来越受欢迎。


**00:19** - _Voice actor_

声音测试。

**00:19** - _Saron Yitbarek_

Perl语言是不是轻松地超越了COBOL、Visual Basic和Python?Larry Wall开玩笑得说,“Python仍然是一个遥远的竞争者”。Wall从dice.com的一份报告能看到这次参加集会的人数非常多，在那时来看Perl语言的未来是非常非常光明的,然而之后Perl的未来就不再如此了。dice.com在20年后的2018年夏天将Perl列为最可能灭绝的语言之一。短短20年之间发生了什么?

**00:59** - _Saron Yitbarek_

我是Saron Yitbarek，本节目是命令行英雄，一档红帽公司的原创播客。这一季是关于我们编程语言的力量和前景的。在上一集我们追踪了JavaScript在互联网上的疯狂崛起。

**01:19** - _Saron Yitbarek_

但并不是每一种语言都有一个不断成长和成功的故事。大多数语言出现并在当时非常特殊的生态系统中发挥了它们的作用，然后当我们的编程生活里需要其他类型的工具时它们就开始消退。


**01:37** - _Saron Yitbarek_

本集我们将深入介绍Perl世界。是什么导致了它早期的成功，为什么它的成功突然就被颠覆了?我们生活的环境，我们的基础设施，我们的硬件，所有的因素都会决定哪些语言会繁荣，哪些会开始萎缩。这就是Perl语言的故事里如此吸引人的地方。


**02:08** - _Saron Yitbarek_

我们知道Perl并没有统治世界，但是退回到90年代的时候Perl语言的一切都不是那么确定。Tim Berners-Lee在1991年发明了万维网，之后便迅速创造了一个全新的基于网络的发展领域。谁也说不准会是哪种编程语言在这个新领域取得成功。


**02:31** - _Michael Stevenson_

在互联网出现的时候所有人都等待着会有什么事情发生。那个时候整个世界都是令人兴奋的。


**02:39** - _Saron Yitbarek_

迈克尔·史蒂文森是阿姆斯特丹大学媒体研究的副教授。他为我们描述了早期的web。人们见过Usenet，也见过ARPANET。他们在网上看到了美国，还有其他一些国家。但是直到网络出现，互联网的全部发展潜力才真正得到体现。突然之间，你就进入了这个巨大的互联世界。这是一个启示。

Michael Stevenson is an Associate Professor in Media Studies at the University of Amsterdam. He described that earlier web for us. People had seen Usenet, and they'd seen the ARPANET. They'd seen America Online, and a few others. But the internet's full development potential really hadn't been expressed until the web came along. Suddenly, you're pointing and clicking your way into this vast, connected world. It was a revelation.

**03:09** - _Michael Stevenson_

你必须记得1993年，当网络开始崭露头角的时候，也就是连线杂志开始出版的那一年。在那之前，你有Mondo 2000，这些杂志真的让电脑看起来像神秘知识的来源，让电脑看起来很酷。

You have to remember that 1993, kind of when the web peeked its head up, that was the same year that Wired Magazine started publishing. Before that you had things like Mondo 2000, these magazines that really made computers look like a source of mystical knowledge that made computers seem cool.

**03:32** - _Michael Stevenson_

因此，从这个意义上说，网络也到达了一个相当特定的时期人们已经准备好对这样的技术感到兴奋。

And so, the web, in that sense, also arrived at a pretty specific time where people were ready to be excited about technology in that way.

**03:43** - _Saron Yitbarek_

现在，事情是这样的。Larry Wall在1987年创建了Perl。那是在所有关于万维网的兴奋之前的四年。Larry Wall最初提供给世界的Perl就是这种通用的Unix脚本语言。这当然很有帮助，但是Perl还有一些秘密元素，这些元素将使它成为即将到来的web开发世界的理想语言。

Now, here's the thing. Larry Wall created Perl in 1987. That's four years before all this excitement about the World Wide Web. The Perl that Larry Wall first gave the world was just this general-purpose Unix scripting language. Totally helpful for sure, but Perl also had these secret elements that were going to make it an ideal language for a world of web development that was just around the corner.

**04:14** - _Michael Stevenson_

很有名的是在拉里·沃尔参与的一个秘密国家安全局项目中发明的。基本上，他所做的就是为Usenet创建一个被黑的新闻版本。Usenet运行的软件。因此，语言从一开始就是关于文本操作，以及将数据从一个地方移动到另一个地方。这完全符合web的需求，而Perl作为一种易于使用的脚本语言，更接近于自然语言。它可以用来快速开发东西。所有这些都让它成为了一个完美的组合，不仅适合专业用户，也适合新加入的业余用户。

... quite famously was invented in a kind of secret NSA project that Larry Wall was working on. Essentially what he was doing was creating a hacked version of news that Usenet ... the software that Usenet ran on. And so, the language from the beginning was about text manipulation, and moving data from one spot to another. This just completely fit in with what was going to be needed for the web, and Perl, as a scripting language that was easy to use, that more closely resembled natural language. It could be used to develop things quite quickly. All these things made it a perfect fit, not just for the professional users, but also this new group of amateurs that came in.

**05:09** - _Saron Yitbarek_

几乎是出于偶然，Perl在出现时就准备利用web。拉里·沃尔不可能知道网络即将出现。但当它出现时，事情就吻合了。但我认为还有一点很关键。Perl是一种自由语言。拉里·沃尔在GPL下发布了它，即由自由软件基金会开发的通用公共许可证。

Almost by accident Perl was ready to capitalize on the web when it came along. Larry Wall couldn't have known that the web was about to show up. But when it did, things dovetailed. But here's something else that I think is key. Perl was a free language. Larry Wall released it under the GPL, the General Public License, that had been developed by the Free Software Foundation.

**05:37** - _Saron Yitbarek_

Wall让他的语言免费的决定完全符合一种新的基于web的思维方式，这种思维方式刚刚开始出现，而Perl在其他方面也具有前瞻性。

Wall's decision to make his language free was totally in line with a new web-based way of thinking that was just starting to emerge, and Perl was forward-thinking in other ways, too.

**05:50** - _Michael Stevenson_

Perl在某种意义上是非常开放的，它总是愿意集成其他的东西，新的东西。这和拉里·沃尔的身份很相配。他是个很开放的人，会…他很谦虚，总是仔细考虑别人的想法，并试着设身处地为别人着想。对我来说，Perl作为一种语言和一个社区的特性如何在很长一段时间内真正适应这种特性是很有趣的。

Perl was incredibly open in a sense that it was always willing to integrate something else, something new. This really goes with who Larry Wall is. He's a very open person who will ... he was very humble, and will always carefully consider what others think, and try to put himself in their shoes. It's interesting how, for me, Perl's character as a language, and as a community, really fit that for a long time.

**06:27** - _Saron Yitbarek_

同样，Perl非常适合web早期的狂野西部阶段，也就是黑客时代。实际上，Perl的座右铭之一是，“有不止一种方法可以做到这一点。

Again, Perl was ideally suited to that early, wild west phase of the web, that hacker moment. In fact, one of Perl's mottos is, "There's more than one way to do it."

**06:39** - _Michael Stevenson_

在Perl的鼎盛时期和这个试验性的开放web的鼎盛时期之间，存在着一种近乎浪漫的联系，在它被几个平台主宰之前。

There's a kind of almost romantic connection between the heyday of Perl and the heyday of this experimental open web, before it became so dominated by just a couple of platforms.

**06:56** - _Saron Yitbarek_

请记住，90年代是互联网历史上的一个时刻，那时人们还在争先恐后地想知道什么是可能的。这是对编程的巨大需求。每个人都必须有一个网页，这意味着一群全新的开发人员，他们都对做事的新方法持开放态度。问题变成了，“好吧，我们有了一个全新的领域，但用什么语言来完成这项工作呢?”

Remember that the 90s was a moment in the web's history when people were still rushing to figure out what was possible. There was this huge new need for programming. Everybody had to have a web page, and that meant a whole new army of developers, all of them open to new ways of doing things. The question became, "Okay, we've got a brand-new territory to play in, but what language is going to get the job done?"

**07:26** - _Saron Yitbarek_

Perl并不是这个问题的最终答案。但是，对于很多人来说，Perl是首选。

Perl didn't turn out to be the final answer to that question. But, for lots of people, Perl was the first answer.

**07:34** - _Michael Stevenson_

我并不是说我宁愿使用加载速度超慢的网页，也不使用谷歌搜索引擎，但当时有一些人，在他们的宿舍里，创建了一个类似slashdot的东西，这当然很不错。那个时代有一些特别的东西，我确实认为，由于web已经变得如此主流和专业化，如此集中在几个大公司，我们确实错过了。对我来说，Perl比那个早期的任何其他故事更能象征这一点。

I'm not saying that I would rather have super slowly loading web pages, and no Google search engine, but there is something of course really nice about that time when a couple of guys would, from their dorm room, create something like slashdot. There's something special about that time that I do think that as the web has become so mainstream and professionalized, and so concentrated around a few big companies, that we do miss. And for me, Perl symbolizes that more than any other story from that early period.

**08:15** - _Saron Yitbarek_

迈克尔·史蒂文森是阿姆斯特丹大学媒体研究的副教授。

Michael Stevenson is an Associate Professor in Media Studies at the University of Amsterdam.

**08:24** - _Saron Yitbarek_

因此，随着90年代的到来，Perl作为一种适应早期web可能性的语言出现了。它是当时的一种语言。拉里·沃尔(Larry Wall)和扩展后的Perl了解了web的本质。

So, as the 90s rolled around, Perl emerged as the language that fit in with the early web's possibilities. It was a language of its time. Larry Wall, and Perl by extension, got what the web was all about.

**08:40** - _Mike Bursell_

你可以做搜索。你可以在飞行中创建网页，这是互联网的美丽新世界，你可以实时地做这些事情。

You could do searches. You could create pages on the fly, and this is the brave new world of the internet, of the web, that you could do this stuff in real time.

**08:52** - _Saron Yitbarek_

这位是Mike Bursell，红帽公司的首席安全架构师。Mike是90年代中期发现Perl的黑客之一。

That's Mike Bursell, Chief Security Architect over at Red Hat. Mike was one of those hackers who discovered Perl in the mid-90s.

**09:00** - _Mike Bursell_

对于web来说，Perl是许多人的起点。Java™\>还处于早期阶段，它在文本输入/输出方面并不是很出色，如果您想进行查询和生成页面，Perl就是人们使用的工具。

For the web, Perl was the starting point for many people. Java™\> was early days, it wasn't really fantastic at text input/output, and if you wanted to be taking queries and generating pages, well Perl was what people were using anyway.

**09:22** - _Mike Bursell_

Perl非常适合，因为它擅长获取文本，并使用文本做其他事情。这就是万维网。

Perl was just a good fit, because it's good at taking text, and doing other things with text. And that's what the web was.

**09:31** - _Saron Yitbarek_

顺便说一下，Larry Wall有语言学背景，这解释了Perl强大的文本解析能力。正如Mike Bursell提到的，这是一笔巨大的红利，因为在早期，网络主要是一种基于文本的媒体。

Larry Wall has a background in linguistics, by the way, which explains Perl's strong text parsing. And that was a huge bonus, as Mike Bursell mentioned, because the web was largely a text-based medium in those early days.

**09:47** - _Saron Yitbarek_

人们没有足够的带宽来处理图像。

People didn't really have the bandwidth for graphics.

**09:51** - _Mike Bursell_

它很容易使用。很容易模仿。人们在分享方面非常开放，而且很快就产生了成果，这些都是好东西。

It was easy to use. It was easy to copy. People were very open with sharing, and it produced output quickly, and that was all good stuff.

**10:02** - _Mike Bursell_

哦，还有一件事，当然，你可以用管道来输送东西。所以，这是人们已经很习惯的，即使是离线测试也很容易，这些都非常有用。

Oh, and the other thing, of course, is you could pipe things from it. So, it was very much what people are used to, and very easy to test even offline, and that was all very useful.

**10:13** - _Saron Yitbarek_

尤其对那些在基于web的世界中重新规划自己生活的系统管理员来说非常有用。

Useful especially for all those sysadmins, who were reimagining their lives in a web-based world.

**10:21** - _Mike Bursell_

Perl是系统管理员的真正礼物。即使在那个年代，如果你在做一些有趣的事情，你也会得到很多日志。管理这些日志，分解它们，搜索它们，并能够以不同的方式显示它们，或获取任何其他大型文本库，这基本上就是日志，甚至调试。除非您要在命令行上通过管道传输orc, sed和其他东西，以及ed，这很快会变得非常痛苦，否则Perl是您的首选。

Perl was a real gift for sysadmins. Even in those days, you're getting lots of logs if you are doing anything interesting. Managing those logs, breaking them down, searching them, and being able to present them in different ways, or taking any other large corpus of text, which basically is what logs are, or even debug. Unless you were going to pipe orc, and sed and stuff, and ed on the command line, which gets very painful very quickly, Perl was your go-to for that.

**10:55** - _Saron Yitbarek_

到90年代后期，Perl 5已经团结了一个强大的用户社区。旧的语言，如Fortran和C，依赖于庞大而昂贵的硬件。但是Perl更有生命力，也更容易移植。它被设计成在一个硬件成本急剧下降的世界里蓬勃发展，让所有的新程序员快速而轻松地工作。这是因为拉里·沃尔牺牲了CPU和内存的需求，使他的语言更接近人类。所有这些元素组合在一起使Perl成为一种欢迎新的开发社区的语言。

By the late 90s, Perl 5 had pulled together a powerful community of users. Older languages, like Fortran and C, had relied on big, expensive hardware. But Perl was scrappier and more portable. It was designed to thrive in a world where hardware costs were dropping dramatically, letting all those new programmers work fast and easy. That's because Larry Wall made his language more human-like at the expense of CPU and memory requirements. All those elements combined to make Perl a language that welcomed the new development community.

**11:36** - _Mike Bursell_

那里的人越来越多你可以去和他们聊聊那里有什么。珀尔蒙克斯来了，这是一个讨论的好地方，知道发生了什么。

There was very much a growing community of people out there who you could go and talk to about what there was. PerlMonks started to arrive, it was a great place to discuss things, find out what was going on.

**11:50** - _Saron Yitbarek_

这个社区确实拥有网络所能提供的最好的东西。他们发现了一个巨大的软件模块库，一个叫做CPAN的银行，这些系统管理员都很喜欢它。它给Perl提供了更多的灵活性，许多人可以部署由几个超级巨星编写的代码。

That community really did have the best the web could offer. They discovered a huge repository of software modules, a bank called CPAN, which those sysadmins loved. It gave Perl even more flexibility, lots of people could deploy code written by a few superstars.

**12:15** - _Mike Bursell_

它有很多库可以做你想做的事情，如果你找不到它，你就去问，然后有人写了它。

It had libraries to do pretty much anything you wanted, and if you couldn't find it, you asked, and someone wrote it.

**12:21** - _Saron Yitbarek_

Mike Bursell是红帽公司的首席安全架构师。

Mike Bursell is the Chief Security Architect at Red Hat.

**12:28** - _Saron Yitbarek_

因此，Perl是免费的，它受到不断增长的模块库的支持，它是可移植的，而且它有一个蓬勃发展的社区。事情看起来不错。Perl可以充分利用上世纪90年代web开发的所有优势。但是，就在90年代即将结束时，发展前景又一次发生了变化。改变了。

So, Perl was free, it was supported by a growing library of modules, it was portable, and it had a booming community. Things were looking good. Perl could exploit all the best in that new 1990s world of web development. But, just as the 90s came to a close, as if on queue, the development landscape changed again. Changed big time.

**12:57** - _Alan Greenspan_

但我们如何知道，非理性繁荣何时已过度推高了资产价值，进而导致了意料之外的长期收缩?

But how do we know when irrational exuberance has unduly escalated asset values, which then become subject to unexpected and prolonged contractions?

**13:12** - _Saron Yitbarek_

非理性繁荣。这是时任美联储主席艾伦•格林斯潘在1996年对美国企业研究所说的话。他那句“非理性繁荣”是对90年代人人都经历过的网络泡沫的警告。所有早期使用Perl的web开发人员都在那个泡沫中乘风破浪，但正如格林斯潘预测的那样，泡沫在2000年破裂了。

Irrational exuberance. That's Alan Greenspan, then Chair of the Federal Reserve, talking to the American Enterprise Institute in 1996. And that phrase of his, irrational exuberance, was a warning about the dot-com bubble everybody rode through the 90s. All those early web developers using Perl were riding high on that bubble, but it all burst in 2000, just like Greenspan predicted.

**14:11** - _Conor Myhrvold_

大家好，我是康纳·梅尔沃德。在过去的五六年里，我一直在编程，现在我在技术领域为Uber工作。

Hi, I'm Conor Myhrvold. I've been programming for the last five or six years, and I'm currently in the technology space working for Uber.

**14:20** - _Saron Yitbarek_

2000年代初，当Conor还在高中的时候，Perl仍然是一个非常重要的东西。但他越来越意识到一种与之竞争的语言，叫做Python。

When Conor was in high school in the early 2000s, Perl was still a pretty big deal. But he was increasingly aware of a competing language, called Python.

**14:31** - _Conor Myhrvold_

Python所做的一件事是，它是一种更结构化的语言，因为有一种明显的方式来做很多不同的事情，它就是这样设置的。而Perl喜欢做的事情不止一种。但是很多初学者都很困惑。

One thing that Python had going for it, is it's a much more structured language in that there's one obvious way to do a lot of different things, and it's set up that way. Whereas Perl kind of relished in being the fact that there's more than one way to do something. But that was confusing to a lot of beginners.

**14:49** - _Saron Yitbarek_

Perl有这样一句座右铭:“实现它的方法不止一种。”Python的投资实际上是相反的。Python为每个问题都提供了一个明显的解决方案，这意味着查看别人的Python代码很容易。另一方面，查看其他人的Perl代码可能会令人困惑。Perl作为人的第三或第四种语言是有意义的。正是因为它是一种脚本语言。那是互联网的管道胶带。

Perl had that motto, "There is more than one way to do it." Python was actually invested in the opposite. Python gave you one obvious solution for each problem, and that meant looking at somebody else's Python code was easy to do. Looking at somebody else's Perl code, on the other hand, could be confusing. Perl made sense as a person's third, or fourth, language. Precisely because it was a scripting language. It was the duct tape of the internet.

**15:23** - _Saron Yitbarek_

但是Python是一种你可以真正深入研究的语言，即使你是一个新手。Perl有一组特定的优势;搜索文本，生物信息学。但是Python就是这种简单的、通用的语言。作为人们首先想学的语言，Python获得了越来越多的信任。这是一件大事。

But Python was a language you could really dig into, even as a newcomer. Perl had a specific set of strengths; searching for text, bioinformatics. But Python was this easy, general-purpose language. Python gained more and more cred as the language people wanted to learn first. That was a huge deal.

**15:47** - _Conor Myhrvold_

越来越多的人开始上网，越来越多的人开始学习如何编程。Python从中受益的一件事(尤其是在这个时期相对于Perl而言)是，它相对容易学习，因为它更结构化。因此，在一个饼增长很快的世界里，如果你能得到更多的饼增长，那将最终意味着有更多的教程和更多的东西可供你使用。

A lot more people were going online, and a lot more people are learning how to program. One thing that Python benefited from, especially relative to Perl during this time period, is that it was relatively easy to learn because it was more structured. And as a consequence of that, in a world where the pie is increasing quickly, if you can get more of that increase in pie, that will eventually mean that there are tutorials and more stuff available to you.

**16:10** - _Saron Yitbarek_

我之前提到过CPAN，它是Perl用户可以使用的强大的中央存储库。这在90年代是一个主要的吸引。但CPAN的价值也在变化。

I mentioned CPAN before, that awesome central repository that Perl users could pull from. It was a major draw in the 90s. But the value of CPAN was also changing.

**16:24** - _Conor Myhrvold_

这也不能真正帮助你学习一门语言，因为你是在“复制”，只是用最少的方式替换你需要的东西。从长远来看，这是一个劣势，因为如果你让一些人通过自己进行原始开发来学习如何使用一种编程语言，即使这需要花费更长的时间，他们也会觉得自己对它投入了更多，而且他们了解发生了什么。

That also doesn't really help you learn a language, because you're “copypastaing” and just replacing what you need to in the minimum amount of fashion. That became a disadvantage over the long run, because if you have people that learn how to use a programming language by doing original development of everything themselves, even if it takes a lot longer, they feel like they're more invested in it, and they understand what's going on.

**16:48** - _Saron Yitbarek_

Python没有像CPAN那样的集中式存储库，但是对于那些在新千年来到这里的开发人员来说，在一个web搜索功能强大得多的世界里，存储库并没有那么大的价值。

Python didn't have a centralized repository, like CPAN, but the kind of developers coming to the table in the new millennium, in a world where search on the web was so much more powerful, that repository didn't have as much value anyway.

**17:05** - _Saron Yitbarek_

ython最终有了大量的教程，当然，现在也有了像GitHub这样的平台。

Python eventually had loads of tutorials, and of course, today you also have platforms, like GitHub.

**17:13** - _Conor Myhrvold_

最终发生的事情是Perl拥有的许多优势是来自一个已经过时的时代的网络效应。

What ended up happening is a lot of advantages that Perl had were these network effects from an era that was outgrown.

**17:24** - _Saron Yitbarek_

康纳·梅尔沃德(Conor Myhrvold)是Uber的一名工程师。

Conor Myhrvold is an engineer at Uber.

**17:30** - _Saron Yitbarek_

然而，语言的兴衰很少是由外部力量单独决定的，Perl的内部问题是，在它的发展过程中，它似乎遇到了障碍。Python正在以一种相当有序的方式发布新的迭代，但是在Perl，正如我们在本季度第一集中所了解到的，在2000年，dot-com泡沫正在破裂，Python开始吞噬新的开发人员。

Languages rarely rise and fall by external forces alone though, and the internal issue over at Perl was that as it was evolving, it seemed to hit a roadblock. Python was releasing new iterations in a pretty orderly fashion, but over at Perl, well as we learned in episode 1 of this season, in 2000 that dot-com bubble was bursting, and Python started gobbling up new developers.

**17:59** - _Saron Yitbarek_

每个人都期待着Perl 6的发布，人们都很兴奋。他们等啊，等啊，等啊。他们等了14年。

Everyone was expecting the release of Perl 6, and people were excited. They waited, and waited, and waited. They waited for 14 years.

**18:15** - _Elizabeth Mattijsen_

人们提出了大约300多件Perl 6应该能够完成的事情，当然其中很多事情基本上是相互排斥的。

People came up with about 300 plus things that Perl 6 should be able to do, and of course a lot of these things were basically, mutually exclusive.

**18:26** - _Saron Yitbarek_

这是Elizabeth Mattijsen，她是Perl 6的核心开发人员。伊丽莎白在2000年参加了蒙特雷的Perl会议。这时，开发人员认为他们已经停滞不前了，所以Perl 6是必要的。Larry Wall同意了，但是如果Perl 5是他对Perl的重写，那么他希望Perl 6是社区对Perl的重写。而团队合作可能需要更长时间，甚至14年。对于那些开发者来说，这是一条漫长而艰难的道路。

That's Elizabeth Mattijsen, who works as a core developer on Perl 6. Elizabeth was at the Perl conference in Monterey in 2000. That's when developers decided they were stagnating, and Perl 6 was necessary. Larry Wall agreed, but if Perl 5 was his rewrite of Perl, he wanted Perl 6 to be the community's rewrite of Perl. And group work can take longer, even 14 years. It was a long and difficult road for those developers.

**19:01** - _Elizabeth Mattijsen_

我们可以说，Perl 6的当前实现实际上是实现它的第三次尝试。

We could argue that the current implementation of Perl 6 is actually the third attempt of implementing it.

**19:07** - _Saron Yitbarek_

按照伊丽莎白的说法，在这14年里有过多次尝试。那些经历了漫长而痛苦的深度的尝试。人们烧坏;人们陷入了死胡同。到2015年圣诞节那天Perl 6终于问世时，世界上的许多地方已经开始了新的发展。需要注意的是，Perl 6并没有升级为一些革命性的新东西，从而对Python进行反击。Perl 6是对原始版本进行了深思熟虑的重新设计。

The way Elizabeth tells it, there were attempts throughout those 14 years. Attempts that had long, agonizing depths. People burnt out; people ran into dead ends. By the time Perl 6 finally arrived on Christmas Day, 2015, much of the world had already moved on. And it's important to note that Perl 6 wasn't ramping up into some revolutionary new thing that would strike back at Python. Perl 6 was more a thoughtful reworking of the original.

**19:43** - _Elizabeth Mattijsen_

我认为拉里·沃尔在他的《洋葱州》演讲中使用了一个很好的比喻。对他来说，Perl 5就像霍比特人，而Perl 6就像指环王。如果你仔细看《霍比特人》和《指环王》的故事，你会发现它们基本上是同一个故事。只是《霍比特人》比《指环王》小得多，有更多的情节漏洞，没有《指环王》那么多。我认为这很好地描述了Perl 5和Perl 6之间的区别。它基本上是……同样的想法，同样的心态，同样的环境，只是对它的重新想象

I think Larry Wall actually used a very nice metaphor in one of his State of the Onion speeches. Perl 5 to him is like The Hobbit, and Perl 6 is like Lord of the Rings. If you really look at the stories of The Hobbit and Lord of the Rings, they basically are more or less the same story. It's just that The Hobbit is much smaller and has more plot holes than Lord of the Rings and isn't as extensive. I think that describes very well what the difference is between Perl 5 and Perl 6. It is basically ... it's the same idea, it's the same mindset, it's the same environment, but a re-imagination of it.

**20:26** - _Saron Yitbarek_

Elizabeth Mattijsen是Perl 6的核心贡献者。

Elizabeth Mattijsen is a core contributor to Perl 6.

**20:32** - _Saron Yitbarek_

今天，Perl甚至可能不在前20种语言之列。在外部竞争和内部延迟之间，它并没有向大多数新开发人员证明自己。但这提出了一个大问题，我们真的应该如何判断我们的编程语言的受欢迎程度吗?或者，我们应该看看其他的值吗?当超级巨星成为密友时，这到底意味着什么呢?

Today, Perl might not even place on a list of the top 20 languages. Between external competition, and internal delays, it just hasn't proven itself for most new developers. But that raises a big question, is popularity really how we should judge our programming languages? Or, should we be looking at other values? What does it really mean when the megastar becomes a sidekick?

**21:06** - _Saron Yitbarek_

在世纪之交，当dot-com泡沫破裂，Perl的统治地位开始衰退时，Larry Wall发表了一个有趣的声明。他认为，尽管Perl永远不会再成为世界上最流行的编程语言，但它可以成为较小类别中的领先者。拉里·沃尔说，这才是真正的目标。成为同类中最好的，而不是世界上最好的。他说，SUV永远比不上赛车。

Around the turn of the century, as the dot-com bubble was bursting, and Perl's dominance began to wane, Larry Wall made an interesting statement. He argued that, while Perl would never again be among the world's most popular programming languages, it could be a leader within a smaller category. And that, said Larry Wall, was the real goal. To be best in category, not best in the world. An SUV, he said, would never compete with a race car.

**21:38** - _Saron Yitbarek_

我想深入研究这个想法。我想了解在类别中最好对编程语言的真正含义。

I wanted to dig into that idea. I wanted to understand what best in category really means for a programming language.

**21:48** - _John Siracusa_

我是John Siracusa，我是一个程序员，我是一个播客。

I am John Siracusa I am a programmer, and I'm a podcaster.

**21:53** - _Saron Yitbarek_

约翰实际上共同主持了三个播客，《意外技术播客》，《可调和的差异》和《机器人还是不是》我们聊到了Perl在当今世界的地位。

John actually co-hosts three podcasts, Accidental Tech Podcast, Reconcilable Differences, and Robot or Not? We got chatting about Perl's position in the world today.

**22:06** - _Saron Yitbarek_

今天怎么样?它仍然是班里最好的吗?

What about today? Does it still hold up as being best in class?

**22:10** - _John Siracusa_

Perl 6具有其他语言没有的、其他语言应该具有的东西，我一直在等待其他语言窃取它的东西。例如，语法是概念化常见任务的一种好方法，而在我看来，使用语法解决解析问题比使用现有的工具更令人愉快、更干净、更好。

Perl 6 has things that no other language has, that other languages should have, and I keep waiting for other languages to steal from it. Grammars, for example, is a great way to conceptualize a common task, and using grammars to solve parsing problems is, in my opinion, more pleasant, cleaner, and nicer than using the existing tools that we have.

**22:31** - _John Siracusa_

在Perl中，对象系统的许多部分看起来很琐碎，但我完全希望其他语言最终能够采用，就像其中许多语言最终采纳了Perl 5中的许多思想一样。因此，我认为Perl 6在许多类别中都是最好的。遗憾的是，很少有人会发现自己有机会使用它。

There's lots of parts of the object system in Perl that might seem frivolous, but that I fully expect other languages to eventually adopt just as many of those languages eventually adopted a lot of the ideas that were in Perl 5. So, I think Perl 6 is best in class in many categories. It's just such a shame that so few people will find themselves with an opportunity to use it.

**22:52** - _Saron Yitbarek_

您认为Perl 6社区的发展需要做些什么?要让人们更多地参与到Perl 6中，需要发生什么?

What do you think needs to happen for the Perl 6 community to grow? What needs to happen for people to be more involved in Perl 6?

**23:00** - _John Siracusa_

这有点像Perl 6的故事，就像它一直在寻找一个真正奇妙的实现一样。这是第二体系问题的一部分……第二系统综合症，我想他们叫它-

It's kind of been the story of Perl 6, like it's always been looking for a really fantastic implementation. That was part of the second-system problem ... second-system syndrome, I think they call it-

**23:11** - _Saron Yitbarek_

Mm-hmm.

**23:12** - _John Siracusa_

…在Perl 6中，您希望修复世界上的所有问题。他们想要解决的一个问题是运行时。是什么在运行我们的代码?运行Perl 5和之前的Perl 4的东西是一个巨大的C程序，是由具有非常特殊的编码风格和大量宏的人编写的。这有点难以理解。

... of Perl 6, where you want to fix all the problems of the world. One of the problems they wanted to fix was the runtime. What is it that runs our code? The stuff that runs Perl 5, and Perl 4 before it, is a gigantic C program, written by people with very idiosyncratic coding styles and a ton of macros. It's kind of inscrutable.

**23:33** - _John Siracusa_

Perl 6的思想是，让我们不要再那样做了，让我们不要制造大量的C代码。相反，让我们想出一个虚拟机，这是当时的时尚，有很多关于它如何工作的伟大想法。最后，我们得到了几个中等到合格的虚拟机实现版本，它们有时会相互竞争，但没有一个真正交付语言需要支持的性能、稳定性和特性。

The idea with Perl 6 is let's not do that again, let's not make a giant wad of C code. Instead, let's come up with a virtual machine, which was the fad at the time, and there were so many grand ideas about how it was going to work. In the end, we got several medium-to-okay implemented versions of virtual machines, sometimes competing with each other, none of them really delivering on the performance, and stability, and features that the language needed to support it.

**24:01** - _Saron Yitbarek_

现在Perl到底发生了什么?你对此有什么看法?

What is actually going on with Perl today? What's your take on it?

**24:06** - _John Siracusa_

显然，Perl 5似乎正在走下坡路，因为与Perl 5同时代的所有其他语言都采纳了它的大多数最佳思想，并获得了更多的支持。也就是说，因为它在很长一段时间内都是王者，所以有很多Perl 5代码在运行一些大型的、重要的站点，人们需要维护和扩展这些代码。

Perl 5 definitely seems like it's on the downward slope, because all the other languages that are contemporaries with Perl 5 took most of its best ideas and have gotten more support. That said, because it was the king for a long time, there's a lot of Perl 5 code out there running some big, important sites, and people need to maintain and expand that code.

**24:29** - _John Siracusa_

这需要很长时间才能消失。只要看看仍然存在的COBOL，人们是如何仍然雇佣人来研究COBOL的，对吗?

It's going to take a long time for that to fade away. Just look at COBOL that's still out there, and how people are still hiring people to work on COBOL, right?

**24:35** - _Saron Yitbarek_

嗯哼。这是真的。

Mm-hmm. That's true.

**24:36** - _John Siracusa_

您问它是不是一种垂死的语言，我提到了COBOL，这听起来不太好。因为Perl 6本身会成为主导语言吗?看起来不太好。围绕其他语言有如此多的投资，如果Perl 6现在还没有得到这样的投资，我不确定将会发生什么变化来让它流行起来。

You're asking about if it's a dying language, and I mention COBOL, that doesn't sound good. Because will Perl 6 itself ever become a dominant language? It's not looking good. There's so much investment surrounding the other languages, and if Perl 6 hasn't gotten that investment now, I'm not sure what's going to change to make it catch on.

**24:54** - _Saron Yitbarek_

如果按照您的方式，您对Perl的希望是什么?您希望在Perl 5或Perl 6中看到什么，以及希望看到将来发生什么?

If you had it your way, what are your hopes for Perl? What would you like to see in Perl 5, or Perl 6, and what would you like to see happen in the future?

**25:04** - _John Siracusa_

我对Perl 5的希望是，人们不会忽视它，因为尽管有其他更流行的语言，但今天仍然存在Perl 5是最佳解决方案的问题。通常这些都是胶水类型的问题。如果您发现自己曾经编写过shell脚本，并且您可能会说:“好吧，我不会用我的‘真正的编程语言’来做这件事。”不管是Python，还是Ruby，还是别的什么。但是shell脚本可以让我把一堆东西连接起来。Perl是完成这项工作的更好工具。编写正确的Perl脚本要比编写正确的shell脚本容易。

My hope for Perl 5 is that people don't dismiss it, because despite all the other more popular languages, there are still problems today to which Perl 5 is the best solution. Very often those are sort of glue type problems. If you find yourself ever writing a shell script, and you're like, "Well, I'm not going to use my 'real programming language' for this." Whether it's Python, or Ruby, or whatever. But a shell script can let me connect together a bunch of stuff. Perl is a better tool for that job. It is easier to write a correct Perl script than it is to write a correct shell script.

**25:40** - _Saron Yitbarek_

我认为，归根结底，Perl可能不再是入门点，但对于经验更丰富的多语言开发人员来说，您永远不希望扔掉工具箱中的小工具。指定的工具有时允许您升级。

I think what it all comes down to is that Perl might not be the entry point anymore, but for a more seasoned, polyglot developer, you never want to throw out that niche tool in your toolbox. The specified tools are sometimes what allow you to level up.

**25:58** - _John Siracusa_

有时我为Perl 6感到难过和沮丧，认为它不会有任何进展，有时我想，“您知道吗?这是个不错的小社区。”每个社区都不需要称霸世界，也不需要成为整个行业的主导语言。实际上，你可以这样无限地进行下去。这就是开源和编程语言的伟大之处。没人能阻止你。您可以像以前一样继续在Perl 6上工作。

Sometimes I'm sad, and depressed about Perl 6 and think it's going nowhere, and sometimes I'm like, "You know what? This is a nice little community." And every community doesn't need to take over the world and be the language that dominates the entire industry. And maybe you can just go along like this, essentially, indefinitely. That's the great thing about open source, and programming languages. No one's going to make you stop. You can just keep working on Perl 6 the same way you have been.

**26:27** - _Saron Yitbarek_

John Siracusa是一名程序员，也是三个科技播客的共同主持人。

John Siracusa is a programmer, and the co-host of three tech podcasts.

**26:34** - _Saron Yitbarek_

语言有生命周期。当新的语言出现时，它们能够精确地适应新的现实，像Perl这样的选择可能会占据更小、更小的领域。但这并不是一件坏事。我们的语言应该随着我们需求的变化而扩大或缩小它们的群体。在web开发的早期历史中，Perl是一个至关重要的角色，它以各种方式与我们联系在一起，只要看一看它的历史就会发现它的存在。

Languages have life cycles. When new languages emerge exquisitely adapted to new realities, an option like Perl might occupy a smaller, more niche area. But that's not a bad thing. Our languages should expand and shrink their communities as our needs change. Perl was a crucial player in the early history of web development, and it stays with us in all kinds of ways that become obvious with a little history and a look at the big picture.

**27:11** - _Saron Yitbarek_

下次讨论命令行英雄时，是什么将一种语言变成了一种标准?在基于云的开发世界中，一种新标准将如何出现?

Next time on Command Line Heroes, what turns a language into a standard, and how might a new standard emerge in a world of cloud-based development?

**27:26** - _Saron Yitbarek_

命令行英雄是红帽原创播客。如果你想深入了解Perl的故事，或者任何我们在第三季中正在探索的编程语言，请访问redhat.com。我们的网页是打包奖金材料，供您探索。

Command Line Heroes is an original podcast from Red Hat. If you want to dive deeper into the story of Perl, or any of the programming languages we're exploring in season 3, head on over to [redhat.com/commandlineheroes](//redhat.com/commandlineheroes). Our web page is packed with bonus material for you to explore.

**27:49** - _Saron Yitbarek_

我是Saron Yitbarek。在下节课之前，请继续编码。

I'm Saron Yitbarek. Until next time, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-3/diving-for-perl

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
