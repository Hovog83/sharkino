<!DOCTYPE html>
<html>
	<head>
		<title>SharKino</title>
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-R8Y2BW4C28"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'G-R8Y2BW4C28');
		</script>
	</head>
<body>
	<style type="text/css" media="screen">
		html{
			background:#020c17;
			background-repeat: no-repeat;
			background-blend-mode: overlay;
			background-size: cover;
		}
				*{
					margin:0!important;
					padding:0!important;
				}
		         iframe{
		         	background: #15c092;
		 	         height:480px;
	 	             margin: 5px auto!important;
					 padding:0!important;
		         }
                 #box{
		         	background: #15c092;
         	         height:490px;
                 }
	@media only screen and (max-width: 900px) {
		        iframe{
			         height:250px;
		        }
		        #box{
			         height:260px;
		        }
	}
		.boxlink{
			width: 90%;
			margin: 20px auto!important;
			display: flex;
		}
		.cil3{
	width: 200px;
	max-width: 100%;
	margin: 0 auto!important;
		}
		.cil{
			width: 100%;
			max-width: 100%;
		}
		img{
			width: 100%;
		}
		h1{
		    text-align: center;
		    color: #fff;
		    margin: 15px!important;
		    font-family: sans-serif;
		    font-size: 2.5em;
		}
		.item{
			margin: 20px auto!important;
			color: #fff;
			font-family: 'Dosis', sans-serif;
			display: inline-block;
			text-align: center;
			backface-visibility: hidden;
			transition: transform .5s ease;
			-webkit-transition: -webkit-transform .5s ease;
			text-transform: uppercase;
			    text-decoration: none;

			font-family: Dosis,sans-serif!important;
			    color: #abb7c4!important;
			    font-weight: 700!important;
			    text-transform: uppercase!important;
			    background-color: #15c394!important;
			    color: #fff!important;
			    padding: 13px 25px!important;
			    -webkit-border-radius: 5px!important;
			    -moz-border-radius: 5px!important;
			    border-radius: 5px!important;
				height: 2em;
			    width: 90%;
			    font-size: 40px!important;
			    vertical-align: middle;
			    vertical-align: super;
			    line-height: 2em;
		}
	</style>
	<div class="boxlink">
		<div class="cil3"><a href="/"><img class="logo" src="/assets/front/images/logo1.png?v=1" alt="" width="125"></a></div>
	</div>

	<div id="box">
		<iframe src="{{$movie->getIframe[0]->iframe_url}}"  width="100%"
		                            frameBorder="0"
		                            allowFullScreen></iframe>
	    <div class="boxlink">
	    	<div class="cil"><h1 style="text-align: center;color: #fff">{{$movie->title_ru}} {{$movie->title_orig}}</h1></div>
	    </div>
	    <div class="boxlink" style="display: grid;margin-top: 200px!important"> 
	    	<a class="item" href="https://sharkino.com/films/{{$movie->id}}">Перейти на полную версию</a>
	    	<a class="item" href="https://live.sharkino.com">Смотреть Live TV онлайн</a>
	    </div>
	</div>

	<script src="https://weblion777.github.io/hdvb.js" async></script>
</body>
</html>