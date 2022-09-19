[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 9: All Together Now)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-9/all-together-now)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 9: All Together Now
======

### Shownotes

Our show is all about heroes making great strides in technology. But in InfoSec, not every hero expects to ride off into the sunset. In our series finale, we tackle vulnerability scans, how sharing information can be a powerful tool against cyber crime, and why it’s more important than ever for cybersecurity to have more people, more eyes, and more voices, in the fight.

Wietse Venema gives us the story of SATAN, and how it didn’t destroy the world as expected. Maitreyi Sistla tells us how representation helps coders build things that work for everyone. And Mary Chaney shines a light on how hiring for a new generation can prepare us for a bold and brighter future.

### Transcript

00:19 - Saron Yitbarek

It's the final scene of an epic horror movie. After grueling days of evading this monster, sacrificing herself and saving everyone she could, our hero has finally won. She collapses, exhausted but relieved. She did it. It's over, but it's not really the end, is it? In the final, final scene, the camera turns toward the monster's lifeless face. There's a terrifying moment of expectation. And then, the monster's eyes snap open.

01:07 - Saron Yitbarek

Evil does not stay dead. There's usually a sequel, and the big bad villain comes back bigger and badder than ever. That's why the further down the horror franchise you go, the more heroes have level up and expand their team. I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat.

01:37 - Saron Yitbarek

This season, we've been going face to face with some of the biggest monsters in tech; the viruses, trojan horses, botnets, and ransomware that tried to destroy our digital lives. And we've learned that the more we move online, the larger the stakes get in these security battles.

01:57 - Saron Yitbarek

Everybody is being pulled into the fight. We're all part of the action working to build a safer future. So in this episode for our season finale, we're looking at what that call to arms really means. How do we bring more voices, more people, into security work? And why does it matter whether people with different backgrounds join that larger team? In other words, how does paying attention to every voice, even an outsider’s, actually make things better for everyone?

02:32 - Wietse Venema

SATAN was about awareness.

02:36 - Saron Yitbarek

Wietse Venema is a software engineer at Google, but back in the early 1990s, he was working on a new free tool called SATAN. That stands for Security Administrator Tool for Analyzing Networks. Nobody asked for SATAN. It wasn't a company project or a government initiative. It was just a project driven by Venema and his friend, Dan Farmer, who was then the security czar at Silicon Graphics. They had studied the new world of networked computers, and they felt they could build a tool that network needed.

03:14 - Wietse Venema

Just imagine that you have a bunch of computers that until recently were just standalone, they were not connected with each other. And certainly, computers are networked together. Having access to one computer now means that you have access to a million computers. That's a lot of computers. That's a lot more than one.

03:33 - Saron Yitbarek

Those first networked computers were mostly at universities and large companies. And every institution might have a system administrator who handled a few security issues, but protecting computers was often an afterthought. As we learned in our last episode, the first networked computers were full of security holes.

03:56 - Wietse Venema

The defenses of those computers were relatively weak.

04:01 - Saron Yitbarek

Hackers could use simple brute force attacks to guess passwords and break in. Users were naive, and sometimes, administrators weren't much better. What's worse, when one security team discovered a security flaw, they weren't sharing what they learned.

04:18 - Wietse Venema

Around that time, there was no disclosure of vulnerabilities, no process for doing that.

04:26 - Saron Yitbarek

In the early days of the internet, you might do battle with a software bug or some new virus, but then you didn't pass on your solution or even report your problem. Everybody on the planet was tackling each security problem as though it were brand new. So, how do you change that system? How do you get people sharing information about all the known security issues they've come across? Enter SATAN.

04:54 - Wietse Venema

People just didn't know that they had these problems on the network. So, the purpose was to make an inventory of all the computers on your network, and then probe with, I think, a dozen different vulnerability checks and report for all the computers, all the problems that they had.

05:12 - Saron Yitbarek

A program that scans computers on a network for known security vulnerabilities and lets you know where they are. It even had a web interface, which was pretty slick at the time. There, system administrators could automate the process, easily scanning their system for security flaws. It also told you what kind of machines were being used and how they were connected. Sounds useful, right?

05:40 - Wietse Venema

That sounded scary to some people. That idea met some resistance.

05:43 - Saron Yitbarek

