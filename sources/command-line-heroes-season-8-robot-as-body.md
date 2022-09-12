[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 8: Robot as Body)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-8/robot-as-body)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 8: Robot as Body
======

### Shownotes

For years, prosthetic technology focused on form over function, on masking lost limbs, rather than agency and usability. But things are changing. Innovations in robotics are giving more people more options, with lower thresholds of entry—and lower price tags, too.

Tilly Lockey takes us through her journey with prosthetic arms. Brian Schulz gives some history of mechanical prosthetics, and what it means for people to reach embodiment with their devices. Tyler Hayes talks about the software that made advancements in assistive technology possible. Charlie Kemp discusses his work building universal robot interfaces, and how they can benefit everyone. And Henry and Jane Evans explain how robots can help a person reach beyond their body’s limitations.

### Transcript

00:02 - Tilly Lockey

Hi, my name is Tilly. I am a motivational speaker, 15-year-old influencer, content creator, blogger, and bionic model.

00:10 - Saron Yitbarek

Hi Tilly. I'm really excited to get to interview you.

Tilly Lockey and I were hanging out on Zoom the other day. She was showing me her extraordinary arms: two prosthetic forearms with robotic hands. They're black, 3D-printed plastic, which is striking against Tilly's white skin. But she also swaps on whatever color she wants: pink, purple, sometimes even a jewel-encrusted option for—you know—red-carpet events.

00:40 - Tilly Lockey

My favorite part about the hands is how they look and how actually personable and customizable they are. I switch up all the cases to meet every outfit or my mood, just however I'm feeling that day. That's what's really fun about them.

00:54 - Saron Yitbarek

They're called Hero Arms. That's how they make her feel. Not like someone who needs extra help, but like a hero.

01:01 - Tilly Lockey

You could be out with Marvel. But that's exactly how I look at them, how everybody else looks at them, and how they make me feel as well. You just feel like a superhero all the time.

01:12 - Saron Yitbarek

When you spend some time with Tilly, you can't help noticing that she really is part of a new generation of prosthetic users. Her instinct isn't to hide her arms or hope they look biological. She wants you to see them. She's got bionic pride.

I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. All season, we're exploring the frontiers of robotics. This time we focus on a field that's rapidly advancing the field of robotic limbs.

In science fiction, you sometimes see robots that are indistinguishable from human bodies. Think of the Cylons in Battlestar Galactica or Ava in Ex Machina. We just assume that's where the tech would go. But something kind of different is happening in the world of prosthetics. As they advance, we get bionic arms like Tilly's, arms that celebrate their robotics. These are powerful, helpful additions to the human body. Not something to hide. This episode, we're discovering some of the most profound changes that the field of robotics has made.

02:25 - Tilly Lockey

You're not un-able. You just have to find a novel way to do things.

02:34 - Saron Yitbarek

One of the earliest mechanical prosthetics was invented in 1912. A sawmill operator got too close to the saw, lost his right hand, and came back to work sporting what he called the Dorrance Split Hook—named after himself, D.W. Dorrance. His invention allowed amputees to grip and manipulate objects, a big leap forward at the time. Still, it'd be another century before the prosthetics industry really came into its own.

03:04 - Brian Schulz

The earliest prosthetic I'm aware of is a carved wooden and leather toe that was used on an Egyptian mummy.

03:13 - Saron Yitbarek

Brian Schulz is the scientific program manager in charge of prosthetics at the Veterans Affairs Office of Research and Development. That means he knows how we got from wooden toes to Tilly's robo arms. The U.S. government is responsible for a lot of those advances.

Back in the early 20th century, the time of D.W. Dorrance, the United States Congress was setting aside money to buy prosthetics for wounded soldiers. But major research investments didn't arrive until the early 2000s when war vets from Iraq and Afghanistan were coming home with missing limbs.

03:50 - Brian Schulz

