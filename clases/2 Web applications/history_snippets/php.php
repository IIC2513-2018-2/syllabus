<html>
<head>
<title>Old School PHP</title>
</head><br>
<body><br><h1>List of Users:</h1><br>
<ul><br>
<?php<br>
mysql_connect("dbhost", "dbuser", "dbpass");<br>
mysql_select_db("dbname");<br>
$query = mysql_query("SELECT * FROM users");<br>
while($row = mysql_fetch_assoc($query)){<br>
echo '<li>'.$row['username'].'</li>';<br>
}<br>
?><br>
</ul><br>
</body><br>
</html>