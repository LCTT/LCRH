[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 8: Robot as Threat)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-8/robot-as-threat)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 8: Robot as Threat
======

### Shownotes

When a robot goes bad, who is responsible? It’s not always clear if the user or the manufacturer is liable when a robot leaves the lot. Human behavior can be complex—and often contradictory. Asking machines to interpret that behavior is quite the task. Will it one day be possible for a robot to have its own sense of right and wrong? And barring robots acting of their own accord, whose job is it to make sure their actions can’t be hijacked?

AJung Moon explains the ethical ramifications of robot AI. Ryan Gariepy talks about the levels of responsibility in robotic manufacturing. Stefanie Tellex highlights security vulnerabilities (and scares us, just a little). Brian Gerkey of Open Robotics discusses reaching the high bar of safety needed to deploy robots. And Brian Christian explores the multi-disciplinary ways humans can impart behavior norms to robots.

### Transcript

00:02 - Voice Actor as Jingle Narrator

Are you still struggling to keep those pesky pieces of paper together? No more, my friend. Introducing the Paperclip Maximizer Bot 3000, a robot whose sole purpose is to produce as many paperclips as possible. The future of office supplies has never been so bright.

00:22 - Voice Actor as News Announcer

We're interrupting this broadcast to bring you updates on the catastrophe playing out downtown. It looks like the Paperclip Maximizer has torn apart most of the city's buildings. It's repurposing them into piles of … well … paperclips. I'm told the company's founders ... \[voice trails off\]

00:42 - Saron Yitbarek

When it comes to robots, even the most innocent of intentions can go awry. They obey the letter of the law, but not the spirit. A Roomba might try to vacuum up your cat, for example. Making sure robots don't cause harm has become a crucial field of research, and figuring out who is responsible for what as robots become more a part of our lives is more difficult than you might imagine. When a machine has some measure of autonomy, like a lot of robots do, is the manufacturer responsible for its actions? Is the user? Could a robot be held responsible?

I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. All season, we've been tracking the fast-evolving field of robotics. And this time we're asking, what happens when good robots go bad? Who's responsible for their actions and who do we blame when a Paperclip Maximizer Bot 3000 decides to destroy the city?

We'll come back to that disaster scenario, an interesting thought experiment by philosopher Nick Bostrom. But first we need to grapple with some immediate worries because questions about robotic responsibility are already here—and the stakes are high.

02:11 - Voice Actor as Paperclip Maximizer Bot 3000

Paperclips… More paperclips.

02:16 - Saron Yitbarek

So, who is responsible when robots do harmful things? If I cut my hand while preparing dinner, I'm not going to blame the company that made my knife. But robots are different. Sometimes robots have a degree of autonomy. Sometimes their inherent wiring controls their decisions—and that means responsibility in the world of robotics is a lot more confusing. Our search for robot responsibility begins with the folks who make them, the manufacturer. What responsibility might they bear even after the robot's been sold?

02:55 - Ajung Moon

No, one's really teaching me what I'm supposed to do, what I can or cannot build using the powers I have.

03:03 - Saron Yitbarek

Ajung Moon is an assistant professor at McGill University. She studies the ethical consequences of AI and robotics. Moon says her students are engaged by these questions in a way that previous generations might not have been. They're pushing to understand the multifaceted responsibilities of this field, and the role manufacturers play when designing robots is especially blurry.

03:29 - Ajung Moon

They don't have a lot of legal responsibilities to make sure that everything that they put out the door is used for ethical reasons and purposes.

03:38 - Saron Yitbarek

Fact is, it's almost impossible to know how somebody will use a robot once it's sold. People constantly come up with innovative ways to use robots. The New York Police Department, for example, purchased robotic dogs and repurposed them to help with police work. They didn't exactly weaponize their robots, but they did use them on patrols and in some perceived dangerous situations. That got a lot of people anxious. New uses for technologies are often positive. They can move things forward. But manufacturers that are wary of unplanned uses could revisit their user agreements.

04:15 - Ajung Moon

The fact that these machines can make certain “decisions” or behave in a particular way in contexts that the designer hasn't necessarily hard-coded into the system or has thought through fully—that allows for a little bit of uncertainty to be built into how users interact with the system.

04:38 - Saron Yitbarek

A user agreement might include a promise that you won't use the robot to harm a human or won't allow the robot to be easily hacked. Both those things are easier said than done. And the more powerful the robot, the more specific that contract needs to get.

04:55 - Ajung Moon

