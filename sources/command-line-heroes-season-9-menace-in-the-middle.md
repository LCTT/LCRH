[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 9: Menace in the Middle)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-9/menace-in-the-middle)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 9: Menace in the Middle
======

### Shownotes

All communication leaves the possibility for crossed wires. And as we become more connected, there’s a chance for those with ill intentions to steal our information and meddle in our daily lives—with devastating results.

Smriti Bhatt breaks down the complexity behind machine-in-the-middle attacks. Johannes Ullrich tells us why we shouldn’t always trust that free WiFi. And the “father of SSL” Taher Elgamal notes that while cryptography can address the increasingly sophisticated nature of malware, there are no safe bets in security.

### Transcript

00:02 - Female Voice Actor

Hello, operator. I'd like to place a call to Murray Hill 35097. Hello. Operator?

00:17 - Male Voice Actor 1

So you understand the plan?

00:17 - Male Voice Actor 2

Yeah, sure. I got it.

00:17 - Female Voice Actor

Who is this? Hello? I'm trying to place a call.

00:21 - Male Voice Actor 1

Be there by 10:00 and keep your gun handy.

00:24 - Male Voice Actor 2

Yeah, no problem, boss. This will be an easy job.

00:28 - Male Voice Actor 1

You just make sure it looks like an accident.

00:30 - Male Voice Actor 2

I've got it. I've got it.

00:38 - Female Voice Actor

Who were they and how could they not hear me?

00:42 - Saron Yitbarek

The crossed wires problem has been around ever since we started using tech to send each other messages. Letters get intercepted. Phone lines get tapped. These days, we have to worry about wifi eavesdropping, IP spoofing, SSL hijacking. People have even used submarines to dive down and tap into the fiber optic cables that span our oceans. I mean, the list goes on. Every new form of communication technology creates a new opportunity to intercept private notes. In some cases, we're just talking about privacy being invaded.

01:20 - Saron Yitbarek

In others, an insecure connection can mean a payment you just made gets scooped up in transit or corporate secrets are stolen. Some of our most valuable assets are shuttled around the world via digital technology and bad actors try to catch them where they can. These are machine in the middle attacks. You might have heard them called man in the middle attacks. You can call them monster in the middle, meddler in the middle, whatever. Point is something is messing around in the middle of your communication and these attacks grow more dangerous the more connected our lives become.

01:58 - Saron Yitbarek

I'm Saron Yitbarek And this is Command Line Heroes, an original podcast from Red Hat. All season, we're tackling the biggest problems in digital security, the viruses and trojan horses and botnets that keep InfoSec teams awake at night. And this time we're focused on secret sly interceptors, the machine in the middle attacks that interfere with our supposedly safe transmissions. Packages, messages, money, anything that travels from one place to another could get snatched along the way. It's 2015 and all across Europe ordinary citizens are noticing that their bank accounts have a mysterious leak.

02:53 - Saron Yitbarek

Money seems to be disappearing. It's almost as though a ghost is making withdrawals. A million euros is stolen, then two, then three. Soon, six million euros has simply vanished.

03:08 - Smriti Bhatt

Sometimes they take out even, you know, $10 and that will, together from so many different millions of users, it will contribute to a very large amount for the cyber criminal group.

03:23 - Saron Yitbarek

Smriti Bhatt is an assistant professor at Purdue University in Indiana. She researches cyber security with the focus on access control and authorization. And if she'd been in Europe back in 2015, she might have had an idea what was going on. Machine in the middle attacks are very much on her radar and she knows these attacks have evolved to be a lot more complicated than our opening cross wires example. So how could an attack start bleeding millions of euros? To begin with, a bit of malware gets planted.

03:58 - Smriti Bhatt

They try to gain access to these medium and large scale European companies through different attack vectors, and then social engineering techniques, sending them phishing emails for the employees to click on those links.

04:12 - Saron Yitbarek

Episode two in this season features the trojan horses criminals use to gain your confidence, get you to click on links and download malware. It can be painfully easy to trick people, in some cases.

04:24 - Smriti Bhatt

You can get a malware or a piece of code that is specially designed to be sent out to a specific organization.

04:33 - Saron Yitbarek

So whoever was behind this attack in 2015, they would've sent out phishing emails to big companies throughout Europe. Employees click on bad links and let malware get installed on their computers. That malware starts monitoring emails for payment requests and this is when the machine in the middle attack is most disturbing.

04:54- Smriti Bhatt

It's easier for them because they are actually within a communication channel that's happening between two ends and they both are believing that they are actually talking to each other, but there's someone in the middle who is actually intercepting and maybe changing those messages.