Around there, the revolutionizing prosthetics program started. DARPA (Defense Advanced Research Projects Agency) took the lead on that. I think it was shortly after 2000, and they developed what was then the DEKA arm and is now called the LUKE arm. That was the first robotic full-upper-limb-to-the-shoulder prosthetic device.

04:09 - Saron Yitbarek

The revolutionizing prosthetics program really was a revolution in the field, an unprecedented amount of funding and support for new tech.

04:19 - Brian Schulz

It's now coming to fruition in some very interesting things like the restoration of touch-to-prosthetic limbs and direct brain control and osseointegration.

04:28 - Saron Yitbarek

Thanks to government research, prosthetic limbs can be entwined with the human body. Hear Schulz describing their work on osseointegration, for example. This is where the device is built directly into the bone.

04:43 - Brian Schulz

There's no socket. There's no skin-related issues of wearing the socket and discomfort. You have a much better perception of what the device is doing and much better control of the device. But if it's connected directly to the bone, it's much more secure, and it's easier to use a heavier device.

04:59 - Saron Yitbarek

It also allows a pathway into the body, which means...

05:03 - Brian Schulz

Neural activation. Then, you have the potential to pass wires through the inside of the implant to attach to nerves and to have internal electromyography electrodes that can control the device much better and provide a sensation of touch from the prosthetic device's fingertips.

05:19 - Saron Yitbarek

It's an intimate new level of connectivity. The tech is starting to catch up to the hopes and dreams of users. The result is what Schulz calls embodiment.

05:30 - Brian Schulz

That is where a prosthetic user feels like the device is a part of their body and not a tool they're using. They feel it's their hand and not like a hammer they're wielding.

05:43 - Saron Yitbarek

The future of prosthetics could be one where we express ourselves and explore the world through robotic extensions that don't just mimic human body parts but extend what humans can do through the power of robotics.

That future has been seeded by U.S. government research. And their work has now inspired many in the private sector.

06:06 - Brian Schulz

VA (U.S. Department of Veterans Affairs) and government research are functioning to de-risk the technology.

06:10 - Saron Yitbarek

The field of prosthetics was once too expensive for most in the private sector. The customer base was just too small to make it feasible. But all that government research has changed the equation.

06:22 - Brian Schulz

The more we can work towards de-risking and advancing this technology, so it's a fairly straightforward device that is ready to go, that they can just license from us—that can help move things to market.

06:36 - Saron Yitbarek

Do you remember Gazebo, the robot simulation software we talked about in episode two? Well, in 2015, DARPA tasked the open source robotics foundation with developing Gazebo-based software that lets you design robotic limbs in simulation. You don't need a government-sized development budget anymore. You can spin up new ideas on a laptop. All this means that prosthetics R&D has radically improved.

So, all that free technology makes the field of prosthetics attractive to new businesses. But there's another carrot, too: the rise of 3D printing.

By the 2010s, you could 3D print a whole hand or an arm. An older company might charge US$50,000 for a myoelectric arm. Today, at a company called TrueLimb, they'll 3D-print an arm, and then add tendons, electronics, and batteries, all for about US$8,000.

Think how those advances change things for people wearing prosthetics, such a huge impact on accessibility. And then, think about children who use prosthetics. Children who outgrow those prosthetic arms and legs just as fast as they outgrow a winter coat. Accessible and advanced prosthetics are game-changers. For someone like Tilly Lockey, who has used prosthetic arms almost all her life, there's now an expectation that every year brings improvements. Her arms were amputated when she was just 15 months old. It was necessary after she contracted a dangerous blood infection. She got her first pair of prosthetics when she was only two.

08:30 - Tilly Lockey

And the way they operated was kind of like a puppet-type beat-

08:34 - Saron Yitbarek

Wow.

08:34 - Tilly Lockey

...where basically there was a hook on... I think it was the foam. It went all over my little two-year-old body. I was two at the time, so really, really little. Basically, the way I would move my shoulders, and my upper arms, and my neck would pull on strings to pull on these prongs and make them move left and right. It was like a kind of pinch motion.

08:54 - Saron Yitbarek

