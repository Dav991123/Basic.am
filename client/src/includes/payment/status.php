<?php

session_start();

$language = $_COOKIE["cookie_language"];

if (isset($_COOKIE['cookie_amount']) && isset($_COOKIE['cookie_orderNumber']) && isset($_GET["orderId"])) {

    $amount = $_COOKIE["cookie_amount"];
    $orderNumber = $_COOKIE["cookie_orderNumber"];
    $orderId = ( isset($_GET["orderId"])) ? trim ($_GET["orderId"]) : '';

    if($orderId){

    $curl = curl_init();

    $url="https://ipay.arca.am/payment/rest/getOrderStatusExtended.do?userName=27533072_api&password=Basic@659988&orderId=".$orderId."&orderNumber=". $orderNumber ."&amount=".$amount."&currency=051";

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HEADER, 0);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $content = curl_exec($curl);

    //var_dump(json_decode($content, true));
    //$content = file_get_contents($url);
    //var_dump(json_decode($content, true))

    $json = json_decode($content, true);

    if($json["paymentAmountInfo"]["paymentState"]=="DEPOSITED"){

        header("Location:https://it-center.am/?lang=".$language."#modalpaymentsuccess");
        $ curl https://books.zoho.com/api/v3/customerpayments?organization_id=10234695
        -X POST
        -H "Authorization: Zoho-authtoken ba4604e8e433g9c892e360d53463oec5"
        -H "Content-Type: application/x-www-form-urlencoded;charset=UTF-8"
        -F 'JSONString="{
            "customer_id": "903000000000099",
            "payment_mode": "cash",
            "amount": 450,
            "date": "2016-06-05",
            "reference_number": "INV-384",
            "description": "Payment has been added to INV-384",
            "invoices": [
                {
                    "invoice_id": "90300000079426",
                    "amount_applied": 450
                }
            ],
            "exchange_rate": 1,
            "bank_charges": 10,
            "custom_fields": [
                {
                    "label": "label",
                    "value": 129890
                }
            ],
            "invoice_id": "90300000079426",
            "amount_applied": 450,
            "tax_amount_withheld": 0,
            "account_id": " ",
            "contact_persons": [
                "982000000870911",
                "982000000870915"
            ]
        }"'

    } else{

        header("Location:https://it-center.am/?lang=".$language."#modalpaymentfailure");

    }

    curl_close($curl);

    }
}

else{

    header("Location:https://it-center.am/?lang=".$language);
    exit;

}


?>