<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <script data-ad-client="ca-pub-4030847049088622" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	@if($url  == "file")
        <title>SharKino | Смотреть онлайн фильм {{ $movies->title_ru }} / {{ $movies->title_orig }} </title>
        <meta name="description" content="{{ (!empty($movies->plot_ru)) ? $movies->plot_ru : $movies->plot }}">
        <meta name="keywords" content="фильмы, онлайн, Tv-Show, аниме, аниме-сериаль, live tv, sharkino, сериаль,{{ $movies->title_ru }}">
        <meta property="og:url"                content="{{Request::url()}}" />
        <meta property="og:type"               content="фильмы" />
        <meta property="og:title"              content="SharKino | Смотреть онлайн фильм {{ $movies->title_ru }} / {{ $movies->title_orig }}" />
        <meta property="og:description"        content="{{ (!empty($movies->plot_ru)) ? $movies->plot_ru : $movies->plot }}" />
        @if(($movies->poster == "N/A" || $movies->poster == "") && $movies->kinopoisk_id)
              <?php $movies->poster = "https://st.kp.yandex.net/images/film_iphone/iphone360_".$movies->kinopoisk_id.".jpg"; ?>
            @elseif( $movies->poster == "N/A" || $movies->poster =="")
              <?php $movies->poster = "https://sharkino.com/storage/placeholder.png"; ?>
            @else
              <?php 
                  if(filter_var($movies->poster,FILTER_VALIDATE_URL)){
                    $movies->poster = $movies->poster; 
                  }else{
                    $movies->poster = "https://sharkino.com/storage/".$movies->poster; 
                  }
              ?>
            @endif
        
        <meta property="og:image" content="{{$movies->poster}}" />
        <meta name="author" content="Hovo Gasparyan">
	@else
        <title>SharKino | Смотреть  онлайн фильмы, сериаль, Tv-Show, аниме, аниме-сериаль, прямой эфир </title>
        <meta name="description" content="Присоединяйтесь к нам и зовите друзей, чтобы вместе с sharKino отправиться в волшебный и увлекательный мир Смотреть фильмы онлайн! ">
        <meta name="keywords" content="фильмы, онлайн, Tv-Show, аниме, аниме-сериаль, live tv, sharkino, сериаль">
        <meta property="og:url"                content="{{Request::url()}}" />
        <meta property="og:type"               content="фильмы" />
        <meta property="og:title"              content="sharkino | Смотреть  онлайн фильмы, сериаль, Tv-Show, аниме, аниме-сериаль, прямой эфир (live tv)" />
        <meta property="og:description"        content="Присоединяйтесь к нам и зовите друзей, чтобы вместе с sharKino отправиться в волшебный и увлекательный мир Смотреть фильмы онлайн!" />
        <meta name="author" content="Hovo Gasparyan">
	@endif



    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link  rel="stylesheet" href="{{ mix('css/styles.css') }}">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <link  rel="stylesheet" href='http://fonts.googleapis.com/css?family=Dosis:400,700,500|Nunito:300,400,600' />
    <meta name="format-detection" content="telephone-no">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="/assets/favicon_io/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/assets/favicon_io/favicon.ico">
    <meta name="theme-color" content="#ffffff">
        <!-- Global site tag (gtag.js) - Google Analytics -->
    <!-- Google tag (gtag.js) -->
 <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-R8Y2BW4C28"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-R8Y2BW4C28');
    </script>
    <style type="text/css" media="screen">
        @media (max-width : 990px) {
            .col-xs-12{
                float: inherit;
            }    
            .movie-img a{
                max-width: 100%;
                height: auto;
            }
        }
    </style>
    <style type="text/css">.fancybox-margin{margin-right:0px;}</style></head>
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body style="background: #020e18;">
    <div id="root">
        {!! ssr('/js/app-server.js?v=321')->context('movies', $movies)->context('url', $url)->render() !!}
    </div>


<!-- Scripts -->
<!-- <script src="https://weblion777.github.io/hdvb.js" async></script> -->
    <script src="{{ mix('js/index.js') }}"></script>

</body>
</html>