Side note: that hook technology she was given as a two-year-old, that was the same thing they'd been giving people for decades. No advances. No improvements. And a toddler with hook hands maybe wasn't the best idea.

09:09 - Tilly Lockey

I would get more enjoyment taking out my sister with this hook arm chasing her around, pretending to be Captain Hook. That's what I did with them. I just didn't even know what the hand was. I didn't know it was a hand. I didn't know what my parents were trying to accomplish.

09:25 - Saron Yitbarek

So yeah, they lost the hooks, and Tilly got some realistic-looking prosthetics, but they were largely useless.

09:32 - Tilly Lockey

Technology wasn't progressing fast enough. We had these realistic hands that were so much money, but they couldn't actually open wide enough to hold even a coat. I would be taking them off to do anything practical, even just from opening a door. I wouldn't be able to do it.

09:48 - Saron Yitbarek

Then, Tilly just asked herself.

09:50 - Tilly Lockey

What do I actually want in a prosthetic arm? It was a waiting game. I made a list of my three key things, which was: Number one, they did not have to look realistic at all. Then, also, I wanted them to have better movement, because I couldn't hold a cup. I couldn't open a door or anything like that. Lastly, they shouldn't make you feel like you needed to be ashamed. I should be able to be proud of that.

10:18 - Saron Yitbarek

You remember Tilly introduced herself as a bionic model? She works with a company called Open Bionics, which built her Hero Arms. Because R&D in the industry can happen so fast now, thanks to all that open source tech and 3D printing, Open Bionics can rapidly iterate when Tilly gives feedback.

10:39 - Tilly Lockey

I actually invented a feature in this arm. It's the freeze feature. If I squeezed my fist closed... You would've heard that beep.

10:47 - Saron Yitbarek

Yes.

10:47 - Tilly Lockey

I don't know if anyone heard that, but it beeped. It turned blue, the button on the back, a light blue. That basically represents ice. Now, no matter what I do in my muscles on the inside of the arm, the hand will not open until I squeeze for another three seconds.

11:01 - Saron Yitbarek

Interesting.

11:02 - Tilly Lockey

Then, it will beep, and I can open.

11:04 - Saron Yitbarek

What's the purpose of that? What value do you get from freezing your hand in a particular position?

11:09 - Tilly Lockey

See, this is a great question because it's something like, "Why would you need a freeze option?" It's something that a lot of people wouldn't think about. Only a person who's wearing the device is like, "You know what would be really, really handy?" Handy mind the pun. "To have like a freeze option."

You know what I mean? I just kept accidentally opening the hand. It's probably because I wasn't very experienced. I don't think then. I'm better at controlling that on my own now. But obviously, people need to be able to trust it even if they're just using it for the first week. You want to be able to hold a glass of water and know that you're not going to accidentally drop it. Smash on the floor and flood your carpet. You know what I mean?

11:48 - Saron Yitbarek

Yes.

11:49 - Tilly Lockey

Now, it's incredible to see, even all over the world, some people will say, "Oh, yeah. What's your favorite feature of the arm?" "Oh, I love the fact that you can have a freeze mode." And I'm like, "That came from me." It's so exciting to say.

12:02 - Saron Yitbarek

Aw! That's awesome.

Suddenly, the industry could respond to the needs of a teenager, learning from actual users about what's possible and what's wanted. Tilly feels like our prosthetic future is bright, and she's not alone in her optimism.

We spoke with Tyler Hayes about the cutting edge of prosthetics. He's the CEO of Atom Limbs, where they're building the world's first mind-controlled artificial arm. He calls it the Atom touch.

12:34 - Tyler Hayes

What software is in this arm? Imagine a Tesla but on your arm. It's basically the equivalent. There is absolutely machine learning, deep learning, and neural networks involved there. You can't really make something that's mind-controlled without doing something like that with artificial intelligence.

12:50 - Saron Yitbarek