For example, back in 2014, ClearPath Robotics released a statement saying we are building these field robots that can be used underwater, above ground, and so forth. And it has a lot of military use and it continues to have military clients. But they've recognized that retrofitting these systems to become “killer” robots or robots that are weaponized is not good for society. So they've essentially made it so that it is their responsibility to communicate that their clientele would not be using the technologies for those particular killer robots purposes.

05:37 - Saron Yitbarek

Moon has recently been purchasing robots for her lab, so she's seen a few user agreements lately. ClearPath's contractual language about ethical boundaries was some of the most direct out there. Why the use of such strong language for their robots?

05:56 - Ryan Gariepy

I'm Ryan Gariepy, and I am the CTO and co-founder of ClearPath Robotics and Auto Motors.

06:03 - Saron Yitbarek

ClearPath created the Husky robot, an all-terrain four wheeler about the size of a dog. They've made other animal-named robots for research too: a dingo, a jackal, a moose. And they work with some heavy duty robotics companies, places like Boston Dynamics and Universal Robots. So Ryan Gariepy knows the field. He sees his robots used by new startups and corporate innovation programs.

A seafaring robot patrols the ocean, looking for dangerous algae blooms. Another might be used to haul material at a mining site. And the scope of all that work means Gariepy can't know exactly how his robots are going to be used.

06:47 - Ryan Gariepy

We have to do a degree of know-your-customer research because these robots can be repurposed for some fairly harmful roles if they do get into the wrong hands.

06:57 - Saron Yitbarek

Partly, that connection with customers is about screening, making sure customers have the right intentions. But it's also about education.

07:06 - Ryan Gariepy

Robotics might be the technology that has the widest gap in the real world between perception and reality. We don't want to release technology to people who are going to hurt themselves with it.

07:21 - Saron Yitbarek

Gariepy says that as a manufacturer, he has three areas of responsibility. There are legal responsibilities for sure—things like export control. And then there's a responsibility to his customers to make sure they're set up to succeed. What's really interesting is this third area of responsibility.

07:41 - Ryan Gariepy

I think we do have a responsibility to society, and that's where we've engaged with governments in the past. That's where you'll find that we've been very outspoken on the need to regulate some more extreme uses such as lethal autonomous weapons systems. So we do have these areas because in the end, a manufacturer can only control the technology that they developed so far. So it's important to engage with the rest of society and inform people about where they should be worried and where they shouldn't be worried.

08:13 - Saron Yitbarek

Ultimately, the manufacturer can educate the public, can push for good policy, but the power to manage a sold robot is going to be limited.

08:23 - Ryan Gariepy

If you find out that someone is using a product that you have sold them and that they have title to, legally, there's nothing that you can do. And it doesn't make any sense to claim that you can do things that legally you cannot. If you've sold them an asset, it's theirs. That's the current laws that we operate within.

08:45 - Saron Yitbarek

And yet Gariepy points out that as a manufacturer, you're not totally powerless.

08:51 - Ryan Gariepy

However, if they did mislead you about the purpose of their assets, then you are of course free to withdraw support.

08:59 - Saron Yitbarek

And that's something I hadn't thought about. One thing we've learned about this season is that the robot revolution is in large part a software revolution. And that means somebody who just buys a robot is in the long run going to be tied in a way to software providers. And that makes it a little more difficult for anybody to go rogue.

Folks will always find ways to hack, to modify, to repurpose. It's a core part of technology's history. And Ajung Moon says those modifications will keep happening with robots, too. But that doesn't mean we give up on creating safe systems.

09:39 - Ajung Moon

It's really interesting to discover new ways that these robots and AI systems are impacting our lives, our behaviors, our decisions. But that should be coupled with more directed decisions on what are some of the harms that can result from these technologies being deployed and how do we prevent that.

10:05 - Saron Yitbarek

To really prevent harm, it's not enough to have responsible manufacturers. The users are being tasked as well. And that makes the question of robot responsibility even more complicated.

10:20 - Stefanie Tellex

Hello from the hackers.

10:22 - Saron Yitbarek

Stefanie Tellex is an associate professor at Brown University. Her lab makes autonomous collaborative robots, and she's also very interested in robot vulnerability. One day, a couple of years ago, Tellex learned something that intrigued her.

10:39 - Stefanie Tellex

I learned that it was possible to scan the whole internet for a particular port.

10:44 - Saron Yitbarek

That seemed incredibly important to her because, as we described earlier in the season, there's a standard operating system for robotics called ROS, the robot operating system. And ROS uses a particular port, number 11311. What all this means is that Tellex could search the internet for any ROS users who weren't protecting their system.

