[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 2: At Your Serverless)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-2/at-your-serverless)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 2: At Your Serverless
======
**00:03** - _Archival Al Gore_

But now, of course, all over the United States of America and all over the world the internet is revolutionizing our lives.

**00:13** - _Saron Yitbarek_

It's 1998. Google just hired its first employee, and Vice President Al Gore is talking to the press.

**00:22** - _Archival Al Gore_

This technology is still in its infancy. When president Bill Clinton and I came into the White House there were only 50 sites. And look at it now. I got a bouquet of virtual flowers on my birthday.

**00:37** - _Saron Yitbarek_

Okay. I can sense your eyebrow arching already. Why am I playing you some bit of 20-year-old internet history? It's because I want to remind you that the basics of the internet are still the same.

**00:51** - _Saron Yitbarek_

Sure, there are more than 50 sites now. I get it. But, we're still sending virtual flowers. And from a developer's perspective, if you strip away all our incredible advances, you've still got that same client-server model that started it all. A client-server model that allows for a distributed network.

**01:16** - _Saron Yitbarek_

Today, developers talk a lot about going serverless, which sounds like Al Gore's client-server internet just got trashed. And if we're not careful, we can abstract away so much infrastructure that we forget there are still servers out there doing their server thing.

**01:37** - _Saron Yitbarek_

But does serverless literally mean no servers? Really? Or is the developer's relationship with servers just evolving? In this episode, we are talking with people from around the world to explore this thing called serverless.

**01:54** - _Saron Yitbarek_

I'm Saron Yitbarek, and this is Command Line Heroes. An original podcast from Red Hat.

**02:03** - _Andrea Passwater_

Did you know wireless internet has wires somewhere?

**02:06** - _Saron Yitbarek_

Andrea Passwater works for a company called ... Wait for it, Serverless. They created a popular, open source framework for developing serverless applications. Andrea is noticing how organizations are hungry for ways to abstract away infrastructure, which is what that magical word serverless is always promising.

**02:28** - _Andrea Passwater_

I think the term is mostly just supposed to convey the fact that as a developer who works in serverless applications, that's abstracted for you. You don't have to worry about those servers. You just get to code and deploy that code up to a cloud provider and not have to worry about the administration. That's really what serverless means.

**02:49** - _Saron Yitbarek_

For Andrea, the attractions of serverless are pretty obvious.

**02:53** - _Andrea Passwater_

If you develop applications in a serverless way, it gives you the ability to not have to think about the mundane parts of deploying that application and maintaining that application. It just means that you can focus on business value. You can focus on being creative.

**03:12** - _Saron Yitbarek_

And another big serverless bonus is you're less likely to find yourself reinventing the wheel.

**03:18** - _Andrea Passwater_

Why would you create your own way to handle authentication when services like Auth0 exist that you can just use and tap into? At the end of the day, serverless is about giving developers the opportunity to be able to more easily and more rapidly build all of these ideas in their heads that they want to get out into the world.

**03:41** - _Saron Yitbarek_

I did it!

**02:27** - _Saron Yitbarek_

Imagine you've got your arms full of groceries, and you're stumbling toward a door. The door slides open in a simple, friendly-

**03:50** - _Saron Yitbarek_

Allow me.

**03:51** - _Saron Yitbarek_

... kind of way. That's serverless. It's opening the door for you, making development a lot less cumbersome. In fact, as organizations flock toward hybrid cloud setups and the serverless movement gets underway, the barriers toward development are vanishing.

**04:09** - _Saron Yitbarek_

Andrea has been hearing a lot of talk about non-developer development.

**04:15** - _Andrea Passwater_

Sort of stories from people who traditionally thought they couldn't code, and who are now actually able to get into the software engineering game because of serverless. And able to make these tools that automate their own workflows and stuff like that. It doesn't matter what job you do.

**04:31** - _Andrea Passwater_

There's something you do on your job that is so rote, like you do it every single day and it's this thing that you're like, "You know, couldn't a computer do this for me?" I started to feel that way. I happened to work at this company called Serverless and they were like, "You realize that the product we make can help you with that. Right?"

