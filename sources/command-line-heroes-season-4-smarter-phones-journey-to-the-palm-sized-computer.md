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

影视作品中很早就出现了智能机的概念，比如<ruby>星际迷航<rt>Star Trek</rt></ruby>中的武器 tricorder。而在现实生活中，直到 1984 年，人们才把手机称作智能机。那时的智能机像砖块一样笨重，后来 90 年代智能机变得越来越小。到电视节目<ruby>救命下课铃<rt>Saved by the Bell</rt></ruby>播出时，主角 Zack Morris 已经可以随身携带。但这时智能机只用来打电话。还记得打电话么？所谓智能机上，没有任何“智能”的部分。与此同时，另一种备受青睐，那就是 PDA，一种个人数字助理，即一种可以扮演你的个人信息管家的移动电子设备。有关这种设备的故事我们一会儿再说，但是在那个时候，科技产业更多的关注在个人电脑上。这个故事我们已经在第三集讲 Altair 8800 时学习过了。

**02:33** - _Ed Colligan_

每个人都存在思维定势，认为个人电脑是一种放在桌子下面的巨大的、米黄色的大箱子。人们无法想象你可以将个人电脑装在自己的口袋中。

**02:43** - _Saron Yitbarek_

在20世纪90年代早期，Ed Colligan 还是 Plam 公司市场部的<ruby>副总裁<rt>VP</rt></ruby>。这是一家由 Jeff Hawkins， 那个揣着木块到处走的人，创建的移动软件公司。

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

它们并没有主动连接任何东西，因此如果你在你的 Sion 以及 Casio Wizard 中有一个通讯簿，那么在你的电脑上将不能对你的地址簿做任何操作。我们并没有把它定位为独立的标准手持设备，相反的，我们把它定位为电脑的一个附属物。一个你电脑之上的窗口，能够把电脑的一部分随身携带，这样的定位让同步功能成为核心。

**06:13** - _Saron Yitbarek_

除了构造移动备以外，Palm 公司希望它（PDA）有与其他设备配对的能力，比如说将其插入电脑就可以更新信息。

**06:24** - _Rob Haitani_

那时候要实现这样的目标非常困难。只有25个人，当时的硬件非常……昂贵，你需要许多投资，你需要时间，你需要采购，坦白讲，这是非常大的挑战。

**06:40** - _Saron Yitbarek_

听完 Palm 公司的产品经理 Rob Haitani 的分享。接下来再听 Donna Dubinsky 介绍一下他对 Rob 团队的考验。

**06:47** - _Donna Dubinsky_

我们既想设计操作系统、又要开发应用软件、还得研究硬件协同软件，每项都够一个独立公司喝一壶。现在回想起来，一家小公司，要同时完成这些目标，是非常大胆的想法。

**07:14** - _Rob Haitani_

这就是人们来硅谷的原因。在这里你可以颠覆整个行业。像 IBM、苹果和微软这样的公司都失败了，是什么让这 25 个人自信可以成功？要知道，对于硅谷人来说，没有什么比告诉他们无法做到某件事更能激励他们。我们坚信 Jeff 的愿景， Jeff 对他的愿景也有清晰的规划。实际上，最让我产生共鸣的是他们“客户至上”的理念。他说，“不要构建技术给客户，客户需要个性化的解决方案。”

**07:45** - _Saron Yitbarek_

正是顾客至上的理念激励了 Jeff Hawkins ，让他雕刻出了那个木块。

**07:54** - _Rob Haitani_

他把小木块放进口袋中，带着它参加会议。拿出木制的触控笔，模拟这种体验。我们假装在上面写字，人们会用奇怪的表情看他。Jeff，你知道的，因为他正在一块木头上写东西。我认为这使他有了深刻的领悟，关于使用移动设备的体验。


**08:16** - _Saron Yitbarek_

在小木块的启发下，我们有了一些核心设计标准。首先，它的大小必须适合放入口袋。其次，它的售价必须低于 300 美元。最后，它写东西必须比纸和笔更快。你可以立刻打开使用它。下面 Ed 和 Rob 将会把 Palm 的设计方法与竞争对手的进行比较。

**08:41** - _Ed Colligan_

竞争对手都在设计独立设备，因此他们说：“噢，我们需要扩展卡来增加内存。” 或者他们会说：“我们不得不增加一个键盘。” 而我们基本上在说：“不，我们把它连接到 PC 上，我们会快速的同步两者的信息。”

**09:00** - _Rob Haitani_

Jeff 总是一个有独到见解的人。比如他说，现在的问题是它运行太慢了。那么，传统的解决方案是换一个更快的处理器。他则采用了其它的方法，即，如何让用户感觉更快？这不仅与硬件有关，事实是如果你让软件也变得轻薄，那么它将会成功并产生螺旋效应：体积越来越小，重量越来越轻，电池也越来越耐用。因此，我们开发了精简步骤和效率至上的设计哲学。

**09:37** - _Saron Yitbarek_

他们甚至给他们的设计哲学起了个名字：“Palm 之禅”， 并且编写了设计宣言。设计 Palm 操作系统平台涉及到与设计大型机器不同的新概念和新思维方式。对于 PC 来说，特性越多越好。但是掌机则是另一种生物。根据 Palm 之禅的定义，掌机应该以用户为中心。功能应当更加聚焦，设备应当可以在任何地方使用。

**10:11** - _Rob Haitani_

这就好比，你不可能把整座大山装进茶杯，但你可以在上山找到钻石，把钻石装进去. 我们的设计目标不是把整个 PC 的完整功能压缩填充到一块小屏幕上，而是把用户任何时候都要使用的核心功能实现在上面。为了实现这个目标，我们几乎把所有的功能讨论了个遍，最后决定哪些必须留在上面。

**10:41** - _Saron Yitbarek_

因为减少了按钮的数量,所以屏幕可以设计的更小，与此同时 Rob 团队优化了操作流程，大大减少了点击次数。

**10:52** - _Donna Dubinsky_

他几乎亲自体验了所有的功能，绞尽脑汁的想要办法减少点击次数。举个例子：三击打开屏幕，点击日历 app,点击今天的日期，这是你最常做的操作。要是有一个“今日”按钮，点一下就会自动打开屏幕，打开日历并展示当前日期该有多好。这些显而易见的事情，在当时是相当激进的设计。人与设备交互不应该是这种模式。硬件和软件之间还存在巨大的协调空间。

**11:35** - _Saron Yitbarek_

短短 18 个月内，Palm 公司便完成了看似不可能的事情。他们有一个硬件和软件完美同步的原型机。而他们只用了 300 万美元就做到了。但这也是他们最后的 300 万美元，虽然他们有了令人惊叹的新型手持式计算设备，但他们濒临破产。Palm 团队为继续融资而采取的孤注一掷的解决方案是，在 1995 年把公司卖给 US Robotics。这是他们让这个新型设备(他们将其命名为 PalmPilot )面世的唯一途径。他们知道这很有市场。首席执行官 Donna Dubinsky 回忆起 Jeff Hawkins 在一次技术会议上发布 PalmPilot 时发生的事情。

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
