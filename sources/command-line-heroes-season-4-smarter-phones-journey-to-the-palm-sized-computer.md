[#]: collector: (bestony)
[#]: translator: (KeaneQy)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 4: Smarter Phones: Journey to the Palm-Sized Computer)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-4/smarter-phones)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 4: 更智能的电话: 掌上电脑的旅程
======

**00:02** - _Saron Yitbarek_

在20世纪90年代早期，一位心灵手巧的软件开发者将一堆木头分割成不同尺寸的小木块。他仔细的比较了每个木块的重量，找到了一块口袋大小的木块，并把一个极小的显示器捆在这个木块上。随后，这名开发者将该木块放进他T恤的口袋中，并绕着T恤走，以便观察怎样才能让这个木块看起来像某种附加的设备。他开始想象，在不久的将来我们都会做相同的事情。如果你认为这位开发者的名字是 Steve Jobs，那么你就错了。他的名字是 Jeff Hawkins，曾合作创造了 PalmPilot 掌上电脑。当 IPhone 在2007年上市时，批评家们和竞争者们就曾经质疑智能手机是否能够成功。

**00:55** - _Saron Yitbarek_

十年后，问题则变成了一个人没有智能手机如何成功。智能手机无处不在，它们的 App 使我们能够做几乎所有的事情，并且它们的硬件也在不断的诉说我们是谁。但是就像主流的 IPhone 提升了我们的移动生活质量一样，其并不是一个促进因素。这便是早期掌上设备如何为智能手机铺路的史诗般的故事，并且也是一个一直坚持这种设备的可敬团队的故事。我是 Saron Yitbarek，这里是<ruby>代码英雄<rt>Command Line Heros</rt></ruby>，Red Hat 的原创博客。

**01:38** - _Saron Yitbarek_

智能手机这一概念从<ruby>星际迷航<rt>Star Trek</rt></ruby>三部曲时就已经存在了。在现实生活中，这一概念则在1984年时被解释成为手机。当时的手机还是十分笨重的，就像砖块一样，并且在20世纪90年代中仅仅只是变小了一点。对于 Zack Morris 来说，智能手机变得足够小则是在节目<ruby>救命下课铃<rt>Saved by the Bell</rt></ruby>中。但是此时它们仍旧被用作打电话。还记得打电话么？在移动手机上，没有任何“智能”的部分。但是与此同时，另一种技术则获得了关注，它就是 PDA，一种个人数字助理，即一种可以扮演你的个人信息管家的移动电子设备。有关这种设备的故事我们一会儿再说，但是在那个时候，科技产业更多的关注在个人电脑上。这个故事我们已经在第三集讲 Altair 8800 时学习过了。

**02:33** - _Ed Colligan_

每个人都存在思维定势，认为个人电脑是一种放在桌子下面的巨大的、米黄色的大箱子。人们无法想象你可以将个人电脑装在自己的口袋中。

**02:43** - _Saron Yitbarek_

在20世纪90年代早期，Ed Colligan 还是 Plam 公司市场部的<ruby>副总裁<rt>VP</rt></ruby>。这是一家由 Jeff Hawkins创建的初创移动软件公司。即那位口袋装着一块木头到处走动的人。

**02:57** - _Donna Dubinsky_

这是一个宏大的愿景。这也是计算的未来，甚至于作为手持式计算的个人计算的未来。并且，未来有关手持式计算机的交易将可能回超越桌面式计算机。

**03:11** - _Saron Yitbarek_

那是 Donna Dubinsky，Plam 公司那个时期的 CEO。

**03:15** - _Donna Dubinsky_

我知道今天我说这听起来像 “随你怎么讲，这就是合理的。”。但是，请相信我，在那个时期，这个并不是合理的。

**03:21** - _Ed Colligan_

我们不能理解为什么别人无法理解它。因为你知道的，这就是计算的发展趋势，对么？计算机已经从占一间屋子的大型主机变为微型计算机。微型计算机被误称为个人计算机，而不是桌面计算机。并且，我们看到了<ruby>摩尔定律<rt>Moore's Law</rt></ruby>发展的必然结果，即计算机越来越强大，但是体积越来越小。

**03:48** - _Saron Yitbarek_

Plam 公司着手开发适配PDA的，类似于 Casio 公司正在制作的信息管理软件--Zoomer 。这家公司也制作了一些可用于<ruby>惠普<rt>Hewlett Packard</rt></ruby>设备的同步软件。但是第一代PDA并没有突飞猛进。并且紧接着，在苹果公司的努力失败以后，整个个人数字助理的梦想似乎已经失去了存在的理由。例如 Newton ，即大，又笨重，并且软件运行速度太慢。但是 Plam 团队担心这种新的方式是否可以改变游戏规则。

**04:25** - _Donna Dubinsky_

我们最初讨论的是一个操作系统公司 GeoWorks ， 以及一家硬件供应商公司 Casio 。然而，如果你明白，就会知道产业结构发生的变化沿着我们指出的路径前进。即堆叠硬件对于手持式计算并没有意义。我们从中学到的构建这样的设备的正确方式是硬件和软件的高度集成产品。因此，从本质上讲，失败改变了我们的想法。

**04:55** - _Saron Yitbarek_

Palm 指出，如果他们可以构建他们自己的硬件，即可以运行他们软件的设备，那么他们也将会构建一款成功的 PDA。

**05:04** - _Ed Colligan_

不，实际上没有任何一款个人数字助理不是我们的任期。

**05:09** - _Saron Yitbarek_

哎哟，对不起，Ed。

**05:11** - _Ed Colligan_

We didn't like PDA. We literally positioned it as a connected organizer. We effectively tried to change the way people looked at it, from being a whole new device that you need to adapt to, to being an accessory to your PC.

**05:29** - _Saron Yitbarek_

When Ed says connected, he means connecting the device to the computer, not connected to the wireless internet. That wasn't happening yet, but even being able to sync your Palm device with your personal computer was a step above what the competition offered.

**05:46** - _Donna Dubinsky_

They didn't connect with anything, so if you had an address book in your Sion and your Casio Wizard, it had nothing to do with your address book on your computer. Instead of a standard handheld standalone computer, we positioned it as an appendage of your computer, a window onto your computer, a way to take a little piece of your computer with you, which put the synchronization function at the center of the positioning.

**06:13** - _Saron Yitbarek_

In addition to building a mobile organizer device, Palm wanted to pair it with a synchronization device that you could plug into your computer to update information.

**06:24** - _Rob Haitani_

Which seemed very intimidating at the time. There's 25 people, hardware is very... It's capital intensive, you need a lot of investments, you need time, you need procurement, and it was quite an intimidating challenge, frankly.

**06:40** - _Saron Yitbarek_

That's Rob Haitani, Palm’s product manager. And this was Donna Dubinsky’s challenge to Rob’s team.

**06:47** - _Donna Dubinsky_

And we wanted to create from scratch an operating system, application software, hardware synchronization software, any one of these was effectively a company. So, for a little company to take on all of that at one time, and have it all work together, was really audacious as I look back.

**07:14** - _Rob Haitani_

This is why people go to Silicon Valley. It's like, okay, you're going to create an entirely new industry. The people like IBM and Apple and Microsoft have failed at this. So, what makes you 25 people think you can succeed? And you know nothing inspires people in Silicon Valley more than telling them they can't do something. We believed in Jeff's vision, and Jeff had a very clear vision. And, what I really... what really resonated to me, was very customer focused. He said, "Don't build technology, build a solution for a customer."

**07:45** - _Saron Yitbarek_

It was that customer-first attitude that inspired Jeff Hawkins to carve himself that gadget-sized block of wood.

**07:54** - _Rob Haitani_

So, he’d carry this thing around in his pocket, and they would walk into meetings, and he had this little wooden stylus, and he would pretend that he was trying to simulate what the experience would be like. So, we'd pretend to be writing on it, and people would give him these funny looks cause he's, you know... you're writing on a piece of wood, Jeff. I think that really gave him some insights into what it would really... the experience would feel like.

**08:16** - _Saron Yitbarek_

That little block of wood inspired some core design criteria. First, it had to fit into a shirt pocket. Second, it had to have a price tag of less than $300. Third, it had to be faster than pen and paper. You could instantly turn it on and use it. Here's Ed and Rob comparing Palm's approach to design versus the competition’s.

**08:41** - _Ed Colligan_

Everybody else was trying to create this standalone device and so they said, “Oh, we need an expansion card for more memory,” or they'd say, “We have to have a keyboard,” and we basically said, “No, we're going to hook it to the PC, and we're going to synchronize the information between the PC and this device instantly.”

**09:00** - _Rob Haitani_

Jeff was a guy who took a completely contrarian point of view. He said, the problem you're trying to solve is it's too slow. Then the conventional wisdom is to add a faster processor. He took the other approach saying, well, how do you make it faster for the customer? It's not only about the hardware, it's about if you make the software slim and light, then that will succeed and then that will have its own spiraling effect of: that will be small, it'll be lighter, it will have longer battery life. So we developed this philosophy of stripping down the number of steps and being super critical about efficiency.

**09:37** - _Saron Yitbarek_

They even gave their philosophy a name: “the Zen of Palm.” They wrote a whole design manifesto and everything. Designing the Palm OS platform involved new concepts and new ways of thinking that were different from designing for bigger machines. With PCs, the more features the better. But handhelds are a different creature. According to the Zen of Palm, handhelds should be all about the user. Features should be tightly focused and the device should be usable anywhere.

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
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
