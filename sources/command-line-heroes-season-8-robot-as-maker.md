[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 8: Robot as Maker)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-8/robot-as-maker)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 8: Robot as Maker
======

### Shownotes

One of the first functional robots appeared on TV in 1966. That’s earlier than some of us expect. The Unimate’s televised premiere sparked the world’s imagination. It represented a host of possibilities. Those possibilities, however, also implied a coming competition that would last for decades.

Dag Spicer tells the story of the Unimate, the first industrial robot—and how little the American public trusted it. But that distrust wasn’t universal. Tomonori Sanada explains how the Unimate was received very differently in Japan. Joe Campbell describes the dangers of working alongside industrial robots. But he’s working to change that with cobots. And Paul Shoup shares how his company, employees, and customers are benefiting from cobots.

### Transcript

00:02 - Saron Yitbarek

It's 1966. Americans are curling up on their sofas, ready to watch another episode of The Tonight Show with Johnny Carson. Only this time, it isn't some movie star or politician who arrives for an interview. It's a hulking robotic arm, about the size of a small car. Its name is Unimate.

This is Unimate's television debut and the audience is in love. Unimate pours a beer. Unimate plays golf. Unimate conducts Johnny Carson's band. The audience laughs and claps, but they haven't yet imagined what all those precision movements really mean. Unimate is capable of so much more than party tricks.

The Unimate robot heralded the dawn of industrial robotics. American factories were already being automated to a certain degree. But this was something new. A programmable robot ready to execute complicated jobs from start to finish.

01:12 - Dag Spicer

A robot for industry and this it, Unimate.

01:19 - Saron Yitbarek

I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat.

All season, we're exploring new ways to approach a fundamental question, what is a robot? In this episode we ask—is a robot a factory worker?

Today, almost three million robots work at factories around the world. The world's largest companies each employ hundreds of thousands of robots, and those numbers are bound to multiply in the near future. So exactly how much space should we make for our new robot coworkers? What's the best way to ensure that robots protect and support the humans they work with?

How you answered that question depends on where and when you ask it. And to understand those dynamics, we have to begin by understanding the origin of industrial robotics itself—because the story of Unimate and its first few factory jobs is also the story of robots and humans struggling to work better together.

After the Second World War, American households began filling up with fantastic new devices: vacuum cleaners, dishwashers, toasters. Every advertisement promised a new world of ease and speed. And an inventor called George Devol believed the revolution and American households belonged in American factories too.

Devol was the inventor of the barcode and the automatic door. He was all about automating away human labor, speeding things up.

03:04 - Dag Spicer

For example, he developed one of the first microwave oven products that was called the Speedy Weeny, which automatically cooked and dispensed hotdogs.

03:12 - Saron Yitbarek

That's Dag Spicer, senior curator at the Computer History Museum. Spicer described for us an inventor who had a really fundamental impact on robotics.

03:23 - Dag Spicer

He came up with this idea of what he called universal automation, which is some form of automation that could be applied to controlling these processes in factories, but automation that would be adaptable. That is, it could change or be programmable.

03:39 - Saron Yitbarek

Devol had been nine-years-old when the term robot was first coined in the sci-fi play called Rossum's Universal Robots. And now he was on the verge of making that fantasy into a reality. He would build a true universal robot.

03:56 - Dag Spicer

He actually embodied all that in the Unimate robot, and that was really his greatest hit. All robots in the world owe part of their DNA to the Unimate.

04:07 - Saron Yitbarek

The Unimate. This was a 4,000 pound, 10-foot by 20-foot behemoth. Not humanoid at all. Instead, it was mainly composed of one giant arm powered by hydraulics with a magnetic drum memory where commands could be saved.

When Devol took out a patent for his new invention, he didn't even call it a robot. The patent was for a process called Programmed Article Transfer, which is just about the most boring way you can describe a robot. But Devol wasn't a salesman. He wasn't a hype guy. That job belonged to Devol's new partner, Joseph Engelberger, who came on board and worked to market Unimate to America's factory owners.

Their best bet was to convince factories dealing with heavy and dangerous work that Unimate could take over where humans struggle. And after 40 companies turned them down, one finally said, yes. The first Unimate was shipped off to a General Motors plant in Trenton, New Jersey in 1961. The workers there, yeah, they weren't too worried.

05:18 - Dag Spicer

They thought, initially, it was just going to fail.

05:21 - Saron Yitbarek

This was two years before that Johnny Carson appearance. And while there was a bit of automation on the factory floor, nobody put much stock in a robot's ability to replace a human.

05:32 - Dag Spicer

Their initial perception was perhaps less of it being a threat than it being more of a kind of crazy idea that was probably not going to work and that they would have the last laugh.

05:45 - Saron Yitbarek

