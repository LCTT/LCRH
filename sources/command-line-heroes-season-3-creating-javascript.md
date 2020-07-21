[#]: collector: (bestony)
[#]: translator: (gxlct008)
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 3: Creating JavaScript)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-3/creating-javascript)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 3: Creating JavaScript
======
**00:00** - _Saron Yitbarek_

Hi, everyone. We're back. We're excited to launch season three of Command Line Heroes. We have so many of you to thank for the stories featured on this show because each and every season begins with us talking to developers, SIS admins, IT architects, engineers, and folks in the open source community about the topics and technologies you're most interested in. Now, we're opening up this approach even more. We want all of you to weigh in and help shape the future of Command Line Heroes. You could do this by taking our short survey. What do you like about the show? What would you like us to talk about more? Dear listener, we want to know more about you. Are you a developer? Do you work in operations, or do you do something completely separate from the world of tech? Go to commandlineheroes.com/survey to help us level up the podcast for season four and beyond. Now, onto season three.

**01:00** - _Saron Yitbarek_

Brendan Eich was 34 years old when he sat down at his desk in the Netscape headquarters. He was committing himself to a massive 10-day sprint of coding. A new language, a whole new programming language in just 10 days. It was 1995 and the world of programming languages was about to change forever.

**01:26** - _Saron Yitbarek_

I am Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. All season long, we're exploring the power and promise of programming languages, discovering how our language has shaped the world of development and how they supercharge our work. This time, we're tracking the creation of JavaScript. Maybe you've heard the story of Brendan Eich before, but how does something like JavaScript really get created? There was Brendan's sprint, sure. But there's so much more to the story.

**02:02** - _Saron Yitbarek_

Our JavaScript tale begins in the midst of a war, a browser war. The browser wars of the 1990s may seem like history, but they were hugely consequential. On one side of the battlefield, Netscape, which had formed an alliance with Sun Microsystems. On the other, you've got Microsoft, software behemoth. And what were the spoils they were fighting over? It was a battle to decide who would be the gatekeeper of the internet. The stakes could not be larger.

**02:40** - _Saron Yitbarek_

To really understand how the browser wars went down, I called up one of my favorite tech historians, author Clive Thompson. His most recent book-

**02:50** - _Clive Thompson_

Coders: The Making of a New Tribe and The Remaking of The World.

**02:54** - _Saron Yitbarek_

Clive and I got talking about the browser wars, but let me really set the scene for you. You've got Netscape realizing that the browser was this key piece of software that people were going to use to get online. And then you've got Microsoft, their whole business model was packaging stuff inside Windows. They hadn't really been interested in browsers until in the 1990s, Microsoft realized that maybe they'd been sleeping at the wheel. The world was moving online, and there was nothing inside of Microsoft Windows that would help them get there. But these guys over here, some company called Netscape, they're offering an on-ramp to the internet. All of a sudden, Microsoft's industry wide dominance doesn't look so absolute. The browser wars begin in that moment, the moment when Microsoft wakes up to the power of the internet and squints its eye at their new competition. So, that's my setup. Here's me and Clive hashing out what happened next.

**04:03** - _Clive Thompson_

The fight was over who was going to be the main portal to going online. You have to realize that in the early '90s, no one was really online very much. And when Mosaic came along and eventually turned into Netscape, they were the first browser that anyone could download that will let you look at the web. They went online in December of 1994. So, suddenly, you know thousands and millions of people are able to use the internet in this kind of graphical way. They're just getting massive, massive downloads and huge amounts of press. Everyone's basically saying, "Yeah, Netscape is kind of the future of this thing called the internet."

**04:40** - _Clive Thompson_

So over in Seattle, you've got Microsoft watching this with enormous alarm because they had pretty much ignored the internet. They were focused on selling Windows, and they had really not paid any attention to this crazy newfangled thing called the internet. So they had to play a very rapid game of catch up. They did not get their own browser out for almost a year later. In the fall of 1995, their browser came out, and that was essentially the beginning of the browser wars, the moment when Microsoft was trying to fight to be the portal by which people went online.

**05:13** - _Saron Yitbarek_

Okay. So a year to meet doesn't sound like too bad, right? That’s not too long. Right? That seems like a reasonable amount of time.

