[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 8: Humans as Robot Caretakers)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-8/humans-as-robot-caretakers)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 8: Humans as Robot Caretakers
======

### Shownotes

HitchBOT was an experiment in stewardship: A small, rudimentary robot unable to move on its own, depending on the kindness of passersby to help it along its journey. Until it met an untimely end. Trust is a two-way street, and because robots are not powered by their own moral code, they rely on humans to supply both empathy and support.

Dr. Frauke Zeller shares HitchBOT’s origin story. Eli Schwartz recounts his heartbreak upon learning what happened in Philadelphia. Dr. Julie Carpenter analyzes why it all went down. And Georgia Guthrie epitomizes the outpouring of sympathy that followed. Together, they tell a layered story about humans, and how we respond to robots. With HitchBOT, we find a little hope in the shadow of its demise.

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

00:01 - Saron Yitbarek

The story begins the way a lot of hitchhiking adventures start out. There's an innocent faith in the kindness of strangers. But when our hitchhiker arrived in Philadelphia in the summer of 2015, it was the end of the road.

00:20 - Voice Actor Playing CSI 1

Guys, over here.

00:22 - Saron Yitbarek

Hitchhiking can be dangerous …

00:25 - Voice Actor Playing CSI 2

I think I found something

At least parts of something.

00:29 - Saron Yitbarek

... especially when you're a robot. You know, humans spent a lot of time worrying about the evil things robots might do to them. We worry whether we can trust our robots, but we don't often wonder whether our robots can trust us—and the answer to that question matters more than you might think.

I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast for Red Hat. 

This season, we're exploring robots every way we can. But this time we're flipping things around a bit and looking at ourselves. Can a robot trust a human? And why should we humans care whether they can or not? To answer those questions, we begin with that hitchhiking robot you just heard about. Its name was HitchBOT, and it was designed to travel the world, relying on the kindness of strangers who gave it a ride from town to town. HitchBOT had a larger goal, though. It was designed to explore, not just new landscapes, but new dimensions of human empathy.

01:42 - Frauke Zeller

Till today, we don't really know what happened.

01:44 - Saron Yitbarek

Frauke Zeller is an associate professor in the School of Professional Communication at Ryerson University in Toronto. She's deeply interested in human-robot interaction, and she studies this problem by putting robots in odd situations. She teamed up with David Harris Smith from McMaster University, and the pair started thinking of ways to push robots into uncomfortable situations—areas where they'd have to rely on human kindness.

02:13 - Frauke Zeller

We came up with the idea of a hitchhiking robot, because nobody would ever expect a robot to be hitchhiking.

02:21 - Saron Yitbarek

A hitchhiking robot. A robot with no ability to walk on its own, thumbing, a ride all the way across a country. It was Smith who suggested they leave it on the side of the road and abandon little HitchBOT to its fate. What better way to see whether a robot really could trust the humans it encountered?

\>02:40 - Frauke Zeller

And because I was trained more on human-robot interaction, I said, "We can't do that." First rule of thumb, you'd never leave your robot out of sight.

02:50 - Saron Yitbarek

It wasn't that the hardware was especially valuable. Inside HitchBOT's body, there was just a tablet, a GPS, a mic, and a camera. Still, Zeller worried for the robot's survival. To make HitchBOT's travels as safe as possible, she knew they'd have to appeal to basic human empathy.

Step one, Zeller wanted the body of the robot to be unintimidating, and they went all-in on that idea.

03:16 - Frauke Zeller

We wanted people to not feel there’s something absolutely alien and super shiny—so that you might be more intimidated actually to touch it because you might break it. “Yard sale chic.” We want people to see something they all know, right? They have in their basements. So there was a beer cooler—was the body—and had pool noodles as arms and legs, and rubber boots, and the face was a cake saver. People think that was such a cheap project. It wasn't.

03:45 - Saron Yitbarek

It was the brains of HitchBOT that took a lot of effort. Custom-designed software lived inside that beer-cooler body. But yeah, the body itself was, as Zeller put it, yard sale chic. The robot would have to be carried into cars and back out onto the road. It gets stuck sitting on gravel, mud, dirt, but this helplessness was by design.

04:08 - Frauke Zeller

We decided to have it a size of a, let's say five-, six-year-old child so that people would form some kind of trust. But also, hopefully, that it would convince people it needs help.

04:21 - Saron Yitbarek

Two things are happening here. HitchBOT is being embodied, for one. It has a real body that's designed to inspire care. But also HitchBOT circumstances encourage physical interaction. You have to help with things like seatbelts. You have to take on some responsibility—and to Zeller's surprise, once HitchBOT started traveling on its own, the general public found new ways to encourage empathy.