Hold on, mind-controlled? The Atom Touch, which is set to come out in 2024, will receive messages from biological nerve endings. Those signals get interpreted via machine learning to understand what you're trying to do. Basically, you think it, and this prosthetic does the rest.

13:08 - Tyler Hayes

It's much simpler than I think a lot of people think it is. It's sort of deceptively simple. Now, it's incredibly hard to do. But it is that simple in concept.

13:18 - Saron Yitbarek

Hayes is satisfied with how far their motors, actuators, all the hardware has progressed. Now, Atom Limbs is working on what he calls the last mile.

13:28 - Tyler Hayes

We're working backwards from top-down, saying, "What can the human arm achieve?" Let's start there and hit that as aggressively as we can. Then, the gap that still exists between that—then we'll just hammer, hammer, hammer with R&D until we get there, which will probably take another 10, maybe 15 years to really get to that 99.9999% effectively recreated human arm.

13:54 - Saron Yitbarek

The limb Hayes is building doesn't just read messages from the brain either. It also senses the tactile world and sends messages back to the brain too.

14:03 - Tyler Hayes

The reason sense of touch matters so much is because visual feedback is a horrible system for motor control. If I turned off the sensory nerves in your arm, you would just be flailing your arm all over the place when you try to move it. You need a sense of touch, which also gives you proprioception, knowing where your limb is in space, to be able to move it effectively. Try, for example, lighting a match or tying your shoes. If your hand is numb, you won't be able to.

14:35 - Saron Yitbarek

Talking with Hayes, it's impossible not to get excited about the future of artificial limbs. I wanted to know, can we take this one step further? Could robotic technology soon be ready to replace not just an arm or a leg but a whole human body?

14:53 - Henry Evans

Hi, my name is Henry Evans.

14:55 - Saron Yitbarek

Henry Evans used to work as the CFO at a Silicon Valley startup. He and his wife, Jane Evans, were high school sweethearts. They married, had four kids. They just bought a new house when the unimaginable happened.

15:10 - Jane Evans

Almost 20 years later, I can still hear him saying, "I've never seen so much damage in someone so young."

15:18 - Saron Yitbarek

In 2003, Jane Evans was told by doctors that her husband, Henry, had been made into a mute quadriplegic by a massive stroke.

15:28 - Jane Evans

One blink was yes. Two blinks was no. He's going to be trapped in his body for the rest of his life.

15:36 - Saron Yitbarek

From blinks, they moved on to eye movements. Tracking what letters he looked at, so Evans could spell out words. His mind was sharp, teaming with ideas. Jane remembers the doctors once thought he had brain damage because he seemed to be spelling out gibberish. It turns out he was just pranking them.

15:55 - Jane Evans

I said to the doctors, "Oh, no. His mind is perfectly fine. He studied German in college and even spent a year abroad." I said, "He remembers all of it. He's writing to you in German." He laughed so hard. I thought he was going to fall out of the bed. But the doctors never bothered him again. They never came in and questioned his mind. Everybody stayed far away. To this day, he tells me it was almost worth having a basal artery dissection to see the look on their faces.

16:25 - Saron Yitbarek

Evans was very much there and hungry to be part of the world. Trapped inside his body, he kept his eyes open, looking for a solution. 10 years passed, though, and back at home, he began slipping into a depression.

16:41 - Jane Evans

It was a regular day. I'm sitting. I'm brushing his teeth. I'm washing his face. I'm giving him medicine. He would have CNN on. And Ali Velshi was there with Dr. Charlie Kemp of the Healthcare Robotics Lab at Georgia Tech. Charlie was presenting a PR2 robot.

17:00 - Saron Yitbarek

A PR2 robot. You might remember those from episode one this season. Made at Willow Garage in California, they're advanced, roughly humanoid, and capable of doing all kinds of basic jobs like folding laundry or grabbing you a cup of coffee.

17:16 - Jane Evans

Henry turned to me and said, "Why can't that robot be an extension of my body?" And I said, "Why not?"

17:23 - Saron Yitbarek