**04:50** - _Saron Yitbarek_

Andrea figures that pretty soon a lot of people who never considered themselves developers are going to realize they can build simple apps themselves. At essentially no cost.

**05:02** - _Andrea Passwater_

With Lambda, I've never had to pay for any of these small applications that I've made. I can make these bots that do part of my job for me, and I can become more efficient at my job, yes. But, I also don't have to do that boring stuff anymore. I can do something that's more fun.

**05:17** - _Saron Yitbarek_

Even for pro developers, that automatic door effect is pretty tempting in an arms-full-of-groceries kind of world.

**05:25** - _Andrea Passwater_

I think people are very attracted to the idea that they can get prototypes working with a one- or two-person team in a very short amount of time. Like, a handful of days. They can get a prototype up and running. I think it makes it very exciting for people to start realizing that they get to just focus on what drives business value in their application, or for their product, for their company. They get to focus on that business value.

**05:54** - _Saron Yitbarek_

I'm going to throw another term at you. Ready? Functions-as-a-service. That's the offering at serverless places like AWS Lambda, or Apache OpenWhisk. Functions-as-a-service means a single function can be executed on demand, only when triggered. And that's a lot more efficient.

**06:15** - _Saron Yitbarek_

Plus, I'm way less worried about compute capacity and run time. End of the day, that serverless deal can be a pretty sweet setup. In fact, some folks have even started wondering, are we going all in on serverless? Does it maybe replace containers?

**06:34** - _Michael Hausenblas_

I see the point.

**06:35** - _Saron Yitbarek_

Michael Hausenblas is the developer advocate for the OpenShift® team over at Red Hat.

**06:41** - _Michael Hausenblas_

If you look at all of these things we have here, OpenShift and Cloud Foundry and what not, you have essentially these abstractions. This idea that the Heroku, essentially, bent it more or less. Right? This very simple way of, don't worry about how the execution will run, don't worry about what it looks like. Just give us the code and we take care of the rest.

**07:03** - _Saron Yitbarek_

Yeah. That sounds pretty good. It kind of sounds like that dream of a “noops”environment. Where everything is automated and abstracted away. It's like the developer's version of minimalist interior design. Nice, clean surfaces.

**07:21** - _Saron Yitbarek_

But, Michael wants to give you a little reality check.

**07:25** - _Michael Hausenblas_

No ops! Right? You know, it magically just will somehow go away. You see these jokes on HackerNews and Twitter, and wherever. Serverless, of course there are servers! I know, of course there are. There's operations.

**07:39** - _Michael Hausenblas_

Someone has to do that, someone has to rack the servers. Someone has to patch the operating system. Someone has to create containerimages, because guess where these functions are executing? Of course, in some kind of computer.

**07:54** - _Saron Yitbarek_

It's not a zero-sum game. Functions-as-a-service don't outright replace containers. Instead, they add a tool to the tool box. And I've got some more news for you. Using that new tool, going serverless doesn't just mean the ops is somebody else's problem. You've still got ops of your own to think about.

**08:14** - _Michael Hausenblas_

You see there is operations bits on the infrastructure side. But, also with the developers. If you're in an extreme case, using let's say Lambda, then you have zero access to any kind of administrators. Right?

**08:29** - _Michael Hausenblas_

You cannot simply call or page an infrastructure administrator. Obviously, someone in your organization has to do it. But, I fear that many organizations only see it's so simple and cheap. We don't need to move this, and this, and this. Then forget about who is on call, and who really is on call? Do you have a strategy for that?

**08:52** - _Michael Hausenblas_

If no, then you might want to come up with a strategy first before you go all in there.

**09:00** - _Saron Yitbarek_

Someone needs to be on call. Even if you do go "serverless,." you still need to have your head wrapped around that bigger picture. You still need to get your operations in order.

**09:24** - _Saron Yitbarek_

When I threw out that term earlier, functions-as-a-service, did you cringe a little? Over the last while cloud-based development has brought us an army of “as-a-service”terms. We've got infrastructure-as-a-service, we've got platform-as-a-service, we've got software-as-a-service, data-as-a-service. Database-as-a-service. You get the idea.