**05:21** - _Clive Thompson_

No, it's true. It doesn't sound like a long time, but things were moving so rapidly back then. And there was a strong sense of first mover advantage, that the first company that could sort of brand themselves as the way you get online would be the winner for years and years and maybe forever. I remember how rapid the pace of development was. I mean, Netscape was putting out a new browser every couple of months, right? They would be, "Wow. Now, we've got email integrated into the browser. Now, we've got a sort of a little search bar up top." It just kept on becoming better and better. You could sort of see you know all the things you could do online swimming into view as they've rapidly iterated and rapidly pushed things out.

**06:01** - _Clive Thompson_

Microsoft was accustomed to developing very slowly. Here's your four-year-long development process at the end. It's as bug-free as we can get it. Put it in a box, goes out to the stores, and we don't release a new version for four years. Netscape comes along, and it's the first company to say, "No, we're going to put out kind of a substandard product, but it works well enough, and we're going to have a new one for you to download in three months and three months and three months." This completely destabilized Microsoft.

**06:30** - _Saron Yitbarek_

Okay. So if I'm Microsoft, I can look at it and go, "Oh my goodness. This is the future. I need to catch up. I need to compete," or I can say, "Ah, it's a fad." So what is it about the browser that made Microsoft pick the first option? That made Microsoft go, "Oh my goodness. This is a real thing. I need to compete."

**06:51** - _Clive Thompson_

The thing with the browser was that it had a huge amount of cultural cache. It was the first thing you could do on the internet that was like culturally fun. You could go to suddenly a band's webpage and see posts by them and photos by them. You could go and research your hobby by finding all the model train people in Florida, right? So, everything about the internet before that had seemed nerdy. Email, file transfers, whatnot. I mean, suddenly the browser made the internet look like a magazine, like a fun thing to interact with. Newspapers and CNN and magazines were sort of writing about it in this very excited way for the first time. This was the moment that technology moved from being very deep inside the business section to being on page A1 of the New York Times.

**07:41** - _Saron Yitbarek_

So what was appealing about Netscape or even just the browser in general when it comes to developers? Why were they so into it?

**07:48** - _Clive Thompson_

I've met a lot of developers. Suddenly, the internet comes along with the browser, and you can just have a web page that says, "Just download my cool piece of software." So, it unlocked the entire world of the way that we see software being made today.

**08:04** - _Saron Yitbarek_

I should mention here that at first Microsoft actually offered to buy Netscape. Though they were offering a pretty tiny amount, but Netscape turned them down. So Microsoft had to build a browser of their own. They called theirs Explorer.

**08:21** - _Clive Thompson_

Microsoft spent a year frantically working on a browser, and they got it out in the fall of 1995. They did sort of the same thing that Netscape did. They produced something quickly without worrying if it was perfect and it got better and better. But what really emerged over the latter half of the '90s was a war over whose browser would be the most interesting, the most sort of interactive and sophisticated.

**08:53** - _Saron Yitbarek_

Keep in mind that Netscape by no means had the upper hand here.

**08:57** - _Clive Thompson_

Microsoft had a very powerful position. When you ship Windows on the order of 80 to 90% of all computers on the planet, it's pretty easy to make your software the default. And that's exactly what they did. So you see Explorer sort of rise and rise and rise.

**09:16** - _Saron Yitbarek_

In a way, poor old Netscape was always the underdog in that battle, but here's the thing. Before the battle was over, they threw a beautiful Hail Mary, and it turns out that would become an incredible score for the whole world of programming.

**09:35** - _Clive Thompson_

That is the fascinating and weird story of the creation of JavaScript.

**09:43** - _Saron Yitbarek_

All that heat around the web, around the potential of life in a browser had made one thing very clear. We needed a new programming language, something that went far beyond HTML. We needed a language tailor made for all that new web-based development. We wanted a language that didn't just survive online but thrived there.

**10:10** - _Clive Thompson_

How do you create a programming language for the browser?

**10:15** - _Saron Yitbarek_

That, my friend, was the billion dollar question. So around the time Netscape saw that Microsoft was competing with them, they took a look at Java™. Was Java going to be the language for web development? Java was this rich compiled language. It performed just as well as C++. But it did still need to be compiled. Developers really wanted something more lightweight, something that could be interpreted instead of compiled, something that would appeal to all those non-professional programmers that were swarming to the web. Those new programmers wanted to work directly on the webpage after all. That was the dream.

