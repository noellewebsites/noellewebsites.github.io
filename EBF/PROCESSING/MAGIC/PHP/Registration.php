<?php
ini_set('memory_limit','300M');
ini_set('auto_detect_line_endings',true);
$logfilename = "logs/Email.log" . date('D');
include('more.php');

$email = $_POST["email"];



    /* Check for a valid email address */
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = test_input($_POST["email"]);

    if ($_POST["email"] == "") {
        $emailMsg = "Email is required";
    }
    
    if ($email != "") {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailMsg = "$email is invalid.  Registratration incomplete.  Please try again.";
        }
    }

    if ($email != "") {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailMsg = "Registration complete.  Limit 1 free class per-person."
        }
    }

    }

?>