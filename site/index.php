<!doctype html>
<html lang="en-US">
  <?php include_once('templates/head.php'); ?>
  <body>
    <!--[if IE]>
      <div class="alert alert-warning">
        You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
      </div>
    <![endif]-->
  <?php include_once('templates/header.php'); ?>

    <div class="wrap container-fluid p-0" role="document">
      <div class="content row no-gutters">

        <main id="main" class="col-xs-12 col-md-9 main">
          <?php include_once('templates/map.php'); ?>
        </main><!-- /.main -->

        <section id="actions" class="col-xs-12 col-md-3 p-2 pt-4">
          <?php include_once('templates/actions.php'); ?>
        </section>

      </div><!-- /.content -->
    </div><!-- /.wrap -->

  <?php include_once('templates/footer.php'); ?>

  <?php include_once('templates/scripts.php'); ?>

 </body>
</html>