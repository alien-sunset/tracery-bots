
window.addEventListener("load", () => {
  
const prompts =

{
"origin": ["#prompt#"],

"prompt":[
  "#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","#prompts#","Brain: \"Pinky, are you thinking what I'm thinking?\" \nPinky: \"I think so brain, but if #subject# then how will #subject# work?\""
  ],

"prompts":[
  "Ever wanted to write about or draw #subject#?",
  "Ever think about drawing or writing about #subject#?",
  "Here's a prompt for you:\n#subject#",
  "Hey! I have an idea, what do you think about #subject#?",
  "Hey! I have an idea, what do you think about #subject#?",
  "Prompt number #numbers#:\n#subject#",
  "Today's thought:\n#subject#",
  "hmmm...\n#subject#\n...naaah...or...maybe?",
  "Weird idea, I know, but what about #subject#?",
  "Weird idea, I know, but what about #subject#?",
  "your moment of zen:\n#subject#",
  "your moment of zen:\n#subject#",
  "to sum up...\n#subject# \nthank you for coming to my TED Talk.",
  "in my opinion, #subject# sounds really awesome!",
  "in my opinion, #subject# sounds really awesome!",
  "for your issue, I would recommend #subject#",
  "let's embark on a journey through #subject#",
  "imagine a world where #subject# was a good idea",
  "let's take a moment to reflect on the impact of #subject#",
  "by the end of this session, I hope you will all know a little more about #subject#...",
  "to set the stage...#subject#",
  "okay, so thats #subject#. but what about #subject#?",
  "for instance, #subject#",
  "as an illustration of my point, let's discuss #subject#",
	"as you can see from this infographic, #subject#\n...what? oh! hmm, the graphic seems to be missing, does someone want to take care of that?",
	"as you can see from this infographic: #subject#\n...what? oh! hmm, the graphic seems to be missing, does someone want to take care of that?"
  ],

"numbers":["#number##number##number##number#","#number##number##number#","#number##number##number##number##number#"],
"number": ["1","2","3","4","5","6","7","8","9","0"],
      
"subject": [
  "#animal.a# #verb#",
  "#animal.a# #verb#",
  "#animal.a# #verb# while eating #afoods#",
  "#agent.a# eating #afoods# #atplace#",
  "#agent.a# #verb# while #verb# with #somethings#",
  "#agent.a# #verb# #atplace#",
  "#agent.a# #verb# #atplace#",
  "#agent.s# #atplace#!",
  "#agent.a# #verb# #atplace# with #somethings#",
  "#agent.a# #atplace# with #somethings#",
  "#agent.s# #atplace# with #somethings#",
  "#theme#: #somethings# #atplace#",
  "#theme#: #somethings# #atplace#",
  "#theme#: #somethings# and #somethings# #atplace#",
  "#theme#: #somethings# and #somethings# #atplace#",
  "#theme#, but #somethings#",
  "#theme#, but #somethings#",
  "#theme#, but #somethings# with #aSomething#",
  "#theme#, but #somethings# #atplace#",
  "#somethings# and #somethings#: #theme#",
  "#somethings# and #somethings#: #theme#",
  "#something# #pObjects# and/or #sObject# #somethings#",
  "#animal# #pObjects# and/or #sObject# #animal.s#",
  "#singularfood# #somethings#",
  "#animal.a# #agent#",
  "#aSomething# #something#",
  "#something# #somethings#",
  "#place# #agent.s#!",
  "#aSomething# #place#"
  ],
      
"agent": ["#person#", "#animal#"],
      
"person": [
  "actor","aerobics instructor","airplane pilot","alchemist","alewife","anesthesiologist","antagonist","archaeologist","archivist","art director","art teacher","artist","assassin","astronaut","baker","ballerina","banshee","barber","bard","bartender","bellhop","butcher","captain","CEO","changeling","chauffeur","chef","clown","coachman","cowboy","curator","cyclops","daemon","dancer","dentist","detective","doctor","dragoon","dressmaker","drummer","dryad","elder","enemy","fairy","family member","farmer","fireman","fletcher","footman","Frankenstein's monster","friend","funeral director","general","ghost","ghost","giant","gnome","goddess","gorgon","harpy","healer","hipster","hunter","idiot","impossible astronaut","inspector","janitor","jester","jeweler","journeyman","joker","judge","king","knight","lawyer","librarian","lifeguard","locksmith","machinist","mad scientist","mage","magician","magistrate","maid","mail clerk","manager","mathematician","mechanic","mermaid","model","mothman","motorcycle mechanic","mummy","necromancer","ninja","nurse","office clerk","paramedic","parent","pharmacist","philosopher","photographer","pirate","plumber","politician","postmaster","princess","privateer","professional mourner","professor","protagonist","psychopomp","queen","referee","robot","runemaster","sailor","samurai","scarecrow","scientist","scrivener","shapeshifter","sheriff","sidekick","singer","soda jerk","soothsayer","stick figure","store clerk","sumo wrestler","superhero","surgeon","tailor","tea lady","teacher","teamster","time traveler","tour guide","tracker","umpire","undertaker","vampire","waiter","waitress","warrior","weaver","werewolf","witch","wizard","woodworker","wraith","zombie"
  ],
      
"animal": [
  "aardvark","alien","alligator","alpaca","angora goat","antelope","ape","armadillo","baboon","badger","basilisk","bat","bear","beaver","bee","bird","bison","boar","buffalo","bull","bunny","butterfly","camel","canary","capybara","cat","centaur","cerebus","chameleon","cheetah","chimpanzee","chinchilla","chipmunk","cicada","cougar","cow","coyote","crab","crocodile","crow","deer","dingo","dinosaur","dog","dolphin","donkey","dragon","dromedary","duck","eagle","elephant","elf","elk","emotional support chicken","ewe","faun","ferret","finch","fish","flamingo","fox","frog","gazelle","gila monster","giraffe","gnu","goat","goldfish","goose","gopher","gorilla","grizzly bear","ground hog","guinea pig","hamster","hedgehog","hen","hippopotamus","hog","horse","hydra","hyena","ibex","iguana","impala","jackal","jaguar","jellyfish","kangaroo","kingfisher","koala","lamb","lemur","leopard","lion","lizard","llama","lobster","lynx","mandrill","marmoset","mink","minotaur","mole","mongoose","monkey","monster","moose","moth","mountain goat","mouse","mule","muskrat","mustang","mynah bird","newt","ocelot","octopus","opossum","orangutan","oryx","otter","owl","ox","panda","panther","parakeet","parrot","pegasus","pheonix","pig","pigeon","pixie","platypus","polar bear","porcupine","porpoise","possum","prairie dog","pufferfish","puma","puppy","rabbit","raccoon","ram","rat","raven","red panda","reindeer","reptile","rhinoceros","rooster","salamander","sea monster","sea serpent","seahorse","seal","shark","sheep","shrew","silver fox","skunk","sloth","snail","snake","sparrow","spider","squirrel","stag","tadpole","tapir","tiger","toad","troll","turkey vulture","turtle","unicorn","walrus","warthog","weasel","whale","wildcat","wolf","wolverine","wombat","woodchuck","worm","yak","zebra"
  ],
      
"atplace": ["in #inAplace.a#", "on #onAplace.a#", "#inThePlace#"],
"place": ["#inAplace#", "#onAplace#", "#thePlace#"],
"inAplace": [
  "abbey","alleyway","arcade","bakery","bathtub","bazaar","beauty parlor","belfry","bookstore","car","carnival","castle","church basement","circus","citadel","clearing","coffee shop","comfy chair","corn maze","cozy corner","cozy cottage","desert","deserted city","dungeon","farmer's market","field","five and dime","forest glade","forest","fountain","furniture store","garden","graveyard","grocery store","haunted house","hidden grotto","hideout","hollow tree","hospital","hotel","jungle","keep","kitchen","labyrinth","library","meadow","motel","ocean","parking lot","pawn shop","phone booth","pub","puddle","river","school campus","seven eleven","snow globe","square","summoning circle","swamp","swimming pool","temple","time machine","tree house","treetop village","underwater cave","underwater kingdom","village","wilderness","woods"
  ],
"onAplace": ["beach","boardwalk","boat","bus","city street","cobblestone path","dirt road","highway","hillside","island","mountaintop","ocean","plane","roof","ship","starship","tightrope"],
"inThePlace": ["at summer camp","at the north pole","in outerspace","in the shower","in the void","inside a dream","inside a fairy ring","on the catwalk","on the moon","under the sea"],
"thePlace": ["dream","fairy","moon","sea","shower","space","summer camp","void"],
      
"somethings": ["#animal.s#", "#foods#", "#person.s#", "#pObjects#"],
"something": ["#animal#", "#singularfood#", "#person#", "#sObject#"],
"aSomething": ["#animal.a#", "#afood.a#", "#person.a#", "#aObject#"],
      

"afoods":["#afood.a#","#foods#","#foods#"],
"afood": [
  "apple","bagel","baguette","banana split","banana","bowl of cereal","bowl of oatmeal","bowl of peas","bowl of ramen","bowl of rice","bowl of soup","brownie","burrito","carrot","cheeseburger","chocolate bar","cookie","croissant","cup of yogurt","cupcake","donut","fortune cookie","granola bar","hot dog","jaffa cake","kebab","lemon","lollipop","mushroom","onion ring","orange","pancake","peanut butter sandwich","peanut","plate of pasta","pretzel","salad","sandwich","sausage","scone","slice of banana bread","slice of cake","slice of cheesecake","slice of pizza","slice of watermelon","taco"
  ],
"foods": [
  "apples","bacon","bagels","banana bread","bananas","bread","breakfast","brownies","burritos","cake","candy","cantaloupe","carrots","cereal","cheese","cheesecake","cherries","chocolate bars","coconut","cookies","croissants","cupcakes","dessert","dinner","donuts","focaccia","fortune cookies","french fries","french toast","granola bars","green eggs and ham","hamburgers","honeydew melon","hot dogs","ice cream","jaffa cakes","jello","kebabs","lasagna","lemons","lollipops","lunch","mac and cheese","mashed potatoes","mochi","mushrooms","oatmeal","onion rings","oranges","pad thai","pancakes","pasta","peanuts","peas","pie","pineapple","pizza","pretzels","ramen","rhubarb","rice","roti","salad","sandwiches","sausages","scones","snacks","soup","sushi","tacos","trail mix","watermelon","yogurt"
  ],
"singularfood": [
  "apple","bacon","bagel","baguette","banana bread","banana split","banana","breakfast","brownie","burrito","cake","candy","candy","cantaloupe","carrot","cereal","cheese","cheeseburger","cheesecake","cherry","chocolate bar","cookie","cupcake","dessert","dinner","donut","focaccia","fortune cookie","french toast","granola bar","green eggs and ham","honey","honeydew","hotdog","ice cream","jaffa cake","jello","kebab","lasagna","lemon","lollipop","lunch","mac and cheese","mochi","mushroom","oatmeal","onion ring","orange","pad thai","pancakes","pasta","peanut butter sandwich","peanut","pie","pineapple","pizza","potato","pretzel","ramen","rhubarb","rice","roti","salad","sandwich","sausage","scone","soup","sushi","taco","trail mix","vegetable","watermelon","yogurt"
  ],
      
"verb": [
  "assembling IKEA furniture","attending a masquerade","baking a cake","breakdancing","bringing in the laundry","caring for an orphaned animal","carving a jack-o-lantern","climbing a tree","cooking a romantic dinner","dancing with #agent.a#","decorating for a party","doing stress management exercises","dreaming of #afoods#","dreaming of #verb#","dreaming of #verb#","dreaming of #verb#","driving a car","driving a monster truck","fencing with #agent.a#","foraging for food","getting some shut-eye","glowing brightly","jumping rope","knitting a hat","laughing out loud","loading/emptying the dishwasher","making a sweater for #agent.a#","making music","making shopping lists","moving furniture","piloting a rocketship","playing an instrument","playing chess with #agent.a#","playing chess","playing soccer","putting away the groceries","putting up Christmas/decorative lights","reading tarot cards for #agent.a#","riding a horse","rolling down a hill","running a marathon","setting up menorah candles","starting a quest","studying botany","swimming in the ocean","taking a bath","taking pets for a walk","throwing a party with #agent.a#, #agent.s#, and #agent.a#","throwing a party","visiting an animal shelter to select a pet","weaving a scarf","catching the bus","changing a tire","cleaning the attic","coloring a picture","competing in a pie eating competition","delivering a package","doing laundry","doing the dishes","folding laundry","foraging for mushrooms","getting a tattoo","getting their hair cut","giving a dog a bath","going for a run","going to the post office","grocery shopping","ironing clothes","listening to music","making a pie","painting their nails","petting a cat","playing cards with #agent.s#","playing cards","playing mini golf","rearranging bookshelves","relaxing by the fire","setting the table","sharpening knives","shoveling snow","sitting in the waiting room","taking a nap","trying on clothes","waiting in line","watering their houseplants","writing letters"
  ],
      
"aObject": ["#object.a#", "#object.a#", "#object.a#", "#aOneObject.a#"],
"sObject": ["#object#", "#object#", "#object#", "#oneObject#"],
"pObjects": ["#object.s#","#object.s#","#object.s#","#object.s#","#objects#"  ],
"object": [
  "acorn","airplane","amulet","antler","ax","backpack","bag","basket","bathtub","bed","bicycle","bin","blanket","board game","bone","book","boombox","bottle","bouquet","bow","bread","broom","broomstick","brush","bubble","building","cactus","calculator","calendar","camera","camper","candle","cane","cape","castle","cauldron","cellphone","chair","chalk","chime","clipboard","clock","closet","cloud","cloud","coin","computer","computer","crayon","crook","crystal","cup","cupboard","diner","disguise","doll","doorway","dress","drum set","dumbbell","earring","earth","easel","egg","emoji","emotional support chicken","envelope","eye","fan","fern","ferris wheel","fire","fireplace","flower","fossil","frame","fruit","gear","glass","glove","guitar","hand","hanger","hat","headphone","herb","hillside","hood","horn","houseplant","jacket","kazoo","kettle","key","keyboard","knife","lake","lamp","lantern","luggage","mask","microphone","mirror","moon","mountain","mug","muppet","mushroom","necklace","ocean","oven","padlock","paint brush","passport","pattern","pearl","pencil sharpener","pencil","pencil","perfume","phone","pillow","pine cone","plant","plate","playing card","pole","potion","pumpkin","puppet","purse","radio","rainbow","razor","recipe","reflection","refrigerator","remote","ring","river","robe","rose","rug","scale","scarf","scissor","scroll","shell","shirt","shoe","shopfront","signal","skull","sofa","speaker","spell book","spoon","spotlight","spotlight","spyglass","staff","stapler","star","stew pot","stick","stool","stove","suitcase","sunbeam","sweater","sword","table","tablet","teacup","teapot","temple","tent","thermometer","toaster","tome","towel","toy","tray","treasure chest","treasure map","tree house","tree stump","tree","typewriter","umbrella","unicycle","vase","void","wallet","warning","watch","wildflower","wing"
  ],
"objects": ["berries","glasses","knives","leaves","mice","poppies","sunglasses","teeth"],
"oneObject": ["berry","glasses","knife","leaf","mouse","poppy","stained glass","sunglasses","tooth"],
"aOneObject": ["berry","knife","leaf","mouse","pair of glasses","pair of high heels","pair of sunglasses","poppy","stained glass","tooth"],
      
"theme": [
  "a bargain with the devil","a confusion of tongues","a contest between the sun and moon","a different planet","a fairytale reimagined","a parliament of birds","a self portrait","a unique prohibition","abstract emotions","absurd misunderstandings","absurd wishes","absurdity","accidental encounters","accidental healing","adaptability","animal warfare","animal weddings","appearance versus reality","art movements","assigners of tasks","association with fools","astral projection","banquets of the gods","bargains and promises","beasts of good omen","beauty and the beast","celebration","celestial bodies","chaos and order","childhood memories","children's stories","cold and hot","colors and textures","comedy and tragedy","coming of age","companionship as salvation","consolation in misfortune","cultural festivals","cyberpunk","darkness and light","deceptive bargains","deeds punished","deeds rewarded","dinosaurs and prehistoric life","disenchantment","dreamscapes","dystopia","energy and movement","escape by deception","escapes and pursuits","exploration","extraordinary human beings","extraordinary objects and places","facing darkness","fairies and elves","fairies and mortals","fairyland","false accusations","family","famous artworks reimagined","fantasy and sci-fi","fantasy landscapes","fashion and style","fatal deception","favorable traits of character","fear and courage","festivities","finding strength from within","folk tales","food and cuisine","foolish bargains","friendship","future visions","gains and losses","galaxies","ghost towns","gifts from fairies","growth and decay","gullible fools","health and well-being","helpful animals","heroes and villains","historical figures","historical romance","human connection","humiliated or baffled lovers","humor and satire","hypocrites","identification by tokens","illusions","impossible or absurd tasks","industrialization and the conformity of man","inquisitive fools","inventions","journey to the lower world","journey to the otherworld","journey to the upper world","judgments and decrees","legends","letters and words","lgbt rights","lies and exaggerations","life in miniature","life's inequalities","local views","logical absurdities","love and loss","love and relationships","luck and fate personified","lucky accidents","luxury and decadence","machines and industry","magic and sorcery","magic flight","magic knowledge","magic object found","magic objects","magic powers","magic sight and hearing","magic strength","magic tree","magical realism","marvelous cures","masquerade","mazes","memories","metamorphosis","metaphorical riddles","modernism","modesty brings reward","mountains and valleys","movies and theater","movies and tv","music and rhythm","mythical animals","mythical birds","mythical creatures","naming the stars","nature as beauty","one thing mistaken for another","origin of the gods","outer space","pantheons","paradise lost ","paradoxical tasks","parallel worlds","parenthood","plants and flowers","poetry in motion","pretended virtue","pride brought low","prophecies","quests","quests for the unique","quests to other realms","quests to the other world","rebellion","reflection","repartee","rewards and punishments","rich men, beggars, slaves","righteous justice","robots and ai","royalty and nobility","sacred animals","science and discovery","seduction","sensuality","serenity","shapes and patterns","ships and sailing","short-sighted judgments","siblings","sleep and wakefulness","social issues","solar system","solitude","space adventure","spirits and demons","sports and games","steampunk","storms and weather","street art","strength in unity","success of the unpromising hero","supernatural helpers","surrealism","symbolic interpretations","symbols and icons","tall tales","teacher and pupil","technology vs. nature","temptation and destruction","tests of cleverness","tests of guilt or innocence","tests of truth","the acquisition and possession of wisdom","the acquisition of culture","the acquisition of wisdom and learning","the animal kingdom","the arctic and antarctic","the beauty of simplicity","the capriciousness of luck","the cheater cheated","the circus","the cosmic egg","the creation of the stars","the desert","the doorkeeper of hell","the election of the king of birds","the elements","the emptiness of attaining a false dream","the environment","the five senses","the four ages of the world","the guardian of treasure","the heart of the dragon","the heartbreak of betrayal","the hierarchy of worlds","the humility of the great","the inner struggle of faith","the king of the animals","the lonely creator","the loss of magic powers","the marriage of earth and sky","the moon as a person","the nature of gullibility","the nature of luck and fate","the nature of rewards","the nature of the sky","the ocean's depths","the one forbidden thing","the origin and nature of clouds","the origin of language","the passage of time","the power and significance of names","the power of habit","the powers of the dragon","the primary elements of the universe","the quest for discovery","the reign of peace and justice","the seasons","the submarine and subterranean world","the supernatural","the temporary nature of physical beauty","the theft of fire","the treasure trove","the triumph of the weak","the value of industry","the victorious youngest child","the ways of luck and fate","the wilderness","the wings of the dragon","time travel","together and apart","trades and professions","tradition","transformation","travel and adventure","treacherous lovers","tropical paradise","under the sea","unearthing hidden treasure","unfavorable traits of character","unlucky accidents","urban vs. rural","utopia","valuable secrets learned","verbal and nonverbal communication","villains and traitors","vintage elegance","vows and oaths","wagers and gambling","war and peace","wise animals","working class struggles"
  ]
  };

  var grammar = tracery.createGrammar(prompts);
 grammar.addModifiers(tracery.baseEngModifiers);

  function postPrompt() {
    var result = grammar.flatten("#origin#");
    document.getElementById("prompt").innerHTML = result;
  }

  postPrompt(); //this outputs the first story

  document.getElementById("newPrompt").addEventListener("click", function() {
    var result = grammar.flatten("#origin#");
    document.getElementById("prompt").innerHTML = result;
  });
});
      