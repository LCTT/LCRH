[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 7: A Language for the Web)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-7/html)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 7: A Language for the Web
======
**00:04** - _Saron Yitbarek_

In Medieval Europe, scholars had to converse in... Latin. For centuries the British monarchs spoke... French. And today the business language of India is... English. Official languages have the power to unify people, but they don't always reflect everybody's lived experience. And when we look at not just a country, but a world wide web, that struggle to impose a standard language can grow to epic proportions. This season, we've been exploring a pivotal year in the history of tech—1995.

**00:51** - _Saron Yitbarek_

We already heard how it launched the dot-com bubble, and how it led to the privatization of the internet. But 1995 was also the year when HTML, the language of the web, was standardized. HTML's rapid evolution was crucial to the web's development and growth, but some basic assumptions about who a coder is and whose language mattered were locked into place at the same time. And once we began digging into HTML's past, we realized: a language can become a standard, but it can never be neutral. I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat.

**01:40** - _Saron Yitbarek_

Today, hypertext markup language, HTML, is the mother tongue of the web. The standard markup language for pretty much everything you see in a browser, but right there in its name is a much older concept that predates HTML and that's the idea of hypertext. Back in 1945, the engineer Vannevar Bush wrote an article for Life magazine, where he imagined a futuristic machine. This machine would allow you to display information on a screen, and that information could be retrieved from a microfiche storage device that sat under the desk. Bush was thinking this up decades before anything like the world wide web, but what he proposed was the start of something big. Belinda Barnet, Senior Lecturer in Media and Communications at Swinburne University of Technology explains.

**02:38** - _Belinda Barnet_

What was most interesting is that you could create links between pieces of information from different articles in order to create what he called a trail through information. And so this was really the first instance of a technical device that would create hyperlinks.

**03:01** - _Saron Yitbarek_

For years, Bush worked as the Head of the U.S. Office of Scientific Research and Development. So even when he was delving into a bit of fantasy, he was still being influenced by academic practices—that classic rule of academia, where one person's work is constantly linked to other authorities. Bush imagined a machine that would make those links come to life, a machine that would work like an academic's mind, connecting to every other mind it had ever encountered. He called this imaginary machine, the “Memex”—combining together the words, memory and extender and that's what it was: an extension of human memory, an extension of human thought.

**03:46** - _Saron Yitbarek_

Bush's Memex inspired generations of computer scientists to pursue that Holy Grail of preserved and interlinked knowledge. But yeah, he still lived in the 1940s. He'd have to wait another decade until the Memex started coming to life. In the 1950s, Douglas Engelbart, who we've talked about on this podcast before was inspired to build a system of links, a living network of linked information.

**04:16** - _Belinda Barnet_

And he brought together this idea of using a computer screen to display knowledge and information and link it together in the manner of the Vannevar Bush's trails and create a system, which he eventually got funding for at the Stanford Research Institute, that was the first hypertext system.

**04:40** - _Saron Yitbarek_

Of course, he didn't call it hypertext yet. The word itself was coined a decade later in the 1960s by philosopher Ted Nelson. Though, as Barnet tells it, Nelson's version differed from Engelbart's in important ways.

**04:58** - _Belinda Barnet_

Ted wanted something far more freeform, more like, as he put it thought itself, which kind of meanders between things and there's no restrictions to what you can connect to or at what level you can connect it. He had also imagined that hyperlinks would not be one-way, but that they would be two-way. But this basic concept of connecting together different pieces of information associatively and forming trails through the information was certainly evident in Ted's thinking in the 60s.

**05:46** - _Saron Yitbarek_

That distinction between one-way links and two-way links has pretty profound consequences. A web composed of two-way links would arguably create an entirely different online experience and at that point in history, there was no obvious form that hypertext had to take. Our linked future was still being imagined. Douglas Engelbart's hypertext system, which was called the online system, was not especially user-friendly. Only the truly technical were able to use it. And for years, most early hypertext attempts had the same roadblock, but then along came a computer scientist named Tim Berners-Lee. While working as a contractor for CERN in 1980, he created a document-sharing program called Enquire. And 9 years after that, he wrote a memo laying out a plan to use hypertext to take his work onto the global stage. The result? A Hypertext Markup Language was unlike any hypertext system that had yet been developed.

**06:55** - _Tim Berners-Lee_

Designing HTML was really, really easy because I was the only one doing it.

**07:00** - _Saron Yitbarek_

Berners-Lee had delivered something deceptively simple, something democratic, something that took hypertext across all borders.

**07:11** - _Belinda Barnet_

What Berners-Lee did is to realize that the real power of the link is to link not just between documents on your own computer, but to link between countries and to all kinds of different places outside of your own machine and your own unique operating environment.

