[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 8: Robot as Servant)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-8/robot-as-servant)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 8: Robot as Servant
======

### Shownotes

The 1980s promised robotic servants were in reach. They’d clean up our houses. Bring us drinks. Usher in an era of leisure. We didn’t get robot maids. But if we look around, we’ll find an army of robotic servants already automating away domestic drudgery.

Richard Rowland recounts the extent to which Androbot over-promised on its ability to build a robot servant. 40 years later, we still don’t have robot butlers. Monroe Kennedy III walks us through the complexities of seemingly simple tasks. To make things more difficult, each attempt to build a robot had to build the hardware AND write the code from scratch. Keenan Wyrobek explains that’s why he helped write and share the Robot Operating System(ROS). Leila Takayama describes how beneficial ROS was to the field of robotics. And Terry Fong shares how NASA is using ROS to build the robots that explore our solar system.

### Transcript

00:03 - Voice Actor as George Jetson

Where are my slippers?

00:05 - Voice Actor as Rosey the Robot

Right here, sir.

00:07 - Voice Actor as George Jetson

Thank you, dear.

00:07 - Voice Actor as Rosey the Robot

You're welcome, sir.

00:08 - Voice Actor as George Jetson

Hey, give me a beer, would you?

00:11 - Voice Actor as Rosey the Robot

My pleasure.

00:14 - Saron Yitbarek

Did you ever watch The Jetsons? A very mid-century view of the future. And each episode, at some point, Rosie the robot would wheel in and help the family out with some domestic chore. She might make a wisecrack. But basically, Rosie was an obliging artificial intelligence whose whole purpose in life was to wipe down windows, vacuum the carpet, and fetch your slippers. 

That was the fantasy, a pretty sexist fantasy. And it was our idea of what a robot could be. A domestic servant, a maid that was made of metal. 

I'm Saron Yitbarek and this is season eight of Command Line Heroes, an original podcast from Red Hat. 

This season, we're tackling one question from every angle. What is a robot? Since the word was coined almost exactly a century ago, the idea of robots has fascinated us and sometimes terrified us. 

Science fiction gave us robots that help and robots that rebel. In our novels and movies, robots embody every hope and fear we've got about technology. People rode monorails to world fairs where the 21st century was laid out as one big bonanza of convenience and high-tech magic.

(singing)

But now that our robot future is coming to life, what are they really like? What have we actually made? What might they become? 

While making this season, we discovered a robot reality that's pretty removed from the robots we imagined. And yet, all those misguided ideas about what a robot should be actually shaped what robots are. And no robot fiction shaped things more than the story we told ourselves about robotic servants. 

We thought they'd become our butlers and maids, machines like Rosie on The Jetsons. That idea reached a fever pitch in the mid '80s. Maybe because our tech had evolved just enough so we could produce a calculator on wheels. We got a little excited, for the first time we could build the image of the robots we've been imagining. That was enough to make us think, "Any day now robots will be part of ordinary domestic life."

03:01 - Rick Rowland

In 1983, it was very believable that we would have personal robots.

03:07 - Saron Yitbarek

Rick Rowland lives in Las Vegas, where he manages an RV dealership. But Roland has a side hustle, he builds robots, and he's become a kind of robot historian too. He's lost count, but there's upwards of 200 specimens in his collection. Robots from an earlier time, when each new model seemed to herald a robot revolution. His robot collection, full of dusty wheels and plastic faces, reminds us that back in the '80s expectations were high. The future was fantastic.

03:42 - Rick Rowland

In my lifetime I had gone from no cell phones, no computers, no nothing. Then when I started college, they're using the old-fashioned mainframe where you don't even have a screen, it's just a paper coming out of the machine. Just in those few years, we went to buying a home computer over at Kmart or Gemco and they did amazing things. So a robot should be able to just follow along since a robot is basically a computer on wheels.

04:10 - Saron Yitbarek

