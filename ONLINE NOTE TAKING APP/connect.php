<?php
    echo "Welcome to the stage where we are ready to get connected to a database";

    /* ways to connect to a mysql database
    1. MySQLi extention 
    2. PDO
    */

    // connecting to the database
    $servername = "localhost";
    $username = "root";
    $password = "";
    
    // create a connection 
    $conn = mysqli_connect($servername, $username, $password);

    echo "connection was successful";
?>