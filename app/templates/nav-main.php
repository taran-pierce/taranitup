<?php
  # template variables
  $current_page_span = '<span class="sr-only">(current)</span>'
?>
<header>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Taran it up</a>
      </div>
      <div class="collapse navbar-collapse" id="main-nav">
        <ul class="nav navbar-nav">
          <!--
          <li>
            <a <?php print($active_link == "test" ? "class='active'" : "") ?> href="/test.php">Test<?php print($active_link == "test" ? $current_page_span : "") ?></a>
          </li>
          -->
        </ul>
      </div>
    </div>
  </nav>
</header>
