[#]: collector: (bestony)
[#]: translator: (messon007)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes Season 3: The Infrastructure Effect)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-3/the-infrastructure-effect)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes Season 3: The Infrastructure Effect
命令行英雄第三季: 基础设施效应
======
**00:00** - _Saron Yitbarek_

When the New York City subway first started running in 1904, it was a marvel of the modern age. But ... what happens when today's commuter depends on infrastructure that was designed more than a century ago? Trains are packed and often late. Two billion subway rides take place each year in New York, and nobody's marveling anymore. We are tied to yesterday's crumbling infrastructure, and we have to find smart, new ways to make it work.
1904年，纽约市地铁首次开始运营时，它被认为是现代的一个奇迹。但是……当今天的通勤者仍依赖一个多世纪前设计的基础设施时，会发生什么？ 火车挤满了人，而且常常晚点。 纽约每年有20亿人次地铁出行，再也没有人感到惊叹了。 我们还在紧密依赖昨日过时的基础设施，我们必须找到使其工作的明智的新方法。

**00:44** - _Saron Yitbarek_

It used to be that infrastructure projects were these big, concrete things we could see—that subway, for example. And because of that physical presence, it was also pretty obvious when they broke down. Highways crack, telephone poles fall over. We know when those things need fixing. Big efforts are necessary to get our lives in sync with aging infrastructure.
基础设施项目通常是些可见的大而具体的事物，例如地铁。 而且由于这种物理可见性，它们损坏时也显而易见。 高速公路开裂，电线杆跌落。 我们很清楚这些东西何时需要维修。 为了使我们的生活与老化的基础设施保持协调，大量的工作是必不可少的。

**01:12** - _Saron Yitbarek_

But things aren't always so obvious. Today we also have IT infrastructure, server farms humming in isolated fields, fiber optic cables spanning oceans, and software infrastructure, too. Like legacy operation system, or shell scripts that nobody dares to replace. When all that IT infrastructure gets old and creaky, we can't see it for ourselves. And yet, the infrastructure that makes today's development work possible is aging, just like an old subway track. And that can mess with our modern lives. Massive new challenges emerge as today's command line heroes work to make sure we're not being boxed in by the past.
但是事情并不总是那么明显。 如今，我们还拥有IT基础设施，在偏僻地区嗡嗡作响的服务器农场，跨越海洋的光纤电缆以及软件基础设施。 像老的操作系统或没人敢替换的shell脚本。 当所有这些IT基础设施变得陈旧和破旧时，我们自己是看不到的。 但是，造就了今日开发工作的基础设施却正在老化，就像旧的地铁轨道一样。 这可能会扰乱我们的现代生活。 如今命令行英雄们正努力确保我们不会被过去束缚，因此出现了大量新的挑战。

**02:02** - _Saron Yitbarek_

This is episode 5 of our season-long journey into the world of programming languages. We're looking at 2 languages that have intimate ties to the infrastructure they were first designed for. COBOL is a language native to mainframe computing, and Go is native to the cloud. They're both deeply influenced by their origins. Understanding that might save tomorrow's developers from ending up like a New Yorker crammed into Penn Station.
这是我们编程语言世界探索季的第5集。 我们正在研究2种(编程)语言，它们与最初设计的目标基础设施密切相关。 COBOL是大型机的原生语言，而Go是云计算的原生语言。 他们都深受其起源的影响。 了解这一点可能会拯救将来的开发者，避免他们像挤在宾州车站的《纽约客》那样走到最后。

**02:33** - _Saron Yitbarek_

I'm Saron Yitbarek, and this is season 3 of Command Line Heroes, an original podcast from Red Hat.
我是Saron Yitbarek，这是Red Hat的原创播客，命令行英雄的第3季。

**02:43** - _Grace Hopper_

So many things ahead that we have to do, but we need tremendous amounts of information, correlated, easy to access. We're only at the beginning.
我们面前有很多事情需要去做，但是我们首先需要大量相关的且易于访问的信息。 我们才刚刚开始。

**02:53** - _Saron Yitbarek_

Admiral Grace Hopper pioneered high-level programming languages in the 1940s and 50s. And she was able to make that great leap forward because of the infrastructure of her time, mainframe computers.
海军上将Grace Hopper在1940年代和50年代率先开发了高级编程语言。 当时的基础设施大型计算机使得她能够取得巨大的飞跃。

**03:08** - _Chris Short_

Hi, my name's Chris Short.
嗨，我叫Chris Short.

**03:10** - _Saron Yitbarek_

Chris is a principal product marketing manager at Red Hat, and he's a bit of a history buff, too.
Chris是红帽（Red Hat）的首席产品营销经理，而且他也是一位历史爱好者。

**03:17** - _Chris Short_

Admiral Hopper in the 40s made FLOW-MATIC, and she's widely considered the grandmother of COBOL, which was revolutionary at the time. So being able to sit there and say, "Hey, just put it on the mainframe," or, "Hey, just store it on the mainframe."
40年代的Hopper上将创造了FLOW-MATIC，在当时是革命性的，她被广泛认为是COBOL的祖母。 因此，她能够坐在那里说：“嘿，只需将其放在大型机上”，或“嘿，只需将其存储在大型机上”即可。

**03:31** - _Saron Yitbarek_

It was a major game changer. Suddenly, you've got this machine-independent language, COBOL, that's native to the mainframe environment. Possibilities started opening up.
这是一个重大的游戏改变者。 突然，您有了这种机器无关的语言，即COBOL，它是大型机环境特有的。 可能性开始逐步打开。

**03:42** - _Chris Short_

COBOL with mainframes really gave every organization the capability to say instead of having a room full of people with pencils, and paper, and calculators, and slide rules, they could just have half a room with a mainframe in it. And then they could have a few people write some applications in COBOL to do all of the math, and logic, and ledgering that their entire finance team could do. So the team of people that you needed to do your finances became a lot less, just because a lot more of the input could be digital as opposed to all hand jam in manually.
大型机和COBOL真正使得每个组织能够说它们不再需要充满了带着铅笔，纸，计算器和滑尺的人的办公室，他们可能只需要半个办公室来安装大型机。 然后，他们可以雇人用COBOL来编写一些应用程序来完成整个财务团队做的所有的数学，逻辑运算以及账目分类。 因此，您需要的财务团队人数少了，仅仅是因为更多的输入可以被数字化，而不是全手动操作。

**04:17** - _Saron Yitbarek_

If you were one of those new COBOL programmers, it would've felt like you have a job for life. Because the infrastructure that your work was based on, all those mainframes, they weren't going anywhere.
如果你是新的COBOL程序员之一，那感觉你将有一份终生的工作。 因为您的工作所基于的基础设施(所有那些大型机)，始终会在那里。

**04:30** - _Chris Short_

Moore's Law wasn't around back then, so you could go an entire decade working on the same mainframe, potentially, right? Like you didn't have to worry about the next operating system, or the next type of container orchestrator, or the next thing that comes along and AI, or whatever. You could probably spend your whole career working on COBOL. And you knew you were going to be pretty safe.
那时侯摩尔定律还未到来，所以您可能可以整整十年都在同一个大型机上工作，对吧？就像您不必担心下一个操作系统，或者下一个类型的容器编排器，又或者下一个随之而来的东西以及AI一样。 您可能会整个职业生涯都在从事COBOL。 而且您知道自己将会非常稳定。

**04:55** - _Saron Yitbarek_

But, Moore's Law did arrive eventually. New infrastructures showed up, too. And these days, programmers are less likely to learn a half-century old language. But here's the thing, those old mainframes aren't actually gone. And that means our need for COBOL developers hasn't vanished either.
但是，摩尔定律最终到来了。 新的基础设施也出现了。 现如今，程序员不太可能去学习一种半个世纪前的旧语言。 但实际上，那些旧的大型机并没有消失。 这意味着我们对COBOL开发人员的需求也没有消失。

**05:17** - _Chris Short_

It's getting a lot harder to find COBOL developers. What ends up happening is these mainframes have been here for 50 years, potentially. And these COBOL developers that still can write good COBOL will get paid exorbitant amount of monies to help with projects, and reorganization of data within mainframes. And that skillset is definitely dying off and becoming a highly lucrative career field if you ... you can definitely make a lot of money writing COBOL nowadays.
寻找COBOL开发者变得越来越困难。 最终会发生的事情是这些大型机可能已经存在了50年。 这些仍然可以编写出色COBOL程序的COBOL开发人员将获得巨额收入，以帮助项目运行并完成大型机中的数据重组。 而且，该技能肯定会绝迹，并且正在成为一个利润丰厚的职业领域，如果您……您现在绝对可以靠写COBOL赚很多钱。

**05:49** - _Saron Yitbarek_

Especially in the manufacturing and finance industries. You can't outrun all that infrastructure that was laid down decades ago. Legacy code permeates work all around the world. It'd be a huge mistake to ignore that old infrastructure and the languages tied to it.
尤其是在制造业和金融业。 您无法超越几十年前建立的所有基础设施。 老代码遍及全球。 忽略旧的基础设施及其相关的语言，将是一个巨大的错误。

**06:08** - _Chris Short_

With 200 billion lines of code laying around, it's going to be really hard to refactor all that. No, I don't think we'll ever see it disappear in our lifetimes, for sure.
由于存在2000亿行代码，因此很难重构所有这些代码。 不，我认为在有生之年我们肯定不会看到它消失。

**06:21** - _Saron Yitbarek_

Chris Short is a principal product marketing manager at Red Hat.
Chris Short是Red Hat的首席产品营销经理。

**06:28** - _Saron Yitbarek_

I want to drive Chris's point home for a sec. Consider this. COBOL is baked into 95% of all ATM transactions. That's how tied we are to this language. And yet, the average COBOL programmer isn't much younger than the language itself. They are 45, maybe 55 years old. The newbies aren't interested. Which is why I want to introduce you to someone.
我想花一秒钟解释一下Chris的观点。 想象一下，COBOL已经纳入了95％的ATM交易中。 那就是我们与这种语言的紧密联系。 但是，COBOL程序员的平均年龄并不比该语言年轻。 他们45岁，或者55岁。 新人并不感兴趣。 这就是为什么我想向您介绍某人。

**06:56** - _Ritika Trikha_

Hi, my name is Ritika Trikha.
嘿，我是Ritika Trikha。

**06:59** - _Saron Yitbarek_

Ritika's a technology writer, formerly with HackerRank. And she's fascinated by this question of COBOL, and the assumption people make that it's a kind of pointless leftover from the mainframe days.
Ritika是一名技术编辑，曾在HackerRank工作。 她对这个COBOL问题，以及人们对它是后大型机时代无意义的残留品的假设着迷。

**07:12** - _Ritika Trikha_

Developers today are really not thinking about COBOL, it's out of sight, out of mind.
如今的开发人员根本没有考虑过COBOL，见也没见过，想也没想过。

**07:17** - _Saron Yitbarek_

But that could be a recipe for disaster.
但这可能是灾难的根源。

**07:21** - _Ritika Trikha_

There's a huge volume of COBOL lines of code that are still powering businesses today. At least 1.5 billion new lines of code in COBOL every single year. And I think when you look at the specific industries, it's really interesting. Like there's 50 million lines of code at the IRS. There's 60 million lines of code at the Social Security Administration. And so these businesses and entities are handling some of the most sensitive, important information today, and if we don't continue to power and maintain these mainframes, it could be really destructive.
如今，仍然有大量的COBOL代码在为驱动企业的业务。 每年至少新增15亿行新COBOL代码。 我认为当您查看特定行业时，非常有趣。 就像美国国税局有5000万行代码。 社会保障局有6000万行代码。 因此，这些单位和实体正在处理一些如今最敏感，重要的信息，如果我们不继续为大型机提供支持和维护，那么它可能真的会被破坏。

**08:04** - _Saron Yitbarek_

So if we can't escape our old infrastructure, and we can't wave a magic wand to rebuild the whole mainframe universe, what do we do? How do coders, who sometimes only think about the future, start coming to terms with the past? We need to start by facing the problem head on.
因此，如果我们无法摆脱旧的基础设施，又无法挥舞魔杖来重建整个大型机业务，我们该怎么办？ 有时仅仅考虑未来的编码人员该如何开始适应过去？ 我们首先需要直面该问题。

**08:25** - _Ritika Trikha_

You know, younger generations are going to have to pick up these skills. Or, there has to be some sort of modernization of these mainframes. Either way, this problem isn't going to go away. That's why COBOL is relevant.
您知道，年轻一代将不得不重拾这些技能。 或者，必须对这些大型机进行某种现代化。 无论哪种方式，这个问题都不会消失。 这就是为什么COBOL是相关的。

**08:35** - _Saron Yitbarek_

It's not going to be easy. Ritika figures we've ignored the problem for too long already.
这并不容易。 Ritika认为我们已经忽略这个问题太长时间了。

**08:42** - _Ritika Trikha_

It's incredibly expensive, hard, and the risk is incredibly high to replace billions of lines of COBOL. It's mission-critical code like Social Security and financial information. And COBOL was specifically designed for these types of large volumes of transactions. So it was designed for business transactions by Grace Hopper in the 60s. And “if it's not broken, why try to fix it” has been the mentality since the 60s, and now we're at a point where we just have decades of very valuable, high volumes of data running on COBOL.
这非常昂贵，艰巨，并且替换数十亿行COBOL代码的风险也非常高。 它是关键任务代码，像社会保障和财务信息。 COBOL是专门为此类大交易量而设计的。 因此，它由Grace Hopper在60年代为商业交易而设计。 自60年代以来，一直存在“如果没有损坏，为什么要修复它”的说法，现在我们处于这样一个关头，即延续了数十年的大量的高价值数据运行在COBOL上。

**09:22** - _Saron Yitbarek_

In a way, Ritika's calling for a cultural shift. A change in attitude about what's in and what's out. As the world of development starts to actually gain a deeper and deeper past, we have to become more in touch with our own history. You can't escape the aging infrastructure. And that means you can't ignore the history of languages either.
从某种意义上说，Ritika呼吁文化转变。内在和外在的态度发生变化。 由于发展的世界开始获得越来越久的历史，我们必须更加与自己的历史保持联系。 您无法摆脱老化的基础设施。 这意味着您也不能忽略语言的历史。

**09:47** - _Ritika Trikha_

Something has to be done. When I was at HackerRank, I saw firsthand how many banks and financial institutions are hurting, and desperate almost, for COBOL developers. It's not a problem that's going to go away, and I think either there has to be some sort of modernization of the systems, or we need to keep training folks and incentivizing it. I personally think there's going to be a day where COBOL is actually in again. Really, what's going to happen when all of the developers with COBOL knowledge retire, and no new younger generations of developers are learning COBOL? Something has to give, right? So there needs to be more of a systematic and institutionalized change when it comes to shifting away from COBOL and into the new cloud-based infrastructures.
有些事情必须得做。 当我在HackerRank时，我亲眼看到了多少银行和金融机构对COBOL开发人员造成伤害，并且几乎绝望了。 这不是一个将被解决的问题，我认为要么对系统进行某种现代化，要么我们继续培训人员并激励他们。 我个人认为将会有COBOL再次出现的一天。 真的，当所有拥有COBOL知识的开发人员退休并且没有新一代的开发人员学COBOL时，将会发生什么？ 一定要付出，对吧？ 因此，还需要进行更多的系统化和制度化的变革才能开始从COBOL转向新的基于云的基础设施。

**10:37** - _Saron Yitbarek_

Ritika Trikha is a technology writer based in San Francisco.
Ritika Trikha是一名旧金山的技术编辑。

**10:49** - _Saron Yitbarek_

So what about those cloud-based infrastructures Ritika mentioned? Are the infrastructures we're building today going to chain future generations to particular languages, the way we're still tied to COBOL? Amazon Web Services (AWS) may be the biggest single piece of cloud infrastructure, launched in 2006. Google Cloud Platform arrived in 2008, and Microsoft Azure started in 2010. The Go language, with its focus on concurrency, was made to thrive inside all that new cloud infrastructure. It's a language of its time.
那么Ritika提到的那些基于云的基础设施又会怎么样呢？ 我们今天建立的基础设施是否会将后代绑定到特定的语言，像我们仍绑定到COBOL一样？ 亚马逊2006年推出的Web Services（AWS）可能是最大的单片云设施。Google云平台于2008年问世，微软Azure于2010年问世。Go语言以并发为重点，定位于在新的云基础设施上蓬勃发展。 这是这个时代的语言。

**11:26** - _Carmen Andoh_

Hi, my name is Carmen Andoh, and I am a program manager for the Go team at Google.
嗨，我叫Carmen Andoh，我是谷歌Go小组的项目经理。

**11:34** - _Saron Yitbarek_

Carmen has an insider's understanding of how Go is tied to today's infrastructure. It starts with the creators of Go having some strong ties to the history of languages.
Carmen对Go语言与今天的基础设施有怎么的联系有内幕消息。 它起源于Go的创作者和语言历史的紧密联系。

**11:47** - _Carmen Andoh_

Robert Pike, Robert Griesemer, and Ken Thompson. Those names have kind of come through ever since the 1960s. So Ken Thompson invented the programming language B, and then he would go on to invent the UNIX operating system on a summer off. And Rob Pike invented UTF-8, which is a string in coding. He also invented ASCII. He helped co-author the UNIX programming environment. So these two had been coworkers for a very, very long time, and they had been looking at and inventing operating systems in previous programming languages, including C, which Ken Thompson would eventually help write with Dennis Ritchie.

Robert Pike，Robert Griesemer和Ken Thompson。 自从1960年代以来，这些名字就已经出现了。 Ken Thompson发明了B语言，然后他在夏天休假后继续发明UNIX操作系统。 Rob Pike发明了字符串编码UTF-8和ASCII。 他帮助Ken Thompson共同编写了UNIX编程环境。 因此，这两个人已经合伙很长时间了，他们一直在用以前的编程语言(包括Ken Thompson和Dennis Ritchie最终帮助编写的C在内)研究和发明操作系统。

**12:28** - _Saron Yitbarek_

Once Pike, Griesemer, and Thompson were all working at Google, they discovered a serious problem. Getting concurrency at scale just wasn't happening. People were waiting hours for a bill to compile. They were working in C++, and had to write all these callbacks and event dispatchers. It was 2009, and our infrastructure was changing again. Languages like C++ were becoming less and less in tune with that new reality.

Pike，Griesemer和Thompson在Google工作之后，他们发现了一个严重的问题。 并没有产生大规模并发。 人们等待了几个小时来汇总草案。 他们使用的是C++，并且不得不编写所有这些回调和事件派发器。 那是2009年，而且我们的基础设施再次发生了变化。 诸如C++之类的语言与新的现状越来越不协调。

**12:59** - _Carmen Andoh_

The problems were being introduced by things like multicore processors, and network systems, and massive computation clusters, and the web programming model. And then, also, just the growth of the industry and the number of programmers which were going into the thousands and the tens-of-thousands by 2010. And so all of the programming languages up until that point were being worked around, rather than addressing things head on.
多核处理器，网络系统，海量计算集群和Web编程模型等正在引入这些问题。 而且，也就是这个行业的增长和程序员数量在2010年将要达到成千上万。因此，直到那时所有的编程语言都是在规避问题而不是在正面解决问题。

**13:24** - _Saron Yitbarek_

Eventually, you reach a breaking point and something's got to give.
最终，将达到一个临界点，必须开始改变。

**13:30** - _Carmen Andoh_

Hey, we hated C++ and I said, "Well, let's see if we could invent something new."
嘿，我们讨厌C++，我说：”好吧，让我们看看我们是否能发明些新的东西“。

**13:37** - _Saron Yitbarek_

That new language would need to be exquisitely adapted to our latest infrastructure.
新语言需要完美地适应我们最新的基础设施。

**13:43** - _Carmen Andoh_

What happened with the cloud, which was starting to come of age in 2005, was that you now no longer had to handle your own computes, you sort of were renting it elsewhere, and you get a distributed system. But what happens in a distributed system, and in a cloud, is that you have problems of concurrent messaging between distributed systems. You need to make sure that you have no problems with asynchronicity. Go is a programming language that is asynchronous by default. Basically this means that every operation you perform, like sending all these different messages to another in the system, it's done without waiting for the other system to respond back to you. So it can handle multiple messages at any given time.
2005年云技术到来以后，您不再需要自己的计算机，任意地方只需要租用它，您就可以得到一个分布式系统。 但是分布式系统和云的问题是，在分布式系统之间存在并发消息传递问题。 您需要确保采用异步对您来说没有问题。 Go缺省就是异步的编程语言。 基本上，这意味着您执行的每个操作（例如将所有这些不同的消息发送给系统中的另一个计算机）都无需等待另一个机器对您的响应即可完成。 因此，它可以在任何给定时间处理多个消息。

**14:28** - _Carmen Andoh_

And that said, cloud computing is distributed. And so Go was developed to address this exact need. Go became, early on, one of the standard ways of doing this kind of distributed computing. And that's why I think that it picked up a lot of the developer mindshare immediately. Go absolutely is the language of cloud infrastructure, both in its design, but also in the ecosystem of all the cloud infrastructure tooling, and building blocks that have sprung up in the last decade.
就是说，云计算是分布式的。 因此开发了Go来满足这一确切的需求。 Go早就成为进行这种分布式计算的标准方法之一。 这就是为什么我认为它立即引起了开发人员的广泛关注。 Go绝对是云基础设施的语言，无论是其设计，还是所有云基础设施工具以及在过去十年中如雨后春笋般出现的模块的生态。

**15:06** - _Saron Yitbarek_

Soon, major applications like Kubernetes were being written in Go. Google also created Go Cloud, an open source library and set of tools that made Go even more attractive. It became clear, this was the language of a brand new ecosystem. It was the language of the cloud. And it definitely didn't hurt that the creators had reputations for developing languages that lasted.
很快，诸如Kubernetes之类的关键应用都用Go编写了。 谷歌还创建了Go云，这是一个开源库和一系列工具，使得Go更具吸引力。 很显然，它是新生态系统的语言。 它是云的语言。 创造者因开发持久的语言而享有声誉，这绝对没有坏处。

**15:33** - _Carmen Andoh_

I think that the rest of the industry said, "Hey, I don't think that this is going to be going away anytime soon," and the inventors of the language also happen to invent languages that are now in their 50th year, or 60th year.
我认为业界的其他人会说：“嘿，我认为这不会很快消失。”这种语言的发明者恰巧也发明了已经有50年或60年历史的语言。

**15:47** - _Saron Yitbarek_

Carmen Andoh is a program manager for the Go team at Google.
Carmen Andoh是谷歌Go团队的项目经理。

**15:54** - _Saron Yitbarek_

So we have a new language, Go, designed to deliver the concurrency that cloud infrastructure makes necessary. Sounds great. And Go’s designers tend to create languages that last for a good half century. Also great. But my question is, what will that really mean 50 years from now when Go is more like COBOL? What will it mean when the world is teeming with legacy Go code that only older developers understand? Are we going to be prepared for a time when today's cloud infrastructure is aging? Are we learning lessons from COBOL and the world of mainframe that could help us design a better future for Go and the cloud?
因此，我们有了一种新的语言Go，旨在提供云基础设施必需的并发性。 听起来不错。 Go的设计师倾向于创造可以持续半个世纪的语言。 也很棒。 但是我的问题是，从现在起50年后，当Go更像是COBOL时，这到底意味着什么？ 当世界上充满了只有老开发人员才能理解的旧版Go代码时，这意味着什么？ 在当今的云基础设施老化的时候，我们是否会做好准备？ 我们是否正在从COBOL和大型机领域吸取教训，可以帮助我们为Go和云设计更美好的未来？

**16:40** - _Saron Yitbarek_

Luckily, I found exactly the right person to ask all these questions. And that's next.
幸运的是，我找到了问所有这些问题的合适人选。 下面就来看看。

**16:51** - _Saron Yitbarek_

How do we future-proof our languages? We know they're tied to the infrastructure of their day. And we know that new infrastructures are bound to replace the old ones as decades roll by. So what are we doing today to keep things running smoothly tomorrow?
我们如何使我们的语言能面向未来？ 我们知道他们与当今的基础设施息息相关。 而且我们知道，随着数十年的发展，新的基础设施必将取代旧的基础设施。 那么，我们今天做些什么以确保将来能平滑演进？

**17:10** - _Kelsey Hightower_

I'm Kelsey Hightower, I'm at Google, I'm a developer advocate and I work bringing open technologies and turning them to products on Google Cloud.
我是Kelsey Hightower，我在Google是一名开发人员拥护者，我致力于引入开放性技术并将它们应用于Google Cloud上的产品。

**17:19** - _Saron Yitbarek_

Kelsey spends a lot of time thinking about the future of programming. I was curious whether one day we're going to end up with another aging group of programmers with these wizard-like skills around Go, the same way we have a shortage of COBOL wizards today. Are we even planning for that long range future? So Kelsey and I sat down to hash it out.

**17:42** - _Kelsey Hightower_

... and so forth. But if you think about some of the new challenges today, things like dealing with the internet, the network, you've got multiple users, hundreds of thousands of concurrent users, different collections of machines and architecture types. So given those new use cases, typically you want to have a new language. For example, JavaScript is for the web, you don't want to retrofit COBOL so that we can start doing web programming with it. So we have hundreds of languages that are out and pretty well established today, and they're all kind of hyper-focused on their sweet spots.

**18:15** - _Saron Yitbarek_

So in that case then, do we need to actively push people towards COBOL? If we're developing these new languages for these new problems and they're highly specialized, and COBOL's still sticking around, do we need to encourage folks to pick it up so we can maintain our legacy code?

**18:32** - _Kelsey Hightower_

Well, I think that's going to be a challenge for the enterprise, right? So you've invested 10, 20 years in COBOL, and there is no one actively thinking about learning some new COBOL. Or you don't come out of college just like, "I'm going to double-down..."

**18:45** - _Saron Yitbarek_

Right.

**18:46** - _Kelsey Hightower_

"...on this language that's older than my parents." So in that world, you have to ask yourself, what is the risk of continuing on with COBOL? Is it still relevant going forward? I think it is still relevant for certain types of workloads, but we have to ask ourselves a question, is it time to progress? Is it time to evolve a little bit? So if you still have billions of lines of COBOL, you're in the situation where you're going to have to try to find all the COBOL talent that's remaining and bring them in house, but maybe we start to think about what can other languages learn from COBOL, and incorporate some of that functionality and libraries into other languages.

**19:26** - _Saron Yitbarek_

Life after COBOL, that would be an enormous infrastructure project all on its own. To use my New York subway analogy, it'd be like replacing every underground tunnel. So, going forward, I wanted to know whether we could anticipate those issues, and even do our future selves some favors.

**19:48** - _Saron Yitbarek_

If we compare the cloud today to mainframes, are we going to end up in the same boat where we have these legacy code bases that are using kind of old but very stable languages, and we have to kind of reach this new point of figuring out if we should move on or stay the same?

**20:05** - _Kelsey Hightower_

So the thing that makes the cloud a bit different, it's not from one manufacturer, right? A lot of cloud providers typically bundle up collections of technology so you have your choice of programming language, you have your choice of programming paradigm, whether you want to event-driven, or it's all web services based on \[HTTP\]. So what that means is you get to choose what you want to program in, and just kind of focus on what gets solved. So data will come in, data will come out, but you choose how you want to process that data.

**20:36** - _Kelsey Hightower_

The mainframe typically just kind of had one main interface, right? Like you write this job, and this is how you submit the job, here's how you monitor the job, and here's where it comes out. So that's very limiting of itself. So if you think about some of the newer mainframes, they also support some of the newer technology, so even in the world of mainframe, you start to see the expansion of programming languages you can use to run your jobs.

**20:58** - _Kelsey Hightower_

So then we start to ask ourselves, okay, given that I have my new choice, when is it time to move on from this particular programming paradigm? So I think we don't get stuck.

**21:08** - _Saron Yitbarek_

Right.

**21:08** - _Kelsey Hightower_

But I think it is going to be nice that there's going to be a new machine that's going to be distributed, maybe there's a lower cost of entry, you don't have to buy the whole mainframe to get started. But we still want that ease of use of here's my job, you run it for me, tell me when it's done.

**21:24** - _Saron Yitbarek_

Absolutely. Do you see what's happening, or what's happened to COBOL, happening to any of today's languages? Like for example, Go, do you see us struggling to maintain Go and getting folks who want to write Go in 30 years?

**21:38** - _Kelsey Hightower_

I think all languages can suffer that fate, right? So if you think about it, Python's been around for a very long time. I think it's, what, close to 20 years if not more. So I think what happens ... and Python's had a resurgence in its usage, right, it's kind of the foundation of language for machine learning.

**21:53** - _Saron Yitbarek_

Yep.

**21:54** - _Kelsey Hightower_

For libraries like Tensorflow. So if we use just time alone, I think that's probably not the right way to look at it. It's like how relevant is that community? How relevant is that language willing to adapt? And I think what Python did really, really well, it ... that community saw the ability to make other languages easier to use. For example, Tensorflow's a lot of C++ underneath it, so programming in such a language is probably not as user friendly as something like Python. And you could take Python and use it to generate some of the stuff that people are using for, example, Tensorflow. So now that machine learning is hot, people have brung Python into that new space, so guess what? Python continues to be relevant, and will be relevant for some time to come. And the same thing's going to be true for Go. If Go can continue to be relevant, right, it's like at the foundation of many of our infrastructure tools, many of the cloud libraries, it too will remain relevant. So I think it's all about those communities ensuring that they have a place in the future, and when the future shows up, making sure that they have a story there.

**22:58** - _Saron Yitbarek_

Yeah. So how do we future-proof our languages? Meaning, how do we intentionally design a language to make it last, and make it relevant 20, 30 years from now?

**23:10** - _Kelsey Hightower_

The people that use the language, so this is something that's really unique I think, in the open source space. Now that we've moved away from commercial languages, right, languages used to come from Microsoft, or Sun Microsystems in the case of Java™, and at that point everyone relied on the vendor to do all the heavy lifting about what the language would be able to do, any new improvements in the run time. Now what we see with things like Go, Node.js, Ruby, all of these are community backed and focused runtimes and languages. So anyone can add new libraries, right? There was a new \[HTTP\] spec, right, \[HTTP/2\] came out a few years ago and each of the respective communities just had contributors add those particular libraries, and now guess what? All of those languages are now compatible with the future of the ... kind of the web for the most part.

**24:01** - _Kelsey Hightower_

So I think it's really now that individuals have more control if they want their language to be relevant for new use cases by just contributing that functionality themselves. So we're not restricted to one or two companies. If the company goes out of business, then maybe the runtime dies with it. We don't have that problem as much anymore.

**24:23** - _Saron Yitbarek_

We've said it on this podcast before. The future is open. But it's fascinating to consider how in another couple decades, the past will be open too. They'll be inheriting infrastructure and languages that are able to morph and evolve.

**24:39** - _Kelsey Hightower_

Awesome, thanks for having me, and I look forward to what people do and mainframe is still relevant. So we don't call it legacy, these are classic technologies.

**24:47** - _Saron Yitbarek_

Ooh, I like that, classic, very nice.

**24:51** - _Saron Yitbarek_

Kelsey Hightower is developer advocate at Google.

**24:57** - _Saron Yitbarek_

I'm imagining a future that's rich with classic programming languages, along with new languages that haven't even been born yet. That's a future I'm excited for.

**25:07** - _Speaker_

Stand clear of the closing doors, please.

**25:12** - _Saron Yitbarek_

You know, in 2017 Governor Andrew Cuomo declared a state of emergency about the New York City subway. His government set aside 9 billion dollars to invest in the aging infrastructure. And that should remind us, sooner or later, we have to take care of the systems we inherit. You don't just race onward to whatever comes next. You bring the past with you.

**25:37** - _Saron Yitbarek_

n the world of development, we tend to have a bias towards the future. We think our languages are only useful in the moment, when they're the hot new thing. But, as informational infrastructure continues to age, the history of development becomes more and more real. The past, it turns out, isn't past at all. And it's our job to remember that.

**26:05** - _Saron Yitbarek_

You can learn more about COBOL, or Go, or any of the languages we're covering this season, by heading over to [redhat.com/commandlineheroes](//www.redhat.com/en/command-line-heroes). There's a bunch of great bonus material waiting for you.

**26:19** - _Saron Yitbarek_

Next episode is all about Bash. We're exploring the origins of shell scripts, and the key to automation.

**26:30** - _Saron Yitbarek_

Command Line Heroes is an original podcast from Red Hat. I'm Saron Yitbarek. Until next time, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-3/the-infrastructure-effect

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