11:09 - Stefanie Tellex

And I know from my own personal experience that we are not being particularly careful to secure our robots. And if we can scan the whole internet, we just have to do it as soon as we can, because it's going to be awesome.

11:23 - Saron Yitbarek

So they scanned the internet for ROS ports. They found a lot of them. And what's key here is they found folks using ROS with sort of a wide-open door. There were dozens and dozens of people running ROS with no firewall at all. They found a DaVinci robot, for example. This is the kind they use for surgeries. It had a ROS interface and essentially no security.

11:48 - Stefanie Tellex

We didn't actually try to move the robots. We didn't actually read any sensor data off of them because we felt like that was too far to be ethical.

11:55 - Saron Yitbarek

But they could have…

11:58 - Stefanie Tellex

We could have, and a bad actor could have, we think.

12:00 - Saron Yitbarek

Turns out, one of the robots running ROS that Tellex found was owned by a colleague of hers.

12:06 - Stefanie Tellex

We found your robot. We'd like to do a proof-of-concept attack on it.

12:10 - Saron Yitbarek

So they agreed on a time.

12:12 - Stefanie Tellex

And we're going to try to read the sensor data and we're going to try to move the robot—and then we did. So we actually were able to read sensor data, read the camera. We were able to make it speak. We played sound out of the speakers. So this is just to show that if you're running ROS and you haven't secured the port, anybody on the internet can publish and subscribe, and they can read your sensors and they can move your actuators.

12:38 - Saron Yitbarek

Tellex finds that researchers are especially careless with their robot security. In fact, she even found one of her own robots hanging out on the internet, unprotected. Her lab had opened a ROS port and just left it open by accident. Tellex feels that running these scans and closing off attack vectors is going to become a regular part of good robot maintenance.

13:05 - Stefanie Tellex

I really want to find my buddy's robots at other universities and give them crap about how they're insecure. That seemed really fun to me. Maybe I'm a bad person, but I wanted to do that. And I also thought, "Wow, this is something that I didn't know. I bet a lot of other roboticists don't know it as well."

13:27 - Saron Yitbarek

Tellex says that everybody using internet-connected robots should be doing a certain amount of basic security maintenance. Whether we're using robots for research or managing robots at a factory, we each have our own share of responsibility. And that, it turns out, is by design.

ROS, the robot operating system, is primarily maintained by Open Robotics. But as Tellex discovered, they count on users to secure robots at the network level. Brian Gerkey, the co-founder of Open Robotics, explains why.

14:04 - Brian Gerkey

We made the decision early on that we're not security experts. We didn't want to invent some security mechanism and get it wrong. We didn't want to make the wrong guesses about what the threat models are. And so we made it very clear from the beginning, we're building a system that can connect to a network and we didn't build any security in. And so what you need to do as a user is take appropriate precautions and use modern networking tools to wrap this system so that it's not exposed on a network where it can have threats.

14:32 - Saron Yitbarek

Truth is, hackers are always going to be there. Some can mess around with industrial robots already, and sometimes they can hack into the microphones and cameras of robots in your home. Any robot that's connected to the internet is potentially vulnerable, but there are precautions that users can take. Remember the PR2, one of the robots we talked about earlier in the season? It runs on ROS and Gerkey who worked with PR2 says ...

15:01 - Brian Gerkey

That robot, the only way to connect to it was through a VPN or virtual private network. And we put that out there as an example of how to deploy a robot that runs ROS. And I'd say that if you look at deployments of robots from the many, many companies who are using ROS when in production, they're following a very similar model.

15:23 - Saron Yitbarek

Open Robotics has since created ROS2 where they're trying to embed some security into a distributed system. But users still have to configure things to their own needs and take on an active role.

15:36 - Brian Gerkey

With ROS2, you can actually enable security at the application level. We would still advise you not to expose your ROS2-based robot directly to the internet. I mean, frankly, that's bad practice for any device anywhere. Basically, no device should be directly exposed to the internet without incredibly high levels of security applied, which are generally not applied to most devices.

16:00 - Saron Yitbarek

Gerkey is aware of Stefanie Tellex's work, exposing those vulnerable ROS users, and he's not totally surprised by it.

16:08 - Brian Gerkey

