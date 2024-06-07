<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Common\Movies;
use Toolkito\Larasap\SendTo;

class ApostCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:apost';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
      $this->apost();
    }

    public function apost()
    {
            $value = Movies::where("type","movie")->where("isapost",0)->orderBy("popularity","desc")->first();

            $text = "‼️ ".$value->title_ru." (".$value->year.") ‼️ \n \n 📍 ".$value->plot_ru."📍 👍 ";
            
            $value->isapost = 1;
            $value->save();
            
            $poster = $value->poster;
            
            try {

             SendTo::Telegram(
                $text, // Photo caption (Optional)
                [
                    'type' => 'photo', // Message type (Required)
                    'file' => $poster, // Audio url (Required) 

                ],
                [
                [
                    [
                        'text' => 'Смотреть',
                        'url' => 'https://sharkino.com/telegram/'.$value->id
                    ]
                ],
            ]
            );      
            } catch (\Exception $e) {
               
                $poster = str_replace("/w300/", "/w500/", $value->poster);
                  SendTo::Telegram(
                        $text, // Photo caption (Optional)
                        [
                            'type' => 'photo', // Message type (Required)
                            'file' => $poster, // Audio url (Required) 

                        ],
                        [
                        [
                            [
                                'text' => 'Смотреть',
                                'url' => 'https://sharkino.com/telegram/'.$value->id
                            ]
                        ],
                    ]
                ); 
                
            }            
 

            // $textfb = "‼️".$value->title_ru." (".$value->year.") 👍\n\n 📍".$value->plot_ru."📍\n \n";
            // $textfb .= 'https://sharkino.am/titles/'.$value->id."\n";
            // SendTo::Facebook(
            //     'link',
            //     [
            //         'link' => "https://sharkino.am/titles/".$value->id,
            //         'message' => $textfb,
            //     ]
            // );
    }

}
