<?php
$connection = mysql_connect("localhost","root","");
if(!$connection)
die("no connectivity".mysql_error());
?>

<?php
$db = mysql_select_db("ignitia",$connection);
if(!$db)
die("cannot select database".mysql_error());
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>

<?php
$a = mysql_query("insert into registration (NAME,COLLEGE,COURSE,BRANCH,EMAIL,CONTACT) values ('$_POST[t1]','$_POST[t2]','$_POST[t3]','$_POST[t4]','$_POST[t5]','$_POST[t6]')");


?>
<?php
echo "Thank you for registering " .  $_POST["t1"];
?>
</body>
</html>