And yet almost immediately Unimate proved itself. The robot was sent to work on hot die casting. It was lifting red, hot metal and carrying it to the cooling liquid. Super dangerous work and a job that factory workers would have been more than happy to hand over. Soon enough, there were 450 die casting robots working at GM plants across the country.

06:12 - Dag Spicer

It was sort of the opening salvo of automation onto the assembly line.

06:18 - Saron Yitbarek

What few understood was that automobile production had just been changed forever and soon everything else would transform too. Robots would speed up production, taking over dangerous and repetitive labor. America had a head start in what will become a global race to robotic automation. But those factory workers weren't laughing at Unimate anymore.

06:43 - Dag Spicer

Once the experts' motions and workflow had been captured, the original worker was no longer needed. So, that was a real problem. That's exactly why people were afraid of robots.

06:55 - Saron Yitbarek

The workers in America began to see that robots could threaten their livelihood.

07:00 - Dag Spicer

They saw what had happened with machine tools in the '50s and with the de-skilling of machinists and millwrights and highly skilled people using machine tools. And so they saw basically more of the same coming down the line for any manufacturing industry.

07:18 - Saron Yitbarek

But here's the thing, the American workers' anxiety about robots was not shared everywhere in the world. Across the Pacific, an entirely different robotic revolution was underway.

After World War II, military production was banned in Japan—which seriously curbed their economy. All those companies that had built weapons and airplanes and tanks suddenly had to find something new to produce.

07:52 - Tomonori Sanada

\[Speaking in Japanese...\]

07:53 - Translator

That is when the automobile industry gained momentum.

07:58 - Saron Yitbarek

Tomonori Sanada is the head of marketing and business planning at Kawasaki's Robot Division in Japan. He told us the story of George Devol's robot, Unimate, stepping into a whole new robotics culture. Shortly after Devol set up his company, which he called the Unimation, a representative from the Japanese automaker Nissan arrived in the United States. There, he saw the Unimate in action.

08:25 - Tomonori Sanada

\[Speaking in Japanese...\]

08:24 - Translator

He happened to see Unimate's products at one of the exhibitions and gave advice to George C. Devol. This product article transfer you made seems to be an excellent product. It's a useful machine for the industry, especially for manufacturing companies. So why don't you come to Japan and look for licensees?

08:47 - Saron Yitbarek

Devol took that advice seriously. He went to Japan and not just to sell Unimates. He went looking for someone who could license it, build Unimates of their own. He made propositions to eight different companies. Many were interested, but what Devol needed was a company whose infrastructure could handle Unimate's hydraulic system. Finally, he found just that. Those companies that had built Japan's military equipment, the companies now desperate for a new beginning, were already set up to work with hydraulics.

09:23 - Tomonori Sanada

\[Speaking in Japanese...\]

09:24 - Translator

Kawasaki already had hydraulic power control technology since it used to produce tanks and cannons during the war.

09:32 - Saron Yitbarek

Devol struck a deal with Kawasaki Heavy Industries, KHI, in 1968.

09:39 - Speaker 5

Numerous tests are being carried out on Kawasaki Unimates, a multi-purpose industrial robot.

09:46 - Saron Yitbarek

Kawasaki wasn't going to be a simple client like GM though. They didn't want to just build the Unimate. They were going to build their own version of the robot, the Kawasaki Unimate 2000. And that meant they could supply all of Japan with industrial robots. Soon, the first Kawasaki Unimates appeared in Toyota and Nissan factories and the robots weren't the only newcomers.

10:14 - Tomonori Sanada

\[Speaking in Japanese...\]

10:15 - Translator

During this time, most workers were farmers in Asia, including Japan. As the manufacturing and technology industries were emerging, there were a lot of people who wanted to work for these industries. However, a lot of people came from villages located in the countryside and did not have advanced educational backgrounds. For example, it was difficult for them if they were asked to perform arc welding; they did not have opportunities to learn such skills before.

10:45 - Saron Yitbarek

A surge of unskilled workers was something Unimate could help with. It could execute long sequences of highly specific actions. If a task was too difficult, too dirty, or too dangerous for new employees to master, Unimate could take over. In fact, the benefits of robotic help were rapidly embraced in Japan.

By the mid '80s, almost three quarters of all industrial robots in the world lived on Japanese factory floors. While American workers might've felt threatened by automation, their Japanese counterparts seem to embrace the change. Soon, humans were eliminated from hazardous jobs like welding, where sparks could burn you, or painting, where fumes could poison you.

So why was it easier for Japan to embrace robotics? Sanada feels there were two reasons. The first is cultural. He guesses that the Japanese always had a special affinity for robots, an affinity he even sees in the way robots are named in Japanese pop culture.

11:55 - Tomonori Sanada

