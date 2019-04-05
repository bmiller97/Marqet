<?php
$connect = mysql_connect(“server_name”, “admin_name”, “password”); if (!connect) { die('Connection Failed: ' . mysql_error()); { mysql_select_db(“database_name”, $connect);


$ticket_info = "INSERT INTO _name(name, price, description)VALUES('$_POST[name]','$_POST[price]')",
if(!mysql_query($user_info,$connect))
{
die('Error: ' .mysql_error());
}
echo"Book successfully added to database";

mysql_close($connect);?>
