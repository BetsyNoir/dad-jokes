const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json());

const puns = [
    {
      pun: 'To burp or not to burp, that\'s indigestion.'
    },
    {
      pun: 'Datsun excellent car pun, my friend.'
    },
    {
      pun: 'What\'s Whitney Houston\'s favourite coordination? Hand eyeeeeee'
    },
    {
      pun: 'What do you call two monkeys that share an Amazon account? Prime mates'
    },
    {
      pun: 'How do you cut a wave in half? Use a sea saw'
    },
    {
      pun: 'Singing in the shower is fun until you get shampoo in your mouth - then it becomes a soap opera.'
    },
    {
      pun: 'What do you call a fake noodle? An impasta'
    },
    {
      pun: 'Sometimes I switch my socks from left to right, to keep my feet on their toes.'
    },
    {
      pun: 'I can always tell when someone’s farted. I have a fifth sense for that sort of thing.'
    },
    {
      pun: 'I can\'t put into words how illiterate I am.'
    },
    {
      pun: 'Chickens like to draw, but a cock\'ll doodle, too.'
    },
    {
      pun: 'An army of babies should be called an infantry.'
    },
    {
      pun: 'A wine hangover is the wrath of grapes.'
    },
    {
      pun: 'If you can\'t make both ends meet then make one end a vegetable.'
    },
    {
      pun: 'I tried to change my password to beefstew1 but it wasn\'t stroganoff.'
    },
    {
      pun: 'I hate spelling errors, because you can mess up just two letters, and your whole post is urined.'
    },
    {
      pun: 'Since Latin is a dead language, I expect it would be pretty useful in a zombie apocalypse.'
    },
    {
      pun: 'Don\'t you just hate rhetorical questions?'
    },
    {
      pun: 'My three favorite things are eating my family and not using commas.'
    },
    {
      pun: 'There\'s a zoo by me with only one animal - it\'s a shih tzu.'
    },
    {
      pun: 'I\'m just not convinced I\'m as skeptical as people say.'
    },
    {
      pun: 'If you\'re here for the yodeling lesson, please form an orderly orderly orderly orderly queue...'
    },
    {
      pun: 'If you say \'gullible\' really slowly, it sounds like lemons...'
    },
    {
      pun: 'I married Mr Right, but I didn\'t realise his first name was Always.'
    },
    {
      pun: 'The word \'red\' is found in \'credible\'. Red is incredible.'
    },
    {
      pun: 'I like Freudian slips as much as the next gay.'
    },
    {
      pun: 'I have a chicken proof lawn ... it\'s impeccable.'
    },
    {
      pun: 'The first time I got a universal remote control I thought to myself, \'This changes everything.\''
    },
    {
      pun: 'I asked the lion in my wardrobe what he was doing there and he replied that it was \'Narnia Business\'.'
    },
    {
      pun: 'Bad puns are how eye roll.'
    },
    {
      pun: 'A wizard walked down the street and turned into a bar.'
    },
    {
      pun: 'I wanted to drown my worries but my mother-in-law was too good of a swimmer.'
    },
    {
      pun: 'If you\'re hotter than me, then that means I\'m cooler than you.'
    },
    {
      pun: 'I bought a wooden whistle, but it wooden whistle.'
    },
    {
      pun: 'The only thing flat-earthers fear, is sphere itself.'
    },
    {
      pun: 'He reminds me of a lava lamp; not too bright but fun to watch.'
    },
    {
      pun: 'Don\'t worry if plan A fails, there are 25 more letters in the alphabet.'
    },
    {
      pun: 'Conjunctivitis.com is a site for sore eyes.'
    },
    {
      pun: 'A joke doesn\'t become a Dad joke until it\'s fully groan.'
    },
    {
      pun: 'I once tried to date a tennis player, but love meant nothing to her.'
    },
    {
      pun: 'Einstein finally developed a theory about space, it was about time, too!'
    },
    {
      pun: 'I\'m not sure about all these Netflix original series, but then again, I\'ve seen stranger things.'
    },
    {
      pun: 'My manager hid her food during the FBI raid so they couldn\'t Caesar Salad.'
    },
    {
      pun: 'My dog used to chase people on a bike, until I took his bike away.'
    },
    {
      pun: 'Some melons go through with elaborate weddings because they cantelope.'
    },
    {
      pun: 'With the rise of self-driving vehicles, it’s only a matter of time before we get a country song where a guy’s truck leaves him too.'
    },
    {
      pun: 'There is a lengthy article on Japanese Sword Fighters, but I can Samurais it for you.'
    },
    {
      pun: 'Albert Einstein was a genius, but his brother Frank was a monster.'
    },
    {
      pun: 'The gender neutral term for sugar daddy is glucose guardian.'
    },
    {
      pun: 'I can\'t think of a single person who\'s in a relationship.'
    },
    {
      pun: 'I\'ve heard that reincarnation is making a comeback.'
    },
    {
      pun: 'Is it just me or does anybody else find pressing F5 refreshing?'
    },
    {
      pun: 'Biologists have recently produced immortal frogs by removing their vocal cords, this way, they\'ll never croak.'
    },
    {
      pun: 'I use a pumpkin patch to control my pumpkin addiction.'
    },
    {
      pun: 'Sea horses don\'t run, they scallop.'
    },
    {
      pun: 'Apparently, 3.5 out of 7 people over complicate things.'
    },
    {
      pun: 'I\'m currently boycotting any company that sells items I can\'t afford.'
    },
    {
      pun: 'I told my doctor that I broke my arm in two places. He told me to stop going to those places.'
    },
    {
      pun: 'Give a man a fish and he will eat for a day, teach a man to fish and he will sit in a boat drinking beer all day.'
    },
    {
      pun: 'Why is no one ever the right amount of whelmed?'
    },
    {
      pun: 'Why is a group of squids not called a squad?'
    },
    {
      pun: 'You need brains to be a neurosurgeon.'
    },
    {
      pun: 'Is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is?'
    },
    {
      pun: 'I recently bought 51% of a vampire hunting company so now I\'m the main stake holder.'
    },
    {
      pun: 'Someone just threw a bottle of Omega 3 pills at me, but don’t worry, I only suffered super fish oil injuries.'
    },
    {
      pun: 'A group of kindergartners is called a migraine.'
    },
    {
      pun: 'After Tuesday, even the calender goes wtf.'
    },
    {
      pun: 'Digging tunnels is a boring job.'
    },
    {
      pun: 'Some people are like software updates, whenever I see them I think, \'Not now\'.'
    },
    {
      pun: 'If an angel statue is removed from a fountain, does that make it a sans seraph font?'
    },
    {
      pun: 'The only way to be great at golf is to be subpar.'
    },
    {
      pun: 'Jokes about socialism only work if everyone gets them.'
    },
    {
      pun: 'If a parsley farmer gets sued, can they garnish his wages?'
    },
    {
      pun: 'Two construction workers had a stairing contest.'
    },
    {
      pun: 'I\'ve grown to hate low ceilings.'
    },
    {
      pun: 'I\'m giving away a bag of broken yo-yos - no strings attached!'
    },
    {
      pun: '\'We need to talk\', thought the caveman.'
    },
    {
      pun: 'There are so many scams on the Internet these days and for $19.95, I can show you how to avoid them!'
    },
    {
      pun: 'The first 5 days after the weekend are the hardest.'
    },
    {
      pun: 'Experience is what you get when you didn\'t get what you wanted.'
    },
    {
      pun: 'What would the media do if there was ever a scandal about a gate?'
    },
    {
      pun: 'Space rocks taste better than Earth rocks because they are a little meteor.'
    },
    {
      pun: 'With great power, comes great electricity bills.'
    },
    {
      pun: 'Broke my personal record for most consecutive days lived!'
    },
    {
      pun: 'Vodka might not be the answer, but it\'s worth a shot.'
    },
    {
      pun: 'I wonder if my vet\'s receptionist realises how many people\'s passwords she knows?'
    },
    {
      pun: 'Dogs can\'t operate an MRI, but catscan.'
    },
    {
      pun: 'If you bring up plastic surgery in Hollywood, no one raises an eyebrow.'
    },
    {
      pun: 'A slice of apple pie is $2.50 in Jamaica and $3.00 in the the Bahamas -- those are the pie rates of the Caribbean.'
    },
    {
      pun: 'Everyone\'s brave until a cockroach starts flying.'
    },
    {
      pun: 'I went to a mime party... They did unspeakable things.'
    },
    {
      pun: 'It\'s okay password, I\'m insecure too.'
    },
    {
      pun: 'Plateaus are the highest form of flattery.'
    },
    {
      pun: 'Is it just me or are there any other anagrams of em?'
    }
]

app.listen(PORT, () => console.log(`API 🟢`))

app.get('/puns', (req, res) =>{
    res.status(200).send(puns)
  })