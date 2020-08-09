[#]: collector: (bestony)
[#]: translator: (QwQ2000)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 3: The C Change)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-3/the-c-change)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 3: The C Change
代码英雄：第三季：C语言之巨变
======
**00:00** - _Speaker 1_

We are the beginning of a new wave of research. Our creative powers are being stretched.
我们带领了新一波的研究浪潮。我们的创造力正在延伸。

**00:10** - _Speaker 2_

Noise. Noise.
噪音。噪音。

**00:13** - _Speaker 1_

These men are design engineers at Bell Telephone Laboratories.
这些男人是贝尔电话实验室的设计工程师。


**00:16** - _Saron Yitbarek_

In the 1960s, Bell Labs, in Murray Hill, New Jersey, was the epicenter of innovation, where our tech future took its first steps. There, they developed the laser. They developed the transistor. It was the cradle of information theory, and in 1968, all that innovation hit a new peak when a fellowship of four programmers produced something so groundbreaking that it fundamentally changed the way the world works.
在上世纪60年代，坐落于新泽西州默里山的贝尔实验室，是科技革新的中心。在那里，我们科技的未来迈出了最初的步伐。贝尔实验室发明了激光与晶体管，并且成为了信息论的摇篮。在1968年，贝尔实验室的四个程序员组成的团体创造了一种极具开拓性的工具，它根本地改变了我们世界运行的方式，也标志着贝尔实验室的种种创新达到了新的高峰。

**00:53** - _Saron Yitbarek_

I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. All season long, we've been tracking some of the biggest stories in programming languages, and we’ve finally arrived at our season finale. I think we saved the biggest story for the end. It's the story of a language that made just about all those other languages possible. Exactly 50 years ago, C was designed at Bell Labs, a general-purpose language so fundamental that we sometimes forget what a monumental achievement it really was.
我是 Saron Yitbarek，这里是代码英雄————来自红帽公司的原创播客。在一整季的节目中，我们追寻着编程语言世界中一些最具影响力的故事，现在我们终于迎来了这一季的结尾。我认为，我们把最好的故事留到了最后。这个故事讲的是一种让其他编程语言的出现成为可能的编程语言。在恰好50年以前，C语言在贝尔实验室被设计出来，这是一种如此基础的通用程序设计语言，以至于我们有时候都会忘记创造C语言是一个多么意义深远的成就。

**01:35** - _Saron Yitbarek_

To get the full picture, we have to head back to the 1960s, just before the birth of C. It was a time when anything seemed possible.
为了得到事件的全貌，我们需要回到上世纪60年代，正好在C语言的诞生之前。那是一个任何事情都有可能发生的时代。

**01:46** - _Jon Gertner_

The 1960s, Bell Labs was really almost a kind of Shangri-La. It was an R&D lab that really doesn't have any kind of analog today.
在上世纪60年代，贝尔实验室几乎是一个研究人员的世外桃源。在今天，已经很难找到与贝尔实验室相似的企业研发实验室。

**01:56** - _Saron Yitbarek_

That's Jon Gertner, author of The Idea Factory: Bell Labs and the Great Age of American Innovation. We asked Jon to try and explain what was in the air. What was it about this place and time that made Bell Labs, in his words, an idea factory?
这是 Jon Gertner，《创意工厂：贝尔实验室与美国革新大时代》的作者。我们采访了 Jon 来向大家解释当时贝尔实验室的情况。为什么在上世纪60年代，贝尔实验室能够成为他所说的“创意工厂”？

**02:15** - _Jon Gertner_

I think today we're—sort of—of the belief that competition creates great innovations, but I'm not sure that's true, and Bell Labs' achievements actually kind of stand in contrast to that. These were scientists and engineers who had not a lot of pressure on them, but at the same time, Bell Labs, because of its hierarchical place amongst research laboratories, could really hire the very best and the very brightest and give them both time to work on problems that they found interesting and also a fair amount of funding. If you could make a good case that you had a research project that was relevant to the sort of ideal and the goal of the phone company, you could really fund your research.
我认为当下的我们有点倾向于这样的观点————竞争带来伟大的科技革新，但是我不能确定这种观点的正确性，并且事实上贝尔实验室的成就是一定程度上与这种观点相悖的。贝尔实验室的工程师和科学家们并没有特别大的压力，但是与此同时，由于贝尔实验室在研究实验室中较高的的等级，贝尔实验室又确实可以雇佣到最优秀和聪明的研究者，并给他们足够的时间让他们去研究感兴趣的问题，以及提供大量的资助。
如果你能够证明你的研究项目一定程度与那个电话公司（AT&T）的理想与目标相关，你的研究就可以得到资助。

**03:00** - _Saron Yitbarek_

And Jon emphasizes, although Bell Labs was a product of this for-profit company, the ethos was closer to something academic. By letting employees run with their own ideas, Bell practiced similar open leadership principles to what you might find in open source communities.
并且 Jon 强调，虽然贝尔实验室是一个以盈利为目的的企业的产物，但是贝尔实验室的价值观还是比较接近学术界的。通过让员工采用自己的意见，贝尔实验室实践了与开源社区相似的开放式领导原则。

**03:19** - _Jon Gertner_

This was an era before Apple, before Google, before Microsoft, for instance. The history of computing often focuses on the kind of west-coast, Homebrew Computer Club sort of origins and what grew out of that. I think this was just as important. This was in, what would now seem to be, an unlikely place, which was suburban New Jersey. But these were scientists and researchers and computer engineers who were making tremendous breakthroughs that would really have significant, earth-shaking implications all over the world.
这是一个在例如苹果、谷歌与微软这样的大公司出现之前的时代。计算机的历史更多的聚焦在西海岸源于家酿计算机俱乐部的企业，但是我认为贝尔实验室和那些企业一样重要。贝尔实验室，从现在的角度看来，似乎是一个不可思议的地方，它坐落于新泽西的郊区，但是这里有对科技做出了巨大突破的科学家、研究者和计算机工程师，他们的研究成果对全世界都有着极其重要、惊天动地的影响。

**03:54** - _Saron Yitbarek_

One of those earth-shaking projects, one that was proving to be a huge challenge, was a little concept called time-sharing. Could they build an operating system that a hundred, even a thousand, users could be using all at once? That would be a game changer. Starting in 1964, the brainiacs at Bell Labs teamed up with General Electric and MIT to see if they could collectively push things toward this holy grail. MIT actually got the ball rolling a year earlier, with something called Project MAC, but soon, you had all these top teams pushing together to build a mainframe, time-sharing operating system.
在贝尔实验室的这些惊天动地的项目中，其中有一个被证明难度巨大，这个项目关乎一个叫做“分时”的小概念。他们能否构建一个能够同时被成百上千的用户使用的操作系统？这将会成为一个打破局面的发明。从1964年起，贝尔工作室的天才们与通用电气和麻省理工学院合作，试图集体推进这项工作的进展。麻省理工学院事实上在一年以前已经通过 MAC 计划取得进展，但是现在所有的顶级团队已经团结起来推进构建大型主机分时操作系统的工作。

**04:40** - _Saron Yitbarek_

John McCarthy actually introduced the concept back in 1959. Check out our [episode about AI, episode 7](/en/command-line-heroes/season-3/talking-to-machines), for that story. He imagined a large machine that could switch its attention between multiple users. McCarthy figured such a machine would have the potential to wildly expand all computing culture. I mean, imagine it. If a thousand users can be working on one machine, you've democratized the whole world of programming, the whole world of computers. So, that group of heavyweights set out to make McCarthy's dream a reality, and they gave that imaginary operating system a name. They called it Multics.
约翰·麦卡锡在1959年重新为人们介绍了分时操作系统的概念。通过收听我们 [第七集](/en/command-line-heroes/season-3/talking-to-machines) 的节目可以获知更多细节。他设想了一种可以在多个用户之间转换注意力的巨大机器。麦卡锡认定这样一种机器将会有潜力极大地发展现有的计算机文明。让我们来设想一下吧，如果一千个用户能够同时在一台机器上工作，你就完成了对整个编程与计算机世界的民主化。因此，那个群星荟萃的团队准备着手将麦卡锡的梦想变成现实，并且他们为那个想象中的操作系统起了一个名字———— Multics。

**05:23** - _Saron Yitbarek_

They worked on time-sharing for years, but the project was a huge money suck, and after a decade, the end wasn't even in sight. Making matters worse, their head of research, Bill Baker, was a chemist, who wasn't really interested in Bell's computer science department. And we can pile on one more problem: a problem of pride.
Multics团队在分时操作系统上进行了多年的工作，但是项目遇到了严重的资金困难，并且在十年之后，项目仍然看不到结束的希望。雪上加霜的是，研究的领导者 Bill Baker是一个对贝尔实验室的计算机科学部门不甚感兴趣的化学家。除此之外，我们仍然能找到一个新的问题————自尊的问题。

**05:46** - _Jon Gertner_

One thing about Bell Labs that you see over and over again is that they, oftentimes, just worked on projects alone. I mean, there was a certain sense, within Bell Labs, that they had all the people they needed and all the ideas they needed and the best technologies, and if there was a problem worth solving, they could go at it. It may be the case, too, that Multics didn't work for Bell Labs, to some extent, too, because of this sort of larger, collaborative effort was not something that actually worked well within the Bell system or that satisfied the executives there.
在贝尔实验室，人们每天习以为常的一件事情就是独自工作。贝尔实验室的人们有一种真切的感受————他们认为自己拥有一切他们所需要的的人才和构思，并且拥有最先进的科技，当他们遇到值得解决的问题时，他们有能力去解决这样的问题。贝尔实验室的这种看法可能有一定合理性，但是 Multics 项目在贝尔实验室没有进展在某种程度上也是事实，因为这样一种更加复杂的、合作性的工作在贝尔实验室的体系中运转不良，而这样的工作也并不符合贝尔实验室主管们的胃口。

**06:20** - _Saron Yitbarek_

Jon Gertner is the author of The Idea Factory. His latest book is called The Ice at the End of the World.
Jon Gertner 是《创意工厂》一书的作者，他刚刚发表的新书是《世界尽头的冰》。

**06:32** - _Saron Yitbarek_

Bell Labs officially pulled out of the Multics project in April of 1969, so end of story, right? As far as Bell Labs was concerned, the time-sharing Multics dream was dead. Or was it? Turns out, not everybody at Bell Labs gave up on the quest for time-sharing. Four stubborn holdouts held onto the dream after everybody else had moved on, and that story is next.
贝尔实验室于1969年四月正式宣布终止 Multics 项目，这是否就是故事的结尾了呢？就贝尔实验室而言，分时操作系统 Multics 之梦已经破灭。但是这个梦真的结束了吗？结果却并不是这样，并非所有贝尔实验室的研究人员都放弃了分时操作系统。四个顽固的拒不退让者在所有人都已放弃之后，继续坚持这一梦想，而那就是下一个故事了。

**07:08** - _Saron Yitbarek_

Some dreams, frankly, are too big to die.
说实话，有些梦想太美好了，这样的梦想是很难被人抛弃的。

**07:12** - _Joy Lisi Rankin_

It was a big deal.
这是一件大事业。

**07:14** - _Saron Yitbarek_

That's Joy Lisi Rankin. She's the author of A People's History of Computing in the United States. Joy and I got talking about the dream of time-sharing and why it was too important to let go.
这位是 Joy Lisi Rankin，她是《美国计算机人物史》一书的作者。Joy 将会和我聊聊分时操作系统的理想，以及为什么分时操作系统如此不可或缺。

**07:27** - _Joy Lisi Rankin_

It was a big deal, and it was quite ambitious, and up until that point or sort of when the project was launched, most of the time-sharing systems in the early 60s had maybe 40 or 50 terminals on a single mainframe. So, going up in order of magnitude was substantial, and perhaps more ambitious than anyone realized, so the project struggled in some ways to fulfill its initial goal, but nonetheless, time-sharing continued to live on in different forms and, indeed, to thrive; not just at MIT, but elsewhere.
开发分时操作系统是一件重要且极富雄心壮志的事，直到项目开始之前，大部分60年代早期的分时系统在一台主机上都约有40至50个终端。因此，提升终端的数量是重要性很高的一件事，贝尔实验室的雄心很可能超出了大部分人的认知，这也是这个项目为什么在实现它最初目的过程中碰到了不少困难的原因，但是尽管如此，分时操作系统继续以不同的形态发展，并真正的走向繁荣；分时操作系统不仅仅在麻省理工学院得到发展，也走向了其他的地方。

**08:09** - _Saron Yitbarek_

Yeah. So, when we talk about the 60s, who was driving the need for time-sharing? You mentioned MIT, GE, Bell Labs. So, are we talking about businesses? Are we talking about the academic community? Who's really driving it?
好的。那么，当我们谈起60年代，是谁在推动对于分时操作系统的需求？你提到了麻省理工学院、通用电气公司和贝尔实验室。那么我们的关注点是商业还是学术团体？谁才是真正的推动者？

**08:23** - _Joy Lisi Rankin_

I think the academic and business communities both, as well as sort of scientific communities were pushing, because it was really, as I mentioned, a more one-on-one, interactive experience of computing. But on the other hand, I would say educators were also pushing for it. And at a national level, there was a conversation about creating a nationwide computing utility. So, basically, a national time-sharing network, and really, sort of thought leaders in the United States also had this language around time-sharing that would be something that was comparable to electricity or phone or water service.
我认为学术团体和商业团体共同推动了发展的进程，除此以外，一些科学团体也参与了这项事业，因为，正如我之前所说，分时操作系统真的是一种更加一对一、富有互动性的计算体验。但是从另一个角度来看，我也会说教育者也同样在推动这件事的发展。并且，从国家的层面上讲，当时也在进行关于创建全国性计算设施的会谈。那么，基本上来说，所谓的全国性计算设施指的就是全国性的分时操作系统网络。并且，一些美国的思想领袖也对分时操作系统有一些评论，他们认为这样的系统会是与供电、电话、供水一样的基础性服务。

**09:08** - _Saron Yitbarek_

Wow.
哇哦。

**09:08** - _Joy Lisi Rankin_

Yes, I know! It's a -
是啊，我知道了！那可真是……

**09:09** - _Saron Yitbarek_

That's a big deal.
那可真是一项大事业。

**09:11** - _Joy Lisi Rankin_

It's a huge deal.
那是一项非常大的事业。

**09:13** - _Saron Yitbarek_

Joy helped me remember that, while this episode is focused on the team that built C and UNIX, over at Bell Labs, the broader push for time-sharing was really a movement, something bigger than any one team. Really, it was a push to think of computing as a public utility, and it had so many heroes we can't get to here: people like Bob Albrecht and Martin Greenberger and lots of others.
Joy 帮助我想起了当年的事情，尽管这一期节目主要的关注点是创造了C语言和 UNIX 操作系统的的团队，但是在贝尔实验室之外，更高的社会层面上来说，对于分时操作系统的推动是一项重大的进步，这项进步是远比一个团队的影响力更重要的。将计算机视为公共设施是一个非常有意义的想法，在这项事业中，有许多优秀的人物我们不能请他们来到这里，比如 Bob Albrecht 和 Martin Greenberger ，以及其他的一些杰出人物。

**09:37** - _Saron Yitbarek_

Okay, with that caveat, here's the rest of my chat with Joy.
好的，在进行了一些预先说明之后，让我继续和 Joy 的对话吧。

**09:41** - _Joy Lisi Rankin_

So, when John McCarthy first publicly talked about time-sharing at MIT in this speech he gave, he explicitly compared to electricity and said, "This is a way everyone can have computing, not just in universities and schools or businesses, but also in their homes." Going back and reading articles and documents from that time, no question in many people's minds that there would be a computing utility and that it would and could be regulated. So, there was a lot of faith and support for this sort of national time-sharing utility.
那么，当约翰·麦卡锡在麻省理工大学的演讲上首次公开的谈论分时操作系统时，他明确的将其与电力进行了比较，并说：“这是一个让所有人都能使用计算机的方式，不仅仅是在学校里与商业活动中，还在每个人的家里。”回首过去，再阅读当时的文章与档案，在许多人的头脑中确信会出现一种能够被规范化管理的计算公共设施。因此，对于全国性分时计算设施的构想，在当时有许多精神上和物质上的支持者。

**10:22** - _Saron Yitbarek_

So, what's interesting is that, by 1970, IBM actually pulled out of the time-sharing industry. Even GE, they sold their mainframe computer division, but they actually retained their time-share part of the business. Let's talk a little bit about that. What happened in 1970?
非常有趣的一点是，在1970年，IBM 实际上已经退出了分时操作系统这一产业。即使是通用电气也出售了他们的大型主机业务分公司，但是通用电气还仍然持有他们与分时操作系统相关的业务。让我们来简单的谈一谈这些事情吧，1970年发生了什么？

**10:39** - _Joy Lisi Rankin_

I think 1970 has become sort of a marker of—maybe an artificial marker—the fall of the promise of computing utilities or the time-sharing industry. In some ways, it's false. I think sort of it was, by the late 60s, it was clear that MIT and Multics were struggling to sort of create this thousand or thousands of terminals time-sharing system, and it was a very public, prominent project. And at the same time, in the late 1960s, tens of time-sharing businesses sort of providing computing on this utility model had sprung up around the United States and were booming. It was a tech bubble. And then, the enthusiasm fell away; not completely because while GE sold its time-sharing sort of mainframe computer business, they retained their time-sharing as a utility business through the 1970s and 1980s, and it was profitable. And universities, like MIT, continued to run time-sharing systems, also, into the 1980s.
我认为1970年已经一定程度上变成了有标志性意义的一年————当然这种所谓的“标志性意义”也可能是人们假想的，这一年标志着公共计算设施与分时操作系统产业的失败。从某些角度上来说，这种观点是错误的。我认为在60年代末期，麻省理工和 Multics 项目明显在创建一个支持上千个终端的分时操作系统上遇到了困难，这是一个非常大众的、影响力很大的项目。与此同时，在60年代末期，数十个基于分时计算模型的商业项目在美国兴起并繁荣发展。这是一个科技泡沫。随后，对于分时操作系统的热情走向衰落。这不完全是因为通用电气出售了他们的计算主机业务，他们在70年代至80年代间保留了他们的分时计算业务，并且这一业务盈利状况良好。除此以外，当时大学，例如麻省理工学院，继续运行着他们的分时操作系统，直到上世纪80年代。

**11:52** - _Joy Lisi Rankin_

So, there's, I think, a public memory that time-sharing was a tech bubble that just died out in the 1970s, partially because there was so much attention to Multics struggling. Yet, it actually, if we sort of go back and look at how people were using it and how profitable it was and how successful it was, it thrived through the 1970s.
因此，依我之见，在上世纪70年代一个科技泡沫的破碎成为了一项公共记忆，这件事一定程度上是因为人们过多的关注了 Multics 的困境。然而，事实上来说，如果我们回到过去，看一看当时的人们是如何使用分时操作系统的以及分时操作系统赢得了多少利润，了解一下分时操作系统的成功，我们就会发现，其实上世纪70年代正是分时系统繁荣的年代。

**12:17** - _Saron Yitbarek_

Now, back at Bell Labs, a group of four technologists wanted a time-sharing system of their own: Ken Thompson, Dennis Ritchie, Doug McIlroy, and J.F. Ossanna. But they didn't want Multics; they wanted to leapfrog toward something cleaner and more powerful, something they called UNIX.
现在让我们把眼光放回到贝尔实验室，一个由四位技术专家组成的团体想要创造他们自己的分时操作系统，他们是Ken Thompson、Dennis Ritchie、Doug McIlroy、J.F. Ossanna。不过他们并不想完成 Multics，他们想要越级跳过 Multics，做一个更加简明、有效的操作系统，他们称之为 UNIX。

**12:39** - _Joy Lisi Rankin_

Multics was, I would say, the inspiration for UNIX, in the sense that some of the programmers who were working on Multics so enjoyed the benefits of programming on a time-sharing system that they wanted to create that environment for themselves, when it was clear that Multics was struggling. These were programmers at Bell Labs, and they decided to try to create their own programming framework and sort of time-sharing system, and that's what became UNIX.
我认为 Multics 是 UNIX 的灵感来源，其原因在于，许多在 Multics 上工作的程序员是如此享受分时操作系统在编程上的优点，以至于在 Multics 陷入困境时，他们便想要创造一个属于他们自己的分时环境。这些程序员来自贝尔实验室，他们决定构建他们自己的编程框架与分时操作系统，这就是 UNIX 的起源。

**13:20** - _Saron Yitbarek_

Joy Lisi Rankin is the author of A People's History of Computing in the United States.
Joy Lisi Rankin 是《People's History of Computing in the United States》一书的作者。

**13:29** - _Saron Yitbarek_

Dennis Ritchie would later describe him and the three other Bell Labs coworkers as a fellowship. The fellowship wanted to work as this tight quartet of developers, and they needed the hardware to accommodate their programming. But Bell Labs really had moved on from the time-sharing dream, and as much as Bell Labs could be a utopia for research, this was a case where they'd hit their limit, so they rejected proposals for that new hardware. It was just too pricey. Why take the risk? But the fellowship soldiered on.
丹尼斯·里奇接下来将会讲述他和其他三个贝尔实验室的同事作为一个团体所做的事情。他们几个开发者想要作为一个紧密的四人小团体而工作，并且他们需要一种能够协调他们程序设计的硬件。但是贝尔实验室已经放弃了分时操作系统的梦想，而且贝尔实验室是一个学术研究的世外桃源，在这里他们能够发挥出他们能力极限，因此他们拒绝了使用新硬件的提议。设计一种新的硬件太过昂贵了，为什么要冒险呢？这个四人小团体继续在研究道路上前进。

**14:05** - _Saron Yitbarek_

Thompson and Ritchie asked for a machine like the GE645, which they'd been using to work on Multics. When they couldn't get the funding for that, they just scribbled ideas about file systems on paper. Eventually, they managed to implement some of their ideas in a game they called "Space Travel," which ran on a PDP7. They kept on working with that PDP7, which was basically in the same class as a Commodore 64. Bit by bit with no backing from Bell, at least at first. That fellowship gave their time-sharing dream new life, in the form of something they called UNIX.
汤普森和里奇请求了一种类似 GE645 的机器，这是他们一直用来进行 Multics 相关工作的型号。当他们无法得到这件事的经费时，他们刚刚在纸上潦草的写下一些关于文件系统的文字。最后，他们在一个他们称之为“太空旅行”的游戏中成功的写下了他们的一些想法，这个游戏运行在 PDP7 机型上，这种机型基本上与 Commodore 64属于同一型号。在没有贝尔实验室的支持的条件下————至少在项目的初期，他们一步一步的取得进展，这个四人组给与贝尔实验室的分时操作系统之梦以新生，以他们所说的 UNIX 的形式。

**14:47** - _Saron Yitbarek_

But here's the thing: the UNIX operating system was being created in assembly language. I mean, these guys were transferring files to their PDP7 on paper tape, so you can imagine they're trying to build this groundbreaking thing with less than ideal tools and again, with no backing from the bosses. UNIX was coming to life, but it was still missing a language that would really let it sing.
不过这里就是问题所在了：UNIX 操作系统是用汇编语言写成的。我的意思是说，这些伙计们正在通过纸带把文件转移到他们的 PDP7 机器上，所以你们可以想象到他们在缺乏理想的工具与上级的支持的情况下，努力构建这个开创性的操作系统时所遇到的困难。UNIX 已经获得生命，但是这里仍旧缺少一种语言让它能够歌唱。

**15:23** - _Saron Yitbarek_

The first attempt at a new language for UNIX was something Ken Thompson wrote, called B.
为 UNIX 创造新程序设计语言的初次尝试是肯·汤普森编写的B语言。

**15:30** - _Andy Tanenbaum_

Which was a derivative of BCPL (Basic Combined Programming Language).
这是一种 BCPL (Basic Combined Programming Language) 语言的衍生产物。

**15:33** - _Saron Yitbarek_

That's Andy Tanenbaum. He's a professor of computer science in Amsterdam, and the author of many books, including the classic Computer Networks. Just listen to his backstory on Thompson's B language.
这是 Andy Tanenbaum。他是阿姆斯特丹的一位计算机科学教授，是许多书籍的作者，包括经典教材《计算机网络》。让我们听听他和汤普逊的B语言之间的关系。

**15:48** - _Saron Yitbarek_

So, B's a derivative of BCPL?
所以说，B语言是BCPL语言的一种衍生物？

**15:51** - _Andy Tanenbaum_

Which was an attempt to make a CPL compiler, which would actually work, which was based on ALGOL 60, which of course, came from ALGOL 58, which was an attempt to do Fortran better.
BCPL语言源于一种构建CPL语言编译器的企图，这种语言编写的编译器确实能够起到作用，而CPL语言基于ALGOL 60，ALGOL 60语言又源于 ALGOL 58。ALGOL 58 则源于对 Fortran 进行改进的企图。

**16:01** - _Saron Yitbarek_

Got that straight? The point is B came with a lot of baggage. It wasn't much of a breakaway from all those predecessors, and as a result, it really wasn't up to the challenge of making UNIX sing. B didn't know datatypes, for starters, and besides, its assembly language counterparts were still yielding programs faster than was possible using the B compiler's threaded-code technique.
搞明白了吗？现在的问题就是，B语言有许多历史包袱。B语言和它的这些前身相比，并没有太多的突破性改变，因此，B语言不能完成让 UNIX 歌唱的挑战。B语言无法分辨变量类型，对于初学者来说这是一个问题。除此以外，B语言对应的汇编仍然在使用B语言编译器中的 threaded-code 技术[1]，这阻碍了程序运行速度的提升。
[1] threaded-code 技术：一种通过把一系列调用指令转换成一完整的地址表，然后使用恰当的方式调用的技术。threaded-code 最初被用来减少代码的占用空间，提高代码密度。通俗地讲，这种技术有点类似于在C语言中把一系列的switch-case语句转化为用函数指针数组实现的形式。

**16:31** - _Andy Tanenbaum_

BCPL and B had only one datatype: the word. But words were great on the IBM 704 and 709 and 7090 and 7094, which were word-oriented machines. But starting with the 360 and all the mini computers, they were byte-oriented machines, and had only a single datatype. The word was not a good idea. It was a terrible match for modern computers. So, clearly, B wasn't going to hack it.
BCPL和B语言只有一种数据类型，就是双字节类型 (word) 。双字节类型在基于双字节类型开发的 IBM 的704 和 709、7090、7094 机型上效果不错，但是从 360 和其他所有的小型电脑开始，这些机型都是基于单字节类型 (byte) 的。在这种情况下，双字节类型就不是一个好主意了，它和现代计算机的匹配程度极其糟糕。因此，显然B语言无法解决现有的问题。

**16:57** - _Saron Yitbarek_

So, all the machines the team had worked on before were word-oriented, but having things only oriented towards a single-size object, like Andy said, wasn't going to work. Luckily, at this point, the powers that be, at Bell Labs, came back on board, sensing that something exciting was happening here. They funded a $65,000 PDP-11, and that machine was not word-oriented. That machine was byte-oriented. Now, armed with the PDP11, Dennis Ritchie could step in and tackle their language problem head on.
那么，团队之前工作使用过的所有机器都是基于双字节类型的，但是在基于单字节对象的操作上，这种类型的机器就不够好用了。幸运的是，在这个时间点上，贝尔实验室的领导们加入了这一项目，他们意识到了这个团队中正在产生令人激动的进展。他们资助了一台价值65000美元的 PDP-11，并且这台机器不是基于双字节类型的。现在，装备上了 PDP-11 的丹尼斯·里奇能够在处理编程语言的难题上更进一步。

**17:36** - _Andy Tanenbaum_

Dennis, basically, with a little bit of input from Ken, decided to write a new language that was much more structured and had other types, such as character and INT and long, and so on.
在得到了一点肯的帮助的情况下，丹尼斯决定编写一种更加结构化、包含其它数据类型的新编程语言，比如说字符类型 (char) 、整数类型 (int) 和长整数类型 (long) ，当然还有其他的类型。

**17:47** - _Saron Yitbarek_

So, from 1971 to 1973, Dennis Ritchie is modifying the B language. He adds a character type and builds a new compiler so it doesn't have to use threaded code anymore. At the end of two years, B had transformed into a brand new language called C.
因此，在1971年至1973年之间，丹尼斯·里奇一直在调整B语言。他加入了字符类型并且构建了一个新的编译器，这样B语言就不需要再使用 threaded-code 技术了。在这两年的末尾，B语言变成了一种崭新的语言，这就是C语言。

**18:08** - _Saron Yitbarek_

C was this powerful hybrid. It had high-level functionality, but it also had detailed features that let users program operating systems. It hit a sweet spot. It was abstracted from the machine level just enough that it could be ported to other machines, too. Turns out that C was much more than a language for just messing around with applications. It was a nearly universal tool for programming; just as capable on a personal computer as it was on a supercomputer, and that mattered hugely because the personal computer revolution was just around the corner.
C语言是一种强力的混合物。它有高级别的功能，但是它也有底层的特性，能够让使用者直接进行操作系统变成。它的一切都是如此的恰到好处。C语言从机器层次中进行了足够的抽象，以至于它也可以移植到其他的机型。它几乎是一种通用的编程工具，无论是在个人电脑还是超级计算机上都十分有效，而这一点极其重要，因为个人电脑革命当时已经近在眼前。

**18:49** - _Saron Yitbarek_

Once it was clear that C was the way to go, the UNIX kernel was rewritten in C and so were a lot of its components. So, if you wanted to use UNIX, you were going to be using C. The success of C and the success of UNIX were tied together.
团队的成员们在确定了C语言就是正确的道路之后，就立刻重写了UNIX 内核和许多 UNIX 组件。因此，只要你想使用 UNIX，你就必须使用C语言。C语言的成功与 UNIX 的成功紧密的结合在了一起。

**19:06** - _Andy Tanenbaum_

The reason that C caught on was not so much that it was a better language than B, which it was, but it was the language UNIX was written in, and when UNIX was widely distributed, it came with a C compiler and eventually came with two C compilers. And so, people who were using UNIX, and there were a lot of them after a while, all had a C compiler and everything in UNIX and all the utilities were all written in C. And C was a pretty good language, to boot, and since it came with UNIX, why look for something else?
C语言的流行，其实主要不是因为它是一门比B语言更优秀的语言————当然它确实比B语言优秀————而是因为它是编写 UNIX 的语言，并且当 UNIX 广泛传播的时候，它带来了一个C语言编译器，而在最终的版本中配备了两个C语言编译器。那么，当人们使用 UNIX 的时候，有许多 UNIX 的用户在一段时间以后都收到了一个C语言编译器，并且 UNIX 的一切都是由C语言写成的。而C语言又是一种相当不错的语言，又因为它是与 UNIX 共同出现的，那为什么还要找其他的编程语言呢？

**19:33** - _Saron Yitbarek_

From there, the value of C only grew.
从这里开始，C语言的价值开始显现。

**19:35** - _Andy Tanenbaum_

When C and UNIX were kind of codependent in the beginning because UNIX was written in C and it had a C compiler, and so, they sort of grew up together. At a certain point, C was popular enough on UNIX systems that Steve Johnson, for example, wrote the portable C compiler, which then could produce codes for other machines. And eventually, a C compiler was written for operating systems other than UNIX and people began writing all kinds of software, from database systems to heaven knows what, in C because it was available and it worked and it was efficient.
由于 UNIX 是用C语言写成的，并且带有一个C语言编译器，C语言与 UNIX 从一开始就在一定程度上互相依赖，因此，它们也共同成长。在一个关键的时间点，C语言在 UNIX 系统中已经足够流行时，

**20:07** - _Saron Yitbarek_

So, soon enough, things that had nothing to do with UNIX were being written in C, because the merits of the language were obvious. Andy describes how total the C takeover was.
因此，不久以后，人们也开始用C语言编写与 UNIX 无关的程序，因为这门语言的优点是显而易见的。Andy 将为我们讲述C语言是如何完全接管了整个编程世界的。

**20:20** - _Andy Tanenbaum_

I mean, C was in the right place at the right time. In 1970s, computing was much smaller than it is now. The average person didn't have a computer, knew nothing about computers, but universities and big companies had computers and many of them had UNIX and C came with it, and so, they used C. And it just established a very large base of software, a large base of programmers. If a company wanted a C programmer, you could put out an ad and there would be C programmers available. If they wanted a programmer for B, nobody would apply.
我想说的是，C语言在一个正确的时间出现在了正确的地点。在上世纪70年代，计算机的普及范围远比现在要小。普通人不会拥有计算机，并且对计算机一无所知，但是在大学和大企业所拥有的的计算机中，有许多都使用了 UNIX 操作系统以及随之而来的C语言，也就是说，这些大学和大企业都在使用C语言。这些大学与大企业发布了大量的软件，也产生了大量的程序员。如果一个企业想招聘一名C程序员，发布招聘广告后一定会有人来应聘。如果想招聘一名B语言程序员，没人会来面试。

**20:49** - _Saron Yitbarek_

In the C world, there was infrastructure—software, libraries, headers, all these tools—and this created a virtuous circle.
在C语言的世界中，有许多基础设施型的软件，函数库，头文件等，这一切的编程工具都构成了一个完美的闭环。

**20:59** - _Andy Tanenbaum_

So, it just became more and more popular.
因此，C语言变得越来越流行。

**21:02** - _Saron Yitbarek_

Now, the emergence of the internet would raise security concerns about C, and those are partway addressed in variants, like C sharp. It can feel, sometimes, like all the excitement is about newer languages like Python or Go. But one of the things we try to do on this podcast is remember how tied we are to our history, and the influence of C really is still incredible.
现在，互联网的兴起导致了人们对C语言安全性的关注，而这种关注一定程度上体现在了C语言的变体中，比如C#。有些时候我们会觉得，一切令人兴奋的事情都是与 Python 和 Go 这样更新的语言有关的。但是我们在博客中想要做的事情是，让我们回忆起我们是如何与编程语言发展的历史想联系的，以及在今天C语言的影响力仍旧是不可思议的。

**21:29** - _Saron Yitbarek_

One of the most obvious modern places where C makes its mark is in the godchild of UNIX: Linux®, which, yes, is very much written in C. Even the standard compiler for Linux projects, the GCC (GNU Compiler Collection), is written in C. It may not be obvious, but all those open source programmers out there today, jamming away on Linux, are tied to a language that was first built for them almost half a century ago, and the reign of C just grows with each passing year.
C语言在现代最出名的产物就是 UNIX 的教子——Linux，而Linux的绝大部分都是用C编写的。即使是 Linux 项目使用的现代编译器，比如 GCC (GNU Compiler Collection)，也是用C语言写成的。虽然这一点可能并不十分明显，但是今天所有聚集在 Linux 上的开源编程者，都与一种在半个世纪以前的语言相联系，而C语言的统治也在年复一年的增强。

**22:02** - _Andy Tanenbaum_

It turns out the two dominant operating systems in the world now are Android, which runs on Linux, which is a rewrite of UNIX, and iOS, which is a 4.4 Berkeley UNIX. And so, both Android and iOS are, in fact, UNIX. My suspicion is probably close to all the servers in the world run on some version of UNIX or Linux. It has a huge influence behind the scenes, and any system running UNIX is going to be oriented towards C and all the stuff written for that thing is going to be in C. It's really just everywhere.
以上这些事情的结果就是世界上占支配地位的两种操作系统的诞生。安卓，运行在 Linux 操作系统上，而 Linux 是重写 UNIX 操作系统的产物。而 iOS，本质上来讲是一种 4.4 版本的 Berkeley UNIX。因此，安卓和 iOS 从本质上说都是 UNIX。我怀疑几乎所有的服务器都是运行在 UNIX 或 Linux 的某个版本上的。这些服务器在幕后发挥着巨大的作用，并且任何运行 UNIX 的系统都源于C语言，而且为 UNIX 所编写的一切程序都使用了C语言。C语言确实是无处不在的。

**22:41** - _Saron Yitbarek_

Andy Tanenbaum is a professor of computer science and the author of Computer Networks. Fun side note, he's also the creator of MINIX, a free, open source version of UNIX, which actually inspired Linus Torvalds to create Linux. And yep, Andy wrote MINIX in C.
Andy Tanenbaum 是一名计算机科学教授，他是《计算机网络》一书的作者。说点有趣的题外话吧，他同时也是 MINIX，一个免费、开源版本的 UNIX 的作者，而 MINIX 事实上也是林纳斯开发 Linux 的灵感来源。当然，Andy 使用C语言编写 MINIX。

**23:03** - _Saron Yitbarek_

Today, C is in every corner of our lives, from rovers on Mars to the browsers of our desktops. It's gone on to influence a lot of the languages we looked at this season, languages like Go and JavaScript and Perl. And thanks to its deep bonds with UNIX, C may well be the most omnipresent language on Earth.
今天，C语言存在于我们生活中的任何一个角落，从火星车到电脑桌面上的浏览器。它影响了许多我们在本季节目中提到的语言，例如Go、Javascript和Perl。由于C语言与UNIX密不可分的联系，C语言很可能是分布最广泛的编程语言。

**23:28** - _Speaker 7_

The recipients of the 1998 National Medal of Science Award: the team of Kenneth L. Thompson and Dennis M. Ritchie, from Bell Laboratories, Lucent Technology.
1998年美国国家科学奖的接受者是————来自朗讯科技公司贝尔实验室的 Kenneth L. Thompson 与 Dennis M. Ritchie的团队。

**23:40** - _Saron Yitbarek_

Back in the 60s, those four Bell Labs employees—Ken Thompson, Dennis Ritchie, Doug McIlroy, and J.F. Ossanna—they had to beg for a little recognition and funding. But in 1998, Thompson and Ritchie received the National Medal of Science for their work on C and UNIX. They also shared the one million dollar Turing award. Not too shabby.
回望60年代，这四位贝尔实验室的员工————Ken Thompson, Dennis Ritchie, Doug McIlroy 和 J.F. Ossanna————他们那时还不得不向上级请求关注和资助。但是在1998年，汤普森和里奇就收到了美国国家科学奖，这是为了表彰他们在C语言和UNIX上的工作。他们也共享了一百万美元的图灵奖奖金。历史的眼光是公正的。

**24:10** - _Saron Yitbarek_

All season long, we've been tracking the movements and magic of some of our favorite programming languages. Whether they got their start by hitching onto an OS, the way C did, or capitalized on new infrastructure, like Go did, one thing remains constant: languages have lives. They're born. They grow, mature. Sometimes, they grow old and die. The more we learn about them, the more it's clear that our programming languages are really these vital forces, always changing to match the times. Our job is to notice those changes and respond in kind. Our languages are often our best tools for building the world we want.
在一整季的节目中，我们一直在追寻那些我们最喜爱的编程语言的发展沿革与魅力。无论它们像C语言一样搭上了操作系统发展的便车，又或者是像Go语言一样在一种新的基础架构上发展，有一件事是永恒不变的：编程语言有它们自己的生命。它们是活着的。它们出生，成长，走向成熟。有时，编程语言也会变老，走向消亡。我们越多的了解这些语言，我们越会发现编程语言是一股重要的力量，它们总是在不断地变化，以切合时代的需要。我们的职责就是意识到这些变化，并且加以回应。我们的这些编程语言一直都是构建我们想要的世界的最佳工具。

**25:00** - _Saron Yitbarek_

That's it for season 3 of Command Line Heroes. I hope you enjoyed listening as much as we enjoyed putting it together. Season 4 is already in the works, and we'll be getting that out to you soon.
以上就是我们所有第三季的《代码英雄》节目。我希望大家很享受收听我们的节目，

**25:13** - _Saron Yitbarek_

Command Line Heroes is an original podcast from Red Hat.
《代码英雄》是来自红帽公司的原创播客。

**25:18** - _Saron Yitbarek_

You can dive deeper into the story of C or any of the programming languages we covered this season if you head over to [redhat.com/commandlineheroes](/en/command-line-heroes/season-4). I'm Saron Yitbarek. Until next time, keep on coding.
如果你想深入了解C语言或者本季节目中我们提到的任何其他编程语言的故事，欢迎访问[redhat.com/commandlineheroes](/en/command-line-heroes/season-4)。我是 Saron Yitbarek ，在下次节目之前，继续坚持编程吧。

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-3/the-c-change

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/QwQ2000)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