Every year, Rowland would visit the big Computer Electronic Show (CES) that came to Vegas. In the '80s, conventions like that were stoking the public's desire for robots. You could cruise down the aisles and find all these hopeful, but usually dead-end, inventions. Every new robot company was promising a consumer product that could roll around your living room, serving canapes and dusting the chandelier.

04:36 - Rick Rowland

Unfortunately, the marketing department worked a lot harder at it than the production department.

04:43 - Saron Yitbarek

The company with some of the most enticing promises was called Androbot. It was founded by Nolan Bushnell. You might recognize that name. He's the same guy who founded Atari and his robots were more like video games than anything else. Bushnell produced a machine called BOB, which stood for Brains on Board. There was another model called Topo. These were boxy R2-D2 style robots whose real purpose was to excite the crowds. Our robot expert doesn't let this history die away. He saved the pamphlets he collected at those old CES shows. We got him to read us from an Androbot pamphlet from 1983.

05:27 - Rick Rowland

I grabbed a bunch of them just in case I had to get a memory jog. "The year is one AB," and of course the AB was for Androbot. "Open a new era in technology history. A dream has engaged man's imagination for centuries. The microprocessor now makes possible the personal robot, and a profound change in all our lives, about to take place."

05:54 - Saron Yitbarek

What kind of change you ask? Bushnell's salesmen knew exactly what their customers were looking for.

06:00 - Rick Rowland

The first robot I remember seeing at CES in 1983 was the Androbot booth. Inside that booth was a robot called BOB. He said, "BOB, go get me a beer." He turned around, traveled over to the refrigerator. Of course it was a custom built refrigerator that dispensed beer out of the side. It dropped into a special holder they had rigged up on the side of BOB and it came back over to him. He opened the beer and says, "Thank you, BOB." So. That was pretty amazing.

06:33 - Saron Yitbarek

Everybody, especially in the '80s, wanted robots to bring them a beer. If a robot could bring a dude a beer, it had basically just passed the Turing test, as far as these guys were concerned. But beyond the fake waitress act, there were a bunch of smaller, more practical jobs that were actually within a robot's reach. Robots were going to detect fires or roam your hallway at night to scare away intruders. They might answer your phone and take messages too.

07:03 - Rick Rowland

Of course, a lot of that technology has ended up in our pocket. Unfortunately, all of the robotic ideas of the '80s disappeared as the technology got smaller and more advanced.

07:14 - Saron Yitbarek

Basically a lot of the tasks that robots could handle ended up being miniaturized into smoke detectors and smartphones. But what about all the stuff that actually requires a body?

07:26 - Rick Rowland

Can the robot do laundry? They always wanted us to do domestic chores.

07:30 - Saron Yitbarek

Those jobs remain stubbornly out of reach because it turns out folding laundry, putting away the groceries, everything these robot designers thought of as menial labor, wasn't nearly as simple as they imagined. Bushnell and others had promised big things, a Rosie the robot maid in every home. But they didn't have the first idea how hard it is to simply be a robot navigating our big messy world. 

Today, we've managed to fly robot helicopters on Mars. Not bad. But how about robots that can grab me a drink? It turns out that supposedly simple actions can be incredibly complex. The robot as domestic servant is a far more ambitious dream than we ever knew.

08:28 - Monroe Kennedy

Now, how do you handle the generic beer that's not always placed in the right position?

08:34 - Saron Yitbarek

Monroe Kennedy is an assistant professor at Stanford. He directs their assistive robotics and manipulation laboratory. When we asked Kennedy about those beer-fetching robots that folks like Nolan Bushnell were trying to sell, he pointed out that those robots could never have fetched a beer in anybody's actual kitchen.

08:54 - Monroe Kennedy

You always have the beer in the same spot, it's going to do something cool with it, but everything has to be just so. Right? If you were to change the position of one of the machines by six centimeters, the whole process might break down.

09:08 - Saron Yitbarek

To build a robot that can navigate the real world in a meaningful way, the real world with all its inconsistent elements—that's an enormous challenge. For example, 40 years after those Androbot models were strutting around at trade shows, Kennedy is still working to build a robot that can pick up a glass of water. We asked, "What was taking so long?" And the answer was not short.

