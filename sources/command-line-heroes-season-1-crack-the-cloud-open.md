[#]: collector: (bestony)
[#]: translator: (leemeans)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 1: Crack the Cloud_Open)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-1/crack-the-cloud-open)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 1: Crack the Cloud_Open
======
_Saron Yitbarek_

Ingrid Burrington wanted to walk inside a cloud. Not just “a cloud.” though. _The_ cloud.

_Ingrid Burrington_

I don't know what the internet looks like, I don't think it looks like this. I wanted to just kind of find out.

**00:30** - _Saron Yitbarek_

Ingrid's a journalist. For a series she wrote for the Atlantic, she talked her way into one of the datacenters, where more and more of our online lives play out. What she found there wasn't all fluffy and white, it was downright physical. First up, getting her photo taken for an ID tag. Next, going through security checkpoints and signing a nondisclosure agreement. Finally, she gets to see the machines. The server rooms are basically warehouses, think Costco, but bigger.

**01:00** - _Saron Yitbarek_

And there's something beautiful about that warehouse look, because everything's just there on display. Racks of naked servers, and above them all the cables connecting to the world, running along tracks on the ceiling. There's a sort of fancy blue light going on, kind of a tron thing. But mostly, it's rows and rows of very hungry servers.

**01:30** - _Saron Yitbarek_

Datacenters use up more energy each year than the whole of the United Kingdom. And that means they're throwing off crazy amounts of heat, which is why when Ingrid looks around ...

_Ingrid Burrington_

This is a building that's mostly designed around having the most perfect HVAC system imaginable.

**02:00** - _Saron Yitbarek_

Ingrid discovered that everything about a datacenter is pragmatic, so yeah just a bunch of machines, a bunch of fans, on lots of cheap land, using lots of cheap water to keep it cool. Not quite what the word "cloud" represents, but on the other hand, it's our lives, our work, our voices bounces around in that warehouse of machines.

**02:30** - _Ingrid Burrington_

Yeah, it can be a little surreal because it's not as though it's like I know that machine has someone's email, and that machine has something else. But realizing kind of just how much is kind of happening around me implicitly that I can't see, but I can kind of hear in the sense of the w hirring of the machines and the larger kind of operation of the space. There is something a little bit eerie about it, and I mean there's sort of like an industrial awe ...

**03:00** - _Saron Yitbarek_

It's so important to remember that these buildings really are there, somewhere, humming behind the fence. Because here's the thing, when we talk about storing stuff on the cloud, or building an app on the cloud, we sometimes fool ourselves into thinking it's like a cloud in the sky, something nobody can touch. But the reality is exactly the opposite, and once we remember where the cloud lives, we can start talking about who owns the cloud. Who controls all those servers, and cables, and fans?

**03:30** - _Saron Yitbarek_

And how does that change the way developers build the future? Because in cloud city, we're all living there together.

I'm Saron Yitbarek, and this is Command Line Heroes. An original podcast from Red Hat, episode six, Crack the Cloud Open.

_Chris Watterston_

There is no cloud, it's just someone else's computer.

**04:00** - _Saron Yitbarek_

Chris Watterston is a designer who grew annoyed at the confusion around the cloud. That word had softened the edges of datacenters, like the one Ingrid visited. When he put that slogan on a sticker, he became internet famous. That line "There is no cloud, it's just someone else's computer," is now on t-shirts, hoodies, coffee mugs, posters, coasters, and more than a few keynote presentations.

**04:30** - _Chris Watterston_

People sort of still use the cloud as if it's going up there, people that don't understand fully what it is, they can still take it sort of the wrong way and not understand that their data is actually going across copper cables, or fibers, whatever it might be into a storage device that is actually managed and owned by someone else. Which obviously, for some people, if they've got private content they want to hide, could be quite scary.

**05:00** - _Saron Yitbarek_

So think of Chris's sticker next time you're tossing something onto the cloud. Where are you really tossing it? Same goes for working on an app, for all the talk of going serverless, there's really no such thing. It's somebody else's server, somebody else's computer. In a sense, this is a story about growing up. All season long, we've been tracking the evolution of open source.

**05:30** - _Saron Yitbarek_

From its rebellious origins with the free software movement, and the emergence of Linux, all the way to today when open source tools and methods have taken us far from home into the cloud. Think of it this way, when a person finds an apartment to rent, she's going to sign a contract, move in, and make it her own. When developers go looking for a cloud provider, they have to do the same thing. That's the moment we're in right now, the moment when a whole world of developers is making their move onto a series of clouds, and starting to figure out what the rental lease actually says.

**06:00** -_Saron Yitbarek_

Just for the record, why are we in such a rush to hop onto a cloud in the first place?

_Brandon Butler_

Developers don't want to have to manage the infrastructure that is running their applications.

_Saron Yitbarek_

This is Brandon Butler, he's the senior editor at Network World. And he's been covering cloud computing for years.

**06:30** -_Brandon Butler_

They want to develop apps, and they want to deploy those apps, and they want those apps to just run. And more and more, we've seen things like serverless computing, and functions-as-a-service, and containers, and container management platforms, like Kubernetes.

_Saron Yitbarek_

Check out episode five, by the way, for a run-down on containers and Kubernetes.

_Brandon Butler_

All these things are helping to abstract away the underlying infrastructure that applications need to run on. And that's going to be a trend that we're only going to see continue to develop into the future.

**07:00** - _Saron Yitbarek_

A big part of that attraction is summed up by the word hyperscale. With the cloud providing all your infrastructure, you can take a startup and scale it up, or down, as fast as you want. You're not building your own infrastructure anymore, you're just renting out however much of the cloud you need. Brandon explains what hyperscale means for a startup.

**07:30** - _Brandon Butler_

This whole model of using the public cloud for application development has been a huge advance for application developers. It's created a whole new range of startups, and companies that have grown past startups and become major publicly funded companies. You think about a company like Netflix that runs much of its backend infrastructure on Amazon's cloud, and other cloud providers as well.

**08:00** - _Brandon Butler_

They were able to turn into what they are, because they are using the cloud. So the impact that the cloud has had on developers cannot be understated. It's been the major shift in application development over the last decade.

_Saron Yitbarek_

Nick Bush, a sys admin at Meadowbrook Insurance remembers what a pain infrastructure changes were before the cloud.

**08:30** - _Nick Bush_

Before, it was somebody would come up with an idea to do a certain project, and we would say, "That would need hardware to do that." And they would ask, "Well, how do we do that?" So we were always constrained by memory, and VM-ware usually was the hard part. And we would be constrained by how many virtual machines we could spin up at any one given time. So we would have to go get a quote for new processors, new memory, new hardware, $5,000 added space, and stuff like that. And once we get those quotes from a couple of different vendors, it would go to management, and they would take time. It was a long, drawn-out process just to get the hardware in.

**09:00** - _Nick Bush_

Let alone, then build the VMs and turn them over and test and stuff like that. So I mean there were several months of front-end work versus now we can definitely get that okay within a couple hours usually. And go spin it up, and go turn it over to them the next day. So it is a big turnaround difference.

**09:30** -_Saron Yitbarek_

Between scalability, speed, and price, the cloud can look very tempting. To go back to the apartment rental analogy, cloud options can feel like you're getting a butler and a driver at no additional cost. It's hard to say no, and today we've got four very ambitious cloud providers doing the tempting. They all want to be your new landlord in cloud city. But hold up, everyone who's rented a home knows it's not the same as buying. You can't just knock down a wall, or install a new jacuzzi. You got to go through the landlord.

**10:00** - _Saron Yitbarek_

In some ways, could we be stuck if we find ourselves beholden to a single proprietary company? Brandon Butler.

**10:30** - _Brandon Butler_

When you use a proprietary cloud vendor, there are different ways you can use it. You can use it in a way that embraces open source standards and open source platforms and run those open source platforms on top of a cloud that even may be proprietary, or you can use native tools to those cloud providers that may not be open source, but they may have stronger integrations to the public cloud platform. So, it's a big trade-off that end users have to consider. Do I want to use tools that are native to the cloud provider that may be more heavily integrated with the services this cloud providers offers and other services that I might want to use also on that cloud, or do I want to prioritize using an open source platform that will give me more freedom to run that maybe on my own infrastructure or another cloud provider's infrastructure?

**11:00** - _Saron Yitbarek_

As the clouds we rely on keep growing and the big four cloud providers elbow past each other for dominance, we developers have a choice. Do we give up some of our independence, relying on a single cloud provider to protect our work, or could we take another road, maximize the scalability of the cloud while keeping our independence?

**11:30** - _Saron Yitbarek_

In other words, can we sign a lease that says, "Sure. Do what you want with the place. Knock a wall down. Make it your own?"

**12:00** - _Saron Yitbarek_

So, what's the problem with giving up a little independence? If you're a developer, it might not be so obvious. That's because it's mostly been the ops teams who've been encouraging us to tread lightly. They noticed the nuts-and-bolts issues. Here's Major Hayden. He's the principal architect at Rackspace.

**12:30** - _Major Hayden_

Developers will often find that over time they may have requirements for different things like a certain specialized kind of storage, or they may want to have a certain sized VM, or maybe they want a type of offering that the cloud provider doesn't offer, and there's also some of those things that you do have to look at that developers aren't always the first ones to look at, where you have to do that cost benefit analysis to understand, okay, I have a lot of flexibility in public cloud, but how much does that really cost me?

_Saron Yitbarek_

Major points out another issue, one that goes beyond practicalities and speaks to the heart of what developers like me believe in. I'm talking about open source practices. Even if cloud providers allow you to use your open source tools, they're not themselves open.

**13:00** - _Major Hayden_

So, open source in the cloud is an interesting subject to tackle because there's plenty of open source technologies that allow you to take advantage of a public cloud, but not all public clouds have their infrastructure offered as open source. So for example, if you take Amazon, you're not able to actually see what they're using to build VMs or build other services, so if you wanted to make an adjustment for that, you really wouldn't be able to, or if you wanted to look behind the scenes and understand more of how it fits together, that would be difficult.

**13:30** - _Saron Yitbarek_

If you listened to our episode on DevOps, you know there's a lot we can gain by tearing down the wall between developers and operations. Architects like Major give us some crucial insights, and then there's sys admin, Nick Bush. He's on a team where people are ready to jump on the cloud. Developers are tired of being stuck with physical hardware that ages every five years, and everyone likes the idea of expanding as fast as they want, but Nick wants to flag things that developers might not be considering.

**14:00** - _Nick Bush_

Yeah. I mean, there is inherent latency. I mean, that is a database server in Montana versus my 10-gig connection down the street, so just doing local database calls is gonna take longer. It is a longer path to get there, and there's other security stuff that's out there that we didn't have to worry about physical premise. Here, we were in control of our hardware and stuff like that. Once you're in the cloud, you gotta think about the other connections coming into that.

**14:30** - _Nick Bush_

You gotta worry about security, I think, a little bit more, and it is a price thing. Every month you want a sped-up VM, take up storage space. It is a cost per gigabyte transferred as well as stored, where before we had a one-time purchase and we just had it there, and we could store it, use it. We didn't have to pay anymore money as long as we had space for it.

**15:00** - _Saron Yitbarek_

For the record, Nick does think the pluses outweigh the minuses. He just doesn't want us to pretend it's a perfect system. What happens if your provider has an outage and you want to re-deploy an application in another cloud? Or what if there's a price advantage to using different clouds for different things? A lot of the issues that the ops folks bring up can fit under a single label, vendor lock-in. You're probably familiar with this term.

**15:30** - _Saron Yitbarek_

It's the concept that building on someone else's server gets you more and more tied to their platform. You get locked in. Suddenly, you're being force fed upgrades, cost changes, new limits you wouldn't have chosen for yourself. You get the idea.

**16:00** - _Saron Yitbarek_

When we put our DevOps hats on, we can work together to see lock-in coming and plan around it, but when we're buried in our own code, we sometimes forget to look at the whole picture. What about finding the right mix, working on both public and private clouds? The ultimate solution might be in a hybrid cloud, the best of both worlds. I called up Bridget Kromhout to get her perspective. She's a principal cloud developer advocate over at Microsoft, and knows this stuff backwards and forwards.

**16:30** - _Saron Yitbarek_

So, if we think about the hybrid solution having a little bit of that public cloud, but then also some of that private cloud, is that the perfect balance between the two? Is that the ideal solution for developers? If it's hybrid, then I can kind of do whatever I want and use whatever tools that I want on my end, but then still get some of the benefits of the big public cloud providers.

**17:00** - _Bridget Kromhout_

Yeah, absolutely. So, for example, I have friends who work in high-performance computing research at manufacturing companies, and they have all sorts of top secret, NDA, whatever stuff that they don't feel comfortable putting on public cloud, and so maybe they're going to work in their datacenters on these workloads, crunching these customer numbers or whatever, these research numbers, and then they may have other...

**17:30** - _Bridget Kromhout_

They do have other workloads that they feel comfortable having out in public cloud, but I think this is kind of a question of... And sometimes there's questions, too, of whether public cloud has suitability for some of the workloads, like if you're planning on using InfiniBand interconnects between your notes, how much of that are you gonna be able to provision in public cloud?

_Saron Yitbarek_

But this isn't necessarily the perfect solution. Bridget does think that hybrid clouds come with their own headaches.

**18:00** - _Bridget Kromhout_

The problem with hybrid is sometimes people fool themselves and think that they can take something that really wasn't working, so if they had their old processes with a two-week wait time to even get a single VM, if they have a whole scenario like that and it wasn't working well, and then they have a bunch of people who have started taking their credit cards to the public cloud providers because they're frustrated, and then they try to somehow glue those together, but then there's problems with data provenance and latency and, I don't know, de-synced data sets, there's a lot of ways it can go wrong. I think if you work with your cloud provider so you can add some of the direct connection things that are available so that you can sync things better, that can help.

**18:30** - _Saron Yitbarek_

Yeah. So, when we talk about the cloud in the context of open source, I feel like as developers we, I think most of us, really like open source, especially if you're listening to this podcast. Right? You want everything to be open and transparent and share the code and all that, but I feel like when we talk about the cloud, because it doesn't feel like its own code base, doesn't feel like its own project, it's the environment, it's the thing that we can use to help us run our code, are developers as insistent on that part of the story being open source and transparent the way that we sometimes feel very strongly about when it comes to our projects and our code base?

_Bridget Kromhout_

I think that's a really reasonable question, and I think that might also come down to exactly where in the stack are you going to pick to care about, because if you think about it, how much access to and info do you have about the chips?

_Saron Yitbarek_

Yeah, that's true. That's fair.

_Bridget Kromhout_

They're sitting over there with some silicon and some secrets. They're not necessarily giving that to you.

**19:30** - _Saron Yitbarek_

Yeah, silicon and secrets. That's a good podcast name, by the way.

_Bridget Kromhout_

Right? Maybe the question is not is everything open, but is everything open that you need to be open, and of course, is your provider gonna have transparency with you when things don't operate exactly as they should, because hopefully they will.

**20:00** - _Saron Yitbarek_

So, I get Bridget's perspective as a public cloud provider, and she makes an interesting point. How granular does a developer's control need to be on the cloud? As for me, I look at it differently. What don't I want to sacrifice in order to get some of that public cloud goodness? Say an app is running on a public cloud and then, wait a minute, now I've scaled up or there's new compliance requirements and it makes more sense for my app to be in a private cloud.

**20:30** - _Saron Yitbarek_

Moving that app point to point, I need to know it's going to work. I need to know things are packaged the same way, configured the same way. In other words, I need to know that jumping from cloud to cloud is always possible.

What's the alternative? Getting locked into just one cloud provider? A provider that might even gain a total monopoly over all the others? Not having the option to move to a different environment, that's like trying to code with one hand tied behind your back.

**21:00** - _Saron Yitbarek_

So, we don't want to be trapped and beholden to any one cloud. We want to be able to cloud hop when it suits us. In the immortal words of rock legend Queen, I want to break free. We want access to that fantastic scalability you find in public clouds, but without giving up the freedoms that we've come to expect from using open-sourced tools and methods.

**21:30** - _Saron Yitbarek_

Here's the good news. The work on those hybrid clouds is well underway. Mike Ferris, VP of Business Architecture at Red Hat gives a great explanation of how hybrid clouds help us maintain that open source ethos.

**22:00** - _Mike Ferris_

Open source is really the base for almost every cloud in the world and now many, if not most, of the application infrastructures in the world and the tooling evolves from that, the management capabilities, everything that people are using to build and employ mission-critical applications as well as non-mission-critical applications if it's all based on open source.

**22:30** - _Mike Ferris_

This concept of hybrid really flows alone with it meaning that they have the ability to use these things wherever they are to take advantage of the best feature sets on what infrastructure is there, all based upon this concept that open source is really helping define the standards that are driving this next generation of development while they continue to leverage all the investments that they've made in the past.

_Saron Yitbarek_

I think the cloud wants to be open. We've spent a lot of time this season talking about the origins of open source. You can even make the case that some version of hybrid would be an extension of those same ideals.

**23:00** - _Mike Ferris_

What has changed in the open source development activities over the past several decades has been that many more people have gotten involved, including people like Microsoft, IBM. You know, name a big corporation, they're either using open source for their offerings or they're building open source and contributing that back to the community or some combination of both.

**23:30** - _Mike Ferris_

This influx of really important needs from customers through those large corporations has really helped evolve open source from being what was originally intended to displace the Solaris and UNIX environments, to something that's the basis for not just community and hobbyist use but also certainly mission-critical enterprise use.

**24:00** - _Saron Yitbarek_

Open source is growing up, fast. Now, we have the chance to make sure we remember where we come from. As we hop on the cloud, we can claim part of it for ourselves and keep the cloud open. Luckily, building open source bridges between clouds is getting a lot easier thanks to work like the OpenStack® platform. Major Hayden, principal architect at Rackspace, describes its origins.

**24:30** - _Major Hayden_

It really came from Rackspace and NASA getting together and saying, "Hey look, this is a new way to build infrastructure and we should do it out in the open. We should get more of this input. We should talk to more people. We should get more use cases." What OpenStack is, it's a group of applications that work really well together to create infrastructure, to manage infrastructure all across the board. Whether you need complex virtual machines, complex networking, you have strange storage requirements, OpenStack can usually fit most of those.

_Saron Yitbarek_

Major is talking about adding something that open source knows how to deliver. Adaptability.

**25:00** - _Major Hayden_

When I look at OpenStack, I look at it as an interconnected set of open source applications that allow you to build the infrastructure that you want. If it can't build what you want then you can go in the community and make changes to it. I love the reaction when I go and talk to customers and they say, "Well we want to change this. We want to change this." We say, "Well, you can."

_Saron Yitbarek_

How do we make sure that level of adaptability is enshrined in the cloud of tomorrow? Like many issues we've talked about in past episodes, it's all about strong communities. Brandon Butler, senior editor at Network World.

**25:30** - _Brandon Butler_

For example, we've seen the Cloud Native Computing Foundation be created to create standards and the use of application containers and Kubernetes. We've seen the OpenStack foundation be created to bring OpenStack users together to talk about best practices when creating open source infrastructure service clouds.

**26:00** - _Brandon Butler_

The communities that underpin these open source communities are hugely important for developing the next wave of open source tools, for learning best practices about how to use these open source platforms, and for encouraging these public cloud vendors to embrace these open source standards.

_Saron Yitbarek_

Once we start building that hybrid cloud, making it as open as possible, the potential really seems endless. Here's Major.

**26:30** - _Major Hayden_

What I'm most excited about is just to see more things that can come together on top of different clouds. For example, OpenStack provides a great base layer of infrastructure, but then you can do so much on top of it. I think sometimes different companies will adopt OpenStack and then say, "Man, what do I do now? I have all this freedom. I don't know what to do." It's kind of like when you have a refrigerator full of food and you're like, "Ah, I don't know what to make."

**27:00** - _Saron Yitbarek_

I love having that problem. Chris Watterson might have been right when he told us.

_Chris Watterston_

There is no cloud. It's just someone else's' computer.

**27:30** - _Saron Yitbarek_

But that's not the end of the story. With hybrid clouds, we get to write ourselves back into the next chapter. The key to creating a hybrid cloud app probably hasn't been cracked yet. Managing work across multiple clouds, that's going to be a huge job for today's command line heroes. There'll be a lot of trial and error but it is so worth it, because the one thing we do know is that staying open source means developers can always build the world they want to work in. That kind of flexibility is how we're going to hold on to the rebel spirit that open source does best.

**28:00** - _Saron Yitbarek_

Next episode—our season finale—we are zooming out for a big picture view of what open source looks like as a global phenomenon, in ways that are going to surprise you. We'll also look to the future of open source, how our developers preserving the spirit of heroes like Linus Torvalds, even as they reinvent their industry.

**28:30** - _Saron Yitbarek_

Command Line Heroes is an original podcast from Red Hat. For more information about this and past episodes go to RedHat.com/CommandLineHeroes. Once you're there you can also sign up for our newsletter. To get new episodes delivered automatically for free, make sure to subscribe to the show. Just search for Command Line Heroes in Apple Podcasts, Spotify, Google Play, CastBox, and other podcast players. Then hit subscribe so you'll be the first to know when new episodes are available. I'm Saron Yitbarek. Thanks for listening and keep on coding.

The OpenStack® Word Mark and OpenStack Logo are either registered trademarks / service marks or trademarks / service marks of the OpenStack Foundation, in the United States and other countries and are used with the OpenStack Foundation's permission. We are not affiliated with, endorsed or sponsored by the OpenStack Foundation or the OpenStack community.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-1/crack-the-cloud-open

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
