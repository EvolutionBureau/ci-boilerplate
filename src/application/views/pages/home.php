<!-- Main jumbotron for a primary marketing message or call to action -->
<div class="jumbotron">
      <div class="container">
        <h1>Hello, EVB!</h1>
        <p>This is meant to be a jumping off point for your development.</p>
        <strong>Key Features:</strong>
        <ol>
          <li>"Watch" your CSS and JS and auto-compile <code>node_modules/.bin/grunt</code></li>
          <li>Beautify your JS <code>node_modules/.bin/grunt beautify</code></li>
          <li>Manually compile your CSS <code>node_modules/.bin/grunt styles</code></li>
          <li>Manually compile your JS <code>node_modules/.bin/grunt scripts</code></li>
          <li>Mobile detection.  Your device is a: <?= $deviceType ?></li>
        </ol>

        <strong>Bower</strong>
        <ol>
          <li>First update the component.json file to include dependencies</li>
          <li>Run <code>bower install</code></li>
          <li>The <code>.bowerrc</code> configures what directory bower installs to ("bower-components")</li>
          <li>Manually compile your JS <code>node_modules/.bin/grunt scripts</code></li>
          <li>Update the dependencies and the install path and run <code>bower-installer</code> in the terminal, this will only install the main files, to change which main files you want to install update the “sources” <a href="https://npmjs.org/package/bower-installer" target="_blank">https://npmjs.org/package/bower-installer</a></li>
        </ol>

        <strong>Grunt</strong>
        <ol>
          <li>Update Gruntfile.js to include which files to uglify / minify.</li>
          <li>Update footer.php to include the js files</li>
        </ol>


        <p><a class="btn btn-primary btn-lg">Learn more &raquo;</a></p>
      </div>
    </div>

<div class="container">
  <!-- Example row of columns -->
  <div class="row">
    <div class="col-lg-4">
      <h2>Heading</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><a class="btn btn-default" href="#">View details &raquo;</a></p>
    </div>
    <div class="col-lg-4">
      <h2>Heading</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><a class="btn btn-default" href="#">View details &raquo;</a></p>
   </div>
    <div class="col-lg-4">
      <h2>Heading</h2>
      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      <p><a class="btn btn-default" href="#">View details &raquo;</a></p>
    </div>
  </div>
