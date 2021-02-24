[#]: collector: (bestony)
[#]: translator: (2581543189)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 4: Smarter Phones: Journey to the Palm-Sized Computer)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-4/smarter-phones)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 4: 更智能的电话: 掌上电脑的旅程
======

**00:02** - _Saron Yitbarek_

在 20 世纪 90 年代初，一位心灵手巧的软件开发者将一堆木头切割成不同尺寸的小块。他仔细的比较了每个小块的重量，把一张打印着显示器图案的贴纸，贴到了其中刚好能装进口袋的那块上，把它装在上衣口袋里走来走去，感受随身携带一个这样的设备是什么体验。他畅想着在不久的将来，这样的设备会变为现实。如果你认为他的名字是 Steve Jobs，那么你就错了。他的名字是 Jeff Hawkins，曾合作创造了 PalmPilot 掌上电脑。当 iPhone 在 2007 年上市时，评论家们和竞争对手们就曾经质疑智能手机是否能够成功。

**00:55** - _Saron Yitbarek_

十年后，问题变成了，人怎么可能没有智能手机。智能手机无处不在，它的软件功能涵盖生活的方方面面，它硬件设备的好坏更成为了身份的象征。但是，尽管 iPhone 对我们移动生活的崛起起到了至关重要的作用，但它并不是一切的起点。我要分享早期掌上设备如何为智能手机铺路的史诗故事，故事的主人公是一个充满奉献精神的团队，自始至终坚信掌上设备会获得成功。我是 Saron Yitbarek，这里是<ruby>代码英雄<rt>Command Line Heros</rt></ruby>，Red Hat 的原创播客。

**01:38** - _Saron Yitbarek_

影视作品中很早就出现了智能机的概念，比如<ruby>星际迷航<rt>Star Trek</rt></ruby>中的武器 tricorder。而在现实生活中，直到 1984 年，人们才把手机称作智能机。那时的智能机像砖块一样笨重，后来 90 年代智能机变得越来越小。到电视节目<ruby>救命下课铃<rt>Saved by the Bell</rt></ruby>播出时，主角 Zack Morris 已经可以随身携带。但这时智能机只用来打电话。还记得打电话么？所谓智能机上，没有任何“智能”的部分。与此同时，另一种技术获得了关注，那就是 PDA，一种个人数字助理，即一种可以扮演你的个人信息管家的移动电子设备。有关这种设备的故事我们一会儿再说，但是在那个时候，科技产业更多的关注在个人电脑上。这个故事我们已经在第三集讲 Altair 8800 时学习过了。

**02:33** - _Ed Colligan_

每个人都存在思维定势，认为个人电脑是一种放在桌子下面的巨大的、米黄色的大箱子。人们无法想象你可以将个人电脑装在自己的口袋中。

**02:43** - _Saron Yitbarek_

在20世纪90年代早期，Ed Colligan 还是 Plam 公司市场部的<ruby>副总裁<rt>VP</rt></ruby>。这是一家由 Jeff Hawkins 创建的初创移动软件公司。即那位口袋装着一块木头到处走动的人。

**02:57** - _Donna Dubinsky_

这是一个宏大的愿景，也是计算的未来。在这个未来，人们用手持设备计算；在这个未来，手持式计算机的运算量将可能超越桌面式计算机。

**03:11** - _Saron Yitbarek_

欢迎 Donna Dubinsky，Plam 公司的时任 CEO。

**03:15** - _Donna Dubinsky_

我知道今天我说的东西听起来像 “随你怎么讲，这就是合理的。”。但是，请相信我，对那时的人来说，这并不合理。

**03:21** - _Ed Colligan_

我们很难体会为什么当时的人理解不了。因为你知道，计算技术发展如此迅速，对吧？它已经从占满整个房间的计算机变成了大型机，再到小型计算机，而小型计算机又被误称为个人计算机，再到台式计算机。这是<ruby>摩尔定律<rt>Moore's Law</rt></ruby>发展的必然结果，即计算机越来越强大，但是体积越来越小。

**03:48** - _Saron Yitbarek_

Plam 公司最开始为 Casio 公司制作的一款名叫 Zoomer 的 PDA 设备，还有<ruby>惠普<rt>Hewlett Packard</rt></ruby>的设备研发软件。但是第一代 PDA 并没有获得成功。并且，随着苹果公司的高调失败，整个个人数字助理的梦想似乎已经失去了存在的理由。苹果失败的原因在于 Apple Newton 这款 PDA 太大、太笨重、软件运行速度太慢。但是 Palm 团队想知道是否有一种新方法可以改变游戏。

**04:25** - _Donna Dubinsky_

我们最初的合作对象是操作系统公司 GeoWorks，和硬件供应商公司 Casio。后来我们发现，工业级架构的硬件堆叠对于手持式计算并没有意义。使用高度集成的硬件和软件才是构建手持设备的正确方式，失败改变了我们的想法。

**04:55** - _Saron Yitbarek_

Palm 公司认识到，如果他们可以用自己生产的硬件，运行他们开发的软件，那么他们也许会创造一款成功的 PDA。

**05:04** - _Ed Colligan_

不，不，<ruby>个人数字助理<rt>PDA</rt></ruby>不是我们的术语。

**05:09** - _Saron Yitbarek_

哎哟，对不起，Ed。

**05:11** - _Ed Colligan_

我们不想做一款 PDA。新产品的定位是与 PC 连接的记事簿。我们努力改变人们看待它的方式。让人们意识到，这不是一款全新的设备，这只是 PC 的一个配件。

**05:29** - _Saron Yitbarek_

当 Ed 说 “被连接” ，他的意思是说将设备连接到电脑，而不是指连接到无线互联网。那时的设备还无法连接互联网。即便只是将 Palm 设备连接到个人电脑，这样的创意仍然比竞争对手高出了一步。

**05:46** - _Donna Dubinsky_

它们并没有主动连接任何东西，因此如果你在你的 Sion 以及 Casio Wizard 中有一个通讯簿，那么在你的电脑上将不能对你的地址簿做任何操作。为了替代标准手持单机计算机，我们把它作为你电脑的一个附属物。一个你电脑之上的窗口，一种获得你电脑一小片的方式，并且是以同步功能为核心的。

**06:13** - _Saron Yitbarek_

此外，为了构建一个移动备忘记事本设备，Palm 想把它（PDA）与一个同步设备搭配使用，这样你就可以将这个移动备忘记事本设备插入你的电脑来更新信息。

**06:24** - _Rob Haitani_

这在那时候似乎是非常具有压迫性的。这有25个人，硬件方面非常……坦白地说，它是资本密集型的并且在当时是一个十分令人生畏的挑战，你需要许多投资，你需要时间，你需要采购。

**06:40** - _Saron Yitbarek_

这是 Rob Haitani ， Palm 的产品经理。并且这在当时是 Donna Dubinsky 对 Rob 团队的考验。

**06:47** - _Donna Dubinsky_

并且我们希望从一个操作系统、应用软件、硬件同步软件，或者任何对公司有效的软件来开始建立。因此，当我回过头来看时发现，这些对于一家小公司来说，同时使用这些软件，并且让它们一起协同工作则是非常冒险的行为。

**07:14** - _Rob Haitani_

这就是为什么人们到硅谷去的原因。就像你将要创建一个全新的行业一样。并且，就像IBM、苹果以及微软这样的公司也都曾经在这个东西上失败过。因此，是什么让你们这25个人认为你们可以成功？并且你们要知道，对于硅谷中的人们来说，没有什么能比直接告诉他们无法做到更能激发他们的灵感了。我们曾经坚信 Jeff 的愿景，并且 Jeff 对他的愿景有什么清晰的规划。以及，我真正产生共鸣的是以客户为中心。他说，“不要构建技术给客户，客户需要个性化的解决方案。”

**07:45** - _Saron Yitbarek_

这就是客户优先的理念。它激励着 Jeff Hawkins 自己雕刻了小工具大小的木头块。

**07:54** - _Rob Haitani_

因此，他想把这个东西放进口袋中，这样它们就可以参加会议。并且他有一支木制的小笔，然后他会假装自己在尝试模拟这种体验。因此，我们会假装在它上面写点什么，并且人们会用奇怪的表情看他。Jeff，你知道的，因为你正在一块木头上写东西。我认为这使他对这种东西有了深刻的领悟，即它究竟是什么样，以及体验是什么样的。


**08:16** - _Saron Yitbarek_

那个小木块启发了一些核心设计标准。首先，它的大小必须适合放入T恤的口袋。其次，它的售价必须低于300美元。最后，它写东西必须比纸和笔更快。你可以立刻打开并使用它。下面 Ed 和 Rob 将会把 Palm 的设计方法与竞争对手的进行比较。

**08:41** - _Ed Colligan_

其他所有人都在试图建立这种独立设备，因此他们说：“噢，我们需要扩展卡来增加内存。” 或者他们会说：“我们不得不增加一个键盘。” 并且，基本上我们会说：“不，我们将会把这种设备挂在PC上，并且我们将会立即同步PC和这种设备之间的信息。”

**09:00** - _Rob Haitani_

Jeff 则是一个持完全相反观点的人。他说，您要解决的问题是它太慢了。那么，传统的观点就是增加一个更快的处理器。他则采用了其它的方法，即，如何使它对客户来说更快？这不仅与硬件有关，而且如果你可以将软件优化的既微小又轻量级，那么这将会成功。然后产生自身的螺旋效应：体积越来越小，重量越来越轻，电池也越来越耐用。因此，我们开发出了这种精简步骤以及对效率至关重要的设计哲学。

**09:37** - _Saron Yitbarek_

他们甚至给他们的设计哲学起了个名字：“Palm 的禅”。 他们编写了整个设计导言以及所有内容。设计 Palm OS 平台过程中所涉及的新概念和新的思维模式则与大型机器的不同。对于PC来说，特性越多越好。但是掌上电脑则是另一种生物。根据Palm的禅的定义，掌上电脑应该与用户有关。功能应当突出重点，并且设备应当可以在任何地方使用。

**10:11** - _Rob Haitani_

How do you fit a mountain into a teacup? You want to find the diamond in the mountain and put that in the teacup. The purpose of a design for a small screen is not to take a desktop PC, full-functional design, and cram it and miniaturize it. It was to take the nuggets that you really needed at any time and put that on the screen. And the way we addressed that was, we literally would step through every task and say what absolutely has to be on the screen.

**10:41** - _Saron Yitbarek_

Reducing the amount of buttons on any given page allowed for a smaller screen, and Rob's team drastically reduced the number of taps it took to execute function.

**10:52** - _Donna Dubinsky_

He literally would go through every screen and every function and see how he could reduce the taps. An example I like to use is that rather than three-tap—turning on a device, hitting a calendar app, hitting the date for today—this was one of the most common things you wanted to do. What if you could just press one button, and this button would turn on the device, take you to the calendar app, and show you today? It was a “today button.” And now, again, these sorts of things seem obvious, but at the time, this was quite radical. That was not how you interacted with devices. So, that took tremendous coordination between the hardware and the software.

**11:35** - _Saron Yitbarek_

Within 18 months, Palm had done the seemingly impossible. They had a prototype with beautifully synchronized hardware and software. And they'd done it with only $3 million. But there was one problem. It was their last $3 million. Palm had an amazing new handheld computing device, and they were flat broke. The Palm team's hail-Mary solution to keep on financing their new product was to sell the company to US Robotics in 1995. It was the only way they could get this new connected organizer, which they dubbed the PalmPilot into the hands of customers. And they knew there'd be customers. Here's CEO Donna Dubinsky, remembering what happened when Jeff Hawkins unveiled the “PalmPilot” at a tech conference.

**12:37** - _Donna Dubinsky_

We had Jeff up there on the stage, showing the device, but the moment that was the most powerful, and that got us a near standing ovation was, he brought out the cradle, and he put the device in the cradle, and he pressed the button. And you could see on the screen it synchronizing with the PC. And that blew people away. And they just spontaneously applauded. So it was very exciting to see how they got the core value proposition of what we were trying to sell.

**13:13** - _Saron Yitbarek_

Palm's goal at that launch was to convey to people how simple the device was to use. But they didn't have a big budget to produce their reveal. So, they got creative.

**13:24** - _Donna Dubinsky_

We came up with this crazy idea to have our mothers come, and help us launch it. So we had my mom, Jeff's mom, and Ed's mom. They had little hats we made up that said “Moms for Pilot.” They had little pins that said “My daughter's Donna,” “My son is Ed,” or whatever. And we had them take orders for Pilots on the spot. I bought my Pilot from Jeff's mom, or from Ed's mom, or whatever. To this day, people stop me and say, "I bought my Pilot from your mom." It was really, really fun. They had a blast, and it made for a memorable launch.

**14:06** - _Saron Yitbarek_

What the moms were signing orders for was a huge step forward in handheld computing. But keep in mind, this is happening in 1996. Ed Colligan and Rob Haitani again.

**14:18** - _Ed Colligan_

The product ran on two AAA batteries, for a month, ok. It had 128K of memory. You've probably never heard a K of memory. It had a display screen that was a black and white, you know, display.

**14:38** - _Rob Haitani_

We had a screen that was 160x160 pixels, which is microscopic. I mean, I've designed icons almost that size. So we had a very low-powered processor, and a very small amount of memory. So it had a 16 megahertz processor, 128K of RAM, and we had to make an operating system work under those constraints. Low-powered screen. It was not color, it was not even grayscale. It was a monochrome, 160-pixel screen, and then below it, we had a digitizer that was not a screen, but it was a digitizer, so you could write on it.

**15:16** - _Saron Yitbarek_

Palm added its handwriting recognition software, called Graffiti to the PalmPilot. Remember, that it didn't have a keyboard. If you wanted to write something on it, you used a stylus.

**15:29** - _Rob Haitani_

You wrote on a rectangle at the bottom, and you wrote letters on top of each other, and you had to learn a simplified alphabet.

**15:39** - _Saron Yitbarek_

The technology was new and smooth, but it wasn't without its problems. For example...

**15:45** - _Donna Dubinsky_

We had been shipping for a little while, and we suddenly started getting catastrophic failures in the field. Devices that went off, and just couldn't go back on, and we started getting these into our service department, and had to try to figure out what was going wrong.

**16:02** - _Rob Haitani_

This is why startups don't typically make hardware. It's very difficult, and we had this problem where people were losing data, and we couldn't figure out what was happening.

**16:15** - _Saron Yitbarek_

The team combed through all their documentation, back through their many change agreements and orders. They tried tracing it back to something that changed with their process. Still, they couldn't figure it out. Out of frustration, Donna got everyone together.

**16:32** - _Donna Dubinsky_

I put all the senior people in one room and almost locked the door and said, "You're not leaving here until you figure out what's wrong with this thing. Why is this happening?"

**16:41** - _Saron Yitbarek_

Eventually, the team realized there'd been a tiny change inside the machine, but not the kind you'd expect. It had nothing to do with the hardware components at all.

**16:53** - _Donna Dubinsky_

You know how when you take a battery cover off, or you put in batteries on a device, so the inside cover there, somebody added a sticker with some kind of a warning or something.

**17:03** - _Saron Yitbarek_

The source of this giant headache was a little warning sticker that had been added to the underside of the battery cover.

**17:11** - _Donna Dubinsky_

That sticker caused friction with the batteries, and they could get depressed in a way that disconnected the power. And there had been a software patch that had been loaded on, and that patch was lost when the power was disconnected.

**17:27** - _Saron Yitbarek_

The hardware team swapped out connectors for springs to bolster the batteries, a super-simple fix for a catastrophic failure.

**17:35** - _Donna Dubinsky_

The good news was it was all synchronized, so it was all backed up. And you realized that for people, it's a real light-bulb moment. The data is the value, not the device.

**17:49** - _Saron Yitbarek_

Maybe you're listening to this podcast on a smartphone right now. Take a look at it. Your phone is light-years ahead of those old PalmPilots. And yet, the basics of what you're using were all there in the Palm. Chris Dunphy was Palm's Director of Competitive Analysis.

**18:10** - _Donna Dubinsky_

It was this kind of amazing golden age. Palm launched to the market in 1996, with the PalmPilot, and it was the buzz everywhere. It was the cool thing to have, this little thing in your pocket that was a portable brain, and Palm was smart enough that they'd put out a developer SDK as kind of, almost, a side effect, and that took off. All these little niche markets had really cool little apps popping up for them. From everything from doctors to knitters. And people were in love with their devices, in love with their apps.

**18:43** - _Saron Yitbarek_

There was an existing community of developers making similar apps for Mac's desktops, and they hopped over to build an app ecosystem for Palm.

**18:52** - _Chris Dunphy_

A lot of the original Palm developers weren't large companies. They were just small hobbyists who were doing projects in their spare time. They had some personal passion project, and their minds exploded when they started thinking, what is a computer, and a screen that you carry with you all the time? And it becomes an extension of your mind. And so many people had so many great ideas of how to take advantage of that software development kit, and write really, really cool things. And, it was really groundbreaking.

**19:18** - _Donna Dubinsky_

I mean, I know a lot of people think Apple invented the App Store, and the idea of apps on handheld, but actually the very first PalmPilot had a very early app store. It was a third-party app store, and very early developers who came in and did all sorts of creative applications that again, people could just sync onto their device.

**19:37** - _Saron Yitbarek_

The plan was to sell 100,000 units in the first year. And for the first six months, sales were stable. About 10,000 units a month. But then, things started to skyrocket.

**19:50** - _Donna Dubinsky_

And in fact by 18 months, we sold a million units, which was the fastest new product growth in American history at the time. I mean it was stunning growth. A million units in 18 months.

**20:01** - _Saron Yitbarek_

Palm had created an entirely new category of hardware. And the spoils were, theoretically, theirs for the taking. But then, unexpectedly, Palm's parent company, US Robotics was sold to another company, called 3Com. And the head of 3Com, who was influenced by the Microsoft business model, decided to license the Palm OS to companies that wanted to create PDAs of their own.

**20:29** - _Donna Dubinsky_

And obviously, it was a strategy that has succeeded very well from Microsoft in personal computers. We didn't think that was the right strategy for handheld computers. We felt they needed to be highly integrated devices, but they consistently felt that that was the wrong decision, and that what we should do is license the OS to all commerce. And we disagreed with that.

**20:53** - _Saron Yitbarek_

They believed in their vision. And so, right after they helped their parent company revolutionize the market, Jeff Hawkins, Donna Dubinsky, Ed Colligan, Rob Haitani, and others left Palm to form a new company. They called it Handspring. There, they would license the software they'd created, Palm OS, and load it onto their own handhelds. They had built a giant. And now, they were going to try to take it down, David-and-Goliath style, using its own OS. In 1999, the newly formed Handspring, free from those old parent companies released its own hardware, the Visor line of PDAs. And they ran on Palm OS. Ed Colligan remembers its public reception.

**21:48** - _Ed Colligan_

And sure enough, we took like 25% of the market, almost overnight.

**21:53** - _Saron Yitbarek_

Palm's hardware was hit by that move. So ironically, 3Com spun it off into the independent company the team had hoped for. In the meantime, the Palm OS was running on 90% of all handheld computers, not too shabby. In fact, for a short period, Palm was worth more than Ford and General Motors combined. People thought it'd become the next Microsoft. Meanwhile, Handspring had its own plans.

**22:23** - _Donna Dubinsky_

By the time we started Handspring, we started realizing that these devices ultimately would be communications devices and we built it with a hardware slot and the hardware slot was specifically with the idea to be able to experiment and integrate any kind of communication things—put in a pager card, put in a voice card, put in whatever, and that we would learn from that, and learn how to integrate communications and what would be important in the space.

**22:51** - _Ed Colligan_

We saw the smartphone coming, we saw that these things were all going wireless and we decided we wanted to figure out how to create that integrated device of both the PDA and the phone.

**23:07** - _Saron Yitbarek_

So Handspring got to work creating a smartphone. In the process, they replaced the stylus with the keyboard and named their new creation the Treo. While all this was in progress Jeff, Donna, and Ed met with another tech entrepreneur doing interesting things in the space. A guy by the name of Steve Jobs.

**23:28** - _Ed Colligan_

At that meeting, Steve got up on the board and drew out a Macintosh and he had all these things like photos and video and other things as satellite things off of the Macintosh and he said, "Our strategy is the Macintosh is going to be the center of everything and all these things are going to pivot around it." And that was iTunes, iPhoto, whatever. Right? And Jeff said, "Nope, that's not how it's going to work. How it's going to work is there's going to be a handheld computer and all these things are going to pivot off of it."

**24:05** - _Saron Yitbarek_

We know how this all turned out. Jeff Hawkins’ vision was actually closer to the truth, but at the time, early 2000s, Jobs was skeptical. The whole industry was skeptical.

**24:18** - _Ed Colligan_

I used to go into Sprint and Verizon, and these guys, and try to convince them that smartphones were going to be something. I know it's hard to believe today, but literally we'd sit down in meetings and they're like, eh, these new-fangled devices or you know ... who's going to do email on something in your pocket. And I'd go, "Well, I really think it's going to happen."

**24:40** - _Saron Yitbarek_

But while they waited for the world to catch up, they had another more pressing problem. It threatened the future of Handspring, Palm, and just about everything. In 2001, the tech bubble burst, stocks plummeted, money was suddenly scarce and investments dried up. So in another hail-Mary, this time to manufacture the Treo, Handspring merged back into Palm. I know all the back and forth is making me a little dizzy, too. The Treo became Palm's powerhouse product and the most popular smartphone on the market. But of course by that point, the Palm OS had started to show its age. New players had entered the market. Companies like RIM with its Blackberry.

**25:29** - _Saron Yitbarek_

Wireless was becoming a thing and experts seriously doubted whether the Palm operating system was a good fit for the next generation of devices. So in 2005, Palm shipped its first Treo without the Palm OS. They built that Treo around Windows mobile. By 2007, Palm had become a hardware company with no operating system of its own. The future that the Palm team wanted to build seemed to be rolling on without them.

**26:03** - _Saron Yitbarek_

Palm needed help and they got it in the form of John Rubinstein, the man who developed the iPod at Apple, just as Apple released the iPhone in 2007, Rubinstein came on board at Palm as their new head of product development. Two years later, the Palm team had a new device, the Palm Pre and a new OS called Web OS. They launched at CES in 2009. Some called it the best tech keynote ever. Here's Ed Colligan onstage at the event.

**26:40** - _Ed Colligan_

And it's called the Palm Web OS and we're very, very excited to bring it to you today. It was built with developers in mind. The whole thing is built on industry-standard web tools. If you know HTML, CSS, and JavaScript, you can develop applications for this platform.

**27:03** - _Saron Yitbarek_

No one had ever seen anything like Web OS, it laid the groundwork for the whole smartphone experience we take for granted today. In fact, iOS and Android gleaned a lot from its features. Features like multiple synchronized calendars, unified social media and contact management, curved displays, wireless charging, integrated text and web messaging, unintrusive notifications. You could upgrade it easily just by putting it into dev mode and you could receive over-the-air updates. Web OS was an amazing achievement that no other company could match. Unfortunately, it wasn't enough.

**27:46** - _Ed Colligan_

I think we did a phenomenal job with that, but it was just too little, too late, because at that point Apple had launched the iPhone. They executed really, really well and so all power to them, but I think they were hugely influenced by what we had done and to this day, I mean until, like, OS X or whatever on the iPhone, that was the first time they'd actually caught up with all the features that were in the Web OS.

**28:12** - _Saron Yitbarek_

But Ed thinks the real killer was another phone.

**28:15** - _Ed Colligan_

The killer blow was Google and Android and their ability to not have to make money off of it, other than search.

**28:24** - _Saron Yitbarek_

Google basically gave Android away for free. It was a problem for Microsoft's Windows phone and for the Palm pre/Web OS combo.

**28:34** - _Ed Colligan_

And we did not have that business model, and it just hugely undermined us and, and there was really no way to recover from that.

**28:48** - _Saron Yitbarek_

After creating a whole new tech category with the PalmPilot, dominating mobile software with Palm OS, building the first smartphone, the Treo, reinventing mobile OS with Web OS, after all those innovation and iterations, Palm was sold to HP in 2010 and then later to LG. In 2012, HP released open Web OS built on top of a Linux kernel.

**29:18** - _Saron Yitbarek_

Once it was open source Web OS became the underlying OS for tons of other smart devices, TVs, watches, and the Internet of Things. And that old debate over fusing hardware and software, well, I'll let Donna Dubinsky settle things.

**29:36** - _Donna Dubinsky_

They're virtually indistinguishable from each other. You can't have great hardware and terrible software and you can't have great software and terrible hardware. The question is almost nonsensical. They have to be together. You know, you carry these things on you all the time. It's a highly integrated device. People don't even know where the hardware ends and the software begins and that's as it should be.

**29:58** - _Saron Yitbarek_

In Jeff Hawkins’ case the hardware and the software began with that small block of wood tucked away in his shirt pocket. That simple block of the right shape and size has launched a fleet of millions, perhaps billions, of smartphones 25 years later.

**30:21** - _Saron Yitbarek_

Command Line Heroes is an original podcast from Red Hat. Go to our website for some amazing bonus material we dug up on Palm and Web OS. [Redhat.com/commandlineheroes](https://www.redhat.com/commandlineheroes "redhat.com/commandlineheroes"). And hey, while you're there, sign up for our newsletter. I'm Saron Yitbarek. Until next time. Keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-4/smarter-phones

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/KeaneQy)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
