[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 9: Ruthless Ransomers)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-9/ransomware)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 9: Ruthless Ransomers
======

### Shownotes

It’s a strange situation when someone can hold something hostage from halfway around the world. It’s tragic when your own pictures and files are remotely encrypted. But when it’s a hospital’s system? Ransomware becomes a problem about life or death.

Eddy Willems recounts his involvement in defeating an early ransomware attack that targeted AIDS researchers. At the time, there was a way to discover the encryption key. But as Moti Yung warned, asymmetric encryption would change everything. In the years since, ransomware attacks have become much more popular—thanks in part to the rise of cryptocurrencies. While criminals think it’s an anonymous way to collect payment, Sheila Warren tells us that the opposite is actually true.

### Transcript

00:02 - Male Voice Actor

Okay. Phone, wallet, keys.

00:06 - Saron Yitbarek

Elias is having a perfectly ordinary morning. He showered, threw back a cup of coffee, and now he's heading out the front door on his way to work.

00:16 - Male Voice Actor

What the?

00:20 - Saron Yitbarek

Except when he opens that door, there's a second door made of steel behind it.

00:25 - Male Voice Actor

Is this locked? Some kind of prank? Hey, what is this? What's going on?

00:34 - Saron Yitbarek

He starts racing around the house. The back door is the same. It's blocked. He runs to the windows. They're covered with more slabs of steel. Every exit has been sealed off. Elias is trapped inside his own house and then water begins to seep in rising from the basement.

01:00 - Male Voice Actor

Hello.

01:02 - Female Voice Actor

Hi there. Feeling cozy?

01:06 - Male Voice Actor

Did you do this? Are you controlling the water? You need to let me out of here.

01:12 - Female Voice Actor

Oh, I will. I've got the key right here in my hand and I'll let you out for a price.

01:25 - Saron Yitbarek

Now, I want you to imagine a slightly less scary scenario, less creepy, but much more likely to happen. Instead of someone being locked inside their home, imagine crucial files are locked inside your computer. They've been encrypted and you can't read them. The key that's being offered up for a price is a decryption key. If you want to set your computer free, you'll have to pay the ransom. I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. This season we're exploring horror stories from the world of digital security.

02:08 - Saron Yitbarek

This time, it's ransomware, those strings of malware that invade your computer, encrypt your files against your will, and keep things locked up until you pay. Encryption technologies have been keeping information safe for centuries. Even in ancient Sparta, there was a tool called a scytale for sending secret messages during wars, and levels of encryption have only been getting more and more complex since then. But ransomware turns encryption around, puts it to work for the bad guys. A whole new world of trouble arrived once criminals realized encryption tech could be used to put pressure on their victims.

02:56 - Eddy Willems

Should I tell you the real story about how I was confronted with the first ransomware?

03:03 - Saron Yitbarek

Eddy Willems is a security evangelist at G Data Cyber Defense. But back in the winter of 1989, he was working as a technology consultant for an insurance company in Belgium.

03:16 - Eddy Willems

I still remember it on a Monday morning, my manager came to me and he asked me, "Eddy, can you have a look at this floppy?"

03:23 - Saron Yitbarek

The floppy disc was labeled AIDS Information and Eddy's boss thought it might have something important on it. The AIDS pandemic was sweeping the globe and insurance companies needed to understand this devastating disease.

03:39 - Eddy Willems

I thought, okay, I'm just putting it in my computer and want to see what it is going to do. So I started up the program and actually it was asking me a couple of questions about AIDS. And afterwards, it was printing out some statistical information about the AIDS disease.

03:57 - Saron Yitbarek

So it seemed legit, not especially interesting though. Willems pulled out the disc and told his boss it wasn't worth much. That would've been the end of it, but.

04:09 - Eddy Willems

Then on a Wednesday morning, I turned on my computer again and there was a bizarre screen popping up and the only thing I could do actually was clicking on the return key, which I did. And at that moment, I got another screen. This screen was in red and it was actually asking me to send $189 in an envelope to a PO box in Panama. So I thought, what is this? And I couldn't do anything more because, it was really at that moment, I was blocked. So without knowing, I was actually confronted at that moment with the very, very first ransomware.

04:51 - Saron Yitbarek

