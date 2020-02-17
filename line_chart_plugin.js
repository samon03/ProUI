    $(function() {
        // Instantiate $.blueberryChart
        $('.bChart').blueberryChart({
            chartData: [
                [38, 40, 32, 40, 35, 40, 55, 50, 65, 70, 75, 80],
                [20, 15, 17, 13, 19, 22, 25, 30, 25, 28, 30, 35]
            ],
            chartLables: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            showLines: true,
            showDots: true,
            lineColors: ['#FFFFFF', '#555555']
        });
    });

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();