04:47 - Frauke Zeller

They started to paint eyebrows and eyelashes on it and nail polish. And they designed jewelry for the robot. It even came back once with a little backpack.

05:00 - Saron Yitbarek

Thanks to that custom software in its brain, HitchBOT could chat with strangers. They could ask it where it was headed, where it was from.

05:08 - Frauke Zeller

You wouldn't believe how many people started to get really concerned on social media. Lots of people said, "Oh, I'm so close to just jump in my car, and drive there, and try to find it, and make sure it's okay." It was amazing. It was really wonderful.

05:23 - Saron Yitbarek

Some robot purists missed the point though. It was so low key; they weren't impressed.

05:29 - Frauke Zeller

Many people kept telling us "it's not a robot." I said, "It is." Because a robot has to have at least one moving part, and that was the arm with the thumb going up for hitchhiking, right? But I think that really helped with the trust-building because there weren't any unforeseen movements or sudden movements.

05:45 - Saron Yitbarek

Zeller wasn't trying to impress the crew at NASA or compete with the dancing robots of Boston Dynamics. She was trying to inspire care and love. To make that happen, embodiment and physical interaction did a lot of the work. She also had a secret bonus tool to work with—social media. After all, she teaches professional communication. Designing social media strategies is part of her work, and soon HitchBOT had a massive online following.

06:15 - Frauke Zeller

We did find out that we had thousands, really thousands of people forming a connection, being really interested, being worried about the robot and following it every day, who never actually physically met the robot.

06:33 - Saron Yitbarek

So things were going well. They were going amazingly. HitchBOT made its way across Canada. It made its way across Germany next, and then the Netherlands. The world seemed to be rooting for this little mechanical pal with its pool noodle arms.

06:48 - HitchBOT

Hello, I am HitchBOT.

06:51 - Frauke Zeller

We did hear from so many people in the U.S., "Bring it to the U.S. We can do that too. That would be lovely."

06:57 - HitchBOT

This summer I am traveling across the United States of America from Boston to San Francisco.

07:04 - Saron Yitbarek

So eventually Zeller's team did bring HitchBOT to the States. It was once again, left on the side of the road—this time near Boston. By now it had become something of a celebrity. And who knows? Maybe it was that fame that changed everything. Maybe HitchBOT, as a well-known robot, couldn't give off the same kind of vulnerability from earlier days. All we really know is that all that trust that humans had earned went suddenly, horribly missing.

It seemed like another ordinary day when just outside Boston, Zeller gave HitchBOT her usual farewell. She tapped it on the head and said, "Goodbye, HitchBOT."

07:51 - Frauke Zeller

Never expecting an answer, of course, it said suddenly, "I think I changed my mind."

08:02 - Saron Yitbarek

Days later HitchBOT was found beaten on the ground. It had made it about a five-hour drive from Boston to the streets of Philadelphia. There, somebody ripped it, limb from limb, and left it on the curb. There were no suspects, no leads; just a photo of the torn apart robot, which was sent back to its makers. For Eli Schwartz, an IT professional from Massachusetts, that photo said it all.

08:33 - Eli Schwartz

That is just the epitome of human society in a single photograph. This pure innocent creature crushed under the weight of Pennsylvania.

08:49 - Saron Yitbarek

Eli is … a pretty big HitchBOT fan. When he and his friends heard that HitchBOT had started its American journey in their home state, they were desperate to be of help along the way. They tracked HitchBOT's whereabouts as it began to ride west—waited ready.

09:07 - Eli Schwartz

So at this point, I had already gotten out and gotten gas. We had bought sandwiches at the store and put them in the fridge, and we were in full, like, go-bag mode.

09:18 - Saron Yitbarek

For Schwartz, the idea of taking care of HitchBOT was a beautiful thing. He planned to give it a ride all the way to DC.

09:26 - Eli Schwartz

It was an interesting concept in and of itself. This sort of pure idealism that's like, "We've built this pool noodle robot, and it has no functions. There is no prize. There's no punishment if you don't do it. It's just—get it on its way. Just move this thing that is humanoid, and has its own personality, and Twitter account to the other side of the country. Go, no rules." I thought that was noble. It's the most pure experiment.

09:54 - Saron Yitbarek

Ultimately, Schwartz and his friends missed their chance, and HitchBOT cruised onward to Pennsylvania where, well, it met its end. Maybe the journey would have gone better if Schwartz had been able to pick it up. He was compelled to help.

10:10 - Eli Schwartz

The single, least-threatening robot that I think has ever been designed by humans.