**11:05** - _Saron Yitbarek_

Netscape needed a programming language that would run inside their browser, something that would allow developers to bring those static webpages to life. Wouldn't it be great, they thought, if they could release a new lightweight language that worked wonders for web programming, at the same time that they released Netscape 2.0 in beta. There was only one hitch. That gave them exactly 10 days to create a new language. Actually, it gave one guy, Brendan Eich, 10 days. He was the one tasked with pulling this off. There was no doubt that if anybody could do it, this guy could. When Brendan was a student at the University of Illinois, he used to create new languages for fun, just to play around with syntax.

**11:57** - _Charles Severance_

The key to Brendan Eich is that Brendan Eich, when he built JavaScript, had become sort of a language junkie.

**12:05** - _Saron Yitbarek_

To understand what Eich actually pulled off, we reached out to Charles Severance, a professor at the University of Michigan’s School of Information.

**12:14** - _Charles Severance_

JavaScript was sort of created in an environment where Java was seen as the future, and so in 1994, we thought that it was the thing that was going to solve everything. One year later, the thing that would actually solve everything was about to appear, but it couldn't say, "Hey, I've solved everything," because everybody, myself included, believed in '94, '95 that we had seen the future of rock and roll, and it was the Java programming language. They had to build a language that seemed irrelevant, seemed silly, seemed meaningless, and yet was the right solution.

**12:56** - _Saron Yitbarek_

What Eich delivered was not just a toy language though. It was sophisticated in hidden ways, drawing on major inspirations from languages that had come before.

**13:07** - _Charles Severance_

If you look at the basic syntax, it's very clear that it’s inspired by the C language with its curly braces and semicolons. Some of the string patterns were taken from the Java programming language, but the object oriented underlying patterns taken from a programming language called Modula-2, which had this notion of first class functions, which, to me, is really one of the most amazing choices that made JavaScript such a powerful and extensible language, and that is the function, the body of the function, the code that makes up a function itself is also data.

**13:41** - _Charles Severance_

The other thing that really was a part of the inspiration was HyperCard. JavaScript was always running in a browser, which meant it had a basic data context of the document object model, which is an object-oriented representation of a webpage. It is not like a traditional programming language. The JavaScript code didn't start at the beginning. The first thing that it was was a webpage, and so it ended up with this event-oriented programming.

**14:12** - _Saron Yitbarek_

When JavaScript was released along with Netscape Navigator 2.0 on November 30th, 1995, all that magic was housed into a powerful little seed of a language. 28 companies, including America Online and AT&T, agreed to use it as an open standard language. When it was released, there were some old pros looking down their noses at JavaScript. They thought it was just a language for newbies. They missed its revolutionary potential.

**14:46** - _Charles Severance_

Brendan decided he would sneak in all these super advanced concepts from languages that are not well known that were very like advanced object-oriented languages. So JavaScript is almost like a Trojan horse. It sort of sneaked into our collective consciousness with the idea that it was silly, and fun, and easy and lightweight. But then built in from almost the very beginning was a powerful, deeply thought, well thought-out programming language that's capable of doing literally almost anything in computer science.

**15:17** - _Saron Yitbarek_

The result was a language native to the browser that could evolve as our online lives evolved. It didn't take long before JavaScript became the de facto web development option.

**15:29** - _Charles Severance_

JavaScript was a language that I had no choice but to learn, and literally people that learn JavaScript usually have no choice because they're like, "I want to build a browser application, and I want it to have interactive elements." The answer is therefore you must learn JavaScript. If you imagine, like, what is your favorite language, the answer to that question is almost got to be x plus JavaScript, right? Someone might say, "I like Python and JavaScript," or, "I like Scala and JavaScript," because it's like the one language everyone is required to learn.

**16:05** - _Saron Yitbarek_

Charles Severance is a professor at the University of Michigan School of Information. Netscape had been incredibly strong coming out of the gate, and they fought hard during the browser war, but in the end ...

**16:22** - _Clive Thompson_

Netscape just disappears as a serious product.

