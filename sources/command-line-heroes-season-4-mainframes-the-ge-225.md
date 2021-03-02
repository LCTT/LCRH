[#]: collector: (bestony)
[#]: translator: (2581543189)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Mainframes: The GE 225)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-4/mainframes)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

《代码英雄》第四季：大型机: GE-225
======
**00:05** - _Saron Yitbarek_

让我们回到几十年前，回到 40 年代末、50 年代初，当时计算机行业有“白雪公主和七个小矮人”的说法。众所周知，“白雪公主”指的是 IBM，而<ruby>通用电气公司<rt>General Electric</rt></ruby>便是“七个小矮人”之一。这是一家偶尔生产定制机器，但从没在开放市场售卖计算机的公司。

**00:32** - _Saron Yitbarek_

通用计算机是 IBM 的地盘，而 IBM 是 GE 的第二大客户（第一是美国政府）。IBM 经常采购 GE 生产的真空管、电机、变压器和开关等设备，GE 时任总裁 Ralph Cordiner 对此非常满意。所以，每当 GE 的部门主管将计算机商业计划书提交到总裁办公室时，收到的答复都是封面上大写的橙色字母：RJC，Ralph Cordiner 一次又一次的拒绝他们。

**01:19** - _Saron Yitbarek_

事实上，在 Cordiner 担任 GE 总裁兼首席执行官的 13 年时间里，GE 的态度从未改变。尽管有研究指出，计算机的发展速度在电子行业领先，但 Cordiner 总是用愤怒回应挑战他底线的员工们。然而，一小群叛逆的员工看到了制造大型机的机会，他们不想错失这个机会。他们从没想过，大型机将拯救银行业，打开分时系统的大门，并催生出新的编程语言。在上一季，我们听了 John Kemeny 和 Thomas Kurtz 在<ruby>达特茅斯学院<rt>Dartmouth College</rt></ruby>创造 BASIC 的故事，了解到因为 BASIC 是解释型语言，早期的计算机没有足够的资源运行它。像 BASIC 这么好的点子，正等待着像 GE-225 这样合适的设备出现，让它大放异彩。这一章，让我们一起揭开那台差点被扼杀在摇篮中的大型机，鲜为人知的故事。这台房间大小的机器打开了新世界的大门，它鼓舞了 Steve Wozniak 和 Bill Gates 这样有远见的命令行英雄，鼓舞他们推动个人电脑革命，它的创造至今仍有意义。我是 Saron Yitbarek，欢迎收听<ruby>代码英雄<rt>Command Line Heros</rt></ruby>，Red Hat 的原创播客第四季：硬件设备。

**03:05** - _Speaker 1_

Adams 先生发现他的新支票账户很有用。与其他公司直接从<ruby>埃姆维尔国家银行<rt>Elmvale National Bank</rt></ruby>兑现不同，这个账号通过自己的银行兑现。与其他银行一样，这家银行把支票送到<ruby>邦储备银行<rt>Federal Reserve Bank</rt></ruby>去执行兑现。联邦储备银行正是为了处理每天来自数百家银行的数千张支票而设立的。

**03:29** - _Saron Yitbarek_

1947年，支票开始流行，大量银行工作人员的时间耗费在无穷无尽的支票当中。战后经济的蓬勃发展，更是让银行被铺天盖地的支票所淹没。为了腾出时间手工填写账簿，他们被迫下午2点就早早关门，但即使这样，他们仍然赶不上进度。他们迫切的希望，能有一台快速、强大的机器，让银行跟上商业发展的步伐。当时<ruby>美国银行<rt>Bank of America</rt></ruby>每天要处理数百万张支票。下面有请<ruby>西北大学凯洛格管理学院<rt>Kellogg School of Management at Northwestern University</rt></ruby>的教授 William Ocasio。

**04:12** - _Will Ocasio_

难以想象，如果银行没有电脑可用会是什么样子，特别是美国银行拥有这么多分支机构，银行会变成一个繁重的、文书密集型的行业。拥有这么多的信息需要沟通和处理，这么大的公司，有责任了解计算机才是未来的发展方向。

**04:39** - _Saron Yitbarek_

所以，1950 美国银行与<ruby>斯坦福研究院<rt>Stanford Research Institute (SRI)</rt></ruby>签约，希望找到自动处理所有这些支票的方法。SRI 花了五年时间构造了一台原型机，并将其命名为<ruby>电子记录会计机<rt>electronic recording machine accounting</rt></ruby>简称 ERMA。ERMA 有超过 100 万英尺的电线，8000 个真空管，重约 25 吨，每天可以处理 5 万笔交易。

**05:11** - _Saron Yitbarek_

美国银行希望 ERMA 马上投入生产。于是向电子制造商们发出<ruby>招标请求（ RFP ）<rt>request for proposal</rt></ruby>，让它们竞标。当然，所有人都认为赢家将是行业巨头，被称作“白雪公主”的 IBM。Baker 博士是通用电气电子部门的副总裁，他知道他的老板 Cordiner 不想涉足 IBM 的领域。也知道计算机是公司的禁区，但当听到美国银行 RFP 的风声时，Baker 看到了一个不想错失的机会。他找到了 GE 位于<ruby>帕洛阿尔托<rt>Palo Alto</rt></ruby>的微波实验室的经理 Barney Oldfield。在这个离 SRI 最近的地方向 Oldfield 提出了一个建议。下面有请<ruby>加州大学欧文分校<rt>University of California, Irvine</rt></ruby>的战略副教授 John Joseph。

**06:09** - _John Joseph_

我认为他是一位成功、进取的企业家，也是精明的经理和商人，他认为这是部门发展的巨大机会。

**06:27** - _Saron Yitbarek_

Baker 和 Oldfield 成功说服了他们的老板 Cordiner，这是一台定制的生产控制系统，不是通用计算机，生产它不会让 IBM 不快。并且向他保证，GE 不会涉足计算机行业。

**06:45** - _John Joseph_

我觉得 Cordiner 最终屈服的原因是，他给他们提出了一个附加条件：仅此一份合同，不要继续深入商用机市场，只能参与这一次竞标。如果能做到，那你们去竞标吧。

**07:08** - _Saron Yitbarek_

尽管 Cordiner 不对竞标抱有任何希望，但还是让他们着手进行 RFP。就让他们发泄一下自己的创造力吧。随后 Oldfield 把他们的提案送到旧金山的银行办公室，等待着他们的答复。

**07:26** - _Saron Yitbarek_

Then much to everyone's surprise, IBM pulled out of the race and, even more unexpectedly, GE's proposal rose to the top. Bank of America awarded them the contract. Not any of the other technology manufacturers—the underdogs got it. The underdogs at GE won the multimillion dollar contract. On April 9, 1956, B of A's board of directors accepted GE's proposal. Baker signed a $31 million contract without running it by his boss, Cordiner. This impossible project was becoming real. All Oldfield needed now was a place to build the ERMAs. And, oh yeah, an actual computer department.

**08:19** - _John Joseph_

Okay, so now they had to start putting it together. First of all, they actually established a computer department. Now, that seems like an obvious statement, but to create a new department at a big company like this, he was able to bring together the resources and the people to actually create a department within General Electrics. That was a big deal in and of itself.

**08:46** - _Saron Yitbarek_

Barney Oldfield became general manager of GE's new computer department. He set up the department to look like another GE department, the Military Systems Division, where they built special purpose computers. The 2 divisions could then be in competition with each other, and not in competition with IBM.

**09:06** - _Saron Yitbarek_

This was how the new computer department was meant to fly—under corporate's radar. In a way, GE's decentralized management style was kind of perfect for a stealthy operation like this. As long as departments were profitable, there really wasn't much oversight. No one would know what was going on.

**09:26** - _John Joseph_

Part of the backdrop here was that, in order to grow your little fiefdom in GE at the time, meant that you had to go out and look for opportunities for growth. There wasn't any corporate planning at the time. He was a go-getter, and saw this as a great opportunity. And I think he had the sheer will to bring the organization along because this was a huge, huge step.

**09:59** - _Saron Yitbarek_

The bigger challenge lay in where to locate the manufacturing facility. Up to this point, the Palo Alto group assumed they would move into a Stanford industrial park, but California had tough labor laws and high taxes. So it was off the table. GE decided on Phoenix instead. Maybe not the best place to attract experienced computer engineers, sure, but Phoenix had a major upside.

**10:26** - _John Joseph_

Now, the advantage to putting them in Phoenix was that it put them far away from GE. GE was headquartered in New York City at the time, so it was a case where I think it allowed them to happily operate under the radar of top management for a while to get up and running, because you know a lot of money was at stake. So it allowed them to do the skunkworks away from Cordiner.

**10:55** - _Saron Yitbarek_

Oldfield managed to put together a solid team of engineers out there in Phoenix. Bob Johnson, George Snively, Gene Evans, George Jacobi, among others. John Pivoden was in charge of the hardware. Henry Harold was the logic designer. And Jay Levinthal was the system architect. Holed up in what seemed to them like the middle of nowhere, the team got along surprisingly well. They were up to the task to build the ERMA under a shroud of secrecy, and it didn't hurt that they had a sense of humor about the whole thing. We found an old skit that the team performed, something they called Frontiers of Progress, and I think it shows you where they were at. Here's an excerpt.

**11:39** - _Speaker 2_

Well, here we are in Phoenix.

**11:41** - _Speaker 3_

Well, I see you finally made it. Welcome to the computer department.

**11:45** - _Group_

The what department?

**11:46** - _Speaker 3_

The computer department.

**11:47** - _Speaker 4_

What's a computer?

**11:49** - _Speaker 3_

Oh, it's sort of a turbine with Christmas tree lights that plays music.

**11:53** - _Speaker 5_

They're a kind of fast adding machine.

**11:56** - _Speaker 2_

We won't have to use one in accounting, will we?

**11:58** - _Speaker 3_

No, but we will have to give Van one to play with and pretend we're using it.

**12:01** - _Speaker 4_

Uh, what's a computer?

**12:08** - _Saron Yitbarek_

As far as Bank of America was concerned, a computer was something that could handle 55,000 transactions a day. It also needed to sort and distribute checks of all sizes and conditions. It needed to update customer accounts and balance operations. It needed a way to identify the checks, and Bank of America wanted not one, but 36, of these machines.

**12:34** - _Saron Yitbarek_

Early in the process, the team decided that the GE version of ERMA would be transistorized. In the '50s, transistors were more expensive than vacuum tubes, but they required less space and simpler connectors to the logic boards. So, each vacuum tube and flip flop would be replaced by two transistors, with some additional resistors and capacitors to hold it all together. The other big change to the original prototype was to make the ERMA a stored program computer rather than a hardwired machine. This would allow for a simpler machine design and easier modifications later on. Since most of GEs developers were on the hardware side, they needed to hire themselves a programmer. They chose a man who not-too-many years before had escaped Nazi Germany and had come to the U.S. as a refugee. His name was Joseph Weizenbaum.

**13:34** - _Saron Yitbarek_

Weizenbaum had programmed a G-15 computer at a company called Bendix. He even developed a pseudo machine programming language for it called Intercom 100. With no experience in banking other than cashing his own checks, Weizenbaum would now lead the micro programming team to write software capable of supporting the transistorized hardware. The team also programmed all the peripheral devices including the checks orders, and something they called the MICR reader. That stands for magnetic ink character recognition. You know that line of numbers on the bottom of your checks? That's MICR. Three sets of numbers that identify a bank account, a routing number and a check number, and it's still there on all your checks because of the work Weizenbaum and his team did out in Phoenix.

**14:28** - _Saron Yitbarek_

Cool side note. Weizenbaum would later go on to be considered one of the founding fathers of AI (artificial intelligence). On December 28, 1958, almost 3 years after GE won the contract, the San Jose Branch of Bank of America installed the first completed ERMA machine. The system could only handle 100 transactions a day, but it was a step in the right direction. The next step, get it to process the required 55,000 transactions a day.

**15:04** - _Saron Yitbarek_

By March, the team had not only finished tweaking the machine to get to 55,000, they added additional sorters and printers so that the overall system could handle 2 million transactions a day. Bank of America was thrilled. The Phoenix computer department delivered 32 machines, now christened the GE-100, with more orders in the pipeline. It was time to celebrate.

**15:32** - _Will Ocasio_

Bank of America invited Cordiner to the unveiling of the computer. They even invited Ronald Reagan who used to work for General Electric as their TV spokesperson, so this was going to be a big deal. Then Cordiner came in to the unveiling and he thought, "Wait a minute, this is not what I approved." So that's where he got mad, and he ended up firing Barney Oldfield because of that.

**16:00** - _Saron Yitbarek_

Ugh, fired. The Phoenix team had exceeded expectations, had really done something extraordinary, but now their leader was rewarded by being let go. Not only that, but Cordiner also reassigned the head of the division, Doc Baker. His replacement, Harold Strickland, didn't care for computers. Cordiner still apparently worried about upsetting IBM, gave Strickland firm instructions to keep the computer group in check. And the person who replaced Oldfield, a company man by the name of Claire Lasher. Little did Cordiner know, the rebel streak ran strong in Lasher, too.

**16:47** - _Saron Yitbarek_

GE President Cordiner wanted to get out of the business computer industry, which he never wanted to be in in the first place. He wanted to get GE back to the old ways as soon as possible. He allowed for the fulfillment of existing orders, but in his words, "No more." But you know, when Cordiner's banking friends started flooding him with compliments about the innovative GE-100, he changed his tune. So okay, they could keep playing in the sandbox they'd created, the only restriction, "Do not go head-to-head with IBM."

**17:24** - _Saron Yitbarek_

Claire Lasher's expertise was in marketing. He saw the huge sales potential of general purpose computers and took a page out of Oldfield's book. He developed his own plan. A line of computers, the 200 series, with a dual purpose. They would be specific process control machines and a general purpose system. Claire called his business plan, The Big Look. He recruited more engineers to the Phoenix team, including someone who had worked on the GE-312 and 412 process control computers back in New York. His name was Arnold Spielberg, and he would lead the team.

**18:05** - _Saron Yitbarek_

After looking over the technical specs, Arnold said something like, "Hey, if we move a few things around on this piece of hardware, we could have a highly competitive general purpose machine." Arnold added peripheral devices like card readers, printers, and magnetic tape handlers. The production prototype was completed in just 5 months. The new general purpose machine was called the GE-225. Fun fact, Arnold Spielberg is Steven Spielberg's dad. I spoke to Tomas Kellner, GE's chief storyteller, to learn more about Mr. Spielberg and his role in creating the machine that the brass never wanted, the GE-225.

**18:51** - _Tomas Kelner_

Well, Arnold and his colleague Chuck Prosper were actually the designers of the computer, they built it together. It was interesting because unlike the previous GE computers, the GE-225 was a business computer, and it actually had a storage system, so it was able to handle the input and output of data.

**19:15** - _Saron Yitbarek_

What technological advancements in the GE-225 can be attributed to Arnold?

**19:21** - _Tomas Kelner_

One thing that was really interesting was that this computer actually had its own memory, and that was able to record and output information. The memory could store between 8,000 to 16,000 20-bit words, and then it also had an auxiliary memory that had about 32,000 20-bit words. Some of the computers that he also worked on were wire software, so they were really hard to use. They basically had to be programmed once, and that was all you could do. This was different because of the computer's ability to store data.

**19:58** - _Saron Yitbarek_

What did the GE-225 look like?

**20:02** - _Tomas Kelner_

The GE-225 didn't look like much, to be honest with you. It looked like a bunch of boxes. It had magnetic tapes that stored the information. There was an input terminal, an output terminal, and even though it was called a small computer, it filled an entire basement room.

**20:26** - _Saron Yitbarek_

What tasks could it perform that no other computer could at the time?

**20:30** - _Tomas Kelner_

One of the new features of the GE-225 computers was the ability to do time-sharing. You were able to access the computer from multiple terminals, multiple remote terminals, giving users the ability to work on the computer at the same time, to write code at the same time. As far as I know, this feature was not available in other commercial computers at the time.

**20:58** - _Saron Yitbarek_

So who bought the GE-225? Who were the clients?

**21:02** - _Tomas Kelner_

GE definitely used the computers internally, but a number of banks across the country used them, as well as the Cleveland Browns apparently used them to manage season ticket sales. Somebody even used one of the computers to predict a statewide election, and apparently the prediction matched the results. So it seemed like people were quite smitten with the machine. Cordiner told the team to get out of the computer business within 18 months, and it took them longer—much longer than that because of the success of this computer.

**21:43** - _Saron Yitbarek_

I want to pause here for a sec to emphasize, the GE-225 was so much more than just a banking solution. Remember John Kemeny and Thomas Kurtz, the creators of BASIC? Their programming language was created on the GE-225. And there's another command line hero who caught the programming bug on the GE-225.

**22:03** - _Saron Yitbarek_

Though he was still in high school at the time. Well, I'll let Tomas tell you. How was the GE-225 instrumental in the development of BASIC?

**22:14** - _Tomas Kelner_

One of the interesting applications of the GE-225 was the use of the computer by Dartmouth and their computer scientists to develop the BASIC language. They wanted to come up with a tool that would allow computer programmers to work from different terminals at the same time. And that tool was essentially, would later became BASIC. Now an interesting aside about BASIC is that GE promptly licensed BASIC from Dartmouth and started using it internally and started offering it with their computers, which is how it got to Steve Wozniak. He was exposed to a terminal that was connected to the GE-225 computer running BASIC, and he was so smitten with it that he actually started writing his first software on that terminal.

**23:13** - _Saron Yitbarek_

So when you spoke to Arnold, was he aware of the impact he'd made on the computing world?

**23:18** - _Tomas Kelner_

The interview with Arnold Spielberg was truly incredible. When I talked to him, he was 99.

**23:23** - _Saron Yitbarek_

Wow.

**23:24** - _John Joseph_

He remembered everything. We talked about the internet. He definitely said that back then in the 1960s, he was thinking a lot about computer applications, but it didn't occur to him that one day all of us would be connected—in our homes and in our pockets—to this vast network that allows us to pull information on a whim and that allows airlines to control planes in the sky and corporations control machines. On one hand, he was always very interested in the development of the field. At the same time, he was also very humble in admitting that the field has evolved in a way that he could not have predicted in the 1960s.

**24:12** - _Saron Yitbarek_

Steven Spielberg. I'm wondering what kind of influence do you think this had on him and his career?

**24:18** - _Tomas Kelner_

He remembers visiting his dad's workplace, the GE factory in Phoenix, Arizona, where they lived. His dad brought him over and he had no clue what was happening. And that his dad was trying to explain to him what computers were, and what they did. And he said a quote was, "It was all like Greek to me." So he really had no idea. I asked Arnold, so what was your impression? And he said, "Yes, well, I wanted him to study engineering. I wanted him to be interested in tech, but he was always interested in movies."

**25:00** - _Speaker 6_

This then is the electronic age in banking. Today, this magnetic ink computer system makes possible the world's fastest, most efficient banking service. Similar systems eventually will be employed by insurance companies, department stores and utilities. In fact, wherever paperwork is a problem. But who knows, perhaps sometime in the future, an even better method of handling paperwork may be found. Of this, you can be sure.

**25:34** - _Saron Yitbarek_

By 1962, the GE-225 was in full production. After its launch a year later, it quickly became a blockbuster product for the company. Not only was it profitable, it also earned a great reputation in the business world. In the months afterward, Cordiner received congratulatory messages from all over the country, so much so that he finally, finally changed his mind about going into the computer business. He formally recognized the General Electric computer department at last.

**26:13** - _Saron Yitbarek_

Let's go back to something that Tomas brought up in our conversation, and something we also talked about in last season's C change episode. When Dartmouth College used the GE-225 to develop a tool that allowed programmers to work from different terminals at the same time—in other words, timesharing—GE hadn't realized the potential for that.

**26:38** - _Joy Lisi Rankin_

Dartmouth built its timesharing system using the GE-225 as well as a GE DATANET 30 and General Electric had previously considered neither of those machines for timesharing.

**26:53** - _Saron Yitbarek_

Joy Lisi Rankin is a technology historian.

**26:57** - _Joy Lisi Rankin_

The key thing about timesharing was that the computer needed some way of being able to sort of stop its own clock. That's what the timesharing refers to, not people sharing time on the computer, but the computer actually sharing its own time to process multiple computing requests, and it was the faculty and students at Dartmouth College who had the idea of using the DATANET 30, which was a GE communications computer to do that clock and time management together with the 225.

**27:32** - _Saron Yitbarek_

Because mainframes were so expensive in the '60s, the most efficient way to use them was to run programs in batches. Someone would write a program, get the cards punched to run the program, then hand over the cards to an operator. Then they'd have to wait for it to be batched with other programs. Sometimes they'd wait for hours, even days.

**27:58** - _Joy Lisi Rankin_

Timesharing, BASIC, and Dartmouth and GEs relationship are crucial to ushering in what I call an era of personal computing before social computers and social networking, well before Facebook. GE was easily able to take what was learned from Dartmouth building this timesharing system and adapt it to their own business and quickly build a global timesharing service industry. I think at one point in 1970 they had 100,000 timesharing users in Europe alone. So this was a substantial business for them through the 1970s into the 1980s.

**28:44** - _Saron Yitbarek_

Despite the success of the GE-225 and the line of two hundreds that followed, General Electric sold its mainframe division to Honeywell in 1970. But they did decide to keep their timesharing business open, and it stayed profitable for years to come.

**29:08** - _Saron Yitbarek_

So Ralph Cordiner got there eventually, but just like we saw in our last episode with the creation of the mini computer over at Data General, it often takes a team of stubborn, wide-eyed rebels and some forward-thinking execs to build the next great machine. Because, sometimes the powers that be have trouble envisioning the power that could be. Opening up the decision-making process to others can lead to surprising and amazing results.

**29:41** - _Saron Yitbarek_

In our next episode, we're picking up from where the GE-225 left off to talk about how that mainframe inspired a whole new generation of programmers to kickstart the personal computing revolution and how that generation inspired us today. Command Line Heroes is an original podcast from Red Hat. Head on over to [redhat.com/commandlineheroes](https://www.redhat.com/commandlineheroes) for some great research on the team behind the GE-225. I'm Saron Yitbarek. Until next time, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-4/mainframes

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