**09:48** - _Saron Yitbarek_

If you're having trouble keeping the differences straight, you're not alone. That's why we tracked down Himanshu Pant. He's a tech lead at the Royal Bank of Scotland, over in Delhi, India. He spent years parsing out the differences here.

**10:04** - _Himanshu Pant_

These other computing paradigms are so similar sounding in name to serverless that one tends to forget, or tends to get confused as to why, this is not being called serverless. Or why this is being called a serverless.

**10:20** - _Saron Yitbarek_

So, serverless is not the same as containers. Serverless is not platform-as-a-service. But Himanshu wanted to nail it down. What can functions-as-a-service provide, exactly? And what can't it?

**10:35** - _Saron Yitbarek_

He shared two anecdotes with us, two times when he figured out when to go with serverless and when to forgo. The first moment came during a 24-hour hackathon. Himanshu was trying to make a chat bot.

**10:49** - _Himanshu Pant_

There were various vectors on which this was going to be a sales. For example, that coverage of logic, the cost which would be incurred and the scalability. I sat down to do this work in serverless.

**11:04** - _Himanshu Pant_

As I did, I realized that cost aspect was one aspect, which kind of really tippedthe skill in my favor. So even though all the other participants, they had a much better ... I would say coverage, or maybe coverage of logic. The NLP situations or their scenarios.

**11:19** - _Himanshu Pant_

But, as far as cost is concerned, and scalability, I was going hands down to win over there because with serverless it all depended on how many invocations people are doing on that chat bot. Accordingly, the functions will be triggered. This was one use case when I was very much happy to do serverless, because of the cost—there was no cost. Faster development time, and to be honest, it was not exactly a production-scale workload at that moment.

**11:45** - _Himanshu Pant_

I could make do with the somewhat infant tooling of the platform. It was a win for me.

**11:52** - _Saron Yitbarek_

Nice. That was a time when serverless madesense. But at the bank Himanshu is working in right now, they're migrating their systems from legacy to cloud. And that's bringing up different kinds of goals.

**12:07** - _Himanshu Pant_

We are trying to see which workload can go on to which paradigm. I should just go into IS, BAS, FAS, obviously the ones who come down to enterprise space. You need to see that there are no aspects, like number one, let’s say vendor looking. And number two, that technology should be proven, extensively. More so for a risk-averse industry like, you know, the banking sector.

**12:30** - _Himanshu Pant_

This is where a platform-as-a-service, but still has a better proving, and a better capability, and a better tooling kind of takes the upper hand.

**12:40** - _Saron Yitbarek_

Himanshu is looking at his own needs, and his own comfort levels, and curating which workloads make sense in which cloud computing paradigm.

**12:49** - _Himanshu Pant_

Let's say a listener is working on a trading shop, and he wants to build something, just an entry one. For him or her, serverless may not really be apt because the latency may not really be desirable in that kind of a machine-particular application.

**13:05** - _Saron Yitbarek_

End of the day, it's a measured approach. Instead of throwing everything into one bucket. When we're thinking about which cloud-based architecture is actually right for the work we want to do, there's one more thing to consider. How all that abstracting, all that taking things off your hands, can end up changing not just our work lives, but the finished work itself.

**13:31** - _Saron Yitbarek_

Abstracting away part of our workload can mean less ability to customize. Think of a car you bought off the lot. It works. It drives. But then, think of a car you built on your own. That one works the way you decided it would work.

**13:48** - _Rania Khalaf_

It comes at a cost.

**13:50** - _Saron Yitbarek_

Rania Khalaf is the director of AI Engineering at IBM research.

**13:56** - _Rania Khalaf_

In using these serverless applications, you may not have full control of everything that's going on. You don't have control of scheduling, or when they'll run, or where.

**14:06** - _Saron Yitbarek_

There's a trade off taking place, right? Fine-grain control may slip when you're using serverless.

**14:13** - _Rania Khalaf_

