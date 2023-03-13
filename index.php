<?php

/*

Plugin name: Are you paying attention?
Description: Give multiple choice
Version: 1.0
Author: Piotr


*/

if(! defined('ABSPATH')) exit;

class AreYouPayingAttention{
    function __construct(){
        add_action('enqueue_block_assets', array($this, 'adminAssets'));
 }

 function adminAssets(){
    wp_enqueue_script('ournewblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
 }
} 

$areYouPayingAttention = new AreYouPayingAttention();

?>