**07:35** - _Saron Yitbarek_

That vision of a system to link computers and share files across huge distances brought us closer than ever to Vannevar Bush's idea of a Memex. What had begun as a bit of abstract philosophy had suddenly transformed into a reality. We asked Jeff Veen who was part of the founding web team at Wired magazine to talk us through the 3 ingredients that made HTML an ideal language for the web. Today, Veen is a partner at VC Fund True Ventures. First, there was the format's utter simplicity.

**08:13** - _Jeff Veen_

So you would essentially do a lowest common denominator for all kinds of documents because back then every word processor had proprietary format. We didn't all just use Word docs. There was Word Perfect and, you know, there were so many other types of files that it was impossible to share files with each other. So he made it a very, very simple file format.

**08:33** - _Saron Yitbarek_

Next ingredient, a way to transport those simple files over the web.

**08:38** - _Jeff Veen_

So you still see that when you type in a web address or something, and you see that HTTP, that hypertext transport protocol. And that was again, very, very simple, but easy enough that anybody could quickly make a browser and make a web server and so it caught on really quickly as being very simple.

**08:55** - _Saron Yitbarek_

And the third and final ingredient, Berners-Lee created URLs.

**09:00** - _Jeff Veen_

Uniform resource locators, right? And that was a standard address so you could find things. Because again, back then there were all kinds of different systems. There was FTP for file transferring, Gopher was a rudimentary information system and you could Telnet to other servers, like, there are all of these different protocols and places where servers would be.

**09:22** - _Saron Yitbarek_

With those 3 ingredients, a simple file format, simple transport protocol, and URLs, Tim Berners-Lee had created a framework so easy, so infinitely adaptable, it seemed to appeal to everybody that was racing onto the world wide web. He had taken the established idea of hypertext and made it global for the first time, allowing us to not just link between our own set of documents, but to the world's. And yet the simplicity that surrounded HTML would turn out to be a double-edged sword.

**10:04** - _Jeff Veen_

The problem or benefit depending on your frame of reference is that it was so simple that it didn't remotely capture all the things that everybody was used to doing on their computers.

**10:17** - _Saron Yitbarek_

If you wanted to build elaborate tables, if you wanted to create elegant layouts, if you wanted the advanced features that previous hypertext systems had offered, you weren't going to find any of that with your basic HTML.

**10:30** - _Jeff Veen_

It didn't have any of it. So many people I think discounted like, oh, this stuff is way too simple. It'll never catch on.

**10:36** - _Saron Yitbarek_

Except those people were wrong. In fact, it was exactly the paired down simplicity that made HTML incredibly popular. In the mid-90s it didn't even have 20 tags, 20 things you could do. A few headers, some citations and block quotes it was pretty bare bones, but that meant the barrier to entry was super low. You could easily learn HTML in an afternoon and everybody did. That's why a tech thriller movie like _The Net_ made sense in 1995.

**11:12** - _Saron Yitbarek_

Hacking into the internet guts felt like something that, sure, Sandra Bullock could probably pull off. Another obstacle that turned out to be a mirage was the question of broken links. In the past, people had fussed about the fact that moving a document meant you have to alert everyone who linked to it, get them to update their link or else the connection will be broken. Maintaining all those links seemed incredibly onerous, but Berners-Lee decided not to worry about the broken link problem at all. He gamed it out: a few broken links were the cost of simplicity and easy connections.

**11:51** - _Jeff Veen_

Look, I'll just make my stuff, and you make your stuff, and we'll link them together and if they move, it breaks, or, you know... and things like that helped with the popularity at the growth of the web.

**12:01** - _Saron Yitbarek_

As the web grew, fueled by the rapid adoption of HTML, that pioneering attitude—if it breaks, it breaks—was going to spread. Soon, people were sprucing HTML up adding their own tags without asking anybody's permission. And everybody had their own idea of how it should evolve. A young Marc Andreessen was a classic example. He was working on the Netscape browser and decided to give it an image tag. The authorities back at CERN thought they'd instigate a thoughtful back and forth to determine how an image tag might work. Were we talking about embedded objects of any kind? Maybe just icons? But Andreessen wrote back to inform those so-called authorities: "Yeah. I already made the image tag. You guys can make your own if you want." And things just got more tangled from there.

**12:54** - _Jeff Veen_

It was sort of the “wild west” for a number of years, especially as Silicon Valley sort-of woke up to, like okay, this web thing is huge, and there is the potential for very big businesses to be created here.

**13:08** - _Saron Yitbarek_

If you're a long-time listener of this podcast, you've probably heard me talk about the browser wars. Starting in the late 1990s web browsers, like Microsoft's Internet Explorer and Netscape's Navigator, and a whole bunch of others began competing for dominance. They all wanted to be the world's portal to the world wide web. To distinguish themselves, everybody was doing what Marc Andreessen had done with this image tag. They were just creating their own thing, modifying HTML however they wanted. The language and the experience of coding for the web was beginning to branch.

