function PersonalAssistant(name)
{
    this.name = name;
    this.tasks = [];
    this.mood = "";
}

PersonalAssistant.prototype.addTask = function (task)
{
    this.tasks.push(task);
}

PersonalAssistant.prototype.completeTask = function ()
{
    console.log(this.tasks[0] + " is completed"+ "\nNext: ")
    this.tasks.shift();
    console.log(this.tasks[0]);
}

PersonalAssistant.prototype.reportMood = function ()
{
    return this.mood;
}

PersonalAssistant.prototype.setMood = function (mood)
{
    this.mood = mood;
}

PersonalAssistant.prototype.getList = function ()
{
    console.log("Todo:", this.tasks.join("\n- "))
}

//test
let pa = new PersonalAssistant(Yakup);

pa.addTask("Homework 1");
pa.addTask("CS81 QUIZ 6");
pa.addTask("Laundry");
pa.getList();
pa.addTask("Grocery");
pa.setMood("Happy");
pa.reportMood();
pa.completeTask();
pa.completeTask();
pa.getList();
