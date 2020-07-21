[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 1: DevOps_Tear Down That Wall)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-1/devops-tear-down-that-wall)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 1: DevOps_Tear Down That Wall
======
_Saron Yitbarek_

I want you to imagine a wall. The wall stretches as far as you can see to the right and all the way off to the left. It's taller than you, you can't see over it, and you know there are people on the other side, lots of people. But you just don't know if they're anything like you. Are they enemies or friends?

**00:30** - _Gordon Haff_

Developers created their code and threw it over the wall to operations, and then it was operations' problem.

_Richard Henshall_

Just doing whatever they feel like, not really caring about the quality of the service.

_Sandra Henry-Stocker_

These two sides have almost opposing jobs—one to make changes and one to resist those changes as much as possible.

_Richard Henshall_

But there's no talking on the same page about what it actually is they're trying to achieve.

**01:00** - _Saron Yitbarek_

I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. Episode 4, DevOps, tear down that wall.

So yeah, for decades the IT world was defined by that division of roles. You had developers on one side. They were incentivized to create as much change as quickly as possible. And then you had the operations team on the other side. They were incentivized to prevent too much change from happening. In the meantime, code was getting tossed blindly over that wall with no real empathy o r communication between these two worlds. What would it take to tear down a wall like that? It would take a seismic shift.

**01:30** - _Saron Yitbarek_

The open source movement shook the battlefield. Last episode, we saw how new a gile methodologies put a premium on constant iterative improvements, and that need for speed would force us to change the way we work with each other. There's a limit to how fast a bunch of siloed people can work, and that limit became a problem because…

**02:00** - _Richard Henshall_

It's all about faster time to market, increased agility, doing more iterative, rather than longer - term big pieces of work.

_Saron Yitbarek_

Richard Henshall is an Ansible product manager.

_Richard Henshall_

You know, I remember the days when you put in an order for a server and it turned up four months later. Everything was converged together, so that the entire stack was one thing and it took years for those to be designed and built. That doesn't fly anymore and it's just disappeared, to the point that it is just… it’s up, try it, bring it back down again, for a lot of organizations.

**02:30** - _Saron Yitbarek_

These days, a company like Amazon will deploy new code several times every minute. Imagine trying to get that done using some step-by-step waterfall workflow. It's just impossible. Soon enough, those ops concerns about stability, security, reliability, will get pushed to the side in favor of moving fast.

**03:00** - _Saron Yitbarek_

Developers meanwhile didn't see it as their responsibility to produce code that worked in the real world. Developers had little interest in stability and security issues, but those are very real issues that we need to address. So, we end up with a lot of needless revisions down the pipe, back and forth across the divide.

Think how much that division can slow a company down. Think how inefficient that could get. But developers were rarely encouraged to look beyond their own command line.

_Sandra Henry-Stocker_

The size of their directories would just grow and grow, and they would never clean up, unless they wouldn't be able to get any work done without cleaning up.

**03:30** - _Saron Yitbarek_

Sandra Henry-Stocker is a retire d sysadmin who write s for the IDG magazines.

_Sandra Henry-Stocker_

I was kind of often having a debate, saying, "Hey look, you're using this much disk space . Isn't there something you can get rid of so that we have more space to work, because we're running out of space on this server." And yeah, we'd go through that a lot.

_Saron Yitbarek_

Ultimately, this is a mindset problem. This divisive attitude between developers and operations, where one didn't have to understand the concerns of the other. Well, in the past that had been just fine, but as speed became a premium that culture became more and more unstable. Being siloed in your work bubble was just way too inefficient.

Jonah Horowitz works for the Reliability Engineering team at Stripe. He describes how, even if developers and operations had wanted to work together, they couldn't have because in a sense they'd been placed on opposite teams.

**04:30** - _Jonah Horowitz_