\[Speaking in Japanese...\]

11:58 - Translator

As an example, Star Wars characters, R2D2, and C3PO are code names. Their names are numbers, but Japanese cartoon robot characters such as Tetsuwan Atom or Tetsujin 28-go usually had human names. Japanese people have accepted robots as family members from the beginning, while American people call robots by code names.

12:22 - Saron Yitbarek

Another more tangible reason for Japan's embrace of robotics lies in its corporate culture. Sanada says Japanese workers had an expectation they wouldn't be replaced. They'd just be moved to another job within the company.

12:37 - Tomonori Sanada

\[Speaking in Japanese...\]

12:38 - Translator

Let's say you started working as a welder at Kawasaki and then a welding robot got installed one day. In Japan, you just get moved to a different position within the company or resign. This is an occupation change.

12:54 - Saron Yitbarek

So Japanese workers could look to robots as useful tools that had arrived to make their jobs easier.

13:02 - Tomonori Sanada

\[Speaking in Japanese...\]

13:04 - Translator

So, I can start as an engineer, but retire as a salesman. So if a robot does their hard work or simple job, they are not hesitant about changing their specialized job.

13:17 - Saron Yitbarek

It's maybe not surprising that an automation gap soon emerged between Japan and The States. Japan embraced automation and their productivity went through the roof. That gave them a huge cost advantage in the auto industry. It wasn't that they had better technology though. They simply embraced robotics to a level that wasn't happening in The States.

Today, Tomonori Sanada's fifth floor office at the Kawasaki headquarters looks out on a Japan that embraces robotics more than ever. An aging population has made robots into an economic imperative.

Every country creates their own relationship to industrial robots. Our demographics, our economies, and even pop culture can shape those attitudes. In America, competing in a 21st century global marketplace means updating our relationship with robots.

But that doesn't mean every factory is about to buy a Unimate and send their humans home. In fact, a new field of robotics is on the rise and some believe it can relieve America's anxiety about mechanical co-workers. Half a century after George Devol's breakthrough invention, we're on the verge of re-imagining the factory once again.

So in the '70s and '80s, Japan's manufacturing industry was zooming to new heights and America was at a kind of crossroads. Robotics were potential saviors upping productivity. But they also were seen as job stealers, ruining the American dream. And the robots that showed up on factory floors really didn't seem like they were there for the benefit of ordinary people. They were huge, heavy, dangerous. They were cumbersome, expensive, and incredibly difficult to program.

15:21 - Joe Campbell

It was a mixture of heady successes and dismal failure.

15:26 - Saron Yitbarek

Joe Campbell has been in the robotics industry since 1979. He remembers that struggle to find a happy middle ground between robot and human labor.

15:37 - Joe Campbell

The early efforts were to take a human worker out of the line and put a robot in the line, and therefore the robot will do everything that the human operator did.

15:46 - Saron Yitbarek

It was a pretty clumsy theory: humans out, robots in. In the early '80s, for example, Campbell sold robots to an injection molding company. The plant manager understood that other machines only worked because humans worked with them. He had believed that robots had to exist in total isolation.

16:09 - Joe Campbell

So it was okay in his mind to have an operator constantly adjust and tweak the injection molding machine. But the robot had to never ever be touched once it was installed.

16:23 - Saron Yitbarek

That plant manager wasn't alone. In the early days of robotics, it just made sense that robots had to be isolated. They were a danger to human workers, had to be gated off. They had no abilities to interact with people or cooperate. In fact, the whole approach with first-generation industrial robotics was to take a job that a human did and try to automate it from start to finish. That was the holy grail of robotics.

16:53 - Joe Campbell

You could not have a skilled operator working side by side with a robot. It was absolutely forbidden.

16:59 - Saron Yitbarek

Today, though, Campbell is head of marketing at a place that helps bring balance to the factories of the world. He works for the Danish company, Universal Robots, where they build collaborative robots called cobots. The company founders imagine a factory floor where humans and robots work together.

17:19 - Joe Campbell

Their vision was to avoid this heavy infrastructure of the traditional automation, avoid the limitations of having to have huge safety barriers in barricades and enable robots to work side by side with skilled human operators in a perfectly safe fashion. At the time, that was a radical thought, a very, very tall order.

17:47 - Saron Yitbarek

Within five years though, Universal Robots was releasing their first cobots. These were game changers in two important ways. First, like Campbell mentioned, safety. If a cobot is grabbing a package, say, and you get in its way, don't worry. It won't mow you down. It'll gently bump you and then freeze. Safety is part of a cobot's DNA. And the second big thing they offer is ease of programming. On the old factory floor, those mammoth robots weren't just physically intimidating. They were technically intimidating too. Reprogramming a robot was something only a specialist could do.

