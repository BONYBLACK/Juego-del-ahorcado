<?php
header("Access-Control-Allow-Origin: *");
$token="";
if (isset($_GET["token"])){$token=$_GET["token"];}
if ($token==""|| $token!="123456789"){
$datos["error"]="peticion incorrecta";
echo json_encode($datos);
return;
}

$servername = "localhost";
$username = "root";
$password = "";
$db = "ahorcado";

$conn = new mysqli($servername,$username,$password,$db);

$sql = "SELECT * FROM frases";
$result = $conn->query($sql);
$datos= array();
$datos["error"]="0";

if ($result->num_rows>0) {
while ($row=$result->fetch_assoc())
{
$datos["palabras"][]=array("clave"=>$row["clave"],"palabra"=>$row["palabra"],"pista"=>$row["pista"]);

}

}
else
{
$datos["error"]="archivo vacio";
}
$conn->close();
echo json_encode($datos);

?>