The operations team is often measured by uptime and reliability, and one of the biggest ways to increase uptime is to decrease the amount of change in the system. But of course, releasing new features is changing the system, and the software engineers who are doing product work are incentivized to ship as many features as quickly as possible. So you set up this conflict between dev and ops when you've got these separate roles.

**05:00** - _Saron Yitbarek_

Developers committed to building features. Operations committed to keeping the site working. Two goals at odds with each other. But like I said, because of the increasing need for speed, for iterative rapid-fire releases, this disconnect between dev and ops was reaching a crisis point and something had to give.

**05:30** - _Saron Yitbarek_

Around 2009, the wall dividing dev and ops was looking a lot more like a prison wall than anything else. What we needed was a new methodology that would smooth the transition from development to operations, allowing both sides to work in a faster, more holistic way.

Patrick Debois, CTO of the video platform Small Town Heroes, launched a conference for people who wanted to tear down that wall. He called his brain child DevOps Days. He shortened it to DevOps for the hashtag, and thus the movement was given a name.

**06:00** - _Saron Yitbarek_

But a name is not a process, it was clear why DevOps was needed, but how would it work? How are we supposed to bring dev and ops together without starting a war? Thankfully, I have Scott Hanselman to walk me through this. Scott's the principal program manager for .NET and ASP.NET at Microsoft.

So Scott, I've known you for, I feel like I've known for forever, definitely a few years.

**06:30** - _Scott Hanselman_

Forever.

_Saron Yitbarek_

Forever. I want to talk to you about the relationship between being a developer and what DevOps has looked like over the years. How does that sound?

_Scott Hanselman_

Yeah, that sounds like a plan.

**07:00** - _Saron Yitbarek_

Okay. So I think a good place to start is just defining what DevOps is. How would you describe it?

_Scott Hanselman_

The Wikipedia entry from 2008 that defines DevOps is actually very good. So, it's a set of practices that is intended to reduce the time between committing a change and that change going into production while ensuring quality. So if you think about, hey, I checked in some code. It's Tuesday and that will be going out in the June release. That sucks. That would be not continuous integration. That would be a couple-of-times-a-year integration.

**07:30** - _Scott Hanselman_

If you have a good healthy DevOps system, if you've done the set - up practices, then you are going to be continuously integrating into production. So it's, what can you do? What best practices can you define, can you create, that will allow you to get it? So, I checked in some code on Tuesday and it's in production on Thursday. Now here's the important part—pause for effect—while ensuring high quality.

**08:00** - _Saron Yitbarek_

So what's really interesting about that definition is it's a set of practices, but I feel like when I hear people talk about DevOps , it's a little bit more crystallized, I guess. They talk about it like it's a role, a job, a position, a title. Does that conflict with the idea that it's a set of practices?

_Scott Hanselman_

I think that when a new set of practices or a new buzzword comes out, people like to put it on a business card. No disrespect to people who are listening to this podcast and now are offended and looking at their business card and going, "This sucks." And now they're going to like, I don't know, slam their laptop shut, rage, quit this podcast.

**08:30** - _Scott Hanselman_

There was a really great thread by Brian Guthrie, who is a thought worker, and he worked at SoundCloud. He's just a super smart individual. He talked about DevOps and he said in this thread a couple of days ago on Twitter that DevOps is a set of practices, period. It's not a job title. It's not a software tool. It's not a thing you install. It's not a team name.

**09:00** - _Scott Hanselman_

The way he phrased it was, "It's not magic enterprise fairy dust." If you don't have best practices, if you don't have good practices, you have no DevOps . So it's more a mindset than it is putting out a job title and like, "We're going to a hire DevOps engineers and then we're going to sprinkle these magical DevOps engineers into the organization, without the organization having organizational willpower and buying into the mindset that is DevOps ." So, if you think it's a toolkit or a thing you install, then you've missed the point.

**09:30** - _Saron Yitbarek_

Okay, so let's go back in time, before DevOps was a term, before we had DevOps on our business cards or talked about it as a set of practices. 10 years ago, how would you describe the relationship between developers and those people who are on the ops side of things?

