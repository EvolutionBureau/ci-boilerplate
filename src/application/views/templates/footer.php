<hr>

      <footer>
        <p>&copy; EVB 2014</p>
      </footer>
    </div><!-- /end .container --> 
      
      <?php if($this->config->item('use_minify') == true): ?>
        <script src="/scripts/dist/main.min.js"></script>
      <?php else: ?>
        <script src="/scripts/vendor/jquery/jquery.js" type="text/javascript" charset="utf-8"></script>
        <script src="/scripts/vendor/underscore/underscore.js" type="text/javascript" charset="utf-8"></script>
        <script src="/scripts/vendor/backbone/backbone.js" type="text/javascript" charset="utf-8"></script>
        <script src="/scripts/app/models/SampleModel.js" type="text/javascript" charset="utf-8"></script>
        <script src="/scripts/app/collections/SampleCollection.js" type="text/javascript" charset="utf-8"></script>
        <script src="/scripts/app/views/SampleView.js" type="text/javascript" charset="utf-8"></script>
        <script src="/scripts/app/app.js" type="text/javascript" charset="utf-8"></script>
        <script src="/scripts/main.js" type="text/javascript" charset="utf-8"></script>
      <?php endif; ?>

      <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            appId      : <?= $this->config->item('fb_id') ?>,
            status     : true,
            xfbml      : true
          });
        };

        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "//connect.facebook.net/en_US/all.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
      </script>

      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        // ga('create', 'UA-########-#', 'website.biz');
        ga('send', 'pageview');
      </script>


    </body>
</html>