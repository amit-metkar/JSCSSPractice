$(document).ready(function () {
    function WebmailViewModel() {
        // Data
        var self = this;
        self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];

        self.chosenFolderId = ko.observable();

        self.chosenFolderData = ko.observable();

        self.chosenMailData = ko.observable();

        self.goToFolder = function (folder) {
            self.chosenFolderId(folder);
            $.get('http://learn.knockoutjs.com/mail', { folder: folder }, self.chosenFolderData);
        };

        self.goToMail = function (mail) {
            self.chosenFolderId(folder);
            $.get("/mail", { mailId: mail.Id }, chosenMailData);
        };

        self.goToFolder('Inbox');
    };
    //ko.applyBindings(new WebmailViewModel(), document.getElementById("dvWebmailMail"));
    ko.applyBindings(new WebmailViewModel(), $("#dvWebmailMail")[0]);
});