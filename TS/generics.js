var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getRandomElement(items, index) {
    return items[index];
}
var score = getRandomElement([1, 2, 3, 4, 5, 7, 8], 4);
console.log(score);
var grade = getRandomElement(['A', 'B', 'C', 'D'], 2);
console.log(grade);
function combineObjects(object1, object2) {
    return __assign(__assign({}, object1), object2);
}
var batch = combineObjects({
    'name': 'science'
}, {
    'strength': 67
});
console.log(batch);
var List = /** @class */ (function () {
    function List(items) {
        this.items = items;
    }
    List.prototype.add = function (a) {
        this.items.push(a);
    };
    List.prototype.remove = function (a) {
        var ldx = this.items.indexOf(a);
        if (ldx > -1) {
            this.items.splice(ldx, 1);
        }
    };
    return List;
}());
var list = new List([2, 5, 7]);
list.add(4);
list.add(10);
list.add(6);
list.add(3);
list.remove(6);
console.log(list);
//generic classes
var Stack = /** @class */ (function () {
    function Stack(stack, size) {
        if (size === void 0) { size = 10; }
        this.stack = stack;
        this.size = size;
    }
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.stack.length === this.size;
    };
    Stack.prototype.pop = function () {
        if (this.stack.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.stack.pop();
    };
    Stack.prototype.push = function (a) {
        if (this.stack.length === this.size) {
            throw new Error('Stack is full!');
        }
        this.stack.push(a);
    };
    return Stack;
}());
var st = new Stack([1]);
while (!st.isFull()) {
    var n = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log("Pushed ".concat(n, " into the stack."));
    st.push(n);
}
while (!st.isEmpty()) {
    var n = st.pop();
    console.log("Popped ".concat(n, " from the stack."));
}
