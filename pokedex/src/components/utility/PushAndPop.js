export default async function PushPop (str, splitchar,  method) {
    // str: string to mutate 2) splitchar: the character from which to base our split method invocation 3) our method: 'push' or 'pop' 
    // push or pop takes our bg url [`/img/energy/energyNormal.png`] and adds the /img/ back onto it. 
    console.groupCollapsed()
    // this will chop off the first part of our url or add it back on 

    console.log('str')
    console.log(str)
    console.log(str.split(splitchar))
    // (4) ['', 'img', 'energy', 'energyPsychic.jpg'] just like the functionality from the other side. 

    console.log('method')
    console.log(method)
    console.groupEnd()
}