05:10 - Saron Yitbarek

Here's how it plays out. Let's say an individual has downloaded the attacker's malware. We'll call him John Smith. Now the criminals are monitoring his email. They can easily see that a payment is coming due. So they send John Smith a note pretending to be the company that's collecting the payment. They say, "Hey, time to pay up, John," and even include a link for ease. Just click here to make your payment. John then sends his banking info to a fake website that they've built. Then the attackers can turn around, visit the real website of John's bank and use that information to withdraw his money.

05:49 - Smriti Bhatt

So they will initiate two simultaneous connections, one with the victim acting as the bank webpage or website, and then one with the bank where they act as the user, where they are communicating with the bank. So they're in the middle getting information from the victim, whatever they need, username, passwords. And they have a simultaneous connection going on with the bank where they are acting as the user and providing that information that they are getting from the user to the bank. So they're in the middle and they are facilitating this communication.

06:25 - Saron Yitbarek

They're hijacking it. Stopping this European scam in 2015 was an enormous project. It wasn't as simple as pulling the plug on a server.

06:37 - Smriti Bhatt

Attackers in the dark web, they have these bulletproof hosting platforms that are available where different malicious attackers can go in and host these phishing websites.

06:49 - Saron Yitbarek

Hunting these bulletproof sites across the dark web isn't easy. Standard checks and balances don't apply there and tracking people down can feel like you are trying to put handcuffs on a shadow.

07:02 - Smriti Bhatt

It is very large-scale in a sense that it's very spread out. It's very scaled out. It's not a specific country. It's not a specific region. So that's another factor that makes it successful because it's so hard to track back where it is originating, where it's coming from, how widely it is spread across the internet.

07:23 - Saron Yitbarek

Europol did manage to take that ring down, but the work required was intense.

07:30 - Smriti Bhatt

They needed a lot of coordination between different agencies. So you can see how many different countries, Italy, Spain. They have to come together. The UK law enforcement and the Europol itself has to come together to conduct these simultaneous raids.

07:46 - Saron Yitbarek

Those raids led to the seizure of documents, laptops, telephones, SIM cards, memory sticks. 49 cyber criminals were arrested in the end. Police searched 58 separate properties to pull it all together and even then a massive machine in the middle attack like this one almost has a life of its own.

08:08 - Smriti Bhatt

They might already had backup of all those resources, the attackers, and if they come back, they can set these similar operations again.

08:18 - Saron Yitbarek

As long as the attacks are within the boundaries of Europe, coordinating a response from Europol is at least feasible because it's within the European Union. Things get more difficult though if countries that don't trust each other have to share information. And of course all this just compounds when attackers start adapting their machine in the middle attacks to new tech technologies where secure transmissions aren't established. Every new piece of communication tech opens the possibility of new kinds of eavesdropping, new ways to intercept messages as they run down wires or through the air.

09:03 - Johannes Ullrich

You're in a playground and you're eating an apple. You want to give that apple to your friend and some bully comes and takes the apple from you, taking a bite out of it and then passing it to the friend.

09:13 - Saron Yitbarek

That would be a machine in the middle attack. Johannes Ullrich is the Dean of Research at SANS Technology Institute in Florida. He researches attacks that play out on the internet and he says there are endless ways a criminal could execute a machine in the middle attack. It can happen on a local network.

09:36 - Johannes Ullrich

You have something called ARP spoofing where I'm essentially taking over the role of the router and redirect traffic to the attacker instead of the actual legitimate router.

09:45 - Saron Yitbarek

It can happen when someone manipulates the routing protocols of the internet.

09:49 - Johannes Ullrich

Where I'm just claiming to the internet that I'm owning a certain IP address or certain range of IP addresses and trick the internet into routing traffic to me.

09:59 - Saron Yitbarek

It can happen via DNS spoofing.

10:02 - Johannes Ullrich

I basically just give you the wrong IP address to send the traffic to.

10:07 - Saron Yitbarek

You get the idea. Machine in the middle attacks are only limited by the creativity of criminals. And like I've said, even before the internet, bad actors always found ways to hack into communication tech. For example, Mr. Marconey was a bit naive when he developed the radio in the 1890s. He imagined his radio could be a point to point communication system, sort of like a wireless telegraph. Pretty quickly though, he realized that radio signals allow anyone to eavesdrop. Today, a couple big advances have opened our world up to new fields of machine in the middle attacks.

10:49 - Saron Yitbarek

The first one was the advent of wifi, in particular the widespread use of wifi that isn't encrypted.

