[#]: collector: (bestony)
[#]: translator: (guevaraya )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 7: The World of the World Wide Web)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-7/world)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

代码英雄: 第7季: 万维网世界
======
**00:04** - _Archival Audio_

从<ruby>乔治亚州<rt>Georgia</rt></ruby>到<ruby>帕罗奥图<rt>Palo Alto</rt></ruby>,从<ruby>奥斯陆<rt>Oslo</rt></ruby>到<ruby>新加坡<rt>Singapore</rt></ruby>，有大量的信息在互联网上以醒目的，易于获取的形式免费分享开来。一个全球性的电子商务正在搭建起来。人们聚集在这里互相交流，同时寻找他们想要的信息。这里也太...

**00:30** - _Saron Yitbarek_

在 1995 年，网络世界已经到来。但是国际化的电子商务还没有按照同样一个形式在世界各地建立。你可能知道的<ruby>威廉姆·吉布森<rt>William Gibson</rt></ruby>的名言，“未来已经到来，只是它还没有打开。”这是在90年代各个国家加入数字革命竞赛的真实写照。当时，美国用户已经有9%在线，而西欧和亚洲仅有2%的用户已经访问过因特网。

**01:07** - _Saron Yitbarek_

在一些历史里，因特网描述为一个发明，然后打包起来出口到其他国家。这个一个卡通式的国际化小镇，所有人都到这里来玩，但是实际上比这个比喻更复杂。所有国家的人都有自己的经济，文化和政治形态，这会在根本上改变他们在线形式。

**01:34** - _Saron Yitbarek_

我是 Saron Yitbarek，这里是代码英雄，一个来自红帽的原创播客。我们节目的整季都贡献给了关键那一年，1995，而那时的早期网络如 <ruby>阿帕网<rt>APPANET</rt></ruby>和 <ruby>美国国家科学基金会网<rt>NSFNET</rt></ruby> 都已经给万维网让位了。但当我们讨论如何迁移互联网生活，我们总是从美国人的角度考虑，实际上不同国家接入互联网和万维网有不同匝道。从这集开始，我们将这个话题分为三个子集：我们将访问三个不同的国家去学习他们在1995年是如何构建线上未来的。

**02:19** - _Saron Yitbarek_

让我们开始我们的时间旅行到1995年的法国。互联网技术传播到法国，<runy>新西兰电信<rt>Telecom</rt></ruby>，电信巨头也就是现代熟知的 Orange 公司非常不爽互联网的到来。 一个高管甚至告诉记者，互联网是被禁止的，为什么呢？因为法兰西已经有了自己的互联网，非常感谢。

**02:50** - _Julien Mailland_

我是伴随这个叫 Minitel 的系统长大的。

**02:53** - _Saron Yitbarek_

<ruby>朱利安·梅兰<rt>Julien Mailland</rt></ruby>是一名<ruby>印第安纳大学<rt>Indiana University</rt></ruby>的电信学副教授，但他在法国的70,80年代长大，他写过一本关于那个时代网络的书。这个书名叫 Minitel 也是法兰西互联网先驱的名字。

**03:13** - _Julien Mailland_

因此 Minitel 是什么呢？Minitel是一个由法国邮电部在1983年创建并大规模应用的计算机系统。

**03:29** - _Saron Yitbarek_

你去当地的邮政局，他们会给你一个叫 Minitel 的小终端设备。想象下这个很小的桌面计算机带有一个小键盘和猫，这些都是免费的，你把它带回家，插进你的手机，瞧，就可以访问 Minitel 网络了。

**03:52** - _Julien Mailland_

很早的时候，在80年代中期，在法国所人员都可以网上聊天，网上商务，在线获取任何信息，但除过与世界其他沟通，值到90年代才解决。

**04:13** - _Saron Yitbarek_

现在，在你准备发推文纠正我的说法之前，是的，美国已经有了<ruby>BBS公告板<rt>bulletin board services</rt></ruby>，其他国家也有了类似系统。英国的Presto，德国的 BTX，但是在1980年代，没有国家它的网络像法国的 Mintel 那样发达。几百万的 Minitel 终端已经被安装，粗略估计大约一半的法国人当时都在使用它。 

**04:41** - _Julien Mailland_

很多人都是在线的，这些能够获取所有这些服务，而这些服务其他地方在1995以后才有。

**04:51** - _Saron Yitbarek_

这是如何发生的呢？必然性在于发明之父。1970年，法国的老旧模拟电话网络处于混乱状态。新的线路被本地叫PPT的一个公司建立中，他们可能要花了很多年来铺设新线路。

**05:09** - _Julien Mailland_

这基本是一个大灾难。这个根本不是你想象中一个大国的该有的范。

**05:16** - _Saron Yitbarek_

同时，美国在通信领域的主导作用一直越来越明显。

**05:22** - _Julien Mailland_

我想法国一直很关注美国文化的主导地位，在战后人们称其为可口可乐化。

**05:32** - _Saron Yitbarek_

因此法国实际上有两个问题.他们不得不更新他们摇摇欲坠的电话系统，他们也必须阻击美国人。解决这两个问题的方案便是将电话网络数字化。

**05:46** - _Julien Mailland_

这儿有一份1978年非常重要的报告，“社会计算机化。”我们可以通过创建一个连接到电话网络的计算机系统来解决我们的问题，那就是 Minitel。

**06:04** - _Saron Yitbarek_

通过向每个法国人免费的分发 Minitel 系统，你就可以占领市场。从而创造一个巨大的国内的内容和技术需求市场来对抗美国公司在其他地方的主导地位。同时，法国的电话网络也开始数字化。Minitel 在1982开始在国内繁荣发展。法国市民享受各种美国多年还不能享受的网络服务，有聊天室，电子商务和网上银行。

**06:41** - _Julien Mailland_

那时你也可以看到家庭互联，智能家居。你可以连接你的家庭温度计，你的录像机，你的庭院花洒到 Minitel系统。

**06:56** - _Saron Yitbarek_


在我看来，老实说，在法国给任何都想要的人免费计算机，用公共基金这种行为就是一种扼杀。创造一个巨大的平台，国家一夜之间就破产了，而一个私营公司完全可以把它做出来和并去创新。他还有一个叫 Minitel kiosk 商城，这个和今天的苹果商城还是有点不一样。因此到1995年，你可能认为这个难以置信的 Minitel 挽留过会在地球的各个地方铺展开来。但实际上...

**07:30** - _Julien Mailland_

出口的努力惨败。我想到1995年，法国政府已经放弃了出口 Mintel 系统。

**07:40** - _Saron Yitbarek_

其他国家正在尝试开发他们自己的系统。那些其他国家没有像法国那样投入百万的免费终端给国民。没有巨大的公共资金的投入，Minitel 系统也没有一点意义。

**07:59** - _Julien Mailland_

Minitel 真的很成功的，但是没有真的在其他国家复制成功的一个原因是国家政府的干预。我想这也是为什么 Minitel 没有出口海外的主要原因。

**08:13** - _Saron Yitbarek_

另外之前是有尝试将 Minitel 带到美国。在1991年，一个叫 101在线的公司来到<ruby>圣弗朗西斯科<rt>San Francisco</rt></ruby>

**08:23** - _Julien Mailland_

这是一个错误。他们将1983年的终端设备带到1992年的大湾区。很明显是无济于事。

**08:36** - _Saron Yitbarek_

让我很好奇的是<ruby>梅兰德<rt>Mailland</rt></ruby>的回答。当我问及 Minitel 最终失败的原因时，没想到是这样的回答。

**08:45** - _Julien Mailland_

我不认为 Minitel 是完全失败的。他是出口失败了，他在国内没有失败。反正在国内发展非常成功。当你想象一个国家已经使用网络20年了，而这之前美国人还只是听说有互联网，而这恰恰是一种成功。

**09:08** - _Saron Yitbarek_

我们已经认识当今互联网的概念意味着什么。万维网意味着要覆盖地球的一个世界网络，但 Minitel 的故事和法国超前的探索提醒我们网络化的国家还去其他可能。讽刺的是，当美式网络来到法国，超前探索使 Minitel的谢幕为美式互联网创造了一个平滑的过渡。在2012年Minitel自己关闭了，因为它无法发展为网络所具备的全球覆盖力量。也许这是它的命中注定。他的美在于，在恰逢一个需要变迁的时代,它振兴了一个国家。我和<ruby>梅兰德<rt>Mailland</rt></ruby>在一起，我们认那是一种成功。

**10:06** - _Saron Yitbarek_

好的，我们下一站飞到哪里呢？让我们飞到世界的另一边中国，1995他们是什么样子的呢？中国已经有<ruby>中国教育和科研信息网<rt>CERNET</rt></ruby>，它已经连接了他们的高效科研机构，但是他们渴望和全球的科研人员建立联系。这样做就需要接入到美国主干网来路由到其他国家。开始的时候，1995年开始 64,000 条线路通过电话网络从北京和上海到美国网络为公众提供网络服务。但是这样的线路太冗长了。中国的政府当局一直希望直接接入互联网，但是美国鉴于两国的政治紧张曾一直拒绝接入。因此接入的压力越拉越大，一个来自自然科学基金会的，国际互联管理项目开始提供一点希望。 <ruby>斯蒂文·戈尔德茨坦 <rt>Steven Goldstein</rt></ruby>是这个项目的负责人。

**11:16** - _Steve Goldstein_

I was able to travel pretty much around the world and work with the academic networks of other countries, to help connect them to what was at that point, at least in the early 90s, pretty much the core of the internet, which was the NSFNET, National Science Foundation Network.


**11:36** - _Saron Yitbarek_

Not a small job. Goldstein describes how the actual connections were made.

**11:42** - _Steve Goldstein_

The physical connection can be satellite, or it can be copper, or later on it could be fiber. It could be acoustic or can even be smoke signals. It doesn't matter. It's got to be some way of transmitting that information physically. But once that comes in, it's translated to another way, or protocol, that the routers recognize. And then the routers route, or route that signal, through the network that came into a point of presence, usually at one of the NSFNET regional networks, which will then connect it to the NSFNET backbone and thereby to all the other regional networks.

**12:23** - _Saron Yitbarek_

They were especially eager to build connections to research centers around the globe. Goldstein himself lobbied for the creation of the ICM. In 1991, a partnership with Sprint made it possible.

**12:37** - _Steve Goldstein_

Sprint at that time was just getting into internet business, and they saw this as an opportunity. And actually they zero-bid the solicitation, meaning that they said, "Okay, we'll do it. No charge." Sprint turned out to be a marvelous partner for the 5 years of the ICM project. They always bent over backwards to make things work.

**13:03** - _Saron Yitbarek_

Goldstein reminded us these international connections weren't blazing fast. When they set one up for Poland, for example, it was 19.6 kilobits per second.

**13:15** - _Steve Goldstein_

I was in one of their universities and they let me sit down to read my mail. And I gave the instruction, include, which meant download all my mail. And that was a stupid thing because there were 200 messages and the whole country was only at 19.6 kilobits per second. And I just clogged up their entire line.

**13:36** - _Saron Yitbarek_

Today, Poland's connected at tens of gigabits per second, but that gives you an idea where these links to the larger world began. The ICM started arranging connections to the NSFNET for dozens of countries, even France, despite any hopes that Minitel would take over the world. But for years, China wasn't allowed to connect. And remember China didn't yet have the ability to build a global network of their own. In fact, every country on the planet needed that NSFNET backbone to reach outside their own borders with a TCP/IP connection. Most of those regional networks were academic and they were eager to access a series of other academic networks. For example, there were 280 universities in America alone that were tied to the NSFNET. Meanwhile, access to foreign academic networks was a huge incentive for the National Science Foundation, too. Despite those political hurdles, American academics were very interested in connecting with their Chinese counterparts.

**14:44** - _Steve Goldstein_

There were some key institutions in that country that wanted to collaborate, sometimes in almost real time, with sister institutions in the United States. So, for example, there was the Institute of High Energy Physics near Beijing, that wanted to work on the high-energy physics programs, which were international—involve the United States, involve Europe, and so forth. So it was a matter of collaboration. So that connection was warmly greeted from that point of view.

**15:16** - _Saron Yitbarek_

Championing the idea of China's connection to the global network was computer scientist, Qiheng Hu, speaking here with the Asia Internet History project.

**15:26** - _Qiheng Hu_

Chinese science and technology people, there is a keen desire for the cheaper communication and the transmission of the big amount of scientific data during their scientific cooperation with their overseas cooperators. So that is the major reason why China at that time has such a motivation to acquire the internet.

**15:58** - _Saron Yitbarek_

In 1994, Hu traveled to Washington D.C. for a committee meeting and made a special side trip to see the chair of the NSF, Neal Lane. She made the case that China had to be connected to the NSFNET, and it happened. On April 20, 1994, China became connected to the world wide web. Goldstein remembers Hu being a strong advocate for Chinese sovereignty, despite their need to connect on a shared network.

**16:28** - _Steve Goldstein_

At one point, she had asked, "Well, okay, now can we connect?" I think I answered, and I said, "Yes, but will you agree that any academic person in China can use the link, not just members of the Communist Party." And her answer was, "Well, do you have such restrictions in the United States?" And she caught me. I had nothing to say. I said, "Okay, you win."

**16:54** - _Saron Yitbarek_

There was a lot at stake for China, and arguably, it wasn't just about scientific collaborations. Gianluigi Negro, a professor at the University of Sienna, researches the history of the Chinese internet. He told us that connecting with the NSFNET was part of China's larger movement toward openness.

**17:15** - _Gianluigi Negro_

At the time, China started to literally be more connected there, from not only the economic point of view, but also the political one. And this is very important because between the end of the 80s and the beginning of the 90s, there were a lot of projects that supported the telecommunication industry development in China.

**17:37** - _Saron Yitbarek_

Opening up economically and opening up academically, went hand in hand. The World Bank began making enormous loans to China, helping them develop their networks. 1994 saw decades worth of change, suddenly happen once that day when Madam Hu's request was granted and the NSF connected China to the internet.

**17:58** - _Gianluigi Negro_

For the first time, China was connected to the TCP/IP internet connection. So, this is very important from an infrastructure point of view.

**18:11** - _Saron Yitbarek_

The Chinese internet was never going to be the same as the American internet, though. The so-called "great firewall" regulates what Chinese users can access. Sites like Baidu and Weibo dominate, instead of Google and Instagram. But Professor Negro reminded us that despite those differences, the Chinese internet parallels the American one in other ways.

**18:34** - _Gianluigi Negro_

Think about both the mentality or about the Chinese application, or the Chinese services. The management that they have, they think about Alibaba, although they have a very strong connection with the Chinese government, their business mentality is very, very close to the U.S. one.

**18:53** - _Saron Yitbarek_

This is a reality we see around the globe. While countries came online in their own way, and while every country's internet still navigates distinct politics and economic realities, there are also universals. The long work of creating a global networking infrastructure is about maintaining difference, while forging those common bonds. The internet we have today operates in that careful balance between universals and variations.

**19:26** - _Saron Yitbarek_

We've got time for one more stop. Let's head over to the Americas now, South America. Our final destination, Argentina. By the spring of 1995, they were selling their first commercial internet connections. Email and local networks were established by the early 90s. But connecting to the internet itself was a much larger challenge. We asked Christian O'Flaherty, Regional Vice President for Latin America and The Caribbean at the Internet Society, to talk us through those early days.

**20:02** - _Christian O'Flaherty_

International data links were not easy to get, very expensive. The bandwidth was low. There were a lot of impediments from, at the time, incumbents or monopolies for international data services.

**20:18** - _Saron Yitbarek_

In the early networking days that O'Flaherty's describing, the early 90s, there were a few nodes with international connections, but they were super expensive satellite connections. The general public didn't have access at all. Academics in Argentina were pushing for a more genuine connection to networks beyond their borders.

**20:41** - _Christian O'Flaherty_

It was mostly the pressure from those professors and researchers that were working in Europe and the U.S. and were using the internet in those countries. So when they came back to Argentina and other countries, they started looking for ways to get similar services.

**21:03** - _Saron Yitbarek_

You remember that monopoly O'Flaherty mentioned? That was an international company called Telintel. And O'Flaherty told us that in the 90s, Telintel was dragging its feet, delaying the arrival of an affordable internet.

**21:18** - _Christian O'Flaherty_

They didn't want to provide that service.

**21:21** - _Saron Yitbarek_

A truly online Argentina was never going to be possible until somebody got them connected in an affordable way. And there didn't seem to be a local solution. But physicist Emma Perez Ferreira was looking beyond their borders. She's considered the person most responsible for bringing the internet to the people of Argentina.

**21:42** - _Christian O'Flaherty_

She was a national pioneer and also a well-respected pioneer in the region. Emma was able to insist on many different areas of the government and elsewhere, and she was able to get this authorization to connect to the internet, getting service from whoever was able to provide it.

**22:08** - _Saron Yitbarek_

If Telintel wasn't going to step up, then she would. Since the 1980s Ferreira had been the Director of a network called RETINA, that connected academics at a regional level. But she saw the potential for her mission to grow in the 90s when America began providing the NSFNET's backbone to the world. Suddenly through that ICM project of Steve Goldstein's, it was possible for Argentina to patch into that backbone and join a global internet. She received authorization to create a direct link via Florida. O'Flaherty describes the collaboration with American partners.

**22:47** - _Christian O'Flaherty_

There was a lot of support and interest from different parties to help developing countries and in particular, Latin American countries, to connect to the internet.

**22:59** - _Saron Yitbarek_

Starting in 1992, the connection to the NSFNET ran through the city of Homestead in Florida using the PanAmSat satellite. The router was managed by Sprint and the National Science Foundation paid the management port fees.

**23:15** - _Christian O'Flaherty_

Many Latin American countries received support for equipment, and the port was provided free of charge. They facilitated the connection through training, and helped in getting our own IP addresses, and things like that.

**23:32** - _Saron Yitbarek_

But getting Argentina's institutions to step up, wasn't as easy as you might think, because unlike the situation we heard about in France, most authorities in Argentina didn't yet understand what the internet could provide.

**23:47** - _Christian O'Flaherty_

It was difficult to demonstrate that it was worth paying for those services for something that nobody knew about. So nobody used the internet when she was asking for funds and convincing the universities and the research institutions that it was worth spending the money that way.

**24:11** - _Saron Yitbarek_

Ultimately, leaders like Ferreira were able to tie Argentina's networks to America's NSFNET. Up until that time, less than 0.1% of people in Argentina were internet users. But those numbers started exploding once the NSFNET connection was made, and today, three-quarters of Argentinians are online.

**24:37** - _Saron Yitbarek_

We could keep on going. There are dozens of other stories we can't tell in a single episode. Every country had its own heroes, its own unique issues, when connecting to the rest of the world. Nobody's 1995 was the same.

**24:56** - _Saron Yitbarek_

Our 1995 season has been telling a story about how the modern online experience arrived. But we have to remember, history doesn't really happen that way, because these other stories and timelines were always running in parallel. And yes, 1995 was a dramatic shift point, when the world wide web started racing around the planet, bringing with it a certain sameness to the internet. But when we dig into our history, we remember that the networks we share actually live inside distinct cultures with their own distinct histories and definitely their own futures. 41% of the world is still not online, and over the next couple of decades, as billions more people join the internet, it can't be just about exporting some American tech. And it can't be about folding the world into one tidy version of events. It's going to be about the internet meeting every country's own ambitions and hopes.

**26:01** - _Saron Yitbarek_

You can learn more about how the internet came to France, China, Argentina, and other countries by checking out our bonus material at redhat.com/commandlineheroes.

**26:13** - _Saron Yitbarek_

Next time in our season finale, the dot-com bubble that began in 1995 is finally going to burst. We'll see what lessons were learned when the year 2000 turned the tech world on its head. Until then, I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. Keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-7/world

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