09:33 - Monroe Kennedy

Yeah. Let's assume that this glass of water is literally in a transparent glass. The first problem that you have to address is perception. How does the robot see the glass?

09:45 - Saron Yitbarek

Okay. Hadn't thought about that. Going to be hard to know where the boundary of a transparent surface is. You have to leverage basic knowledge about light distortion, stuff like that.

09:56 - Monroe Kennedy

A lot of these sensors that we use all the time, be it in LiDARs (light detection and ranging) in cars or Kinects (Microsoft’s motion sensor add-on for gaming consoles) if you're playing the PlayStation. Right? All of these break down very quickly when you think about a transparent object. And so, all of a sudden there's a whole class of sensors you can't use from vision or perception at a distance. Perhaps you need stereo cameras. If we go back to this notion of where this feature detection has come over the decades—usually it's the detection of lines, corners, edges, dots. But then if I look at a glass that's been distorted, I don't really always have nice edges, corners, or dots to detect. So there are no good features from all of the past decades of work that we use to detect other things.

10:46 - Saron Yitbarek

The problems just keep piling up.

10:50 - Monroe Kennedy

Now you go to grab this object, but maybe the glass is sweating. Maybe it's wet. A novice robot would grasp it, say, "Hey, it's in my hands. I've squeezed it." I go to pick it up. It slips out of my hand and breaks. So now that means I need new hardware in my fingers, such that as I grab it, I can detect not only the normal force, but also the friction. As you're moving this glass, can you detect how much water is inside? If you move it in motion that is too jerky, this could cause the water to spill and damage the electronics on you or in the area.

11:25 - Saron Yitbarek

There's more... an endless list of problems. He hasn't even gotten to carrying the glass across the room. The basic takeaway is picking up a glass of water feels next to impossible. Still, we're not ready to quit the robot game. It's good we haven't given up because a recent shift in the robotics ecosystem could change everything.

Billionaire Scott Hansen wanted to accelerate the evolution of robotics. So in 2006, he started funding a research lab called Willow Garage. Unlike earlier institutions, which tried to produce luxury consumer robots, Willow Garage would be closer to pure science. The idea was to push the whole field of robotics forward for everybody. 

By 2010, the folks at Willow Garage had developed a robot of their own. The PR2. It's pretty cool looking, vaguely humanoid if you squint your eyes. The PR2 can do some amazing tricks - domestic chores like folding your laundry, maybe grab you that beer from the fridge. At first glance, you might think, "Okay. So they're a couple steps closer to building a robotic servant." 

But those tricks, as cool as they are, aren't the point of the work at Willow Garage. In fact, the real robotic breakthrough lies under the PR2's metallic skin; beneath that old idea of a metal maid. 

To understand what I mean you need to know about Keenan Wyrobek and Eric Berger, two young Stanford graduates who were among the first employees at Willow. They had a mission.

13:10 - Keenan Wyrobek

I always wanted to have those better tools and be able to make better tools for everybody.

13:15 - Saron Yitbarek

Today, Wyrobek is the founder and CTO of Zipline where they create drone delivery systems for medical supplies. But back in the early 2000s, he was frustrated by the roadblocks in robotics. Everybody in the field seemed to spend all their time reinventing the wheel.

13:34 - Keenan Wyrobek

There's so many disciplines required to make a robotic system useful. Each one of them is hard, like deeply hard. Like hard math and complex software.

13:42 - Saron Yitbarek

Imagine you wanted to design a better kind of house, but first you have to invent basic insulation and electrical wiring and plumbing. Oh, and hammers.

13:55 - Keenan Wyrobek

This is nuts. A typical PhD in robotics was four years or so. I'm basically writing software and integrating hardware that has been done before. Very little innovation in that space.

14:05 - Saron Yitbarek

There had to be a better way. Wyrobek and Berger imagined a robotics revolution that would open source their field in the same way Linux® had done for the world of software.

14:17 - Keenan Wyrobek