10:57 - Johannes Ullrich

So the usual coffee shop scenario, we are just connecting to some open access point. In that case because the traffic is not encrypted, it's not authenticated, an attacker can easily impersonate any part of the conversation.

11:11 - Saron Yitbarek

Unsecured public wifi is a classic site for machine in the middle attacks.

11:17 - Johannes Ullrich

As that hacker, I would turn my laptop into an access point. I may either use a little LTE modem or connect to the shop's own wifi network to provide internet connectivity and then I just use for that access point that I'm deploying the same SSID the same name that the coffee shop uses legitimately. So a victim connecting to the wifi network wouldn't really be able to tell a difference between my access point and the shop's access point.

11:50 - Saron Yitbarek

This is sometimes called an evil twin attack where the entire wifi access point is mirrored.

11:55 - Johannes Ullrich

They hope I'll pass it on to the internet, but of course, before I do so I could, again, manipulate the traffic. I could eavesdrop on the traffic.

12:05 - Saron Yitbarek

You'll notice there are some sneaky social engineering tricks at play here. For example, say the coffee shop wifi requires a password. You have to walk all the way to the counter to get it. But then you see another network and it uses the cafe's name too, but this one doesn't need a password.

12:26 - Johannes Ullrich

You'll give that a try and then you are actually connected to my free wifi. And with that, of course, I can intercept their traffic.

12:37 - Saron Yitbarek

Wifi has been around for a while now and more people are aware of the risks when using random cafe internet. But of course, a new avenue for machine in the middle attacks has emerged. Think about IoT, the internet of things, billions of new internet connected devices are showing up in our everyday lives. And when there's a rush to put out new products, security issues can sometimes take a backseat. That leaves these IoT devices especially vulnerable.

13:09 - Johannes Ullrich

The internet of things is somewhat a problem in particular because often TLS, the main defense against these attacks, isn't working that well with internet of things.

13:20 - Saron Yitbarek

That would be transport layer security, a cryptographic protocol.

13:24 - Johannes Ullrich

They often don't verify certificates correctly. Then for example, things like firmware updates can be intercepted. It's a very common vulnerability with internet of things there. A machine in the middle attack could be used to manipulate firmware that's being downloaded. And as a result, then an attacker could, for example, launch their own code on that particular thing they're trying to attack.

13:47 - Saron Yitbarek

Whether we're talking about hacking wifi or your smart TV or any place an attacker can weasel themselves in, these machine in the middle attacks are usually very intentional. The hacker is there to get away with something. Many of these attacks are about stealing credentials, your username, password, anything they can use to pretend to be you.

14:11 - Johannes Ullrich

I'm intercepting login screens. I am collecting automatically transmitted credentials like cookies, like API keys, and the like.

14:22 - Saron Yitbarek

Other attacks are designed to install malicious code.

14:26 - Johannes Ullrich

Now, when you're going to a website and you're being offered additional download or additional content that then actually triggers vulnerability in your systems or tricks you into installing malicious code.

14:38 - Saron Yitbarek

But remember, that's not all that can happen. Theoretically, any information you're sending to a website or any system at all can be collected.

14:49 - Johannes Ullrich

This could be financial information if you're connecting to your bank account's website. The recent credential is sort of most interesting is once the attacker has those credentials, they don't really have to bother with collecting all the other data because they can just go there and get it themself by logging in as you.

15:07 - Saron Yitbarek

The crime itself can be as complex as that banking heist we heard about Europol busting, or it can be something as seemingly simple as stealing the cookie that authenticates you on a website. If someone steals the cookie that a website has been using to auto fill your username and password, well like Ullrich says they can essentially become you, whether that means into your bank or just spying on your social media. Scared yet? Don't be too freaked out because we have some brilliant defense strategies in place.

15:44 - Saron Yitbarek

Professionals and everyday folks are finding ways to secure that big open space where attackers like to pounce. To a certain degree, we can all save ourselves from machine in the middle attacks. If I'm doing some online banking, for example, I'm going to check the URL, make sure it's right and I'm going to check again throughout the session. I'm never going to log into a site after clicking on a link in an email, either. I'm typing in that URL myself. And I never trust a login page that doesn't use HTTPS. Look for that padlock icon in the search bar if you're unsure.

16:25 - Saron Yitbarek

There are lots of simple things we can do, but at the end of the day, digital hygiene only gets you so far. We will rely on something else to keep us safe. Cryptography. Here's the basic idea. If we scramble a message well enough, it doesn't matter whether it gets intercepted because that hacker isn't going to be able to read the message they steal. It'll be useless.

