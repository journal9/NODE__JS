function getRandomElement<T>(items: T[], index: number): T {
    return items[index]
}

let score = getRandomElement([1, 2, 3, 4, 5, 7, 8], 4)
console.log(score)

let grade = getRandomElement(['A', 'B', 'C', 'D'], 2)
console.log(grade)

function combineObjects<U extends object, V extends object>(object1: U, object2: V) {
    return {
        ...object1,
        ...object2,
    };
}

let batch = combineObjects({
    'name': 'science'
}, {
    'strength': 67
})
console.log(batch)

//generic interfaces

interface Collection<T>{
    add(a:T):void;
    remove(a:T):void
}

class List<T> implements Collection<T>{

    constructor(private items:T[]){}

    add(a:T):void{
        this.items.push(a);
    }
    remove(a:T):void{
        var ldx:number = this.items.indexOf(a)
        if(ldx>-1){
            this.items.splice(ldx,1);
        }
    }
}

let list = new List([2,5,7])
list.add(4)
list.add(10)
list.add(6)
list.add(3)
list.remove(6)
console.log(list)

//generic classes

class Stack<T>{

    constructor(private stack:T[], readonly size:number=10){}

    isEmpty():boolean{
        return this.stack.length===0
    }
    isFull(){
        return this.stack.length===this.size
    }
    pop(): T {
        if (this.stack.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.stack.pop();
    }
    push(a:T):void{
        if(this.stack.length===this.size){
            throw new Error('Stack is full!')
        }
        this.stack.push(a)
    }

}

let st = new Stack<number>([1]);

while (!st.isFull()) {
    let n = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(`Pushed ${n} into the stack.`)
    st.push(n);
}
while (!st.isEmpty()) {
    let n = st.pop();
    console.log(`Popped ${n} from the stack.`);
}