[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 8: Robot as Software)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-8/robot-as-software)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 8: Robot as Software
======

### Shownotes

Building a physical robot isn’t cheap—even when it’s the final version. Designing a robot and testing it over and over again? That takes a lot of tries. And likely more than a few failures on the way to success. Luckily, simulation software is reducing the scrap heap—and bringing down the costs of building robots from the ground up.

Kevin Knoedler shares how simulation software allows him to program and design robots from home. And even though he doesn’t have the budget or support of major research institutions like DARPA, his robots still end up winning major competitions. Evan Ackerman points out that winning those competitions takes a lot of skills. But amateurs have more ways than ever to get started with robotics. Louise Poubel explains how much time, energy, and money is saved with robot simulation software—and how it’s not just for the amateurs. And Dr. Timothy Chung reveals how competitions like the DARPA Subterranean Challenge encourage innovators to advance the field of robotics.

### Transcript

00:03 - Saron Yitbarek

A dust storm is ripping across the surface of Mars, headed toward a humble set of buildings. The first human settlement on another planet. Martian dust storms like this one are incredibly powerful. As it hits, it tears open a wall of the habitat, flips over the solar array, and bends back the communication antenna. Years of labor, ruined. Unless...

Emerging from the dust cloud is a humanoid robot called Valkyrie, NASA's only hope. With the right programming, Valkyrie can patch that air leak, deploy a new solar panel, and realign the antenna. But this level of robotic finesse has never been attempted.

Luckily, back on earth, a stay-at-home dad named Kevin has everything under control.

The disaster scenario you just heard was imagined by NASA, back in 2015. They laid it all out as part of their space robotics challenge. Then they invited anybody and everybody to try and solve it. How do you program Valkyrie to execute all those fixes? It sounds like the kind of challenge only huge teams of people can tackle, but that stay-at-home dad I mentioned, Kevin Knoedler, he really figured it out. He won NASA's challenge.

And Knoedler never had access to a Valkyrie robot. He figured everything out from his kitchen desk while taking care of two kids. He could do that because robotics has opened up. It's now a software-first field, a field where anybody with a laptop and the right know-how can be a hero.

I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat.

This season, we're exploring the difference between robot fiction and robot fact. What did we imagine our robots would be, and what did they turn into in reality? In the movies, robots are often designed and controlled by a secretive elite. We imagine that you need endless resources and powerful institutions to bring something like WALL-E and Johnny 5 to life, and that's not entirely wrong, but we've discovered that a leap forward in robotics doesn't always require expensive hardware and giant labs. It can happen in the free and open world of software.

The real robot future is being built by open source heroes, all around the world.

02:58 - Voice Actor as Knoedler's child

Dad, I'm going to be late for school.

03:00 - Saron Yitbarek

Contributing from the middle of their everyday lives.

03:08 - Kevin Knoedler

Doing robotics contests while parenting is interesting.

03:12 - Saron Yitbarek

Kevin Knoedler lives in Newbury Park, California. When he won NASA's space robotics challenge, his kids were 9 and 11. When they were younger, he could only do robotics work when they were asleep. Now that they're in school, he's got the bandwidth to save a colony on Mars.

03:30 - Kevin Knoedler

It's really just one computer. I don't think I'd be allowed to keep it on the kitchen table. I have a desk set up in the kitchen. We actually have all of our computers set up in the kitchen, so when we're all home together, we're all in the same room, either going to school or working on things and such.

03:46 - Saron Yitbarek

In between helping with homework, Knoedler is able to take part in major robotics challenges because he can take advantage of new software that's revolutionized the field, opening it up to people like him.

03:59 - Kevin Knoedler

It doesn't require a huge amount of equipment or investment to be able to do a simulation contest like that.

04:06 - Saron Yitbarek

For one thing, the internet is at his disposal. Knoedler can do arcane troubleshooting, drawing on a planet of experts, but there's also ROS, the Robot Operating System, which we mentioned in episode one. ROS gives him a ready-made set of tools, a suite of crucial middleware.

04:27 - Kevin Knoedler

It really is a common standard that a lot of robotics packages are built on. And so, rather than having to integrate and find what you need, a lot of that is already integrated and working within ROS.

04:39 - Saron Yitbarek

Just as important as that toolkit though, there's a powerful new simulation software. That NASA contest, for example, was a simulation contest. Meaning, nobody had to build a physical robot. You didn't even need to have access to one of NASA's Valkyries. You could solve the whole thing using simulation software for the desk in your kitchen.

05:04 - Kevin Knoedler