For some of those universities and companies that were being scammed, this sounded like a shortcut for the bad guys who wanted to hack them. A program that points out security holes? Wouldn't that just make hacking easier? It was a serious worry. And I mean, it probably didn't help that the program was called SATAN.

06:09 - Wietse Venema

People suggested like, "You should not do this because it will be the end of the internet." We decided to proceed anyway. We thought the internet will be destroyed if we don't do something about it.

06:23 - Saron Yitbarek

Venema and Farmer believed that a secure network had to be a network where awareness of known security threats had precedent. In other words, sunlight is the best disinfectant. Think of that solo hero from our opening. "Why fight alone," these guys were saying. "Why not bring the whole team of superheroes together?" Some were still pushing back, though. Even if SATAN was a good idea, why make it available to everybody?

06:55 - Wietse Venema

Some people said, "Give it only to the good guys."

06:59 - Saron Yitbarek

"Hand SATAN over to system administrators," they said, "or maybe make it really expensive so only large companies can scan for vulnerabilities. Don't just throw this superpower out there for anyone to use." Venema made one small concession. He released SATAN to system administrators a little early. That way they could run it themselves, their clients could run it, and they could patch up their security holes before SATAN was available to potential criminals. And then, April 5th, 1995, SATAN was released. It was given away for free on 20 different sites on the internet.

07:43 - Wietse Venema

The next day there was a headline in The San Francisco Chronicle that said, "Hell did not break loose with SATAN." The world did not come to an end.

07:52 - Saron Yitbarek

Turns out, the bad guys already knew about all the vulnerabilities. It was the good guys who didn't know about them. Venema started getting emails from grateful people around the world. SATAN had found security problems they had no idea about. SATAN was making the internet a little more safe.

08:13 - Wietse Venema

What we did was we made a publicly available tool, with a nice user interface, and helped a lot of people to help themselves.

08:24 - Saron Yitbarek

SATAN was a bit like a stranger who walks around trying everyone's front doors and letting people know when they find one that isn't locked. The idea that security could come from outside your house, from someone not associated with your business, your university, your personal team; well, it was revolutionary.

08:44 - Wietse Venema

In 1995, you could get fired for running SATAN. In 1997, you could be fired for not running SATAN. So, it was basically due diligence. You are supposed to scan your networks proactively so that you find your holes before the bad guy finds it.

09:04 - Saron Yitbarek

After SATAN, system administrators realized they had to branch out. For starters, they had to look at their machines from the intruder’s point of view. But they also had to listen to each other, share insights, communicate about new discoveries. Only then would the internet begin to be safe.

09:24 - Saron Yitbarek

As for Venema and Farmer, they were at first considered outlaws for what they've done. But today, SATAN-style programs are standard. They've vindicated, and security teams are learning every day that you want to know what other people know. Nobody should fight the monster alone.

09:51 - Saron Yitbarek

Sharing bug reports isn't enough, of course. A truly leveled-up security team has to be open to whole new perspectives. That means your team of heroes better not all come from the same place. Representation matters.

10:07 - Maitreyi Sistla

The cybersecurity industry suffers from a diversity problem, generally. This has been something that folks have known for years.

10:15 - Saron Yitbarek

Maitreyi Sistla is the Deputy Director of the Aspen Institute's Tech Policy Hub, and her group recently published a report on the state of diversity in cybersecurity.

10:28 - Maitreyi Sistla

Black cyber professionals are only about 10% of all cybersecurity workers, and Hispanic workers are only about 4% of workers. Women make up less than a quarter of...

10:40 - Saron Yitbarek

The numbers aren't good, and Sistla says the monocultures that result, that lack of inclusion on InfoSec teams, looks to her like missed opportunities.

10:52 - Maitreyi Sistla

Diversity is a huge issue in cybersecurity, and I would say in most fields, because if you don't have a diverse workforce, you're not going to be building good products and you're not going to be creating policy that's effective for all people.

11:06 - Saron Yitbarek

Research shows that companies with more women and people of color are more innovative. Why would security teams want to limit the kinds of experience and outlooks that they utilize?

11:18 - Maitreyi Sistla

We had a fellow who was really interested in working on cybersecurity with elderly communities because thousands of older Americans are scammed every year online, but they don't submit this information to law enforcement agencies. And our fellow, Ginny Fahs, was really curious to understand why that was. And she held a series of design thinking workshop with older Americans.

11:40 - Maitreyi Sistla