It abstracts so much away from the end-user that if you do want to have more control, different scheduling, more checks and balances, different values on how long a function can run for. So on and so forth. Then you really want to be able to get in there and tinker, and maybe create your own deployments.

**14:32** - _Saron Yitbarek_

That would require something new, though. A new kind of serverless that open source communities are already building for themselves. Rania and her team of IBMers are part of that movement.

**14:44** - _Rania Khalaf_

We first worked on a language that was ... It’s basically JavaScript extensions to let you create these multi-threaded interactive service compositions as a starting point to give you a lighter-weight way. That was around the same time that cloud and microservices and platform-as-a-service were really picking up.

**15:08** - _Rania Khalaf_

Just combining these two trends and saying, there is this idea of being able to build higher order function for many small pieces that may or may not come from you.

**15:18** - _Saron Yitbarek_

Rania and her team were building Apache OpenWhisk. An open source functions platform.

**15:23** - _Rania Khalaf_

With OpenWhisk, from the beginning, we made it open source. A big part of that was to really enable the community to participate with us. But also to peel away the covers. And give control to the people that are wanting to operate their own serverless computing environments, so that they can customize it to their needs. Maybe put in their own controls, see how it really works, and control it better.

**15:54** - _Rania Khalaf_

But, also provide the kind of finer-grain control that people wouldn't have with it if it was only offered as a service.

**16:03** - _Saron Yitbarek_

Giving control back to anyone who wants to operate their own serverless environment. It's next-stage serverless. Joining OpenWhisk, you've got other open source platforms like Fission and Gestalt. We start to see the serverless arena evolving into something more adaptable, and more powerful than before.

**16:31** - _Saron Yitbarek_

To really get why an open source version of serverless matters, I got chatting with one of the founders of OpenWhisk.

**16:39** - _Saron Yitbarek_

Hi, Rodric. How is it going?

**16:40** - _Rodric Rabbah_

Good. How are you? Thanks for having me on.

**16:42** - _Saron Yitbarek_

Rodric Rabbah was one of the three developers who conceived of, and founded, OpenWhisk. Here is our conversation.

**16:54** - _Rodric Rabbah_

It tends to be confusing for others or tends to get snickers, because people tend to think, “How could you possibly compute without servers?”

**17:02** - _Saron Yitbarek_

Right. Server is there somewhere, it's just I don't have to worry about it.

**17:05** - _Rodric Rabbah_

Exactly. That's really the beauty of this model. When you start developing in a serverless style, you never really want to go back. You know, I've been in it for close to four years now,and I've developed some production-quality applications.

**17:19** - _Rodric Rabbah_

This is the only way I develop now. If you tell me I have to provision a machine and install an OS, it's completely foreignto me. I'm not even sure I'd know how to do it anymore.

**17:29** - _Saron Yitbarek_

Yeah. When you put it like that, it sounds like a huge load off,you know? Because when you initially hear of serverless, at least I think, "Man, it's yet another thing I have to learn."

**17:38** - _Saron Yitbarek_

But, when you put it that way it sounds nice.

**17:41** - _Rodric Rabbah_

It does sound nice. Then you have to realize that you have to take a little bit of air out of the bubble. It's not a silver bullet.

**17:50** - _Saron Yitbarek_

What are some of the surprising risks or issues that people may not see or be aware of when they get started?

**17:58** - _Rodric Rabbah_

I think the lack of transparency is possibly the biggest one. It's sort of reminiscent to me of sort of the technology that came about when new languages came about and raised a level of abstraction relative to the computer. It's a similar kind of, sort of, startling effect in serverless today.

**18:16** - _Rodric Rabbah_

In that you write, typically a function, then you just deploy that function. It's instantaneously available to run, say on the web as an APIN point. It scales massively. I mean, you can run thousands of instances without any work on your part.

**18:32** - _Rodric Rabbah_

But, if something goes wrong, it's like, how do I debug this? Or I actually want to inspect the context within which my function failed. Typically, these functions run within processes, are isolated from you—you can't even log into the machine to see where your code is running. They might run in container environments that are closed off. You don't know what's in them.

