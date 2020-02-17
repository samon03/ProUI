    $(function() {
        // Instantiate $.blueberryChart
        $('.bChart').blueberryChart({
            chartData: [
                [40, 45, 50, 64, 64, 70, 50, 60, 70, 84, 95, 90],
                [10, 20, 23, 20, 34, 20, 10, 30, 10, 20, 30, 20]
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