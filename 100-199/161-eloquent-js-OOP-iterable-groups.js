class Group {
  constructor() {
    this.members = [];
  }
  add(value) {
    if (!this.has(value)) this.members.push(value);
  } 
  delete(value) {
    this.members = this.members.filter(member => member !== value);
  }
  has(value) {
    return this.members.includes(value)
  }
  static from(collection) {
    let group = new Group();
    Array.from(collection).forEach(member => group.add(member))
    return group
  }
}

Group.prototype[Symbol.iterator] = function() {
  let self = this;
  let count = 0;
  return {next: function() {
                  return {
                    value: self.members[count++],
                    done: (count > self.members.length)
                  }
                }
         }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

