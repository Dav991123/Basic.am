<?php

session_start();

if (isset($_GET['language']) && isset($_GET['description']) && isset($_GET['amount'])) {
    $language = htmlspecialchars($_GET['language']);
    $description = htmlspecialchars($_GET['description']);
    $amount = htmlspecialchars($_GET['amount']);

    $orderNumber = time();
    $language = filter_var($language, FILTER_SANITIZE_STRING);
    $description = filter_var($description, FILTER_SANITIZE_STRING);
    $amount = filter_var($amount, FILTER_SANITIZE_STRING);

    $returnUrl="https://www.basic.am/payment/status?lang=".$language;
    $description = strtoupper($description);
    //$amount *= (1 + 2 /100);
    setcookie("cookie_amount", $amount, time() + 3600, "/");
    setcookie("cookie_orderNumber", $orderNumber, time() + 3600, "/");


$curl = curl_init();

$url = "https://ipay.arca.am/payment/rest/register.do?userName=27533072_api&password=Basic@659988&returnUrl=".$returnUrl."&orderNumber=". $orderNumber ."&amount=".$amount."00"."&currency=051&language=".$language."&description=".$description;

//$testUrl = "https://ipaytest.arca.am:8445/payment/rest/register.do?userName=converse_test&password=qweasdzxc&returnUrl=".$returnUrl."&orderNumber=". $orderNumber ."&amount=".$amount."00"."&currency=051&language=".$language."&description=".$description;

curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$content = curl_exec($curl);

//var_dump(json_decode($content, true));
//$content = file_get_contents($url);
//var_dump(json_decode($content, true));
//echo($testUrl);

$json = json_decode($content, true);

if($json['errorCode']!=="0"){

    header("Location:https://it-center.am/?lang=".$language."#modalpaymentfailure");

} else{

    header("Location:" .$json['formUrl']);

}

curl_close($curl);

}

else{

header("Location:https://it-center.am/?lang=".$_COOKIE["cookie_language"]."#modalpaymentfailure");
exit;

}

?>