_Scott Hanselman_

It was rather combative. Like, the people in ops controlled production, and developers never got near production. We were on different sides of a wall that was an opaque wall. We, over in development, tried as much as we could to make something that looked like production, but you never actually ... it never looks like production.

**10:00** - _Scott Hanselman_

We had a couple of issues. We had development environments that didn't look or feel or smell like production, so inevitably you'd have those, "Hey, it works different in production than it does in development," kind of environments. And then, the distance between the check-in and when it got into production was weeks and weeks and weeks, so your brain wasn't even in the right headspace . Because I worked on that feature in January and it's just now rolling out in April, so then when the bug inevitably comes down, it's not going to be fixed until June and I don't even remember what we were talking about.

So people in ops, their jobs was to... It was almost like their job was to consciously slow us down. Like, they existed to make developers slower, and then of course they felt that we wanted to break production at all times.

**11:00** - _Saron Yitbarek_

So why was it like that? Was it just a fundamental misunderstanding of what developers wanted and were trying to do? Was it a trust issue? Why was it so combative?

_Scott Hanselman_

I think that you answered, you nailed that. You answered it all correctly. There was a trust issue. There was a sense I think that developers thought they were special, or somehow better than IT people, and IT people thought that developers had no respect for production.

**11:30** - _Scott Hanselman_

I think that that culture came kind of from the top, the idea that we were different orgs and that somehow our goals were different. I think that there's some maturity that's happened in software, where we all realized that we write software in order to move the business forward, whatever that business is.

So that sense of, "We're all pushing in the right direction," as they say, "all the wood behind the same arrow." But it was definitely trust, because DevOps engineers don't trust product engineers to deploy, right?

**12:00** - _Scott Hanselman_

And DevOps engineers didn't traditionally write code, so they didn't understand what got changed. So there was a lack of trust at all the levels. And no one understood the deployment process, and people trusted only themselves, and they also ... Like, "I only trust myself to go into production. I can't trust Saron to go into production, she doesn't know what she's talking about. I'll do it."

**12:30** - _Scott Hanselman_

So if no one truly understood the system, like the idea of a full stack engineer was a mythic thing. But now, we are starting to think about the whole stack as an organization. We've had terms like full product ownership, and the agile methodology has come along saying that everyone should own the product, and that sense of community ownership and community around the code all slowly changed, changes things to bring an environment of trust.

**13:00** - _Saron Yitbarek_

I'm Saron Yitbarek and you're listening to Command Line Heroes, an original podcast from Red Hat. So, for DevOps to hit its potential we were going to need a lot of trust on both sides, and that means a lot more communication. Back to Richard Henshall. He sees empathy for both sides as the cornerstone of DevOps .

**13:30** - _Richard Henshall_

Some of the DevOps practitioners, some of the really good ones, have done both roles. I think that is where the real power comes, is when people actually get to do both roles, rather than just seeing the other side. So you don't keep the separation, you're actually... You go and live in their shoes for a period of time. I think that's what brings the empathy back.

_Saron Yitbarek_

Now this isn't just communication for the sake of warm fuzzies. What Richard Henshall is describing is the industry swerving toward that focus Scott mentioned.

**14:00** - _Saron Yitbarek_

A focus on continuous integration. Software was going to be, not just written and released in small rapid-fire batches, but also tested in small rapid-fire batches. And that meant, developers needed instant feedback on the code they were writing, and how it would perform in the real world.

As time to market shrank from months to days, to hours, we cast around for a new set of tools that could automate any element that could be automated.

**14:30** - _Gordon Haff_

You really need a whole new ecosystem of tooling to do DevOps most effectively.

_Saron Yitbarek_

Gordon Haff is a senior manager at Red Hat.

_Gordon Haff_

What we see is this huge collection of new types of tooling and platforms that DevOps can make use of. They're really all coming out of open source.

_Saron Yitbarek_