You had to pick these tools up off the table with the humanoid robot, get them oriented correctly within the limitations of that robotic arm, and then use them to search the wall for leaks.

05:15 - Saron Yitbarek

All these granular details could be manipulated using an open source simulation program called Gazebo. Knoedler only needed an Nvidia graphics card to run it. And once you're working in a simulation, just imagine how that frees you up to experiment.

05:35 - Kevin Knoedler

When you're talking humanoid robotics, for example, every time you run the humanoid robot into something or fall over, you can do tens of thousands, or hundreds of thousands of dollars of damage. In Gazebo, you can rack up those damage charges and not actually have to pay that bill. You can get that learning without having to pay all the costs in terms of breaking things.

05:54 - Saron Yitbarek

Trial and error can suddenly take place without any cost at all.

05:59 - Kevin Knoedler

Using the Gazebo robotic simulation system as a tool makes it possible for people working from a lot of different locations to be able to do robotics work.

06:11 - Saron Yitbarek

You might be wondering, how real are these simulations? If it works in simulation, do we know it works in real life? Or are we just playing video games? Well, Knoedler had the opportunity to go to the New England Robotics Validation Location, where he ran his award-winning code on an actual Valkyrie robot.

06:35 - Kevin Knoedler

And it actually ran. We got it running within the first day by the support of the staff there, and the quality of the simulation from Gazebo. And so rather than taking weeks or months to bring up a task like that on a humanoid robot, it was done in a day. And so that's really one of the big powers of Gazebo.

06:50 - Saron Yitbarek

Knoelder won $175,000 for his perfect run in the NASA challenge.

Now, before I paint too rosy a picture, I should point out that Knoedler is a graduate of MIT. He's got skills. He's put in the work. And as much as robotics is opening up with tools like ROS and Gazebo, it's not all the way there.

Evan Ackerman, a senior editor at the engineering magazine IEEE Spectrum, gave us the amateur's perspective.

07:22 - Evan Ackerman

ROS is certainly accessible to anyone who's willing to put in the time and effort. It's just that if you're doing it by yourself, it's not intuitive. I think that the general problem is that ROS is a community project and it's designed within the community, for the community, and that community is people who generally are already robotics experts.

07:49 - Saron Yitbarek

Ackerman points out that you can always work your way up to ROS, though.

07:53 - Evan Ackerman

If you're actually a beginner and you just want to have a good starting point, there are all kinds of robotics companies and products who are happy to help you with that. LEGO, for example, has a really robust education program.

08:08 - Saron Yitbarek

That's LEGO, as in colorful building blocks. They have a robotics line for the uninitiated. And Ackerman has another warning for those who want to get into robotics. Even while you capitalize on all that software, don't forget that hardware isn't obsolete. The real physical world still matters, and that real world is full of chaos.

08:31 - Evan Ackerman

We can't simulate that. Our physics simulators just aren't good enough. So, no matter how well your robot does in a simulation, the simulator itself is just not a good representation of the real world.

08:47 - Saron Yitbarek

And in some cases, that doesn't matter. You can get things done in a practical way, even if your simulations aren't exact. But keep this in mind, the real world is its own best model.

09:01 - Evan Ackerman

There is certainly a huge gap between simulation and actual hardware. Hardware, it's a little bit of a cliche, but people say that hardware is hard, right? And no matter how much work you put into your simulation, there is still going to be a gap there, and the size of that gap really governs how much you can learn from the simulation, how useful it is to keep doing stuff in simulation before you say, "Okay, we really need to get on a real robot before we can make more progress than we have."

09:32 - Saron Yitbarek

Hardware does matter. And that's why Ackerman has been so happy to discover something called the TurtleBot, a low-cost physical robot that uses ROS and lets amateurs like Ackerman run their software in the real world.

09:49 - Evan Ackerman

Even though it's just basically a Roomba with a laptop on it and a Kinect sensor—that's what it used to be.

09:57 - Saron Yitbarek

Don't downplay the TurtleBot. Even a glorified Roomba has a role to play.

10:03 - Evan Ackerman

It moves, it thinks, it senses. And it's a great way for a university course, or even a high school course, to say, "Look, we have this hardware now, and our students can work in simulation, then actually test out what they've been simulating on the real robot and learn about that gap."

10:24 - Saron Yitbarek

Devices like the TurtleBot show you in a visceral way whether your slick algorithm is as slick as you thought. Students can learn more, entrepreneurs can prototype their inventions, and every robotics simulation gets a chance to prove that they're not just strings of abstract code, they're blueprints for a revolution.