**13:46** - _Jeff Veen_

I would say that standardization was a necessity.

**13:49** - _Saron Yitbarek_

Gavin Nicol is a technology evangelist and CTO at Context Labs. He was in the field at the time and remembers Tim Berners-Lee's first proposals for the world wide web. He pointed out that it wasn't so much all those new tags that created a problem. It was the fact that nobody was making the tags cohesive.

**14:11** - _Gavin Nicol_

Okay. Hey, anybody can create a tag, but the question becomes, if you have a tag, how do you display it? And how do you hook up an event handler to that tag? So to a certain degree, even though, there were some issues about, okay, well, who gets to define the common set of tags in the big scheme of things? That was probably less interesting than trying to decide how to interpret those tags.

**14:34** - _Saron Yitbarek_

All those different browser companies rushing to capitalize on the brand new web, were throwing any kind of tag they wanted into the mix, but they weren't adhering to any kind of standard. If the web kept going down that road, it would soon become so disjointed there'd be siloed experiences in each proprietary browser. In the same way that engineering task forces created SMTP to standardize email or FTP to standardized file transfers, there needed to be a standard for how HTML would work.

**15:07** - _Gavin Nicol_

It was absolutely crucial to the adoption of HTML. It would have happened with or without the W3C, but it was crucial.

**15:14** - _Saron Yitbarek_

The W3C that Nicol just mentioned is the World Wide Web Consortium founded in 1994. The consortium took it upon themselves to bring a little order to the growing chaos of the browser wars. The W3C will provide guidance and standardization for HTML so that whatever tags anybody might create, they would all be interoperable across any browser. This was the task, standardization, that would allow the web's potential to be fully realized. Standardization would allow a truly global web experience.

**15:51** - _Gavin Nicol_

To be honest, the W3C was a great convening body and a great, kind-of-like, independent third party to get everybody who had strong commercial interest to sit down and talk about interoperability.

**16:04** - _Saron Yitbarek_

So in 1995, HTML was elevated from a bare set of tags to HTML 2.0. In its new life, HTML became aligned with SGML, the standard generalized markup language, and standardization was brought to its processing model, to its data representation, and to the handling of characters and coding.

**16:27** - _Gavin Nicol_

So was the first rigorous standard and that was key for interoperability.

**16:35** - _Saron Yitbarek_

HTML 2.0, the first standardized version, was released in 1995. Problem solved, right? Everyone in the global internet community could look forward to a happy interoperable future. Not quite. Think for a moment about the global tech reality that people lived with in 1995. Things may have been nicely ordered from the perspective of Silicon Valley, or from the perspective of big shots at the World Wide Web Consortium, but that's not the whole world. It was far from including everybody.

**17:13** - _Saron Yitbarek_

At that point, much of Asia and Sub-Saharan Africa were still offline. The idea of a global village was introduced by Marshall McLuhan in the 1960s, but decades later, much of the world remained disconnected. And that meant they didn't have a seat at the table. They weren't part of any standardization process. The new standardized HTML was a gateway to web development, but a gateway created by English speakers with all their biases along for the ride. The only way to read HTML was from left-to-right and the only way to write it was in English. A standardization may have been inevitable, but it also created exclusions. It ran the risk of turning non-English speakers into second class citizens of the web. And that was not inevitable, that was something people could fight to fix.

**18:15** - _Gretchen McCulloch_

One of the big things that having programming languages be based on English does—is it creates this barrier for access to the field of coding.

**18:27** - _Saron Yitbarek_

Gretchen McCulloch is an internet linguist and the author of _Because Internet: Understanding the New Rules of Language._ We asked her to walk us through some of the ways English programming languages and markup languages give one part of the population an advantage. And it goes way beyond being able to read commands.

**18:48** - _Gretchen McCulloch_

If you can't read what people have put on Stack Exchange (an online community for developers), or it takes you twice as long to read because you don't speak the language, then that's also a significant barrier to using a programming language. It's not just the technical words used in the code, it's also reading the help documentation, reading the Q&As, reading all of the meta information about how to use that code, the libraries, all of this additional stuff, that all exists in English.

**19:15** - _Saron Yitbarek_

After 1995, a non-English coder working on the web would have been guaranteed to run into those barriers everywhere, standardization guaranteed it. Those of us in the English-speaking world often forget about these hurdles. We think we're on an even playing field coding alongside our peers in China or India or Germany. But if you're a coder and your first language is English, just ask yourself, what would your career look like if the code you were writing and all the supporting documents and communities you rely on, if all of that were in Chinese or Swahili, would your career be the same? Would your ambitions? Gavin Nicol was inspired to make HTML work for everybody. In the 1990s, he was living in Japan and he noticed firsthand how difficult it was for non-English speakers to code for the web.

