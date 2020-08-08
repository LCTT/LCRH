[#]: collector: (bestony)
[#]: translator: (Colin-XKL)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 2: Open Curiosity)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-2/open-curiosity)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)
[#]: notice: (文中部分翻译困难的部分用双百分号做了标记(%%)，原因包括但不限于 英文词句不完整/专业词汇难以翻译/初稿译者水平不足难以拿捏的词句)

Command Line Heroes: Season 2: Open Curiosity
======
**00:12** - _Saron Yitbarek_

On August 6, 2012, a car-size rover called Curiosity fell from the top of the Martian atmosphere to the planet's surface. The fall took seven minutes. Down, down. The rover carried a precious cargo, 500,000 lines of code, 76 pyrotechnic devices, and a series of tools for conducting never-before-possible experiments. After releasing a supersonic parachute, after heat shield separation, after power descent, and even a sky crane deployment in mid-air, Curiosity at last touched down.

在2012年8月6号这一天，一个汽车大小的探测器，好奇者号，从火星大气层最上层降落到了这颗星球的地表。这次下降持续了7分钟，一直下降，下降。探测器携带了宝贵的货舱，500,000行代码，76个顶尖的科学仪器，以及一系列工具用来开展一些前所未有的实验。在展开一个超音速降落伞后，隔热护盾分离，动力减小，半空中像是有一台起重机一样，好奇者号最终平稳着陆。

**00:59** - _NASA engineers_

Time to see where Curiosity will take us.
现在看看好奇者号会带我们去哪。
**01:13** -_Saron Yitbarek_

Hear that sound? That's what it sounds like when a room full of engineers land a rover on Mars. In a few days, they'll be getting a congrats phone call from President Barack Obama. But for now it's all about the team. A room full of people who know they've just accomplished something together that they could never have accomplished on their own.
听见那个声音了吗？听起来就像是堆满发动机引擎的一个房间着陆在了火星上%%。在几天之后，他们将收到来自总统贝拉克·奥巴马的贺电。但是现在只有他们团队。一屋子的人知道他们刚刚完成了一件他们永远无法独自完成的一件事。
**01:39** - _Saron Yitbarek_

I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. All season long, we've seen how open source technology remakes the way we work and what we're capable of accomplishing. The through-line for me has always been community. It's always about discovering better ways to work together, better ways to learn from the pros, while listening to fresh voices, too. Better ways to connect.
我是Saron Yitbarek，这里是代码英雄，来自红帽的一档博客节目。本季以来，我们见证了开源技术如何重塑我们的工作方式和我们完成任务的上限。%%对我而言，最重要的是社区。我们总是在探寻如何更好地协同工作，更好的从专家那里汲取养分，同时我们也在那里听到不同的声音。社区是一个非常棒的连接你我的地方。
**02:11** - _Saron Yitbarek_

For our season two finale, we're holding on to all those lessons, while we discover how open source powers some of our grandest projects. You might've been watching last November when NASA's InSight Lander touched down on the surface of Mars. Hugs all around. Well, it turns out that shooting for the stars or the red planet only works when you bet everything on collaboration.
在我们第二季的终章，我们暂停所有的课程，来看看开源是如何为那些伟大的项目赋能的。你也许在去年的十一月观看了NASA的insight号着陆器抵达火星地表。彼时四周皆是欢呼与拥抱。看来向这颗红色星星球发射探测器的任务只有把宝压在众人合作时才能实现。
**02:45** - _Saron Yitbarek_

Did I mention that rover on Mars has its own Twitter account? Four million followers. No big deal. And it recently tweeted a message to earthlings, an invitation to build a rover of their own, complete with open source instructions and code, courtesy of NASA's Jet Propulsion Lab. We caught up with some folks called the SGVHAK Group. They're one of the first to build their own rover.
我刚才有提到登陆火星的那艘探测器有他自己的推特账号吗？他还有几百万的粉丝呢。这还不算什么。最近他给地球发送了一条推文，是一封邀请人们使用NASA喷气动力实验室的开源指令和代码建造一个探测器。我突然想起了一个民间的组织叫SGVHAK小组，他们是第一批自己建造行星探测器的人。
**03:13** - _SGVHAK Group_

I'm gonna try and drive over that curb.
现在我要尝试驾驶他驶出路缘。
**03:15** - _SGVHAK Group_

Let's see what she can do.
让我们来看看他能做什么。
**03:15** - _SGVHAK Group_

Going up. Nope.
向前走。哦不。
**03:15** - _SGVHAK Group_

No.
快停下。
**03:20** - _SGVHAK Group_

She used to be able to go over pretty easily, but with the changes we've made to the wheels, she's a little reluctant now.
他以前能够轻松开过去的。不过我们现在对轮子做了一些改动，他有点不情愿。
**03:27** - _Saron Yitbarek_

The group includes Roger Cheng, Dave Flynn, Emily Velasco, and Lan Dang.
这个这个小组包括Roger Cheng, Dave Flynn, Emily Velasco, 以及 Lan Dang
**03:34** - _SGVHAK Group_

Dave designs all the mechanical stuff, and I guess I put things together. Roger's our software guy, Dave's design, Lan is our fearless leader, so.
Dave负责了所有机械相关部分的，而且我猜我把所有的都加在一起了。Roger的软件，Dave的设计，Lan是我们无畏的领导。
**03:45** - _SGVHAK Group_

You are the one, you're the mechanical fabrication expert on the team.
所以你是，你是团队里那个机械制造的专家。
**03:49** - _SGVHAK Group_

I guess. I guess so.
是，我想是这样的。
**03:51** - _SGVHAK Group_

Tell people about the serval bracket.
跟我们说说你的工作吧。%%
**03:53** - _SGVHAK Group_

Oh right.
嗯好的。
**03:54** - _SGVHAK Group_

You're the one that built the servo cluge that, run it, the show.
%%
**03:58** - _SGVHAK Group_

We were gonna take-
%%
**04:00** - _Saron Yitbarek_

Building one of these rovers isn't exactly a Lego project. It takes actual rocket scientists about 200 hours to complete. So yeah, let's give these guys a few minutes to get their act together. We'll check in with them later.
打造这样一部探测器可不是玩乐高玩具。他花费了货真价实的火箭科学家两百个小时才完成。所以，让我们给这些家伙几分钟来展示，我们稍后回来。
**04:19** - _Saron Yitbarek_

Meanwhile, I wanted to learn more about why NASA gave the world an open source rover in the first place. And I found just the person to ask.
与此同时，我想了解更多关于为什么一开始NASA要给我们开源探测器。不过我刚刚找到了回答这个问题的最佳人选。
**04:29** - _Tom Soderstrom_

My name is Tom Soderstrom. I am chief technology and innovation officer for IT at NASA's Jet Propulsion Laboratory.
我叫Tom Soderstorm，我是NASA喷气动力实验室IT部门的首席技术与创新官。
**04:37** - _Saron Yitbarek_

JPL is a group of about 6,000 people. It's NASA's federally-funded research center, and they focus on robotic exploration in space.
NASA的喷气动力实验室总共有大约6000人。他是NASA里一个由联邦资助的研究中心，专注于如何在太空中稳定地进行探测任务。
**04:48** - _Tom Soderstrom_

We look for is there life out there? How did the universe originate, where is it going? And in addition to that, should we ever need to export humanity, we're trying to find Earth 2.0. The earth-like planets that one day we could inhabit.
我们好奇，那里有生命存在吗？宇宙从哪里来，他又到哪里去？除此之外，我们是否需要转移人类，我们正在尝试寻找地球2.0——另一个适宜人类居住的类地行星。
**05:33** - _Saron Yitbarek_

Yeah, it's the big leagues. But here's the thing. Tom's team isn't some siloed group of engineers. They're deeply committed to connecting with the next generation of scientists. They're constantly trying to find new ways to spark original thinking. In fact, it's a crucial part of their job. The open source rover project gives away those designs, so teams of non-NASA folk can try building their own rover. That was part of NASA's larger strategy to promote innovation. Tom and I got talking about why open sourcing NASA's work is so important. Starting naturally with that open source rover.
是的，他们是一个很大的团队。不过事情是这样的，汤姆的团队并不是一群刻板的工程师。 他们肩负着伟大的使命，连接下一代科学家。他们常常尝试寻找新的方式启发原始思维。事实上，这是他们工作中至关重要的一部分。探测器开源计划释出了那些设计，这样一来NASA之外的那些民间组织就能组建他们自己的探测器了。这是NASA宏观计划的一部分，加强创新。汤姆和我很自然地从开源探测器开始，讲述了为何开源NASA的成果是如此重要。
**05:46** - _Saron Yitbarek_

A lot of people are, but when I found this site, I'm like, oh man, maybe I can make a rover. It's really exciting. It's really engaging.
有很多人可能像我一样%%，当我发现这个网站时，我就，哦天呐，也许我可以自己打造一个探测器呢，这真是太令人激动了，这太令人神往了。
**05:55** - _Tom Soderstrom_

We built it for the public and schools to learn, and we're realizing that as we did, it's becoming a wonderful experimentation platform for us. So as we try new things, it's the best place to try it, very easy, very quick, and then we can put it on the real rovers. So we're hoping that people will incorporate things like solar panels, accelerometers, the science payloads, very advanced artificial intelligence programming, and we just want the experiences to proliferate and the people get interested in this and eventually interested in space. Because space is way cool.
我们打造他是为了能让公众和学校能够从中学习，而且我们意识到我们所做的，正在成为我们超棒的实验平台。所以当我们想尝试新鲜事物的时候，这里就是最佳的演练场，很简单，很快，而且我们能把它应用到实际的探测器上面去。所以我们希望人们能够参与合作像太阳能面板，加速度传感器，%%科学有效载荷，先进的人工智能程序，我们只是想快速获取经验，在这些方面感兴趣的人们最终也能对太空感兴趣。因为太空真的是太酷了。
**06:32** - _Saron Yitbarek_

So besides the ideas that you have listed, things that people can do, what have people done with it that you were really excited about or impressed by?
所以除了你们刚才提到的一些想法，以及人们能够做到的事，你们印象最深刻或是最令人激动的人们利用这个项目所做的事是什么？
**06:42** - _Tom Soderstrom_

The price reduction was one really impressive thing and right now, there's a lot of artificial intelligence (AI) going on. So that's one of the most interesting things I see coming. I would love to see somebody add a robot arm to it.
优化价格曾是一项非常令人印象深刻的工作，而现在有一堆人工智能在干这个事儿。那就是我所见到的最感兴趣的事之一，我很乐意见到有人能为其添砖加瓦。
**06:55** - _Saron Yitbarek_

Really cool.
真是太酷了。
**06:55** - _Tom Soderstrom_

And something we're thinking about.
以及我们正在考虑的一些。
**06:58** - _Saron Yitbarek_

So it sounds like this project is open on all angles, right? I mean the hardware is a list of parts that are suggested and it sounds like you can use your own thing, make it cheaper, make it more expensive also, I guess if you wanted to. The software is completely open. Is there any part of this that isn't open?
听起来这个项目像是全方位开放的，不是吗？我的意思是硬件是一份建议零部件的清单，不过你也可以自行替换，换成更廉价的或者更高档的，我猜只要你想的话。软件部分是全部开放的。这其中有什么部分不是开源的吗？
**07:17** - _Tom Soderstrom_

No, it's all completely open.
没有，他是完完全全开源的。
**07:19** - _Saron Yitbarek_

So what's really amazing about this is if you told me that high school students could build their own rovers, that would just sound too difficult, you know, that sounds so advanced. It sounds like something that only NASA would do. Right? How simple is it really to put together?
听到你们说高中学生都能打造他们自己的探测器的时候真是太神奇了，那听起来太难了，你知道吗，这听起来太高大上了，高到只有NASA才会去做的那种，对吗？把他们都组装起来能有多简单？
**07:36** - _Tom Soderstrom_

So it's not meant to be a toy. It's meant to be something real, that really gives them the real experience. So several schools in California have already adopted it, to put it into their science and engineering and programming program. Something called Mechatronics, for instance, where it combines all of them. And that makes us very happy, because then we will get better trained people coming into NASA at one point.
所以这注定不是个玩具，这是货真价实的，能给他们带来最真实的体验。加利福尼亚州的几所学校已经将其纳入他们的科学工程与编程项目。有些比如说是机械电子学，举例来说，就是上述几个的结合体。这让我们非常高兴，因为这样在不久的将来能有一批受到良好训练的专业人才来到NASA。
**08:04** - _Saron Yitbarek_

But it sounds like at this point it's not only benefiting these future NASA people, these future scientists, but it's also benefiting you. Tell me a little bit more about that.
听起来这不仅仅有利于未来的NASA工程师，未来的科学家，你们也能从中受益。再和我们多聊一点吧。
**08:14** - _Tom Soderstrom_

So all of a sudden, we have now a very simple platform to experiment with. So I can envision the open source rover driving around JPL and saying hello to people. So we can experiment very quickly in our own backyard on things that we would later on need to take to much more difficult places. So, it becomes a mobile platform that we can experiment with. And again, I think AI is going to be the interesting one, because it's exploding so quickly, and the simplicity of adding new robotics parts to it is another factor.
突然间我们就有了一个非常简单的实验平台。这样我就能想象开源的探测器在我们喷气动力实验室外面跑并且在向人们问好。我们能够在我们的后花园快速对即将用于更艰苦环境中使用的技术进行实验。再一次地，我认为人工智能将会是一件很有意思的东西，因为技术爆炸太快了，添加一个机械部件只需要更改一个变量这太轻松了。
**08:50** - _Saron Yitbarek_

So, theoretically you could have created your own mobile playground, a place to experiment and not made it open source, right? It could have just been like an internal thing. How has the fact that it's been open source affected what you've been able to learn?
所以理论上来说你们可以创建一个你们自己的移动试验场，一个闭源的进行实验的地方，对吧？他本可以成为一个内部项目。现在将其开源能怎样影响到你们本身就能学习去做的事？
**09:08** - _Tom Soderstrom_

So, that's a really good question. Why open source? For us, it was more difficult to make it open source, but that's kind of the challenge. So we wanted to make it open source so that other schools and all that could adopt it and build it. It created a lot more work to create a manual that other people could use who are not already robotics experts. But the bottom line is, I think when we release something into open source, it's cleaner, it's tighter, it's better-documented, because people know other people are going to reuse this, and it has to be built to be extended. So the quality is higher. I talked to Netflix, and they had found the same thing, that the code, once it was released open source, was cleaner. It was better.
嗯，这是一个好问题。为什么要开源？对我们来说，将其开源才是更难的选择，不过那也是挑战所在。我们将其开源能让学校这种地方能够用上并且能造出来。编写一本不是机器人学专家的人也能看懂的手册带来了大量额外的工作。但最起码，当我们决定将一些东西拿出来开源的时候，他变得更清晰，更紧凑了，文档更完善了，因为大家知道其他人会来使用这些东西，所以必须要具备一定的可扩展性。所以质量变得更高了。我曾经和Netflix的人谈过，他们也有同样的感觉，那些代码一旦要拿出来开源，他就变得更清晰了，变得更好了。
**09:54** - _Saron Yitbarek_

When you think about these open source rovers, 5-, 10-, maybe even 20-plus years from now, how do you see the things that they're able to do and what people have been able to create? How do you see that possibly benefiting us here on earth?
你是怎样看待开源探测器的五年，十年，甚至是二十多年后，你觉得他们能做什么，人们能利用他去创造些什么？你是怎样看待他为我们地球带来的潜在利益的？
**10:11** - _Tom Soderstrom_

In many, many ways. So, today this rover is built to roll. I can see that it could be built to walk. It could be extended to hop. We're already sending a helicopter to Mars, it's flying right now. So these rovers are not just rovers of today. Having people worldwide experiment with it can help us move much, much faster to see what's possible, and come up with ideas that frankly we might not have thought of. So what will it look like? I can't wait to see. I don't know.
在很多很多方面。今天这个探测器被打造出来是为了后面上太空。我可以说他自出生之日起就是为了能跑。经过扩展他还可以跳。我们已经向火星送去了一架直升飞机，他现在还在飞着。所以说这些探测器并不仅仅局限于现在我们所说的探测器。有了全世界各地人们的实验，他能帮我们走的更快，更远，不断探寻可能性的上限。以及贡献出一些我们前所未有的好点子。他到底会是什么样的？我迫切的想了解，不过我不知道。
**10:49** - _Saron Yitbarek_

By creating this platform, you've kind of enabled and empowered a lot of people to make a lot of toys, and then we'll see what turns up.
打造了这个项目，你们已经在某种程度上为许多人提供了打造这样一个玩具的机会。接下来就让我们拭目以待吧。
**10:57** - _Tom Soderstrom_

Yes, and that's actually a very strong point, because what I have noticed is if I can even think of something, somebody is already doing it. It's a matter of finding them, and whatever we came up with to start, once the end users get their hands on it, they're gonna improve it tenfold, in ways that we never even imagined. So giving them toys to play with makes for a much stronger and better place with more advanced missions in the future.
是的，这是很重要的一点。因为我注意到我能想到的主意都已经有人做过了。想出这些是一回事，可无论我们开始做什么，一旦到最终用户手上，他们就能以我们无法想象的方式提升十倍。所以打造这样一个试验场是面向未来的一项伟大的使命。%%
**11:23** - _Saron Yitbarek_

Beautiful.
这真是太棒了。
**11:29** - _Saron Yitbarek_

f you feel like getting in on the open source rover mission, you can find out how at opensourcerover.jpl.nasa.gov. There is so much fun to be had there. We'll return for more with Tom Soderstrom. But first, I want us to dig a bit deeper into NASA's relationship with open source.
如果你想了解开源探测器项目，你可以访问opensourcerover.jpl.nasa.gov. ，那里很有趣。我们稍后再与Tom Soderstrom做深入讨论。但首先，让我们来更深入的链链了解NASA与开源之间的关系。
**11:51** - _Hila Lifshitz-Assaf_

Hi, I'm Hila Lifshitz-Assaf. I'm a professor at Stern School of Business, NYU.
大家好，我是Hila Lifshitz-Assaf，纽约大学商学院的教授。
**11:57** - _Saron Yitbarek_

Hila's been studying how NASA breaks down knowledge barriers.
Hila正在研究NASA是如何打破知识屏障的。
**12:02** - _Hila Lifshitz-Assaf_

If you go back, even to 15th century, and you think about lone inventors, like Leonardo da Vinci and others, they were kind of connected only in their local communities. And then, we had the industrial revolution and the birth of the lab. And ever since, for 200 years or more, people have been working in their labs. And the big change that's happened in the 21st century with the digital revolution that we're experiencing has brought up things like open source, which are debunking the need for those organizational boundaries that we had.
如果你能够回到过去，回到15世纪，看看那些孤独的发明家，像莱昂纳多·达芬奇和其他人，他们某种程度上只在自己所在的社区活动，之后有了工业革命，有了实验室。此后的两百多年里，人们都在实验室里工作。最大的变化发生在21世纪，数字革命之后我们有了开源的概念，打破我们以前的组织边界的需求。%%
**12:34** - _Saron Yitbarek_

In NASA's work, Hila sees a prime example of that massive change.
在NASA工作的日子里，Hila见证了这巨大变革最具代表性的例子。
**12:39** - _Hila Lifshitz-Assaf_

One of the things that attracted me about NASA was that they were the bravest in the sense that they really took strategic research and development (R&D) challenges, that their scientists and engineers and top brains were working at the same time and opened them to the crowd. And I have to say that still to today, many other organizations, when they do open source science or crowdsourcing, they do not take their core strategic challenges. They take something that is on the side, that doesn't risk their organization too much, whether it succeeds or fails, and NASA did something that really changed things, once it succeeded.
NASA最吸引我的一点在于，他们就某种意义上来说是最勇敢的，他们的科学家，工程师和最强大脑同时投入策略研究与发展的挑战，%%最后向公众开放。而且我必须说的是，直到现在，很多其他的组织在做开源科学或是众包的时候，他们并不会挑战公司的核心价值观。他们会做另外的一些东西，无论成功还是失败都不会让他们的组织蒙受多大风险。NASA做了一件非常伟大的事来改变这一切，只要这个项目取得成功。
**13:14** - _Saron Yitbarek_

Starting back in 2009, NASA began using open innovation platforms, like Innocentive and Topcoder. And they weren't playing around. Like Hila mentioned, they were putting their top R &D challenges on those platforms.
自2009年起，NASA开始使用像Innocentive 和 Topcoder这样的开源创新平台，而且并非戏耍。就像Hila所提到的，他们甚至把他们核心的R &D挑战都放了上去。
**13:29** - _Hila Lifshitz-Assaf_

It didn't even took a full year to see solutions starting to come from crowdsourcing platforms.
甚至不到一年我们就可以看到来自众包平台的解决方案。
**13:34** - _Saron Yitbarek_

Real quick, I want to give you just one of the home runs they got from opening up their research. Hila's gonna describe how they were able to level-up their solar flare prediction.
这真是太快了，我想给你们说个他们开源他们研究成果的例子。%%Hila将讲述他们是如何将太阳风暴的预测技术提升一个台阶的。
**13:46** - _Hila Lifshitz-Assaf_

So, predicting solar storms is a hard heliophysics problem that people have been working on it for more than a decade. And basically they formulated it in a way that was able to be solved by a wide area of people. And they were very intentional about it. That's the amazing thing that I found that they were trying to get solutions from people outside of heliophysics. They were really looking for an innovative solution. And indeed, Bruce Kragan, a semi-retired radio engineer from rural New Hampshire, in 3 months brought us solutions that predicted solar flares. And when the NASA folks ran it, they actually saw that he predicted at 80%. So basically, something that in the traditional model will take years and millions of dollars happened in 3 months in something around $30,000 to $40,000, $50,000.
咳咳，太阳耀斑的预测是学术界研究了数十年的一项非常困难的太阳物理学问题。 总的来说，他们已经完成初步的构想，以便更多的人可以参与这方面的研究。这也是他们非常在意的一点。那就是为什么当我得知他们要求助于太阳物理学领域以外的人的时候感到十分惊奇。Bruce Kragan，一名来自新罕布什尔州乡村的半退休的无线电工程师，三个月就给我们带来了解决方案并预测了太阳耀斑。当NASA验证的时候观测到他预测了80%。从根本上来说，原本在传统模型中需要花费数百万美元及数年时间的事现在只需要三个月，花费大概在三万到四五万美元。
**14:36** - _Saron Yitbarek_

You might have already guessed, this kind of change required some culture shifts over at NASA.
你也许已经猜到了，这样的变化需要NASA内部的一些文化变迁。
**14:44** - _Hila Lifshitz-Assaf_

So, some of them invited those external solvers to come to their organizations, other created internships or collaboration, all types of interesting ways to bring that knowledge in, and not to keep it kind of buffered.
是的，而且他们有的还邀请了外面的提供了解决方案的人来他们的组，还有些邀请其实习或是展开合作，各式各样有趣的方式来保证知识的活水。
**14:59** - _Saron Yitbarek_

There's something kind of beautiful there when you think about it. A lot of organizations still resist open source development and don't like giving up proprietary software, but here you've got the most innovative, biggest-picture group of scientists on the planet, and they're saying, yeah, you know what? Let's do this together. That's a powerful thing.
还有一件事，很多组织仍然抵制开源活动，不愿放弃专有软件。但在这里，你可以找到这个星球上最具创新性，愿景宏大的一群科学家，而且他们说，嘿让我们一起来做吧。这真是一件伟大的事业。
**15:22** - _Hila Lifshitz-Assaf_

We've seen that revolution is software . We have not yet fully seen it in science and technology, and I think it is prime time to go through it. The more we see the rise of computational physics, computational biology, the more this will become possible. I think much more of the population can participate and help in different type of tasks, and maybe this way, science technology can really make progress beyond developing a new app.
我们已经可以看到，这场变革发生在软件上。我们尚不能在科学与技术方面见到端倪，不过我认为现在是最好的时机。我们越是看到计算物理，计算生物的崛起，这就越有可能实现。我认为越多的人能参与进来，协助处理不同的任务，以这种方式，科学技术才能真正快速发展超过应用开发。
**15:53** - _Saron Yitbarek_

Hila Lifshitz-Assaf is a professor at the Stern School of business at NYU.
Hila Lifshitz-Assaf 是一位来自纽约大学斯特恩商学院的教授。
**16:00** - _Saron Yitbarek_

NASA benefits massively from opening up their research challenges, but another way they build community is via the Small Business Innovation Grant program, which supports innovative work in the private sector. All those blue sky projects that are risky but might pay off big time.
NASA在开放他们的研究课题的道路上受益良多，但另一方面，他们通过内部的中小企业创新授权项目打造了社区。所有那些有风险的蓝天计划都可能付出代价，
**16:22** - _Dan Wachspress_

Hi, my name is Dan Wachspress. I'm an aeronautical engineer working at Continuum Dynamics Incorporated.
大家好，我叫Dan Wachspress，我是一名航空工程师，在Continuum Dynamics Incorporated工作。
**16:28** - _Saron Yitbarek_

Dan's company, CDI, does R&D related to the rotorcraft industry. So that's helicopters, gyrocopters—anything that uses wings or blades to fly, literally blue sky. They've been working with NASA researching vertical takeoff. Think Jetson-style air taxis.
Dan的公司，在做R&D相关的航空工业相关的事%%。就是直升机、旋翼飞机都要用到的机翼和螺旋桨这类用来飞行的东西，也叫蓝天%%。他们一直在NASA工作致力于解决垂直升降的问题。类比Jetson样式的空中出租车。%%
**16:50** - _Dan Wachspress_

The whole idea is, once you have electric motors instead of gas turbine engines on your vehicles, you can have many more propulsors. They could be much quieter, safer, and all issues with helicopters that annoy people could go away, and we might have a world where you call up a taxi that takes you from Dallas to Fort Worth, let's say, in an electric-powered air taxi with 4 other passengers and no pilot, as opposed to getting in a car and trying to battle through the traffic. That's the vision.
总体的想法是，你一旦有了电气摩托替代你原来车子上的油气涡轮引擎，你就能有更多的推动力。他们可以变得更安静、更安全，直升机所有恼人的问题统统消失，而且我们可能步入一个新世界，你可以打一辆车带你从达拉斯到沃斯堡（译者注：均为美国得克萨斯州的两个城市）。假设一辆电动空中出租车载着四名乘客，没有飞行员，而不是在一辆汽车里跟堵车较劲。那就是我们的愿景。
**17:22** - _Saron Yitbarek_

A lot of companies, including Uber, are very interested in the potential of air taxis. And the great thing about NASA's role here is that it breaks down barriers that would exist if each of those companies were slogging through the research on their own.
有很多公司，比如Uber，对这种空中出租车的设想非常感兴趣。而且NASA在这里的角色最伟大的一点在于，他打破了那些公司本要各自为营死磕研究的壁垒。
**17:38** - _Dan Wachspress_

Companies do not want to divulge information necessarily. They want to keep trade secrets, and they won't share knowledge . NASA's goal is to put as much knowledge and have as much capability as possible out there in their hands. And I think if you talk to any of these companies, they'll agree that they're just, they wouldn't be able to do what they're doing as fast as they're doing if they weren't supported by NASA and the technology NASA is pushing on today and has pushed on in the past.
那些公司必定不想走漏风声，他们想私下交易，不愿共享成果。NASA的目标就是把尽可能多的高性能的研究成果送到他们手里。而且我敢说你如果去问他们任何一家公司，他们肯定会说，他们只是，没有NASA和他们的技术的支持他们没法做到这么快。但其实NASA这并不是NASA第一天干这个事儿了。
**18:13** - _Saron Yitbarek_

I'm guessing it doesn't hurt that NASA has already got some pretty killer wind tunnels, too. From Mars Rovers to flying cars, are you getting a certain vibe here? We're talking about innovation, where the sky is not even the limit. And it's all because of the planet-sized collaboration that the open source mindset makes possible.
我猜这没有什么大不了，NASA肯定也已经有了非常赞的杀手级的风洞了。从火星探测器到飞行汽车，你有感觉了吗？我们谈论的是创新，天穹尚且不是我们的极限。而且这一切都归功于我们星球级别的合作，而正是开源观念让这一切成为可能。
**18:41** - _Saron Yitbarek_

I promise we'd come back to NASA's Tom Soderstrom. Tom figures that all the open source magic we've been exploring for the past 2 seasons is building up into a massive shift point that he calls the Fourth Industrial Revolution.
我们再回来和NASA的Tom Soderstrom聊聊。Tom认为我们两季以来探讨的开源的魔力已经形成一股巨大的推动力他将其称之为第四次工业革命。
**18:59** - _Tom Soderstrom_

When you look at how innovation happens, it's really about technology waves. And there's a lot of technology waves that are coming right now, and they're all building to a giant tsunami. They're coming faster and faster, and they're all going to change everything, so that's why we call it the Fourth Industrial Revolution.
你也许好奇创新是如何开始的，事实上他总是与科技浪潮挂钩。此刻有多个科技浪潮同时袭来，他们都将引起巨大的海啸。他们逼近地越来越快，要改变所有事物。那就是为什么我们将其称之为第四次工业革命。
**19:21** - _Saron Yitbarek_

I'm just going to break down what's in those waves super fast, even though each one of them could be an episode in itself. When Tom talks about those waves that are hitting us, he's talking about things like cybersecurity challenges at scale, quantum computing, and software-defined everything. But wait, there's more. He's also talking about ubiquitous computing, natural interfaces, and the internet of things.
我将简单几句带过那些浪潮，他们中的每一个都可以独立讲一期节目。当Tom谈及那些浪潮将袭击我们的时候，他指的是像网络安全，量子计算，以及软件定义一切这样的东西。但等等，还远不止这些呢。他还提到了无处不在的计算，自然接口%%，以及互联网相关的那些东西。
**19:49** - _Tom Soderstrom_

These all build to the giant tsunami, which is built-in intelligence everywhere.
这些都将是一场场巨大的海啸，到处自带各种集成的智能。%%
**19:54** - _Saron Yitbarek_

When you imagine this tsunami, this moment when it all comes together and creates something bigger than its individual parts, what does that look like?
想象这场海啸，当他们同时发生，发生了1+1大于2的情况，会变得怎么样？
**20:04** - _Tom Soderstrom_

I think it's not gonna be like one day somebody stands up and says, look at this. I am now announcing built-in intelligence everywhere. It's creeping into everything that we do. We say smart, right? The smart TV, a smart conference room. That's really where we will start realizing that it's becoming smarter and smarter and smarter, and for the enterprise it means you can just ask a question by speaking to the room and it searches through petabytes of data in thousands of different data sources and gets you the answer. So it's natural language processing. It's deep learning, it's machine learning, and we're not gonna say all of a sudden, wow we're here. It's just going keep morphing and getting better and better.
我认为未来的某一天，不会出现这样的情况：一个人站起来，然后说，我现在介绍这个万物皆智能的体系，他渗透进我们生活的方方面面。我们想要更智能的东西，不是吗？智能电视，智能会议室。那就是我们开始意识到这些事物正在变得越来越智能的时候，他们变得越来越智能。对于企业来说，这可以意味着，你可以对着一个房间提出问题，然后他会帮你在数千种不同的数据源，数PB的数据里帮你寻找答案。而这背后，就是那些自然语言处理、深度学习、机器学习这类东西。而且我们不会突然说，哇我们已经发展到这种地步了。不会的，这是一个循序渐进潜移默化的过程，这个世界只会变得越来越好。
**20:49** - _Saron Yitbarek_

Thinking about this Fourth Industrial Revolution , how does that influence the way you do work at the Jet Propulsion Lab?
这个第四次工业革命，又回如何影响你在喷气动力实验室的工作呢？
**20:57** - _Tom Soderstrom_

I think the experimentation, this next industrial revolution is really helping us experiment quicker and to take advantage of much better components, both software and hardware, that perhaps we don't have to build all of it, but we can just be more intelligent about using it. And then open source. Open source is really what's changing a lot of how we work and what we do.
我认为首先是实验，下一场工业革命可以帮助我们更快地完成实验，而为了同时在软硬件层面更好地利用这一次机遇，即便我们不会全部投入两者，但我们可以更明智地用好它。除此之外，开源，开源真实一项颠覆我们工作方式和工作内容的事业。
**21:23** - _Saron Yitbarek_

How so? Tell me more about that.
此话怎讲？
**21:24** - _Tom Soderstrom_

I think the open source, I'm old enough to have gone through the open source wars, where the open source was a toy. It was bad, it was inferior to commercial. All of that has kind of gone away, at least at JPL. Now it's what's most appropriate for the problem at hand. It's more economical. It's much faster to experiment. Another one is in open sources, we don't have to develop everything ourselves anymore. We can develop it, and then if we can release it open source, we can get help to make it better. And then it helps us retain and attract talent. This one is interesting.
开源这东西，我的资历足够老，想当年我也是经历了开源战争的男人，当时开源还只是个玩笑。那时的开源很糟糕，比商业还要低级。不过那些都已经是过去了，至少在喷气动力实验室是这样的。现在手头最要紧的问题与经济关联的更多。可以更快地做实验验证。另外一个，开源，现在我们再也不用全部从头造轮子了。我们可以自己开发，然后如果我们希望将其释出并开源，我们能够得到外界的帮助，让他变得更好。之后它能够帮助我们招贤纳才。这就很有趣了。
**22:05** - _Saron Yitbarek_

Oh, that is interesting.
哦是的，真是有趣。
**22:07** - _Tom Soderstrom_

I think people, the new generation especially, get their street creds from submitting to open source and getting as many stars as possible. So that's what you'll see on the resume. My software got x stars.
我认为现在的人们，特别是新的一代，可以将他们的项目开源以获得更多的影响力，得到尽可能多的star。你可以看见他们的简历上写着，我开发的软件得到了多少个star。

**22:21** - _Saron Yitbarek_

What's really interesting about how much open source has affected and helped the work that you're doing is the fact that open source isn't new, right? You mentioned yourself that you've lived through the open source wars. You've seen it progress over the years. What is it about open source today that allows you to really take advantage of it in a way that maybe you couldn't 10, 15, 20 years ago?
真正使我感兴趣的是，让你们的工作方式和内容发生变化的开源，并不是什么新鲜事物，对吧?你提到了自己曾经历了开源战争。你也许见证着这场旷日持久的战争。那么是什么开源有哪些好处是你十年，十五年，二十年前没有的呢？
**22:47** - _Tom Soderstrom_

There's a couple. One of them is simply cloud computing. We don't have to do the big bet and buy a bunch of software and own it for many years. We can just experiment. So that's been a big one. The other one is the realization that open source is no less secure than commercial source. It's no longer, forgive the expression, a religious argument. It's just more of an economical and practical discussion.
有两个。一个就是云计算。我们不用签署一份大合同，购买一堆软件然后使用许多年。我们可能只是想做个实验。这是很大一点好处。还有另外一点就是开源并不比闭源的安全性差。他不再，抱歉这话有些拗口，是一个信仰的纷争。他就是一个超越经济利益的一项实际的话题。
**23:15** - _Saron Yitbarek_

Open source has clearly played a big part in what you all are doing, especially when you think about the future of JPL and what you hope to accomplish moving forward. It sounds like open source will probably continue to be a big part of that story. When you think about the most exciting or the most ideal outcome of that collaboration, that participation, what might that look like and what do you think it will mean for humankind?
开源显然在你所从事的工作当中扮演了一个重要的角色，尤其是当你谈及喷气动力实验室的未来，以及你期望他以怎样的方式前行的时候。听起来开源仍将是故事的大头。当你谈及那场合作最激动人心或者说最理想的结果，他会是什么样的，你认为他对于人类的意义是什么？
**23:42** - _Tom Soderstrom_

That's a great question. I think that the real answer is you just said it, humankind. It's getting everybody more involved in what we do. You know, one day we're going to put humans on Mars. We're going to explore even further to find Earth 2.0. We're going to put humans on the moon again. All of that will require a lot more involvement from the world.
好问题。我认为正确答案就像你刚才所提到的，人类。我们所做的工作鼓励任何人参与进来。你知道吗，某一天我们将把人类送往火星。我们将要探索更广袤的深空去寻找地球2.0。我们还要再开展一次载人登月。这些都需要更多的来自世界各地的参与。
**24:15** - _Saron Yitbarek_

I'm into that revolution. Tom Soderstrom is the chief technology and innovation officer for IT at NASA's Jet Propulsion Laboratory.
我被这场变革深深的吸引了。Tom Soderstrom是NASA喷气动力实验室的首席技术与创新官。
**24:29** - _Saron Yitbarek_

From Earth 2.0, back to Earth 1.0. It's time to remember the humble origins of that Fourth Industrial Revolution. As grand as open source projects can get, it all starts with a group of hackers just trying to make their rover work.
从地球2.0，到地球1.0，是时候记住蛮荒时代到第四次工业革命了。开源事业的宽广前景，从它驱使这一群极客努力想让他们的探测器跑起来便可以看出。
**24:47** - _SGVHAK Group_

So we're gonna see if it'll run. We're gonna, we put down another thing to help it get over the curb. It made it. Yay.
让我们拭目以待吧。放开干，让子弹飞。
**24:59** - _Saron Yitbarek_

Yay.
是的。
**25:02** - _SGVHAK Group_

Uh-oh. Now I can't get down. It's stuck in the flower bed.
哦不，我下不来了，我被卡在花床里了。
**25:14** - _SGVHAK Group_

We're just going to have to lift it out.
我们只需要将它举起来。
**25:16** - _SGVHAK Group_

It's not on Mars. You can just go over and pick it up.
这又不是在火星，你们只要过去把那个捡起来就好了。
**25:20** - _Saron Yitbarek_

I think they're making progress.
我认为他们已经开始了。
**25:25** - _Saron Yitbarek_

We're going to leave those command line heroes just the way we found them, exploring, learning, diving into their work, and knowing that, through open source, the sky's not even the limit.
让我们和这些刚被发掘的代码英雄说再见吧，他们要继续投入他们的工作了。通过他们，通过开源，我们知道，天穹不是极限。
**25:40** - _Saron Yitbarek_

If you're ready to level up your own open source game, don't forget, we've been building Command Line Heroes: The Game, all season long and you can still contribute.
如果你想让你自己的开源游戏项目上一个台阶，不要忘了我们正在筹建《代码英雄：游戏》，本季节目一整季的时间里你都可以进行提交。
**25:52** - _Michael Clayton_

Hi, I'm Michael.
嗨，我是Michael。
**25:52** - _Jared Sprague_

Hi, I'm Jared. And we're the developers of Command Line Heroes: The Game.
嗨，我是Jared。我们是《代码英雄：游戏》的开发人员。
**25:58** - _Saron Yitbarek_

We checked in with Jared Sprague and Michael Clayton from Red Hat to find out how it's going.
我们检查了来自红帽的Jared Sprague和Michael Clayton来看看情况怎么样。
**26:03** - _Michael Clayton_

I was a little surprised at how much interest we got so quickly. The response was just phenomenal, and the pull requests started flowing.
有点小惊喜，我们怎么发展的这么快。反响非常好，提交的pull request蹭蹭上涨。
**26:17** - _Saron Yitbarek_

What do you think it is that got people so excited?
你认为是什么让大家这么激动？
**26:18** - _Michael Clayton_

I think this just was for a lot of people listening to the podcast, kind of a catalyst for them to try it out, especially since we put out a call for all types of contributions, any type of creative person that wants to contribute or an engineer of any type, there's something that they can do on it.
我认为是我们播客节目的听众，%%，尤其是自从我们接收任何类型的代码贡献，任何想要贡献的创意人员，以及任何类型的工程师后，他们就有事儿做了。
**26:39** - _Saron Yitbarek_

So what do you hope to see next from the community? The game is still in development. What do you hope to see?
你期望看到的下一个社区的作品是什么？这游戏还在开发中。你最期望见到什么?
**26:47** - _Jared Sprague_

I would personally really like to get into the groove of development, where we have people contributing art assets and music and sound effects, storyline, coding, and all of these things can all work in parallel, and once we get everyone into that groove, and we're all just building a game and we can see it coming together, that's going to be a great time.
我个人非常享受开发过程中的进入节奏的感觉，有人贡献了美术素材和音乐以及音频效果，故事线，代码，以及其他所有能够并行工作的东西。一旦每个人进入节奏，我们可以一起开发，共同看着游戏被开发出来，那真是太美妙了。
**27:14** - _Saron Yitbarek_

By the way, we'll have a beta of the game on display at this year's Red Hat Summit—in Boston, May 7-9—thousands of command line heroes just like you are coming together for 3 days of innovation and education. Check out the details at redhat.com/summit.
顺带一提，我们的游戏的公测版已经蓄势待发，今年的五月七日到九日在波士顿开办的红帽峰会，数千名像你一样的代码英雄会前来进行三天的创新与教育。点击网址查看详情。redhat.com/summit
**27:34** - _Saron Yitbarek_

And one final announcement. This may be the end of season 2, but it's not really goodbye. Season 3 is already in the works! And in the meantime, we've got a bonus episode coming your way. We're hosting a roundtable with some of our favorite thinkers—getting them talking about what's next for open source. Look for that one in January. And remember, if you don't want to worry about missing new episodes, just subscribe. It's one click, it's free, and you'll be the first to know when new content drops.
最后一件事，这也许就是第二季的最终章了，但这不是永别。第三季已经在筹备中！与此同时，我们也为大家带来了一期彩蛋。我们开展了一次圆桌会议，与你们最喜爱的思想家探讨开源的未来。请锁定今年一月。别忘了，如果你不想错过最新一期节目，记得点关注哦，就点一下，点一下又不会怎么样，这样你才能在第一时间收到新内容的通知哦。
**28:09** - _Saron Yitbarek_

I'm Saron Yitbarek. Thanks for listening all season long and keep on coding.
我是Saron Yitbarek，感谢这些季以来的陪伴与支持。%%

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-2/open-curiosity

作者：[Red Hat][a]
选题：[bestony][b]
译者：[Colin-XKL](https://github.com/Colin-XKL)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
