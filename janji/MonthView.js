/// <reference path="Scripts/jsplanner.d.ts" />

var p = MindFusion.Scheduling;

var calendar = new p.Calendar(document.getElementById("calendar"));
calendar.currentView = p.CalendarView.SingleMonth;
calendar.theme = "earth";

// attach a handler - when a calendar item is created
calendar.itemCreated.addEventListener(handleItemCreated);

function handleItemCreated(sender, args) {
    var item = args.item;
    item.startTime = p.DateTime.now().addMinutes(2);
    item.endTime = p.DateTime.addHours(item.startTime, 2);

    var reminder = new p.Reminder();
    reminder.message = item.subject;
    reminder.type = p.ReminderType.Leading;
    reminder.timeInterval = p.TimeSpan.fromMinutes(1);
    item.reminder = reminder;
}

// attach a handler - when a calendar item is created
calendar.itemCreated.addEventListener(handleItemCreated);

function handleItemCreated(sender, args) {
   
    Email.send({
        Host : "mail.myserver.my_domain_extension",
        Username : "my_user_name",
        Password : "my_password",
        To : 'my_mail@mydomain.com',
        From : "sender_email@mydomain.com",
        Subject : "Don't forget about this event",
        Body : "Reminder for " + args.item.subject,
    }).then(
      message => alert(message)
    );

}
calendar.render();