When she did that, she found that a lot of the existing avenues for reporting these scams didn't design for older adults in mind. Their text was too small for many of these individuals to read, these forms would time out before folks were able to input all of their answers, they weren't necessarily color blind or disability friendly. And all of these design decisions that were made, likely by people who weren't older, affected these older Americans' ability to report cyber crime incidents to law enforcement agencies.

12:11 - Saron Yitbarek

I mean, that's just one example, right? There are 100 ways that a new perspective could improve the work that security teams are trying to do.

12:22 - Saron Yitbarek

One of the recurring insights this season has been that security is really everybody's job, and that includes all the people who maybe aren't your typical tech employee.

12:33 - Maitreyi Sistla

If you don't have folks in the room who represent a diversity of perspectives, you're not going to build things that work for all people.

12:40 - Saron Yitbarek

Building teams that include underrepresented backgrounds can help us design for everyone. It can even help us foresee different kinds of criminal behavior.

12:50 - Maitreyi Sistla

One of the greatest assets that I think the United States and Canada also have is that we're diverse countries, and we have folks who come from around the world who can really understand the cultural context of everywhere, which is incredible, and can really help build better policy and help foresee perhaps what foreign adversaries might be doing.

13:12 - Saron Yitbarek

You might have heard, "Given enough eyes, all bugs are shallow." Named after Linus Torvalds, it's called Linus's Law. I think you could say something similar about security issues. Given enough eyes, all security flaws are shallow. So if diverse security teams are stronger, then what's keeping a diverse group of candidates from joining those teams? Inherent biases from those who hire play a part. And there are pipeline issues, too. STEM degree graduates are disproportionately white and male. And for individuals who do have STEM degrees, they often don't get the helping hand, the mentorship that turns a worker into a leader.

13:56 - Mary Chaney

I was always the highest ranking minority female in any organization that I've worked for. Still am.

14:03 - Saron Yitbarek

Mary Chaney is the Chairwoman, CEO, and President of a group called Minorities in Cybersecurity. MIC, for short. A couple years back in 2019, she was one of those rare mentors for women and people of color. She was helping out a few dozen people and noticed they were all hampered in their careers by cultural roadblocks. That's why she founded Minorities in Cybersecurity, to help lift up those diverse candidates who kept getting overlooked. "Making real change, getting more kinds of people at the table, is never going to happen," she says, "Unless we change the way we recruit."

14:45 - Mary Chaney

I don't think it's a talent shortage. We don't have enough people interested. But guess what? We have a whole lot of people out there that could be if we now start to market it right.

14:57 - Saron Yitbarek

That means updating the image of an ideal candidate. Does your job description actually fit the job you're trying to fill? Or is it describing an old idea about what an IT worker's resume should look like? The security landscape is constantly evolving. So to hire an effective team, we may need our hiring practices to evolve, too. For example, we could be thinking about what skills a company can give an employee, rather than what skills employees should come with.

15:28 - Mary Chaney

I tell organizations, "You can't go to market and buy what you want all the time. You actually have to invest some time into building the type of talent that you're looking for."

15:41 - Saron Yitbarek

Building diverse teams isn't a simple decision. It's a project that demands real work. In Chaney's case, she's lifting up tomorrow's leaders in a very direct way. MIC Lead is a new program focused on leadership development.

15:56 - Mary Chaney

It's simple math to me. If I get more people that are actually promoted into management-level roles, then you get more, by default, hopefully you get more diverse teams, because a diverse hiring manager is more likely to hire other diverse people than it is the traditional way.

16:19 - Saron Yitbarek

It's the first few cracks in that ceiling that are the most difficult. But cultural shifts have a way of snowballing.

16:28 - Mary Chaney

I've had several of the folks in the MIC community opportunities and accept jobs with our corporate members. I'm excited about the opportunity to provide not only a safe community, but a place that someone can go to get the soft skills training. I hate to say soft skills, but that's really what it is.

16:49 - Mary Chaney

A lot of times with women and minorities, we go so hard and fast with certifications and education. "Oh, I need this," or, "I need that, and that's going to open up doors for me," not understanding yourself and the type of leader you are, how to identify certain situations, how to deal with conflict resolution. Those are the things that will take you further than your certification, especially if you want to be a people leader.

17:18 - Saron Yitbarek

Maitreyi Sistla notes there's good news for mentors like Chaney. Cybersecurity is a booming field.