Gordon's right. The collection of new tools is huge, and he's right about the open source angle too. The growth of automation tools never would have been possible in a strictly proprietary system.

**15:00** - _Gordon Haff_

Lot of monitoring tools out there. Prometheus is a common one. STO for service orchestration is starting to interest a lot of people, so that's out there.

_Saron Yitbarek_

GitHub let's you track changes. PagerDuty manages digital operations. NFS mounts file systems across a network. Jenkins lets you automate testing on your build.

**15:30** - _Saron Yitbarek_

So many tools, so much automation. The end result, developers can push their changes live, the build is automatically created, compilation is managed, and automated tests are run against it. Sandra Henry-Stocker describes what a change this made.

_Sandra Henry-Stocker_

So I could take something that I was working on and rapidly deploy it, and I could control many systems just from the command line on one, rather than having to work at a lot of different places or wonder how I was going to get something that I was working on sent across a network and deployed on a lot of different machines.

**16:00** - _Sandra Henry-Stocker_

It became easier to basically sit in one spot, and yet make my changes across a wide range of computer systems.

_Saron Yitbarek_

Automation tools had solved the speed problem. But I don't want us to just praise tools at the expense of the actual methodology, the cultural shift. Scott Hanselman and I talked about that fine line.

**16:30** - _Saron Yitbarek_

You started this conversation by saying DevOps is a set of practices, it's a mindset, it's a way of thinking. It sounds like the tools that we created are the manifestation, the code version of the way we should be thinking and we should be operating.

_Scott Hanselman_

I love that, you're a genius. Exactly. We used to have the product owners write in these Word documents about how the code should work. They write the spec, right? When was the last time a Word document broke the build?

**17:00** - _Saron Yitbarek_

Right.

_Scott Hanselman_

Right?

_Saron Yitbarek_

Okay, partly I just wanted you to hear Scott calling me a genius. But I do think those tools are almost like symbols of our cultural shift. They encourage us to broaden our roles. We developers have been forced to look, at least occasionally, from the command line. That way the priorities of dev and ops partly come into alignment. In fact, what the rise of DevOps has made clear is that in a world of ever-increasing speed, nobody can afford to remain siloed.

**17:30** - _Saron Yitbarek_

Jonah Horowitz has worked for a number of Bay-area companies, including Quantcast and Netflix. He explains how even some of the largest companies in the world have re-imagined their culture in this light.

_Jonah Horowitz_

We had sort of this cultural buy-in from the entire company, that was like, "This is how we're going to deploy software. We're going to do it in these small batches. We're going to do it using these deployment procedures." I don't think DevOps can be... I don't think it can be successful if it's just being driven by the ops team.

**18:00** - _Jonah Horowitz_

It has to be something that the management and leadership at the company buy into. It's very much a cultural shift.

_Saron Yitbarek_

When MacKenzie surveyed 800 CIOs and IT executives, 80% said they were implementing DevOps in some part of their organization, and more than half planned to implement it company-wide by 2020. Executives are realizing that automation tools ramp up the speed of delivery.

**18:30** - _Saron Yitbarek_

These are the same people who used to be okay with having a pallet arrive in a datacenter, and then have it sit there for a whole month before a new machine was brought online. Today, if you're waiting longer than 10 minutes to have something provisioned, you're doing something wrong. With competitors hitting speeds like that, nobody can afford to be left behind.

**19:00** - _Saron Yitbarek_

I can imagine that ops teams must have been nervous, handing all those tools over to developers. Ops was used to being the grownup, and now they were supposed to hand over the keys to the car? Yikes. I think we developers are learning to move fast without breaking things. But as the dust settles on the DevOps revolution, the biggest changes may be for the ops team.

**19:30** - _Saron Yitbarek_

Does DevOps actually threaten the role of operations? Is dev using its shiny new tools to eat ops? Cindy Sridharan is a developer who wrote a long investigative piece about all this. In your article and your blog post, you mentioned that operations people were not necessarily happy with the way things were going. What was going on? What would you say?