**18:53** - _Rodric Rabbah_

It becomes hard for you to get that little bit of transparency. This is where tools will eventually help. But, the lack of tools sort of makes that pretty significant pitfall for people to get their heads around.

**19:05** - _Saron Yitbarek_

That was really good. Okay. Let's go back to OpenWhisk, alright? Tell me about that.

**19:11** - _Rodric Rabbah_

The project started right around the time Amazon Lambda announced their offering, which was really where serverless started to get into the nomenclature and started to gain mindshare in the space. When we saw Lambda, we started thinking, “There is a lot of technology here that has to be developed. Not just at the base layer in terms of a new cloud computer, but really in terms of your programming model that you put on top of it to make it more easily accessible to programmers.”You know, coming out of IBM research, we had pretty strong ... Instead of skills around programming language design, compiler expertise, and run time expertise.

**19:54** - _Rodric Rabbah_

A small team of us, basically three people-

**19:57** - _Saron Yitbarek_

Wow.

**19:57** - _Rodric Rabbah_

... got together to essentially do the initial development and prototyped what became, eventually, OpenWhisk, with respect to the command line tools, which is really the programming interface for serverless today. The programming model concepts, and then the actual architecture that it has to support, essentially, this function of the service model and give you all the benefits that serverless espouses.

**20:22** - _Rodric Rabbah_

The genesis was really Amazon Lambda coming on the scene and saying there's this new model of computing. Pay attention.

**20:28** - _Saron Yitbarek_

How long did it take? Or the first version anyway.

**20:30** - _Rodric Rabbah_

It happened quite fast. In fact, when IBM announced ... Well, it was at the time IBM OpenWhisk. It was one year to the date from our first commit.

**20:39** - _Saron Yitbarek_

Wow. Oh my goodness.

**20:41** - _Rodric Rabbah_

That was quite exciting.

**20:43** - _Saron Yitbarek_

That's really impressive. Actually, when it first started, it wasn't OpenWhisk, it was just Whisk. Right?

**20:49** - _Rodric Rabbah_

Whisk was the internal name, that's right. I'm responsible for the name. The idea behind the name was to move quickly and nimbly.

**21:00** - _Saron Yitbarek_

Nice.

**21:01** - _Rodric Rabbah_

You whip up a function and there it is. You can put it in the oven and bake it.

**21:07** - _Saron Yitbarek_

That's wonderful, because I was definitely thinking eggs when I saw that. I was thinking, let's whisk some eggs.

**21:12** - _Rodric Rabbah_

Right. We've done some positives and some negatives on the name. When we open source a technology, and sort of put it out on GitHub, we put the open prefix on it to sort of emphasize that this is open as in open source and free to use, free to download, free to contribute to.

**21:32** - _Saron Yitbarek_

Yeah.

**21:33** - _Rodric Rabbah_

And our goal in putting it on open source was really to sort of raise the bar in terms of what's available to execute these days as a serverless platform. It was important to us to sort of build a platform that is not only production-ready, and share it with the world,but also to make it possible for academic research or research in general. Maybe coming out of IBM research, we cared about that a little too much.

**22:00** - _Rodric Rabbah_

But, it sort of paid off in that I know of universities that actually use OpenWhisk for their own research—from Cornell to Princeton. I've gone to several universities like Brown, Williams College, MIT, CMU, and I've given talks with the purpose of encouraging students to really look at the problems around serverless and functions of the service. The tooling, the programming model, and get them excited about the technology.

**22:26** - _Rodric Rabbah_

Showing them that there's a path to where if they actually contribute to the open source project, it's picked up by IBM cloud functions and run in production, usually within a week.

**22:34** - _Saron Yitbarek_

Wow. That's so fast.

**22:36** - _Rodric Rabbah_

That's been surprising to some people.

**22:38** - _Saron Yitbarek_

That's a super-efficient process.

**22:41** - _Rodric Rabbah_

It's really a testament to how we develop a lot of technology in the open. It's not an open core model where there are some components that have been held back. What's running in the IBM cloud is really what's in the Apache OpenWhisk project.