Linux was clearly enabling the internet, unlike any closed computer operating system was. Because you can enable people to build all these different pieces and other people to put all the pieces together and actually create useful things really easily. I was like, "Okay, robotics is missing this. We're going to make this."

14:33 - Saron Yitbarek

When Wyrobek and Berger arrived at Willow Garage, suddenly they had the time and resources to do exactly that.

14:44 - Keenan Wyrobek

What we called back then the Linux of robotics, we eventually came up with a really creative name called Robot Operating System.

14:50 - Saron Yitbarek

This would be the secret weapon inside the PR2 robot, a new kind of robotic operating system. Keep in mind, unlike the proprietary attitudes at those robot conventions in the '80s, Wyrobek and Berger's work was a fully funded, open source effort. They have the chance to create a set of tools that everyone could use. ROS, the Robot Operating System, would give future roboticists two major gifts.

15:19 - Keenan Wyrobek

First, middleware. Middleware enables you to basically plug different software libraries for doing different types of robotic math together with different sensors, with different actuators on different computers. Then on top of it, it's a bunch of tools that basically make, that leverage that common middleware standard to do things like visualize your data, log your data, replay your data, really debug your system.

15:43 - Saron Yitbarek

All that was just for starters. Being open source, the real magic comes when the community arises. The ROS community started building libraries that work with all that middleware. One library might help you with your robot’s arm movements. Another might let your robot guide its way around the room or detect a human being. Imagine a whole bank of prefab skills you could draw from. ROS makes all that sharing possible. But software alone is never enough.

16:16 - Leila Takayama

If you wanted to use ROS in the early days, even if you were a very smart person, it was still hard.

16:23 - Saron Yitbarek

Leila Takayama, a human-robot interaction researcher based in Santa Cruz, was among the first to discover ROS. In 2009, she came to Willow Garage where she brought a human-centered perspective that was sometimes missing among all the robot fanatics. Making ROS more accessible and user-friendly was crucial.

16:44 - Leila Takayama

We had aspirations for ROS to be bigger. We wanted all of the major universities and research institutions and companies to use it.

16:52 - Saron Yitbarek

Problem was ROS hadn't had time to evolve. Compared to something like Linux, which had grown up over decades, the robot operating system was still in its infancy and pretty confusing to newcomers.

17:06 - Leila Takayama

Everybody struggled. Every single grad student, no matter how smart they were, had a hard time. Our first reaction was like, "Oh my gosh, we need to go and help them." So the software team would go in there and hold their hand. That was not good because that's exactly the thing that doesn't scale.

17:22 - Saron Yitbarek

Takayama would insist that user studies be run like real-world scenarios. She also pushed for greater documentation and slowly, year by year, the ROS community gathered its own momentum. It became coherent, letting more and more people join in.

17:40 - Leila Takayama

A lot of companies that are using ROS today to build real products and services are helping to make that a higher priority. Or they're doing it in house. Some of them are even releasing code back, which is great.

17:55 - Saron Yitbarek

Meanwhile, the folks at Willow Garage could use their PR2 robot to show off the magic of ROS. PR2 became a kind of platform robot that let them exercise their code. To the outside world it might've looked like one more Rosie the maid, another fun toy to boss around. But to the Willow Garage team PR2 and its ROS brains were so much more. 

They were away to level up robotics everywhere. In 2010, Willow even sent the PR2 out into the world. Donating four million dollars worth of robots to a dozen research facilities. Sort of like robot evangelists for the gospel of ROS. And all of this is starting to work. As of 2012, ROS is thriving at a new organization called Open Robotics that's devoted to its development. It feels like we’ve finally got that common toolkit that everybody can use.

18:59 - Leila Takayama

ROS managed to build enough critical mass and enough positive energy and a good culture that actually engaged enough people to play together and to do it in a more open way. I think that is what can create a revolution.

19:20 - Saron Yitbarek

It's a revolution where anybody can leap into action because nobody has to start from scratch.

19:26 - Keenan Wyrobek

What ROS has enabled people to do is, you can form a company that's focused on an actual application with actual users who have a problem to solve, and you can leverage the entire world of robotics community just by using ROS.