The proposition was simple. To decrypt his computer's files, Willems should send his money to the PO box in Panama, then a code would be sent back which will be punched in to decrypt the files to unblock him. This AIDS information malware was distributed on more than 20,000 floppy discs, just like the one Eddy Willems received. Some people were handed the disc at an AIDS conference. Others were sent the disc because they were on a subscriber list for PC World Magazine. People in 90 different countries received that ransomware demand and many gave in.

05:27 - Saron Yitbarek

Many were working in the field of AIDs research or related fields. They would've felt that retrieving information on their computers might be a question of life and death. Of course, the owner of that PO box in Panama was counting on that sense of urgency. That's why he targeted AIDS researchers.

05:47 - Eddy Willems

But you know at that moment, we didn't know that it was ransomware. Even the term ransomware was not described. This was a pioneering attack.

05:56 - Saron Yitbarek

Ground zero for a new security threat and something we've heard more than once this season is that new kinds of malware are often the most dangerous. When we're naive about a certain kind of attack, a certain vector of attack, we're especially vulnerable. And that was the case in 1989 when all these labs and searchers pop the AIDS information floppy into their computers.

06:21 - Eddy Willems

And when it destroyed actually a lot of AIDS research because it was sent out to a lot of people and it was sent out to a lot of institutes researching AIDS information, the cost of that it's enormous, of course. It would have gone in millions, maybe billions. It's very difficult to say.

06:40 - Saron Yitbarek

Willems, though, wasn't about to give in. He didn't send the money. Instead, he wanted to beat the encryption. He started by booting up his computer using a Norton utility program.

06:52 - Eddy Willems

And I immediately saw that there was something wrong on my hard disk.

06:56 - Saron Yitbarek

The names of the directories had been changed.

06:59 - Eddy Willems

The letters were you know.

07:01 - Saron Yitbarek

They were changed into numbers. Willems is not a cryptologist, but it didn't take him long to break the code. Back then, a computer just didn't have a lot of directories, remember, maybe 100 in Willems’ case. So he knew roughly what the directories should have looked like. He could piece together that certain numbers were replacing certain letters.

07:22 - Eddy Willems

At that moment, I found something like a solution. I got the opportunity to return back all the hidden directories into unhidden. And what I also did, I wrote a small script actually to change the figures into letters.

07:43 - Saron Yitbarek

Willems had unlocked his own computer, saved the day, but not everyone had his know-how.

07:49 - Eddy Willems

It was on a Friday that I actually saw on the news, the local news over here, I saw that there was millions of problems. A lot of research was lost and there was no solution.

08:05 - Saron Yitbarek

Willems had a solution and he didn't keep it to himself. He called up the TV station, told him he would share his fix. It led to his first TV interview and the world's first ransomware solution. At the time, nobody knew that a new kind of malware had been unleashed. They didn't know that a quarter century later ransomware would become a multi-billion dollar industry. They might have thought it was a fluke, a bit of chaos created by a lone actor.

08:36 - Eddy Willems

The floppy itself was created by a biologist Dr. Joseph L. Popp actually, like the guy from The States. The strange thing of course as well, the guy was arrested in the Netherlands actually during his transfer to another airplane. And he was delivered back to the US, but he was declared mentally unfit to stand the trials.

08:59 - Saron Yitbarek

Dr. Popp's big mistake was that Panama PO box where he asked victims to send the ransom. Authorities were able to trace the box back to him. The AIDS research ransomware was a warning shot, an example of how encryption could be used to capture and freeze our digital property. Willems could solve this encryption problem in about 15 minutes back in 1989, but the encryption game was destined to grow infinitely more complex. And that meant ransomware attacks were going to get much, much more dangerous.

09:42 - Moti Yung

Every technology has dual use, potentially abuse. Look at nuclear energy, which can be used for energy production, but can also be used for the atom bomb.

09:57 - Saron Yitbarek

Moti Yung is a professor at Columbia and the specialist at Google, where he works on security and cryptography. When he was in graduate school in the early 1980s, Yung wrote an essay predicting that the future of computing was network computers, but he didn't stop there. He realized.

10:16 - Moti Yung

They need security on the lines, and this is cryptography.

10:20 - Saron Yitbarek

The kind of encryption that computers were using when that AIDS research attack happened in 1989 is a simple approach. It's called symmetric encryption. And for a long time, it was the standard.

10:32 - Moti Yung