Hardware in robotics is almost like a fact checker. A way to prove that our software stands up to the endlessly complicated world that we actually live in. But that doesn't mean simulations aren't practical. Sometimes, they're the most practical, the most effective approach you can take.

11:07 - Louise Poubel

If you're trying a new algorithm, you may just break that robot. It can cost you millions of dollars if you make a mistake on your algorithms, right? So you really don't want to be trying new, crazy things in a physical robot.

11:20 - Saron Yitbarek

Louise Poubel is the technical lead for ignition over at Open Robotics, where they help people simulate before they build. And she's been finding that simulation is not just for indie robot enthusiasts like Kevin Knoedler. Every player in the field, no matter how large or how well funded, has come to rely on simulation software. I mean, think about how simulation levels up your work.

11:46 - Louise Poubel

If you are developing a robot that is very expensive and you have a large team, not everybody can have access to the robot at the same time, but virtual robots are free. You can duplicate them, each developer can have their own copy of the robot running, and they're multiple copies, right? Running on the cloud, running in their own computer.

12:04 - Saron Yitbarek

Makes sense. No group has endless funds. And the more ambitious your project, the more—even a wealthy—organization is going to want to capitalize on simulations.

12:15 - Louise Poubel

Imagine if you're developing algorithms for a fleet of quadcopters. Imagine trying that in the real world. Every single time you have to start up 50 different robots, and one of them doesn't do the right thing and breaks, and then you have to go and fix it. In simulation, you just restart. And you start from zero. It's so much more convenient.

12:34 - Saron Yitbarek

Now imagine you're trying to develop a helicopter that can fly on Mars. When NASA created a flying robot called Ingenuity, the sidekick to their Perseverance Rover, they needed it to fly in the Martian atmosphere, which is way thinner than the atmosphere on earth. By testing their helicopter in simulations, NASA scientists could see how it would fly "on the red planet." And it worked. Ingenuity made the first Martian helicopter flight on April 19, 2021. But whether the robots are an earthling or a Martian, they're going to encounter something that a simulation couldn't prepare them for.

13:18 - Louise Poubel

Things in the real world... they are not perfect. They have faults. Parts are not exactly the size that they are supposed to be. One common thing that people always talk about is how hard it is to make a robot with two wheels just go straight in the physical world. Because you would say, "Give both wheels the same speed," and the robots are just going to go straight. But the wheels, they never have the exact same size, the exact same friction.

13:44 - Saron Yitbarek

Poubel says that gap between simulated reality and actual reality is in fact shrinking.

13:51 - Louise Poubel

So, there will always be a step of fine tuning for the physical robot. That's often becoming shorter and shorter to do this fine tuning, especially with people doing things like domain randomization in machine learning where in simulation, you don't test just one scenario. You can test thousands of scenarios.

14:13 - Saron Yitbarek

So say you're working on that two wheeled robot she mentioned earlier. By simulating a hundred different levels of friction, you can quickly try those wheels out on 100 different surfaces, making sure your algorithm applies to each one.

14:26 - Louise Poubel

And then when you go to the physical robot, there's very little that can surprise you, because you've made their algorithm be so robust to all of these different situations.

14:35 - Saron Yitbarek

And remember, as with ROS, the Gazebo simulation software is open source. It's becoming more user-friendly, and more expansive, all the time.

14:45 - Louise Poubel

People could fix Gazebo, people of different backgrounds, of various different use cases, could look at Gazebo and say, "Hey, we can tweak it like this, and it's going to make it better for everybody."

14:57 - Saron Yitbarek

That's another win for big organizations, because when crowds of amateurs come join the party, their breakthroughs, their best practices, their hundreds of tiny advances, push everybody further. An open-software-focused robotics field isn't just cheaper and faster than a hardware focus field would be. And it's not just handy for amateurs. It's actually more powerful across the board.

So, when robotics began opening up, it started powering up, too. And to maximize the potential of platforms like ROS and Gazebo, we'll need to invite everybody to the party.

15:42 - Louise Poubel

The worst thing that could happen is that a small group of people, all similar to each other, develop robots and they ship these robots to everybody else in the world, and just impose this view and the needs of these small groups of people onto everybody else. I think it's really important to democratize it a little bit more.

16:06 - Saron Yitbarek

Whether you want to democratize the field, or you just want robotics to advance as fast as possible, the answer is the same; get more people involved, open things up and share.

So how do we invite more people to the robotic software revolution?

16:24 - Timothy Chung

We're very much interested in identifying where those brand new ideas might come into play.

16:28 - Saron Yitbarek

Timothy Chung is a program manager at DARPA.

16:31 - Timothy Chung