**20:11** - _Gavin Nicol_

It was a mess to be frank.

**20:13** - _Saron Yitbarek_

Nicol was the one who looked at HTML, which at the time had no real character-processing model, and decided to find a way to let everybody use it. His solution was to use Unicode, a standard that handles text in almost all the world's languages. By adopting Unicode, as his character set, he managed to establish a formal model for the internationalization of HTML.

**20:39** - _Gavin Nicol_

Partially it was practical, but also there was a mission aspect to it as well. You know, the practicality came from the fact that I was working at NIC while living in Japan. I was like, "Hey, listen, you know, I would love to be part of this global conversation." But then also I still believe there's an under-representation of non-Latin voices in the global commentary. So I really wanted to accelerate the pace of that.

**21:05** - _Saron Yitbarek_

Despite the great work that the W3C folks had done in 1995, it was up to people like Nicol to take the HTML standard and open it up to all the world's languages.

**21:17** - _Gavin Nicol_

And it became kind-of a mission for me to make that easy for non-native speakers, because I firmly believe that if you force everyone to speak in English, you force everyone to sort-of think in English and that's a very sad thing, because you end up losing the culture that is associated with the language.

**21:36** - _Saron Yitbarek_

Nicol believes people must be allowed to communicate and work in their own language. To make the web an English-only zone would mean cutting off part of our shared humanity.

**21:47** - _Gavin Nicol_

There's a thing called Conway's law, and it's, kind-of-like, systems tend to evolve to represent the organizational structures that created them.

**21:57** - _Saron Yitbarek_

To me Conway's law is a kind-of warning. Make sure the organizational structures represent all of us or else don't be surprised when the systems that evolve lock some people out. 1995 was a quarter-century ago and HTML has evolved to HTML5 today, but the work is far from finished. Look around at the coding landscape and English is still taking up a lot of the oxygen. Sometimes it can feel like a forgone conclusion. Pascal for example, was created by a Swedish \[correction: Swiss\] computer scientist who made it in English to appeal to the rest of the world. Python, same thing, written in English by a creator in the Netherlands and Ruby uses English too, even though it was made in Japan. Here's Gretchen McCulloch again.

**22:55** - _Gretchen McCulloch_

So if you're a non-native English speaker and you're thinking, oh, I want my programming language to be adopted by the most number of people. You might say, well, I know that people are used to coding in English-based things. I know that I've gotten used to coding in English-based programming languages, so I'm also going to create my programming language that has English-based keywords, because that's what people are used to.

**23:15** - _Saron Yitbarek_

It's a feedback loop and not a great one.

**23:18** - _Gretchen McCulloch_

One of the things that I think we could do as a short-term way of calling attention to the problem is when we talk about programming languages, where the keywords are based on English, we could call them that. The first website wasn't written in HTML, it was written in English HTML, which opens up the possibility of what would Spanish HTML look like? What would Russian HTML look like?

**23:44** - _Saron Yitbarek_

What does your HTML look like? How will you get to program on the web, and how will you make sure everyone else can do the same? I mentioned at the top of this episode that, in Medieval Europe, reading and writing was working in Latin, even if you didn't speak Latin every day. Only Latin was allowed as a tool for accessing the technology of writing, the technology of the printing press. Today, we look back on that and it makes little sense, but how different are we really? Isn't it just as ridiculous to expect everyone to code in English? And by the way, all you English speaking coders out there one day the shoe could be on the other foot.

**24:32** - _Gretchen McCulloch_

I don't think it's likely in the short term for a programming language based on language other than English to become dominant, but it's entirely possible in the long term because we know that Latin didn't last forever as the lingua franca.

**24:52** - _Saron Yitbarek_

1995 was the year that HTML became standardized, but that moment in tech history sparked a decade-long discussion that's continuing to this day. We're still finding ways to make the web language a platform for everybody. And this matters because we have no way of knowing what people from different backgrounds, different languages, will build; what apps they'll design; what code they might write once they're given the chance to work with their own voice.

**25:23** - _Saron Yitbarek_

We just might be amazed by our own diversity and maybe that is the standard we should all be reaching for. Next time, we're diving into another of 1995’s biggest transformations, the fantastic emergence of web designers. Until then find bonus material about HTML and all our 1995 stories over at redhat.com/commandlineheroes. I'm Saron Yitbarek and this is Command Line Heroes, an original podcast from Red Hat. Keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-7/html

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者ID](https://github.com/译者ID)
校对：[校对者ID](https://github.com/校对者ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
