<?php
// This file is generated. Do not modify it manually.
return array(
	'icon-block-wp' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'riaco-icon-block/riaco-icon-block',
		'version' => '0.1.0',
		'title' => 'Icons',
		'category' => 'widgets',
		'icon' => 'lightbulb',
		'description' => 'Add SVG icons to your content with full control over icon selection, size, color, alignment, and background gradients.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'textAlign' => true
		),
		'attributes' => array(
			'icon' => array(
				'type' => 'string',
				'default' => 'Stars'
			),
			'size' => array(
				'type' => 'number',
				'default' => 24
			),
			'iconColor' => array(
				'type' => 'string'
			),
			'iconBackgroundColor' => array(
				'type' => 'string'
			),
			'iconBackgroundColorGradient' => array(
				'type' => 'string'
			),
			'iconAlign' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'riaco-icon-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