DARPA is the Defense Advanced Research Projects Agency.

16:35 - Saron Yitbarek

These are the folks who brought you GPS and the internet. They know how to build new tech. And Chung, who focuses on robotics, feels that group challenges where people from around the world compete are one of his best tools for inspiring innovations. For example...

16:55 - Timothy Chung

The DARPA Subterranean Challenge is a worldwide international competition really keen on identifying and discovering technologies for robotic systems that operate in complex underground environments.

17:10 - Saron Yitbarek

DARPA's Subterranean Challenge is similar to the NASA challenge I mentioned at the top of this episode, a way for a huge organization to tap the brainpower of the crowd. It's a kind of underground scavenger hunt they've been running since 2019. Teams deliver robots that fly, walk, or roll their way through a system of caves, hunting for objects planted by DARPA. They're testing robots and underground caves because a million bumps and cracks can make them stumble, and they want a robot that can stay the course.

17:44 - Timothy Chung

Nature has a way of keeping things unpredictable.

17:47 - Saron Yitbarek

They want an all-round athlete that can rise to random challenges. DARPA wants to develop robots that can navigate the world's most difficult settings. And yet, despite the very physical nature of this challenge, simulation software is still crucial. It aids in the development of the physical robots of course, but there's also a separate, entirely virtual competition run by DARPA. That one's called the SubT Tech Repo.

18:18 - Timothy Chung

The virtual competition's like your fantasy football league, where I provide you with 1,000 SubT credits, you get to go to the SubT Tech Repo and pick and choose the different robots that you'd like to add to your fantasy SubT team, and design your algorithms to best suit those robots.

18:38 - Saron Yitbarek

Those virtual competitors then modify sensors, or bring in new open source models that they find. They tailor things as they see fit.

18:48 - Timothy Chung

We've seen that type of vibrant interchange, and that's been phenomenal for the systems teams to see their robots being used; they might learn a thing or two from the virtual competitors.

18:59 - Saron Yitbarek

Chung has already seen advancements in code and design philosophy come out of these challenges. It's so much more than a scavenger hunt.

So, remember Kevin Knoedler?

19:11 - Voice Actor as Knoedler's child

I'm so hungry.

19:13 - Saron Yitbarek

The guy who won that NASA competition by designing a Martian rescue mission from his kitchen? Well, the same guy went ahead and won DARPA's Subterranean Challenge in 2019. And some of the teams he competed against were funded by DARPA. He was David against Goliath.

19:31 - Kevin Knoedler

I was quite proud of myself for being able to win a competition against those funded teams. Interestingly, of the top four, three of them were self-funded teams.

19:42 - Saron Yitbarek

Software has been an equalizer. Robotics was, for decades, a field where only rich organizations could make big advances, but software has begun to change all that. It's still often those with time and education who get to really dive deep, but the gates are beginning to open. More people than ever are discovering they can contribute.

20:06 - Kevin Knoedler

The availability of open source software is a huge deal in terms of making things easier. It makes things possible to do that would not be otherwise possible.

20:17 - Saron Yitbarek

And over at DARPA, Timothy Chung doesn't worry that those DARPA-funded teams were beat. In fact, the way he sees it, everybody wins. And meanwhile, every time Knoedler enters a competition, the whole community learns from him and the bar gets raised for next time.

20:34 - Timothy Chung

He continues to have to up his own game as the community continues to benefit and grow and excel. That's one of the advantages of competitions, it's—we like to call it co-opetition—where you can cooperate and collaborate with your fellow collaborators and competitors alike, and that just elevates everyone's game, at the end of the day.

21:00 - Saron Yitbarek

The old fantasies we had about robots, all those movies where robots were designed in secret laboratories, they really got something wrong. Secrets aren't good for innovation. And software, like ROS and Gazebo, mean that every roboticist from every background is invited to the field. New and unconventional solutions can come from anywhere.

When I think about the power that open source software has on robotics, the way it democratizes the field and pushes things forward, I have to remind myself that one day, these robots show up in real life too. The DARPA Subterranean Challenge matters because, for example, DARPA might create robots that help us rescue humans from a mining accident or a burning building.

The great thing about our robot dreams is that one day they become real. And next time on Command Line Heroes, we're exploring one of the most real moments in robot history. The moment that huge and visible robots arrived on the factory floor. These weren't just simulations or abstract pieces of software, factory robots were taking up space. And deciding how much space they should take up became a global debate.

Make sure to catch episode 3, and every episode, by following or subscribing now, wherever you get your podcasts. I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. Until next time, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-8/robot-as-software

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
