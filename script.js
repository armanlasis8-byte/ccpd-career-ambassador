const API_URL =
    "https://script.google.com/macros/s/AKfycbwjceGjvvDV7vUUJDW8P_B9Tv3IAz89QBgpW9j1dqHJidQKedEHU_yDRKgR1As7atJ_PQ/exec";


const form =
    document.getElementById("checkinForm");


form.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const studentName =
            document.getElementById(
                "studentName"
            ).value;


        const email =
            document.getElementById(
                "email"
            ).value;


        const ambassador =
            document.getElementById(
                "ambassador"
            ).value;


        const selectedEvent =
            document.getElementById(
                "event"
            ).value;


        const data = {

            studentName:
                studentName,

            email:
                email,

            ambassador:
                ambassador,

            event:
                selectedEvent

        };


        try {

            await fetch(
                API_URL,
                {
                    method: "POST",

                    body:
                        JSON.stringify(data)
                }
            );


            document.getElementById(
                "message"
            ).innerHTML =
                "<strong>Check-in successful!</strong>";


            form.reset();

        }

        catch (error) {

            document.getElementById(
                "message"
            ).innerHTML =
                "Something went wrong. Please try again.";

            console.error(error);

        }

    }
);