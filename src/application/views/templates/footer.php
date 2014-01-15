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



    </body>
</html>