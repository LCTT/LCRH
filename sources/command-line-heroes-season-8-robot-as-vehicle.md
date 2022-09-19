[#]: collector: (bestony)
[#]: translator: ( )
[#]: reviewer: ( )
[#]: publisher: ( )
[#]: url: ( )
[#]: subject: (Command Line Heroes: Season 8: Robot as Vehicle)
[#]: via: (https://www.redhat.com/en/command-line-heroes/season-8/robot-as-vehicle)
[#]: author: (RedHat https://www.redhat.com/en/command-line-heroes)

Command Line Heroes: Season 8: Robot as Vehicle
======

### Shownotes

Self-driving cars are seemingly just around the corner. These robots aren’t quite ready for the streets. For every hyped-up self-driving showcase, there’s a news story about its failure. But the good news is that we get closer every year.

Alex Davies steers us through the history of autonomous vehicles. Alex Kendall maps the current self-driving landscape. And Jason Millar takes us under the hood of these robots’ computers to better understand how they make decisions.

### Transcript

00:01 - Female Voice Actor

New horizons, new ways of living, wondering, searching, exploring. Far distant view of... \[voice fades\].

00:09 - Male Voice Actor

Welcome. Welcome. Futurama exhibit, right this way. See the automobile of the future. By 1960, your vehicle will drive itself.

00:19 - Crowd

Oh!

00:21 - Saron Yitbarek

The 1939 World's Fair in New York City was crazy optimistic about the future of tech. Five million people visited the Futurama exhibit, where General Motors was laying out a utopian vision of what they called magical motorways, a web of enormous highways would weave American cities together. And by 1960, cars would be automated. That was the promise.

00:50 - Saron Yitbarek

We're still waiting for those self-driving cars, but that's because getting to Futurama isn't just about improving our vehicles. It's about realizing a robot revolution.

01:03 - Saron Yitbarek

I'm Saron Yitbarek. And this is Command Line Heroes, an original podcast from Red Hat.

01:11 - Saron Yitbarek

Let's get one thing straight, yes, self-driving cars are robots. They make independent decisions. They navigate the real world. They might not look like robots in the movies, like R2-D2, but that's something we've seen over and over again this season. The robots we imagined rarely line up with our robots in real life.

01:34 - Saron Yitbarek

For our season finale, we've saved a topic with more hype than any other in the world of robotics right now: the self-driving vehicle.

01:44 - Saron Yitbarek

For nearly a century, we've been promised cars that drive themselves. And as we work through the last miles on this journey, we're learning just how transformative a robot revolution will be.

02:02 - Saron Yitbarek

The first cars in the 19th century were called horseless carriages. That was the big breakthrough, a vehicle with no horses required. The upside was obvious, no manure on the street and a lot more quote, unquote, "horsepower” under the hood.

02:20 - Saron Yitbarek

But there was a downside too. You got rid of a sentient being, the horse, which was helping you stay out of danger.

02:28 - Alex Davies

People think, "Oh shoot. We don't have a horse anymore, so I now have to be the driver."

02:34 - Saron Yitbarek

Alex Davies is the author of Driven: The Race to Create the Autonomous Car. And as he tells it, we lost something kind of amazing when we started driving horseless carriages.

02:46 - Alex Davies

Of course, you would have someone at the reins telling the horse, go left, go, right. But if they fell asleep or fell out of the seat, the horse isn't going to walk into a wall or off a cliff, which is very much what you get when you have a human driven car.

03:02 - Saron Yitbarek

So from the very dawn of the automobile industry, there is something missing, that extra brain with an awareness for danger. And that's why, early on, we started trying to bring back an external intelligence.

03:18 - Alex Davies

Some of the first examples of self-driving cars you see showed up in the '20s and the '30s, although self-driving is probably a generous description. Some of these were actually radio controlled vehicles. So you would have someone in another car nearby sending electronic signals to the vehicle to tell it to accelerate, or brake, or turn left or right.

03:38 - Saron Yitbarek

Those were sometimes called phantom cars. Bit of a cheat. You’ve still got a human driver, they're just not in the car.

03:46 - Alex Davies

In the 1950s and '60s, people started experimenting with putting magnets underneath the pavement in highways. And the idea was that the car could follow the magnetic signals and it would be similar to a train running on tracks.

04:04 - Saron Yitbarek

Okay, slightly more autonomous, but still, if it's basically a train running on a track, then why not just take the train? And besides, they weren't about to rip up every mile of highway in the United States and bury magnets underneath.

04:19 - Saron Yitbarek

Norman Bel Geddes, the industrial designer hired by General Motors for the Futurama exhibit at the World's Fair, imagined that by 1960, we'd be zipping across whole countries at the push of a button. Maybe we'd be chauffeured by robots. One way or another, the driving experience would be robotized. But Geddes was wrong.

04:44 - Saron Yitbarek

By 1960, we weren't anywhere near his vision. He was right about the need for robotic aid though. Driving has always been a dangerous part of our lives. Today, worldwide, they're around 1.3 million fatalities from car crashes every year. Almost all of them are caused by human error. And that's something robots could help solve.

05:09 - Saron Yitbarek

Our self-driving solution got a bit closer in the 1980s, when powerful computers weren't taking up whole rooms anymore. You could fit them into something, say, the size of a car.

05:22 - Alex Davies

The first thing I think you would call a self-driving car came out of Carnegie Mellon University. In the 1980s, they started a program called the Navigational Laboratory, what they abbreviated to Navlab. And they created a whole series of vehicles.

05:37 - Alex Davies

Navlab 1 was different from most robots that had been built before it, because it was a moving vehicle that made its own decisions about how to drive. And it was the first robot that was big enough that people could actually sit inside it.

05:53 - Saron Yitbarek

So a faster computer, a smaller computer, these are key if you want to build a self-driving car, but there's something else too.

06:03 - Alex Davies

Researchers get serious about the idea of artificial intelligence.

06:08 - Saron Yitbarek

A paradigm shift in the kind of computing that we want to build into our robots.

06:14 - Alex Davies

Which is really one of the main things that drives the idea behind self-driving cars today. It's the idea that this is not a machine that follows very simple commands, like follow the magnets or respond to radio controls that are given by a nearby human.

06:31 - Alex Davies

The idea is that the computer can use tools like cameras and radars and laser sensors and maps to understand its surroundings independent of what a human thinks and then can make its own decisions.

06:49 - Saron Yitbarek

Pioneering work on artificial intelligence began in the '50s and '60s, but it wasn't until pretty recently, not until the '90s, that our computers became powerful enough to bring this idea to life.

07:03 - Saron Yitbarek

Autonomous car projects started to gain some traction as processing power sped up. And pretty soon, it was time for the rubber to meet the road.

07:12 - Saron Yitbarek

In the early 2000s, DARPA became very interested in autonomous vehicles. It seemed like a technology that would make life far safer for members of the military. They weren't just going to fund it via research though. They wanted to kind of crowdsource things. They decided to have a race, and everybody was invited to submit their own vehicle. Only rule, no drivers allowed.

07:40 - Alex Davies

Bring it to the Mojave Desert in March of 2004, and we'll race them 150 miles across the desert. The car that gets there first wins a million dollars.

07:51 - Saron Yitbarek

Engineers joined, veterans from BattleBots, amateurs, lots of different folks. They all came to the Mojave to prove they'd cracked the secret of self-driving cars.

08:03 - Alex Davies

And it was this amazing disaster.

08:10 - Saron Yitbarek

Like Davies said, it was a 150 mile race. And the vehicle that did the best, an entry from Carnegie Mellon, made it about seven miles. They got stuck on a rock and melted its tires off while trying to get unstuck. Not exactly a success, but DARPA didn't see it this way. People were excited about self-driving vehicles. People were engaged. So DARPA reran the contest a year later. And this time, the prize would be two million.

08:42 - Alex Davies

At the 2005 Grand Challenge, five vehicles finished the entire race. And you get a genuine race between Carnegie Mellon and Stanford. And all of these teams that couldn't make it out of the starting gate in 2004 are going dozens or hundreds of miles in 2005. And that's where you get this huge success. Then DARPA follows it up in 2007.

09:06 - Saron Yitbarek

This time with obstacles and an urban setting.

09:09 - Alex Davies

The Grand Challenges prove not just that the self-driving vehicle is possible, but that it's inevitable, because by the end of 2007, you've got people, like the founders of Google, live watching these races thinking, "I can take this idea and I can run with it."

09:29 - Saron Yitbarek

We're not in some Futurama fantasy anymore. The self-driving car is about to become an industry.

09:45 - Male Voice Actor -- Car Salesman

Hey, there. Nice day we're having. You in the market for a car?

09:51 - Saron Yitbarek

So you've just arrived at a dealership. You're there to buy a car. You're not too concerned with make or model though. What you want to know is how much autonomy you can hand over to your new wheels. There are five levels to choose from.

10:07 - Saron Yitbarek

Level 1: Basic Driver Assistance. Your car might have cruise control, for example, giving you a bit of a break with highway driving.

10:16 - Saron Yitbarek

Level 2: Partial Automation. Your car is going to help with steering, breaking, and accelerating, but just in certain situations.

10:25 - Saron Yitbarek

Level 3: Conditional Automation. Now, it can handle driving on the highway up to 50 miles per hour. And if you initiate a lane change, the system can help you weave between cars.

10:38 - Saron Yitbarek

Then something interesting happens when we jump to Level 4. Now, you're at what's called High Automation. The car is completely aware of its surroundings and can basically drive itself. It can drive on highways up to 100 miles per hour. It's changing lanes all on its own. And as for you, you can start to focus on other things. Your car will let you know if it gets in a situation that requires your attention.

11:05 - Saron Yitbarek

And then, finally, there's Level 5: Full Automation. You can fall asleep if you like. You're not needed at all. This is top of the line automation.

11:17 - Saron Yitbarek

Levels 1 to 3 are things you may have experienced already. Tesla has its autopilot feature and Cadillac has Super Cruise, but over in England at the autonomous driving startup Wayve, CEO Alex Kendall has been trying to deliver those last two levels of automation since founding his company in 2017.

11:38 - Alex Kendall

Autonomous driving is what I'd call L4 or L5. And that's really where there is no human required to be responsible or liable for controlling the vehicle, but an autonomous algorithm or robot makes those decisions and commands the mobility of that vehicle.

11:53 - Saron Yitbarek

Moving past Level 3 into complete autonomy could make things a lot safer for drivers, because by hovering around three, we're in a tricky middle spot where the driver feels like they don't need to pay attention, but the robotic car really isn't ready to take full control.

12:10 - Alex Kendall

It can be very easy to become distracted. And there's been some well documented examples where that has led to unfortunately some damaging accidents. So for those reasons, I think it is quite challenging. And that's why making the jump to a fully autonomous system is so much more important to really realize the benefits of autonomy.

12:28 - Saron Yitbarek

But making that jump is not going to happen without extraordinary investments. A lot of people are only starting to understand the scope of this project.

12:39 - Alex Kendall

It's one of the great technology challenges of our generation. I'd actually compare it to the space race, what we saw in the 1960s about getting humanity to the moon.

12:49 - Alex Kendall

Now, if you think about the Apollo program that ended up succeeding it in 1969, landing humans on the surface of the moon, that was a program that in today's dollars cost about $300 billion dollars to get through. And it was hugely complex in terms of technology.

13:05 - Alex Kendall

Now, in terms of self-driving, we've seen probably $100 billion dollars of investment in this program. And so we're quite far into what I would consider what we need to do to get this to market, but the progress has certainly been humbling.

13:19 - Saron Yitbarek

If Kendall is right and the self-driving car needs the same kind of investment as the Apollo mission, then funding is certainly one roadblock on the way to market.

13:29 - Saron Yitbarek

But the cost of the end product is a sticking point too. A fully automated car could cost customers $100 grand more than an ordinary car. But also, and maybe this is the biggest roadblock, it's just incredibly complex to get to Level 4 or 5 on that autonomy ladder. We're talking about a billion lines of code with a complexity greater than a jet plane’s.

13:56 - Alex Kendall

What we haven't yet seen is what I call embodied intelligence, which is taking this artificial intelligence, taking deep learning out of simulation, out of software and putting it in the real world and giving it a physical interface to society.

14:08 - Saron Yitbarek

What Kendall calls, "embodied intelligence" is the final hurdle, the challenge of getting machine learning to be able to cope with all the countless real world circumstances that we can't necessarily tell it about in advance.

14:22 - Alex Kendall

We've been able to teach our car how to drive and do lane following, how to go through roundabouts, give away intersections, traffic light intersections, double lane roads. And we're now starting to learn some of the more complex behaviors that are needed in urban driving.

14:36 - Alex Kendall

Now, to learn on that curriculum, you need a incredibly powerful platform. One that can take petabytes of driving data, of video driving data, and understand where these different scenarios are, how it should present data to the model to be able to learn and also, statistically validate that your behavior is safe.

14:54 - Saron Yitbarek

Kendall says, they're getting there, moving into those final two levels of autonomous driving. But this final mile may be the hardest. In the real world, robotic cars will have to understand not just the rules of the road, but random changes in the environment too, and most difficult of all, the varying and unpredictable behavior of human beings.

15:17 - Saron Yitbarek

Let's think of the journey towards self-driving like a trip from LA to New York. How far on that journey have we come? Alex Davies puts it this way...

15:28 - Alex Davies

We'd probably be somewhere in that incredibly long line of cars trying to get onto the George Washington Bridge right now.

15:36 - Alex Davies

The work we've done in the last couple of decades, especially in the last 15 years, is all of the easy miles. It's all of that stuff where you're just cruising across I-80 going 70 miles an hour without another car in sight. The really hard work all comes at the end.

16:05 - Saron Yitbarek

Self-driving cars are out there already on the roads. They are just not exactly what Futurama promised back at the World's Fair in the '30s.

16:15 - Self-driving car voice

One large pepperoni. One medium Cheese Lovers.

16:19 - Saron Yitbarek

In Houston, Texas, they're delivering pizzas. In the UK, the government is looking to legalize hands-free systems. It's a start. We're creeping toward Level 5.

16:31 - Saron Yitbarek

And as we tackle that last mile, we have a decision to make. What kind of programming is going to get us there? Machine learning like the kind Wayve relies on is often seen as the holy grail for self-driving cars. But what does all that black box number crunching mean when we're talking about robots that travel 100 miles an hour?

16:54 - Jason Millar

It's an interesting ethical question.

16:57 - Saron Yitbarek

Jason Millar is a professor at the University of Ottawa, researching the ethics of robotics.

17:03 - Jason Millar

You have no way of stepping through line by line and understanding this is exactly why it's doing this. This is why it's seeing these types of objects and so on and so forth. There is a lack of transparency there.

17:14 - Saron Yitbarek

Naturally, machine learning is hugely attractive and a crucial part of making automation happen.

17:21 - Jason Millar

If you have the right kind of data and you're feeding the right kind of data into the right kind of model, it's going to be much more efficient to get a car to, say, navigate a roundabout using that approach, then it would be if you tried to line by line define and code all the rules that have to be satisfied in order to navigate a roundabout.

17:45 - Saron Yitbarek

Millar points out that we often don't know why machine learning works. We just know that it does. And that concerns people, who want to be sure that robots, like self-driving cars, always have our best interests at heart.

18:00 - Saron Yitbarek

Thankfully, machine learning is not the only tool we can use. It's possible to pair it with more traditional rule-oriented programming too.

18:08 - Jason Millar

You can use more traditional types of programming and very clearly define the rules that a vehicle is going to abide by, or the types of driving characteristics that it's going to have. In which case, you have quite a bit of transparency, at least in terms of how the vehicle will behave and what rules it's following. With machine learning and these kind of black box approaches like the neural net approaches to doing coding, we don't have that.

18:35 - Saron Yitbarek

A slick piece of machine learning doesn't necessarily tell us why it arrives at a certain behavior. And that matters because...

18:43 - Jason Millar

Efficiency and robustness from an engineering perspective doesn't translate directly into trust and trustworthiness from a public regulatory perspective.

18:55 - Saron Yitbarek

So a few transparent pieces of rules-based programming on top of that machine learning can go a long way to engender trust when these cars go out into the wider world.

19:06 - Saron Yitbarek

For example, you might use machine learning to let a vehicle teach itself lane changing, but then have an explicit rule that limits how close you get to other cars.

19:17 - Jason Millar

And so if you're starting with these kind of abstract principles, the reason you would do that is to signal to people and to regulators or whoever you're trying to get to trust the system that look, this system has certain principles designed into it that align with your expectations in terms of an ethical system.

19:38 - Saron Yitbarek

That hybrid approach dancing between machine learning and more transparent programming could be a sweet spot, where the amazing robotic future gets welcomed into our everyday lives.

19:52 - Saron Yitbarek

So whether we get there via machine learning or rule-oriented programming, or some mix of the two, we wanted to finally get an answer to a question you might be asking. When am I going to get my own self-driving car? When do regular people get to snooze in the driver's seat? Our experts all sort of told us the same thing.

20:13 - Jason Millar

That's the wrong question.

20:15 - Saron Yitbarek

Right. Think bigger. The question isn't when do I get my self-driving car? The question is how are robotic vehicles going to transform, well, everything? That's what's so exciting about robots, their agency. Their ability to interact with a larger world invites us to think at the biggest scale we can imagine.

20:39 - Saron Yitbarek

I mentioned earlier, when automobiles first showed up everybody just called them horseless carriages. They were still comparing everything to a 19th century technology. The same thing happens when we talk about self-driving cars today. We're imagining a driver-free experience, but we're not imagining how the whole paradigm of transportation can change. Here is Alex Davies, one last time.

21:07 - Alex Davies

Just as a horseless carriage was very limited in that it didn't think about all of the things that the car could ultimately do, that it could become this inspiration for art and a version of art itself, and it could drive the creation of the American suburbs, and it could create entirely new sports and ways of moving around the world, I think we don't know very much yet about what the autonomous vehicle can do.

21:34 - Alex Davies

Untying the carriage from the horse allowed for a century's worth of innovations. And where we are right now in the progression of the self-driving car is untying the car from the human driver.

21:50 - Saron Yitbarek

Experts told us that someday we may move about in fleets of vehicles owned by the city or companies. And our groceries might travel in autonomous vehicles way more often than people do. Now, take that kind of change and try applying it to everything. The point is, cities and daily life are going to be remade, not just by autonomous vehicles, but by robots that are currently spinning in a piece of simulation software waiting to be born.

22:24 - Saron Yitbarek

Life is about to change in ways we're only beginning to comprehend. Whether we're talking transportation or healthcare or economics, the change is just as radical as when cars remade the 20th century. And that's kind of awesome. It's one of our generation's greatest engineering challenges. And if we manage to overcome all those computational and theoretical and psychological barriers, there is no telling how far our robots could take us.

23:00 - Saron Yitbarek

All season, we've been trying to separate robot facts from robot fiction. The old hype about what robots can be was often wildly wrong.

23:10 - Male Voice Actor as George Jetson

Hey, give me a beer, would you?

23:11 - Female Voice Actor as Rosie the Robot

My pleasure.

23:15 - Saron Yitbarek

But it did propel innovation. And our innovations have delivered a robot reality that's just as fantastic.

23:24 - Saron Yitbarek

This season, we've discovered robots that have already become essential coworkers, making jobs safer and more productive. Others offer companionship or replace parts of the human body. And as you've just heard, they're on the verge of remaking the whole field of transportation too.

23:43 - Saron Yitbarek

It's all happening because robotics has massively opened up over the past few decades. Thanks to simulation software like Gazebo, or open source projects like ROSS, or competitions like the DARPA Challenge, whole new crowds of command line heroes are joining the field. And personally, I can't wait to see what they dream up next.

24:09 - Saron Yitbarek

I'm Saron Yitbarek. And that's it for Season 8 of Command Line Heroes, but Season 9 is already in the works. Subscribe wherever you get your podcasts and you won't miss an episode. Until then, keep on coding.

--------------------------------------------------------------------------------

via: https://www.redhat.com/en/command-line-heroes/season-8/robot-as-vehicle

作者：[Red Hat][a]
选题：[bestony][b]
译者：[译者 ID](https://github.com/译者 ID)
校对：[校对者 ID](https://github.com/校对者 ID)

本文由 [LCRH](https://github.com/LCTT/LCRH) 原创编译，[Linux 中国](https://linux.cn/) 荣誉推出

[a]: https://www.redhat.com/en/command-line-heroes
[b]: https://github.com/bestony
