const participants = [];

function addToArray(event) {
    event.preventDefault();
    document.getElementById("errorMessage").innerHTML = "";
    if ((document.getElementById("participant").value).length < 3) {
        document.getElementById("errorMessage").innerHTML = "Bitte Eingaben Überprüfen - Der Name muss mindestens 3 Buchstaben haben"
    } else {
        document.getElementById("participantsList").innerHTML = "";
        participants.push(document.getElementById("participant").value);

        let list = document.createElement('ul');


        for (let i = 0; i < participants.length; i++) {
            let listItem = document.createElement('li');

            listItem.appendChild(document.createTextNode(participants[i]));

            list.appendChild(listItem);

            document.getElementById("participantsList").appendChild(listItem);
        }

        document.getElementById("numberOfParticipants").innerHTML = participants.length;

    }
}

function deleteFromArray(event) {
    event.preventDefault();
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("participantsList").innerHTML = "";
    participants.pop();

    let list = document.createElement('ul');


    for (let i = 0; i < participants.length; i++) {
        let listItem = document.createElement('li');

        listItem.appendChild(document.createTextNode(participants[i]));

        list.appendChild(listItem);

        document.getElementById("participantsList").appendChild(listItem);
    }

    document.getElementById("numberOfParticipants").innerHTML = participants.length;
}