**16:27** - _Saron Yitbarek_

Microsoft's industry-wide domination was an overwhelming force. Despite being a year late to the browser game, they were able to pull themselves back on top and win the day. But you know, Netscape's Hail Mary, its creation of JavaScript, was a success because long after the fight was over, this gem of a language that came out of their browser war, it would have an afterlife that changed everything.

**17:01** - _Saron Yitbarek_

If you started coding more recently, you might take for granted that you can develop interactive web pages that change and update without pulling a whole new copy of the page from the server. But imagine for a sec what it was like when doing that became a brand new option. We asked Michael Clayton, a Software Engineer at Red Hat, to help us understand what a huge shift that was.

**17:28** - _Michael Clayton_

In, I want to say 2004, Google Mail was released, Gmail, and it was, to my knowledge, the first web application that really took JavaScript to the next level, that used it to dynamically switch content out that you were looking at.

**17:49** - _Saron Yitbarek_

Say you're looking at your inbox, and you click on an email. In the old days, your email viewer would load a whole new page in your browser just to show you that email. Then you close that email and it would reload the whole inbox.

**18:05** - _Michael Clayton_

It created a lot of latency. There was a lot of waiting when you would switch back and forth between views, Gmail changed all that. They used JavaScript to in the background fetch the content that you wanted to view, and just put it in front of you without you having to wait for a brand new page view.

**18:23** - _Saron Yitbarek_

That saved a ton of time and energy. But really think about it, it changed more than just the speed. It changed the very nature of our work.

**18:35** - _Michael Clayton_

So web developer as a job title has gone from being a server-side, kind of behind the scenes role, to being just a very thin layer away from the user since they're writing code directly in the browser that the user is viewing the webpage through.

**18:52** - _Saron Yitbarek_

It changed everything. In fact, you can pretty much credit JavaScript with ushering in the web 2.0 revolution. Anybody with a web browser suddenly had a development environment right in front of them. But, as I mentioned before, the old guard didn't necessarily feel comfortable with how democratic things were getting.

**19:16** - _Michael Clayton_

That early antagonism of JavaScript, I was part of that myself. I had the browser extensions that would prevent JavaScript from running. I thought it was a useless toy language, and I kind of had this feeling of anger whenever I went to a webpage that had JavaScript required for some critical feature of the site. I was like, "You should build your website the right way without JavaScript."

**19:43** - _Saron Yitbarek_

Soon enough, though, the beauty and the potential inherent in Brendan Eich's 10-day language became obvious to everyone. And now, it's conquering not just the browser but the server, too. With Node.js, a whole new territory for that little-language-that-could has opened up.

**20:03** - _Michael Clayton_

When I heard that JavaScript was going to be run on servers, I thought, “Why would anyone want to do that?” At that point, I was already a JavaScript developer professionally. I wrote a lot of JS every day, and I still didn't quite see why it belonged on servers, and it's turned out, as many listeners will know, Node.js is a huge force in the industry now. I think there's good reason for that.

**20:32** - _Michael Clayton_

One of the things that Node.js taps into that's made it so successful is the huge community of front-end JavaScript developers, client-side developers. They write code. They write JavaScript for the browser. There are a lot of those developers out there, and by making the same programming language available for writing servers, they just immediately have a huge population of people who can start contributing to servers. The tool is already in your toolkit, and you can simply pull it out, install Node.js, and you're off to the races.

**21:11** - _Saron Yitbarek_

So first in the browser and then on servers. JavaScript was this unpretentious, secretly elegant, sometimes buggy, language. A survivor from the browser war that everybody underestimated.

**21:25** - _Michael Clayton_

JavaScript has been kind of a Cinderella story of programming languages, starting in that early state of being essentially whipped together in 10 days, going through a lot of derision from the rest of the programming community, and still somehow continuing to find success and growth and then coming to the point we're at now where JavaScript is either first or second place in the most popular programming languages in the world. JavaScript is essentially everywhere. The ability to run inside of a webpage meant that JavaScript was as pervasive as the web is, which is quite pervasive.

**22:08** - _Saron Yitbarek_

Michael Clayton is an Engineer at Red Hat. Did JavaScript eat the world? Did it ride on the coattails of the web to a kind of language domination? I wanted to find out where the edges of JavaScript actually are.