Symmetric encryption is the way cryptography has been done for two millennia. You have a key, the key is shared between the sender and the receiver in a symmetric way. They can encrypt with the key and decrypt with the key.

10:53 - Saron Yitbarek

Symmetric encryption though becomes less and less viable when things start to scale.

10:59 - Moti Yung

If you are the general in the army and you want five of your subordinates to send you messages, you have to give them the copy of the key. Then if one of them is captured by the enemy, the key is gone, the entire secure communication to the headquarters where the general is, is gone. And this is the danger and the same thing applied to the AIDS virus. It has the encryption key in it in order to perform the encryption. So if somebody grab it and learn the key, it can decrypt the damage that virus perform.

11:37 - Saron Yitbarek

Because the AIDS information ransomware attack used symmetric encryption, Eddy Willems was able to share his solution with everybody that had been locked out. Even a more difficult example of symmetric encryption will be crackable by a powerful computer. So whoever's doing the encrypting, good guys are bad guys, they needed to level up their game in the computer age. Encryption had to evolve and that evolution came in the form of asymmetric encryption. With asymmetric encryption, you have both a public key and a private key.

12:14 - Saron Yitbarek

You have to use both keys to complete a transfer of data. The public key might just be 128 bits. The private key is much larger, maybe thousands of bits. The interaction between these two keys is a bit complicated, but the end result is simple. You can't just decrypt this message by throwing a bit of computing power at it. Yung tells us that depending on the length of a key and the processing power of the computer trying to decrypt it, a modern day brute force attack might still take more than five years to break through.

12:49 - Saron Yitbarek

So five years to break my password. That works, right? Well, not entirely. Remember that with cryptography, you always have to flip things around, look at it from the perspective of a criminal. If it takes five years to break an asymmetric piece of cryptography, then I can use that same technology to encrypt your files. When someone tried to hold the files of Eddy Willems for ransom using symmetric cryptography, he could crack the code and be on his way. With the advent of asymmetric cryptography, ransomware attacks became genuine threats.

13:29 - Moti Yung

We decided that the threat is real and there was no proper reaction.

13:36 - Saron Yitbarek

In 1995, Moti Yung working with the student, Adam Young, no relation, proposed that asymmetric encryption could leave people everywhere vulnerable to ransomware attacks. They even published a book in which they coined the term crypto viral extortion, but Yung says their warning was mostly ignored.

13:57 - Moti Yung

The reception of the book was not great either in the academic world. And we were disappointed. A reaction that one would expect is like, "Oh, let's try to embed countermeasures into our antivirus software and proactively deal with that."

14:16 - Saron Yitbarek

But that's not what happened. Imagine the frustration. Yung saw that asymmetric encryption would be used against us. He saw the world growing more and more connected, more vulnerable. He predicted the incredible rise of ransomware attacks we live with today. He predicted that those who don't protect their data would become low-hanging fruit for attackers.

14:41 - Moti Yung

And therefore you see that municipalities, hospitals, schools are being attacked and not necessarily the high tech industry. It's all those industry, which did not invest enough in security, believing that they are immune.

15:03 - Saron Yitbarek

Yung mentioned the cost of these ransomware attacks has been hard to quantify. It's money, of course, but how do you measure the threat of a service, maybe a vital service being suddenly frozen.

15:15 - Moti Yung

This is the implication to society. This is the implications to human life. They attack such crucial systems that are so important to humanity and to civic life.

15:27 - Saron Yitbarek

Meaning the stakes could not be higher. Asymmetric cryptography has given ransomware attackers the power to potentially seize, hold hostage the gears of society. And that's why finding a way to fight back against this threat has become so incredibly important.

15:57 - Saron Yitbarek

We've talked a bunch this season about this idea of digital hygiene, the idea that we can each stop malware in its tracks by simply being careful about how we behave online. But what if it's too late for all that? How can we respond when a ransomware attack is already underway? The answer might be that age old truth, follow the money.

16:20 - Sheila Warren

The movement of money across borders has interested me for a very long time in my career.

16:25 - Saron Yitbarek

Sheila Warren is an executive at the World Economic Forum, where she works on data, blockchain, and digital assets. She spends a lot of time thinking about cryptocurrency and the way it's shaping our world. Cryptocurrencies in their purest form are a way for anybody to exchange value with anybody else online. It's meant to be easy and efficient and independent.

16:50 - Sheila Warren

