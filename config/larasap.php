<?php

return [

    'telegram' => [
        'api_token' => '6821938209:AAHyUd_ZcVEyBs4EAhC2iUHRI4znhgqvumM',
        'bot_username' => '@sharkinoliveBot',
        'channel_username' => '@sharkinoCom', // Channel username to send message
        'channel_signature' => '', // This will be assigned in the footer of message
        'proxy' => false,   // True => Proxy is On | False => Proxy Off
    
// @sharkinoliveBot
        // 'api_token' => '1694931109:AAGtcIbYKtn3djxs4UglD08LhtscBUg_XEk',
        // 'bot_username' => '@sharkinoBot',
        // 'channel_username' => '@testshark1', // Channel username to send message
        // 'channel_signature' => '', // This will be assigned in the footer of message
        // 'proxy' => false,   // True => Proxy is On | False => Proxy Off
    ],
    'twitter' => [
        'consurmer_key' => '',
        'consurmer_secret' => '',
        'access_token' => '',
        'access_token_secret' => ''
    ],
    'facebook' => [
        'app_id' => '755777311784924',
        'app_secret' => '4d330dbc28393ca1dc1af9ec57c509b5',
        'default_graph_version' => 'v10.0',
        'page_access_token' => 'EAAKvYB4yv9wBANhJZCnPTVuSrexUCxYQP4PYojagLbomA52nVIIlQs52sUj6GBWrwxvbTAfdRQMZAMpBQMOUcnZADcFrYegrEHX8q11Cdh75cu1qZACqZCr9ZApCsM7Bdvuifi3hPFFIzsdxZC3Hwko6GdHWSIep39r3BUlobcF5ZA9GsThXrBl0wzzWbFylaZC5OfMh8nZCUEjyGukO3pOx6SZCiy3VGFIzGZAF4GDXUMr3rn5EE7fBDrCHLLre106FRscZD'
    ],
    // Set Proxy for Servers that can not Access Social Networks due to Sanctions or ...
    'proxy' => [
        'type' => '',   // 7 for Socks5
        'hostname' => '', // localhost
        'port' => '' , // 9050
        'username' => '', // Optional
        'password' => '', // Optional
    ]
];