_Cindy Sridharan_

Let's put it this way, the DevOps ideal was that responsibilities will be shared. That developers and operations would have, like you know, more of a 50-50 split, for really ensuring the holistic delivery of software.

**20:00** - _Cindy Sridharan_

I think a lot of the unhappiness from engineers, from operations engineers, stems from the fact that that is not really the reality on the ground, and that they're still the ones who are always picking the short straw. They're still the ones who are sort like always doing the grunt work. They're still the ones who are primarily shouldering responsibility for actually running the applications, and the developers aren't necessarily doing enough.

_Saron Yitbarek_

The question will be a crucial one over the next few years. How opsy is DevOps going to be? As we automate, does the role of ops get diminished, or does it transform?

**20:30** - _Saron Yitbarek_

But we have to remember, DevOps isn't just about the tools and the application of new technologies. This methodology is actually shaping the tech, and in turn the tech is shaping the methodology. There's this amazing feedback loop. Culture makes the tools, and the tools reinforce the culture.

**22:00** - _Saron Yitbarek_

In the end, that wall we described at the top of the episode, the one dividing dev from ops, I don't even know if the whole throw - your - code - over - the - wall analogy is going to make sense to a developer in five years, and that's sort of a great thing. Already, when I talk to folks today, I'm hearing a new story.

Cloud architect Richard Henshall.

_Richard Henshall_

I think it is starting to make people realize what the other side of the equation was concerned about more. I've seen a lot more understanding.

**23:00** - _Saron Yitbarek_

Sysadmin Jonah Horowitz.

**23:00** - _Jonah Horowitz_

I think there's a craft to writing really good software, and one thing that I see in the best developers that I work with, is that they really, they push the craft of software engineering, or software development, forward.

_Saron Yitbarek_

Sysadmin, Sandra Henry-Stocker.

_Sandra Henry-Stocker_

I think that developers are becoming much more astute and much more careful. They're consistently having to up their skills, and I know that takes a lot of work.

**23:30** - _Saron Yitbarek_

It's a love-in. Turns out, there were some friends on the other side of that wall. Nice to meet you. So, a confession, I always used to think DevOps was boring, just a bunch of hardcore automation scripts and scaling issues. My resistance was partly just practical. As developers, every week there's some new tool coming out, some new framework. DevOps has been part of those scary, fast changes. But now, especially after hearing these stories, I get it.

**24:00** - _Saron Yitbarek_

DevOps is more than its tools. It's how we can work together to build better products faster.

Here's the good news, as we develop new platforms for developers like you and me, my work is becoming better, faster, and more adaptive to different environments. The circle of interest can keep expanding too. You see people widening DevOps to include security, so we get Sec DevOps , or they include business, so we get B iz DevOps . The debate we're going to have now is, how important is it for a developer to understand not just how to use these tools but how all that DevOps stuff even works, and how realistic is it to expect developers to understand that new world?

**24:30** - _Saron Yitbarek_

The way we settle that debate is going to define the work of tomorrow's Command Line Heroes.

You might have noticed that in all that talk about tools and automation I left out some big ones. Well, I'm saving those for next time, when all this DevOps automation hits lightspeed and we track the rise of containers.

**25:00** - _Saron Yitbarek_

It's all in episode 5.

Command Line Heroes is an original podcast from Red Hat. For more information about this and past episodes, go to redhat.com/commandlineheroes. Once you're there, you can also sign up for our newsletter, and to get new episodes delivered automatically for free, make sure to subscribe to the show.

**25:30** - _Saron Yitbarek_

Just search for Command Line Heroes in Apple Podcasts, Spotify, Google Play, CastBox, or however you get your podcasts. Then hit subscribe, so you'll be the first to know when new episodes are available. I'm Saron Yitbarek. Thanks for listening, and keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-1/devops-tear-down-that-wall

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
