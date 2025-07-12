function PersonalAssistant(name)
{
    this.name = name;
    this.tasks = [];
    this.mood = "neutral";
}

PersonalAssistant.prototype.addTask = function (task)
{
    this.tasks.push(task);
    console.log(task + " added to the list")
}

PersonalAssistant.prototype.completeTask = function ()
{
    console.log(this.tasks[0] + " is completed");
    this.tasks.shift();
    console.log("New task is: " + this.tasks[0]);
}

PersonalAssistant.prototype.reportMood = function ()
{
    console.log("Current Mood: " + this.mood);
}

PersonalAssistant.prototype.setMood = function (mood)
{
    this.mood = mood;
    console.log("Current Mood set to: " + this.mood);
}

PersonalAssistant.prototype.getList = function ()
{
    console.log(this.tasks.length + " tasks left...")
    console.log("TODO list \n-", this.tasks.join("\n- "));
}

//test
let pa = new PersonalAssistant("Yakup");

pa.reportMood();
pa.addTask("Homework 1");
pa.getList();
pa.addTask("CS81 QUIZ 6");
pa.addTask("Laundry");
pa.addTask("Grocery");
pa.getList();
pa.completeTask();
pa.completeTask();
pa.getList();
pa.setMood("Happy");
pa.reportMood();


