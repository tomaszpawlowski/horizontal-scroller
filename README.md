# horizontal-scroller
Simple javascript manipulation to achieve horizontal scroll instead of vertical one.
Function is working only for elements with *horizontalScroll* class name. 
Function handle mouse scroll event and change direction of scroll to horizontal one. So scrolling down will move content right and scroll up will move content left.
## requirments 
- horizontall scroll element must have *horizontalScroll* class
- horizontal scroll element must be base on X axis content flow; flex row for example
- I suggest to hide Y axis for element overflow handling
### tier one goals of script
- [x] functionality only for class name '*horizontalScroll*'
- [x] content move horizontally based on vertical scroll event from mouse
- [ ] natural scroll of page have to be blocked till scroll achieve end of content space
### second tier goals
- [ ] scroll nesting handleing - when aditional scroll occurs (vertical for example) in horizontal scrolled element, deeper scroll have to be handled insted of horizontall till deeper achive edge of own space.
- [ ] multi browser edge scenarios - for example safari UI movement during vertical scroll