Back in the day when we had the PR2 robots running around, one of our interns showed up to the office one day—I think either very early or on a weekend, and didn't have his key with him. And he was a very creative guy, and he got on his laptop, connected to the wifi network in the building, which required credentials to access it. It wasn't open to the public. But then used that connection to get onto one of the robots and then drive the robot over to the door and push the door from the inside and let him in. So it was actually a robot mediated to break in.

16:43 - Saron Yitbarek

That example of course, is a bit like somebody taking over your Roomba. Not too big a worry. But what if the same kind of hack allowed someone to take over a car or a piece of heavy machinery at a factory? Suddenly you've got a major problem. We've all heard stories about hackers getting into IOT devices, but the difference with internet connected robots is that they're moving. They're manipulating the world—and that instantly becomes more serious.

17:14 - Brian Gerkey

There's certainly a higher bar whenever you deploy something out in the world.

17:18 - Saron Yitbarek

And to meet that higher bar, we're going to explore one final level of responsibility. We've already looked at the manufacturer's role and the user's role. But what about the robot itself? Can we hold robots responsible for their own actions?

Science fiction authors have spun up robot disastrous scenarios ever since the word robot was first coined. There have been fantasies of SkyNet and a laundry list of robot rebellions. But it was a philosopher called Nick Bostrom who described a subtler and maybe more likely disaster. Bostrom suggested that a super intelligent, goal-oriented robot would consume everything in sight, including the planet's resources in order to accomplish its one goal.

18:24 - Brian Christian

It goes about turning the entire planet into paperclips, including all of the human beings and everything that we hold dear.

18:35 - Saron Yitbarek

Brian Christian is telling us about this thought experiment. He's an author and researcher at UC Berkeley and has become a leading thinker on the future of tech and how it impacts humanity.

18:47 - Brian Christian

It offers us a different vision than the SkyNet Terminator vision. In this case, it is not necessarily that the AI takes on a set of goals that are contrary to our own, but rather it's trying in earnest, in good faith, to do exactly what we asked it to do.

19:05 - Saron Yitbarek

Hmm. So how do we avoid getting turned into paperclips? It's a harder problem than you might think. If we give a machine a goal and then let it run on its own, we've got to be absolutely positive that goal doesn't interfere with other goals like human safety. In other words, how do we give robots a sense of responsibility toward not just a narrow goal, but the larger interest of humanity? How do we make sure that our robots are pursuing the things we truly desire? We might try the machine learning route, giving robots fewer explicit instructions, letting them learn through countless examples all on their own. But that has its problems, too.

19:51 - Brian Christian

It turns out to be extremely difficult to make sure that the system is learning exactly the thing that you have in mind when you taught it and not something else.

20:03 - Saron Yitbarek

So what's the solution? Christian suggests that we could avoid the Paperclip Maximizer robot by moving our thinking beyond the single-mindedness of corporate goals and thinking about the goals of multiple disciplines at once.

20:17 - Brian Christian

I think it's really going to take a pretty holistic approach to solving this problem. There has been an increasing awareness dawning on people in the computer science and machine learning community, that they really need to address these problems in dialogue with people in other fields—people who have disciplinary expertise, whether it's doctors in the medical context or people with a criminal justice expertise. And a lot of these problems I think exist in the boundaries between those disciplines.

20:51 - Saron Yitbarek

Aligning a robot's goals not just with the goals of those who created the robot, but also with the goals of people who actually interact with that robot, people whose lives are touched by that robot is one level of work. And then, in addition, we may need to move beyond simply shoveling millions of data points at our robots. We may need to find some entirely new way to help robots learn what really matters to human life.

21:20 - Brian Christian

There's been a lot of work by the theoretical computer science community around can we avoid having to translate all of the things that we want into this numerical form? Might there be other ways to impart our norms, our values, our desires into a system.

21:40 - Saron Yitbarek

Can we, in other words, give robots a sense of right and wrong instead of uploading every single example of what is considered right and wrong? It's a problem as sprawling as the field of robotics itself. But that's the next level of robot responsibility—translating our real complex, messy values and desires. And it means in addition to making manufacturers and users responsible for robots' behavior, we need to start giving robots a sense of responsibility that's all their own.

You might've noticed in this episode, there are a lot of stakeholders. You've got the manufacturer, you've got the user, you've got the robot itself, and that's the point, really. Designing a robot future that works for everybody means bringing everybody to the table. The more that robots move through our lives, the higher the stakes get. We're forced to think about who gets to offer input and who gets to help design our robotic future.

Next time, it's our season finale. We're looking at the robot revolution that's been rolling toward us for over a century: the self-driving car.

I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. Keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-8/robot-as-threat

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