**22:25** - _Klint Finley_

Hi, my name is Klint Finley. I'm a writer for Wired.com.

**22:28** - _Saron Yitbarek_

Klint was curious about the same thing. And the more he looked at the way JavaScript runs today, the more he realized it's got its fingers in every part of his online life.

**22:40** - _Klint Finley_

JavaScript has become something that can empower entire applications before you even have a chance to decide whether you want all of these different applications to run on your computer. They just start running, and some of them are, they're involved with advertising or facilitating the tracking that advertisers use. So, there's a lot of things happening invisibly in your browser that you might not really even know about or want to have happened.

**23:07** - _Saron Yitbarek_

So Klint decided to run a little experiment.

**23:10** - _Klint Finley_

I decided to try just using the web without JavaScript for a while. I decided to give it a shot and spent a week with JavaScript disabled in my browser.

**23:21** - _Saron Yitbarek_

Sounds simple enough, but forgoing all JavaScript had some surprising effects. Because JavaScript has become so big, so all-consuming, the language famous for being lightweight actually takes up a lot of space and energy now. When Klint blocked that one language ...

**23:39** - _Klint Finley_

In general, it was just a much better web experience in a lot of ways in terms of pages loading quicker, pages being cleaner, the battery life on my computer lasting longer, and just having a more of a sense of control over what was happening on my computer because there's not all of these just weird invisible random programs running in the background.

**24:02** - _Saron Yitbarek_

And just imagine the bliss of living without pop-up ads for the first time.

**24:07** - _Klint Finley_

So much of it depends on JavaScript to even load. So webpages came out a lot simpler, fewer ads, fewer distractions.

**24:17** - _Saron Yitbarek_

That clutter-free web experience isn't the whole picture though. Parts of the web can't function at all if you unplug JavaScript.

**24:26** - _Klint Finley_

A lot of things just didn't work. Gmail redirected me I think to a different version that's designed for old mobile phones. Facebook did sort of the same thing where a lot of the smooth interactions weren't there. It became more like a series of webpages. So Netflix didn't work. YouTube didn't work. Yeah, anything that's really heavily based on interactivity just didn't work. Ultimately taking JavaScript away, there was good and bad, and I had to decide that it's better to have JavaScript than to not have it at all.

**25:05** - _Saron Yitbarek_

Klint Finley is a staff writer for Wired.com. Most predict that JavaScript will only continue to dominate mobile and desktop app development. The level of complexity possible for things like browser-based games, browser-based art projects, etc., is shooting through the roof. And the ever-growing JavaScript community is making the most of that potential.

**25:34** - _Saron Yitbarek_

It's worth taking a step back and remembering here, in 1995, just a couple of decades ago, Brendan Eich was sitting in a room, hammering out a new language. And today, that language permeates everything we do. It might sound a bit cliché to say that some new string of code is going to change the world, but it does happen. A command line hero marshalls all their love for languages into a 10-day sprint, and the world's DNA is changed forever.

**26:10** - _Saron Yitbarek_

We can thank JavaScript for Google Docs, for YouTube, for Netflix. But you know, “with great power, comes great responsibility,” and as JavaScript's influence continues to grow, pushed along by a huge number of open source libraries, that responsibility doesn't just lie with one person anymore. A broader community has taken the reins. SlashData recently estimated the number of JavaScript developers at 9.7 million, and over at GitHub, JavaScript has more pull requests than any other language. Power lies with the whole world of Command Line Heroes helping JavaScript grow as we develop our tomorrow.

**26:59** - _Saron Yitbarek_

Next time, Command Line Heroes gets caught in a web of languages, and we'll explore how Perl came to thrive in a wild new frontier.

**28:04** - _Saron Yitbarek_

Finally, a listener shared our Hello World episode from last season where we also spoke about Brendan Eich and JavaScript. In that one, a guest said that during those 10 days, Brendan probably didn't get much, if any, sleep. Well, Brendan responded on Twitter to say he did indeed get sleep during that sprint. To learn even more about what happened during those 10 days, check out the Devchat podcast interview with Brendan. We'll throw a link in our show notes. I'm Saron Yitbarek. Until next time, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-3/creating-javascript

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出
[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