With cobots, all that changes.

18:32 - Joe Campbell

Our robots are very, very easy to program. It is very common for non-technical types, non-programmers, non-engineers to learn how to program the robot and set it up and deploy it into factories. What we tell people is that if you can think logically, you can learn how to deploy our robot.

18:51 - Saron Yitbarek

The result, a safer, easier, more agile relationship where workers can use robots like tools instead of something to fear. Suddenly, you can pair human ingenuity with robotic strength. You can pair human understanding with robotic memory and precision. And because cobots are so much cheaper, every company can level up their factories.

19:16 - Joe Campbell

In many cases, these are companies, these are five-, eight-, 10-person companies, but they're the real backbone of US manufacturing.

19:27 - Saron Yitbarek

Now, companies of every size have a potential supply of not just robotic workers, but robotic co-workers. And that's important, Campbell says, because as Baby Boomers exit the factory floor, companies are having a hard time replacing them.

19:44 - Joe Campbell

Whichever generation you want to look at, whether it's Millennials or X-ers or Z's or whatever, they have very, very little interest in working in manufacturing. And they definitely don't have any interest in working in the dull, what we call the “three Ds”—dull, dirty, and dangerous—jobs.

20:05 - Saron Yitbarek

Universal Robots is experiencing double-digit growth and Campbell attributes that to companies of all sizes coming around to the idea that robots have evolved to suit human needs in a more adaptive way.

20:20 - Joe Campbell

For me, the real interesting part is this whole acceptance from the small- and medium-sized companies. And so we do not feel any pushback, because I think we have a good part of the solution; and the problems are not going away. The labor challenges are not going away, the quality challenges, the capacity and productivity challenges, are not going away. And we can be a big part of that solution. If you look at humanity over the decades, we constantly aspire to do more with less. I think cobots are a great part of that success formula.

20:59 - Saron Yitbarek

Over at DCL, they do third-party logistics. They're shipping packages, warehousing, restocking shops. It's the kind of business that once upon a time might have employed some pretty pushy robots. Today, though, Paul Shoup, Vice President of Operations, says cobots have created a totally different relationship.

21:22 - Paul Shoup

Far more gentle, much safer.

21:25 - Saron Yitbarek

The cobots they've brought in are also much easier to program.

21:28 - Paul Shoup

It takes about an hour to program and calibrate a machine for the robot to reach, recognize what product is in the tray, and to be able to properly handle that, and place it neatly into the package.

21:44 - Saron Yitbarek

So these robots really are working with humans—alongside them.

21:48 - Paul Shoup

We have three robots. They are positioned near the employee entrance.

21:54 - Saron Yitbarek

And the way Shoup sees it, this collaborative workplace allows every human to benefit.

21:59 - Paul Shoup

Our goal is not to eliminate the headcount of our team members, just to increase the quality of our goods.

22:06 - Saron Yitbarek

It's a vision of a hybrid workforce. One where robots are doing what they do best and humans are seeing their work lives made safer and easier. But listen, I don't want to be overly optimistic here. We have a long way to go before humans and robots can shake hands on the factory floor. And we know that some industrial robots are still making life hard for their human coworkers.

But considered this, advocates for cobots argue that they revitalized automakers like Mercedes-Benz and BMW. Today, cobots are the fastest growing part of industrial automation.

A human robot hybrid workforce is not just more powerful either. It's also more adaptable. Imagine a factory that uses the strength of machines and the creativity of humans to constantly adapt their work. Maybe pivoting from cars to medical equipment and back to cars, depending on what's needed.

The more robotics advances, the more we can bring smart collaboration into manufacturing. Japan found a way to thrive alongside their robots, and they became global leaders as a result. Every country has the potential to build their own relationship with robots.

And what do those new factory floors look like? How human? How robotic? There won't be any one answer because we're on the cusp of designing a hundred new ways of working together.

Some believe that robots and humans are moving toward a balance where both sides get to do what they do best. Humans and robots leaning into their own special characteristics. However…

23:53 - Voice Actor Playing Jimmy Fallon

Oh my goodness. Hello, Sophia.

23:57 - Voice Actor Playing Sophia

Hello, Jimmy.

24:01 - Voice Actor Playing Jimmy Fallon

Wow.

24:04 - Saron Yitbarek

In 2018, half a century after the hulking Unimate appeared on The Tonight Show, a very different robot stepped onto the stage, a humanoid robot called Sophia. She and Jimmy Fallon sang a song together. They had some laughs. If Unimate was a sign that robots can enter the workplace, then Sophia was a sign they could, well, enter our hearts.

Next time, we explore that leap forward for robotics—the drive to build robot companions. We're discovering what it means when robots emulate the humans who built them.

Until then, I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. Keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-8/robot-as-maker

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