10:15 - Saron Yitbarek

And yet someone didn't feel that way. Someone felt they needed to rip it apart, even behead it. The vandal was never caught, and Schwartz was left wondering was HitchBOT's destruction an indictment of Americans? Was it an indictment of humans in general?

10:33 - Eli Schwartz

I remember being physically sad, genuinely, genuinely gutted. My first thought was, why are we like this one? Why… Why can't we have nice things?

10:46 - Saron Yitbarek

Zeller had to bring all her communication skills to bear after HitchBOT was destroyed. She suddenly needed a whole crisis communication strategy. They'd done such a good job inspiring empathy for HitchBOT that when it was destroyed, the world began mourning.

11:04 - Frauke Zeller

We weren't prepared at all for the huge wave of emotion and people were so sad. Again, express the sadness and mourning, really mourning. They talked about this through their creativity. We had lots of songs being sent to us, images, pictures, everything. It was wonderful in a way, heartbreaking, of course.

11:27 - Saron Yitbarek

One child even sent Zeller a couple of dollars in the mail, hoping it would help her build HitchBOT again. So how did this happen? If so many people love HitchBOT, why the sudden violence? It turns out that no matter how much embodiment and physical interaction you build into a robot, there's always an underlying risk, a threat. For all the care robots can elicit from us, they can also elicit a brutal and violent response.

11:57 - Julie Carpenter

It could be science fiction. They've seen too many _Terminator_ movies. I don't know.

12:03 - Saron Yitbarek

Julie Carpenter is a research fellow at California Polytechnic State University. She studies human behavior toward emerging technologies. She offered several possible reasons why humans would betray a robot's trust. We might not recognize the robot as somebody's possession.

12:21 - Julie Carpenter

Lack of really understanding that the robot is not autonomous, so it's private property.

12:28 - Saron Yitbarek

Or we might be curious about pushing boundaries.

12:31 - Julie Carpenter

Will I feel something if the robot reacts? Will the robot scream in pain? Will the robot cry? Will the robot laugh and mock me?

12:39 - Saron Yitbarek

Or we might just be afraid of robots on an existential level.

12:43 - Julie Carpenter

They could have more of a real concern about data collection and privacy issues, and they're like, "I didn't consent to be part of this." We see that sometimes when people attack security robots in stores.

12:58 - Saron Yitbarek

Whatever the reason for human-on-robot violence, studies find that most of us are more like HitchBOT's fans. We hate to see a robot being abused and Carpenter's research has actually found humans very often take stewardship over robots—even start feeling protective of them, like pets. She studied soldiers, for example, who specialize in explosive disposal. They work alongside squat, little robots that look like miniature tanks. And these soldiers start off thinking of the robots as a simple tool, but soon they form an attachment.

13:38 - Julie Carpenter

It moves, animation… We learned—and how something moves in your space as if it has intent, because the robot, in this case, does have intent. It has a goal it's following through with. And something in us just goes, "Oh, this thing looks like it's got internal motivation and thinking."

13:56 - Saron Yitbarek

That can be enough to make us care. Even without all the embodiment tricks that Zeller used to promote a little empathy. But Carpenter is quick to point out that ultimately, it's the human side of this trust relationship that really matters.

14:11 - Julie Carpenter

They're not going to trust us because they're not sentient. They just simply follow goals, their own goals that we give them, and rules that they learn or follow.

14:23 - Saron Yitbarek

When a robot like HitchBOT gets betrayed by human beings, it's human beings who have to wonder what it says about them—and what it says about the way we work with robots in the future. HitchBOT itself isn't especially worried.

14:38 - Julie Carpenter

They don't really identify risk the same way we do. They certainly don't identify physical risk or care about physicality the way we do. We understand life is finite, that we can be in physical danger, emotional danger. Robots don't have those things to be concerned about.

14:58 - Saron Yitbarek

Breaching the trust of a robot really means that you're breaching the trust of all those humans who care about the robot. So when we ask whether humans can be trusted with a random vulnerable robot, like HitchBOT, we're really asking whether humans are ready to support each other as we enter a robotic future.

15:22 - New Anchor 1

Pick it up.

15:22 - News Anchor 2

Yeah, it just hitchhikes.

15:23 - News Anchor 3

And there were instructions on what you do with this.

15:26 - News Anchor 4

And it's been to Germany, Netherlands and it's been across Canada.

15:30 - German News Anchor

\[German news announcement: No love in the city of brotherly love. HitchBOT’s remains will be shipped back to Canada.\]

15:30 - News Anchor 5