**22:56** - _Saron Yitbarek_

When you think about the future of serverless and the options we may have moving forward, do you feel like they will inevitably be open?

**23:08** - _Rodric Rabbah_

I think there's a raging debate these days about the value of open source, especially in the cloud.

**23:13** - _Saron Yitbarek_

Right, yeah.

**23:15** - _Rodric Rabbah_

If you consider why people go to the cloud, or why they might have aversions to go into the cloud, it's this whole concept of vendor lock-in being ... losing transparency. Open source has played an important role in sort of alleviating some of these issues. Then you look at efforts like Kubernetes, which is just gobbling up the cloud in terms of a container and management system. How successful that's been.

**23:41** - _Rodric Rabbah_

If you're doing something that even touches containers, does it even warrant having a discussion about keeping it closed source, giving how dominate it is? I tend to think that openness helps. It's compelling from developers’ perspectives.

**23:57** - _Saron Yitbarek_

When you think about the future of the serverless ecosystem and tools, and projects, and services that we're going to see, what does that look like? What does the future of serverless look like for you?

**24:08** - _Rodric Rabbah_

I think you start to think less and less about the underlying technology, and it becomes more and more about the programming experience, and the tooling around it. The tooling for debugging, the tooling for deployment management, the tooling for performance analysis, the tooling for security.

**24:26** - _Rodric Rabbah_

All of these are sort of fundamentally important, I think. The underlying mechanics of how you run your function, whether they run in a container or some future technology, whether you can run them on one cloud, or multi-cloud, I think fades into the background. Kind of like what Kubernetes did for containers and container management.

**24:46** - _Rodric Rabbah_

In a similar way there's a layer that's going to come on top, which is the function of the service layering to give you that kind of serverless notion. Then it's really about what's the new middleware that you're putting on top of it. How are you empowering developers to really take advantage of this new cloud computer and the toiling that you're going to put around it to make their experience pleasant.

**25:07** - _Saron Yitbarek_

Yeah. What does that empowerment look like?

**25:13** - _Rodric Rabbah_

Efficiency, to put it in one word. It's the ability to just focus on the things that are of value to me as a developer, or the value to my company if I'm working at a corporation. It's more rapid in evasion that, then, you beget out of that, because you freed up your brain cells to not think about infrastructure and how things scale, and how things are secured at the hardware level.

**25:38** - _Rodric Rabbah_

Now you can really innovate in terms of rededicating that brain power to just innovating more rapidly, delivering more value to your end-users. I'd lump that all into just better efficiency.

**25:55** - _Saron Yitbarek_

Rodric Rabbah is a founder of OpenWhisk. Remember what I said at the top of the show? That old client-server model that the internet is based on really isn't going anywhere. What's changing, and I mean radically changing, is the way we think about those servers.

**26:19** - _Saron Yitbarek_

In a so-called serverless world, the hope is that we concentrate on the code itself and don't have to worry about infrastructure. But the level of abstraction we select, and how we maintain control over work we don't abstract away, are where that serverless world gets interesting.

**26:40** - _Saron Yitbarek_

Serverless should, ultimately, be about developer empowerment. The freedom from patching, scaling, and infrastructure management. But, at the same time, we have to stay curious about how that big picture works even as we abstract some tasks away. We're going to be asking, what controls am I giving up and what controls do I want to take back?

**27:07** - _Saron Yitbarek_

Next episode it's our epic season two finale. Command Line Heroes is taking a journey to Mars. We're learning how NASA's martian rover is kicking off an open source revolution of its own. And we're hanging out with the CTO at NASA's Jet Propulsion Laboratory. No biggie. To learn how open source is shaping the future of space exploration.

**27:39** - _Saron Yitbarek_

Meantime, if you want to dive deeper into the question of serverless development, or any of the subjects we've explored this season, check out the free resources waiting for you at redhat.com/commandlineheroes. While you're there, you can even contribute to our very own Command Line Heroes game.

**28:00** - _Saron Yitbarek_

I'm Saron Yitbarek. Thanks for listening, and keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-2/at-your-serverless

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