They started Googling, found out PR2 robots were made in Menlo Park, just 20 minutes from their home. Evans contacted Willow Garage, set up a meeting.

The folks at Willow Garage love the idea of a PR2 helping him out. He could maybe use it to feed himself or even shave himself. It could be his AMM, assistive mobile manipulator. So Charlie Kemp from the biomedical engineering department at Georgia Tech was brought in to develop an interface that Evans could use to control his new robot.

17:57 - Charlie Kemp

If you can't scratch an itch for yourself, and you really try to think about what that would be like—it's like, "Oh my gosh. Even if I have someone like Jane, who's the ultimate caregiver, I don't want to be asking her to do something for me all the time, and every time it happens. I want to be able to do it for myself."

18:21 - Saron Yitbarek

Kemp and his team got to work, designing a way for Evans to control the PR2 so the robot could become an extension of his own intentions. They knew that, thanks to adaptive technology, he can move a mouse around a computer screen and click on items. They created an augmented reality interface. On the display, Evans might see a mock-up of his house or maybe a lab that he's visiting. The PR2 is there on the screen too. Evans can use the computer to move the robot around, almost like he's playing a video game. And the real PR2 moves in real space. He can control its arms and hands too. He can get basic jobs done, like shaving his face and putting things away in drawers. And here's the thing. It isn't just an interface for Evans alone. They've built this interface using standard web technologies.

19:16 - Charlie Kemp

That ended up being really important later when we went beyond Henry—and Henry and Jane always… This wasn't just about helping them. The goal was... It was robots for humanity. It was to help anyone who could benefit from this technology. By using web-based standards that allowed other people to use this robot with whatever they are used to. So if they use a sip-and-puff controller, or a joystick, or if they use speech; however, they use the internet, they could use that same method to control the robot.

19:48 - Saron Yitbarek

That universality was important to Evans too. He founded Robots for Humanity to help others connect with the world via robotics. On their website, you see Ultramouse, which can be controlled via head movements, or WhiskeyBot, which helps you sip a single malt. There's even a Scratchbot. These may seem small, even comical in scope, but it's all about giving daily agency back to people like Henry Evans. It's a bold mission, and Kemp is the first to admit that robots have a way to go before they're ideal helpers for the disabled.

20:26 - Charlie Kemp

One of the things we're working on, and I think this is a general trend, it's to make the robots friendlier, to make them more affordable, to make them lighter, more compact.

20:36 - Saron Yitbarek

Yeah, that PR2 robot, all 400 pounds of it, is only a starting point. The PR2 is fantastic but not terribly graceful.

20:45 - Jane Evans

If it were to run over your feet, it would most likely crush your bone.

20:50 - Saron Yitbarek

It's a first effort at something extraordinary. Henry and Jane say that even getting a robot to scratch an itch is incredibly empowering for him. I wanted to make sure we gave Henry the last word here, so he prepared a final thought about his newfound work with robots.

21:08 - Henry Evans

It's a terrible feeling of loss and helplessness to almost instantaneously go from being a highly productive member of society to being a daily burden on your loved ones, to not be able to do anything for anybody, including yourself. It's hard not to become despondent. So when an opportunity comes along to actually do something constructive with your life, you jump for it. It's like giving a starving man a way to earn a square meal. It gives your life purpose, which is everything.

21:41 - Saron Yitbarek

Just about everybody on the planet now uses technology to reach out and engage with the wider world. The stories in this episode make me realize we're all on a continuum, all using tech to varying degrees to help us make connections. Robotics are just operating at the upper end of things, pushing the limits of human agency. For Tilly, that meant helping to design her own hands. For Henry, that meant reaching beyond his body entirely.

I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. Keep on coding.

Okay. I want to share one last example of why these robotics matter.

Henry was the ring bearer at his nephew's wedding. His body was in his bed back home, but he drove his robot up the aisle, gave them the rings, and everyone saw his beaming face on the robot's display. How's that for embodiment?

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-8/robot-as-body

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