17:25 - Maitreyi Sistla

There's something like half a million open cybersecurity jobs in the U.S. right now, and almost 3 million worldwide. There are the jobs there. This is not an issue of, "There aren't jobs."

17:36 - Saron Yitbarek

That means there's a fantastic opportunity right now for security teams to hire up a new diverse generation of employees, and that would have the knock on effect of making all our lives safer.

17:49 - Saron Yitbarek

Change is happening. The trick is turning these ideas into real concrete improvements to hiring practices and leadership training. If we can get that done, the result is a broader collective experience, a leveling up of our abilities, a bigger team of heroes. And that makes the world safer, more secure for everybody.

18:19 - Saron Yitbarek

It takes every kind of Command Line Hero fighting as a team to combat the security crises of our time. And I think celebrating a range of voices, diverse voices, is a fitting way to say bye for now. After 67 episodes running over nine seasons, Command Line Heroes is taking a break. It's been such an honor over these last five years to tell the stories of the community we love. And we got some amazing love in return, millions of downloads, and even a few nods at award ceremonies. But most of all, we've been grateful for you; the Command Line Heroes community that came along for this incredible ride.

19:07 - Saron Yitbarek

But listen, there are more stories to tell. Do stay subscribed, because while this may be our last in the series of seasons, I want you to know the folks over at Red Hat have a lot more to share. Stay tuned. For now though, you can check out the podcast Compiler, where tech experts help to demystify tricky topics.

19:30 - Saron Yitbarek

And please stay in touch with me. You can follow me on Twitter @SaronYitbarek, and hear from me in conversation with other programmers on my podcast, Code Newbie. Meanwhile, you can explore the Command Line Heroes archive wherever you get your podcasts. Like I mentioned, we've done 67 episodes. You may have missed one.

19:52 - Saron Yitbarek

And what did all those episodes, including somewhere around 300 interviews, amount to? I think if there's one single takeaway from this show, it's this: the future is brighter when we work together. From our roots in the world of open source, to our commitment to diversity in education, we believe the future of tech belongs to everybody. More than that, it's going to be built by everybody too. I'm Saron Yitbarek, and this is it for Command Line Heroes... for now. An original podcast from Red Hat.

20:34 - Saron Yitbarek

Before we go, I wanted to share what have been some highlights these past nine seasons. A favorite part of hosting the show for me has been the editorial meetings. Before each season, our team sits in a room and dreams about all the possibilities. Our ideas reach far and wide. Our pitches cross countries and industries. Our stories are deep and personal.

21:02 - Saron Yitbarek

But what I love most about these meetings isn't just the energy in the room. It's not just the excitement over a shiny new season. It's the fact that the season could truly be about almost anything, because technology and Command Line Heroes are everywhere.

21:20 - Saron Yitbarek

I love that we've been able to talk about programming languages, prosthetics, the invention of GPS, gaming, floppy discs, even robots for senior citizens. Tech is such a ubiquitous part of our world that there's so much to explore and unpack. A few episodes that stand out for me are Creating JavaScript.

21:41 - Speaker 1

The key to Brendan Ike is that Brendan Ike, when he built JavaScript, had become a language junkie.

21:49 - Saron Yitbarek

Season three, episode three. As far as stories go, I'm a sucker for the classics. And the story of JavaScript being created in 10 days is one that just never gets old. Another is Open Source Hardware: Makers Unite.

22:05 - Speaker 2

The group was really almost like a group of misfits from the media lab, where it was our team...

22:11 - Saron Yitbarek

Season four, episode six. Hardware isn't my world, but I'm curious about it, and this one is all about the maker movement led by some pretty badass women. Makers are just another type of Command Line Hero after all, with a different set of tools. I also love our Robot as Body episode, featuring Tilly Lockey.

22:32 - Tilly Lockey

My favorite part about the hands is how they look and how actually personable and customizable they are. I switch up all the…\[clip fades out\]

22:41 - Saron Yitbarek

Season eight, episode five. We talked about her personal experience with robotic limbs, and I got a peek into the future of this in industry and the incredible tech that's being worked on now. Truly inspiring stuff.

22:55 - Saron Yitbarek

We've covered a lot over the years. And behind every episode, there were dozens of people working hard to bring these stories to life, and to you. It's been such a pleasure to share it all. Until we meet again, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-9/all-together-now

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