19:41 - Saron Yitbarek

Suddenly, the robots we thought we were building, the robots that would clean our houses and fetch our drinks, could stand on the shoulders of robot giants. They could reach higher every generation and today they're even reaching for the stars.

20:01 - Terry Fong

Okay. This is Terry Fong. I am the chief roboticist at the NASA Ames Research Center in California.

20:09 - Saron Yitbarek

With open source robotics, the sky is not the limit. Even NASA benefits.

20:15 - Speaker 9

\[inaudible\].

20:18 - Saron Yitbarek

At The International Space Station, for example, our dreams of domestic robots will soon level up with flying robots. This project called Astrobee handles housekeeping duties in zero gravity—autonomous free-flying robotic crewmates for the astronauts. These new helpers are being developed thanks to open source software.

20:43 - Terry Fong

One of the decisions we made early on, when we were developing Astrobee, was to make it easily accessible so that the guest scientists could work with it. We chose to release all of the software for controlling the robots, all the software tools. For example, we have a pretty high fidelity, 3D, dynamic simulator so people can simulate, as they're doing development, how Astrobee will fly around. All of that we released as open source and we put the source code out on GitHub.

21:12 - Saron Yitbarek

It doesn't stop there either. In 2023, the VIPER robot will be searching the south pole of the moon for frozen water. Thanks to open source innovations, computers on Earth will be able to send VIPER instructions.

21:28 - Terry Fong

Part of the software we're using to do that on the ground is ROS.

21:32 - Saron Yitbarek

Fong feels that larger open source communities have actually increased the reliability of the robotics he works with.

21:40 - Terry Fong

If it's something that's adopted by a community, it becomes sustainable. It's something that people continually work to improve, which means the quality goes up. But more than that, it's something that you can count on being there because people care about it.

21:55 - Saron Yitbarek

Together we've come a long way from Rosie the maid. Our goals for robots have changed wildly in the past few decades. What we imagined as an end point, those domestic robot servants, turned out to be just the starting point for a robot revolution that's rocketing to other worlds. And for Fong that means we can form a new kind of relationship with our robots. We don't have to limit our imaginations, trying to make them into elaborate house cleaners and personal assistants.

22:28 - Terry Fong

As we send humans deeper into space, what's needed to make them successful? Going to Mars will be unlike anything we've ever done before. How do you make sure that, say, a habitat where humans are going to live is operational and it's safe and it's secure so that when they get there they don't have to scramble to stay alive. Those of us who are working space robotics fully believe that robots should be part of the solution.

22:59 - Saron Yitbarek

A fantasy that, half a century ago, involved Rosie the robot cleaning up your living room has evolved into something so much more. But all that work on basic chores for robots did push the industry forward. Soon, Rosie the robot will be fixing up our home on Mars. 

You know, even today there's still no robot butler, no robot maid—but maybe that's okay. Maybe you can get your own beer. The robot dream of the 1980s lives on anyway, as a kind of museum collection over at Rick Rowland's place.

23:38 - Rick Rowland

I've collected anything made by Androbot, the Topo series, the BOB series, the Fred series. There was Andy, have the Hero line-

23:46 - Saron Yitbarek

When you look at all those dusty old models, you realize it was the dream that mattered. By dreaming up robots that would help us with ordinary tasks, we've pushed ourselves, inspired ourselves to create robots that would one day help with the extraordinary. 

ROS and the emergence of open source robotics created the potential for a robot revolution far beyond the gussied up Roombas of the '80s. It's a software revolution, and that's what we're exploring next time in episode two. 

I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. Follow or subscribe wherever you get your podcasts. Until next time, keep on coding.

24:32 - Rick Rowland

Hero line, the Hero Jr. We have the RB5X robot and the RB5X robot with arms. A robot that came along a little later, it was called the Newton's SynPet. We have all the Omnibot series from Tomy. We have Robie Juniors, Robie Seniors. We have \[Inaudible 00:24:54\]-

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-8/robot-as-servant

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
