// constructor
function PersonalAssistant(name)
{
    this.name = name;
    this.tasks = [];
    this.mood = "neutral";
}

// push new elements to the array
PersonalAssistant.prototype.addTask = function (task)
{
    this.tasks.push(task);
    console.log(task + " added to the list")
}

// remove first element
PersonalAssistant.prototype.completeTask = function ()
{
    console.log(this.tasks[0] + " is completed");
    this.tasks.shift();
    console.log("New task is: " + this.tasks[0]);
}

// mood getter
PersonalAssistant.prototype.reportMood = function ()
{
    console.log("Current Mood: " + this.mood);
}

// mood setter
PersonalAssistant.prototype.setMood = function (mood)
{
    this.mood = mood;
    console.log("Current Mood set to: " + this.mood);
}

// print tasks array
PersonalAssistant.prototype.getList = function ()
{
    if(this.tasks.length == 0)
    {
        console.log("List is empty")
    }
    else if(this.tasks.length ==1)
    {
        console.log("Only " + this.tasks[0] + " left.")
    }
    else
    {
        console.log(this.tasks.length + " tasks left...")
        console.log("TODO list \n-", this.tasks.join("\n- "));
    }
}
    

//test
let pa = new PersonalAssistant("Yakup");

pa.reportMood();
pa.getList();
pa.addTask("Homework 1");
pa.addTask("CS81 QUIZ 6");
pa.addTask("Laundry");
pa.addTask("Grocery");
pa.getList();
pa.completeTask();
pa.completeTask();
pa.completeTask();
pa.getList();
pa.setMood("Happy");
pa.reportMood();