Cryptocurrency is really a critical tool in creating a more user-focused and user-oriented internet.

16:57 - Saron Yitbarek

It's basically internet money. And the fact that cryptocurrencies aren't tied to any particular government might make some criminals think it's a good option for ransomware payments, but Warren has news for them.

17:11 - Sheila Warren

Because it's actually more traceable than cash. Many forms of crypto, the whole point is there's a record of a transaction. I wouldn't say that it's a brilliant criminal move to engage in crypto and to ask for it with ransomware. But I think it's actually easier for internet criminals to do that and that's part of the reason I think that they do it.

17:30 - Saron Yitbarek

On the one hand, cryptocurrency accounts can be set up anonymously and law enforcement can't just freeze these accounts. But as Warren says, every transaction is recorded in a public ledger, a blockchain.

17:43 - Sheila Warren

The whole point of crypto is that it is traceable.

17:47 - Saron Yitbarek

What that means is cryptography may be back on the side of the good guys. When asymmetric cryptography made online commerce possible, criminals learned how to use the same tech from ransomware attacks. But now if they're trying to collect their ransom via cryptocurrency thinking it keeps them anonymous, no such luck.

18:08 - Sheila Warren

I remember the movie Goodfellas. And then when they were like, okay, don't spend, don't go buy jewels for your wives and cars and whatever, right? Because like don't be an idiot with this money. I mean, people are kind of, they're sometimes really stupid. And so they make a ton and then they start doing all kinds of consumer activity that's really unusual. And like, again, it's not that hard to figure out who some of these people are and what they're doing.

18:32 - Saron Yitbarek

It's the moment when you try to cash out that people get busted. Remember Dr. Popp and his AIDS ransomware? It was the PO box where ransom payments were sent that allowed authorities to track him down. It's all about following the money. Today, criminals make the same mistake when they ask for crypto ransoms and then try to turn that crypto into traditional cash. That's when the anonymous cloak drops away and people get caught. And yet a lot of people engaged in ransomware attacks keep using crypto for their payments.

19:08 - Sheila Warren

So if you're a person that's capable of creating ransomware, you are pretty sophisticated probably in internet currency and digital money as well. That's your area of expertise. You're maybe not as skilled at negotiating a drop of a bag of cash in some place. That may not be your area of expertise. I'm speculating here. Right? But, I would imagine that you're like, well, this I know how to do and I could bounce the thing 15 different ways and IP addresses and whatever. Whereas am I really that person who's going to, like I don't know, hoverboard over past this drop and grab this thing and skate off into the sunset?

19:41 - Saron Yitbarek

Right. Online criminals don't want to venture into the offline world. And the security, the traceability of cryptocurrency then becomes the Achilles heel of ransomware attacks. That said, you can't track these people down by simply looking them up. It takes money and effort.

20:01 - Sheila Warren

They're looking at the record that you can view of when wallet transfers to wallet. They know which wallet gets the value. What they're trying to figure out is where is that wallet and who owns that wallet. The crime is global and the law enforcement effort is global as well.

20:17 - Saron Yitbarek

It isn't just law enforcement that's working to beat ransomware attackers, though.

20:21 - Shelia Warren

There's a lot of support from the developer community. Like how can we put in safeguards? There's support from the exchanges. They don't want criminals using their exchanges to launder this crypto. So there's a tremendous amount of support from the private sector and crypto industry to assist with these activities, 100%. There's no question.

20:43 - Saron Yitbarek

Time and time again, we learn that the tech itself isn't good or evil. It's all about how it's used, how it gets governed and how many command line heroes are willing to use that tech to keep us safe. Today, ransomware attacks are growing more common. They threaten every industry. Files get locked, hundreds of gigabytes of client records get taken, ransomers demand millions in cryptocurrency or cash. It's become a profound example of the ways a supposedly defensive technology, encryption, can also be used offensively, and it reminds us that both sides have access to the same tools.

21:29 - Saron Yitbarek

So if we are in danger of getting locked up, we need to be prepared with a key of our own. I'm Saron Yitbarek, and this is Command Line Heroes, an original podcast from Red Hat. Next time on Command Line Heroes, we're telling the totally wild story of a man who invented a brand new intrusion detection system to catch a crook. You won't believe what he got up to. It's the tale of Clifford Stoll. Until then, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-9/ransomware

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
