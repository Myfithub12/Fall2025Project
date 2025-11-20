<?php

header('Content-Type: text/plain');

if (isset($_GET['username'])) {

    $username = $_GET['username'];
    $password = $_GET['password'];


    echo "Login received! User: " . $username;

} elseif (isset($_GET['new-username'])) {

    $newUsername = $_GET['new-username'];
    $newEmail = $_GET['new-email'];

    echo "Sign Up received! User: " . $newUsername . " | Email: " . $newEmail;

} else {
    echo "No form data received.";
}
?>