16:51 - Taher Elgamal

We noticed really early on the internet is way too open.

16:56 - Saron Yitbarek

Taher Elgamal is the CTO for security at Salesforce. But back in 1995, he was the chief scientist at Netscape and Netscape wanted to develop eCommerce. They were excited about a whole new world of commercial transactions bouncing around the internet. Only problem was ...

17:14 - Taher Elgamal

We needed to do something to make sure that whatever travels on the open internet satisfies security requirements.

17:23 - Saron Yitbarek

Netscape developed SSL, the secure sockets layer protocol and Elgamal, who is sometimes called the father of SSL, led the team that put out the first public version. SSL would deliver three things that made eCommerce viable. First, integrity. If I'm transferring $1,000, I don't want someone to add a zero to that number. Second, privacy. I don't want everyone to know I'm transferring that money. And third, authentication. I want to know that you are really you before I send that cash.

17:59 - Taher Elgamal

So these three things is what we developed SSL on, and it was basically developed so that the consumer and the merchant, which is the server, can communicate with all of these three properties maintained.

18:14 - Saron Yitbarek

A simple proposition, but SSL opened the gates and every business came marching through.

18:23 - Taher Elgamal

And the world actually went crazy with it.

18:24 - Saron Yitbarek

Two decades after Netscape supercharged internet traffic with its SSL protocol, it was ubiquitous. For some businesses, SSL must have felt like a silver bullet, allowing them to stop worrying about hackers entirely. To this day, it lends a sense of safety to our online lives. Every time you look at a URL and see that S in HTTPS, the S stands for secure. It's one more instance of data that's been secured by Elgamal's team, and they manage this by taking advantage of a particular kind of cryptography, public key cryptography.

19:05 - Taher Elgamal

Each entity has two keys. One is a private key, and one is a public key, and they construct it in such a way that I can provide you with my public key so you can send something back that is encrypted with my public key and only my private key, which I have never shared with anyone, can use to decrypt. So this is the base of public key cryptography.

19:27 - Saron Yitbarek

Public key cryptography is sometimes called asymmetric cryptography. In symmetric cryptography, both parties have a shared secret key that they use to unlock information. There's only this one private key they're using, and that's not feasible when you have billions of consumers and millions of merchants. Asymmetric or public key cryptography allows eCommerce to scale. It allowed for the safe expansion of our digital lives. Soon, SSL was renamed TLS, transport layer security, but the basics are the same.

20:03 - Saron Yitbarek

And TLS is continually being updated to this day in response to new weaknesses found in operating systems, applications, or the cloud.

20:13 - Taher Elgamal

It's an endless arms race because somebody will always find a weakness in something and then the community has to find a better way of doing it. This is just never going to end, basically. It's the digital world that we live in.

20:28 - Saron Yitbarek

Elgamal suggests that the same development of protocols that made eCommerce possible can now help to secure the internet of things from machine in the middle attacks.

20:37 - Taher Elgamal

But the idea of SSL, of TLS is the right thing. So I can prove to my fridge that it's actually me because I'm authenticated, therefore nobody else can get access to it. So, the use of a protocol like TLS in the IoT world will solve certain issues.

20:57 - Saron Yitbarek

Elgamal says this kind of work, this constant securing against machine in the middle attacks presents a new challenge every day.

21:05 - Taher Elgamal

The attacker needs to find one door that they can enter from and the defense needs to secure every single door and window and this and that and the other thing. That's why there's an arms race and that's why we're always trying to catch up. I've been in security for such a long time. I want people to stop thinking of what is the silver bullet.

21:30 - Saron Yitbarek

Okay. No silver bullet, but what we do have is vigilance and curiosity. We can remind ourselves with every new piece of communication technology, there's always a way to slip into someone else's private conversation.

21:51 - Saron Yitbarek

We've been making progress. Command Line Heroes, like Taher Elgamal, are securing communication against machine in the middle attacks. More than half of all internet traffic is now encrypted. We're adopting HTTPS and in browser warning systems. We're scrambling our messages so that they're useless when they get stolen. And down the road, quantum cryptography could change the encryption game again, but that's a message nobody can read quite yet.

22:23 - Saron Yitbarek

I'm Saron Yitbarek and this is Command Line Heroes, an original podcast for Red Hat. Next time, we encounter another scary security threat, ransomware. Files get locked and attackers demand cash for the decryption key, unless a few brilliant heroes can save the day. Subscribe, follow wherever you get your podcasts to make sure you don't miss an episode. And until next time, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-9/menace-in-the-middle

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
