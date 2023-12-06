/* Name: Sid Shankar
Email: siddarth_shankar@student.uml.edu 
This file is responsible for generating a mult table dynamically
using a generateTable functuon, and it also checks to make sure that 
the numbers follow the parameters. Otherwise, an error message pops up
asking the user to put in valid parameters.  */

function validation() {
    console.log("Function called");
    $("#inputForm").validate({
        rules: {
            num1: {
                required: true,
                range: [-50, 50]
            },
            num2: {
                required: true,
                range: [-50, 50]
            },
            num3: {
                required: true,
                range: [-50, 50]
            },
            num4: {
                required: true,
                range: [-50, 50]
            }
        },
        messages: {
            num1: {
                required: "Please enter a number",
                range: "Enter a number between -50 and 50"
            },
            num2: {
                required: "Please enter a number",
                range: "Enter a number between -50 and 50"  
            },
            num3: {
                required: "Please enter a number",
                range: "Enter a number between -50 and 50"
            },
            num4: {
                required: "Please enter a number",
                range: "Enter a number between -50 and 50"
            }
        },
        errorPlacement: function(error, element) {
            // Place the error message in the error-message-container
            error.appendTo("#error-message-container");
        },
        submitHandler: function(form) {
            var num1 = parseInt($("#num1").val());
            var num2 = parseInt($("#num2").val());
            var num3 = parseInt($("#num3").val());
            var num4 = parseInt($("#num4").val());

            // Check if input values are within bounds
            if (
                isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) ||
                num1 < -50 || num1 > 50 || num2 < -50 || num2 > 50 ||
                num3 < -50 || num3 > 50 || num4 < -50 || num4 > 50
            ) {
                // Display error message on the screen
                $("#error-message-container").text("Please enter valid numbers between -50 and 50 inclusive.");
                return; // Exit the function if values are out of bounds
            }

            // Clear any existing error message
            $("#error-message-container").text("");

            // Call generateTable if validation is successful
            generateTable();
        }
    });
}

$(document).ready(function() {
    validation(); // Initialize form validation

    document.getElementById("inputForm").addEventListener("submit", function(event) {
        console.log("Submitted");
        event.preventDefault();
        // The form submission is now handled within the submitHandler
    });
});



function generateTable() {
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());
    var num3 = parseInt($("#num3").val());
    var num4 = parseInt($("#num4").val());

    // Check if input values are within bounds
    if (
        isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) ||
        num1 < -50 || num1 > 50 || num2 < -50 || num2 > 50 ||
        num3 < -50 || num3 > 50 || num4 < -50 || num4 > 50
    ) {
        alert("Please enter valid numbers between -50 and 50 inclusive.");
        return; // Exit the function if values are out of bounds
    }
    // Generate multiplication table
    var tableContent = '<table>';

    // Create the header row with horizontal numbers
    tableContent += '<tr><td></td>';
    for (var j = num3; j <= num4; j++) {
        tableContent += '<th>' + j + '</th>';
    }
    tableContent += '</tr>';
    for (var i = num1; i <= num2; i++) {
        tableContent += '<tr>';
        tableContent += '<th>' + i + '</th>';
        for (var j = num3; j <= num4; j++) {
            var product = i * j;
            var cellClass = '';

            // Check if the number is even
            if (product % 2 === 0) {
                cellClass += 'even ';
            }

            // Check if the number is negative
            if (product < 0) {
                cellClass += 'negative';
            }

            tableContent += '<td class="' + cellClass.trim() + '">' + product + '</td>';
        }
        tableContent += '</tr>';
    }

    tableContent += '</table>';

    // Save the table content to sessionStorage
    sessionStorage.setItem('tableContent', tableContent);

    // Redirect to a new page
    window.location.href = 'table.html';
}

// $("#myform").validate({
//     invalidHandler: function(event, validator) {
//       // 'this' refers to the form
//       var errors = validator.numberOfInvalids();
//       if (errors) {
//         var message = errors == 1
//           ? 'You missed 1 field. It has been highlighted'
//           : 'You missed ' + errors + ' fields. They have been highlighted';
//         $("div.error span").html(message);
//         $("div.error").show();
//       } else {
//         $("div.error").hide();
//       }
//     }
//   });

//   $("#myform").validate({
//   ignore: ".ignore"
// });
