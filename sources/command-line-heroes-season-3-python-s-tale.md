[#]: collector: (bestony)
[#]: translator: (atongsa)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 3: Python's Tale)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-3/pythons-tale)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 3: Python's Tale
======
**00:06** - _Saron Yitbarek_

On the morning of July 12, 2018, members of the Python community all around the globe woke up, grabbed a cup of coffee and popped open their laptops. Then one by one, they discovered a message from their benevolent dictator.

**00:24** - _Saron Yitbarek_

Guido van Rossum, the man who invented Python, one of the world's greatest programming languages, maybe the greatest programming language, had written to them all. So imagine all those Python fans reading these words.

**00:38** - _Multiple voice actors_

I don't ever want to have to fight so hard and find that so many people despise my decisions. I would like to remove myself entirely from the decision process by giving myself a permanent vacation from being benevolent dictator for life. You will all be on your own. I am not going to appoint a successor. What are you going to do. Create a democracy? Anarchy?

**01:00** - _Saron Yitbarek_

With that simple but earth-shattering note, Guido van Rossum, the man that the Python community had been following for decades ... Well, he basically just bowed out. His message was titled "Transfer of Power," and it would change the landscape of the Python language forever.

**01:19** - _Saron Yitbarek_

But more than that, it called into question how all our programing languages were going to evolve and thrive in the future. Were languages supposed to be run by one Benevolent Dictator, giving them shape and coherence? Or, in our open source world, were languages more like spoken languages, things that grow and react according to the behavior of a whole bunch of different speakers? The Python community, the fastest growing community of any language out there, was about to find out.

**01:56** - _Saron Yitbarek_

I'm Saron Yitbarek, and this is season 3 of Command Line Heroes, an original podcast from Red Hat. Last season on Command Line Heroes, we explored a huge stretch of territory, from gaming, to the art of the fail, to serverless development. We even ended up tracking one of NASA's rovers across the surface of Mars. But there is one episode that seemed to really capture everyone's imagination, the story of Grace Hopper. Her work on compilers led to the first high-level programming language, COBOL. We realized afterward that Grace Hopper's story was just one of so many stories of languages shaping the world of development and ops. New programming languages allow us to bridge humans and machines. They open gateways toward amazing new possibilities.

**02:51** - _Saron Yitbarek_

So, season 3 is all about those languages. We're talking JavaScript, we're talking BASIC, Go, Perl. And yes, we're talking Python. Python is where our journey begins because by following the tale of Python, we learn a crucial truth about the future of all our programming languages.

**03:16** - _Saron Yitbarek_

After Python's benevolent dictator abandoned his throne, the Python community was ... yeah, a bit lost. How do you organize things after a dictator steps down? Somebody suggested they can model their structure after the Presbyterian church. That idea didn't stick. To understand how Python did reorganize and what it means for the future of languages in general, we have to go back to the origin of the Python tale.

**03:46** - _Guido van Rossum_

Well, I'm writing all this code in C and it's getting kind of tedious.

**03:51** - _Saron Yitbarek_

That's the man himself, Guido van Rossum, Python's Benevolent Dictator. Van Rossum had worked for years at Amsterdam's famous Centrum Wiskunde & Informatica, where he helped develop the ABC programming language. Here, he's describing the moment he was working in C and saw a need for a brand new language.

**04:13** - _Guido van Rossum_

It still felt like there were lots of bugs and it was just slow going. I was thinking, hmm, if we had an ABC implementation here, I would just write a whole login program in 15 minutes, and then I would move onto the account management program or something, and in C, it takes me a week each. I somehow started thinking about coming up with a way to use some of ABC's features in the Amoeba environment.

**04:47** - _Saron Yitbarek_

Here's something we discovered in studying the history of programming languages. There's no such thing as brand new. They all borrow from old languages in order to cobble together solutions. Languages morph, they evolve, they branch. When van Rossum was getting frustrated with the possibilities out there, he imagined a language that could bridge the gap between C and shell programming. C was often overkill, but at the same time, shell scripts felt too cumbersome. There was a sweet spot between the two, and that was a spot that Python filled. When van Rossum first released Python in 1991, it was a revelation, for sysadmins especially. Here was a full-featured scripting language unlike anything that had come before.

**05:35** - _Emily Morehouse_

The first time that I used Python, I absolutely fell in love with it.

**05:39** - _Saron Yitbarek_

That's Emily Morehouse, one of five women currently working as a core developer on Python.

**05:44** - _Emily Morehouse_

I think seeing such a stark difference between a first language like C++ and then moving into something like Python, you are really able to see the elegance of the language and the language design itself. You're not necessarily having to deal with any of the hairy implementation details of memory management, and it was such a great way to build things so much faster, and build things for a much wider variety of applications.

**06:18** - _Saron Yitbarek_

Key to Python's attractiveness was its extensibility. A language like ABC, for example, is monolithic in design. There's no way for a real community to help define how the language will work. By contrast, van Rossum wanted Python to be open and extensible from the beginning.

**06:37** - _Emily Morehouse_

When approaching software design, you often will have to take either existing software or other software systems, and get them all to work together, and one of the very true values of how you can design software is making sure that it's extensible.

**06:58** - _Saron Yitbarek_

It sounds like a no-brainer, but not every language has achieved the level of extensibility that Python had right from the start. The truth is, if a language doesn't have extensibility baked into it, there's a good chance it will end up collapsing under its own weight as it grows.

**07:16** - _Emily Morehouse_

Python has been designed in a very interesting way that allows it to be extensible at its core. You can actually patch different pieces of the system at runtime, so if you want to switch out how modules are imported, or you want to switch out your string types or your integer types, Python allows you to do all these things fairly easily.

**07:44** - _Emily Morehouse_

At the heart of Python's extensibility is something called C extensions, or C modules. So Python has actually been designed to give you an entry point to other languages, and essentially, if you can write a C extension or a C module that can then bridge to hundreds of other languages, you can kind of hack Python.

**08:16** - _Saron Yitbarek_

It's all about the user's ability to adapt the language to their own needs. So Python, as Guido van Rossum envisioned it, was never going to be limited to one dictator's vision. His “Transfer of Power” memo was a long-time coming. Van Rossum understood the power of community influence, the power of bringing everyone under a big tent. Yes, he ended up getting called a dictator, but it was benevolent dictator.

**08:44** - _Emily Morehouse_

I think one of the reasons why Python has become such a diverse community is because of Guido. Python has female core developers now because Guido wanted that change to be made, and made it happen himself.

**09:01** - _Saron Yitbarek_

Naomi Ceder, the chair of the Python Software Foundation, once gave a keynote where she said, "Python. Come for the language, and stay for the community." And that may be Guido van Rossum's greatest legacy. Not just Python, but the Python community he made room for. He made Python seriously extensible, but it was, in a way, socially extensible, too. It always had room for human additions.

**09:29** - _Emily Morehouse_

You have so many different applications of Python that your community is then, by definition, and by construct, very diverse. So it's really, really broadened the community reach.

**09:51** - _Saron Yitbarek_

Emily Morehouse is a core Python developer and Director of Engineering at Cuttlesoft.

**09:59** - _Saron Yitbarek_

Once Python hatched, it started to grow like nothing before. I'm looking at a Stack Overflow chart that shows the amount of chatter they get on each language, and Python's line is rocketing. In 2018, more people did Google searches for Python than for Kim Kardashian. All that excitement has it jostling for the title of most-used language against options like Java, C, and C++.

**10:26** - _Saron Yitbarek_

So, what's with all that love, anyway? To find out, I caught up with developer Michael Kennedy, who lives at the center of the Python zeitgeist. Michael hosts not one, but two podcasts devoted to Python. Talk Python to Me, and Python Bytes. We'll throw some links in the show notes so you can check them out. Michael and I got chatting about how Python really hit its stride.

**10:52** - _Michael Kennedy_

If you look at the analytics and the surveys and stuff like that, it really seems to be that 2012 is a strong inflection point, and the most significant thing that happened around 2012 is the data science community switched away from things like R, some other stuff, to really focus on Python. Ever since that's happened, there's been even more momentum there, more machine learning libraries. A lot of the popular machine learning libraries, for example, are Python first, and then they'll consider other languages.

**11:22** - _Saron Yitbarek_

Yeah, that's been my understanding, too. When I think about Python, I know it can be used for web development; I know a lot of people who still use it to build web apps. But I feel like the heart of it nowadays is more in the data science part of things. What do you think led to that happening? Why did the data science community leave things, or I can't say leave, but move away from things like R?

**11:44** - _Michael Kennedy_

Right, exactly.

**11:45** - _Saron Yitbarek_

Where'd that come from?

**11:46** - _Michael Kennedy_

I think there's two things at play in that transition. One of those things certainly has to do with Python being a real, in quotes, "real" programming language, in the sense that you can build simple things. You can build graphs and data analysis tools and whatnot. But you can also build Instagram and YouTube and all these other ...

**12:08** - _Saron Yitbarek_

Yeah, literally.

**12:09** - _Michael Kennedy_

Whereas things like R ... Yeah, literally, quite literally. Those are written in Python. So there are other languages they were using, like R at the time, was sort of scientific, statistics type programming language that did data sciencey stuff. But if you wanted to go build a web app to show off your results, well, what are you going to use? Node or Python or ... You couldn't stick with it.

**12:31** - _Saron Yitbarek_

Yeah, that's a good point.

**12:31** - _Michael Kennedy_

So Python has this really nice ability that it ... Basically, it's a real programming language. So that's number one. Number two is, Python is pretty unique in this, what I call ... It's a full-spectrum language. What I mean by full spectrum is, I can be a biologist or astrophysicist or something, and I want to explore a little bit of data, I want to load up a CSV file and run some commands and get a picture. I don't need to understand classes, static methods, static main void, compilation, linking. You don't have to go through all the stuff that some programming languages do just to get started. You can do just a couple lines of code, type a command, and it runs.

**13:14** - _Michael Kennedy_

Yet, you can build things like Instagram and so on. It can grow into this absolutely professional system that you can use, but you're not forced to understand all these deep abstractions that are meant for large applications right away. You can adopt them as you need it. Does that make sense?

**13:30** - _Saron Yitbarek_

Yeah, yeah. That makes a lot of sense. So we talked about that inflection point around 2012, and when I was looking and doing some research about Python, Python is actually one of the world's most Googled, Google searched, coding languages.

**13:42** - _Michael Kennedy_

Wow.

**13:43** - _Saron Yitbarek_

Do you feel like it's really picking up and growing at this point?

**13:47** - _Michael Kennedy_

I do think it's picking up and that it's growing. In those last number of years we talked about, there's certainly more enterprise groups that are using Python. It used to be .NET, Java, maybe some C. That was the answer, and now Python is starting to make its way in, and I think it's getting sideloaded into those environments somewhat, and by that, I mean the data science folks. It's like, well, obviously we're going to use Jupyter Lab and all the cool notebook stuff. That's Python.

**14:17** - _Michael Kennedy_

Data science doesn't have such a legacy code base story. If I'm going to start a new project where we're exploring some ad campaign or some science results, that doesn't have a huge dependency on old stuff. Models and data expire, so it's more easy for the data science world to switch technologies or stay more current.

**14:37** - _Saron Yitbarek_

That's a good point.

**14:39** - _Michael Kennedy_

Yeah, thanks.

**14:42** - _Saron Yitbarek_

Yeah. And it sounds like it's not going to stop growing anytime soon. It sounds like it's going to keep growing, and the momentum is still going to carry it forward. What do you think is going to influence that growth the most, moving forward?

**14:52** - _Michael Kennedy_

I feel like it's this ball rolling downhill. We have all the libraries and packages you can use with Python. It's a ridiculous number that we have now. A year or two ago, it was 100,000. Now it's 170,000 packages or projects.

**15:10** - _Saron Yitbarek_

Wow.

**15:10** - _Michael Kennedy_

You can just, in a couple lines of code, oh, I'd like to do machine learning. Someone at the conference showed us an example of, here's how we're going to train a machine learning system to be given a bunch of faces of people, choose what type of eyes they have. Do they have round eyes, do they have oval eyes, things like that. Apparently this drives the kind of makeup you have or something.

**15:30** - _Saron Yitbarek_

Oh, wow.

**15:31** - _Michael Kennedy_

This woman did a great presentation, and she said, here's the code to train this model, and then to ask it questions. And it was 15 lines of code from beginning to end.

**15:40** - _Saron Yitbarek_

Wow.

**15:40** - _Michael Kennedy_

And then you have, here's your thing that tells you, given a picture, what your eyes are like.

**15:44** - _Saron Yitbarek_

Oh my goodness.

**15:45** - _Michael Kennedy_

The momentum of those types of things, these little, super powerful things, you can just bring in through these packages is ridiculous.

**15:53** - _Saron Yitbarek_

Wow, that's so cool.

**15:54** - _Michael Kennedy_

Isn't that crazy?

**15:56** - _Saron Yitbarek_

Okay. Let's pause that conversation for a sec. We're going to hear more from Michael later on, but I want to go back and underline something. It's what makes all those amazing Python qualities possible in the first place. The Python community. A defining part of Python's success is that huge, responsive community.

**16:21** - _Saron Yitbarek_

At the same time, as we saw with van Rossum's departure, the size of that community can be overwhelming. Imagine having to carry the hangups of an entire language around with you. In a way, attracting such a massive community made the idea of a single dictator for life just untenable. Van Rossum wasn't necessarily prepared for how huge a response his language was going to receive, but, almost organically, community members pulled together Python's mailing list, its newsgroup, its website, and eventually, the process for discussing language changes via PEPs. That stands for Python Enhancement Proposals.

**17:05** - _Saron Yitbarek_

So, despite the dictator title, van Rossum was building a language that you could really talk back to, a language that users could help build. I'm betting that despite his frustration at that moment of departure, van Rossum knew that a dynamic community would give more to his language than it could ever take away.

**17:25** - _Diane Mueller_

My name is Diane Mueller.

**17:27** - _Saron Yitbarek_

Diane's the Director of Community Development at Red Hat for the cloud platform. Over the past 30 years, she's witnessed a powerful evolution in the strength of open source communities, and she's been impressed by Python's community in particular.

**17:42** - _Diane Mueller_

The Python community has done amazing ... They brought in the concept of codes of conduct for conferences, diversity scholarships, all of that sort of stuff. By bringing in the different voices and the different perspectives, we get a better and more innovative project that will live on longer, and hopefully work better for more people.

**18:03** - _Diane Mueller_

Even the mistakes they made, they handled openly and transparently and through collaboration with the community after seeing that sort of spirit wither away into a bro culture from Silicon Valley and startups, Python felt like coming back home to the roots of where I got started, and the community that had been around back in the day. So it was pretty inspiring and pretty awesome.

**18:33** - _Saron Yitbarek_

Inspiring largely because Python redefined what it means to be part of the community in the first place. I mentioned that Guido van Rossum started championing women in the community, even as he stepped down. But he also helped widen the tent in a more general way.

**18:50** - _Diane Mueller_

Individuals bring a lot more to the table than just code contributions. Mostly community managers and project leads focus on trying to get people to contribute to their project, and in the Python community, people were really highly encouraging you to work on documentation, to help run the conferences, to help promote diversity. There were all sorts of other things you could do to be part of the Python community.

**19:19** - _Diane Mueller_

So that idea, that contribution isn't just about code, it's about participation, it's about learning and education, and it's a lot about documentation, was the way into community for a lot of people.

**19:35** - _Saron Yitbarek_

Of course, we've still got a ways to go.

**19:37** - _Diane Mueller_

Meritocracy is still very technically focused. No one's going to doubt that. But I think you also see the belief that community management and community managers ... We're skilled parts of a community, as opposed to just the person we hired to create our events for us.

**19:55** - _Saron Yitbarek_

For Diane, van Rossum's decision to officially abdicate his dictator role is part of a global shift. It's moving away from older, monolithic kinds of language-building.

**20:07** - _Saron Yitbarek_

I think we might have moved on from that model, though every once in a while, I hear someone say, yeah, I'm the benevolent dictator for life of this project, and I'm like, yeah, I don't think so.

**20:21** - _Saron Yitbarek_

Diane Mueller is a Director of Community Development at Red Hat.

**20:28** - _Saron Yitbarek_

By the time Guido van Rossum sent that jaw-dropping “Transfer of Power” memo, the Python community was a powerhouse unto itself. It's common for projects to adopt new governance models as they grow, and in many ways, as we've seen, these folks were ready to take charge of their own language. But I still want to know, how exactly did that pan out? What happened after van Rossum stepped away. Let's go back to our conversation with Michael Kennedy to get some answers.

**20:59** - _Saron Yitbarek_

... back and away from Python, how has the community been doing without him?

**21:05** - _Michael Kennedy_

Well, the community has been okay, but we've been in ... at the highest level, kind of a stasis. The runtime and the language just basically had to go into a coma. There were proposals for interesting things, and they were sometimes complicated, but sometimes really simple. Like, hey, wouldn't it be great if we could ship Python yearly instead of every 18 months, so it's a little more predictable, tied around the yearly conference, things like that.

**21:33** - _Saron Yitbarek_

Sure, yeah.

**21:33** - _Michael Kennedy_

That couldn't be decided, because there was no way to make decisions after he stepped down. He basically said, I'm going to go on vacation. This is up to you guys, you have to figure out how to keep running this. I'm not even going to tell you how to decide how to keep running it. This is your problem now.

**21:48** - _Saron Yitbarek_

Wow. That sounds dramatic, but check this out. Remember those Python Enhancement Proposals, the PEPs that allowed the community to give feedback? Well, PEPs to the rescue.

**22:02** - _Michael Kennedy_

There was a series of them trying to determine new governance models for the Python community. Well, the big news is they've decided on one of those, called the Steering Council, which is five people—I believe they all have equal votes—and they've recently elected those five. So instead of it being on one person's shoulders, it's on all of them.

**22:23** - _Michael Kennedy_

One thing that I think is really nice is that we have Guido van Rossum as one of those members. He stepped away and said, I cannot be the single source of ... all the pressure of people wanting changes and feedback. But he still, he didn't completely run away from the language. He's still a core developer, and he's on the Steering Council. So he still has some say, but he doesn't have to take it on entirely, which is pretty cool.

**22:47** - _Saron Yitbarek_

I'm wondering how that works out in reality, because I feel like if I'm on the Steering Council and I'm sitting next to the creator of the language, I'd probably tend to agree with whatever he says.

**22:58** - _Michael Kennedy_

Right, exactly. All things being equal, ties go to Guido.

**23:03** - _Saron Yitbarek_

Yeah, exactly.

**23:03** - _Michael Kennedy_

I don't know. I do know some of the people on the Steering Council, and they've been constant contributors and developers, maybe even to ... at a code level, more so than Guido for 15 years. So they're also pretty deeply involved and pretty opinionated, so-

**23:23** - _Saron Yitbarek_

And invested.

**23:25** - _Michael Kennedy_

Yeah, certainly invested. So I feel like it's going to be okay. Also, I feel like Guido's probably like, I still want to be involved, but he's probably done trying to impose his will on people, because that will just put him right back into the same ... I think he's probably going to take a more relaxed position.

**23:43** - _Saron Yitbarek_

Okay. I'm wondering, do you feel like this model of having a benevolent dictator for life (BDFL), is that model almost required at the beginning of a language, in order to get it up and running, in order for it to be radical and have these breakthrough advances?

**24:00** - _Michael Kennedy_

I do. I think stuff, mostly design by committee, is not super. So in the early days, so many decisions about, how does the language work? Does it use semicolons? How does it do this, does it do that? All that stuff is really hard to committee decide, but Python is over 25 years old now. It's got so many people involved in it. I think now, that this is a pretty good model.

**24:29** - _Michael Kennedy_

They also debated whether or not there should just be a replacement BDFL, who do we elect now to be our king? They decided against that, though.

**24:37** - _Saron Yitbarek_

Okay. If that BDFL position is so important, I'm wondering, how long does a community need one? It sounds like Guido decided on his own, hey, this is too much. This is not sustainable anymore, I'm not doing this anymore. But if it wasn't his decision, I'm wondering, is there an optimal time where that person should step down and we should move to something a little bit more democratic?

**25:01** - _Michael Kennedy_

Yeah, there has to be, right? I think that there probably is. It's hard for one person to still be completely connected with the pulse of the community and technology and the new trends, let's say, 40 years out. That would be super difficult, so there's got to be this switchover. I don't really know where it is, but I feel like it's got to be after you have other people doing more work than the BDFL is doing. More core contributors and developers, and you're just like, well, I was on vacation, and look at all these new things that happened, and it survived. Something to that effect.

**25:39** - _Saron Yitbarek_

Yeah. It's almost like the community will tell you when it's ready.

**25:42** - _Michael Kennedy_

Right, exactly.

**25:48** - _Saron Yitbarek_

The Python community is still taking on a life of its own, so that's where we'll leave them for now. Michael Kennedy is the host of two podcasts that'll keep on tracking their progression in the meantime. You can check out Talk Python to Me and Python Bytes.

**26:07** - _Saron Yitbarek_

Have you ever heard the story of Solon, the guy known as the lawgiver of ancient Athens? Pretty cool guy. After Solon established a constitution for Athenian democracy, he went off into a state of voluntary exile. That's because he knew there was a danger he'd become a tyrant if he stayed in power. I guess Guido van Rossum is a latter day Solon, giving us decades of standard practice, which is a bit like a constitution. Here's a guy who set up a brilliant programming language, a language where an open source community could really make it their own. Then, he also gave them that transfer of power moment, where he told them, you're on your own. I'm no longer your dictator.

**26:54** - _Saron Yitbarek_

He made sure that it had to be the community, not himself, that carried the Python mantle forward. In a way, Guido van Rossum's “Transfer of Power” memo is a manifesto for all programming languages in an open source world, because as any language grows its community, it ends up taking on challenges that only the community can solve.

**27:19** - _Saron Yitbarek_

In season 3 of Command Line Heroes, we're doing a deep dive into the world of programming languages. Languages gain influence because they solve a new problem in some powerful new way, and for the rest of the season, we're uncovering the superpowers baked into JavaScript, Perl, COBOL, Go, and so much more. Next episode, we'll learn the story of BASIC, and what it teaches us about everybody's first language.

**27:47** - _Saron Yitbarek_

If you want to dive deeper into Python or anything else you've heard on this episode, head over to redhat.com/commandlineheroes. Until then, I'm Saron Yitbarek. Keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-3/pythons-tale

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
