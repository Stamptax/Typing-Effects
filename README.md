# **What is this this?**
### This is a React component used to achieve typing effects, self-explanatory name

# **How to use this?**
1. Go to the root folder of your project
2. Then open with Terminal, install GSAP with ```npm install gsap```
3. Download the js file into your project
4. Import it as a normal React component
5. Passing texts as a prop, for example: ```<TypingEffects staticContent='Hellow' dynamicContent='world !' />``` , the string "world !" will be displayed char by char just like someone is typing it 

# **Customisation**
### there are many props:
1. colour: default colour is black, use it like ```<TypingEffects colour='white' />``` or ```<TypingEffects colour='yellow' />```, etc. I suppose it works whether you installed Tailwind CSS or not
2. staticContent: default content is '', no content. This part will not be displayed char by char  ```<TypingEffects staticContent='Hello' />```
3. dynamicContent: default content is '', no content. This part will be displayed char by char  ```<TypingEffects staticContent='World !' />```
4. yoyo: default state is false, turn it on like ```<TypingEffects yoyo={true} />```. when it's turned on, you dynamic text will be displayed and deleted char by char
5. cursorStyle: default style is '_', change it to whatever you like, for instance  ```<TypingEffects cursorStyle='|' />```
6. animationDelay: default interval is 0 second, means the animation will be played immediately after your web is loaded. So maybe you could set it to 1 or 1.5
7. repeat: default 0, means the animation will not repeat. if you wants the animation to repeat 3 times then go repeat={3}, 4 times go repeat={4}. **-1 for infinite**
8. repeatDelay: default 0, the interval between each repeat in second
9. duration: default 1, how long your animation is going to last is determined by this, in second

# **It's a very simple and straightforward toy component, basically a lazy pack GSAP for myself or someone in need**