Well, it's a sad end for a much-loved robot, just two weeks into its U.S. tour. Funeral arrangements are yet to be made, but HitchBOT will be memorialized on its website.

15:44 - Saron Yitbarek

Even in its gruesome death, HitchBOT had become a media sensation. Fans around the world were downcast. Whoever had done this crime had gotten away with it, slinked back into the shadows. And all the trust, kindness, and care that HitchBOT had inspired seemed to be threatened. 

But folks weren't about to let HitchBOT die a meaningless death.

16:10 - Georgia Guthrie

I can't get over how much people love robots. I really had no idea before that situation happened.

16:20 - Saron Yitbarek

When HitchBOT was destroyed, a lot of people living in Philadelphia felt their city was somehow responsible. It's a place with a reputation for being a bit rough, a little inhospitable to outsiders. Georgia Guthrie found herself at the center of a group that wanted to push back on those stereotypes. She worked at a place in Philly called the Hacktory, a makerspace where people could share tools and trade information about technology, and Guthrie thought the Hacktory might be able to respond to the attack on HitchBOT.

16:52 - Georgia Guthrie

The next day, I saw that there were probably like five articles, maybe more, in our local press. And then there was some national press talking about this HitchBOT situation. So I started tweeting at the reporters who wrote the stories and saying, "Hey, we're a group in Philly. We're offering to fix the robot and send it on its way.” And then it just snowballed. I could not believe where it went after that.

17:23 - Saron Yitbarek

The body parts were actually shipped back to Zeller in Canada, so rebuilding HitchBOT wasn't in the cards. But Guthrie still did not want to drop the idea.

17:33 - Georgia Guthrie

Our whole reason for existing was to be an accessible, friendly place for people to learn about technology, and then to have some technical thing that a lot of people loved be destroyed in our city—it just felt like we needed to respond.

17:49 - Saron Yitbarek

The mayor was calling her, worried about how this all looked. Others wanted to have a parade for HitchBOT. They wanted to make things right. So Guthrie decided to show the world that Philly cared about robots. They wouldn't use HitchBOT's actual name that belonged to Zeller's team, but they brought an informal group together at the Hacktory to brainstorm ideas for a new kind of robot in HitchBOT's honor, a robot inspired by HitchBOT's travels.

It would boast a programmable piece of software. One that could be shared with the whole world and housed in any basic body. Their software could be built into a teddy bear for example. Or if you felt like borrowing HitchBOT's look, you could bring to life an old beer cooler with some pool noodle arms.

18:39 - Georgia Guthrie

The idea was you would have this kit and then you would give it to someone else. And then upon receiving it, they would have to do an act of kindness. And then they would share the act of kindness with some hashtags that we came up with. Our initial name for it was Philly Love Bot.

18:57 - Saron Yitbarek

Inspiring kindness in the memory of HitchBOT was a way to heal the city's relationship with robots, and with itself. So in a way HitchBOT did accomplish its goal. It might not have made it all the way across America, but it did get people to prove they cared about robots—cared more than some thought possible. Meanwhile, robots themselves can be very forgiving of our occasional betrayals. They can be rebuilt. HitchBOT, for example, was remade by Zeller's team and shipped to France where it starred in a play about its adventures.

19:37 - Actor in play Killing Robots by  Linda Blanchet

Bonjour.

19:39 - HitchBOT

Et bonjour.

19:39 - Actor in play Killing Robots by  Linda Blanchet

Comment ça-va?

19:39 - HitchBOT

Je suis un grand enforme. 

19:39 - Saron Yitbarek

The play's director Linda Blanchet says that the audience doesn't just see a robot when they watch the play, they see a mirror.

19:47 - Actor in play Killing Robots by  Linda Blanchet

Qui es-tu?

19:48 - HitchBOT

Je suis un seau plastique qui parle. 

19:51 - Saron Yitbarek

And when they learn that HitchBOT was ripped to pieces, the audience is often brought to tears.

To find success in this robotic revolution, we're going to need all the trust-building exercises we can find. That's why experiments like HitchBOT are so much more than a quirky adventure. We're learning how to respect and care for robots, and that's going to make all the difference to the humans who rely on those robots down the road.

And what about HitchBOT's vandal, the mobile murderer who slipped back into the shadows? Folks like that might always be lurking around. But what HitchBOT's story really tells you is that there are way more people ready to build something up, than take it apart.

Next time, the boundaries of trust get pushed to the limit. We're learning about robots that get turned into weapons. Who's responsible when good robots do bad things?

To make sure you don't miss an episode, follow or subscribe wherever you get your podcasts. I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. Keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-8/humans-as-robot-caretakers

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
