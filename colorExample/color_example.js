/**
 * @file
 * Javascript for Color Example.
 */

/**
 * Provide a farbtastic colorpicker for the fancier widget.
 */
(function ($) {
  Drupal.behaviors.color_example_colorpicker = {
    attach: function(context) {
      $(".edit-field-example-colorpicker").live("focus", function (event) {
        var edit_field = this;
        var picker = $(this).closest('tr').find(".field-example-colorpicker");

        // Hide all color pickers except this one.
        $(".field-example-colorpicker").hide();
        $(picker).show();
        $.farbtastic(picker, function(color) {
          edit_field_value = color;
        }).setColor(edit_field.value);
      });
    }
  }
})(jQuery);