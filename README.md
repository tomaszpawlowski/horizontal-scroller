# horizontal-scroller
Simple javascript manipulation to achieve horizontal scroll instead of vertical one.
## goal
Function will handle mouse scroll event and change direction of scroll to horizontall one. So scrolling down will make move to right and scroll up will move content to left. 
### tier one goals of script
- [] functionality only for specified class name
- [] content move horizontally based on vertical scroll event from mouse
- [] natural scroll of page have to be blocked till scroll achieve end of content space
### second tier goals
- [] scroll nesting handleing - when aditional scroll occurs (vertical for example) in horizontal scrolled element, deeper scroll have to be handled insted of horizontall till deeper achive edge of own space.
- [] multi browser edge scenarios - for example safari UI movement during vertical scroll
